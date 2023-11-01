import React from "react";
import Image from "next/image";

export default function Skill() {

    return (
        <section id="skill" className="flex flex-col items-center grow px-4 mt-12">
            <h3 className="text-green-500 mb-4 font-medium text-2xl italic text-center">Skills</h3>
            <div className="flex flex-row items-center flex-wrap md:content-between">
                <SkillCard title="Flutter" icon="/icons/flutter.jpeg" width={212} mx="mx-4" />
                <SkillCard title="React Native" icon="/icons/react-native.png" width={86} mx="mx-1 md:mx-4" />
                <SkillCard title="NodeJS" icon="/icons/nodejs.png" width={200} mx="mx-4" />
                <SkillCard title="React" icon="/icons/react.png" width={100} mx="mx-4" />
                <SkillCard title="Laravel" icon="/icons/laravel.png" width={100} mx="mx-4" />
                <SkillCard title="PHP" icon="/icons/php.jpeg" width={100} mx="mx-4" />
                <SkillCard title="JavaScript" icon="/icons/javascript.png" width={100} mx="mx-4" />
                <SkillCard title="WordPress" icon="/icons/icon-wordpress.png" width={100} mx="mx-4" />
                <SkillCard title="UML" icon="/icons/uml.jpeg" width={138} mx="mx-4" />
                <SkillCard title="MySQL" icon="/icons/mysql.jpeg" width={100} mx="mx-4" />
                <SkillCard title="Oracle" icon="/icons/oracle.png" width={178} mx="mx-4" />
            </div>
            <h3 className="text-green-500 mt-12 mb-4 font-medium text-2xl italic text-center">Differentials</h3>
            <ul className="text-white text-justify">
                <li>Senior level engineer with formal education.</li>
                <li>I have worked as support, engineer and manager, I do have a complete vision of the process.</li>
                <li>Agile methodology.</li>
                <li>Focused on build value and not only complete the task.</li>
            </ul>
        </section>
    )
}

type Props = {
    title: string,
    icon: string,
    width: number,
    mx: string
}

function SkillCard({ title, icon, width, mx }: Props) {
    return (
        <div className={"rounded-xl flex flex-col mx-4 items-center grow justify-center content-center " + mx}>
            <Image src={icon} width={width} height={100} alt={title} className="" />
        </div>
    )
}