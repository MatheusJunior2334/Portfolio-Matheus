import styles from '../../../styles/skills.module.scss';

//Importação das Tecnologias
import { HTML, CSS, Sass, JavaScript, TypeScript, ReactJs, NextJs, MySQL, JAVA, Git, AWS } from '../../UI/technologies';

export function Skills() {
    return (
        <section id="skills" className={styles.skillsSection}>
            <h2>Habilidades</h2>
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
}