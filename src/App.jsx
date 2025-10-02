import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import 'animate.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AuthContext from './components/context/AuthContext';
import Loader from './components/Loader ';


const App = () => {
  const {loading} = useContext(AuthContext)

   useEffect(() => {
    Aos.init({
      // duration: 1000, 
      // once: true,    
    });
  }, []);

  if(loading){
    return <Loader/>
  }
  
  return (
    <div className='max-w-7xl mx-auto'>
      <ScrollToTop/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;