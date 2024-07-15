import styles from '../../../styles/footer.module.scss';

import { LiaLinkedin } from "react-icons/lia";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { useLanguage } from '@/app/contexts/languageContext';

export const Footer = () => {
    const { translations } = useLanguage();

    return (
        <footer id={styles.footer}>
            <h6>© 2024 Matheus Júnior - {translations['home.footer.madeBy']}</h6>

            <div className={styles.socialMedia}>
                <button title='LinkedIn' aria-label='Access LinkedIn'>
                    <a href='https://www.linkedin.com/in/matheus-j%C3%BAnior/' target='_blank' rel='noopener noreferrer'>
                        <LiaLinkedin />
                    </a>
                </button>
                <button title='GitHub' aria-label='Access GitHub'>
                    <a href='https://github.com/MatheusJunior2334' target='_blank' rel='noopener noreferrer'>
                        <VscGithub />
                    </a>
                </button>
                <button title='E-Mail' aria-label='Access E-mail'>
                    <a href="mailto:matheusjuniormjg2334@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdOutlineMail />
                    </a>
                </button>
            </div>
        </footer>
    )
}