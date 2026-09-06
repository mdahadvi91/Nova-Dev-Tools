import React from 'react';
import { ShieldCheck, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../layout/Breadcrumbs';
import { ToolDefinition, FaqItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { TOOLS } from '../../data/tools';
import { IconRenderer } from './IconRenderer';
import { getLocalizedToolName, getLocalizedToolDesc } from '../../i18n/translations';
import { AdSenseBanner } from './AdSenseBanner';

interface ToolWorkspaceProps {
  tool: ToolDefinition;
  children: React.ReactNode;
  howToUseSteps?: string[];
  helpfulInfo?: string;
  faqs?: FaqItem[];
}

export const ToolWorkspace: React.FC<ToolWorkspaceProps> = ({
  tool,
  children,
  howToUseSteps,
  helpfulInfo,
  faqs,
}) => {
  const { navigateToCategory, navigateToTool, t, language } = useApp();

  const localizedName = getLocalizedToolName(tool.id, tool.name, language);
  const localizedDesc = getLocalizedToolDesc(tool.id, tool.description, language);
  const categoryLabel = t.categories[tool.category as keyof typeof t.categories] || tool.category;

  const relatedTools = TOOLS.filter(
    (tItem) => tItem.category === tool.category && tItem.id !== tool.id
  ).slice(0, 4);

  const defaultHowToSteps = [
    'Configure tool settings, sliders, or inputs directly in the workspace.',
    'Select or drop your source document, image, or content when needed.',
    'Inspect the real-time live preview to confirm visual accuracy.',
    'Click Process / Download to save the finalized file to your device.',
  ];

  const defaultFaqs: FaqItem[] = [
    {
      question: 'Are my private files or data uploaded to a remote server?',
      answer:
        'No. Nova Tools processes files locally inside your browser using modern WebAssembly and Canvas APIs. Your images, PDFs, and inputs never leave your computer or phone.',
    },
    {
      question: 'Is there any file limit or watermarking applied?',
      answer:
        'There are no forced promotional watermarks or hidden fees. Processing limits depend solely on your device memory.',
    },
    {
      question: 'Can I use this tool on my mobile phone?',
      answer:
        'Yes. Nova Tools is fully responsive and optimized for mobile touchscreens and mobile camera scanning.',
    },
  ];

  const activeSteps = howToUseSteps && howToUseSteps.length > 0 ? howToUseSteps : defaultHowToSteps;
  const activeFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full max-w-6xl mx-auto py-3 sm:py-6 space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
      {/* Top Bar: Back to Workstation + Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 pb-3 border-b border-white/10">
        <button
          type="button"
          onClick={() => navigateToCategory(tool.category)}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl liquid-glass border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-medium transition-colors"
          aria-label={t.actions.back}
        >
          <ArrowRight className="w-4 h-4 rotate-180 rtl:rotate-0" />
          <span>{t.actions.back}</span>
        </button>

        <Breadcrumbs
          items={[
            {
              label: categoryLabel,
              onClick: () => navigateToCategory(tool.category),
            },
            { label: localizedName },
          ]}
        />
      </div>

      {/* Tool Header Title & Badge */}
      <div className="space-y-2 sm:space-y-2.5">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
          <span>{t.privacyBadge} • {t.clientSideBadge}</span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5 sm:gap-3">
          <span className="p-1.5 sm:p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 inline-flex flex-shrink-0">
            <IconRenderer iconName={tool.iconName} className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
          <span className="truncate">{localizedName}</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {localizedDesc}
        </p>
      </div>

      {/* Primary Real Tool Workspace (Interactive State & Canvas) */}
      <div className="rounded-2xl sm:rounded-3xl liquid-glass p-3 sm:p-6 md:p-7 shadow-2xl border border-white/10 transition-all">
        {children}
      </div>

      {/* AdSense Compliant Banner */}
      <AdSenseBanner slotId="tool-workspace-banner" />

      {/* How to Use Step-by-Step */}
      <section className="rounded-2xl liquid-glass p-5 sm:p-7 space-y-4 border border-white/10">
        <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>How to Use {localizedName}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {activeSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                {idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Helpful Technical / Format Information */}
      {helpfulInfo && (
        <section className="rounded-2xl liquid-glass p-5 sm:p-7 space-y-3 border border-white/10">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            <span>Format & Quality Standards</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {helpfulInfo}
          </p>
        </section>
      )}

      {/* Frequently Asked Questions */}
      <section className="rounded-2xl liquid-glass p-5 sm:p-7 space-y-4 border border-white/10">
        <h2 className="text-base sm:text-lg font-bold text-white">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-white/10">
          {activeFaqs.map((faq, idx) => (
            <div key={idx} className="py-3.5 first:pt-0 last:pb-0 space-y-1.5">
              <h3 className="text-sm font-semibold text-white">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Category Tools */}
      {relatedTools.length > 0 && (
        <section className="space-y-4 pt-4">
          <h2 className="text-base font-bold text-white">
            Related Utilities in {categoryLabel}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedTools.map((rel) => {
              const relName = getLocalizedToolName(rel.id, rel.name, language);
              const relDesc = getLocalizedToolDesc(rel.id, rel.description, language);
              return (
                <button
                  key={rel.id}
                  type="button"
                  onClick={() => navigateToTool(rel.id)}
                  className="flex flex-col text-left rtl:text-right p-4 rounded-2xl liquid-glass-card hover:border-emerald-500/50 border border-white/10 transition-all hover:scale-[1.02] shadow-sm group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:bg-emerald-500/30 transition-colors">
                    <IconRenderer iconName={rel.iconName} className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {relName}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 leading-snug">
                    {relDesc}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
