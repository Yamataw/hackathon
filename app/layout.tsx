import type { Metadata } from 'next'
import './globals.css'
import { Providers } from "./providers"; // 🔥 Import du provider

export const metadata: Metadata = {
  title: 'SNCF SmartMoove',
  description: 'SmartMoveApp',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
      <Providers> {/* ✅ Maintenant, `TrajetProvider` entoure toute l'application */}
          {children}
      </Providers>
      </body>
    </html>
  )
}
