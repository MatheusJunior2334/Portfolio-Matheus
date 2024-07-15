'use client'

import React from 'react'
import dynamic from 'next/dynamic'

//Components

import { MainLayout } from './layout/mainLayout'

import { MainSection } from './components/sections/main-section/mainSection'
import { About } from './components/sections/about/about'
import Skills from './components/sections/skills/skills'
import { Projects } from './components/sections/projects/projects'
import { Contact } from './components/sections/contact/contact'

import { ChangeLanguage } from './components/UI/changeLanguage'

const ScreenSaver = dynamic(() => import('./components/layout/screen-saver/screenSaver').then(mod => mod.ScreenSaver), {
  ssr: false
})

export default function Home() {
  return (
      <MainLayout>
        <MainSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ChangeLanguage />
        <ScreenSaver timeout={5 * 60 * 1000} />
      </MainLayout>
  )
}