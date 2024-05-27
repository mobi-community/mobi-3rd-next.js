"use client";

import { useRouter, useSearchParams } from "next/navigation";

type PostDetailPageProps = {
    params: {
        id: string;
    };
};

const PostDetailPage = ({ params }: PostDetailPageProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    return (
        <div>
            <h1>Post ID: {params.id}</h1>
            <p>Query: {query}</p>
            <button onClick={() => router.push("/post")}>Posts로 가기</button>
        </div>
    );
};
export default PostDetailPage;
