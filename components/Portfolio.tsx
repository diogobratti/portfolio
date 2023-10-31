import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {

    return (
        <section id="portfolio" className="flex flex-col grow items-center p-20">
            <h3 className="text-green-400 mb-4 font-medium text-2xl italic text-justify">Portfolio</h3>
            <div className="flex flex-row items-center">
                <PortfolioCard title="iCare" icon="/icons/icare.png" docAndCodeCanBeShown={true} description='With help of 2 parteners, I have built a react native app (5000+ Downloads) called "iCare" to help elder people find someone to take care of them.' technology="React Native and Firebase" website="" github="https://github.com/diogobratti/iCare-app" playstore="https://play.google.com/store/apps/details?id=br.com.icare.familia&hl=en" />
                <PortfolioCard title="Motorcom" icon="/icons/motorcom.png" description='This is an audio chat app that does not need Internet connection. It is suppoused to be used when a couple is traveling by bike.' docAndCodeCanBeShown={true} technology="Flutter and WebRTC" website="" github="https://github.com/diogobratti/motorcom" playstore="https://play.google.com/store/apps/details?id=com.dbratti.motorcom" />
                <PortfolioCard title="Certidões" icon="/icons/pjsc-v1.png" description='I have worked at this one as manager and as engineer. It is a Certificate Emission and Conference System for my State Court.' docAndCodeCanBeShown={false} technology="Laravel (PHP) and MySQL" website="https://certidoes.tjsc.jus.br/" github="" playstore="" />
            </div>
        </section>
    )
}
type Props = {
    title: string,
    icon: string,
    description: string,
    technology: string,
    website: string,
    github: string,
    playstore: string,
    docAndCodeCanBeShown: boolean,
}

function PortfolioCard({ title, icon, description, technology, website, github, playstore, docAndCodeCanBeShown }: Props) {
    return (
        <div className="p-4 mt-2 rounded-lg flex flex-col grow items-center justify-center content-center">
            <div className="bg-zinc-800 p-4 mt-2 rounded-lg flex flex-col grow items-center justify-center content-center">
                <Image src={icon} width={50} height={50} alt={title} className="bg-white rounded-lg" />
                <h3 className="text-white text-2xl font-semibold mb-1">{title}</h3>
                <p className="text-white text-sm font-medium mb-4 text-center">{description}</p>
                {/* {(docAndCodeCanBeShown ?
                <p className="text-neutral-500 pointer">Access diagrams e project details <span>here</span>.</p> :
                <p className="text-neutral-500">Contractor have not authorized to show the project documentation and code.</p>)} */}
                <p className="text-neutral-500 text-sm font-medium mb-4 text-center">Technologies used: {technology}</p>
                <div className="flex flex-row items-center justify-evenly cursor-pointer">
                    {(website != "" ? <a href={website} target="_blank" rel="noreferrer" className="no-underline decoration-inherit"><Image src="/icons/website-click.svg" width={24} height={24} alt="website" /></a> : <></>)}
                    {(github != "" ? <a href={github} target="_blank" rel="noreferrer" className="no-underline decoration-inherit"><Image src="/icons/github.svg" width={24} height={24} alt="github-icon" /></a> : <></>)}
                    {(playstore != "" ? <a href={playstore} target="_blank" rel="noreferrer" className="no-underline decoration-inherit"><Image src="/icons/playstore.svg" width={24} height={24} alt="play store" /></a> : <></>)}

                </div>
            </div>
        </div>
    )
}