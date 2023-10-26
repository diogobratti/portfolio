import React from "react";
import Image, { StaticImageData } from "next/image";
import WhoAmI from "./WhoAmI";
import WhatDoIDo from "./WhatDoIDo";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex-row">
                <div className="flex-full">
                    <AboutCard
                        title="Skills"
                        icon="/icons/code.svg"
                        description="Check out my technical skills."
                        link="skill"
                        projects={0} />
                    <AboutCard
                        title="Portfolio"
                        icon="/icons/design.svg"
                        description="Some of the projects I have worked on."
                        link="portfolio"
                        projects={3} />
                    <AboutCard
                        title="Resum&#233;"
                        icon="/icons/phone.svg"
                        description="Here you can access my curriculum vitae."
                        link="resume"
                        projects={0} />
                    <AboutCard
                        title="Talk to me"
                        icon="/icons/phone.svg"
                        description="A simple form to contact me."
                        link="contact"
                        projects={0} />
                </div>
                <div className="flex-column-space-between">
                    <WhoAmI />

                    <WhatDoIDo />
                </div>
            </div>

        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    link: string,
    projects: number
}

function AboutCard({ title, icon, description, link, projects }: Props) {
    return (
        <Link href={"/#" + link}>
            <div className="light-bg about-card">
                <div className="flex-row justify-space">
                    <h3 className="green">{title}</h3>
                    <Image src={icon} width={28} height={28} alt={title} />
                </div>
                <p className="white">{description}</p>
                {(projects > 0 ? <span className="gray">{projects.toString()} projects</span> : <></>)}
            </div>
        </Link>
    )
}