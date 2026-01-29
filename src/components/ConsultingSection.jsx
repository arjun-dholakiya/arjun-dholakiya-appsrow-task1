import ConsultingSteps from './ConsultingSteps';
import ConsultingInfo from './ConsultingInfo';
import SuccessStories from './SuccessStories';

export default function ConsultingSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="text-3xl md:text-4xl font- text-[#021a20] ml-5">
            Are you in need of a <br /> Kubernetes consultant?
          </h2>

          <p className="text-[13px] text-[#4b5f66] leading-relaxed max-w-md">
            Every organization’s Kubernetes3 journey is unique, but many face
            similar challenges. At Pelotech, we’ve solved these obstacles at
            scale. Whether you’re just starting, optimizing for performance, or
            pushing into advanced use cases, our Kubernetes consulting services
            meet you where you are, and help you get where you want to go.
          </p>
        </div>

        <ConsultingSteps />
        <ConsultingInfo />
        <SuccessStories />
      </div>
    </section>
  );
}
