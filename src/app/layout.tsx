import './globals.scss'
import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'

import { LanguageProvider } from './contexts/languageContext'

const readexPro = Readex_Pro({ subsets: ['latin'] , weight: ['300', '400'] })

export const metadata: Metadata = {
  title: 'Matheus Junior - Portfolio',
  description: 'My portfolio with my projects and skills in my programming career as a fullstack development student',
  icons: {
    icon: '/icon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={readexPro.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}