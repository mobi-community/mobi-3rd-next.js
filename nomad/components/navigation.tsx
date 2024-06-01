"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import style from "../styles/navigation.module.css"

const Navigation = () => {
  const path = usePathname()
  return (
    <nav className={style.nav}>
      <ul >
        <li>
          <Link href={"/"}> Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
