import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
  const isImageCard = !!image;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // 1. Removed the isMobile ? 0 check to allow movement on all screens
  const yRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * parallax, -100 * parallax] // Increased range for better visibility
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
        w-full md:w-80 // Ensure it takes full width on mobile
        overflow-hidden
        ${isImageCard ? 'h-[300px] md:h-full' : 'p-8'}
        ${className}
      `}
    >
      <motion.div 
        style={{ y }} 
        className={`flex flex-col h-full will-change-transform ${isImageCard ? 'p-0' : ''}`}
      >
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

        {image && (
          <div className="relative h-full w-full">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover scale-125" // Scale up more to cover parallax travel
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        {cta && (
          <div className={image ? 'absolute bottom-8 left-8 z-10' : 'mt-auto pt-8 z-10'}>
            <button className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0b3b46]">
              {cta}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}