import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import Image from "next/image";
import Link from "next/link";
import { title_font, paragraph_font } from "@/app/ui/fonts";

export default function Features() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col px-12 md:px-20 lg:px-48 bg-ivory_super_light text-retro_gray">
        {/* Hero Section */}
        <section className="relative flex flex-col justify-center items-center text-center mb-10 lg:py-20 h-[calc(100vh-4rem)]">
          <h1 className={`${title_font.className} text-4xl md:text-6xl font-black mb-4`}>
            Key Features
          </h1>
          <p className={`${paragraph_font.className} text-lg md:text-xl`}>
            Explore the standout features of our datathon event and what makes it unique.
          </p>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl drop-shadow-xl flex flex-col items-center">
            <Image
              src="/feature1.svg"
              alt="Feature 1"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className={`${title_font.className} text-2xl mb-2`}>Data Exploration</h2>
            <p className="text-center">
              Gain insights with real-world data sets and showcase your analytical skills.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl drop-shadow-xl flex flex-col items-center">
            <Image
              src="/feature2.svg"
              alt="Feature 2"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className={`${title_font.className} text-2xl mb-2`}>Workshops & Mentorship</h2>
            <p className="text-center">
              Learn from industry experts through exclusive workshops and mentorship.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl drop-shadow-xl flex flex-col items-center">
            <Image
              src="/feature3.svg"
              alt="Feature 3"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className={`${title_font.className} text-2xl mb-2`}>Exciting Prizes</h2>
            <p className="text-center">
              Compete for cash prizes, certifications, and recognition in the data community.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <h2 className={`${title_font.className} text-3xl mb-4`}>Join the Datathon!</h2>
          <p className={`${paragraph_font.className} text-lg mb-6`}>
            Don’t miss the chance to showcase your talent and network with data enthusiasts.
          </p>
          <Link href="/registration">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
              Register Now
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
