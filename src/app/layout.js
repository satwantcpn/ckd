"use client"
import '../../style/globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>CKD</title>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
