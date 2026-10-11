import React from 'react';
import { CLIENT_LOGOS } from '../data/agencyData';

export default function SocialProof() {
  return (
    <section className="py-12 border-y-2 border-sky-200 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-mono tracking-wider uppercase text-sky-700 font-black block">
              Enterprise Trust & Security
            </span>
            <p className="text-sm font-bold text-slate-900 mt-1">
              Powering AI solutions for forward-thinking market leaders
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center w-full md:w-auto">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white border-2 border-sky-100 hover:border-sky-400 hover:shadow-md transition-all duration-300"
              >
                <div className="text-xs font-black text-slate-900 group-hover:text-sky-600 transition-colors tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-600 group-hover:scale-125 transition-transform" />
                  {client.name}
                </div>
                <span className="text-[10px] text-slate-600 font-mono mt-0.5 font-bold">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
