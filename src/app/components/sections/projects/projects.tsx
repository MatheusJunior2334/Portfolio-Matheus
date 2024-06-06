'use client'

import React, { useState, useCallback, useMemo } from 'react';
import styles from '../../../styles/projects.module.scss';
import { ModelProjects } from './modelProjects';
import { NostalgicWorld, HBank, Marcio, JMBank, Pecto, FireEmblem, Lony } from '../../../data/modalInfo';
import { NostalgicWorldImg, HBankImg, MarcioImg, JMBankImg, PectoImg, FireEmblemImg, LonyImg } from '../../../../../public/assets/images/projects/projectImages';
import { ProjectModal } from '../../UI/projectModal';
import { useLanguage } from '../../../../app/contexts/languageContext';

export const Projects: React.FC = () => {
    const { translations } = useLanguage();
    const [selectedModal, setSelectedModal] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const openModal = useCallback((index: number) => {
        setSelectedModal(index);
        setIsVisible(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsVisible(false);

        setTimeout(() => {
            setSelectedModal(null);
        }, 300)
    }, []);

    const projects = [
        { image: NostalgicWorldImg, title: 'Nostalgic World', modalContent: NostalgicWorld(translations) },
        { image: HBankImg, title: 'H-Bank', modalContent: HBank(translations) },
        { image: MarcioImg, title: 'Márcio - Motorista Especial', modalContent: Marcio(translations) },
        { image: JMBankImg, title: 'JM Bank', modalContent: JMBank(translations) },
        { image: PectoImg, title: 'Pecto', modalContent: Pecto(translations) },
        { image: FireEmblemImg, title: 'FE Awakening - Conversations', modalContent: FireEmblem(translations) },
        { image: LonyImg, title: 'Lony - Ladies of New York', modalContent: Lony(translations) }
    ]

    const selectedProject = useMemo(() => (selectedModal !== null ? projects[selectedModal] : null), [selectedModal])

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2>{translations['home.projects.title']}</h2>
            <div className={styles.projectsDiv}>
                {projects.map((project, index) => (
                    <ModelProjects
                        key={index}
                        image={project.image}
                        title={project.title}
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {selectedProject && selectedProject.modalContent && (
                <ProjectModal
                    modal={selectedProject.modalContent}
                    closeModal={closeModal}
                    isVisible={isVisible}
                    key={selectedModal}
                />
            )}
        </section>
    )
}