import './globals.css'
import { Finlandica } from 'next/font/google'

import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

const inter = Finlandica({ subsets: ['latin'] })

export const metadata = {
  title : 'Weather - Next App',
  description: 'App to determine the weather ',
  keywords:'weather, humidity, windspeed, temperature and units', 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex'>
        {children}
        </main>
        <main>
        <SearchBar />
        </main>

        <Footer />
        </body>
    </html>
  )
}
