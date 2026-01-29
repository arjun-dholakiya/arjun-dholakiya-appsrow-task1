import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import tline from '../assets/tline.svg';

export default function FeatureCard({
  icon,
  title,
  description,
  image,
  cta,
  className = '',
  parallax = 0.15
}) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isImageCard = !!image;

  // Check for mobile to disable parallax
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Calculate vertical offset: bottom -> up
  // We use a spring for extra smoothness
  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0 : 50 * parallax, isMobile ? 0 : -50 * parallax]
  );
  
  const y = useSpring(yRaw, { stiffness: 400, damping: 90 });

  return (
    <div
      ref={ref}
      className={`
        relative
        rounded-[2rem]
        bg-[#0b3b46]
        text-white
        w-80
        overflow-hidden
        ${isImageCard ? 'h-full min-h-[150px]' : 'p-8'}
        ${className}
      `}
    >
      <motion.div 
        style={{ y }} 
        className={`flex flex-col h-full ${isImageCard ? 'p-0' : ''}`}
      >
        {/* Decorative line */}
{/*         {!isImageCard && (
          <img
            src={tline}
            alt=""
            className="absolute top-20 right-4  h-5 opacity-40 pointer-events-none"
          />
        )} */}

        {/* Content */}
        {!image && (
          <div className="relative z-10">
            {icon && <div className="mb-6">{icon}</div>}
            {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
            {description && (
              <p className="text-sm text-white/80 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Image card content */}
        {image && (
          <div className="relative h-80 w-full">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover object-left scale-110" // Scale up slightly to prevent edges showing during parallax
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        {/* CTA */}
        {cta && (
          <div
            className={
              image ? 'absolute bottom-8 left-8 z-10' : 'mt-auto pt-8 z-10'
            }
          >
            <button className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0b3b46] hover:bg-opacity-90 transition-all active:scale-95 shadow-xl">
              {cta}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}