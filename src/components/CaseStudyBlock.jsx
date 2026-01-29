import React from 'react';
import { motion } from 'framer-motion';

export default function CaseStudyBlock({
  image,
  title,
  description,
  metrics = [],
  buttonText,
  imageSide = 'left'
}) {
  // Container variant to orchestrate children staggered timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each card starts 0.1s after the previous one
        delayChildren: 0.2,
      },
    },
  };

  // Individual card variant: Slide up + Fade in
  const cardVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20 
      }
    },
  };

  const imageWrapperSpacing = imageSide === 'left' ? 'lg:pl-24' : 'lg:pr-22';
  const imageOrder = imageSide === 'left' ? 'lg:order-1' : 'lg:order-2';
  const contentOrder = imageSide === 'left' ? 'lg:order-2' : 'lg:order-1';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-36">
      {/* IMAGE */}
      <div className={`${imageOrder} ${imageWrapperSpacing}`}>
        <div className="rounded-[2.5rem] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-100 h-120 object-cover rounded-[2.5rem]"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className={`${contentOrder} lg:pr-29 lg:pl-20`}>
        <h3 className="text-[26px] font-medium mb-4">{title}</h3>

        <p className="text-[11px] text-white/90 leading-relaxed mb-10 max-w-xl">
          {description}
        </p>

        {/* METRICS GRID WITH STAGGERED MOTION */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the block is visible
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
        >
          {metrics.map((item, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              className="bg-[#0a3a44] rounded-2xl px-3 py-7 min-w-[140px] will-change-transform"
            >
              <p className="text-[26px] font-bold leading-tight whitespace-nowrap mb-2">
                {item.value}
              </p>
              <p className="text-[10px] text-white/90 leading-snug">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* BUTTON */}
        <button className="bg-white text-[#021a20] text-xs font-semibold px-8 py-3 rounded-xl transition-all hover:scale-105 active:scale-95">
          {buttonText}
        </button>
      </div>
    </div>
  );
}