type PostIdProps = {
  params: { id: string }
}

export const generateMetadata = ({ params: { id } }: PostIdProps) => {
  return { title: id }
}

const PostWithId = ({ params: { id } }: PostIdProps) => {
  return <h1>PostId{id}</h1>
}
export default PostWithId
