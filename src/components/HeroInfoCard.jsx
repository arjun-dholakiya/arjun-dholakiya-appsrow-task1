import React from 'react';
import cardImg from '../assets/card-image.svg';

function HeroInfoCard() {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        sm:gap-4
        md:gap-5
        w-[90vw]
        sm:w-auto
        max-w-xs
        sm:max-w-sm
        md:max-w-120
        rounded-xl
        sm:rounded-2xl
        md:rounded-3xl
        bg-white/10
        backdrop-blur-xl
        px-3
        sm:px-4
        md:px-6
        py-3
        sm:py-4
        md:py-5
        text-white
        shadow-[0_8px_32px_rgba(0,200,255,0.25)]
        border
        border-white/10
      "
    >
      {/* Image */}
      <img
        src={cardImg}
        alt="Kubernetes Services"
        className="
          w-10
          h-10
          sm:w-14
          sm:h-14
          md:w-20
          md:h-20
          rounded-lg
          sm:rounded-xl
          md:rounded-2xl
          object-cover
          flex-shrink-0
        "
      />

      {/* Text */}
      <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/90">
        Welcome to Pelotech&apos;s Kubernetes Services page, where we showcase
        our expertise in guiding you through every stage of your Kubernetes
        journey.
      </p>
    </div>
  );
}

export default HeroInfoCard;
