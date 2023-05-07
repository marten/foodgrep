import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-4'>
      <header>Beilen</header>
      <Link href="/piccola" className="block w-64 h-64 p-4 bg-amber-200 rounded-md font-bold">Piccola Roma Beilen</Link>
    </main>
  )
}
