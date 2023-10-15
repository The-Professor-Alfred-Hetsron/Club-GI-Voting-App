import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { slogan, appName } from "@/constant/appInfo"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:`${appName} - Voting App`,
  description: slogan,
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
