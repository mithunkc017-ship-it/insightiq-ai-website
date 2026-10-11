import React from 'react';
import { ArrowRight, Bot, ShieldCheck, ChevronRight, CheckCircle2, Zap } from 'lucide-react';
import HeroSplineContainer from './HeroSplineContainer';
import { AGENCY_INFO } from '../data/agencyData';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-100/40 via-sky-50/30 to-white">
      {/* Background radial sky gradient and subtle tech grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-300/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split 50/50 Hero Layout: Left Text / Right 3D NexBot Robot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (One Half: Text, Value Props & CTAs) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Top Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 shadow-xs text-xs text-sky-900 hover:border-sky-400 transition-all duration-300 mb-6 group cursor-pointer">
              <span className="flex h-2 w-2 rounded-full bg-sky-600 animate-ping" />
              <span className="font-extrabold text-sky-950">Autonomous Studio 2.0</span>
              <span className="text-sky-300">|</span>
              <span className="text-sky-800 font-bold">
                AI Websites, Agents & Chatbots
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-0.5 transition-transform" />
            </div>

            {/* High-Contrast Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08] mb-5">
              Engineering the{' '}
              <span className="text-sky-600">
                Cognitive Future
              </span>{' '}
              for Visionary Enterprises.
            </h1>

            {/* High-Contrast Crisp Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6 max-w-xl">
              We build custom autonomous AI agent workforces, high-converting AI websites with native 3D Spline experiences, and ultra-low latency voice bots that scale your business operations without increasing headcount.
            </p>

            {/* Agency Core Highlights with Dark, Readable Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-lg">
              <div className="flex items-center gap-2 text-xs text-slate-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Custom AI Websites & 3D Stores</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Autonomous Multi-Agent Loops</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Enterprise Chatbots & Voice (&lt;250ms)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Private Model Fine-Tuning</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenInquiry}
                className="px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-all duration-300 shadow-lg shadow-sky-600/30 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Launch Architecture Call</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-sky-50 text-slate-900 font-bold text-xs border-2 border-sky-300 hover:border-sky-400 shadow-xs transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Bot className="w-4 h-4 text-sky-600" />
                <span>Explore All Services</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-6 flex items-center gap-5 text-xs text-slate-700 font-mono font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Zero Data Training
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-sky-600" />
                Sub-250ms Latency
              </span>
              <span>•</span>
              <span className="text-slate-900 font-bold">SOC-2 Ready</span>
            </div>
          </div>

          {/* Right Column (Other Half: 3D NexBot Robot) */}
          <div className="lg:col-span-6 w-full">
            <HeroSplineContainer />
          </div>
        </div>

        {/* Agency Quantitative Stats Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border-2 border-sky-200 shadow-xl shadow-sky-500/5">
          {AGENCY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3 border-r last:border-r-0 border-sky-100">
              <div className="text-3xl sm:text-4xl font-black text-sky-600 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-700 mt-1 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
