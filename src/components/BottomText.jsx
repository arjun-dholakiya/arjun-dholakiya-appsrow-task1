import React from 'react';

export default function BottomText() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 max-w-6xl text-[15px] text-white/80 leading-relaxed">
      {/* Left paragraph — TOP aligned */}
      <p className="self-start mb-30">
        Kubernetes, the industry standard for container orchestration{' '}
        <span className="text-white/90 bg-white/5 px-2 py-0.5 rounded border border-white/5">
          since 2014,
        </span>
        has transformed how applications are deployed and managed. As early
        adopters, we've built deep expertise through hands-on experience with
        Kubernetes and its predecessors like Mesos and Swarm.
      </p>

      {/* Right paragraph — BOTTOM aligned */}
      <p className="self-end mt-10 mr-10">
        At Pelotech, our{' '}
        <span className="text-white/90 bg-white/5 px-2 py-0.5 rounded border border-white/5">
          certified Kubernetes experts
        </span>{' '}
        provide tailored consulting services at every stage of your journey.
        Whether you're new to Kubernetes, refining your setup, or exploring
        advanced use cases, we work closely with your team to understand your
        goals and challenges, then design, implement, and optimize solutions
        that fit your architecture, timeline, and ROI targets.
      </p>
    </div>
  );
}
