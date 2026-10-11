import React, { useState } from 'react';
import { FAQS } from '../data/agencyData';
import { ChevronDown, HelpCircle, ShieldCheck, Lock } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white border-t-2 border-sky-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono uppercase text-sky-900 tracking-wider mb-4 font-black">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Transparency & Clarity</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Frequently Asked Questions.
          </h2>

          <p className="text-base text-slate-700 font-medium mt-4 leading-relaxed">
            Everything you need to know about our technology, Spline 3D flexibility, deliverables, and enterprise guarantees.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-16">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border-2 border-sky-200 hover:border-sky-400 transition-all duration-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base font-black text-slate-950">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 shrink-0 transition-transform duration-300 font-bold ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-700 leading-relaxed border-t-2 border-sky-100 pt-3 animate-fadeIn font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Security & Data Privacy Pill Guarantee */}
        <div className="rounded-3xl bg-sky-50 border-2 border-sky-300 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border-2 border-sky-300 flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-7 h-7 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-950">
                Enterprise Data Privacy & Non-Training Guarantee
              </h4>
              <p className="text-xs text-slate-700 mt-1 max-w-xl leading-relaxed font-medium">
                We strictly enforce air-gapped VPC deployments, confidential compute, zero model retention, and SOC-2 Type II standards. Your data is never used to train public foundational models.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xs font-mono text-slate-900 font-black flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border-2 border-sky-300 shadow-xs">
              <Lock className="w-4 h-4 text-sky-600" />
              <span>TLS 1.3 + AES-256</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
