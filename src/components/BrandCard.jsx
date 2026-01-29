import React from 'react';
import companyList from '../assets/companylist.svg';

export default function BrandCard() {
  return (
    <section className="w-full bg-brand">
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          py-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >
        {/* Text */}
        <p className="text-white text-lg font-medium">
          Companies we’ve worked with
        </p>

        {/* Company logos */}
        <img
          src={companyList}
          alt="List of companies"
          className="
            w-full
            max-w-full
            md:max-w-2xl
            lg:max-w-3xl
          "
        />
      </div>
    </section>
  );
}
