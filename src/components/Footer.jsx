import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { ArrowUpRight, Shield } from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="border-t-2 border-sky-200 bg-slate-100 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Big Pre-Footer CTA */}
        <div className="rounded-3xl bg-white border-2 border-sky-300 p-8 sm:p-14 text-center max-w-4xl mx-auto mb-20 shadow-xl shadow-sky-500/5">
          <span className="text-xs font-mono uppercase text-sky-900 font-black tracking-widest px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 inline-block mb-4">
            Transform Your Enterprise
          </span>

          <h3 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4 leading-tight">
            Ready to deploy your next AI advantage?
          </h3>

          <p className="text-sm sm:text-base text-slate-700 font-medium max-w-xl mx-auto mb-8 leading-relaxed">
            Partner with our studio to engineer custom AI websites, autonomous agents, and voice pipelines designed for immediate enterprise ROI.
          </p>

          <button
            onClick={onOpenInquiry}
            className="px-8 py-3.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-black text-xs tracking-wide transition-all shadow-lg shadow-sky-600/30 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Start Your Architectural Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-xs">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-600 to-cyan-400 flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sky-600" />
                </div>
              </div>
              <span className="font-black text-base tracking-wider text-slate-950">
                {AGENCY_INFO.name} STUDIOS
              </span>
            </div>

            <p className="text-slate-700 text-xs leading-relaxed max-w-sm font-medium">
              We design and engineer autonomous intelligence systems, custom AI websites, and multi-agent infrastructure for market-leading companies.
            </p>

            <div className="flex items-center gap-3 text-slate-700 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border-2 border-sky-200 font-mono text-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-900 font-bold">All Agent Systems Operational</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-black text-slate-950 text-sm mb-3 tracking-wide">Services</h5>
            <ul className="space-y-2.5 text-slate-700 font-bold">
              <li><a href="#services" className="hover:text-sky-600 transition">AI Websites & 3D Stores</a></li>
              <li><a href="#services" className="hover:text-sky-600 transition">Autonomous Agents</a></li>
              <li><a href="#services" className="hover:text-sky-600 transition">Enterprise Voice & Bots</a></li>
              <li><a href="#services" className="hover:text-sky-600 transition">Document Automation</a></li>
              <li><a href="#services" className="hover:text-sky-600 transition">Custom LLM Fine-Tuning</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-slate-950 text-sm mb-3 tracking-wide">Interactive</h5>
            <ul className="space-y-2.5 text-slate-700 font-bold">
              <li><a href="#agent-simulator" className="hover:text-sky-600 transition">Agent Simulator</a></li>
              <li><a href="#calculator" className="hover:text-sky-600 transition">ROI Value Calculator</a></li>
              <li><a href="#case-studies" className="hover:text-sky-600 transition">Case Studies</a></li>
              <li><a href="#process" className="hover:text-sky-600 transition">Sprint Methodology</a></li>
              <li><a href="#testimonials" className="hover:text-sky-600 transition">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-sky-600 transition">Spline 3D Guide</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-slate-950 text-sm mb-3 tracking-wide">Governance</h5>
            <ul className="space-y-2.5 text-slate-700 font-bold">
              <li className="flex items-center gap-1.5 hover:text-sky-600 transition">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>SOC-2 Type II</span>
              </li>
              <li><span className="hover:text-sky-600 transition">HIPAA Compliance</span></li>
              <li><span className="hover:text-sky-600 transition">Zero Data Retention</span></li>
              <li><span className="hover:text-sky-600 transition">Terms & Enterprise NDA</span></li>
              <li><span className="hover:text-sky-600 transition">Privacy Policy</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t-2 border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700 font-mono font-bold">
          <div>
            © {new Date().getFullYear()} {AGENCY_INFO.name} AI Studios Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-800 font-bold">Engineered with high precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
