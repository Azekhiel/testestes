import { title_font } from "../ui/fonts"
import Footer from "../ui/footer"
import Navbar from "../ui/navbar"

export default function Page() {
  return (
    <main className="bg-ivory_super_light">
      <Navbar />
      <section className="text-center my-10 mx-16">
        <h2 className="font-extrabold text-lg">Get to Know</h2>
        <h1 className={`${title_font.className} md:text-8xl`}>SPARK</h1>
        <h2 className="text-lg font-extrabold mb-8">Scientific Performance and Research Knowledge</h2>
        <p className=""> SPARK (Scientific Performance and Research Knowledge) is a tech competition platform uniting daring minds to showcase their creativity and drive for technological discovery. Organized by the Himpunan Mahasiswa Elektroteknik ITB (HME ITB) and supported by Ikatan Alumni Elektro ITB (IAE ITB), SPARK pushes the boundaries of research and technology.</p>

      </section>
      <section className="text-center my-8">
        <h2 className={`${title_font.className}  text-3xl md:text-6xl`}>Our Vision</h2>
      </section>
      <section className="text-center">
        <h2 className={`${title_font.className}  text-3xl md:text-6xl`}>Our Purpose</h2>
      </section>
      <Footer />
    </main>
  )
}