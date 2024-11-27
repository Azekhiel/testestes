'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { createTeam } from '@/app/actions/team'
import { TeamActionResponse, TeamDetails } from '@/app/types/team'

const initialState: TeamActionResponse<TeamDetails> = {}

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white px-4 py-2 rounded ml-2 disabled:opacity-50"
    >
      {pending ? 'Creating...' : 'Create Team'}
    </button>
  )
}

export function CreateTeamForm({ userId }: { userId: string }) {
  const [state, formAction] = useFormState(createTeam, initialState)

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="creatorId" value={userId} />
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Team Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <SubmitButton />

      {state.error && (
        <p className="text-red-500 text-sm mt-2">{state.error}</p>
      )}

      {state.data && (
        <p className="text-green-500 text-sm mt-2">
          Team created successfully! Team code: {state.data.code}
        </p>
      )}
    </form>
  )
}