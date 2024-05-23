'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../../../styles/screenSaver.module.scss';

import steelyDan from '../../../../../public/Steely Dan - Aja.webp';
import { Vinyl } from '../../../../../public/assets/images/screen-saver/vinyl';

interface ScreenSaverProps {
    timeout: number;
}

export function ScreenSaver({ timeout } : ScreenSaverProps) {

    //Código principal para ativar o ScreenSaver após um determinado tempo sem a ação do usuário
    const [active, setActive] = useState<boolean>(false);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const vinylRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;
        let animationTimeout: NodeJS.Timeout | null = null;

        //Tempo de iniciação da música
        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.volume = 1;
                audioRef.current.play().catch(error => {
                    console.error('Error playing audio', error)
                })
            }
        }, 3 * 1000)

        //Finalização da animação do Vinil
        setTimeout(() => {
            if (vinylRef.current) {
                vinylRef.current.classList.add(`${styles.stopAnimation}`)
            }
        }, 8 * 60 * 1000)

        const resetTimeOut = () => {
            if (timeoutId) clearTimeout(timeoutId);
            
            timeoutId = setTimeout(() => {
                setActive(true);
            }, timeout)
        }

        const handleActivity = () => {
            if (timeoutId) clearTimeout(timeoutId);
            if (animationTimeout) clearInterval(animationTimeout);

            setActive(false);

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
    }, [active])

    //Componente a ser renderizado
    if (active) {
        return (
            <div id={styles.screensaver}>
                <Vinyl ref={vinylRef}/>
                <div>
                    <Image
                        src={steelyDan}
                        alt='Steely Dan Aja Image'
                        quality={100}
                        ref={imageRef}
                        priority
                    />
                </div>  
                <audio
                    src='/aja-music.mp3'
                    ref={audioRef}
                />
            </div>
        )
    } else {
        return null;
    }
}