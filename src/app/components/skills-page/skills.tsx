import styles from './skills.module.scss';
import ToolsSquare from './toolsSquare';

//Icons - Import

import HtmlIcon from '../skills-icons/htmlIcon';
import CssIcon from '../skills-icons/cssIcon';
import SassIcon from '../skills-icons/sassIcon';
import JavaScriptIcon from '../skills-icons/javaScriptIcon';
import TypeScriptIcon from '../skills-icons/typeScript';
import ReactJsIcon from '../skills-icons/reactJsIcon';
import NextJsIcon from '../skills-icons/nextJsIcon';
import MySqlIcon from '../skills-icons/mySqlIcon';
import JavaIcon from '../skills-icons/javaIcon';
import GitIcon from '../skills-icons/gitIcon';
import AwsIcon from '../skills-icons/awsIcon';


export default function Skills() {

    const tools = [
        { image: <HtmlIcon />, name: 'HTML' },
        { image: <CssIcon />, name: 'CSS' },
        { image: <SassIcon />, name: 'Sass' },
        { image: <JavaScriptIcon />, name: 'JavaScript' },
        { image: <TypeScriptIcon />, name: 'TypeScript' },
        { image: <ReactJsIcon />, name: 'React JS' },
        { image: <NextJsIcon />, name: 'Next JS' },
        { image: <MySqlIcon />, name: 'MySQL' },
        { image: <JavaIcon />, name: 'JAVA' },
        { image: <GitIcon />, name: 'Git' },
        { image: <AwsIcon />, name: 'AWS' }
    ]

    return (
        <section id={styles.skills}>
            <h2>Tecnologias que estudo</h2>
            <div className={styles.technologies}>
                {tools.map((tool, index) => (
                    <ToolsSquare
                        key={index}
                        image={tool.image}
                        name={tool.name}
                    />
                ))}
            </div>
        </section>
    )
}