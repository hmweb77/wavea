import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBars from '@/components/NavBars'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'wavea',
  description: 'Surfing the digital technology',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
