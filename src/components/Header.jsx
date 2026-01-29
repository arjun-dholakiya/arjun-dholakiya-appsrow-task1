import React from 'react';
import chakra from '../assets/chakra.svg';

export default function Header() {
  return (
    <div className="relative mb-32">
      {/* Big heading */}
      <h1
        className="
          text-[3.2rem]
          sm:text-[4rem]
          md:text-[11rem]
          font-medium
          tracking-tight
          leading-[0.9]
          text-white

          text-center
          md:text-left

          mx-auto
          md:mx-0
          md:ml-30
        "
      >
        Kubernetes
      </h1>

      {/* Badge */}
      <span
        className="
    absolute
    left-1/2
    -translate-x-1/2
    top-full
    mt-3

    md:left-[58%]
    md:top-[85%]
    md:mt-0
    md:translate-x-0

    flex
    items-center
    gap-2.5
    text-[12px]
    md:text-[15px]
    font-semibold
    tracking-wide
    bg-[#8fa6ad]
    px-6
    md:px-14
    py-1.5
    md:py-3
    rounded-xl
    text-white
    whitespace-nowrap
  "
      >
        <img src={chakra} alt="" className="w-4 h-4" />
        Certified Service Provider
      </span>
    </div>
  );
}
