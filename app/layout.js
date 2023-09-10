import './globals.css'

export const metadata = {
  title: 'Kush Sharma',
  description: "Hey, it's my portfolio website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
