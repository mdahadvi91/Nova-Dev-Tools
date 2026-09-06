import React from 'react';
import {
  Braces,
  Code2,
  Globe2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Wrench,
  TerminalSquare,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TOOLS } from '../../data/tools';
import { AdSenseBanner } from '../common/AdSenseBanner';

type OwnWorkstationId = 'developer' | 'web';

interface OwnWorkstationConfig {
  id: OwnWorkstationId;
  icon: React.FC<{ className?: string }>;
  gradient: string;
  borderHover: string;
  toolIds: string[];
  name: string;
  badge: string;
  description: string;
  popularFeatures: string[];
}

interface NetworkLink {
  name: string;
  description: string;
  url: string;
}

const ownWorkstations: OwnWorkstationConfig[] = [
  {
    id: 'developer',
    icon: TerminalSquare,
    gradient: 'from-emerald-500 to-teal-700',
    borderHover:
      'hover:border-emerald-500/60 hover:shadow-emerald-500/20',
    toolIds: [
      'json-formatter',
      'regex-tester',
      'jwt-decoder',
      'uuid-generator',
      'hash-generator',
      'cron-expression-generator',
    ],
    name: 'Developer Essentials',
    badge: 'DEV CORE',
    description:
      'Essential browser-based tools for everyday development, debugging, APIs, authentication, validation, and backend workflows.',
    popularFeatures: [
      'JSON Formatter',
      'Regex Tester',
      'JWT Decoder',
      'UUID Generator',
      'Hash Generator',
      'Cron Generator',
    ],
  },
  {
    id: 'web',
    icon: Code2,
    gradient: 'from-blue-500 to-indigo-700',
    borderHover:
      'hover:border-blue-500/60 hover:shadow-blue-500/20',
    toolIds: [
      'sql-formatter',
      'diff-checker',
      'html-formatter',
      'css-formatter',
      'javascript-formatter',
      'html-entity-encoder',
      'http-status-code-reference',
      'mime-type-lookup',
    ],
    name: 'Web & Code Tools',
    badge: 'WEB STACK',
    description:
      'Practical tools for frontend and backend developers working with SQL, HTML, CSS, JavaScript, HTTP, MIME types, and code comparison.',
    popularFeatures: [
      'SQL Formatter',
      'Diff Checker',
      'HTML Formatter',
      'CSS Formatter',
      'JavaScript Formatter',
      'HTTP Status Codes',
    ],
  },
];

const networkLinks: NetworkLink[] = [
  {
    name: 'Nova Tools',
    description:
      'Explore the original Nova utility platform and its broader collection of browser-based tools.',
    url: 'https://toolsnova-hm.vercel.app/',
  },
  {
    name: 'Nova QR Code',
    description:
      'Create and manage QR codes with the dedicated Nova QR Code experience.',
    url: 'https://qrcode-two-murex.vercel.app/',
  },
];

export const HomePage: React.FC = () => {
  const { t } = useApp();

  const getToolCount = (toolIds: string[]) =>
    TOOLS.filter((tool) => toolIds.includes(tool.id)).length;

  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-3 sm:py-6 md:py-8 lg:py-10 space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in">
      {/* Hero */}
      <div className="text-center space-y-2 sm:space-y-3 px-2 sm:px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full liquid-glass border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-semibold shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t.privacyBadge}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
          {t.heroHeadline}
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow px-2">
          {t.heroSubheadline}
        </p>
      </div>

      {/* Main Workstations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-5 lg:gap-6 px-1 sm:px-0">
        {ownWorkstations.map((cfg) => {
          const Icon = cfg.icon;
          const toolsCount = getToolCount(cfg.toolIds);

          return (
            <div
              key={cfg.id}
              className={`group relative p-4 sm:p-5 md:p-6 lg:p-7 rounded-2xl liquid-glass-card flex flex-col justify-between transition-all duration-300 ${cfg.borderHover}`}
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center text-white shadow-lg p-2.5 sm:p-3 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white/10 text-emerald-300 border border-white/10 backdrop-blur-sm">
                    {cfg.badge}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {cfg.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2 leading-relaxed line-clamp-3">
                    {cfg.description}
                  </p>
                </div>

                {/* Tool Count */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Wrench className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {toolsCount} developer tools
                  </span>
                </div>

                {/* Popular Tools */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    {t.popularTools}
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {cfg.popularFeatures.map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/5 text-slate-200 border border-white/5"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Launch */}
              <button
                type="button"
                onClick={() => {
                  const firstTool = cfg.toolIds.find((id) =>
                    TOOLS.some((tool) => tool.id === id),
                  );

                  if (firstTool) {
                    window.history.pushState(
                      { view: 'tool', toolId: firstTool },
                      '',
                      `${window.location.pathname}?tool=${encodeURIComponent(
                        firstTool,
                      )}`,
                    );

                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }
                }}
                className="w-full mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-white/10 flex items-center justify-between text-emerald-400 font-semibold text-xs sm:text-sm group-hover:text-emerald-300 transition-colors text-left"
              >
                <span>{t.launchTool}</span>

                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 rtl:rotate-180" />
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Nova Tools Network */}
      <section className="space-y-3.5 sm:space-y-4">
        <div className="flex items-center gap-3 px-1 sm:px-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg">
            <Globe2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Nova Tools Network
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-400">
              Explore other Nova tool platforms
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
          {networkLinks.map((link) => (
            <button
              key={link.url}
              type="button"
              onClick={() => openExternal(link.url)}
              className="group relative text-left p-4 sm:p-5 rounded-2xl liquid-glass-card border border-white/10 hover:border-violet-500/50 hover:shadow-violet-500/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                      {link.name}
                    </h3>

                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 transition-colors shrink-0" />
                  </div>

                  <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {link.description}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-violet-400 rtl:rotate-180" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* AdSense */}
      <AdSenseBanner slotId="homepage-middle-slot" />

      {/* Trust Footer */}
      <div className="text-center pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.clientSideBadge}</span>
        </div>
      </div>
    </div>
  );
};
