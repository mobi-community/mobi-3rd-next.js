import Seo from "@/component/Seo"
import { useRouter } from "next/router"

const Detail = ({ params }) => {
  const router = useRouter()
  const [title, id] = params || []

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  )
}

export default Detail

export const getServerSideProps = ({ params: { params } }) => {
  return {
    props: { params },
  }
}
