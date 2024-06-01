import { TPostResponse } from "@/types/dto/post.dto";

import { API_URL } from "@/utils/env";
import PostForm from "./_components/post-form";
import PostList from "./_components/post-list";

async function getPosts(): Promise<TPostResponse[]> {
    const response = await fetch(API_URL, {
        next: {
            tags: ["posts"],
        },
    });
    return response.json();
}

export default async function PostPage() {
    const posts = await getPosts();

    return (
        <div>
            <PostList initialPosts={posts} />
            <PostForm />
        </div>
    );
}
