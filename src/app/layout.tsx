import '~/styles/globals.css'

import { TRPCReactProvider } from '~/trpc/react'
import { antonio, spartan } from '~/ui/fonts'

export const metadata = {
  title: 'Planets',
  description: 'Planet facts and information',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${spartan.variable} ${antonio.variable}`} lang="en">
      <body className="font-spartan">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  )
}
