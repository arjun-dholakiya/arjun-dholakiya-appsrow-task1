import React from 'react';
import FeatureCard from './FeatureCard2';

import certificate from '../assets/certificate.svg';
import handshake from '../assets/handshake.svg';
import shield from '../assets/shield.svg';
import pin from '../assets/pin.svg';
import timer from '../assets/timer.svg';
import label from '../assets/label.svg';

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
      <FeatureCard
        icon={certificate}
        title="Senior, certified engineers"
        desc="CKA-certified leads who reduce risk, speed delivery, and drive outcomes."
      />

      <FeatureCard
        icon={handshake}
        title="Official Kubernetes partner"
        desc="Proven processes that lower rollout risk and increase predictability."
      />

      <FeatureCard
        icon={shield}
        title="Security-first approach"
        desc="Built-in security and audit readiness to cut risk and ease compliance."
      />

      <FeatureCard
        icon={pin}
        title="US-based"
        desc="Local overlap and accountability without offshore overhead."
      />

      <FeatureCard
        icon={timer}
        title="Fast, measurable ROI"
        desc="Projects in months — lower costs, fewer incidents, faster time-to-market."
      />

      {/* CTA Card */}
      <FeatureCard isCTA>
        <div className="flex flex-col items-center justify-center h-full gap-8 isolate">
          {/* Badge */}
          <img
            src={label}
            alt="Kubernetes Certified"
            className="w-36 h-36 mix-blend-luminosity grayscale-75"
          />

          {/* CTA Button */}
          <button
            className="
              rounded-xl
              bg-white
              px-2
              py-3
              text-[15px]
              font-bold
              tracking-widest
              text-[#021a20]
              hover:bg-teal-50
              transition-all
           
              shadow-lg
            "
          >
            Talk to a Kubernetes Certified Expert
          </button>
        </div>
      </FeatureCard>
    </div>
  );
}
