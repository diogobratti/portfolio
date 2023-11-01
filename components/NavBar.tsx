import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="py-4 px-8 md:px-20 flex flex-row bg-zinc-800 justify-between">
            <div className="text-white text-2xl font-semibold">
                <Link href="/">Diogo Bratti</Link>
            </div>

            <ul className="hidden md:flex flex-row text-white ml-12 text-sm font-semibold list-none">
                <li className="text-green-500">
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/#whoami">Who Am I</Link>
                </li>
                <li>
                    <Link href="/#whatdoido">What Do I Do</Link>
                </li>
                <li>
                    <Link href="/#skill">Skills</Link>
                </li>
                <li>
                    <Link href="/#portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/#resume">Resum&#233;</Link>
                </li>
                <li>
                    <Link href="/#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}