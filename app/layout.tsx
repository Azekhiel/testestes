// import { Html } from "next/document"
import "./globals.css"
import { paragraph_font } from "@/app/ui/fonts"
import { SessionProvider } from "next-auth/react"
import Providers from "./providers"

export default function RootLayout({ children }: {children: React.ReactNode}){
	return(
		<html lang="en">
			<body className={`${paragraph_font.className} antialiased max-w-full `}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}