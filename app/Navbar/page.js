import Link from 'next/link'

const Navbar = () => {
 const handleClick = () => {}
 
  return <>
  <header>
  <nav className="bg-slate-700 p-4">
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <h3 className="text-4xl font-bold text-white font-mono text-center md:text-left sm:text-3xl">Kush Sharma</h3>
      <ul className="flex space-x-4">
        <li className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/about">About</Link></li>
        <li  className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/skills">Skills</Link></li>
        <li  className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/projects">Projects</Link></li>
        <li  className="text-white text-base hover:text-slate-300 hover:font-bold"><Link href="/contact">Contact</Link></li>
      </ul>
      <li className="text-white text-base hover:text-slate-300 hover:font-bold list-none">
      <button className='btn btn-active btn-neutral hover:font-bold' onClick={handleClick}>Download CV</button>
      </li>
    </div>
  </nav>
</header>
</>
};

export default Navbar;
