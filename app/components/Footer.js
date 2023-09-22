'use client';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row justify-center md:justify-between items-center p-4 bg-neutral text-neutral-content">
      <aside className="mb-4 md:mb-0">
        <p className="text-center md:text-left">Copyright © 2023 - All rights reserved</p>
      </aside>
      <nav className="flex gap-4">
        <Link href="mailto:kush.73888@gmail.com" passHref suppressHydrationWarning>
          <a><EmailIcon /></a>
        </Link>
        <Link href="https://www.linkedin.com/in/kushSharma738" passHref suppressHydrationWarning>
          <a><LinkedInIcon /></a>
        </Link>
        <Link href="https://github.com/kushhhhhhhh" passHref suppressHydrationWarning>
          <a><GitHubIcon /></a>
        </Link>
        <Link href="https://www.instagram.com/kushhhhhhh._/?hl=en" passHref suppressHydrationWarning>
          <a><InstagramIcon /></a>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;