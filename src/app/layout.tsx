import { TRPCReactProvider } from '~/trpc/react'
import { antonio, spartan } from '~/ui/fonts'
import Header from '~/ui/navbar'

import '~/styles/globals.css'

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
      <body className="mt-[4.25rem] font-spartan text-white md:mt-[8.35rem]">
        <TRPCReactProvider>
          <Header />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  )
}
