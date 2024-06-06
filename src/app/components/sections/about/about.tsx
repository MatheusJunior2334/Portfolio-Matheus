'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../../../app/contexts/languageContext';
import styles from '../../../styles/about.module.scss';

import DunbanGif from '../../../../../public/assets/images/home/DunbanGif.gif';

export function About() {
    const { translations } = useLanguage();
    const [age, setAge] = useState<number>(20)

    const calculateAge = (birthDate: string) => {
        try {
            const today = new Date();
            const birth = new Date(birthDate);
            let age = today.getFullYear() - birth.getFullYear();
            const monthDifference = today.getMonth() - birth.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
                age--;
            }
            return age;
        } catch (error) {
            return 20;
        }
    }

    useEffect(() => {
        const birthDate = '2004-03-23';
        const ageCalculated = calculateAge(birthDate);
        setAge(ageCalculated);
    }, [])

    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutLeft}>
                <h2>{translations['home.about.title']}</h2>

                <p>{translations['home.about.text1']} {age} {translations['home.about.text2']}</p>
                </div>
                
                <div className={styles.aboutRight}>
                    <Image
                        src={DunbanGif}
                        alt='Dunban Gif'
                        width={800}
                        height={450}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}