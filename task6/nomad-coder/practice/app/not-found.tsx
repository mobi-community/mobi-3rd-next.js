"use client";

import { usePathname } from "next/navigation";
import Navigation from "../components/navigation";

const NotFound = () => {
  const { } = usePathname()
  return (
    <div>
      <Navigation />
      <h1>Not Found</h1>
    </div>
  )
}


export default NotFound 