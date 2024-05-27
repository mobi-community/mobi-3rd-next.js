import Link from "next/link";

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
