'use client';
import Link from 'next/link'
import Navbar from './Navbar/page';
import HomePage from './HomePage/page';
import About from './about/page';

export default function Home() {
  return (
    <section>
      <Navbar />
      <Link href="/"><HomePage /></Link>
    </section>
  )
}
