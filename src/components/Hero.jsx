import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import oceanbg from '../assets/oceanbg.svg';
import logo from '../assets/logo.svg';
import '../css/hero.css';
import HeroInfoCard from './HeroInfoCard';
import Navbar from './NavBar';

function Hero() {
  const markerRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [heroInView, setHeroInView] = useState(false);

  /* Smooth parallax */
  useEffect(() => {
    const onScroll = () => {
      setScrollOffset(window.scrollY * 0.2);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Detect hero visibility */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (markerRef.current) observer.observe(markerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero relative overflow-hidden">
      {/* Intersection marker */}
      <div ref={markerRef} className="absolute top-0 h-1 w-full" />

      {/* Background */}
      <img src={oceanbg} alt="Ocean" className="hero-bg" />
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* LOGO + NAVBAR */}
      <AnimatePresence>
        {heroInView && (
          <>
            {/* LOGO */}
            <motion.img
              src={logo}
              alt="Pelotech logo"
              className="absolute top-6 left-6 w-28 sm:w-32 md:w-40 z-50"
              initial={{ x: -180, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -180, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 18,
                mass: 0.9
              }}
            />

            {/* NAVBAR */}
            <motion.div
              initial={{ x: 180, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 180, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 110,
                damping: 20,
                mass: 1
              }}
            >
              <Navbar />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* INFO CARD — moved UP + faster parallax */}
      <motion.div
        className="
          absolute
          top-10
          sm:top-20
          md:top-64
          right-10
          z-50
        "
        style={{
          transform: `translateX(-${scrollOffset * 0.42}px)`
        }}
      >
        <HeroInfoCard />
      </motion.div>

      {/* HERO TEXT */}
      <h1
        className="
          hero-title
          text-[96px]
          sm:text-[160px]
          md:text-[250px]
          lg:text-[350px]
          z-20
        "
        style={{
          transform: `translateX(-${scrollOffset}px)`
        }}
      >
        Kubernetes
      </h1>
    </section>
  );
}

export default Hero;
