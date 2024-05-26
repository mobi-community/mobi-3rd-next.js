import { resolve } from "path";
import { URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import { Suspense } from "react";
import MovieVideos from "../../../../components/movie-viedos";

// async function getMovie(id: string) {
//     const response = await fetch(`${URL}/${id}`);
//     return response.json();
// }

// async function getViedos(id: string) {
//     const response = await fetch(`${URL}/${id}/viedos`);
//     return response.json();
// }
// async function getViedos(id: string) {
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     const response = await fetch(`${URL}/${id}/viedos`);
//     return response.json();
// }

export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    // const [movie, viedos] = await Promise.all([getMovie(id), getViedos(id)]);
    // return <h1>{movie.title}</h1>;
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie viedos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
