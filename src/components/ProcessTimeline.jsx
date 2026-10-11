import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { Layers } from 'lucide-react';

export default function ProcessTimeline({ onOpenInquiry }) {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white border-t-2 border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono uppercase text-sky-900 tracking-wider mb-4 font-black">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            From Blueprint to Autonomous Production.
          </h2>

          <p className="text-base text-slate-700 font-medium mt-4 leading-relaxed">
            Our 4-stage sprint methodology guarantees rapid time-to-value with zero enterprise disruption or security vulnerabilities.
          </p>
        </div>

        {/* 4 Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-3xl bg-white border-2 border-sky-200 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-4xl font-black text-sky-600">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-900 font-black">
                    {step.duration}
                  </span>
                </div>

                <span className="text-xs font-mono uppercase text-sky-700 font-black tracking-wider block mb-1">
                  {step.phase}
                </span>

                <h3 className="text-lg font-black text-slate-950 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t-2 border-sky-100 flex items-center justify-between text-xs font-mono font-bold text-slate-700">
                <span>Phase 0{idx + 1} Milestone</span>
                <span className="text-sky-600 font-black group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 border-2 border-sky-400 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-sky-600/30 text-white">
          <div>
            <h4 className="text-xl font-black text-white">Need a fast-tracked MVP or Proof of Concept?</h4>
            <p className="text-xs text-sky-100 mt-1 max-w-md font-medium">
              We offer 14-day rapid deployment sprints for qualified venture-backed startups and enterprises.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="shrink-0 px-6 py-3.5 rounded-full bg-white hover:bg-sky-50 text-sky-900 text-xs font-black shadow-md transition"
          >
            Apply for Sprint
          </button>
        </div>
      </div>
    </section>
  );
}
