import React from 'react';
import {
ArrowRight,
Code2,
ExternalLink,
Globe2,
ShieldCheck,
Sparkles,
TerminalSquare,
} from 'lucide-react';

import { useApp } from '../../context/AppContext';
import { TOOLS } from '../../data/tools';
import { AdSenseBanner } from '../common/AdSenseBanner';
import { IconRenderer } from '../common/IconRenderer';

type WorkstationId =
| 'utilities'
| 'design'
| 'network';

interface WorkstationConfig {
id: WorkstationId;
icon: React.FC<{
className?: string;
}>;
gradient: string;
borderHover: string;
toolIds?: string[];
networkLinks?: NetworkLink[];
}

interface NetworkLink {
name: string;
description: string;
url: string;
icon: string;
}

const workstationConfig: WorkstationConfig[] = [
{
id: 'utilities',
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
},
{
id: 'design',
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
},
{
id: 'network',
icon: Globe2,
gradient:
'from-violet-500 to-purple-700',
borderHover:
'hover:border-violet-500/60 hover:shadow-violet-500/20',
networkLinks: [
{
name: 'Nova Tools',
description:
'Explore the original Nova utility platform and its browser-based tools.',
url: 'https://toolsnova-hm.vercel.app/',
icon: 'Wrench',
},
{
name: 'Nova QR Code',
description:
'Create and customize QR codes with the dedicated Nova QR Code platform.',
url: 'https://qrcode-two-murex.vercel.app/',
icon: 'QrCode',
},
],
},
];

export const HomePage: React.FC = () => {
const {
t,
navigateToTool,
} = useApp();

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

const getToolCount = (
toolIds: string[] = [],
) => {
const ids = new Set(toolIds);

return TOOLS.filter((tool) =>
  ids.has(tool.id),
).length;

};

const getFirstAvailableTool = (
toolIds: string[] = [],
) => {
const configuredIds = new Set(
toolIds,
);

return TOOLS.find((tool) =>
  configuredIds.has(tool.id),
)?.id;

};

const getWorkstationTranslation = (
id: WorkstationId,
) => {
const workstations =
t.workstations;

if (!workstations) {
  return undefined;
}

return workstations[id];

};

return (
<div className="w-full max-w-7xl mx-auto py-3 sm:py-6 md:py-8 lg:py-10 space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in">
{/* Hero */}
<section className="text-center space-y-2 sm:space-y-3 px-2 sm:px-4">
<div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full liquid-glass border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-semibold shadow-lg">
<Sparkles className="w-3.5 h-3.5 text-emerald-400" />

      <span>
        {t.privacyBadge ||
          'Fast, private and browser-based'}
      </span>
    </div>

    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
      {t.heroHeadline}
    </h1>

    <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow px-2">
      {t.heroSubheadline}
    </p>
  </section>

  {/* Three Workstations */}
  <section
    aria-label="Nova Dev Tools workstations"
    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6 px-1 sm:px-0"
  >
    {workstationConfig.map(
      (config) => {
        const Icon = config.icon;
        const translation =
          getWorkstationTranslation(
            config.id,
          );

        const isNetwork =
          config.id === 'network';

        const toolCount =
          getToolCount(
            config.toolIds,
          );

        const firstTool =
          getFirstAvailableTool(
            config.toolIds,
          );

        const translatedFeatures =
          translation?.features ||
          [];

        const title =
          translation?.title ||
          (isNetwork
            ? 'Nova Tools Network'
            : config.id ===
                'utilities'
              ? 'Developer Essentials'
              : 'Web & Code Tools');

        const badge =
          translation?.badge ||
          (isNetwork
            ? 'NOVA NETWORK'
            : config.id ===
                'utilities'
              ? 'DEV CORE'
              : 'WEB STACK');

        const description =
          translation?.description ||
          (isNetwork
            ? 'Explore more specialized Nova tools built for everyday digital work.'
            : config.id ===
                'utilities'
              ? 'Essential browser-based tools for everyday development, debugging, APIs and backend workflows.'
              : 'Practical tools for developers working with SQL, HTML, CSS, JavaScript and web technologies.');

        return (
          <article
            key={config.id}
            className={`group relative min-w-0 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl liquid-glass-card flex flex-col transition-all duration-300 ${config.borderHover}`}
          >
            {/* Decorative glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-3">
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg shrink-0`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-300">
                {badge}
              </span>
            </div>

            {/* Title */}
            <div className="relative mt-4">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {title}
              </h2>

              <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-slate-400 leading-relaxed min-h-[54px]">
                {description}
              </p>
            </div>

            {/* Own tools */}
            {!isNetwork && (
              <>
                <div className="relative mt-4 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs text-slate-500">
                    {toolCount}{' '}
                    {toolCount === 1
                      ? t.tool ||
                        'tool'
                      : t.tools ||
                        'tools'}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {t.clientSideShort ||
                      'Browser-based'}
                  </span>
                </div>

                <div className="relative mt-3 flex flex-wrap gap-1.5">
                  {translatedFeatures
                    .slice(0, 6)
                    .map(
                      (
                        feature,
                        index,
                      ) => (
                        <span
                          key={`${feature}-${index}`}
                          className="px-2 py-1 rounded-lg bg-white/[0.035] border border-white/[0.06] text-[9px] sm:text-[10px] text-slate-400"
                        >
                          {feature}
                        </span>
                      ),
                    )}
                </div>

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
                  className="relative mt-5 w-full inline-flex items-center justify-center gap-2 h-10 sm:h-11 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-500/10 hover:border-emerald-400/30 hover:text-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <span>
                    {t.exploreTools ||
                      'Explore Tools'}
                  </span>

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            )}

            {/* Network links */}
            {isNetwork && (
              <div className="relative mt-4 space-y-2.5">
                {config.networkLinks?.map(
                  (link) => (
                    <button
                      type="button"
                      key={link.url}
                      onClick={() =>
                        openExternal(
                          link.url,
                        )
                      }
                      className="w-full text-left p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-violet-400/30 transition-all group/network"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-400/10 flex items-center justify-center shrink-0">
                          <IconRenderer
                            name={
                              link.icon
                            }
                            className="w-4 h-4 text-violet-300"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs sm:text-sm font-semibold text-white truncate">
                              {
                                link.name
                              }
                            </span>

                            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/network:text-violet-300 transition-colors shrink-0" />
                          </div>

                          <p className="mt-1 text-[9px] sm:text-[10px] text-slate-500 leading-relaxed line-clamp-2">
                            {
                              link.description
                            }
                          </p>
                        </div>
                      </div>
                    </button>
                  ),
                )}
              </div>
            )}

            {/* Bottom status */}
            <div className="relative mt-auto pt-4 sm:pt-5">
              <div className="h-px bg-white/[0.06]" />

              <div className="pt-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                  {isNetwork
                    ? 'Connected'
                    : 'Ready to use'}
                </div>

                {isNetwork ? (
                  <Globe2 className="w-3.5 h-3.5 text-violet-400" />
                ) : (
                  <Code2 className="w-3.5 h-3.5 text-slate-500" />
                )}
              </div>
            </div>
          </article>
        );
      },
    )}
  </section>

  {/* Ad */}
  <AdSenseBanner slotId="homepage-middle-slot" />

  {/* Privacy / trust */}
  <div className="text-center pt-1 sm:pt-3">
    <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-slate-400">
      <ShieldCheck className="w-4 h-4 text-emerald-400" />

      <span>
        {t.clientSideBadge ||
          'Fast and privacy-friendly browser tools'}
      </span>
    </div>
  </div>
</div>

);
};
