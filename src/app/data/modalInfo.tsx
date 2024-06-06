import { ModalInfo } from '../types/modal';

//Imagens dos projetos
import { NostalgicWorldImg, HBankImg, MarcioImg, JMBankImg, PectoImg, FireEmblemImg, LonyImg } from "../../../public/assets/images/projects/projectImages";

import { partyMembersData } from './membersTeam';

//Tecnologias
import { HTML, CSS, Sass, JavaScript, TypeScript, ReactJs, NextJs, MySQL, JAVA, Python, Bootstrap, Spring } from '../components/UI/technologies';
import { LanguageTranslations } from '../contexts/languageContext';

//Nostalgic World
export const NostalgicWorld = (translations: LanguageTranslations): ModalInfo[] => {
    return [
        {
            projectImg: NostalgicWorldImg,
            projectName: 'Nostalgic World',
            projectType: translations['home.projectModal.nostalgic.type'],
            projectRepository: 'https://github.com/MatheusJunior2334/Nostalgic-World',
            projectPage: 'https://friendly-hamster-3d8ee3.netlify.app/',
            projectAbout: (
                <p>
                    {translations['home.projectModal.nostalgic.about']}
                </p>
            ),
            projectTechnologies: [<HTML />, <CSS />, <Bootstrap />],
            projectMembers: [partyMembersData.Gabriel, partyMembersData.Jonatas, partyMembersData.Kath, partyMembersData.Maciel, partyMembersData.Ketelyn, partyMembersData.Matheus]
         },
    ]
}

//H-Bank
export const HBank = (translations: LanguageTranslations): ModalInfo[] => {
    return [
        {
            projectImg: HBankImg,
            projectName: 'H-Bank',
            projectType: translations['home.projectModal.hbank.type'],
            projectRepository: 'https://github.com/MatheusJunior2334/H-Bank',
            projectPage: 'https://joyful-scone-16017b.netlify.app/',
            projectAbout: (
                <p>{translations['home.projectModal.hbank.about']}</p>
            ),
            projectTechnologies: [<HTML />, <CSS />, <JavaScript />],
            projectMembers: [partyMembersData.Cassia, partyMembersData.Gabriel, partyMembersData.Hitalo, partyMembersData.Matheus, partyMembersData.Wesley, partyMembersData.Willian]
        }
    ]
} 

//Márcio - Motorista Especial
export const Marcio = (translations: LanguageTranslations): ModalInfo[] => {
    return [
        {
            projectImg: MarcioImg,
            projectName: 'Márcio - Motorista Especial',
            projectType: translations['home.projectModal.marcio.type'],
            projectRepository: 'https://github.com/MatheusJunior2334/Corre-da-Quebrada',
            projectPage: 'https://marcio-motorista-especial.vercel.app/',
            projectAbout: (
                <p>{translations['home.projectModal.marcio.about']}</p>
            ),
            projectTechnologies: [<HTML />, <CSS />, <JavaScript />],
        }
    ]
}

//JM Bank
export const JMBank = (translations: LanguageTranslations): ModalInfo[] => {
    return [
        {
            projectImg: JMBankImg,
            projectName: 'JM Bank',
            projectType: translations['home.projectModal.jmbank.type'],
            projectRepository: 'https://github.com/MatheusJunior2334/Fintech-JM_Bank',
            projectPage: 'https://fintech-jm-bank.vercel.app/',
            projectAbout: (
                <p>{translations['home.projectModal.jmbank.about']}</p>
            ),
            projectTechnologies: [<ReactJs />, <JavaScript />, <CSS />]
        }
    ]
}

//Pecto
export const Pecto = (translations: LanguageTranslations): ModalInfo[] => {
    return [
        {
            projectImg: PectoImg,
            projectName: 'Pecto',
            projectType: translations['home.projectModal.pecto.type'],
            projectRepository: 'https://github.com/MatheusJunior2334/Pecto',
            projectPage: 'https://demoday-seven.vercel.app/',
            projectAbout: (
                <p>
                    {translations['home.projectModal.pecto.about']}
                    <br/>
                    <br/>
                    {translations['home.projectModal.pecto.about.obs']}
                </p>
            ),
            projectTechnologies: [<ReactJs />, <Sass />, <MySQL />, <JAVA />, <Spring />, <Python />] ,
            projectMembers: [partyMembersData.Cassia, partyMembersData.Gabriel, partyMembersData.Hitalo, partyMembersData.Igor, partyMembersData.Jonatas, partyMembersData.Ketelyn, partyMembersData.Matheus, partyMembersData.Mileny]
        }
    ]
}

//Fire Emblem Awakening - Conversations
export const FireEmblem = (translations: LanguageTranslations): ModalInfo[] => {
    return [
        {
            projectImg: FireEmblemImg,
            projectName: 'Fire Emblem Awakening - Conversations',
            projectType: translations['home.projectModal.fireEmblem.type'],
            projectRepository: 'https://github.com/MatheusJunior2334/Fire_Emblem_Awakening-Conversations',
            projectPage: 'https://fire-emblem-awakening-conversations.vercel.app/',
            projectAbout: (
                <p>{translations['home.projectModal.fireEmblem.about']}</p>
            ),
            projectTechnologies: [<NextJs />, <TypeScript />, <Sass />],
        }
    ]
}

//Lony - Ladies of New York
export const Lony = (translations: LanguageTranslations): ModalInfo[] => {
    return [
        {
            projectImg: LonyImg,
            projectName: 'Lony - Ladies of New York',
            projectType: translations['home.projectModal.lony.type'],
            projectRepository: 'https://github.com/MatheusJunior2334/Lony',
            projectPage: 'https://lony-pink.vercel.app/',
            projectAbout: (
                <p>{translations['home.projectModal.lony.about']}</p>
            ),
            projectTechnologies: [<NextJs />, <TypeScript />, <Sass />],
            projectMembers: [partyMembersData.Bianka, partyMembersData.Matheus]
        }
    ]
}