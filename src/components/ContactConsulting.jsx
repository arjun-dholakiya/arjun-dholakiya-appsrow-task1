import React from 'react';

export default function ContactConsulting() {
  return (
    <section className="bg-[#f9fbfb] pt-36 pb-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[140px] items-start">
          {/* LEFT — FORM */}
          <div>
            <h2 className="text-[40px] font-medium text-[#021a20] leading-tight mb-10">
              Migrate to <br />
              Kubernetes with <br />
              Confidence
            </h2>

            <div className="max-w-[500px] space-y-6">
              {/* Name */}
              <div>
                <label className="block text-xs text-[#020202] mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full rounded-xl border border-[#e1e8ea] px-4 py-3 text-sm outline-none bg-white"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs text-[#020202] mb-1">
                  Company name*
                </label>
                <input
                  type="text"
                  placeholder="Company name*"
                  className="w-full rounded-xl border border-[#e1e8ea] px-4 py-3 text-sm outline-none bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-[#020202] mb-1">
                  Email address*
                </label>
                <input
                  type="email"
                  placeholder="Email address*"
                  className="w-full rounded-xl border border-[#e1e8ea] px-4 py-3 text-sm outline-none bg-white"
                />
              </div>

              {/* Brief */}
              <div>
                <label className="block text-xs text-[#020202] mb-1">
                  Please share some brief details
                </label>
                <input
                  type="text"
                  placeholder="Brief detail"
                  className="w-full rounded-xl border border-[#e1e8ea] px-4 py-3 text-sm outline-none bg-white"
                />
              </div>

              {/* Submit */}
              <button className="w-full mt-6 rounded-xl bg-[#021a20] py-3.5 text-sm font-medium text-white">
                Submit
              </button>
            </div>
          </div>

          {/* RIGHT — INFO */}
          <div className="pt-20">
            <p className="text-[14px] text-[#02252F] max-w-md mb-16 leading-relaxed font-medium">
              Contact us to discuss how our consulting can help you build an
              efficient, reliable, and scalable Kubernetes architecture.
            </p>

            <h3 className="text-[26px] font-medium text-[#021a20] mb-10">
              What happens next
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-14 max-w-lg">
              <div>
                <p className="text-sm font-semibold text-[#021a20] mb-2">
                  Kick-Off Call (30 min)
                </p>
                <p className="text-[14px] text-[#020202] leading-relaxed">
                  We learn about your business, challenges, and goals. Decide if
                  we’re a good fit.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#021a20] mb-2">
                  Technical Review (1 hr)
                </p>
                <p className="text-[14px] text-[#02252F] leading-relaxed">
                  Dive into your setup and define the right solution.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#021a20] mb-2">
                  Proposal Review (1 hr)
                </p>
                <p className="text-[14px] text-[#02252F] leading-relaxed">
                  Review plan, timeline, costs, and outcomes together.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#021a20] mb-2">
                  Project Start
                </p>
                <p className="text-[14px] text-[#02252F] leading-relaxed">
                  We begin work and keep communication open throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
