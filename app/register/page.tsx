import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/ui/navbar"; // Import Navbar
import { title_font, paragraph_font } from "@/app/ui/fonts";

export default function Register() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main className="flex flex-col items-center px-8 md:px-20 lg:px-48 bg-ivory_super_light text-retro_gray">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center my-12 md:my-20">
          <h1 className={`${title_font.className} text-4xl md:text-6xl mb-4`}>Register Now</h1>
          <p className="text-lg md:text-xl font-medium">
            Join the Spark Datathon 2024 and showcase your data science skills.
          </p>
        </section>

        {/* Registration Form Section */}
        <section className="bg-white rounded-2xl drop-shadow-xl p-8 w-full md:w-3/4 lg:w-2/4">
          <h2 className={`${title_font.className} text-2xl mb-6`}>Fill Out the Form</h2>
          <form action="/api/register" method="POST" className="flex flex-col space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
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

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-full mt-4"
            >
              Register Now
            </button>
          </form>
        </section>

        {/* Call-to-Action Section */}
        <section className="flex flex-col items-center text-center my-12">
          <p className="text-lg font-medium mb-4">
            Already registered?{" "}
            <Link href="/login" className="text-yellow-400 hover:underline">
              Log in here
            </Link>
            .
          </p>
        </section>

        {/* Sponsors Section */}
        <section className="w-full flex flex-col items-center text-center mt-12">
          <h2 className={`${title_font.className} text-3xl mb-6`}>Powered By</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center bg-white rounded-lg drop-shadow-md p-6">
              <Image src="/IAE_logo.png" alt="IAE Logo" width={100} height={100} />
              <p className="mt-2 text-lg font-medium">IAE</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg drop-shadow-md p-6">
              <Image src="/HME_logo.png" alt="HME Logo" width={100} height={100} />
              <p className="mt-2 text-lg font-medium">HME</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
