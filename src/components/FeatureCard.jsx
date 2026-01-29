import React from 'react';
import tline from '../assets/tline.svg';

export default function FeatureCard({
  icon,
  title,
  description,
  image,
  cta,
  className = ''
}) {
  const isImageCard = !!image;

  return (
    <div
      className={`
        relative
        rounded-[2rem]
        bg-[#0b3b46]
        text-white
        flex
        flex-col
        h-auto
        w-80
        overflow-hidden
        justify-center
        ${isImageCard ? 'p-0' : 'p-8'}
        ${className}
      `}
    >
      {/*  Decorative Shape (ALL boxes) */}
      {!isImageCard && (
        <img
          src={tline}
          alt=""
          className="absolute top-0 left-75 h-5 top-20 pointer-events-none"
        />
      )}

      {/* Content */}
      {!image && (
        <div className="relative z-10">
          {icon && <div className="mb-6">{icon}</div>}
          {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
          {description && (
            <p className="text-sm text-white/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Image Card */}
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="relative inset-0 w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </>
      )}

      {/* CTA */}
      {cta && (
        <div
          className={
            image ? 'absolute bottom-8 left-8 z-10' : 'mt-auto pt-4 z-10'
          }
        >
          <button className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-[#0b3b46] hover:bg-opacity-90 transition-all active:scale-95 shadow-xl">
            {cta}
          </button>
        </div>
      )}
    </div>
  );
}
