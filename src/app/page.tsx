'use client'

import React, { useState, useEffect } from 'react'

//Components

import { MainLayout } from './layout/mainLayout'
import { About } from './components/sections/about/about'
import { Skills } from './components/sections/skills/skills'
import { Projects } from './components/sections/projects/projects'
import { ScreenSaver } from './components/layout/screen-saver/screenSaver'

import Animation from './components/animations/animation'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  return (
      isLoading ? (
        <Animation startHidePage={isContentLoaded} />
      ) : (
        <MainLayout>
          <About />
          <Skills />
          <Projects />
          <ScreenSaver timeout={5 * 60 * 1000} />
        </MainLayout>
      )
  )
}
