import { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
  title: "Home",
}

const NoSSRPost = dynamic(() => import("./post-id"), { ssr: false })

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5"
      use-client="true"
    >
      <h1>Welcome Home</h1>
      <h2>Check Some Post</h2>
      <NoSSRPost />
    </div>
  )
}

export default Home
