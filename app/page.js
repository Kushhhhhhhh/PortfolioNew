'use client';
import Link from 'next/link'
import Navbar from './components/Navbar';
import HomePage from './HomePage/page';

export default function Home() {
  return (
    <section>
      <Navbar />
      <Link href="/"><HomePage /></Link>
    </section>
  )
}
