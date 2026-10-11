import React, { useState, useEffect } from 'react';
import { Terminal, RotateCcw, CheckCircle, Zap, Sparkles, ArrowRight } from 'lucide-react';

const SCENARIOS = [
  {
    id: 'lead-agent',
    title: 'Autonomous Inbound Lead Qualifier',
    type: 'AI Agent Workforce',
    trigger: 'New Enterprise Lead submitted form: $500k ARR, 150 employees, looking for custom LLM pipeline',
    steps: [
      { step: 'Ingest Context', detail: 'Parsing form payload & verifying domain credibility via Clearbit & LinkedIn APIs', latency: '35ms' },
      { step: 'Vector Retrieval', detail: 'Cross-referencing enterprise SLA docs & internal capacity in Pinecone vector store', latency: '42ms' },
      { step: 'Multi-Agent Debate', detail: 'Sales Agent + Solution Architect Agent debate qualification score: Rated 98/100 (Tier-1 Enterprise)', latency: '88ms' },
      { step: 'Tool Invocation', detail: 'Calling HubSpot CRM webhook -> Creating deal card, assigning AE, generating custom proposal brief', latency: '54ms' },
      { step: 'Deliver Output', detail: 'Personalized executive briefing sent to Slack channel #vip-enterprise-deals with calendar link', latency: '21ms' }
    ],
    finalOutput: {
      status: "Qualified Tier-1 Deal",
      estimatedValue: "$85,000 Initial Scope",
      leadScore: "98/100",
      actionTaken: "CRM Synced • Slack Alert Triggered • Personalized Calendar Link Sent"
    }
  },
  {
    id: 'website-agent',
    title: 'Generative AI Website Personalizer',
    type: 'Intelligent Web App',
    trigger: 'Visitor detected: FinTech VP navigating from Google Search (Query: "High throughput vector search")',
    steps: [
      { step: 'Session Intent Parsing', detail: 'Classifying search referrer & user device profile with edge worker', latency: '18ms' },
      { step: 'Dynamic UI Assembly', detail: 'Swapping generic hero copy to FinTech compliance & latency benchmarks in real time', latency: '32ms' },
      { step: '3D Spline Re-orientation', detail: 'Commanding Spline 3D viewport to focus on low-latency neural encryption ring', latency: '22ms' },
      { step: 'Conversational Concierge', detail: 'Triggering contextual chatbot prompt: "Explore our FinTech sub-200ms benchmarks"', latency: '29ms' }
    ],
    finalOutput: {
      status: "UI Morph Completed",
      visitorEngagement: "+310% Time On Page",
      customComponents: "FinTech Hero Variant • 3D FinTech Spline Preset • Tailored Case Studies",
      loadImpact: "Zero layout shift (CLS: 0.00)"
    }
  },
  {
    id: 'voice-agent',
    title: 'Low-Latency Voice & Support Bot',
    type: 'Enterprise Chatbot / Voice',
    trigger: 'Customer phone/web call: "My API rate limit is exceeded and production is throttling"',
    steps: [
      { step: 'Streaming STT', detail: 'Converting live audio stream to phonemes with Whisper Turbo edge (<90ms)', latency: '88ms' },
      { step: 'Semantic Route', detail: 'Identifying urgent severity P1 incident; fetching customer account tier via Stripe API', latency: '45ms' },
      { step: 'Autonomous Remediation', detail: 'Temporarily bursting quota ceiling by 25% for 4 hours pending approval', latency: '60ms' },
      { step: 'Natural Speech TTS', detail: 'Synthesizing empathetic voice reply: "I have expanded your rate limit immediately..."', latency: '110ms' }
    ],
    finalOutput: {
      status: "Issue Resolved Autonomously",
      totalTurnaround: "303ms Total Latency",
      customerSentiment: "Delighted (9.8/10 CSAT)",
      humanEscalationNeeded: "False (Logged to Zendesk)"
    }
  }
];

export default function AgentSimulator() {
  const [selectedScenario, setSelectedScenario] = useState(SCENARIOS[0]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCurrentStepIndex(0);
    setCompleted(false);
    setIsRunning(true);
  }, [selectedScenario]);

  useEffect(() => {
    if (!isRunning) return;

    if (currentStepIndex < selectedScenario.steps.length) {
      const timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
      setCompleted(true);
    }
  }, [isRunning, currentStepIndex, selectedScenario]);

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setCompleted(false);
    setIsRunning(true);
  };

  return (
    <section id="agent-simulator" className="py-24 relative overflow-hidden bg-slate-50 border-t-2 border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono uppercase text-sky-900 tracking-wider mb-4 font-black">
            <Terminal className="w-3.5 h-3.5 text-sky-600" />
            <span>Live Interactive Demo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            See the Autonomous Reasoning Loop in Action.
          </h2>

          <p className="text-base text-slate-700 font-medium mt-4 leading-relaxed">
            Test how our production-grade AI agents and websites think, plan, invoke tools, and execute workflows in sub-second timeframes.
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setSelectedScenario(sc)}
              className={`px-4 py-2.5 text-xs rounded-xl font-black transition-all duration-200 flex items-center gap-2 ${
                selectedScenario.id === sc.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 border-2 border-sky-600'
                  : 'bg-white text-slate-800 hover:text-sky-600 hover:bg-sky-50 border-2 border-sky-200'
              }`}
            >
              <Zap className={`w-3.5 h-3.5 ${selectedScenario.id === sc.id ? 'text-white' : 'text-sky-600'}`} />
              <span>{sc.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Terminal & Output Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {/* Left Console Window (Reasoning Trace) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border-2 border-sky-300 p-6 shadow-xl shadow-sky-500/5 flex flex-col justify-between">
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-sky-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-mono text-xs text-slate-800 font-black">
                    insightiq_agent_runtime.py
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRestart}
                    className="p-1.5 text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
                    title="Restart Simulation"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-sky-100 text-sky-900 border border-sky-300 font-black">
                    {isRunning ? 'EXECUTION ACTIVE' : 'IDLE / READY'}
                  </span>
                </div>
              </div>

              {/* Inbound Trigger Box */}
              <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700 mb-4 shadow-inner">
                <span className="text-[11px] font-mono uppercase text-sky-300 font-black block mb-1">
                  &gt; Inbound Trigger Event:
                </span>
                <p className="text-xs text-slate-100 font-mono font-medium leading-relaxed">
                  {selectedScenario.trigger}
                </p>
              </div>

              {/* Step By Step Execution Trace */}
              <div className="space-y-3 font-mono text-xs">
                {selectedScenario.steps.map((st, i) => {
                  const isPassed = i < currentStepIndex;
                  const isCurrent = i === currentStepIndex && isRunning;

                  return (
                    <div
                      key={i}
                      className={`p-3.5 rounded-xl transition-all duration-300 flex items-start justify-between gap-3 ${
                        isCurrent
                          ? 'bg-sky-50 border-2 border-sky-500 shadow-sm'
                          : isPassed
                          ? 'bg-slate-50 border border-slate-200'
                          : 'opacity-40 border border-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5">
                          {isPassed ? (
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                          ) : isCurrent ? (
                            <div className="w-4 h-4 border-2 border-sky-600 border-t-transparent rounded-full animate-spin shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-slate-400 shrink-0" />
                          )}
                        </span>
                        <div>
                          <div className="font-black text-slate-950 text-xs flex items-center gap-2">
                            <span>Step {i + 1}: {st.step}</span>
                          </div>
                          <p className="text-xs text-slate-700 font-sans mt-0.5 font-medium leading-relaxed">
                            {st.detail}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] text-sky-700 font-mono font-black shrink-0">
                        {isPassed || isCurrent ? st.latency : '--'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Progress Indicator */}
            <div className="mt-6 pt-4 border-t-2 border-sky-100 flex items-center justify-between text-xs font-mono font-bold text-slate-700">
              <span>
                Stage: {Math.min(currentStepIndex, selectedScenario.steps.length)} / {selectedScenario.steps.length}
              </span>
              <span className="text-emerald-700 font-black">
                {completed ? '100% Deterministic Resolution' : 'Reasoning Active'}
              </span>
            </div>
          </div>

          {/* Right Structured Payload Output */}
          <div className="lg:col-span-5 rounded-3xl bg-white border-2 border-sky-300 p-6 shadow-xl shadow-sky-500/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-sky-100 mb-5">
                <span className="font-mono text-xs font-black text-slate-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  Resolved Action Payload
                </span>
                <span className="text-[10px] font-mono text-sky-900 bg-sky-100 px-2 py-0.5 rounded font-black">
                  JSON FORMAT
                </span>
              </div>

              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-white space-y-2.5 shadow-inner">
                <div>
                  <span className="text-slate-400">"status": </span>
                  <span className="text-emerald-400 font-bold">"{selectedScenario.finalOutput.status}"</span>,
                </div>
                {selectedScenario.finalOutput.estimatedValue && (
                  <div>
                    <span className="text-slate-400">"estimated_value": </span>
                    <span className="text-cyan-300 font-bold">"{selectedScenario.finalOutput.estimatedValue}"</span>,
                  </div>
                )}
                {selectedScenario.finalOutput.leadScore && (
                  <div>
                    <span className="text-slate-400">"lead_score": </span>
                    <span className="text-amber-300 font-bold">"{selectedScenario.finalOutput.leadScore}"</span>,
                  </div>
                )}
                {selectedScenario.finalOutput.visitorEngagement && (
                  <div>
                    <span className="text-slate-400">"engagement_lift": </span>
                    <span className="text-cyan-300 font-bold">"{selectedScenario.finalOutput.visitorEngagement}"</span>,
                  </div>
                )}
                {selectedScenario.finalOutput.totalTurnaround && (
                  <div>
                    <span className="text-slate-400">"total_latency": </span>
                    <span className="text-cyan-300 font-bold">"{selectedScenario.finalOutput.totalTurnaround}"</span>,
                  </div>
                )}
                <div>
                  <span className="text-slate-400">"resolution_summary": </span>
                  <span className="text-sky-300 font-bold">
                    "{selectedScenario.finalOutput.actionTaken || selectedScenario.finalOutput.customComponents || selectedScenario.finalOutput.customerSentiment}"
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-sky-50 border-2 border-sky-200 space-y-2">
                <div className="text-xs font-black text-slate-950">Why This Matters For Your Business</div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Instead of paying employees 40+ hours/week to manually triage, copy-paste across tools, or build static pages, our autonomous loops execute the full workflow in under 300 milliseconds with zero human fatigue.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#services"
                className="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs flex items-center justify-center gap-2 transition shadow-md shadow-sky-600/30"
              >
                <span>Deploy This Agent Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
