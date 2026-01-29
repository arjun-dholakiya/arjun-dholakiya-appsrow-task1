export default function CaseStudyBlock({
  image,
  title,
  description,
  metrics = [],
  buttonText,
  imageSide = 'left'
}) {
  const imageWrapperSpacing =
    imageSide === 'left'
      ? 'lg:pl-24' // image on LEFT → space to the RIGHT
      : 'lg:pr-22'; // image on RIGHT → space to the LEFT

  const imageOrder = imageSide === 'left' ? 'lg:order-1' : 'lg:order-2';

  const contentOrder = imageSide === 'left' ? 'lg:order-2' : 'lg:order-1';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-36">
      {/* IMAGE */}
      <div className={`${imageOrder} ${imageWrapperSpacing}`}>
        <div className="rounded-[2.5rem] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-100 h-120 object-cover rounded-[2.5rem]"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className={`${contentOrder} lg:pr-29 lg:pl-20`}>
        <h3 className="text-[26px] font-medium mb-4">{title}</h3>

        <p className="text-[11px] text-white/90 leading-relaxed mb-10 max-w-xl">
          {description}
        </p>

        {/* METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {metrics.map((item, i) => (
            <div className="bg-[#0a3a44] rounded-2xl px-3 py-7 min-w-[140px]">
              <p className="text-[26px] font-bold leading-tight whitespace-nowrap mb-2">
                {item.value}
              </p>

              <p className="text-[10px] text-white/90 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button className="bg-white text-[#021a20] text-xs font-semibold px-8 py-3 rounded-xl">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
