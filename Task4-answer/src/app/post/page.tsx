import { TPostResponse } from "@/types/dto/post.dto";
import PostForm from "./_components/post-form";

async function getPost(): Promise<TPostResponse[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      tags: ["posts"],
    },
  });
  return response.json();
}

export default async function Post() {
  const posts = await getPost();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
        </div>
      ))}
      <PostForm />
    </div>
  );
}
