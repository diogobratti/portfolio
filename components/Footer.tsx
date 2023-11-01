import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-zinc-800 flex flex-col md:flex-row justify-between py-8 px-8">
            <span className="text-white text-base font-medium uppercase text-center order-2 md:order-1">Copyright © {year} <Link href="/">Bratti</Link> - All rights reserved.</span>
            <ul className="flex flex-row list-none ml-4 justify-evenly mb-4 md:mb-0 order-1ss">
                <li>
                    <a href="https://www.instagram.com/dbratti" target="_blank" rel="noreferrer" className="no-underline decoration-inherit">
                        <Image src="/icons/instagram.svg" width={24} height={24} alt="instagram-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/diogo-bratti" target="_blank" rel="noreferrer" className="no-underline decoration-inherit">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/diogobratti" target="_blank" rel="noreferrer" className="no-underline decoration-inherit">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}