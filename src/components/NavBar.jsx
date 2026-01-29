import React from 'react';

function Navbar() {
  return (
    <nav
      className="
        fixed
        top-6
        left-5/8
        translate-x-[-35%]
        z-50
        w-[55%]
        max-w-4xl
        rounded-2xl
        bg-white/15
        backdrop-blur-xl
        border
        border-white/20
        px-2
        py-2
        flex
        items-center
        justify-between
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      "
    >
      {/* Menu */}
      <div className="flex items-center gap-6 text-white text-sm font-medium">
        <NavItem label="Services" />
        <NavItem label="Customer cases" />
        <NavItem label="Resources" />
        <NavItem label="Company" />
      </div>

      {/* CTA */}
      <button
        className="
          rounded-full
          bg-white
          px-4
          py-2
          text-sm
          font-semibold
          text-black
          hover:bg-gray-100
          transition
        "
      >
        Talk to a Kubernetes expert
      </button>
    </nav>
  );
}

function NavItem({ label }) {
  return (
    <button className="flex items-center gap-1 text-white/90 hover:text-white">
      {label}
      <span className="text-xs opacity-70">▾</span>
    </button>
  );
}

export default Navbar;
