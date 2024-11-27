'use client'

// Importing necessary dependencies
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { authenticate } from '@/app/actions/auth';
import LoginButton from "./signin-button";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { title_font } from "./fonts";

// Defining the Login Form Component
export default function Form() {
    // Obtaining form state and action from useFormState hook
    const [formState, action] = useActionState(authenticate, undefined);

    // Handling email verification redirection
    // remember isUsersEmailVerified function in server action
    if (formState?.startsWith('EMAIL_NOT_VERIFIED')) {
        // extract the email
        redirect(`/email/verify/send?email=${formState.split(':')[1]}`)
    }

    // Rendering the Login Form JSX content
    return (
        <div className="space-y-3 items-center w-[32rem]">
            <section className="text-center mb-10">
                <h1 className={`${title_font.className} text-4xl mb-2`}>Sign In</h1>
                <p>Igniter, sign-in with your registered account</p>
            </section>
            <form action={action}>
                <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-1 shadow-xl ">
                    <div className="w-full mb-4">
                        {/* Email Input Field */}
                        <div>
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                        {/* Password Input Field */}
                        <div>
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                            />
                        </div>
                        {/* Displaying form state error */}
                        {formState && (
                            <div className="text-sm text-red-500">
                                {formState}
                            </div>
                        )}
                    </div>
                    {/* Login Button */}
                    <LoginButton />
                    {/* Link to Signup Page */}
                    <div className='mt-4 text-center'>
                        Don&apos;t have an account?&nbsp;
                        <Link className='underline' href='/signup'>Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}