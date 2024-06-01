"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const curPath = usePathname()
  
  const indicateCurPath = (path:string, pathAlias:string) => {
    let printed = pathAlias
    if (curPath === path) printed += " 👈"
    return printed
  }
  
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">{indicateCurPath("/", "Home")}</Link>
        </li>
        <li>
          <Link href="/about-us">{indicateCurPath("/about-us", "About Us")}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation