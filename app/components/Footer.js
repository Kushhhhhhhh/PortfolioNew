'use client';

import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const handleEmailClick = () => {
    // Handle email icon click
    window.location.href = 'mailto:kush.73888@gmail.com';
  };

  const handleLinkedInClick = () => {
    // Handle LinkedIn icon click
    window.location.href = 'https://www.linkedin.com/in/kushSharma738';
  };

  const handleGitHubClick = () => {
    // Handle GitHub icon click
    window.location.href = 'https://github.com/kushhhhhhhh';
  };

  const handleInstagramClick = () => {
    // Handle Instagram icon click
    window.location.href = 'https://www.instagram.com/kushhhhhhh._/?hl=en';
  };

  return (
    <footer suppressHydrationWarning={true} className="footer flex flex-col md:flex-row justify-center md:justify-between items-center p-4 bg-neutral text-neutral-content">
      <aside className="mb-4 md:mb-0">
        <p className="text-center md:text-left">Copyright © 2023 - All rights reserved</p>
      </aside>
      <nav className="flex gap-4">
        <EmailIcon onClick={handleEmailClick} style={{ cursor: 'pointer' }} />
        <LinkedInIcon onClick={handleLinkedInClick} style={{ cursor: 'pointer' }} />
        <GitHubIcon onClick={handleGitHubClick} style={{ cursor: 'pointer' }} />
        <InstagramIcon onClick={handleInstagramClick} style={{ cursor: 'pointer' }} />
      </nav>
    </footer>
  );
};

export default Footer;