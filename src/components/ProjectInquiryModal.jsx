import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, Sparkles, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

const SERVICE_OPTIONS = [
  'AI Websites & Web Apps',
  'Autonomous AI Agents',
  'Enterprise Chatbots & Voice',
  'Workflow Automation',
  'Custom LLM Fine-Tuning',
  'AI Security & Architecture Audit',
];

const BUDGET_OPTIONS = [
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+'
];

const TIMELINE_OPTIONS = [
  'Immediate (Sprint)',
  'Within 1 Month',
  'Next Quarter (Q3)'
];

export default function ProjectInquiryModal({ isOpen, onClose, preselectedService }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('$25,000 - $50,000');
  const [selectedTimeline, setSelectedTimeline] = useState('Within 1 Month');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedServices([preselectedService.title]);
    } else {
      setSelectedServices(['Autonomous AI Agents']);
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  const toggleService = (svc) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 rounded-3xl bg-white border border-sky-200 p-6 sm:p-10 shadow-2xl text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-800 bg-sky-50 hover:bg-sky-100 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Architecture Discovery Request Received
            </h3>

            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-slate-900 font-semibold">{formData.name || 'Partner'}</span>. Our Lead AI Architect has been assigned to your brief for <span className="text-sky-600 font-semibold">{formData.company || 'your enterprise'}</span>. We will review your requirements and respond within 6 business hours with our technical feasibility assessment.
            </p>

            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="text-sky-800 uppercase font-mono text-[10px] font-bold">Scope Summary:</div>
              <div className="text-slate-900 font-semibold">{selectedServices.join(', ')}</div>
              <div className="text-slate-600 font-mono text-[11px]">Budget: {selectedBudget} • Timeline: {selectedTimeline}</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-full shadow-md transition"
            >
              Back to Overview
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[10px] font-mono uppercase text-sky-700 tracking-wider mb-2 font-bold">
                <Sparkles className="w-3 h-3 text-sky-500" />
                <span>Project Briefing</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Initiate Your Custom AI Solution.
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Tell us about your objectives. We will deliver a technical roadmap and proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection Chips */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2.5">
                  Select Required Services (Multi-select)
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`px-3 py-2 text-xs rounded-xl transition-all duration-200 font-medium flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-sky-500 text-white border border-sky-400 shadow-sm'
                            : 'bg-sky-50 text-slate-700 hover:bg-sky-100 hover:text-sky-700 border border-sky-100'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        <span>{svc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Estimated Budget Target
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {BUDGET_OPTIONS.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`p-2 text-xs rounded-xl font-mono text-center transition font-semibold ${
                          selectedBudget === b
                            ? 'bg-sky-500 text-white shadow-xs'
                            : 'bg-sky-50 text-slate-700 hover:bg-sky-100 border border-sky-100'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Desired Timeline
                  </label>
                  <div className="space-y-2">
                    {TIMELINE_OPTIONS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTimeline(t)}
                        className={`w-full p-2 text-xs rounded-xl text-center transition font-semibold ${
                          selectedTimeline === t
                            ? 'bg-sky-500 text-white shadow-xs'
                            : 'bg-sky-50 text-slate-700 hover:bg-sky-100 border border-sky-100'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Vance"
                    className="w-full bg-sky-50/60 border border-sky-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-sky-50/60 border border-sky-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Apex Robotics"
                    className="w-full bg-sky-50/60 border border-sky-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition"
                  />
                </div>
              </div>

              {/* Details Textarea */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project Vision & Technical Constraints
                </label>
                <textarea
                  rows="3"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us what workflows you want automated, whether you need 3D Spline elements on your new website, or your current tech stack..."
                  className="w-full bg-sky-50/60 border border-sky-200 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition"
                ></textarea>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict NDA Protected & Non-Disclosure</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold text-xs transition-all shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
