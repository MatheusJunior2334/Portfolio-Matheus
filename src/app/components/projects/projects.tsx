import styles from './projects.module.scss';
import ModelProjects from './modelProjects';

import NostalgicWorldImg from './images/Nostalgic World Image.png';
import HBankImg from './images/H-Bank Image.png';
import MarcioImg from './images/Márcio - Motorista Especial Image.png';
import JMBankImg from './images/JM Bank Image.png';
import PectoImg from './images/Pecto Image.png';

export default function Projects() {

    const projects = [
        { image: NostalgicWorldImg, title: 'Nostalgic World' },
        { image: HBankImg, title: 'H-Bank' },
        { image: MarcioImg, title: 'Márcio - Motorista Especial' },
        { image: JMBankImg, title: 'JM Bank' },
        { image: PectoImg, title: 'Pecto (Demoday)' }
    ]

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2>Meus Projetos</h2>
            <div className={styles.projectsDiv}>
                {projects.map((project, index) => (
                    <ModelProjects
                        key={index}
                        image={project.image}
                        title={project.title} 
                    />
                ))}
            </div>
        </section>
    )
}