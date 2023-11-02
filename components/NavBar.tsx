import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="py-4 px-8 md:px-20 flex flex-row bg-zinc-800 justify-between">
            <div className="text-white text-2xl font-semibold">
                <Link href="/">Diogo Bratti</Link>
            </div>

            <ul className="hidden md:flex flex-row text-white ml-12 text-sm font-semibold list-none">
                <li className="text-green-400">
                    <Link href="/">Home</Link>
                </li>
                <li className="ml-8">
                    <Link href="/#whoami">Who Am I</Link>
                </li>
                <li className="ml-8">
                    <Link href="/#whatdoido">What Do I Do</Link>
                </li>
                <li className="ml-8">
                    <Link href="/#skill">Skills</Link>
                </li>
                <li className="ml-8">
                    <Link href="/#portfolio">Portfolio</Link>
                </li>
                <li className="ml-8">
                    <Link href="/documents/CV.pdf">R&#233;sum&#233;</Link>
                </li>
                <li className="ml-8">
                    <Link href="/#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}