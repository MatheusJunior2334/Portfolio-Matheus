import { ModalInfo } from "./projectModal";

//Imagens dos projetos
import { NostalgicWorldImg, HBankImg, MarcioImg, JMBankImg, PectoImg } from "../projects/images/projectImages";


//Membros de Equipe
import { 
    //Pecto
    CassiaImg, CassiaLinkedin,
    GabrielImg, GabrielLinkedin,
    HitaloImg, HitaloLinkedin,
    IgorImg, IgorLinkedin,
    JonatasImg, JonatasLinkedin,
    KetelynImg, KetelynLinkedin,
    MatheusImg, MatheusLinkedin,
    MilenyImg, MilenyLinkedin,

    //Outros Projetos
    KathImg, KathLinkedin,
    MacielImg, MacielLinkedin,
    WesleyImg, WesleyLinkedin,
    WilliamImg, WillianLinkedin,
} from './membersTeam';

//Tecnologias
import { HTML, CSS, Sass, Bootstrap, JavaScript, ReactJs, MySQL, JAVA, Spring, Python } from '../skills-page/technologies';


//Projetos

//Nostalgic World
export const NostalgicWorld: ModalInfo[] = [
    {
        projectImg: NostalgicWorldImg,
        projectName: 'Nostalgic World',
        projectType: 'UC 1',
        projectRepository: 'https://github.com/MatheusJunior2334/Nostalgic-World',
        projectPage: 'https://friendly-hamster-3d8ee3.netlify.app/',
        projectAbout: (
            <p>
                Esse foi o primeiro projeto que realizei em equipe no Instituto PROA. O Nostalgic World é uma plataforma voltada para o streaming de filmes, séries e desenhos clássicos, focados desde os anos 1960 até os anos 1990, a fim de garantir uma maior comodidade e experiência ao nosso usuário.
            </p>
        ),
        projectTechnologies: [<HTML />, <CSS />, <Bootstrap />],
        projectMembersImg: [GabrielImg, JonatasImg, KathImg, MacielImg, KetelynImg, MatheusImg],
        projectMembersName: ['Gabriel Souza', 'Jonatas Anjos', 'Kath Gomes', 'Kayque Maciel', 'Ketelyn Sousa', 'Matheus Júnior'],
        membersLinkedin: [GabrielLinkedin, JonatasLinkedin, KathLinkedin, MacielLinkedin, KetelynLinkedin, MatheusLinkedin]
    },
]

//H-Bank
export const HBank: ModalInfo[] = [
    {
        projectImg: HBankImg,
        projectName: 'H-Bank',
        projectType: 'UC 2',
        projectRepository: 'https://github.com/MatheusJunior2334/H-Bank',
        projectPage: 'https://joyful-scone-16017b.netlify.app/',
        projectAbout: (
            <p>Esse foi o nosso segundo projeto em equipe dentro do Instituto PROA. A H-Bank é uma Fintech que visa maximizar e facilitar as finanças para nossos usuários em todos os sentidos, assim trazendo uma maior comodidade e melhor experiência ao mesmo.</p>
        ),
        projectTechnologies: [<HTML />, <CSS />, <JavaScript />],
        projectMembersImg: [CassiaImg, GabrielImg, HitaloImg, MatheusImg, WesleyImg, WilliamImg ],
        projectMembersName: ['Cassia Santos', 'Gabriel Souza', 'Hitalo Jacome', 'Matheus Júnior', 'Wesley Souza', 'William Rizzo'],
        membersLinkedin: [CassiaLinkedin, GabrielLinkedin, HitaloLinkedin, MatheusLinkedin, WesleyLinkedin, WillianLinkedin]
    }
]

//Márcio - Motorista Especial
export const Marcio: ModalInfo[] = [
    {
        projectImg: MarcioImg,
        projectName: 'Márcio - Motorista Especial',
        projectType: 'Corre da Quebrada',
        projectRepository: 'https://github.com/MatheusJunior2334/Corre-da-Quebrada',
        projectPage: 'https://marcio-motorista-especial.vercel.app/',
        projectAbout: (
            <p>
                Esse projeto faz parte do "Corre da Quebrada", primeiro projeto individual que visa propagar o alcance de iniciativas de trabalho de parentes ou pessoas próximas. O Márcio - Motorista Especial tem o propósito de vender um serviço voltado ao fretamento de pessoas, em que o motorista de viagens especiais - Márcio - é contratado a fim de realizar uma viagem para com o veículo deste contratante, ou seja, contratar um motorista para realizar uma determinada viagem para alguém que tem um veículo de locação mas que não tem um motorista fixo ou que não possa realizar essa viagem.
            </p>
        ),
        projectTechnologies: [<HTML />, <CSS />, <JavaScript />]
    }
]

//JM Bank
export const JMBank: ModalInfo[] = [
    {
        projectImg: JMBankImg,
        projectName: 'JM Bank',
        projectType: 'UC 3',
        projectRepository: 'https://github.com/MatheusJunior2334/Fintech-JM_Bank',
        projectPage: 'https://fintech-jm-bank.vercel.app/',
        projectAbout: (
            <p>
                Esse projeto faz parte da proposta de criação de uma Fintech realizada totalmente em React JS, projeto realizado individualmente no Instituto PROA. A JM Bank é uma Fintech voltado aos jovens e aqueles que tenham alguma dificuldade de organizar as suas finanças da melhor maneira possível em todos os sentidos.
            </p>
        ),
        projectTechnologies: [<ReactJs />, <CSS />]
    }
]

//Pecto
export const Pecto: ModalInfo[] = [
    {
        projectImg: PectoImg,
        projectName: 'Pecto',
        projectType: 'Demoday',
        projectRepository: 'https://github.com/MatheusJunior2334/Pecto',
        projectPage: 'https://demoday-seven.vercel.app/',
        projectAbout: (
            <p>
                Projeto Demoday com a finalidade de auxiliar pessoas que não conseguem se comunicar verbalmente, podendo ser PCDs ou alguém que tenha sofrido um acidente ou algo similar na sua vida que comprometeu a sua fala, mas que também não consiga utilizar-se das linguagens de sinais (Libras) para se expressar, a comunicarem e socializarem com outras pessoas de maneira autônoma, em que utilizam-se de Cards com vozes pré-gravadas a fim de expressar sentimentos, desejos ou questões de formalidade, isso a depender do que o usuário quer expressar naquele momento.
                <br/>
                <br/>
                Obs.: O Python com Machine Learning foi utilizado para realizar a movimentação do cursor do mouse a partir da movimentação da cabeça, e não está aplicado na plataforma em si.
            </p>
        ),
        projectTechnologies: [<ReactJs />, <Sass />, <MySQL />, <JAVA />, <Spring />, <Python />] ,
        projectMembersImg: [CassiaImg, GabrielImg, HitaloImg, IgorImg, JonatasImg, KetelynImg, MatheusImg, MilenyImg],
        projectMembersName: ['Cassia Santos', 'Gabriel Sousa', 'Hitalo Jacome', 'Igor Alves', 'Jonatas Anjos', 'Ketelyn Sousa', 'Matheus Júnior', 'Mileny Nogueira'],
        membersLinkedin: [CassiaLinkedin, GabrielLinkedin, HitaloLinkedin, IgorLinkedin, JonatasLinkedin, KetelynLinkedin, MatheusLinkedin, MilenyLinkedin]
    }
]