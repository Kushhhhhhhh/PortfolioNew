'use client'
import React from 'react';
import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <main className='flex flex-col justify-between items-center'>
    <footer className="footer flex flex-col md:flex-row justify-center md:justify-between items-center p-4 bg-neutral text-neutral-content">
      <aside className="mb-4 md:mb-0">
        <p className="text-center md:text-left">Copyright © 2023 - All rights reserved</p>
      </aside>
      <nav className="flex gap-4">
        <Link href="mailto:kush.73888@gmail.com"><EmailIcon /></Link>
        <Link href="https://www.linkedin.com/in/kushSharma738"><LinkedInIcon /></Link>
        <Link href="https://github.com/kushhhhhhhh"><GitHubIcon /></Link>
        <Link href="https://www.instagram.com/kushhhhhhh._/?hl=en"><InstagramIcon /></Link>
      </nav>
    </footer>
  </main>
  );
};

export default Footer;