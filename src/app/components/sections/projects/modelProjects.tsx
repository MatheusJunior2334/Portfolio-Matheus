import { ModalInfo } from '../../../../types/modal';
import styles from '../../../styles/modelProjects.module.scss';
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
                    width={1000}
                    height={500}
                    priority
                />
            </div>
            <div className={styles.modelName}>
                <p>{title}</p>
            </div>
        </div>
    )
}