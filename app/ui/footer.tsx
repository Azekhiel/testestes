import MediaShare from "./media-share"
import Link from "next/link"

export default function Footer(){
    return (
        <footer className="flex flex-col items-center text-center md:text-left md:items-start md:content-center md:grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 bg-gray-900 text-gray-200 p-6">
            <section className="mb-6 md:mx-auto">
                <h1 className="font-black text-4xl">Spark</h1>
            </section>
            <section className="mb-6 mx-auto">
                <h1>Important links</h1>
                <Link href={"#"}><p>Featured</p></Link>
                <Link href={"#"}><p>Registration</p></Link>
                <Link href={"#"}><p>Login</p></Link>
                
            </section>
            <section className="mb-6 md:mx-auto">
                <h1>Get in touch!</h1>
                <MediaShare />

                
            </section>
        </footer>
    )
}