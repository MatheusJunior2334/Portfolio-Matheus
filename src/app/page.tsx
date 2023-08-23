import styles from './page.module.scss'

//Components

import { Header } from './components/header/header'
import { About } from './components/about/about'
import { Skills } from './components/skills-page/skills'
import { Projects } from './components/projects/projects'
import { ScreenSaver } from './components/screen-saver/screenSaver'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Skills />
      <Projects />

      <ScreenSaver timeout={5 * 60 * 1000} />
    </main>
  )
}
