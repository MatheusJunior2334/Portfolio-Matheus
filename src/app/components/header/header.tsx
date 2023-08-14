'use client';

import React, { useState, useEffect } from 'react';
import { Indie_Flower } from 'next/font/google';
import styles from './header.module.scss';

//Menu Icons

import BurgerIcon from './icons/burgerIcon';
import XIcon from './icons/xIcon';

//Importação da Fonte

const indieFlower = Indie_Flower({ subsets: ['latin'], weight: ['400'] })

export function Header() {

    //Função para ativar o menu lateral (no Responsivo)
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleClickMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        
        //Função para verificar se o tamanho da tela é menor que 1000px
        const handleWindowSizeChange = () => {
            const currentWidth = window.innerWidth;

            //Atualiza o valor da largura se houver alguma mudança
            if (currentWidth !== windowWidth) {
                setWindowWidth(currentWidth);
            }

            if (currentWidth >= 1000) {
                setMenuOpen(false);
            }
        }

        //Adicione o "Event Listener" para verificar a mudança de tamanho da tela
        window.addEventListener('resize', handleWindowSizeChange);

        //Remove o "Event Listener" quando o container é fechado
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [windowWidth]);


    //Código para brilhar o botão ao chegar numa determinada section da página
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const currentScrollPos = window.pageYOffset;

            sections.forEach((section) => {
                const id = section.getAttribute('id');
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;

                if (currentScrollPos >= offset && currentScrollPos < offset + height) {
                    setActiveSection(id || '');
                }
            })
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    //Código para rolar até a seção desejada
    const scrollToSection = (section: string) => {
        const sectionElement = document.getElementById(section);

        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header id={styles.header}>
            <h1 className={`${indieFlower.className} ${styles.logo}`}>Matheus Júnior</h1>
            <div className={styles.nav_options}>
                <nav>
                    <ul style={{ transform: `${menuOpen ? 'translateX(0%)' : ''} ${menuOpen ? 'rotate(0deg)' : ''}` }}>
                        <li>
                            <span
                                className={activeSection === 'home' ? styles.active : ''}
                                onClick={() => {
                                    setActiveSection('home');
                                    scrollToSection('home');
                                }}
                            >
                                Home
                            </span>
                        </li>
                        <li>
                            <span
                                className={activeSection === 'about' ? styles.active : ''}
                                onClick={() => {
                                    setActiveSection('about');
                                    scrollToSection('about');
                                }}
                            >
                                Sobre
                            </span>
                        </li>
                        <li>
                            <span
                                className={activeSection === 'skills' ? styles.active : ''}
                                onClick={() => {
                                    setActiveSection('skills');
                                    scrollToSection('skills')
                                }}
                            >
                                Habilidades
                            </span>
                        </li>
                        <li>
                            <span 
                                className={activeSection === 'projects' ? styles.active : ''}
                                onClick={() => {
                                    setActiveSection('projects');
                                    scrollToSection('projects')
                                }}
                            >
                                Projetos
                            </span>
                        </li>
                        <li>
                            <span>Currículo</span>
                        </li>
                    </ul>

                    {/*Burger Menu*/}
                    <div className={styles.burgerMenu}>
                        <span onClick={handleClickMenu}>
                            { menuOpen ? <XIcon /> : <BurgerIcon /> }
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    )
}