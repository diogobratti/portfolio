import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex-row light-bg">
                <div>
                    <button>Fullstack and Mobile Developer</button>
                    <h1 className="white">A man of focus, </h1>
                    <h1 className="white">commitment and</h1>
                    <h1 className="white">sheer will.</h1>
                    <p className="gray">My objective is add value to your business.</p>
                    <a className="green" href="mailto:dbratti@gmail.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/diogo_1.png" width={361} height={642} alt="bratti"  /> 
            </div>
        </header>
    )
}