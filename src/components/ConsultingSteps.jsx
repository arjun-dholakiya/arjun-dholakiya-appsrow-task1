import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const steps = [
  'Getting started with Kubernetes?',
  'Adopting Kubernetes, but want to double-check your setup?',
  'Adopted Kubernetes, but not seeing the expected ROI?',
  'Overwhelmed by Kubernetes component choices?',
  'Happy with Kubernetes, but ready to automate?'
];

export default function ConsultingSteps() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  // Auto-scroll active step into view (mobile only)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const item = container.children[active];
    if (item && window.innerWidth < 1024) {
      item.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [active]);

  return (
    <div className="relative w-full">
      {/* Progress bar (mobile only) */}
      <div className="lg:hidden mb-4 px-4">
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="
          bg-[#0b3b46]
          rounded-2xl
          px-6
          lg:px-12
          py-10
          flex
          gap-6
          lg:gap-0
          lg:justify-between
          overflow-x-auto
          lg:overflow-visible
          scroll-smooth
          snap-x
          snap-mandatory
        "
      >
        {steps.map((step, index) => {
          const isActive = active === index;

          return (
            <button
              key={index}
              onClick={() => setActive(index)}
              className="
                flex
                flex-col
                items-center
                text-center
                min-w-[150px]
                lg:max-w-[160px]
                flex-shrink-0
                snap-center
                focus:outline-none
                focus-visible:ring
                focus-visible:ring-white/30
                rounded-xl
              "
            >
              {/* Circle */}
              <motion.div
                animate={{
                  scale: isActive ? 1.12 : 1,
                  opacity: isActive ? 1 : 0.8,
                  boxShadow: isActive
                    ? '0 0 0 6px rgba(255,255,255,0.08)'
                    : 'none'
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="
                  w-12
                  h-12
                  lg:w-14
                  lg:h-14
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  -mt-10
                  lg:-mt-14
                "
              >
                <div
                  className="
                    w-9
                    h-9
                    lg:w-11
                    lg:h-11
                    rounded-full
                    bg-[#0b3b46]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <span className="text-xs lg:text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>

              {/* Text */}
              <motion.p
                animate={{
                  opacity: isActive ? 1 : 0.55,
                  filter: isActive ? 'blur(0px)' : 'blur(0.4px)'
                }}
                transition={{ duration: 0.25 }}
                className="
                  mt-3
                  lg:mt-4
                  text-[11px]
                  lg:text-[10px]
                  leading-snug
                  text-white
                  font-semibold
                "
              >
                {step}
              </motion.p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
