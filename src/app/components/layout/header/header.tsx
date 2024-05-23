'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Fredoka } from 'next/font/google';
import styles from '../../../styles/header.module.scss';

// Menu Icons
import { BurgerIcon } from '../../../../../public/assets/icons/burgerIcon';
import { XIcon } from '../../../../../public/assets/icons/xIcon';

// Importação da Fonte
export const fredoka = Fredoka({ subsets: ['latin'], weight: ['400'] });

import useWindowSize from '../../../../hooks/useWindowSize';

interface HeaderProps {
    text: string;
}

export const Header: React.FC<HeaderProps> = React.memo(({ text }) => {
    // Declaração para indicar os caracteres utilizadas no texto principal: <Matheus Júnior/>
    const [characters, setCharacters] = useState<string[]>([]);

    useEffect(() => {
        const charactersArray = text.split('').map(char => (char === ' ' ? '\u00A0' : char));
        setCharacters(charactersArray);
    }, [text]);

    // Função para ativar o menu lateral (no Responsivo)
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const handleClickMenu = useCallback(() => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }, []);

    const { width: windowWidth } = useWindowSize();

    useEffect(() => {
        if (windowWidth >= 1000) {
            setMenuOpen(false);
        }
    }, [windowWidth]);

    // Código para brilhar o botão ao chegar numa determinada section da página
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const currentScrollPos = window.pageYOffset;

            sections.forEach(section => {
                const id = section.getAttribute('id');
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;

                if (currentScrollPos >= offset && currentScrollPos < offset + height) {
                    setActiveSection(id || '');
                }
            });
        };

        const throttledScrollHandler = throttle(handleScroll, 200);
        window.addEventListener('scroll', throttledScrollHandler);

        return () => {
            window.removeEventListener('scroll', throttledScrollHandler);
        };
    }, []);

    // Código para rolar até a seção desejada
    const scrollToSection = useCallback((section: string) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const navOptions = useMemo(() => (
        <nav>
            <ul style={{ transform: menuOpen ? 'translateX(0%)' : '', transition: 'transform 0.3s ease-in-out' }}>
                {['home', 'about', 'skills', 'projects'].map(section => (
                    <li key={section}>
                        <span
                            className={activeSection === section ? styles.active : ''}
                            onClick={() => {
                                setActiveSection(section);
                                scrollToSection(section);
                            }}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </span>
                    </li>
                ))}
                <li>
                    <span>Currículo</span>
                </li>
            </ul>
            {/* Burger Menu */}
            <div className={styles.burgerMenu}>
                <span onClick={handleClickMenu}>
                    {menuOpen ? <XIcon /> : <BurgerIcon />}
                </span>
            </div>
        </nav>
    ), [menuOpen, activeSection, handleClickMenu, scrollToSection]);

    return (
        <header id={styles.header}>
            <h1 className={`${fredoka.className} ${styles.logo}`}>
                {characters.map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                        {char}
                    </span>
                ))}
            </h1>
            <div className={styles.nav_options}>
                {navOptions}
            </div>
        </header>
    );
});

// Helper function for throttling
function throttle(fn: (...args: any[]) => void, wait: number) {
    let inThrottle: boolean, lastFn: ReturnType<typeof setTimeout>, lastTime: number;
    return function(this: any, ...args: any[]) {
        const context = this;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function() {
                if ((Date.now() - lastTime) >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
}