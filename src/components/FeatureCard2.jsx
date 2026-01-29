import React from 'react';

export default function FeatureCard2({
  icon,
  title,
  desc,
  children,
  isCTA = false
}) {
  return (
    <div
      className="
      relative
      h-[380px]
      rounded-[2.5rem]
      bg-[#052831]
      p-12
      flex
      flex-col
      border
      border-white/5
      shadow-2xl
      overflow-hidden
    "
    >
      


      {/* Icon */}
      {!isCTA && icon && (
        <div className="w-12 h-12 mb-8 relative z-10">
          <img src={icon} alt="" className="w-full h-full opacity-90" />
        </div>
      )}

      {/* Content */}
      <div className="mt-auto relative z-10">
        {!isCTA && (
          <>
            <h3 className="text-[22px] font-semibold text-white mb-3 tracking-tight leading-snug">
              {title}
            </h3>
            <p className="text-[14px] text-white/60 leading-relaxed font-medium max-w-[90%]">
              {desc}
            </p>
          </>
        )}

        {children}
      </div>
    </div>
  );
}
