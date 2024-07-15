import { Header } from "../components/layout/header/header";
import { Footer } from "../components/layout/footer/footer";
import styles from '../page.module.scss';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children } : MainLayoutProps) => {
    return (
        <div className={styles.mainLayout}>
            <Header text="< Matheus Júnior />" />
            <main>{children}</main>
            <Footer />
        </div>
    )
}