import styles from '../../../styles/about.module.scss';

export function About() {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutLeft}>
                <h2>Sobre Mim</h2>

                <p>Prazer, me chamo Matheus Júnior, tenho 19 anos e atualmente sou estudante de programação web fullstack. Minha paixão pela tecnologia vem desde a minha infância, mas apenas tive a oportunidade de estudar programação no ano de 2023 e viso sempre alcançar o meu desenvolvimento nessa área. Nos meus tempos vagos toco flauta e teclado 🎹, minhas maiores paixões!</p>
                </div>
                
                <div className={styles.aboutRight}></div>
            </div>
        </section>
    )
}