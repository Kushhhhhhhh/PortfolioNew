import React from 'react'
import Login from '../components/Login';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Contact = () => {
  return  <>
   <Navbar />

      <main className='w-full min-h-screen'>
        <Login />
      </main>

   <Footer />   
 </>
}

export default Contact;
