'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from '../../../styles/mainSection.module.scss';
import { AnimatedComponent } from "../../animations/animatedComponent";

import Typewriter from "typewriter-effect"; 

import MatheusJuniorHome from '../../../../../public/assets/images/home/MatheusJuniorHome.webp';

import { LiaLinkedin } from "react-icons/lia";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { useLanguage } from "@/app/contexts/languageContext";

export const MainSection = () => {
    const { translations } = useLanguage();
    const [typewriterKey, setTypewriterKey] = useState<number>(0);

    useEffect(() => {
        setTypewriterKey(prevKey => prevKey + 1)
    }, [translations])

    const getTitle = (key: string | string[]): string => {
        if (Array.isArray(key)) {
            return key.join(' ');
        }
        return key;
    }

    return (
        <section id="home" className={styles.mainSection}>
            <div className={styles.textSide}>
                <h2>{translations['home.mainSection.presentation']}</h2>
                <h3>{translations['home.mainSection.developer']}</h3>
                <h3 className={styles.developerText}>
                    <Typewriter
                        key={typewriterKey}
                        options={{
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString(getTitle(translations['home.mainSection.frontEnd']))
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(getTitle(translations['home.mainSection.fullstack']))
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                        }}
                    />
                </h3>

                <div className={styles.socialMediaIcons}>
                    <button title="LinkedIn">
                        <a href="https://www.linkedin.com/in/matheus-júnior" target="_blank" rel="noopener noreferrer">
                            <LiaLinkedin />
                        </a>
                    </button>
                    <button title="GitHub">
                        <a href="https://github.com/MatheusJunior2334" target="_blank" rel="noopener noreferrer">
                            <VscGithub />
                        </a>
                    </button>
                    <button title="E-Mail">
                        <a href="mailto:matheusjuniormjg2334@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MdOutlineMail />
                        </a>
                    </button>
                </div>
            </div>
            <AnimatedComponent opacity={0} initialTranslateX={20} transitionDuration={2} className={styles.imageSide}>
                <Image
                    src={MatheusJuniorHome}
                    alt="Matheus main picture"
                    width={800}
                    height={800}
                    sizes="(max-width: 535px) 90vw, (max-width: 768px) 80vw, 30vw"
                    priority
                    loading="eager"
                />
            </AnimatedComponent>
        </section>
    )
}