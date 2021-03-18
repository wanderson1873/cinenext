import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Contato() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinemanext | Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fale conosco.
        </h1>
      </main>

    </div>
  )
}
