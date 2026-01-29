import React from 'react';
import FeatureCard from './FeatureCard';

import cross from '../assets/cross.svg';
import circle from '../assets/circle.svg';
import circle2 from '../assets/circle2.svg';
import square from '../assets/square.svg';
import hexagon from '../assets/hexagon.svg';
import oceanImg from '../assets/oceanimg.svg';

export default function WhyKubernetes() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="mb-16 max-w-lg">
        <h2 className="text-4xl font-bold text-[#02252F] leading-tight">
          Why choose Kubernetes & how does it drive real business value?
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-8">
          <FeatureCard
            icon={<img src={cross} className="w-20 h-20" alt="" />}
            title="Cut costs with smarter resource use"
            description="By automating deployments, resource allocation, and scaling of containerized applications, Kubernetes reduces human error and operational overhead. At Pelotech, we help you avoid common pitfalls like overprovisioning, resulting in significant Kubernetes cost optimization."
          />

          <FeatureCard
            icon={<img src={circle} className="w-20 h-20" alt="" />}
            title="Release updates faster"
            description="Kubernetes is the key enabler of modern CI/CD pipelines. It helps your teams ship faster, test more confidently, and adapt to market changes in real-time, giving you a critical edge in competitive industries."
          />
        </div>

        {/* Column 2 (staggered) */}
        <div className="flex flex-col gap-8 md:mt-24">
          <FeatureCard
            icon={<img src={square} className="w-20 h-20" alt="" />}
            title="Scale applications automatically"
            description="Kubernetes enables applications to scale dynamically in response to fluctuating demand—automatically. It ensures your system stays responsive during peak loads, and winds down for efficient resource utilization during lulls."
          />

          <FeatureCard
            icon={<img src={circle2} className="w-20 h-20" alt="" />}
            title="Run workloads across any environment"
            description="Whether you’re running workloads on-premises, in the cloud, or across multiple providers, Kubernetes gives you true portability. Avoid vendor lock-in, embrace hybrid strategies, and retain full control of your infrastructure."
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {/* TEXT ABOVE THE CARD */}
          <p className="text-[#4A5D63] max-w-sm leading-relaxed">
            Businesses need infrastructure that scales, adapts, and supports
            innovation. Kubernetes makes that possible by powering modern
            container orchestration so you can
          </p>

          <FeatureCard
            icon={<img src={hexagon} className="w-20 h-20" alt="" />}
            title="Keep applications running"
            description="Its built-in self-healing mechanisms ensure your applications remain available, minimizing downtime and improving overall stability. This reliability translates directly into better customer experiences and stronger business continuity."
          />

          <FeatureCard
            image={oceanImg}
            cta="Let's Get Started"
            className="min-h-[150px]"
          />
        </div>
      </div>
    </section>
  );
}
