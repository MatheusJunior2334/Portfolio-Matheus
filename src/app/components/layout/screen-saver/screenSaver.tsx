'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../styles/screenSaver.module.scss';

import { IoIosVolumeOff, IoIosVolumeHigh } from "react-icons/io";
import { XIcon } from "../../../../../public/assets/icons/xIcon";
import useWindowSize from '@/app/hooks/useWindowSize';

interface ScreenSaverProps {
    timeout: number;
}

export function ScreenSaver({ timeout } : ScreenSaverProps) {
    const { width } = useWindowSize();

    const [active, setActive] = useState<boolean>(false);
    const [screenSaverEnabled, setScreenSaverEnabled] = useState<boolean>(true);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;
        let animationTimeout: NodeJS.Timeout | null = null;

        const resetTimeOut = () => {
            if (timeoutId) clearTimeout(timeoutId);
            
            timeoutId = setTimeout(() => {
                setActive(true);
            }, timeout)
        }

        const handleActivity = () => {
            if (active) return;

            if (timeoutId) clearTimeout(timeoutId);
            if (animationTimeout) clearInterval(animationTimeout);

            resetTimeOut();
        }

        resetTimeOut();

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('scroll', handleActivity);
        window.addEventListener('touchmove', handleActivity);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            window.removeEventListener('touchmove', handleActivity);

            if (timeoutId) clearTimeout(timeoutId);
            if (animationTimeout) clearInterval(animationTimeout);
        }
    }, [active, timeout])

    const handleScreenSaverClick = () => {
        setActive(false);
        setScreenSaverEnabled(false);
    }

    const handlePlayAudio = () => {
        setIsMuted(!isMuted);

        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            videoRef.current.volume = isMuted ? 0 : 1;
        }

        if (audioRef.current) {
            audioRef.current.muted = isMuted;
            audioRef.current.volume = isMuted ? 0 : 1;
            audioRef.current.play();
        }
    }

    //Componente a ser renderizado
    if (!active) {
        return null 
    }

    return (
        <div id={styles.screensaver}>
            <div className={styles.screensaverBackdrop} onClick={handleScreenSaverClick} />

            <div className={styles.mediaArea}>
                {width > 768 ? (
                    <video
                        src='/assets/video/XenobladeChroniclesTitleScreen.mp4'
                        ref={videoRef}
                        autoPlay
                        loop
                        muted={!isMuted}
                    />
                ) : (
                    <>
                        <Image 
                            src={'/assets/images/screen-saver/XenobladeTitleScreenGif.gif'}
                            alt='Xenoblade Title Screen'
                            width={1280}
                            height={720}
                            priority
                        />

                        <audio
                            src={'/assets/audio/XenobladeMainTheme.mp3'}
                            ref={audioRef}
                            loop
                            muted={!isMuted}
                        />
                    </>
                )}

                <button onClick={handlePlayAudio}>
                    {isMuted ? <IoIosVolumeHigh/> : <IoIosVolumeOff /> }
                </button>
            </div>

            <button className={styles.exitButton} onClick={handleScreenSaverClick}>
                <XIcon />
            </button>
        </div>
    )
}