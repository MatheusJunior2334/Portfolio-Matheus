import React from 'react';
import styles from '../../styles/technologies.module.scss';

//All Icons
import * as Icons from '../../../../public/assets/icons/allIcons';

const technologyIcons = {
    HTML: Icons.HtmlIcon,
    CSS: Icons.CssIcon,
    Sass: Icons.SassIcon,
    JavaScript: Icons.JavaScriptIcon,
    TypeScript: Icons.TypeScriptIcon,
    ReactJs: Icons.ReactIcon,
    NextJs: Icons.NextIcon,
    MySQL: Icons.MySqlIcon,
    JAVA: Icons.JavaIcon,
    Git: Icons.GitIcon,
    AWS: Icons.AwsIcon,
    Spring: Icons.SpringIcon,
    Python: Icons.PythonIcon,
    Bootstrap: Icons.BootstrapIcon,
}

interface TechnologiesProps {
    image: React.ReactNode;
    name: string;
}

function Technologies({image, name}: TechnologiesProps) {
    return (
        <div className={styles.technologies}>
            {image}
            <p>{name}</p>
        </div>
    )
}

const createTechnologyComponent = (icon: React.ComponentType, name: string) => () => {
    return <Technologies image={React.createElement(icon)} name={name} />
}

export const HTML = createTechnologyComponent(technologyIcons.HTML, 'HTML');
export const CSS = createTechnologyComponent(technologyIcons.CSS, 'CSS');
export const Sass = createTechnologyComponent(technologyIcons.Sass, 'Sass');
export const JavaScript = createTechnologyComponent(technologyIcons.JavaScript, 'JavaScript');
export const TypeScript = createTechnologyComponent(technologyIcons.TypeScript, 'TypeScript');
export const ReactJs = createTechnologyComponent(technologyIcons.ReactJs, 'React.js');
export const NextJs = createTechnologyComponent(technologyIcons.NextJs, 'Next.js');
export const MySQL = createTechnologyComponent(technologyIcons.MySQL, 'MySQL');
export const JAVA = createTechnologyComponent(technologyIcons.JAVA, 'JAVA');
export const Git = createTechnologyComponent(technologyIcons.Git, 'Git');
export const AWS = createTechnologyComponent(technologyIcons.AWS, 'AWS');
export const Spring = createTechnologyComponent(technologyIcons.Spring, 'Spring');
export const Python = createTechnologyComponent(technologyIcons.Python, 'Python')
export const Bootstrap = createTechnologyComponent(technologyIcons.Bootstrap, 'Bootstrap')