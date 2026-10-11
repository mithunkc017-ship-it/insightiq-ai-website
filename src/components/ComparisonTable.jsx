import React from 'react';
import { COMPARISON_DATA } from '../data/agencyData';
import { Check, X, Sparkles } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-t-2 border-sky-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono uppercase text-sky-900 tracking-wider mb-4 font-black">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Agency Paradigm Shift</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Why Modern Leaders Choose Us.
          </h2>

          <p className="text-base text-slate-700 font-medium mt-4 leading-relaxed">
            The era of slow, multi-month developer billable hours is over. We build self-improving autonomous systems with unprecedented velocity.
          </p>
        </div>

        {/* Apple-style Comparison Table */}
        <div className="rounded-3xl bg-white border-2 border-sky-300 overflow-hidden shadow-xl shadow-sky-500/5">
          <div className="grid grid-cols-12 bg-sky-100 border-b-2 border-sky-200 p-5 text-xs font-mono uppercase tracking-wider text-slate-900 font-black">
            <div className="col-span-4 sm:col-span-5 text-slate-950 font-black">Capability Dimension</div>
            <div className="col-span-4 sm:col-span-3 text-slate-600 font-bold">Traditional Agency</div>
            <div className="col-span-4 text-sky-900 font-black flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600 animate-pulse" />
              InsightIQ AI STUDIOS
            </div>
          </div>

          <div className="divide-y-2 divide-sky-100">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-5 items-center hover:bg-sky-50 transition-colors"
              >
                <div className="col-span-4 sm:col-span-5">
                  <span className="text-sm font-black text-slate-950 block">
                    {row.feature}
                  </span>
                </div>

                <div className="col-span-4 sm:col-span-3 pr-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <X className="w-4 h-4 text-rose-500 shrink-0 font-bold" />
                    <span>{row.traditional}</span>
                  </div>
                </div>

                <div className="col-span-4">
                  <div className="flex items-center gap-2 text-xs font-black text-sky-800">
                    <Check className="w-4 h-4 text-sky-600 shrink-0 font-bold" />
                    <span>{row.synapse}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
