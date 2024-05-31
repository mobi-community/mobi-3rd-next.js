import Link from "next/link";
import { getSortedPostsData, PostData } from "../lib/posts";

const Home = async () => {
    const allPostsData = getSortedPostsData();

    return (
        <div>
            <h1>My Blog</h1>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>
                            <h2>{title}</h2>
                        </Link>
                        <small>{date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
