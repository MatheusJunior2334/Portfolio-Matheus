import { Header } from "../components/layout/header/header";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children } : MainLayoutProps) => {
    return (
        <div>
            <Header text="< Matheus Júnior />" />
            <main>{children}</main>
        </div>
    )
}