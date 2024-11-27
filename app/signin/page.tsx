import Navbar from "../ui/navbar"; // Import Navbar untuk navigasi
import Link from "next/link"; // Import Link untuk navigasi antar halaman
import { title_font } from "../ui/fonts"; // Font yang digunakan untuk judul

export default function SignIn() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="bg-ivory_super_light min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex flex-col p-8 md:p-20 flex-grow justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-md">
            {/* Sign In Header */}
            <h1 className={`${title_font.className} text-3xl text-center mb-6`}>
              Sign In
            </h1>

            {/* Login Form */}
            <form action="/api/login" method="POST" className="flex flex-col space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter your password"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full"
              >
                Sign In
              </button>
            </form>

            {/* Forgot Password and Register Options */}
            <div className="flex flex-col items-center mt-6">
              <Link
                href="/forgot-password"
                className="text-sm text-yellow-400 hover:underline mb-4"
              >
                Forgot Password?
              </Link>
              <p className="text-sm">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-yellow-400 hover:underline"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
