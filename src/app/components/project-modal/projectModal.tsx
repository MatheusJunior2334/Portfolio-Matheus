'use client'

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from './projectModal.module.scss';
import { GitHubIcon } from "../skills-page/skills-icons/gitHubIcon";
import { DeployIcon } from "../skills-page/skills-icons/deployIcon";

//X para sair do Modal
import XIcon from "../header/icons/xIcon";

//Declaração das props para adicionar membros da equipe
export interface partyMembers {
    image: string;
    name: string;
    linkedin: string;
}

//Declaração das props e seus tipos
export interface ModalInfo {
    projectImg: StaticImageData;
    projectName: string;
    projectType: string;
    projectRepository: string;
    projectPage: string;
    projectAbout: JSX.Element;
    projectTechnologies: React.ReactNode[];
    projectMembers?: partyMembers[];
}

//Importação das props para facilitar execução do código
export interface ProjectModalProps {
    modal: ModalInfo[];
    closeModal: () => void;
    isVisible: boolean;
}

//Código principal
export const ProjectModal: React.FC<ProjectModalProps> = ({ modal, closeModal, isVisible }) => {

    //Função para abrir um link numa nova guia
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener noreferrer')
    }

    return(
       <div>
            {modal.map((project, index) => (
                //id criada apenas para realizar a função 'handleOutsideClick' do componente 'projects'
                 <div id="modal" className={`${styles.projectModalMain} ${isVisible ? styles.modalEnter : styles.modalExit}`} key={index}>
                    <div className={styles.closeModal} onClick={closeModal}>
                        <XIcon />
                    </div>
        
                    {/*Projetos - Imagem*/}
                    <div className={styles.imgProject}>
                        <Image
                            src={project.projectImg}
                            alt={project.projectName}
                            quality={100}
                            priority
                        />
                    </div>
        
                    {/*Projetos - Nome e links de acesso*/}
                    <div className={styles.accessProject}>
                        <div className={styles.header}>
                            <h2>{project.projectName}</h2>
                            <h4>{project.projectType}</h4>
                        </div>
        
                        <div className={styles.links}>
                            <div className={styles.gitHub} onClick={() => openInNewTab(`${project.projectRepository}`)}>
                                <GitHubIcon />
                                <p>Acessar repositório</p>
                            </div>
                            <div className={styles.deploy} onClick={() => openInNewTab(`${project.projectPage}`)}>
                                <DeployIcon />
                                <p>Visualizar projeto</p>
                            </div>
                        </div>
                    </div>
        
                    {/*Projetos - Sobre*/}
                    <div className={styles.aboutProject}>
                        <h3>Sobre</h3>
                        {project.projectAbout}
                    </div>
        
                    {/*Projetos - Tecnologias utilizadas*/}
                    <div className={styles.technologiesProject}>
                        <h3>Tecnologias</h3>
                        <div className={styles.techIcons}>
                            {project.projectTechnologies.map((technology, index) => (
                                <div key={index}>
                                    {technology}
                                </div>
                            ))}
                        </div>
                    </div>
        
                    {/*Projetos - Membros (Componente opcional)*/}
                    {project.projectMembers && (
                        <div className={styles.partyMembers}>
                            <h3>Membros do Projeto</h3>
        
                            <div className={styles.membersGrid}>
                                {project.projectMembers?.map((member, index) => (
        
                                    <div key={index} title={`Acessar Linkedin de ${member.name}`} onClick={() => {
                                        if (member.linkedin) {
                                            openInNewTab(member.linkedin);
                                        }
                                    }}>
                                        <Image
                                            src={member.image}
                                            alt={`Membro ${index + 1}`}
                                            width={800} //Os tamanhos definidos são para a boa qualidade da imagem
                                            height={800}
                                            quality={100}
                                            priority
                                        />
                                        {project.projectMembers && project.projectMembers[index] && (
                                            <p>{member.name}</p>
                                        )}
        
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
       </div>
    )
}
