"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const PostIdArr = () => {
  const arr = Array.from({ length: 8 }, () => generateNumber())

  const router = useRouter()

  const onClickBtn = (num) => {
    router.push(`/post/${num}`)
  }
  return (
    <div className="w-fit">
      {arr.map((num, idx) => (
        <div className="flex gap-5 mt-2" key={idx}>
          <Link href={`/post/${num}`}>
            <span className="hover:bg-blue-200 w-[5rem] flex items-center justify-center border-2 cursor-pointer rounded-lg">
              {num}
            </span>
          </Link>
          <button
            onClick={() => onClickBtn(num)}
            className="bg-black text-white hover:bg-white hover:text-black p-2 rounded-3xl"
          >
            Check out Post
          </button>
        </div>
      ))}
    </div>
  )
}

export default PostIdArr

const generateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10000 + 1)
  return randomNumber
}
