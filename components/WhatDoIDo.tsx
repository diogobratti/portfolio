import React from "react";
import Image from "next/image";

export default function WhatDoIDo() {

    return (
        <div id="whatdoido">
            <h3 className="text-green-400 mb-4 font-medium text-2xl italic text-justify">What Do I Do</h3>
            <h1 className="text-white mt-4 mb-8 font-medium text-4xl">Web Systems and Mobile Apps</h1>
            <h3 className="text-white mb-4 font-medium text-2xl italic text-justify">Android and iOS Apps and Javascript or PHP based Web systems</h3>
            <p className="text-neutral-500 font-medium text-base text-justify">Development of mobile Apps using Flutter and React Native, which means Android and iOS Smartphones and Tablets. Complete Web systems, being able to use a wide variety of technologies, including your legacy system. </p>
            <div className="flex flex-row items-center justify-evenly mt-4">
                <Image src="/icons/icon-xcode.png" width={100} height={100} alt="apple store" />
                <Image src="/icons/playstore.png" width={100} height={100} alt="play store" />
                <Image src="/icons/chrome.png" width={100} height={100} alt="chrome browser" />
                <Image src="/icons/firefox.png" width={100} height={100} alt="firefox broser" />
                <Image src="/icons/edge.png" width={100} height={100} objectFit="cover" alt="edge browser" />
            </div>
        </div>
    )
}