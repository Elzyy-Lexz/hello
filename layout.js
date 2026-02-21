import './globals.css'

export const metadata = {
  title: 'Booster Sosmed - SMM Panel Terbaik Indonesia',
  description: 'Platform SMM Panel terbaik dan termurah di Indonesia. Boost followers, likes, views, dan lebih banyak lagi!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
