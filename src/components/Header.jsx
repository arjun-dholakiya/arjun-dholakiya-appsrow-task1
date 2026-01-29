import React from 'react';
import chakra from '../assets/chakra.svg';

export default function Header() {
  return (
    <div className="relative mb-32">
      {/* Big heading */}
      <h1
        className="
          text-[5.5rem]
          md:text-[11rem]
          font-medium
          tracking-tight
          leading-[0.85]
          text-white
          ml-30
        "
      >
        Kubernetes
      </h1>

      {/* Badge — NOT inside flex */}
      <span
        className="
          absolute
          left-[58%]
          top-[85%]
          flex
          items-center
          gap-2
          text-[15px]
          font-bold
          tracking-widest
          bg-[#89a0a7]
          px-14
          py-3
          rounded-xl
          text-[#ffffff]
          whitespace-nowrap
        "
      >
        <img
          src={chakra}
          alt=""
          className="w-4 h-4"
        />
        Certified Service Provider
      </span>
    </div>
  );
}
