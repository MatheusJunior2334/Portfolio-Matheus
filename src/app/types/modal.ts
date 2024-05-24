import { StaticImageData } from "next/image";

export interface partyMembers {
    image: StaticImageData;
    name: string;
    linkedin: string;
}

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

export interface ProjectModalProps {
    modal: ModalInfo[];
    closeModal: () => void;
    isVisible: boolean;
}