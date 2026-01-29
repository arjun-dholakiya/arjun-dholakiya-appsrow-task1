export default function CaseCTAButton({ text }) {
  return (
    <button className="mt-2 inline-block bg-white text-[#021a20] text-xs font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
      {text}
    </button>
  );
}
