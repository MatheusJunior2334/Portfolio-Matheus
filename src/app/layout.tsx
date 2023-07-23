import './globals.css'
import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'

const readexPro = Readex_Pro({ subsets: ['latin'] , weight: ['400'] })

export const metadata: Metadata = {
  title: 'Matheus Junior - Portfolio',
  description: 'My portfolio with my projects and skills in my programming career as a fullstack development student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={readexPro.className}>{children}</body>
    </html>
  )
}
