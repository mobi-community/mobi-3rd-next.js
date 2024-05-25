import { Suspense } from 'react';
import MovieVideo from '../../../../components/movie-videos';
import MovieInfo from '../../../../components/movie-info';

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h1>Movie :id detail</h1>
      <Suspense fallback={<h1>Loading...Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading...Video</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
