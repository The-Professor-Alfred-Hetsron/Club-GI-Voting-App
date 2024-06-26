import './globals.css'
import '@/styles/loginForm.css'
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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#A64AEE"/>
      </head>
      <body className={`${inter.className} lg:hidden`}>{children}</body>
    </html>
  )
}
