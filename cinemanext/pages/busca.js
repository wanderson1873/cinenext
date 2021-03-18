import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home({list}) {
  const [searchText, setSearchText] = React.useState('')
  const [movieList, setMovieList] = React.useState([])

   const handleSearch = async () => {
      if(searchText !== '') {
         const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`)
         const json = await result.json()
         setMovieList(json.list)
         console.log(json)
      }
   }
   return (
      <div className={styles.container}>
         <Head>
            <title>Cinemanext</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <h1 className={styles.title}>
               Busca
            </h1>

            <input type="text" value={searchText} onChange={event => setSearchText(event.target.value)}/>
            <button onClick={handleSearch} >Buscar</button>
            
            <hr/>
            <ul>
               {movieList.map((item) => (
                  <li key={item.id}>
                     <a href={`/movie/${item.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" alt=""/><br/>
                        <p>{item.title}</p>
                     </a>
                  </li>
               ))}
            </ul>
         </main>
      </div>
  )
}