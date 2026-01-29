import React from 'react';

const steps = [
  'Getting started with Kubernetes?',
  'Adopting Kubernetes, but want to double-check your setup?',
  'Adopted Kubernetes, but not seeing the expected ROI?',
  'Overwhelmed by Kubernetes component choices?',
  'Happy with Kubernetes, but ready to automate?'
];

export default function ConsultingSteps() {
  return (
    <div className="relative w-full">
      {/* Rounded background bar */}
      <div
        className="
          bg-[#0b3b46]
          rounded-2xl
          px-12
          py-8
          flex
          justify-between
          items-start
        "
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-[160px]"
          >
            {/* Circle */}
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center -mt-14">
              <div className="w-11 h-11 rounded-full bg-[#0b3b46] flex items-center justify-center">
                <span
                  className={`
                    text-sm font-semibold
                    ${index === 0 ? 'text-white' : 'text-white/60'}
                  `}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Text */}
            <p
              className={`
                mt-4
                text-[10px]
                leading-snug
                ${index === 0 ? 'text-white font-semibold' : 'text-white/60'}
              `}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
