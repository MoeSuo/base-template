import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Note App',
  description: 'Create a modern Notes',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/github-mark.png",
        href: "/github-mark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/github-mark-white.png",
        href: "/github-mark-white.png",
      }
    ]
  }
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
