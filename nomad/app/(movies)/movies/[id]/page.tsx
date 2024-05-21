import { Suspense } from "react"
import MovieInfo from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <h2>Movie Detail</h2>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h2>Video</h2>
      <Suspense fallback={<h1>Loading Movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}
export default MovieDetail
