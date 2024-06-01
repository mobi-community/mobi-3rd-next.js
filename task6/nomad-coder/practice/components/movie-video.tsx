import { API_URL } from "../app/(home)/page"

const fetchVideo = async (id: string) => {
  await new Promise((resolve)=> setTimeout(()=>{resolve("👍")},5000))
  const response = await fetch(`${API_URL}/${id}/videos`)
  const movieVideo = response.json()
  return movieVideo
}
const MovieVideo = async ({ id }:{id:string}) => {
  const movieVideo = await fetchVideo(id)
  return (
    <div>
      {JSON.stringify(movieVideo)}
    </div>
  )
}
export default MovieVideo