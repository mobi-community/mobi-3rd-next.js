"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams.get("postId"));

  const onNavigateMain = () => {
    router.push("/");
  };

  // 해당 컴포넌트는 client component에요! 따라서 상단의 post-detail과는 다르게
  // 콘솔을 찍어도 터미널에 나타나지 않아요!
  console.log("hello");

  // 따라서 훅 함수 사용이 자유로워요! 일반 React Component처럼 사용할 수 있어요 :)
  const [posts, setPosts] = useState<{ title: string; content: string }[]>();

  useEffect(() => {
    setPosts([{ title: "example", content: "example" }]);
  }, []);

  return (
    <div>
      {posts?.map((post, index) => (
        <div key={index}>{post.title}</div>
      ))}
      <button onClick={onNavigateMain}>main</button>
    </div>
  );
}
