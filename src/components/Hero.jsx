import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import tasOren from '../assets/tasOren.png'
import tasHijau from '../assets/tasHijau.png'
import tasMerah from '../assets/tasMerah.png'
import tasBiru from '../assets/tasBiru.png'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            bgColor: 'bg-orange-700',
            image: tasOren,
            alt: 'Fashion model 1'
        },
        {
            bgColor: 'bg-green-700',
            image: tasHijau,
            alt: 'Fashion model 2'
        },
        {
            bgColor: 'bg-red-700',
            image: tasMerah,
            alt: 'Fashion model 3'
        },
        {
            bgColor: 'bg-blue-700',
            image: tasBiru,
            alt: 'Fashion model 4'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];

  return (
    <div className={`min-h-screen transition-colors duration-1000 
    overflow-hidden ${currentSlide.bgColor}`}>
        <Navbar />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 h-[calc(90vh-80px)]
        flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center
            pointer-events-none"
            data-aos='fade-up'
            data-aos-delay='1500'>
                <span className="text-[4rem] md:text-[12rem]
                font-black text-black/20 select-none whitespace-nowrap
                animate-pulse">
                    LumiFashion
                </span>
            </div>
            <div className="relative z-10 animate-float"
            data-aos='zoom-in'
            data-aos-duration='1500'
            data-aos-delay='300'>
                <img src={currentSlide.image} alt={currentSlide.alt}
                className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80
                lg:w-120 lg:h-120 -rotate-12 transition-all duration-700
                hover:scale-105 object-cover cursor-pointer relative z-10"/>
            </div>
        </div>
    </div>
  );
};

export default Hero