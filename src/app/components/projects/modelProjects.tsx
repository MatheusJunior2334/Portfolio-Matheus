import { ModalInfo } from '../project-modal/projectModal';
import styles from './modelProjects.module.scss';
import Image, { StaticImageData } from 'next/image';

interface ModelProjectsProps {
    image: StaticImageData;
    title: string;
    modalContent?: ModalInfo;
    onClick: (modalContent?: ModalInfo) => void;
}

export const ModelProjects: React.FC<ModelProjectsProps> = ({ image, title, modalContent, onClick }) => {
     
    return (
        <div className={styles.modelProjects} onClick={() => onClick(modalContent)}>
            <div className={styles.modelImage}>
                <Image
                    src={image}
                    alt={title}
                    quality={100}
                    priority
                />
            </div>
            <div className={styles.modelName}>
                <p>{title}</p>
            </div>
        </div>
    )
}