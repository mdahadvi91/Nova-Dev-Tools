import React from 'react';
import {
Code2,
ArrowRight,
ExternalLink,
ShieldCheck,
Sparkles,
Wrench,
TerminalSquare,
Globe2,
} from 'lucide-react';

import { useApp } from '../../context/AppContext';
import { TOOLS } from '../../data/tools';
import { AdSenseBanner } from '../common/AdSenseBanner';

type OwnWorkstationId =
| 'developer'
| 'web';

interface OwnWorkstationConfig {
id: OwnWorkstationId;
icon: React.FC<{
className?: string;
}>;
gradient: string;
borderHover: string;
toolIds: string[];
workstationKey: 'utilities' | 'design';
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
gradient:
'from-emerald-500 to-teal-700',
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
workstationKey: 'utilities',
},
{
id: 'web',
icon: Code2,
gradient:
'from-blue-500 to-indigo-700',
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
workstationKey: 'design',
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
const {
t,
navigateToTool,
} = useApp();

const getToolCount = (
toolIds: string[],
) =>
TOOLS.filter((tool) =>
toolIds.includes(tool.id),
).length;

const openExternal = (
url: string,
) => {
if (
typeof window === 'undefined'
) {
return;
}

window.open(
  url,
  '_blank',
  'noopener,noreferrer',
);

};

const getFirstAvailableTool = (
toolIds: string[],
) =>
toolIds.find((id) =>
TOOLS.some(
(tool) => tool.id === id,
),
);

const networkWorkstation =
t.workstations.calculators;

return (
<div className="w-full max-w-7xl mx-auto py-3 sm:py-6 md:py-8 lg:py-10 space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in">
{/* Hero */}
<div className="text-center space-y-2 sm:space-y-3 px-2 sm:px-4">
<div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full liquid-glass border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-semibold shadow-lg">
<Sparkles className="w-3.5 h-3.5 text-emerald-400" />

      <span>
        {t.privacyBadge}
      </span>
    </div>

    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
      {t.heroHeadline}
    </h1>

    <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow px-2">
      {t.heroSubheadline}
    </p>
  </div>

  {/* Three Workstations */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6 px-1 sm:px-0">
    {ownWorkstations.map(
      (cfg) => {
        const Icon = cfg.icon;

        const workstation =
          t.workstations[
            cfg.workstationKey
          ];

        const toolsCount =
          getToolCount(
            cfg.toolIds,
          );

        const firstTool =
          getFirstAvailableTool(
            cfg.toolIds,
          );

        return (
          <div
            key={cfg.id}
            className={`group relative p-4 sm:p-5 md:p-6 rounded-2xl liquid-glass-card flex flex-col justify-between transition-all duration-300 ${cfg.borderHover}`}
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
                  {workstation.badge}
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {workstation.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2 leading-relaxed line-clamp-4">
                  {workstation.description}
                </p>
              </div>

              {/* Tool Count */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Wrench className="w-3.5 h-3.5 text-emerald-400" />

                <span>
                  {toolsCount}{' '}
                  {t.workstationToolsCount}
                </span>
              </div>

              {/* Popular Tools */}
              {workstation.popularFeatures.length >
                0 && (
                <div className="pt-2 border-t border-white/10">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    {t.popularTools}
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {workstation.popularFeatures
                      .slice(0, 6)
                      .map(
                        (
                          feature,
                        ) => (
                          <span
                            key={
                              feature
                            }
                            className="text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/5 text-slate-200 border border-white/5"
                          >
                            {
                              feature
                            }
                          </span>
                        ),
                      )}
                  </div>
                </div>
              )}
            </div>

            {/* Launch */}
            <button
              type="button"
              disabled={!firstTool}
              onClick={() => {
                if (
                  firstTool
                ) {
                  navigateToTool(
                    firstTool,
                  );
                }
              }}
              className="w-full mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-white/10 flex items-center justify-between text-emerald-400 font-semibold text-xs sm:text-sm group-hover:text-emerald-300 transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={
                firstTool
                  ? `${t.launchTool}: ${workstation.name}`
                  : workstation.name
              }
            >
              <span>
                {t.launchTool}
              </span>

              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 rtl:rotate-180" />
              </span>
            </button>
          </div>
        );
      },
    )}

    {/* Nova Tools Network Workstation */}
    <div className="group relative p-4 sm:p-5 md:p-6 rounded-2xl liquid-glass-card flex flex-col justify-between border border-violet-500/20 hover:border-violet-500/60 hover:shadow-violet-500/20 transition-all duration-300">
      <div className="space-y-3.5 sm:space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white shadow-lg p-2.5 sm:p-3 group-hover:scale-105 transition-transform duration-300">
            <Globe2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white/10 text-violet-300 border border-white/10 backdrop-blur-sm">
            {networkWorkstation.badge}
          </span>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
            {networkWorkstation.name}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 sm:mt-2 leading-relaxed line-clamp-4">
            {
              networkWorkstation.description
            }
          </p>
        </div>

        {/* Network Count */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Globe2 className="w-3.5 h-3.5 text-violet-400" />

          <span>
            {networkLinks.length}{' '}
            Nova platforms
          </span>
        </div>

        {/* Network Features */}
        <div className="pt-2 border-t border-white/10">
          <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2">
            {t.allTools}
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {networkWorkstation.popularFeatures
              .slice(0, 6)
              .map(
                (feature) => (
                  <span
                    key={
                      feature
                    }
                    className="text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-violet-500/5 text-slate-200 border border-violet-500/10"
                  >
                    {feature}
                  </span>
                ),
              )}
          </div>
        </div>
      </div>

      {/* Network Links */}
      <div className="w-full mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-white/10 space-y-2">
        {networkLinks.map(
          (link) => (
            <button
              key={link.url}
              type="button"
              onClick={() =>
                openExternal(
                  link.url,
                )
              }
              className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-violet-500/5 border border-violet-500/10 hover:bg-violet-500/10 hover:border-violet-500/30 transition-all text-left"
              aria-label={`${link.name}: ${link.description}`}
            >
              <span className="min-w-0">
                <span className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-violet-300 transition-colors truncate">
                    {link.name}
                  </span>

                  <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                </span>

                <span className="block mt-0.5 text-[10px] sm:text-[11px] text-slate-500 truncate">
                  {link.description}
                </span>
              </span>

              <ArrowRight className="w-3.5 h-3.5 text-violet-400 shrink-0 rtl:rotate-180" />
            </button>
          ),
        )}
      </div>
    </div>
  </div>

  {/* AdSense */}
  <AdSenseBanner slotId="homepage-middle-slot" />

  {/* Trust Footer */}
  <div className="text-center pt-2 sm:pt-4">
    <div className="inline-flex items-center gap-2 text-xs text-slate-400">
      <ShieldCheck className="w-4 h-4 text-emerald-400" />

      <span>
        {t.clientSideBadge}
      </span>
    </div>
  </div>
</div>

);
};
