'use client'

import React, { useState, useEffect } from 'react'
import { LanguageProvider } from './contexts/languageContext'

//Components

import { MainLayout } from './layout/mainLayout'

import { MainSection } from './components/sections/main-section/mainSection'
import { About } from './components/sections/about/about'
import Skills from './components/sections/skills/skills'
import { Projects } from './components/sections/projects/projects'
import { ScreenSaver } from './components/layout/screen-saver/screenSaver'
import { ChangeLanguage } from './components/UI/changeLanguage'

export default function Home() {
  return (
      <LanguageProvider>
        <MainLayout>
          <MainSection />
          <About />
          <Skills />
          <Projects />
          <ChangeLanguage />
          <ScreenSaver timeout={5 * 60 * 1000} />
        </MainLayout>
      </LanguageProvider>
  )
}