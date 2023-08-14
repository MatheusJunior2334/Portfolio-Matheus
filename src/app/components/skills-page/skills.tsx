import styles from './skills.module.scss';

//Importação das Tecnologias
import { HTML, CSS, Sass, JavaScript, TypeScript, ReactJs, NextJs, MySQL, JAVA, Git, AWS } from './technologies';

export function Skills() {
    return (
        <section id="skills" className={styles.skillsSection}>
            <h2>Tecnologias que estudo</h2>
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