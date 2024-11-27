'use server'

import { randomBytes } from 'crypto'
import { revalidatePath } from 'next/cache'
import { createTeamSchema, joinTeamSchema, updateTeamSchema } from '@/app/lib/validations/team'
import { TeamActionResponse, TeamDetails } from '@/app/types/team'
import prisma from '../lib/db'


function generateTeamCode(): string {
  return randomBytes(3).toString('hex').toUpperCase()
}

export async function createTeam(
  prevState: TeamActionResponse<TeamDetails> | null,
  formData: FormData
): Promise<TeamActionResponse<TeamDetails>> {
  const parsed = createTeamSchema.safeParse({
    name: formData.get('name'),
    creatorId: formData.get('creatorId')
  })

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message }
  }

  const { name, creatorId } = parsed.data

  try {
    const team = await prisma.$transaction(async (tx) => {
      const creator = await tx.member.findUnique({
        where: { id: creatorId },
        include: { team: true }
      })

      if (!creator) {
        throw new Error('Member not found')
      }

      if (creator.teamId) {
        throw new Error('You are already in a team')
      }

      let code: string = ""
      let isCodeUnique = false
      
      while (!isCodeUnique) {
        code = generateTeamCode()
        const existingTeam = await tx.team.findUnique({
          where: { code }
        })
        if (!existingTeam) {
          isCodeUnique = true
        }
      }

      const team = await tx.team.create({
        data: {
          name,
          code,
          members: {
            connect: { id: creatorId }
          }
        },
        include: {
          members: true
        }
      })

      await tx.member.update({
        where: { id: creatorId },
        data: { isTeamAdmin: true }
      })

      return team
    })

    revalidatePath('/teams')
    return { data: team as TeamDetails }
  } catch (error) {
    return { 
      error: error instanceof Error ? error.message : 'Failed to create team' 
    }
  }
}

export async function joinTeam(
  prevState: TeamActionResponse<TeamDetails> | null,
  formData: FormData
): Promise<TeamActionResponse<TeamDetails>> {
  const parsed = joinTeamSchema.safeParse({
    code: formData.get('code'),
    memberId: formData.get('memberId')
  })

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message }
  }

  const { code, memberId } = parsed.data

  try {
    const result = await prisma.$transaction(async (tx) => {
      const team = await tx.team.findUnique({
        where: { code },
        include: { members: true }
      })

      if (!team) {
        throw new Error('Invalid team code')
      }

      if (team.members.length >= 3) {
        throw new Error('Team is already full')
      }

      const member = await tx.member.findUnique({
        where: { id: memberId },
        include: { team: true }
      })

      if (!member) {
        throw new Error('Member not found')
      }

      if (member.teamId) {
        throw new Error('You are already in a team')
      }

      await tx.member.update({
        where: { id: memberId },
        data: { teamId: team.id }
      })

      return await tx.team.findUnique({
        where: { id: team.id },
        include: { members: true }
      })
    })

    revalidatePath('/teams')
    return { data: result as TeamDetails }
  } catch (error) {
    return { 
      error: error instanceof Error ? error.message : 'Failed to join team' 
    }
  }
}

export async function leaveTeam(
  memberId: string
): Promise<TeamActionResponse<TeamDetails>> {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const member = await tx.member.findUnique({
        where: { id: memberId },
        include: { team: { include: { members: true } } }
      })

      if (!member?.teamId) {
        throw new Error('You are not in a team')
      }

      if (member.isTeamAdmin && member.team!.members.length > 1) {
        const newAdmin = member.team!.members.find(m => m.id !== memberId)
        if (newAdmin) {
          await tx.member.update({
            where: { id: newAdmin.id },
            data: { isTeamAdmin: true }
          })
        }
      }

      await tx.member.update({
        where: { id: memberId },
        data: { 
          teamId: null,
          isTeamAdmin: false
        }
      })

      return member.team
    })

    revalidatePath('/teams')
    return { data: result as TeamDetails }
  } catch (error) {
    return { 
      error: error instanceof Error ? error.message : 'Failed to leave team' 
    }
  }
}

export async function updateTeam(
  prevState: TeamActionResponse<TeamDetails> | null,
  formData: FormData
): Promise<TeamActionResponse<TeamDetails>> {
  const parsed = updateTeamSchema.safeParse({
    teamId: formData.get('teamId'),
    adminId: formData.get('adminId'),
    data: {
      name: formData.get('name'),
      proposal: formData.get('proposal'),
      score: formData.get('score') ? Number(formData.get('score')) : null
    }
  })

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message }
  }

  const { teamId, adminId, data } = parsed.data

  try {
    const member = await prisma.member.findFirst({
      where: {
        id: adminId,
        teamId: teamId,
        isTeamAdmin: true
      }
    })

    if (!member) {
      throw new Error('Only team admin can update team details')
    }

    const result = await prisma.team.update({
      where: { id: teamId },
      data,
      include: { members: true }
    })

    revalidatePath('/teams')
    return { data: result as TeamDetails }
  } catch (error) {
    return { 
      error: error instanceof Error ? error.message : 'Failed to update team' 
    }
  }
}

export async function regenerateTeamCode(
  teamId: string,
  adminId: string
): Promise<TeamActionResponse<TeamDetails>> {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const member = await tx.member.findFirst({
        where: {
          id: adminId,
          teamId: teamId,
          isTeamAdmin: true
        }
      })

      if (!member) {
        throw new Error('Only team admin can regenerate team code')
      }

      let newCode: string = ""
      let isCodeUnique = false
      
      while (!isCodeUnique) {
        newCode = generateTeamCode()
        const existingTeam = await tx.team.findUnique({
          where: { code: newCode }
        })
        if (!existingTeam) {
          isCodeUnique = true
        }
      }

      return await tx.team.update({
        where: { id: teamId },
        data: { code: newCode },
        include: { members: true }
      })
    })

    revalidatePath('/teams')
    return { data: result as TeamDetails }
  } catch (error) {
    return { 
      error: error instanceof Error ? error.message : 'Failed to regenerate team code' 
    }
  }
}