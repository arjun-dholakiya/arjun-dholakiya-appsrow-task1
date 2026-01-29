import React, { useState } from 'react';
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

  return (
    <div className="relative w-full">
      <div className="bg-[#0b3b46] rounded-2xl px-12 py-8 flex justify-between items-start">
        {steps.map((step, index) => {
          const isActive = active === index;

          return (
            <button
              key={index}
              onClick={() => setActive(index)}
              className="flex flex-col items-center text-center max-w-[160px] focus:outline-none"
            >
              {/* Circle */}
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                  opacity: isActive ? 1 : 0.85
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center -mt-14"
              >
                <div className="w-11 h-11 rounded-full bg-[#0b3b46] flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">
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
                className={`
                  mt-4
                  text-[10px]
                  leading-snug
                  ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white'
                  }
                `}
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
