import { useRouter } from "next/router"

const Detail = () => {
  const router = useRouter()
  console.log(router)
  return "detail"
}

export default Detail
