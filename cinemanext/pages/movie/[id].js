import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinemanext | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {info.title}
        </h1>

        <p>Nota: {info.vote_average}</p>

        <p style={{maxWidth: '400px'}}>{info.overview}</p>
        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="300" /><br/>

        <Link href="/">Home</Link>
        
        

      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
   const paramsId = context.params.id
   const res = await fetch(`http://localhost:3000/api/movie/${paramsId}`)
   const json = await res.json()

   return {
      props: {
         info: json.info
      }
   }
}