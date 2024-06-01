import { Suspense } from "react"
import MovieInfo from "../../../../components/movie-info"
import MovieVideo from "../../../../components/movie-video"

const MovieDetail = async ({ params: { id } }: {
  params: {id:string}
}) => {
  return (
    <div>
      <br/>
      <Suspense fallback={<h2>기다려 좀..</h2>}>
        <MovieInfo {...{id}} />
      </Suspense>
      <br/>
      <Suspense fallback={<h2>비디오 데이터 가져오는 중..</h2>}>
        <MovieVideo {...{id}} />
      </Suspense>
      <br/>
    </div>
  )
}
export default MovieDetail