import React from "react";
import Image, { StaticImageData } from "next/image";
import WhoAmI from "./WhoAmI";
import WhatDoIDo from "./WhatDoIDo";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="p-20">
            <div className="flex flex-row items-center">
                <div className="flex flex-col grow ">
                    <AboutCard
                        title="Skills"
                        icon="/icons/code.svg"
                        description="Check out SOME of my technical skills."
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
                        icon="/icons/document.svg"
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
                <div className="flex flex-col content-between flex-2">
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
            <div className="bg-zinc-800 w-11/12 p-8 mt-2 rounded-lg cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    <h3 className="text-green-400 text-2xl font-semibold mb-1">{title}</h3>
                    <Image src={icon} width={28} height={28} alt={title} />
                </div>
                <p className="text-white text-sm font-medium mb-4">{description}</p>
                {(projects > 0 ? <span className="text-neutral-500 text-sm font-semibold uppercase underline">{projects.toString()} projects</span> : <></>)}
            </div>
        </Link>
    )
}