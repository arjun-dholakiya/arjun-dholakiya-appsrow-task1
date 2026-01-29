import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import oceanbg from '../assets/oceanbg.svg';
import logo from '../assets/logo.svg';
import '../css/hero.css';
import HeroInfoCard from './HeroInfoCard';
import Navbar from './NavBar';

function Hero() {
  const markerRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [heroInView, setHeroInView] = useState(true);

  /* VERY slow parallax */
  useEffect(() => {
    const onScroll = () => {
      setScrollOffset(window.scrollY * 0.20); // slightly slower
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Detect hero only */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0 }
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

      {/* LOGO (slower return) */}
      <motion.img
        src={logo}
        alt="Pelotech logo"
        className="absolute top-6 left-6 w-28 sm:w-32 md:w-40 z-50"
        animate={{
          x: heroInView ? 0 : -220,
          opacity: heroInView ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 30,   // ⬅ slower
          damping: 26,     // ⬅ smoother
          mass: 1.8        // ⬅ heavier
        }}
      />

      {/* NAVBAR (moves RIGHT now) */}
      <motion.div
        animate={{
          x: heroInView ? 0 : 220,
          opacity: heroInView ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 28,
          damping: 28,
          mass: 1.9
        }}
      >
        <Navbar />
      </motion.div>

      {/* INFO CARD */}
      <motion.div
        className="
          absolute
          top-16
          sm:top-28
          md:top-80
          right-10
          -mt-10
          z-50
        "
        style={{
          transform: `translateX(-${scrollOffset * 0.26}px)`
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
