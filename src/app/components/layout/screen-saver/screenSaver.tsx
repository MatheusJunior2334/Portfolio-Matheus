'use client'

import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import styles from '../../../styles/screenSaver.module.scss';

import { IoIosVolumeOff, IoIosVolumeHigh } from "react-icons/io";
import { XIcon } from "../../../../../public/assets/icons/xIcon";
import useWindowSize from '@/app/hooks/useWindowSize';
import { GameAlbumProps } from '@/app/types/gameAlbum';
import { GamesContent } from '@/app/data/gamesData';
import { AlbumsContent } from '@/app/data/albumsData';
import { useLanguage } from '@/app/contexts/languageContext';

const Image = lazy(() => import('next/image'));

interface ScreenSaverProps {
    timeout: number;
}

const GameModel = ({ src, name }: GameAlbumProps) => {
    return (
        <div className={styles.gameModel}>
            <Image
                src={src}
                alt={name}
                width={0}
                height={0}
                sizes='(max-width: 868px) 50vw,(max-width: 1157px) 33vw, (max-width: 1280px) 25vw, 70vw'
                loading='lazy'
            />
            <span>{name}</span>
        </div>
    )
}

const AlbumModel = ({ src, name }: GameAlbumProps) => {
    return (
        <Suspense fallback={<div className={styles.loadingAlbum}><span /></div>}>
            <div className={styles.albumModel}>
                <Image
                    src={src}
                    alt={name}
                    width={150}
                    height={150}
                    loading='lazy'
                />
                <span>{name}</span>
            </div>
        </Suspense>
    )
}

export function ScreenSaver({ timeout } : ScreenSaverProps) {
    const { width } = useWindowSize();
    const { translations } = useLanguage();

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

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [active])

    const getTitle = (key: string | string[]): string => {
        if (Array.isArray(key)) {
            return key.join(' ');
        }
        return key;
    }

    //Componente a ser renderizado
    if (!active) {
        return null 
    }

    return (
        <div id={styles.screensaver}>
            <div className={styles.screensaverContent}>
                <button className={styles.exitButton} onClick={handleScreenSaverClick} title={getTitle(translations['home.exitButton.close'])}>
                    <XIcon />
                </button>
                <Image
                    src={'/assets/images/screen-saver/XenobladeLogoIcon.webp'}
                    alt='Xenoblade Logo Icon'
                    width={100}
                    height={100}
                    loading='lazy'
                    className={styles.xenobladeIcon}
                />
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
                                loading='eager'
                            />

                            <audio
                                src={'/assets/audio/XenobladeMainTheme.mp3'}
                                ref={audioRef}
                                loop
                                muted={!isMuted}
                            />
                        </>
                    )}

                    <span>Secret Area Discovered</span>

                    <button onClick={handlePlayAudio} aria-label={isMuted ? 'Pause audio' : 'Play audio'} aria-pressed={isMuted}>
                        {isMuted ? <IoIosVolumeHigh/> : <IoIosVolumeOff /> }
                    </button>
                </div>

                <div className={styles.tastesArea}>
                    <h2>{translations['home.screensaver.myTastesTitle']}</h2>
                    <div className={styles.games}>
                        <h3>{translations['home.screensaver.gamesTitle']}</h3>
                        <p>{translations['home.screensaver.gamesText']}</p>

                        <div className={styles.gamesGrid}>
                            {GamesContent.map((game, index) => (
                                <GameModel
                                    key={index}
                                    {...game}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.albums}>
                        <h3>{translations['home.screensaver.albumsTitle']}</h3>
                        <p>{translations['home.screensaver.albumsText']}</p>

                        <div className={styles.albumsGrid}>
                            {AlbumsContent.map((album, index) => (
                                <AlbumModel
                                    key={index}
                                    {...album}
                                />                                    
                            ))}
                        </div>
                    </div>
                    
                    <h2>{translations['home.screensaver.conclusionTitle']}</h2>
                    <div className={styles.conclusion}>
                        <p>{translations['home.screensaver.conclusionText']}</p>

                        <div className={styles.closePage}>
                            <button title={getTitle(translations['home.screensaver.closeScreen'])} onClick={handleScreenSaverClick} aria-label={getTitle(translations['home.screensaver.closeScreen'])}>{translations['home.screensaver.closeScreen']}</button>

                            <Image
                                src={'/icon.svg'}
                                alt='Matheus Júnior Logo'
                                width={100}
                                height={100}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}