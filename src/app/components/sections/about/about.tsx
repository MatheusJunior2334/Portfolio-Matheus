'use client'

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../app/contexts/languageContext';
import styles from '../../../styles/about.module.scss';

export function About() {
    const { translations } = useLanguage();
    const [age, setAge] = useState<number>(20);

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
                    <video autoPlay loop muted controls={false}>
                        <source src="/assets/video/DunbanVideo.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}