import { API_URL } from "../app/(home)/page"

const fetchMovieDetail = async (id: string) => {
  await new Promise((resolve)=> setTimeout(()=>{resolve("👍")},3000))
  const response = await fetch(`${API_URL}/${id}`)
  const movieDetail = response.json()
  return movieDetail
}

const MovieInfo = async ({ id }:{id:string}) => {
  const movieInfo = await fetchMovieDetail(id)
  console.log(id)

  return (
    <div>{JSON.stringify(movieInfo)}</div>
  )
}
export default MovieInfo