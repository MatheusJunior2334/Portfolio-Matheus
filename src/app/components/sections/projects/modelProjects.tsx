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
                    width={650}
                    height={325}
                    priority
                />
            </div>
            <div className={styles.modelName}>
                <p>{title}</p>
            </div>
        </div>
    )
}

export const ModelProjects = memo(ModelProjectsComponent);