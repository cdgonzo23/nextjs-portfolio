import './globals.css'
import { Inter } from 'next/font/google'
import Home from './pages/home'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christian Gonzales Portfolio',
  description: 'Portfolio Created using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Home /></body>
    </html>
  )
}
