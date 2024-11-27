import Link from "next/link";
import Image from "next/image";
import { title_font } from "./fonts";

export default function Sponsors(){ 
  return(
    <section className="flex justify-center mb-12">
      <div className="flex flex-col justify-center text-center">
        <h1 className={`${title_font.className} text-3xl md:text-6xl mb-6 `}>Our partners</h1>
        <div className="flex flex-col md:flex-row justify-items-center md:justify-around drop-shadow-xl *:my-4 w-full md:w-65">
          <div className="flex flex-col items-center rounded-lg p-6 drop-shadow-lg w-full bg-white md:mx-4">
            <Image src={"/Google_Cloud_logo.svg"} alt="gcp logo" width="150" height={"150"} className="h-20"/>
            <Link href="/" className="md:w-60 mx-3">
              <p>
                Google Cloud
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center rounded-lg p-6 drop-shadow-lg w-full bg-white md:mx-4">
            <Image src={"/Bangunindo_logo.png"} alt="Bangunindo logo" width="100" height={"100"} className="h-20 w-auto"/>
            <Link href="/" className="md:w-60 mx-3">
              <p>
                Bangunindo
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}