import React, { memo } from 'react';
import styles from '../../../styles/modelProjects.module.scss';
import Image, { StaticImageData } from 'next/image';

interface ModelProjectsProps {
    image: StaticImageData;
    title: string;
    onClick: () => void;
}

const ModelProjectsComponent: React.FC<ModelProjectsProps> = ({ image, title, onClick }) => {
    return (
        <div className={styles.modelProjects} onClick={onClick}>
            <div className={styles.modelImage}>
                <Image
                    src={image}
                    alt={title}
                    width={560}
                    height={280}
                    sizes='(max-width: 535px) 80vw, (max-width: 768px) 75vw, (max-width: 1000px) 330px, (max-width: 1280px) 440px, 560px'
                    loading='lazy'
                />
            </div>
            <div className={styles.modelName}>
                <p>{title}</p>
            </div>
        </div>
    )
}

export const ModelProjects = memo(ModelProjectsComponent);