import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ServicesBento from './components/ServicesBento';
import AgentSimulator from './components/AgentSimulator';
import RoiCalculator from './components/RoiCalculator';
import CaseStudies from './components/CaseStudies';
import ProcessTimeline from './components/ProcessTimeline';
import ComparisonTable from './components/ComparisonTable';
import FaqSection from './components/FaqSection';
import TestimonialsSection from '@/components/ui/testimonials-6';
import Footer from './components/Footer';
import ProjectInquiryModal from './components/ProjectInquiryModal';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState(null);

  const handleOpenInquiry = (service = null) => {
    setSelectedServiceForInquiry(service);
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
    setSelectedServiceForInquiry(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-sky-500/20 selection:text-sky-950">
      {/* Top Navbar */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Sections */}
      <main>
        {/* Apple-grade Minimal Hero with 3D Canvas / Spline Container */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* Enterprise Social Proof / Client Trust */}
        <SocialProof />

        {/* Bento Grid Services: AI Websites, Autonomous Agents, Chatbots & Voice */}
        <ServicesBento onSelectService={(service) => handleOpenInquiry(service)} />

        {/* Live Interactive Agent Reasoning Simulator */}
        <AgentSimulator />

        {/* Value & ROI Savings Calculator */}
        <RoiCalculator onOpenInquiry={() => handleOpenInquiry()} />

        {/* Real Enterprise Case Studies & Quantitative Results */}
        <CaseStudies onOpenInquiry={() => handleOpenInquiry()} />

        {/* 4-Stage Sprint Methodology */}
        <ProcessTimeline onOpenInquiry={() => handleOpenInquiry()} />

        {/* Competitive Comparison Table */}
        <ComparisonTable />

        {/* Frequently Asked Questions (Including Spline 3D Integration) */}
        <FaqSection />

        {/* User Testimonials Section (Vertical Infinite Sliders) */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Interactive Project Inquiry & Booking Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        preselectedService={selectedServiceForInquiry}
      />
    </div>
  );
}
