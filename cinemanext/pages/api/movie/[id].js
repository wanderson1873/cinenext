import {apiKey, baseURL} from '../../../lib/tmdb'

export default async (req, res) => {
   let movieList = req.query.id

   const result = await fetch(`${baseURL}/movie/${movieList}?api_key=${apiKey}&language=pt-BR`)
   const json = await result.json()

   res.status(200).json({
      info: json
   })
 }
 