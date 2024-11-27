// import Footer from "../ui/footer"
import Navbar from "../ui/navbar"
import Signup from "../ui/signup-form"
import { title_font } from "../ui/fonts"

export default function Page() {
    return (
        <main className="bg-ivory_super_light flex flex-col p-20 h-[calc(100vh)] justify-center items-center z-[-10]">
            <Signup />
        </main>
    )
}