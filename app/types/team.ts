import { Member, Team, MemberType } from '@prisma/client'

export type TeamWithMembers = Team & {
  members: Array<Omit<Member, 'team'>>
}

export type MemberDetails = {
  id: string
  email: string
  password: string
  name: string
  type: MemberType
  phone: string
  idCardUrl: string
  isTeamAdmin: boolean
  university?: string | null
  major?: string | null
  institution?: string | null
  profession?: string | null
}

export type TeamDetails = {
  id: string
  name: string
  code: string
  members: MemberDetails[]
  proposal?: string | null
  score?: number | null
  createdAt: Date
  updatedAt: Date
}

export type TeamActionResponse<T> = {
  data?: T
  error?: string
}