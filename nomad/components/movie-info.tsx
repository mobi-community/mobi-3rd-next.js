import { API_URL } from "../app/(home)/page"
import styles from "../styles/movie-info.module.css"
export const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id)
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.container}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>평점 :{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          HomePage &rarr;
        </a>
      </div>
    </div>
  )
}

export default MovieInfo
