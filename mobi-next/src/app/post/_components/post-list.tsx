"use client";

import { TPostResponse } from "@/types/dto/post.dto";
import { API_URL } from "@/utils/env";
import { useState } from "react";

type PostListProps = {
    initialPosts: TPostResponse[];
};

const PostList = ({ initialPosts }: PostListProps) => {
    const [post, setPost] = useState<TPostResponse[]>(initialPosts);

    const deletePost = async (id: number) => {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        setPost(post.filter((post) => post.id !== id));
    };

    return (
        <div>
            {post.map((post) => (
                <div key={post.id}>
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                    <button onClick={() => deletePost(post.id)}>삭제</button>
                </div>
            ))}
        </div>
    );
};
export default PostList;
