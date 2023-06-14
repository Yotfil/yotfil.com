import './globals.css'
import { Mukta } from 'next/font/google'

const mukta = Mukta({
  weight: ['200', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Yotfil Developer',
  description: 'A website created by a developer in love with his profession',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={mukta.className}>{children}</body>
    </html>
  )
}
