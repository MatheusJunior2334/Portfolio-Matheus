'use client'

import React, { memo, useMemo } from "react";
import Image from "next/image";
import styles from '../../styles/projectModal.module.scss';
import { GitHubIcon, DeployIcon } from '../../../../public/assets/icons/allIcons';
import { ProjectModalProps } from "../../../types/modal";
import { XIcon } from "../../../../public/assets/icons/xIcon";

//Código principal
const ProjectModalComponent: React.FC<ProjectModalProps> = ({ modal, closeModal, isVisible }) => {
    const modalClass = useMemo(() => isVisible ? styles.modalEnter: styles.modalExit, [isVisible]);

    return (
       <>
            {modal.map((project, index) => (
                 <div className={`${styles.projectModalContainer} ${modalClass}`} key={index}>
                    <div className={styles.projectModalBackdrop} onClick={closeModal} />
                    <div className={styles.projectModalMain}>
                        <button className={styles.closeModal} onClick={closeModal}>
                            <XIcon />
                        </button>
            
                        <div className={styles.imgProject}>
                            <Image
                                src={project.projectImg}
                                alt={project.projectName}
                                width={900}
                                height={450}
                                loading="lazy"
                            />
                        </div>
            
                        <div className={styles.linksProject}>
                            <header className={styles.header}>
                                <h2>{project.projectName}</h2>
                                <h4>{project.projectType}</h4>
                            </header>
            
                            <div className={styles.links}>
                                <a href={project.projectRepository} target="_blank" rel="noopener noreferrer" className={styles.gitHub}>
                                    <GitHubIcon />
                                    <p>Acessar repositório</p>
                                </a>
                                <a href={project.projectPage} target="_blank" rel="noopener noreferrer" className={styles.deploy}>
                                    <DeployIcon />
                                    <p>Visualizar projeto</p>
                                </a>
                            </div>
                        </div>
            
                        <div className={styles.aboutProject}>
                            <h3>Sobre</h3>
                            {project.projectAbout}
                        </div>
            
                        <div className={styles.techProject}>
                            <h3>Tecnologias</h3>
                            <div className={styles.techIcons}>
                                {project.projectTechnologies.map((technology, index) => (
                                    <div key={index}>
                                        {technology}
                                    </div>
                                ))}
                            </div>
                        </div>
            
                        {project.projectMembers && (
                            <div className={styles.partyMembers}>
                                <h3>Colaboradores</h3>
            
                                <div className={styles.membersGrid}>
                                    {project.projectMembers.map((member, index) => (
                                        <a key={index} href={member.linkedin} target="_blank" rel="noopener noreferrer" title={`Acessar Linkedin de ${member.name}`}>
                                            <Image
                                                src={member.image}
                                                alt={`Membro ${index + 1}`}
                                                width={250}
                                                height={250}
                                                loading="lazy"
                                            />
                                            <p>{member.name}</p>
                                        </a>
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

export const ProjectModal = memo(ProjectModalComponent)