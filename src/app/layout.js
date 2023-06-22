"use client"
import '../../style/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer';

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
