import React, { useEffect } from 'react';
import Typed from 'typed.js';

const HomePage = () => {
  useEffect(() => {
    const options = {
      strings: ['Full Stack Developer', 'MERN Stack Developer'],
      typeSpeed: 40,
      backSpeed: 20, 
      backDelay: 1000,
      loop: true, 
    };

    const typed = new Typed('#typed', options);

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <main>
      {/* LEFT */}
      <div id="typed-strings">
        <h3>Hey, My name is <span>Kush Sharma</span></h3>
        <h3>I'm a <span id="typed"></span></h3>
        <p>Let's connect and create something amazing together.</p>
      </div>
      {/* RIGHT */}
      <div></div>
    </main>
  );
}

export default HomePage;