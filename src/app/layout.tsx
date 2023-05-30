import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "USTAGRAM",
  description: "Next.js로 만든 인스타그램 클론 프로젝트",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
