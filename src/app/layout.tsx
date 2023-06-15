import './globals.css'
import { Dosis } from 'next/font/google'

const dosis = Dosis({
  weight: ['200', '400', '600'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Yotfil Developer',
  description: 'A website created by a developer in love with his profession',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={dosis.className}>{children}</body>
    </html>
  )
}
