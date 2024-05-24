import { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = {
  title: {
    template: `%s | Chan`,
    default: "Chan",
  },
  description: "Chan's Task #2",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
