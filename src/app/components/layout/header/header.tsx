'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Fredoka } from 'next/font/google';
import styles from '../../../styles/header.module.scss';

// Menu Icons
import { BurgerIcon } from '../../../../../public/assets/icons/burgerIcon';
import { XIcon } from '../../../../../public/assets/icons/xIcon';
import { FaWhatsapp } from "react-icons/fa";

// Importação da Fonte
export const fredoka = Fredoka({ subsets: ['latin'], weight: ['400'] });

import useWindowSize from '../../../hooks/useWindowSize';
import { useLanguage } from '../../../../app/contexts/languageContext';

interface HeaderProps {
    text: string;
}

export const Header: React.FC<HeaderProps> = React.memo(({ text }) => {
    const { translations } = useLanguage();

    const [characters, setCharacters] = useState<string[]>([]);

    useEffect(() => {
        const charactersArray = text.split('').map(char => (char === ' ' ? '\u00A0' : char));
        setCharacters(charactersArray);
    }, [text]);

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

    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const currentScrollPos = window.pageYOffset;

            sections.forEach(section => {
                const id = section.getAttribute('id');
                const offset = section.offsetTop - 300;
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

    const scrollToSection = useCallback((section: string) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const navOptions = useMemo(() => {
        const sections = [
            translations['home.header.home'],
            translations['home.header.about'],
            translations['home.header.skills'],
            translations['home.header.projects'],
            translations['home.header.contact']
        ];
        const ids = ['home', 'about', 'skills', 'projects', 'contact'];

        return (
            <nav>
                <ul style={{ transform: menuOpen ? 'translateX(0%)' : '', transition: 'transform 0.5s ease-in-out' }}>
                    {sections.map((section, index) => (
                        <li key={ids[index]}>
                            <span
                                className={activeSection === ids[index] ? styles.active : ''}
                                onClick={() => {
                                    setActiveSection(ids[index]);
                                    scrollToSection(ids[index]);
                                }}
                            >
                                {section}
                                {ids[index] == 'contact' && <FaWhatsapp />}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className={styles.burgerMenu}>
                    <span onClick={handleClickMenu}>
                        {menuOpen ? <XIcon /> : <BurgerIcon />}
                    </span>
                </div>
            </nav>
        );
    }, [menuOpen, activeSection, handleClickMenu, scrollToSection, translations]);

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