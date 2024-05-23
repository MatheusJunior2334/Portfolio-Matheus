'use client'

import React from "react";
import Image from "next/image";
import styles from '../../styles/projectModal.module.scss';
import { GitHubIcon, DeployIcon } from '../../../../public/assets/icons/allIcons';

import { ProjectModalProps } from "../../../types/modal";

import { XIcon } from "../../../../public/assets/icons/xIcon";

//Código principal
export const ProjectModal: React.FC<ProjectModalProps> = ({ modal, closeModal, isVisible }) => {

    //Função para abrir um link numa nova guia
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener noreferrer')
    }

    return (
       <>
            {modal.map((project, index) => (
                //id criada apenas para realizar a função 'handleOutsideClick' do componente 'projects'
                 <div className={`${styles.projectModalContainer} ${isVisible ? styles.modalEnter : styles.modalExit}`} key={index}>
                    <div className={styles.projectModalBackdrop} onClick={closeModal} />

                    <div className={styles.projectModalMain}>
                        <div className={styles.closeModal} onClick={closeModal}>
                            <button>
                                <XIcon />
                            </button>
                        </div>
            
                        {/*Projetos - Imagem*/}
                        <div className={styles.imgProject}>
                            <Image
                                src={project.projectImg}
                                alt={project.projectName}
                                width={1000}
                                height={500}
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
                                <h3>Colaboradores</h3>
            
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
                                                width={400}
                                                height={400}
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
                </div>
            ))}
       </>
    )
}