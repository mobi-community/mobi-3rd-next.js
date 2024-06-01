import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "post",
};

const PostPage = ({ params }) => {
    return (
        <>
            <h1>PostPage!!!!!</h1>
            <h2>{params.id}</h2>
            <Link href={"/post/1"}>Link post1</Link>
        </>
    );
};
export default PostPage;
