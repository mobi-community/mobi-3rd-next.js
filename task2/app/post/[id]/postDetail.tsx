"use Client";

import { useRouter } from "next/navigation";

const PostDetail = () => {
    const router = useRouter();
    const queryParams = router.push("/post/1");
    return (
        <>
            <h1>여기는 포스트 디테일 페이지입니다 </h1>
            <h2>{JSON.stringify(queryParams)}</h2>
        </>
    );
};
export default PostDetail;
