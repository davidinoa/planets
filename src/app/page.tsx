import { unstable_noStore as noStore } from 'next/cache'

export default function Home() {
  noStore()

  return <main className="content-grid h-[300vh]" />
}
