export const metadata = {
  title: 'Pharmacology Chronicles - Professional Textbook Cover',
  description: 'MBBS Clinical & Molecular Reference with In-Depth Knowledge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
