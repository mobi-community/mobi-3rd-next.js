"use client";

import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";

export default function PostForm() {
  const router = useRouter();

  const handlePressAddPost = () => {
    //fetch or axios addPosts
    router.refresh();
    //or
    revalidateTag("posts");
  };

  return (
    <form>
      <textarea></textarea>
      <button onClick={handlePressAddPost}>ADD</button>
    </form>
  );
}
