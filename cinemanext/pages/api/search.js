import {apiKey, baseURL} from '../../lib/tmdb'

export default async (req, res) => {
   let searchQ = req.query.q

   const result = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&language=pt-BR&query=${searchQ}&page=1`)
   const json = await result.json()

   res.status(200).json({
      list: json.results
   })
 }
 