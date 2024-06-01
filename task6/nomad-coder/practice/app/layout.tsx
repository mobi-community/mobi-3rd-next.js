import { type Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata:Metadata = {
  title: {
    template: "%s | Jeff's Application",
    default: "Jeffs Application",
  },
  description: 'Generated by Next.js',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
