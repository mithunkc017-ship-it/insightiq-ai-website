import React from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function CaseStudies({ onOpenInquiry }) {
  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-slate-50 border-t-2 border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono uppercase text-sky-900 tracking-wider mb-4 font-black">
            <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
            <span>Proven Enterprise Impact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Engineered for Groundbreaking Outcomes.
          </h2>

          <p className="text-base text-slate-700 font-medium mt-4 leading-relaxed">
            Real systems running in production. See how our bespoke AI solutions transformed operations and revenue for client businesses.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-white border-2 border-sky-200 hover:border-sky-500 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-600 font-mono mb-4">
                  <span className="font-black text-slate-900 text-sm">{cs.client}</span>
                  <span className="text-xs text-sky-900 bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-300 font-black">
                    {cs.service}
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="my-6">
                  <div className="text-5xl font-black text-sky-600 tracking-tight">
                    {cs.metricValue}
                  </div>
                  <div className="text-xs text-slate-900 font-black mt-1">
                    {cs.metricLabel}
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-950 mb-2 leading-snug">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-700 font-medium leading-relaxed mb-6">
                  {cs.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t-2 border-sky-100 mb-4">
                  {cs.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-sky-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenInquiry}
                  className="w-full py-3 px-3 rounded-xl bg-sky-50 hover:bg-sky-600 text-xs font-black text-sky-900 hover:text-white border-2 border-sky-200 hover:border-transparent flex items-center justify-center gap-1.5 transition duration-200"
                >
                  <span>Read Architecture Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
