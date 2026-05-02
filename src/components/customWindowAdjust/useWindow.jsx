import React, { useEffect, useState } from 'react'

export const useWindow = () => {
    const [width,setWidht] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResize = () => {
            setWidht(window.innerWidth);
        }
        window.addEventListener("resize",handleResize);
        return () => {
            window.removeEventListener("resize",handleResize);
        }


    },[])
     const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;
    return {isMobile,isTablet,isDesktop}
}
