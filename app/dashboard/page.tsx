'use client'
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useCurrentSession } from "../hooks/use-get-session";

export default function Dashboard() {
  // const { data: session, status } = useSession();
  const { session, status } = useCurrentSession();



  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' }); // Redirect to home page after logout
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <p>Member Area</p>
        <p>
          Signed in as&nbsp;
          {status === 'authenticated' ? session?.user?.name : '...'}
        </p>
        <Link className="underline" href="/member/settings">
          Settings
        </Link>
      </div>
      
      <button
        onClick={handleSignOut}
        disabled={status === 'loading'}
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 disabled:bg-slate-50 disabled:text-slate-500"
      >
        Sign Out {status === 'loading' ? '...' : ''}
      </button>
    </div>
  );
}