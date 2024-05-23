import React from "react";
import styles from '../../styles/animation.module.scss';

import { fredoka } from "../../components/layout/header/header";

interface AnimationProps {
    startHidePage: boolean;
}

const Animation: React.FC<AnimationProps> = ({ startHidePage }) => {
    return (
        <div className={`${styles.animationContainer} ${startHidePage ? styles.animationLoaded : ''}`}>
            <div>
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40"></circle>
                </svg>

                <p className={fredoka.className}>&lt;MJ/&gt;</p>
            </div>
        </div>

    )
}

export default Animation