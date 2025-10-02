import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
    const { pathname } = useLocation();


    useEffect(() => {
    // you can use instant or smooth 
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    
  }, [pathname]);

    return null;
};

export default ScrollToTop;