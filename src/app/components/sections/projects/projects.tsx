'use client'

import React, { useState, useCallback, useMemo } from 'react';
import styles from '../../../styles/projects.module.scss';
import { ModelProjects } from './modelProjects';
import { NostalgicWorld, HBank, Marcio, JMBank, Pecto, FireEmblem, Lony } from '../../../../data/modalInfo';
import { NostalgicWorldImg, HBankImg, MarcioImg, JMBankImg, PectoImg, FireEmblemImg, LonyImg } from '../../../../../public/assets/images/projects/projectImages';
import { ProjectModal } from '../../UI/projectModal';
import { ModalInfo } from '../../../../types/modal';

const projects = [
    { image: NostalgicWorldImg, title: 'Nostalgic World', modalContent: NostalgicWorld },
    { image: HBankImg, title: 'H-Bank', modalContent: HBank },
    { image: MarcioImg, title: 'Márcio - Motorista Especial', modalContent: Marcio },
    { image: JMBankImg, title: 'JM Bank', modalContent: JMBank },
    { image: PectoImg, title: 'Pecto', modalContent: Pecto },
    { image: FireEmblemImg, title: 'FE Awakening - Conversations', modalContent: FireEmblem },
    { image: LonyImg, title: 'Lony - Ladies of New York', modalContent: Lony }
]

export const Projects: React.FC = () => {
    const [selectedModal, setSelectedModal] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const openModal = useCallback((modalContent?: ModalInfo) => {
        if (modalContent) {
            const index = projects.findIndex(project => project.modalContent && project.modalContent.includes(modalContent));
            setSelectedModal(index);
            setIsVisible(true);
        }
    }, [])

    const closeModal = useCallback(() => {
        setIsVisible(false);

        setTimeout(() => {
            setSelectedModal(null);
        }, 300)
    }, []);

    const selectedProject = useMemo(() => (selectedModal !== null ? projects[selectedModal] : null), [selectedModal])

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2>Meus Projetos</h2>
            <div className={styles.projectsDiv}>
                {projects.map((project, index) => (
                    <ModelProjects
                        key={index}
                        image={project.image}
                        title={project.title}
                        modalContent={project.modalContent ? project.modalContent[0] : undefined}
                        onClick={openModal}
                    />
                ))}
            </div>

            {selectedProject && selectedProject.modalContent && (
                <ProjectModal
                    modal={selectedProject.modalContent}
                    closeModal={closeModal}
                    isVisible={isVisible}
                />
            )}
        </section>
    )
}