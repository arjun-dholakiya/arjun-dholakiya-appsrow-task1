import CaseStudyBlock from './CaseStudyBlock';
import horse from '../assets/horse.svg';
import water from '../assets/water.svg';

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#062c36] py-24 md:py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-12 md:mb-14">
          <h2
            className="
              text-[32px]
              md:text-[42px]
              font-medium
              text-center
              md:text-left
              md:ml-30
            "
          >
            Case studies
          </h2>

          <p
            className="
              text-[14px]
              text-white/80
              max-w-md
              text-center
              md:text-left
              mx-auto
              md:mx-0
              md:ml-26
            "
          >
            Dive into how Pelotech transforms challenges into success stories
            through our Kubernetes consulting services. Real-world results that
            speak for themselves.
          </p>
        </div>

        {/* CASE 1 */}
        <CaseStudyBlock
          image={horse}
          imageSide="left"
          title="Ultimate Knowledge Institute"
          description="Pelotech partnered with Ultimate Knowledge Institute (UKI), a government-aligned organization, to modernize their cloud infrastructure using Kubernetes. The company partnered with Pelotech after facing difficulty hiring individual cloud experts. This collaboration eliminated costly third-party dependencies, optimized their AWS architecture, and paved the way for FedRAMP certification."
          metrics={[
            { value: '2–3x', label: 'Faster to target goals' },
            { value: '$500k', label: 'In annual savings' },
            { value: '50%', label: 'Reduction in manual work' }
          ]}
          buttonText="Read the Full UKI Case Study"
        />

        {/* CASE 2 */}
        <CaseStudyBlock
          image={water}
          imageSide="right"
          title="Stem Learning Cloud Migration"
          description="Facing an impossible three-month deadline and stringent security requirements, STEM Learning entrusted Pelotech with migrating their on-premises application to a cloud-native solution on AWS. Pelotech completed the migration ahead of schedule and under budget."
          metrics={[
            {
              value: '8x faster',
              label: 'Performance compared to initial projections'
            },
            { value: '100%', label: 'Availability in the first month live' },
            {
              value: '3 months',
              label: 'Migration completed ahead of schedule'
            }
          ]}
          buttonText="Read the Full STEM Learning Case Study"
        />

        {/* FOOTER TEXT */}
        <p
          className="
            text-center
            text-[16px]
            md:text-[18px]
            text-white/90
            mt-24
            md:mt-36
            max-w-xl
            mx-auto
          "
        >
          Want to explore how Pelotech can achieve these outcomes for your team?
          Let’s talk about your unique challenges and how we can help.
        </p>
      </div>
    </section>
  );
}
