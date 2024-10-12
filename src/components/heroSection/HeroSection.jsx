import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    '/img/hero1.png',
    '/img/hero2.png',
    '/img/hero3.png',
    '/img/hero4.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((idx) => {
        return (idx === images.length - 1) ? 0 : idx + 1;
      });
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className='relative lg:h-80 h-screen mt-10'>
      {images.map((image, index) => (
       <div
       key={index}
       className={`absolute inset-0 transition-opacity duration-1000 ${
         index === currentImageIndex ? 'opacity-100' : 'opacity-0'
       }`}
       style={{
         backgroundImage: `url(${image})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
       }}
     />
    ))}
    </div>
  );
}

export default HeroSection;
