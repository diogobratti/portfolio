import React from "react";
import Image from "next/image";

export default function WhatDoIDo() {

    return (
        <div className="about-text" id="whatdoido">
            <h3 className="text-green-400">What Do I Do</h3>
            <h1 className="text-white">Web Systems and Mobile Apps</h1>
            <h3 className="text-white">Android and iOS Apps and Javascript or PHP based Web systems</h3>
            <p className="text-neutral-500">Development of mobile Apps using Flutter and React Native, which means Android and iOS Smartphones and Tablets. Complete Web systems, being able to use a wide variety of technologies, including your legacy system. </p>
            <div className="flex-space-evenly">
                <Image src="/icons/icon-xcode.png" width={100} height={100} alt="apple store" />
                <Image src="/icons/playstore.png" width={100} height={100} alt="play store" />
                <Image src="/icons/chrome.png" width={100} height={100} alt="chrome browser" />
                <Image src="/icons/firefox.png" width={100} height={100} alt="firefox broser" />
                <Image src="/icons/edge.png" width={100} height={100} alt="edge browser" />
            </div>
        </div>
    )
}