import styles from './technologies.module.scss';

//All Icons
import { HtmlIcon } from './skills-icons/htmlIcon';
import { CssIcon } from './skills-icons/cssIcon';
import { SassIcon } from './skills-icons/sassIcon';
import { JavaScriptIcon } from './skills-icons/javaScriptIcon';
import { TypeScriptIcon } from './skills-icons/typeScript';
import { ReactJsIcon } from './skills-icons/reactJsIcon';
import { NextJsIcon } from './skills-icons/nextJsIcon';
import { MySqlIcon } from './skills-icons/mySqlIcon';
import { JavaIcon } from './skills-icons/javaIcon';
import { GitIcon } from './skills-icons/gitIcon';
import { AwsIcon } from './skills-icons/awsIcon';

import { SpringIcon } from './skills-icons/springIcon';
import { PythonIcon } from './skills-icons/pythonIcon';
import { BootstrapIcon } from './skills-icons/bootstrapIcon';

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

export const HTML = () => {
    return (
        <Technologies
            image={<HtmlIcon/>}
            name='HTML'
        />
    )
}

export const CSS = () => {
    return (
        <Technologies
            image={<CssIcon/>}
            name='CSS'
        />
    )
}

export const Sass = () => {
    return (
        <Technologies
            image={<SassIcon/>}
            name='Sass'
        />
    )
}

export const JavaScript = () => {
    return (
        <Technologies
            image={<JavaScriptIcon/>}
            name='JavaScript'
        />
    )
}

export const TypeScript = () => {
    return (
        <Technologies
            image={<TypeScriptIcon/>}
            name='TypeScript'
        />
    )
}

export const ReactJs = () => {
    return (
        <Technologies
            image={<ReactJsIcon/>}
            name='React JS'
        />
    )
}

export const NextJs = () => {
    return (
        <Technologies
            image={<NextJsIcon/>}
            name='Next JS'
        />
    )
}

export const MySQL = () => {
    return (
        <Technologies
            image={<MySqlIcon/>}
            name='MySQL'
        />
    )
}

export const JAVA = () => {
    return (
        <Technologies
            image={<JavaIcon/>}
            name='JAVA'
        />
    )
}

export const Git = () => {
    return (
        <Technologies
            image={<GitIcon/>}
            name='Git'
        />
    )
}

export const AWS = () => {
    return (
        <Technologies
            image={<AwsIcon/>}
            name='AWS'
        />
    )
}

export const Spring = () => {
    return (
        <Technologies
            image={<SpringIcon/>}
            name='Spring'
        />
    )
}

export const Python = () => {
    return (
        <Technologies
            image={<PythonIcon/>}
            name='Python'
        />
    )
}

export const Bootstrap = () => {
    return (
        <Technologies
            image={<BootstrapIcon/>}
            name='Bootstrap'
        />
    )
}