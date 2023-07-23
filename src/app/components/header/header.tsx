import styles from './header.module.scss';

export default function Header() {
    return (
        <header id={styles.header}>
            <h1 className={styles.logo}>Matheus Júnior</h1>
            <div className={styles.nav_options}>
                <nav>
                    <ul>
                        <li>
                            <span>Home</span>
                        </li>
                        <li>
                            <span>Sobre</span>
                        </li>
                        <li>
                            <span>Habilidades</span>
                        </li>
                        <li>
                            <span>Projetos</span>
                        </li>
                        <li>
                            <span>Currículo</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}