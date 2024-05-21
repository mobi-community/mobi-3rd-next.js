"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const path = usePathname()
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}> Home</Link> {path === "/" ? "Check" : ""}
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
          {path === "/about-us" ? "Check" : ""}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
