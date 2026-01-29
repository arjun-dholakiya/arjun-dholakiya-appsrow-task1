export default function ConsultingInfo() {
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 ml-2">
            <h3 className="text-[26px] font-medium text-[#021a20] md:pr-12">
              Getting started with <br /> Kubernetes?
            </h3>
  
            <p className="text-sm text-[#2b3336] max-w-md md:pl-8 mt-6">
              Early decisions can shape your entire Kubernetes experience.
            </p>
          </div>
  
          {/* Divider */}
          <div className="border-t border-[#b9d2d8] mb-10" />
  
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div className="md:pr-8">
              <p className="text-[20px] font-semibold text-[#021a20] mb-4 ml-2">
                Challenges you might face
              </p>
  
              <ul className="space-y-4 text-sm text-[#2b3336] ml-2">
                {[
                  'Choosing between cloud providers (AWS, Azure, GCP)',
                  'Deciding on managed vs self-managed clusters',
                  'Inconsistent, non-repeatable cluster configurations',
                  'Ineffective autoscaling setup and management',
                  'Limited observability into cluster health',
                  'Worry about future technical debt or scaling issues'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    {/* Square bullet */}
                    <span className="mt-[6px] w-2 h-2 bg-[#8aa3aa] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Right */}
            <div className="md:pl-8">
              <p className="text-[20px] font-semibold text-[#021a20] mb-4">
                How we help
              </p>
  
              <p className="text-[16px] text-[#2b3336] leading-relaxed max-w-md">
                We provide targeted Kubernetes coaching and hands-on platform
                engineering tailored to your environment. From containerization
                and GitOps tooling (e.g. ArgoCD) to implementing best-in-class
                observability and planning for smooth upgrades, we set you up for
                secure, scalable, and maintainable infrastructure from day one.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  