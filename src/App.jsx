import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import 'animate.css';
import 'aos/dist/aos.css';
import Aos from 'aos';


const App = () => {

   useEffect(() => {
    Aos.init({
      // duration: 1000, 
      // once: true,    
    });
  }, []);
  
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default App;