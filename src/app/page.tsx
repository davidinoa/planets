import { unstable_noStore as noStore } from 'next/cache'

export default function Home() {
  noStore()

  return <main>{/* <MobileNav /> */}</main>
}
