import Image from "next/image"
import Link from "next/link"
export default function IconButton() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={"/SPARK1_logo.svg"} 
        height="150" 
        width="150" 
        alt="Spark Logo" 
        className="h-8 w-auto"/>
      </Link>
    </div>
  )
}