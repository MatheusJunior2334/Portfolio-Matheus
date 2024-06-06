import React, { useEffect } from "react";
import styles from '../../styles/introAnimation.module.scss';

import { fredoka } from "../../components/layout/header/header";


const IntroAnimation: React.FC = () => {
    return (
        <div className={styles.animationContainer}>
            <div>
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40"></circle>
                </svg>

                <p className={fredoka.className}>&lt;MJ/&gt;</p>
            </div>
        </div>

    )
}

export default IntroAnimation