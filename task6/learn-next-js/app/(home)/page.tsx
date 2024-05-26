import Link from "next/link";
import { resolve } from "path";

export const metadata = {
    // title이랑 description 둘다 따로 다른파일에서 관리되지만 이건 중첩이아니라 사실상 머지임
    title: "Home ", //페이지 맨처음 헤드에 표시
    description: "The best movis on the best framework",
};
export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}
