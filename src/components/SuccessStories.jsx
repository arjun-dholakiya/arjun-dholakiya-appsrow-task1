import mathew from '../assets/mathew.svg';
import liam from '../assets/liam.svg';

export default function SuccessStories() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto">
        {/* Top header row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <h2 className="text-[40px] font-medium text-[#021a20] ml-4">
            Success stories
          </h2>

          <p className="text-[15px] text-[#232728] max-w-md">
            Real-world results. Measurable impact. Trusted partnerships. At
            Pelotech, client success isn’t a side effect, it’s the outcome we
            engineer for. Here’s what our partners have to say about working
            with us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="rounded-[28px] bg-[#083a46] p-10 text-white relative">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={mathew}
                alt="Matthew Holmes"
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <p className="text-sm font-semibold">Matthew Holmes</p>
                <p className="text-xs text-white/70">Stem Learning</p>
              </div>
            </div>

            {/* Text */}
            <p className="text-sm leading-relaxed text-white/90">
              Pelotech’s deep Kubernetes expertise and seamless integration with
              our team were instrumental in our cloud migration.{' '}
              <span className="bg-white/15 px-1.5 py-0.5 rounded">
                They helped us achieve scalability and cost efficiency we didn’t
                think possible in such a short timeframe.
              </span>{' '}
              Their guidance on Kubernetes optimization was{' '}
              <span className="bg-white/15 px-1.5 py-0.5 rounded">
                invaluable.
              </span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[28px] bg-[#083a46] p-10 text-white relative">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={liam}
                alt="Liam Dorney"
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <p className="text-sm font-semibold">Liam Dorney</p>
                <p className="text-xs text-white/70">UKi</p>
              </div>
            </div>

            {/* Text */}
            <p className="text-sm leading-relaxed text-white/90">
              The Pelotech team tackled our complex modernization project with
              <span className="bg-white/15 px-1.5 py-0.5 rounded">
                incredible speed and precision.
              </span>{' '}
              Their Kubernetes implementation led to{' '}
              <span className="bg-white/15 px-1.5 py-0.5 rounded">
                significant cost savings and played a crucial role in achieving
                our FedRAMP certification goals.
              </span>{' '}
              They truly are partners who{' '}
              <span className="bg-white/15 px-1.5 py-0.5 rounded">
                deliver on their promises
              </span>{' '}
              of Kubernetes engineering and consulting services.
            </p>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-12">
          <span className="w-2 h-2 rounded-full bg-[#cfd9dc]" />
          <span className="w-2 h-2 rounded-full bg-[#021a20]" />
          <span className="w-2 h-2 rounded-full bg-[#cfd9dc]" />
        </div>
      </div>
    </section>
  );
}
