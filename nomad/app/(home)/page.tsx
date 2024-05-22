import Movie from "../../components/movie"
import styles from "../../styles/home.module.css"
export const metadata = {
  title: "Home",
}

const getMovies = async () => {
  const response = await fetch(API_URL)
  const json = await response.json()
  return json
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

const HomePage = async () => {
  const movies = await getMovies()
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          key={movie.id}
        />
      ))}
    </div>
  )
}

export default HomePage
