import { Roboto } from 'next/font/google';
import { DotGothic16 } from 'next/font/google';
import { Silkscreen } from 'next/font/google';
import { Pixelify_Sans } from 'next/font/google';
// import { Ubuntu_Mono } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';

export const roboto = Roboto({subsets: ['latin'], weight: ['400', '500', '700']});
export const dotgothic16 = DotGothic16({subsets: ['latin'], weight: ['400']});
export const title_font = Silkscreen({subsets: ['latin'], weight: ['400', '700']})
export const pixelifySans = Pixelify_Sans({subsets: ['latin'], weight: ['400', '500', '600', '700']})
export const paragraph_font = JetBrains_Mono({subsets: ['latin'], weight: ['200', '300', '400', '700']})