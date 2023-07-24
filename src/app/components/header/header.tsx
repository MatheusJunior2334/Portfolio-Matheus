'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Indie_Flower } from 'next/font/google';
import styles from './header.module.scss';

//Menu Icons

import BurgerIcon from './icons/burgerIcon';
import XIcon from './icons/xIcon';

//Font Import

const indieFlower = Indie_Flower({ subsets: ['latin'], weight: ['400'] })

export default function Header() {

    //Function to active the side menu
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClickMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        //Function to verify if the screen is smaller than 1000px
        const handleWindowSizeChange = () => {
            const currentWidth = window.innerWidth;

            if (currentWidth >= 1000) {
                setMenuOpen(true);
            }
            
            //Update the width size value if there's a change
            if (currentWidth !== windowWidth) {
                setWindowWidth(currentWidth);
            }
        }

        //Add the listener event to verify the window size change
        window.addEventListener('resize', handleWindowSizeChange);

        //Remove the listener event when the container is closed
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [windowWidth]);


    //Code to shine button when reach a specified page container
    const navRef = useRef<HTMLElement | null >(null);

    const handleSectionVisibility: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            const target = entry.target;
            const button = navRef.current?.querySelector(`[data-target='${target.id}']`);

            if (entry.isIntersecting && button) {
                button.classList.add(styles.active);
            } else if (button) {
                button.classList.remove(styles.active);
            }
        })
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7,
        }

        const observer = new IntersectionObserver(handleSectionVisibility, options);

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            observer.observe(section);
        })

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            })
        }
    }, [])


    return (
        <header id={styles.header}>
            <h1 className={`${indieFlower.className} ${styles.logo}`}>Matheus Júnior</h1>
            <div className={styles.nav_options}>
                <nav ref={navRef}>
                    <ul style={{ transform: `${menuOpen ? 'translateX(0)' : ''} ${menuOpen ? 'rotate(0deg)' : ''}` }}>
                        <li>
                            <span data-target="home">Home</span>
                        </li>
                        <li>
                            <span data-target="about">Sobre</span>
                        </li>
                        <li>
                            <span data-target="skills">Habilidades</span>
                        </li>
                        <li>
                            <span data-target="projects">Projetos</span>
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