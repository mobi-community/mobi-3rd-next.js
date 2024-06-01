import { type Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home"
}
export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

const fetchMovies = async () => {
  const response = await fetch(API_URL)
  const movies = await response.json()
  return movies
}

const HomePage = async () => {
  const movies = await fetchMovies()

  return (
    <div>
      <div>
        {
          movies.map((movie,idx) => {
            return (
              <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}
export default HomePage