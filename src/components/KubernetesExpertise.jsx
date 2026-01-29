import React from 'react';
import Header from './Header';
import FeaturesGrid from './FeaturesGrid';
import BottomText from './BottomText';

export default function KubernetesExpertise() {
  return (
    <section className="relative bg-[#021a20] text-white py-32 px-6 overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[600px] bg-gradient-to-r from-transparent via-teal-500/10 to-transparent blur-[120px] -translate-y-1/2 rotate-12" />
        <div className="absolute top-[60%] left-[-10%] w-[120%] h-px bg-white/5 -rotate-6" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Header />
        <FeaturesGrid />
        <BottomText />
      </div>
    </section>
  );
}
