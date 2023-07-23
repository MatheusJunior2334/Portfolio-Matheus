import styles from './toolsSquare.module.scss';

interface ToolsSquareProps {
    image: React.ReactNode;
    name: string;
}

export default function ToolsSquare(props: ToolsSquareProps) {
    return (
        <div className={styles.tools}>
            {props.image}
            <p>{props.name}</p>
        </div>
    )
}