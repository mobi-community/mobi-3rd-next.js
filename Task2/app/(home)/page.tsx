import { Metadata } from "next"
import PostIdArr from "./post-id"

export const metadata: Metadata = {
  title: "Home",
}

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5"
      use-client="true"
    >
      <h1>Welcome Home</h1>
      <h2>Check Some Post</h2>
      <PostIdArr />
    </div>
  )
}

export default Home
