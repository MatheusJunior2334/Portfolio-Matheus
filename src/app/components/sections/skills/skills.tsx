import React from 'react';
import styles from '../../../styles/skills.module.scss';

//Importação das Tecnologias
import { HTML, CSS, Sass, JavaScript, TypeScript, ReactJs, NextJs, MySQL, JAVA, Git, AWS } from '../../UI/technologies';
import { useLanguage } from '../../../../app/contexts/languageContext';

const Skills: React.FC = React.memo(() => {
    const { translations } = useLanguage();

    return (
        <section id="skills" className={styles.skillsSection}>
            <h2>{translations['home.skills.title']}</h2>
            <div className={styles.technologies}>
                <HTML />
                <CSS />
                <Sass />
                <JavaScript />
                <TypeScript />
                <ReactJs />
                <NextJs />
                <MySQL />
                <JAVA />
                <Git />
                <AWS />
            </div>
        </section>
    )
})

export default Skills