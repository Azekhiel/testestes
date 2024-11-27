import Image from "next/image";
import Link from "next/link";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import Sponsors from "./ui/sponsors";
import FAQ from "./ui/faq"
import { paragraph_font, title_font} from "./ui/fonts";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Page(){
  
  return(
    <>
      <Navbar />
      <main className="flex flex-col px-12 md:px-20 lg:px-48 bg-ivory_super_light text-retro_gray">
        {/* this is a hero section */}
        <section className="relative flex flex-col justify-center items-center text-center mb-10 lg:py-20 h-[calc(100vh-4rem)]">
          <div className="flex flex-col justify-center items-center -translate-y-12">
            <div className="mb-8 w-full">
              <h2 className="font-bold text-lg text-left">Spark</h2>
              <h1 className={`${title_font.className} shadow-inner drop-shadow-lg font-black text-center text-[calc(12vw-0.23rem)] md:text-[calc(12vw-1rem)] lg:text-[calc(12vw-2rem)] leading-[1] tracking-widest`}>DATATHON</h1>
              <h2 className="font-bold text-lg text-right">2024</h2>
            </div>

            
            
            <Image
                  src={"/SPARK1_logo.svg"}
                  width={150}
                  height={150}
                  alt="Spark logo"
                  className="h-max md:h-64 mb-8 lg:mb-0 lg:absolute lg:h-96 lg:translate-y-16 hover:scale-110" 
                />
            <p className="font-bold text-lg lg:mt-56">Power-up your potentials. Ignite the briliant ideas and innovations.</p>

          </div>
        </section>

        {/* this is the description of the competition */}
        <section className="mb-12 text-center">
          <h1 className={` ${title_font.className} text-3xl md:text-6xl text-center mb-6`}>Who Are We?</h1>
          <div className="bg-white p-6 rounded-2xl drop-shadow-xl">
            <p className="lg:text-xl mb-4">
              The Spark is a datathon competition initiated by IAE ITB and hosted by HME ITB.
              Ranging from students to professionals, we eager to appreciate their briliant ideas and innovations in data science.
              
            </p>
            <div className="p inset-x-0∂ßß">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full mr-2">
                Learn more!
              </button>
              <Link
                href={"/register"}
              >
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
                  Register!
                </button>
              </Link>
            </div>
            
          </div>
        </section>
        

        {/* this is the introductory of two sponsor's product */}
        {/* gcp ai */}
        <section className="flex justify-center mb-12">
          <div className="flex flex-col justify-center text-center">
            <h1 className={`${title_font.className} text-3xl md:text-6xl leading-2 mb-6`}>Featured</h1>
            {/* google vertex ai */}
            <div className="flex flex-col md:grid md:grid-cols-3 items-center mb-8 bg-white rounded-2xl drop-shadow-xl p-6">
              <div className="flex justify-center">
                <Image
                  src={"/VertexAI_logo.png"}
                  alt="Vertex AI Logo"
                  width={100}
                  height={100}
                  className="mb-4"
                />
              </div>
              <div className="md:col-start-2 md:col-end-4 md:text-right">
                <h2 className={`${title_font.className} text-2xl`}>Vertex AI</h2>
                <p className="md:text-xl mb-4 md:text-justify">Vertex AI is a fully-managed, unified AI development platform for building and using generative AI. Access and utilize Vertex AI Studio, Agent Builder, and 150+ foundation models.</p>
                <Link
                  href={"https://cloud.google.com/vertex-ai?hl=en"}
                >
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
                    Learn more!
                  </button>
                </Link>

              </div>
            </div>
            {/* bangunindo  */}
            <div className="flex flex-col md:grid md:grid-cols-3 items-center bg-white rounded-2xl drop-shadow-xl p-6">
              <div className="flex justify-center">
                <Image
                  src={"/BLIVAI_logo.svg"}
                  alt="Vertex AI Logo"
                  width={100}
                  height={100}
                  className="mb-4 md:col-start-3 md:col-end-4"
                />

              </div>
              <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 md:text-left">
                <h2 className={`text-2xl ${title_font.className}`}>BLIV AI</h2>
                <p className={`text-lg mb-4 ${paragraph_font.className} md:text-justify`}>Bliv AI is an intelligent application that combines artificial intelligence with cutting-edge technology to provide innovative solutions in various contexts. With Bliv AI, users can enjoy various advanced features designed to enhance efficiency, productivity, and convenience.</p>
                <Link
                  href={"https://bangunindo.com/products/bliv"}
                >
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
                    Learn more!
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center mb-12">
      <div className="flex flex-col justify-center text-center">
        <h1 className={`${title_font.className} text-3xl md:text-6xl mb-6 `}>Powered By</h1>
        <div className="flex flex-col md:flex-row justify-items-center md:justify-around drop-shadow-xl *:my-4 w-full md:w-65">
          <div className="flex flex-col items-center rounded-lg p-6 drop-shadow-lg w-full bg-white md:mx-4">
            <Image src={"/IAE_logo.png"} alt="gcp logo" width="100" height={"100"} className="h-20"/>
            <Link href="/" className="md:w-60 mx-3">
              <p>
                IAE
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center rounded-lg p-6 drop-shadow-lg w-full bg-white md:mx-4">
            <Image src={"/HME_logo.png"} alt="Bangunindo logo" width="100" height={"100"} className="h-20 w-auto"/>
            <Link href="/" className="md:w-60 mx-3">
              <p>
                HME
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
          
        {/* this is the acknowledgement and sponsor */}
        <Sponsors />
        {/* FAQ section */}
        <section className="flex flex-col items-center mb-12">
          <h1 className={`${title_font.className} md:text-4xl mb-8`}>Let&apos;s Clear Things Up!</h1>
          <div>
            <FAQ />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}