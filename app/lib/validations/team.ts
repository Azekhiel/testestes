import { z } from 'zod'
import { MemberType } from '@prisma/client'

export const createTeamSchema = z.object({
  name: z.string()
    .min(1, 'Team name is required')
    .max(100, 'Team name must be less than 100 characters'),
  creatorId: z.string()
})

export const joinTeamSchema = z.object({
  code: z.string()
    .length(6, 'Team code must be exactly 6 characters'),
  memberId: z.string()
})

export const updateTeamSchema = z.object({
  teamId: z.string(),
  adminId: z.string(),
  data: z.object({
    name: z.string()
      .min(1, 'Team name is required')
      .max(100, 'Team name must be less than 100 characters')
      .optional(),
    proposal: z.string().optional(),
    score: z.number()
      .min(0, 'Score must be greater than or equal to 0')
      .max(100, 'Score must be less than or equal to 100')
      .optional()
      .nullable()
  })
})

export const createMemberSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(1, 'Name is required'),
  type: z.enum([MemberType.STUDENT, MemberType.PROFESSIONAL]),
  phone: z.string().min(1, 'Phone number is required'),
  idCardUrl: z.string().url('Invalid ID card URL'),
}).and(
  z.discriminatedUnion('type', [
    z.object({
      type: z.literal(MemberType.STUDENT),
      university: z.string().min(1, 'University is required'),
      major: z.string().min(1, 'Major is required'),
      institution: z.null().optional(),
      profession: z.null().optional(),
    }),
    z.object({
      type: z.literal(MemberType.PROFESSIONAL),
      institution: z.string().min(1, 'Institution is required'),
      profession: z.string().min(1, 'Profession is required'),
      university: z.null().optional(),
      major: z.null().optional(),
    }),
  ])
)