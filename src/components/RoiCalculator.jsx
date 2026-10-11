import React, { useState } from 'react';
import { Calculator, Clock, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ onOpenInquiry }) {
  const [teamSize, setTeamSize] = useState(25);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(12);
  const [hourlyCost, setHourlyCost] = useState(65);

  const annualManualCost = teamSize * manualHoursPerWeek * hourlyCost * 52;
  const hoursReclaimedPerYear = Math.round(teamSize * manualHoursPerWeek * 52 * 0.75);
  const annualSavings = Math.round(annualManualCost * 0.72);

  const getRecommendedTier = () => {
    if (annualSavings > 500000) {
      return {
        name: 'Enterprise AI Foundry',
        desc: 'Custom multi-agent workforce + Private fine-tuned LLM + Dedicated engineering squad',
        range: '$50,000+'
      };
    } else if (annualSavings > 150000) {
      return {
        name: 'Autonomous Scale System',
        desc: 'AI Website + Multi-agent CRM loop + Conversational voice concierge',
        range: '$25,000 - $45,000'
      };
    } else {
      return {
        name: 'Core AI Launchpad',
        desc: 'Intelligent AI Website + Custom RAG Chatbot + Core workflow automation',
        range: '$10,000 - $20,000'
      };
    }
  };

  const recTier = getRecommendedTier();

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono uppercase text-sky-900 tracking-wider mb-4 font-black">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>ROI & Capital Efficiency</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Quantify Your Autonomous Leverage.
          </h2>

          <p className="text-base text-slate-700 font-medium mt-4 leading-relaxed">
            See the concrete financial and operational upside of replacing manual data extraction, repetitive tickets, and static web architectures with our custom AI systems.
          </p>
        </div>

        {/* Interactive Calculator Panel */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border-2 border-sky-300 p-6 sm:p-10 shadow-2xl shadow-sky-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-7">
              {/* Slider 1: Team Size */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-black text-slate-950 text-sm">Impacted Team Size</span>
                  <span className="font-mono text-sky-900 font-black bg-sky-100 px-3 py-1 rounded-lg border border-sky-300">
                    {teamSize} Employees
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="250"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer bg-sky-100 h-2.5 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-600 font-mono font-bold mt-1">
                  <span>3</span>
                  <span>100</span>
                  <span>250+</span>
                </div>
              </div>

              {/* Slider 2: Hours/Week */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-black text-slate-950 text-sm">Manual Hours / Person / Week</span>
                  <span className="font-mono text-sky-900 font-black bg-sky-100 px-3 py-1 rounded-lg border border-sky-300">
                    {manualHoursPerWeek} hrs/week
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="35"
                  value={manualHoursPerWeek}
                  onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer bg-sky-100 h-2.5 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-600 font-mono font-bold mt-1">
                  <span>2 hrs</span>
                  <span>18 hrs</span>
                  <span>35 hrs</span>
                </div>
              </div>

              {/* Slider 3: Hourly Cost */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-black text-slate-950 text-sm">Blended Hourly Cost</span>
                  <span className="font-mono text-sky-900 font-black bg-sky-100 px-3 py-1 rounded-lg border border-sky-300">
                    ${hourlyCost} / hour
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="180"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer bg-sky-100 h-2.5 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-600 font-mono font-bold mt-1">
                  <span>$25/hr</span>
                  <span>$100/hr</span>
                  <span>$180/hr</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border-2 border-sky-200 text-xs text-slate-800 font-medium flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-600 shrink-0" />
                <span>
                  Based on audited benchmark data: autonomous agents eliminate 70-80% of repetitive workflows across support, intake, and sales pipelines.
                </span>
              </div>
            </div>

            {/* Right Projected Results Card */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 text-white p-7 flex flex-col justify-between shadow-xl shadow-sky-600/30">
              <div>
                <span className="text-xs font-mono uppercase text-sky-100 font-black tracking-wider">
                  Estimated Financial Return
                </span>

                <div className="mt-3 mb-6">
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    ${annualSavings.toLocaleString()}
                  </div>
                  <div className="text-xs text-sky-100 mt-1 font-bold">
                    Projected Annual Cost Recaptured
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-sky-400 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-sky-100 font-bold">Hours Reclaimed / Year:</span>
                    <span className="font-mono font-black text-white text-sm">
                      {hoursReclaimedPerYear.toLocaleString()} hrs
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sky-100 font-bold">Payback Period:</span>
                    <span className="font-mono font-black text-emerald-300 text-sm">
                      &lt; 45 Days
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-sky-100 block mb-1 font-bold">Recommended Solution:</span>
                    <span className="font-black text-white block text-base">{recTier.name}</span>
                    <span className="text-xs text-sky-100 leading-tight block mt-1 font-medium">
                      {recTier.desc}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={onOpenInquiry}
                  className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-sky-50 text-sky-900 font-black text-xs transition duration-200 shadow-md flex items-center justify-center gap-2"
                >
                  <span>Request Custom ROI Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
