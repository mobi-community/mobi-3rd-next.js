"use client";

import { API_URL } from "@/utils/env";
import { revalidateTag } from "next/cache";
// import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PostForm() {
    // const router = useRouter();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handlePressAddPost = async () => {
        //fetch or axios addPosts
        const newPost = { title, body, userId: 1 };

        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });

        setTitle("");
        setBody("");
        // router.refresh();
        //or
        revalidateTag("posts");
    };

    return (
        <form>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="body"
            />
            <button onClick={handlePressAddPost}>ADD</button>
        </form>
    );
}
