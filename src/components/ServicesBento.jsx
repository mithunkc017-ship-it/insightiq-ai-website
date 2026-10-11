import React, { useState } from 'react';
import { SERVICES } from '../data/agencyData';
import { 
  Globe, 
  Bot, 
  MessageSquareCode, 
  Workflow, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles,
} from 'lucide-react';

const iconMap = {
  'ai-websites': Globe,
  'ai-agents': Bot,
  'ai-chatbots': MessageSquareCode,
  'workflow-automation': Workflow,
  'fine-tuning': Cpu,
  'ai-audit': ShieldCheck,
};

export default function ServicesBento({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web & Apps', 'Agents', 'Chatbots', 'Automation', 'Enterprise', 'Advisory'];

  const filteredServices = activeFilter === 'All' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === activeFilter);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Background radial sky glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono uppercase text-sky-900 tracking-wider mb-4 font-black">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Comprehensive Agency Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Services Built for Exponential Leverage.
          </h2>

          <p className="text-base text-slate-700 font-medium mt-4 leading-relaxed">
            We deliver end-to-end production AI capabilities. Whether you need a customer-facing AI website or an autonomous backend workforce, every system is engineered with Apple-level polish.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs rounded-full transition-all duration-200 font-black ${
                  activeFilter === cat
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'bg-slate-100 text-slate-800 hover:text-sky-600 hover:bg-sky-50 border border-sky-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.id] || Sparkles;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white border-2 border-sky-200 hover:border-sky-500 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 overflow-hidden"
              >
                <div>
                  {/* Top Badge & Delivery Time */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase bg-sky-100 border border-sky-300 text-sky-900">
                      {service.badge}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-sky-200">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      {service.timeline}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border-2 border-sky-300 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-sky-600 transition-all duration-300">
                    <Icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-700 font-medium leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {service.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-900 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Deliverables & CTA */}
                <div className="pt-4 border-t-2 border-sky-100 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.deliverables.slice(0, 3).map((del, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-sky-200"
                      >
                        {del}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-3 px-4 rounded-xl bg-sky-50 hover:bg-sky-600 text-sky-900 hover:text-white font-black text-xs transition-all duration-300 border-2 border-sky-200 hover:border-transparent flex items-center justify-center gap-2 group/btn shadow-xs"
                  >
                    <span>Request Custom Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
