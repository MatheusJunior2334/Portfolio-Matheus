'use client'

import React, { useEffect, useState } from "react";
import styles from '../../styles/changeLanguage.module.scss';

import { MdLanguage } from "react-icons/md";
import { BrazilFlagIcon } from "../../../../public/assets/icons/brazilFlagIcon";
import { UKFlagIcon } from "../../../../public/assets/icons/ukFlagIcon";
import { GermanyFlagIcon } from "../../../../public/assets/icons/germanyFlagIcon";

import { useLanguage } from "../../../app/contexts/languageContext";

export const ChangeLanguage: React.FC = () => {
    const { changeLanguage } = useLanguage();
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleLanguageChange = (newLanguage: string) => {
        changeLanguage(newLanguage);
        setIsDropdownOpen(false);
    }

    return (
        <div className={`${styles.languageSelector} ${isDropdownOpen ? styles.show : ''}`}>
            <button className={styles.currentLanguage} onClick={toggleDropdown}>
                <MdLanguage />
            </button>

            <div className={styles.dropdown}>
                <button onClick={() => handleLanguageChange('pt')}>
                    <BrazilFlagIcon />
                </button>
                <button onClick={() => handleLanguageChange('en')}>
                    <UKFlagIcon />
                </button>
                <button onClick={() => handleLanguageChange('de')}>
                    <GermanyFlagIcon />
                </button>
            </div>
        </div>
    )
}