'use client'

import React, { useState, useEffect } from 'react';
import styles from '../../../styles/projects.module.scss';
import { ModelProjects } from './modelProjects';
import { NostalgicWorld, HBank, Marcio, JMBank, Pecto, FireEmblem, Lony } from '../../../../data/modalInfo';

//Imagens dos projetos
import { NostalgicWorldImg, HBankImg, MarcioImg, JMBankImg, PectoImg, FireEmblemImg, LonyImg } from '../../../../../public/assets/images/projects/projectImages';

import { ProjectModal } from '../../UI/projectModal';
import { ModalInfo } from '../../../../types/modal';

export const Projects: React.FC = () => {

    //Projetos - Imagens e nome
    const projects = [
        { image: NostalgicWorldImg, title: 'Nostalgic World', modalContent: NostalgicWorld },
        { image: HBankImg, title: 'H-Bank', modalContent: HBank },
        { image: MarcioImg, title: 'Márcio - Motorista Especial', modalContent: Marcio },
        { image: JMBankImg, title: 'JM Bank', modalContent: JMBank },
        { image: PectoImg, title: 'Pecto', modalContent: Pecto },
        { image: FireEmblemImg, title: 'FE Awakening - Conversations', modalContent: FireEmblem },
        { image: LonyImg, title: 'Lony - Ladies of New York', modalContent: Lony }
    ]

    //Abrir e fechar modal, código
    const [selectedModal, setSelectedModal] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    //Abrir Modal
    const openModal = (modalContent? : ModalInfo) => {
        if (modalContent) {
            setSelectedModal(projects.findIndex(project => project.modalContent && project.modalContent.includes(modalContent)))
            setIsVisible(true);
        }
    }

    //Fechar Modal
    const closeModal = () => {
        setIsVisible(false);

        setTimeout(() => {
            setSelectedModal(null);
        }, 300)
    }

    //Código principal
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
                        onClick={() => openModal(project.modalContent ? project.modalContent[0] : undefined)}
                    />
                ))}
            </div>

            {/*Modal*/}
            {selectedModal !== null && projects[selectedModal].modalContent ? (
                <ProjectModal
                    modal={projects[selectedModal].modalContent}
                    closeModal={closeModal}
                    isVisible={isVisible}
                />
            ) : null}
        </section>
    )
}