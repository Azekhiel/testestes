'use client';

// Importing the useFormStatus hook
import { useFormStatus } from "react-dom";

// Sign-Up Button Component
export default function LogoutButton() {
    // Using useFormStatus hook to track the status of the form
    const { pending } = useFormStatus();

    // Rendering the Sign-Up button with dynamic styling
    return (
      <button 
        type="submit" 
        disabled={pending} // Disable the button while the form is pending
        aria-busy={pending} // Add ARIA attribute for accessibility
        aria-live="polite" // Notify assistive technology of updates
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {pending ? "Please wait..." : "Sign Out"}
      </button>
    );
}