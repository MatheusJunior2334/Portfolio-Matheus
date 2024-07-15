'use client'

import React, { useState } from 'react';

import Image from 'next/image';
import styles from '../../../styles/contact.module.scss';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/app/contexts/languageContext';
import EunieImage from '../../../../../public/assets/images/home/EunieImage.webp';

import { LiaLinkedin } from "react-icons/lia";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const service_id = process.env.NEXT_PUBLIC_SERVICE_ID!;
const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
const user_id = process.env.NEXT_PUBLIC_USER_ID!;

export const Contact = () => {
    const { translations } = useLanguage();
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            }

            await emailjs.send(
                service_id,
                template_id,
                templateParams,
                user_id
            )

            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error("Error sending email: ", error);
        }
    }

    const getTitle = (key: string | string[]): string => {
        if (Array.isArray(key)) {
            return key.join(' ');
        }
        return key;
    }

    return (
        <section id='contact' className={styles.contactSection}>
            <h2>{translations['home.contact.title']}</h2>
            <div className={styles.contactContent}>
                <div className={styles.contactLeftSide}>
                    {submitted && (
                        <div className={styles.video}>
                            <video autoPlay muted loop playsInline controls={false}>
                                <source src='/assets/video/NiaVideo.mp4' type='video/mp4' />
                            </video>
                            <p>{translations['home.contact.success']}</p>
                        </div>
                    )}

                    {!submitted && (
                        <div className={styles.socialMedia}>
                            <div className={styles.linksSide}>
                                <button title='LinkedIn'>
                                    <a href='https://www.linkedin.com/in/matheus-j%C3%BAnior/' target='_blank' rel='noopener noreferrer'>
                                        <LiaLinkedin />
                                        <h4>LinkedIn</h4>
                                    </a>
                                </button>
                                <button title='GitHub'>
                                    <a href='https://github.com/MatheusJunior2334' target='_blank' rel='noopener noreferrer'>
                                        <VscGithub />
                                        <h4>GitHub</h4>
                                    </a>
                                </button>
                                <button title='E-Mail'>
                                    <a href="mailto:matheusjuniormjg2334@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <MdOutlineMail />
                                        <h4>E-Mail</h4>
                                    </a>
                                </button>
                           </div>

                            <figure>
                                <Image
                                    src={EunieImage}
                                    alt='Eunie image'
                                    width={800}
                                    height={737}
                                    sizes='(max-width: 1000px) 65vw, 40vw'
                                    loading='lazy'
                                />
                            </figure>
                        </div>
                    )}
                </div>
                <div className={styles.contactRightSide}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">{translations['home.contact.name']}</label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder={getTitle(translations['home.contact.nameText'])}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">{translations['home.contact.email']}</label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder={getTitle(translations['home.contact.emailText'])}
                                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                            />
                        </div>
                        <div>
                            <label htmlFor="message">{translations['home.contact.message']}</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder={getTitle(translations['home.contact.messageText'])}
                            />
                        </div>
                        <button type='submit'><span>{translations['home.contact.send']}</span></button>
                    </form>
                </div>
            </div>
        </section>
    )
}