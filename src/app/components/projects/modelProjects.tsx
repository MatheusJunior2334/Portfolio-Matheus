import styles from './modelProjects.module.scss';
import Image, { StaticImageData } from 'next/image';

interface ModelProjectsProps {
    image: StaticImageData;
    title: string;
}

export default function ModelProjects(props: ModelProjectsProps) {
    return (
        <div className={styles.modelProjects}>
            <div className={styles.modelImage}>
                <Image
                    src={props.image}
                    alt={props.title}
                    quality={100}
                    priority
                />
            </div>
            <div className={styles.modelName}>
                <p>{props.title}</p>
            </div>
        </div>
    )
}