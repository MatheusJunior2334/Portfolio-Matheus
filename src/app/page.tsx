'use client'

import React, { useState, useEffect } from 'react'

//Components

import { MainLayout } from './layout/mainLayout'
import { About } from './components/sections/about/about'
import Skills from './components/sections/skills/skills'
import { Projects } from './components/sections/projects/projects'
import { ScreenSaver } from './components/layout/screen-saver/screenSaver'

export default function Home() {
  return (
      <MainLayout>
        <About />
        <Skills />
        <Projects />
        {/* <ScreenSaver timeout={5 * 60 * 1000} /> */}
      </MainLayout>
  )
}

// isLoading ? (
      //   <Animation startHidePage={isContentLoaded} />
      // ) : (