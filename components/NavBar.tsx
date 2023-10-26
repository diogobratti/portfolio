import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex-row light-bg justify-space">
            <div className="logo white">
                <Link href="/">Diogo Bratti</Link>
            </div>

            <ul className="flex-row white">
                <li className="green">
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