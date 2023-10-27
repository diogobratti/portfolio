import React from "react";
import Image from "next/image";

export default function Portfolio() {

    return (
        <section id="portfolio" className="dark-bg about-text flex-column">
            <h3 className="green">Portfolio</h3>
            <div className="flex-row">
                <PortfolioCard title="iCare" icon="/icons/icare.png" description="" technology="React Native and Firebase" link="https://github.com/diogobratti/iCare-app" />
                <PortfolioCard title="Motorcom" icon="/icons/motorcom.png" description="" technology="Flutter and WebRTC" link="https://github.com/diogobratti/motorcom" />
                <PortfolioCard title="Certidões" icon="/icons/pjsc-v1.png" description="" technology="Laravel (PHP) and MySQL" link="https://certidoes.tjsc.jus.br/" />
            </div>
        </section>
    )
}
type Props = {
    title: string,
    icon: string,
    description: string,
    technology: string,
    link: string
}

function PortfolioCard({ title, icon, description, technology, link }: Props) {
    return (
        <div className="dark-bg about-card flex-column justify-center align-center">
            <div className="flex-row justify-space">
                <p>{title}</p>
                <Image src={icon} width={50} height={50} alt={title} className="portfolio-image" />
            </div>
        </div>
    )
}