import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src='/logo.svg'
        alt='Vercel Logo'
        className={styles.logo}
        width={100}
        height={100}
        priority
      />
      <h1 className={styles.title}>
        In the development stage, <br /> it will be here soon.
      </h1>
    </main>
  )
}
