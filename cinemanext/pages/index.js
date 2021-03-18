import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({name}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinemanext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaques
        </h1>
        Meu nome é {name}

      </main>
    </div>
  )
}

export async function getServerSideProps() {

  return {
    props: {
      name: 'Wanderson'
    }
  }
}