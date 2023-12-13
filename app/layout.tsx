import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fraol Zeleke",
  description:
    "I am Dr.Fraol Zeleke. This is my personal protfolio website where I showcase my work and achievements in my carrier.",
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
