'use client'

import React, { memo, useMemo, Suspense, lazy } from "react";
import styles from '../../styles/projectModal.module.scss';
import { GitHubIcon, DeployIcon } from '../../../../public/assets/icons/allIcons';
import { ProjectModalProps } from "../../types/modal";
import { XIcon } from "../../../../public/assets/icons/xIcon";
import { useLanguage } from "../../../app/contexts/languageContext";

const Image = lazy(() => import('next/image'));

//Código principal
const ProjectModalComponent: React.FC<ProjectModalProps> = ({ modal, closeModal, isVisible }) => {
    const { translations } = useLanguage();
    const modalClass = useMemo(() => isVisible ? styles.modalEnter: styles.modalExit, [isVisible]);

    const getTitle = (key: string | string[]): string => {
        if (Array.isArray(key)) {
            return key.join(' ');
        }
        return key;
    }

    return (
       <>
            {modal.map((project, index) => (
                 <div className={`${styles.projectModalContainer} ${modalClass}`} key={index}>
                    <div className={styles.projectModalBackdrop} onClick={closeModal} />
                    <div className={styles.projectModalMain}>
                        <button
                            className={styles.closeModal}
                            onClick={closeModal}
                            title={getTitle(translations['home.exitButton.close'])}
                            aria-label={getTitle(translations['home.exitButton.close'])}
                        >
                            <XIcon />
                        </button>
            
                        <div className={styles.imgProject}>
                            <Suspense fallback={<div className={styles.loadingProjectImg}><span /></div>}>
                                <Image
                                    src={project.projectImg}
                                    alt={project.projectName}
                                    width={800}
                                    height={400}
                                    sizes="(max-width: 768px) 90vw, (max-width: 1000px) 84vw, 60vw"
                                    loading="lazy"
                                />
                            </Suspense>
                        </div>
            
                        <div className={styles.linksProject}>
                            <header className={styles.header}>
                                <h2>{project.projectName}</h2>
                                <h4>{project.projectType}</h4>
                            </header>
            
                            <div className={styles.links}>
                                <a
                                    href={project.projectRepository}
                                    target="_blank"
                                    aria-label={getTitle(translations['home.projects.projectModal.repository'])}
                                    rel="noopener noreferrer"
                                    className={styles.gitHub}
                                >
                                    <GitHubIcon />
                                    <p>{translations['home.projects.projectModal.repository']}</p>
                                </a>
                                <a
                                    href={project.projectPage}
                                    target="_blank"
                                    aria-label={getTitle(translations['home.projects.projectModal.website'])}
                                    rel="noopener noreferrer"
                                    className={styles.deploy}
                                >
                                    <DeployIcon />
                                    <p>{translations['home.projects.projectModal.website']}</p>
                                </a>
                            </div>
                        </div>
            
                        <div className={styles.aboutProject}>
                            <h3>{translations['home.projects.projectModal.about']}</h3>
                            {project.projectAbout}
                        </div>
            
                        <div className={styles.techProject}>
                            <h3>{translations['home.projects.projectModal.techs']}</h3>
                            <div className={styles.techIcons}>
                                {project.projectTechnologies.map((technology, techIndex) => (
                                    <div key={techIndex}>
                                        {technology}
                                    </div>
                                ))}
                            </div>
                        </div>
            
                        {project.projectMembers && (
                            <div className={styles.partyMembers}>
                                <h3>{translations['home.projects.projectModal.party']}</h3>
            
                                <div className={styles.membersGrid}>
                                    {project.projectMembers.map((member, memberIndex) => (
                                        <Suspense key={memberIndex} fallback={<div className={styles.loadingMembers}><span /></div>}>
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={member.name}
                                                aria-label={`Access LinkedIn from ${member.name}`}
                                            >
                                                <Image
                                                    src={member.image}
                                                    alt={`Member ${member.name}`}
                                                    width={210}
                                                    height={210}
                                                    sizes="(max-width: 535px) 180px, 210px"
                                                    loading="lazy"
                                                />
                                                <p>{member.name}</p>
                                            </a>
                                        </Suspense>
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