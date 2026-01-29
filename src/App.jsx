import React from 'react';
import './index.css';
import Hero from './components/Hero';
import BrandCard from './components/BrandCard';
import WhyKubernetes from './components/WhyKubernets';
import KubernetesExpertise from './components/KubernetesExpertise';
import ConsultingSection from './components/ConsultingSection';
import Footer from './components/Footer';
import ContactConsulting from './components/ContactConsulting';
import CaseStudiesSection from './components/CaseStudiesSection';

function App() {
  return (
    <>
      <Hero />
      <BrandCard />
      <WhyKubernetes />
      <KubernetesExpertise />
      <ConsultingSection />
    <CaseStudiesSection/>
      <ContactConsulting />
      <Footer />
    </>
  );
}

export default App;
