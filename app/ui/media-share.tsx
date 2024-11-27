'use client';
import Link from "next/link";
import Image from "next/image";

import {
    InstagramIcon,
    WhatsappShareButton,
    WhatsappIcon,
    // EmailShareButton,
    EmailIcon,
  } from 'next-share';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mediaURL = {
    discord: "#",
    instagram: "https://instagram.com",
    whatsapp: "#",
}

export default function MediaShare() {
  return (
    <div className="flex">
    <Link
        href= {mediaURL.discord}
        className="mr-2"
    >
        <Image
            src={"/discord_icon.svg"}
            height={32}
            width={32}
            alt="discord icon"
        />
    </Link>
    <Link
        href={mediaURL.instagram}
        className="mr-2"
    >
        <InstagramIcon size={32} round />
    </Link>
    <Link
        href={"mailto:spark.hme.itb@gmail.com"}
        className="mr-2"
    >
        <EmailIcon size={32} round />
    </Link>
    <WhatsappShareButton
        url="#"
        className="mr-0"
    >
        <WhatsappIcon size={32} round className="mr-0"/>
    </WhatsappShareButton>
</div>
  )
}