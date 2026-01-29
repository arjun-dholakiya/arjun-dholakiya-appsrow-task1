import React, { useState } from 'react';

function Navbar() {
  const [active, setActive] = useState('Services');

  return (
    <nav
      className="
        fixed
        top-5
        left-5/8
        translate-x-[-46%]
        z-50
        w-[63%]
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
        <NavItem label="Services" active={active} setActive={setActive} />
        <NavItem label="Customer cases" active={active} setActive={setActive} />
        <NavItem label="Resources" active={active} setActive={setActive} />
        <NavItem label="Company" active={active} setActive={setActive} />
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

function NavItem({ label, active, setActive }) {
  const isActive = active === label;

  return (
    <button
      onClick={() => setActive(label)}
      className={`
        flex
        items-center
        gap-1
        px-3
        py-1.5
        rounded-xl
        transition
        ${
          isActive ? 'bg-white/20 text-white' : 'text-white/90 hover:text-white'
        }
      `}
    >
      {label}
      <span className="text-xs opacity-70">▾</span>
    </button>
  );
}

export default Navbar;
