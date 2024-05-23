import { StaticImageData } from "next/image";

export interface partyMembers {
    image: StaticImageData;
    name: string;
    linkedin: string;
}

//Declaração das props e seus tipos
export interface ModalInfo {
    projectImg: StaticImageData;
    projectName: string;
    projectType: string;
    projectRepository: string;
    projectPage: string;
    projectAbout: JSX.Element;
    projectTechnologies: React.ReactNode[];
    projectMembers?: partyMembers[];
}

//Importação das props para facilitar execução do código
export interface ProjectModalProps {
    modal: ModalInfo[];
    closeModal: () => void;
    isVisible: boolean;
}