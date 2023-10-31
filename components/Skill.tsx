import React from "react";
import Image from "next/image";

export default function Skill() {

    return (
        <section id="skill" className="about-text flex-column">
            <h3 className="text-green-400">Skills</h3>
            <div className="flex-row">
                <SkillCard title="NodeJS" icon="/icons/nodejs.png" width={200} />
                <SkillCard title="React" icon="/icons/react.png" width={100} />
                <SkillCard title="Laravel" icon="/icons/laravel.png" width={100} />
                <SkillCard title="PHP" icon="/icons/php.jpeg" width={100} />
                <SkillCard title="JavaScript" icon="/icons/javascript.png" width={100} />
                <SkillCard title="WordPress" icon="/icons/icon-wordpress.png" width={100} />
            </div>
            <div className="flex-row">
                <SkillCard title="UML" icon="/icons/uml.jpeg" width={138} />
                <SkillCard title="MySQL" icon="/icons/mysql.jpeg" width={100} />
                <SkillCard title="Oracle" icon="/icons/oracle.png" width={178} />
                <SkillCard title="React Native" icon="/icons/react-native.png" width={86} />
                <SkillCard title="Flutter" icon="/icons/flutter.jpeg" width={212} />
            </div>
            <h3 className="text-green-400">Differentials</h3>
            <ul className="text-white">
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
    width: number
}

function SkillCard({ title, icon, width }: Props) {
    return (
        <div className="about-card flex-column justify-center align-center">
            <div className="flex-row justify-space">
                <Image src={icon} width={width} height={100} alt={title} className="skill-image" />
            </div>
        </div>
    )
}