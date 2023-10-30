import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {

    return (
        <section id="portfolio" className="dark-bg flex-column">
            <div className="about-text">
                <h3 className="green">Portfolio</h3>
            </div>
            <div className="flex-row">
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
        <div className="dark-bg portfolio-card flex-column justify-center align-center">
        <div className="light-bg portfolio-card flex-column justify-center align-center">
            <Image src={icon} width={50} height={50} alt={title} className="portfolio-image" />
            <h3 className="white">{title}</h3>
            <p className="white">{description}</p>
            {/* {(docAndCodeCanBeShown ?
                <p className="gray pointer">Access diagrams e project details <span>here</span>.</p> :
                <p className="gray">Contractor have not authorized to show the project documentation and code.</p>)} */}
            <p className="gray">Technologies used: {technology}</p>
            <div className="flex-row justify-space pointer">
                {(website != "" ? <a href={website} target="_blank" rel="noreferrer"><Image src="/icons/website-click.svg" width={24} height={24} alt="website" /></a> : <></>)}
                {(github != "" ? <a href={github} target="_blank" rel="noreferrer"><Image src="/icons/github.svg" width={24} height={24} alt="github-icon" /></a> : <></>)}
                {(playstore != "" ? <a href={playstore} target="_blank" rel="noreferrer"><Image src="/icons/playstore.svg" width={24} height={24} alt="play store" /></a> : <></>)}

            </div>
        </div>
        </div>
    )
}