import './globals.css'

export const metadata = {
  title: 'Ijaz CV and Personal Portfolio Website',
  description: 'Ijaz CV and Personal Portfolio Website',
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
