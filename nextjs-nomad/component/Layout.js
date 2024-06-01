import NavBar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div className="max-w-[520px]">
      <NavBar />
      <div>{children}</div>
    </div>
  )
}
export default Layout
