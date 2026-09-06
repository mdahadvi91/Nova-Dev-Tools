import React, {
useMemo,
useState,
} from 'react';

import {
ArrowLeft,
ArrowRight,
Check,
Filter,
Heart,
Search,
Sparkles,
Star,
Wrench,
} from 'lucide-react';

import { useApp } from '../../context/AppContext';
import {
CATEGORIES,
TOOLS,
} from '../../data/tools';
import type {
ToolCategory,
ToolDefinition,
} from '../../types';

import { IconRenderer } from '../common/IconRenderer';
import { AdSenseBanner } from '../common/AdSenseBanner';

interface CategoryPageProps {
category: ToolCategory;
}

interface LocalizedToolCopy {
name?: string;
description?: string;
}

export const CategoryPage: React.FC<
CategoryPageProps

«= ({ category }) => {
const {
t,
language,
navigateToHome,
navigateToTool,
favorites,
toggleFavorite,
} = useApp();»

const [searchQuery, setSearchQuery] =
useState('');

const [
showFavoritesOnly,
setShowFavoritesOnly,
] = useState(false);

const categoryDefinition =
useMemo(
() =>
CATEGORIES.find(
(item) =>
item.id === category,
),
[category],
);

const workstation =
t.workstations?.[category];

const categoryTools = useMemo(
() =>
TOOLS.filter(
(tool) =>
tool.category === category,
),
[category],
);

const getLocalizedToolCopy =
(
tool: ToolDefinition,
): LocalizedToolCopy => {
const translationSource =
t.tools?.[tool.id];

  if (
    translationSource &&
    typeof translationSource ===
      'object'
  ) {
    return {
      name:
        typeof translationSource.name ===
        'string'
          ? translationSource.name
          : undefined,

      description:
        typeof translationSource.description ===
        'string'
          ? translationSource.description
          : undefined,
    };
  }

  return {};
};

const getLocalizedToolName = (
tool: ToolDefinition,
): string => {
const copy =
getLocalizedToolCopy(tool);

return copy.name || tool.name;

};

const getLocalizedToolDescription = (
tool: ToolDefinition,
): string => {
const copy =
getLocalizedToolCopy(tool);

return (
  copy.description ||
  tool.description
);

};

const normalizedSearchQuery =
searchQuery
.trim()
.toLocaleLowerCase();

const filteredTools = useMemo(
() => {
return categoryTools.filter(
(tool) => {
if (
showFavoritesOnly &&
!favorites.includes(
tool.id,
)
) {
return false;
}

      if (
        !normalizedSearchQuery
      ) {
        return true;
      }

      const localizedName =
        getLocalizedToolName(
          tool,
        );

      const localizedDescription =
        getLocalizedToolDescription(
          tool,
        );

      const searchableText = [
        tool.name,
        tool.nameKey,
        tool.description,
        tool.descKey,
        localizedName,
        localizedDescription,
        ...tool.aliases,
        ...tool.keywords,
      ]
        .filter(Boolean)
        .join(' ')
        .toLocaleLowerCase();

      return searchableText.includes(
        normalizedSearchQuery,
      );
    },
  );
},
[
  categoryTools,
  favorites,
  normalizedSearchQuery,
  showFavoritesOnly,
  t.tools,
],

);

const popularToolIds = useMemo(
() =>
categoryTools
.filter(
(tool) => tool.isPopular,
)
.map(
(tool) => tool.id,
),
[categoryTools],
);

const favoriteCountInCategory =
useMemo(
() =>
categoryTools.filter(
(tool) =>
favorites.includes(
tool.id,
),
).length,
[categoryTools, favorites],
);

const categoryTitle =
workstation?.title ||
categoryDefinition?.name ||
category;

const categoryDescription =
workstation?.description ||
categoryDefinition?.description ||
'Fast and privacy-friendly developer tools for everyday coding tasks.';

const categoryIcon =
workstation?.icon ||
categoryDefinition?.iconName ||
'Wrench';

const categoryCount =
categoryTools.length;

const resultCount =
filteredTools.length;

const handleOpenTool = (
toolId: string,
) => {
if (!toolId.trim()) {
return;
}

navigateToTool(toolId);

};

const handleFavorite = (
event: React.MouseEvent<HTMLButtonElement>,
toolId: string,
) => {
event.preventDefault();
event.stopPropagation();

toggleFavorite(toolId);

};

const clearFilters = () => {
setSearchQuery('');
setShowFavoritesOnly(false);
};

const handleCardKeyDown = (
event: React.KeyboardEvent<HTMLElement>,
toolId: string,
) => {
if (
event.key === 'Enter' ||
event.key === ' '
) {
event.preventDefault();
handleOpenTool(toolId);
}
};

return (
<div
className="w-full max-w-7xl mx-auto py-3 sm:py-6 md:py-8 space-y-5 sm:space-y-7 animate-fade-in"
dir={
language === 'ar'
? 'rtl'
: 'ltr'
}
>
{/* Back */}
<button
type="button"
onClick={navigateToHome}
className="inline-flex items-center gap-2 px-3 py-2 rounded-xl liquid-glass border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/40 hover:bg-white/5 transition-all duration-200 text-xs sm:text-sm font-medium"
>
{language === 'ar' ? (
<ArrowRight className="w-4 h-4" />
) : (
<ArrowLeft className="w-4 h-4" />
)}

    <span>
      {t.backToHome ||
        'Back to Home'}
    </span>
  </button>

  {/* Category Hero */}
  <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl liquid-glass-card border border-white/10 p-4 sm:p-6 md:p-8">
    <div className="absolute -top-24 -right-24 w-56 h-56 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

    <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

    <div className="relative flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
        <IconRenderer
          name={categoryIcon}
          className="w-7 h-7 sm:w-8 sm:h-8 text-white"
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <Sparkles className="w-3.5 h-3.5" />

            {t.toolsAvailable ||
              'Tools Available'}
          </span>

          <span
            className="text-[10px] sm:text-xs text-slate-500"
            aria-hidden="true"
          >
            •
          </span>

          <span className="text-[10px] sm:text-xs text-slate-400">
            {categoryCount}{' '}
            {categoryCount === 1
              ? t.tool || 'tool'
              : t.tools || 'tools'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          {categoryTitle}
        </h1>

        <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
          {categoryDescription}
        </p>
      </div>
    </div>
  </section>

  {/* Controls */}
  <section
    aria-label="Tool filters"
    className="flex flex-col sm:flex-row gap-2.5 sm:gap-3"
  >
    <div className="relative flex-1">
      <Search
        className={`absolute top-1/2 -translate-y-1/2 ${
          language === 'ar'
            ? 'right-3.5'
            : 'left-3.5'
        } w-4 h-4 text-slate-500 pointer-events-none`}
        aria-hidden="true"
      />

      <input
        type="search"
        value={searchQuery}
        onChange={(event) =>
          setSearchQuery(
            event.target.value,
          )
        }
        placeholder={
          t.searchToolsPlaceholder ||
          'Search tools...'
        }
        aria-label={
          t.searchToolsPlaceholder ||
          'Search tools'
        }
        className={`w-full h-11 sm:h-12 ${
          language === 'ar'
            ? 'pr-10 pl-4'
            : 'pl-10 pr-4'
        } rounded-xl sm:rounded-2xl liquid-glass border border-white/10 bg-black/10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10 transition-all`}
      />
    </div>

    <button
      type="button"
      onClick={() =>
        setShowFavoritesOnly(
          (previous) =>
            !previous,
        )
      }
      aria-pressed={
        showFavoritesOnly
      }
      className={`h-11 sm:h-12 px-4 rounded-xl sm:rounded-2xl border inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all ${
        showFavoritesOnly
          ? 'border-rose-400/40 bg-rose-500/10 text-rose-300'
          : 'border-white/10 liquid-glass text-slate-300 hover:text-white hover:border-white/20'
      }`}
    >
      <Heart
        className={`w-4 h-4 ${
          showFavoritesOnly
            ? 'fill-current'
            : ''
        }`}
        aria-hidden="true"
      />

      <span>
        {t.favorites ||
          'Favorites'}
      </span>

      {favoriteCountInCategory >
        0 && (
        <span className="min-w-5 h-5 px-1.5 rounded-full bg-white/10 text-[10px] flex items-center justify-center">
          {favoriteCountInCategory}
        </span>
      )}
    </button>
  </section>

  {/* Result Summary */}
  <div className="flex items-center justify-between gap-3 px-1">
    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 min-w-0">
      <Filter className="w-4 h-4 text-emerald-400 shrink-0" />

      <span>
        {resultCount}{' '}
        {resultCount === 1
          ? t.tool || 'tool'
          : t.tools || 'tools'}
      </span>

      {normalizedSearchQuery && (
        <>
          <span
            className="text-slate-600"
            aria-hidden="true"
          >
            •
          </span>

          <span className="truncate max-w-[180px] sm:max-w-xs">
            “{searchQuery.trim()}”
          </span>
        </>
      )}
    </div>

    {(showFavoritesOnly ||
      normalizedSearchQuery) && (
      <button
        type="button"
        onClick={clearFilters}
        className="shrink-0 text-[11px] sm:text-xs text-emerald-300 hover:text-emerald-200 transition-colors"
      >
        {t.showAllTools ||
          'Clear filters'}
      </button>
    )}
  </div>

  {/* Tools Grid */}
  {filteredTools.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {filteredTools.map(
        (tool) => {
          const isFavorite =
            favorites.includes(
              tool.id,
            );

          const isPopular =
            popularToolIds.includes(
              tool.id,
            );

          const localizedName =
            getLocalizedToolName(
              tool,
            );

          const localizedDescription =
            getLocalizedToolDescription(
              tool,
            );

          return (
            <article
              key={tool.id}
              role="button"
              tabIndex={0}
              aria-label={`${t.openTool || 'Open tool'}: ${localizedName}`}
              onClick={() =>
                handleOpenTool(
                  tool.id,
                )
              }
              onKeyDown={(
                event,
              ) =>
                handleCardKeyDown(
                  event,
                  tool.id,
                )
              }
              className="group relative text-left rounded-2xl liquid-glass-card border border-white/10 p-4 sm:p-5 cursor-pointer hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            >
              {/* Popular */}
              {isPopular && (
                <div
                  className={`absolute top-3 ${
                    language === 'ar'
                      ? 'left-3'
                      : 'right-3'
                  } inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide`}
                >
                  <Star
                    className="w-3 h-3 fill-current"
                    aria-hidden="true"
                  />

                  <span>
                    {t.popular ||
                      'Popular'}
                  </span>
                </div>
              )}

              {/* Favorite */}
              <button
                type="button"
                aria-label={
                  isFavorite
                    ? `${
                        t.removeFromFavorites ||
                        'Remove from favorites'
                      } ${localizedName}`
                    : `${
                        t.addToFavorites ||
                        'Add to favorites'
                      } ${localizedName}`
                }
                aria-pressed={
                  isFavorite
                }
                onClick={(
                  event,
                ) =>
                  handleFavorite(
                    event,
                    tool.id,
                  )
                }
                className={`absolute top-3 ${
                  language === 'ar'
                    ? isPopular
                      ? 'left-[88px]'
                      : 'left-3'
                    : isPopular
                      ? 'right-[88px]'
                      : 'right-3'
                } w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                  isFavorite
                    ? 'bg-rose-500/10 border-rose-400/30 text-rose-300'
                    : 'bg-white/[0.03] border-white/10 text-slate-500 hover:text-rose-300 hover:border-rose-400/30'
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isFavorite
                      ? 'fill-current'
                      : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-400/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <IconRenderer
                  name={
                    tool.iconName
                  }
                  className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="pr-1">
                <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {localizedName}
                </h2>

                <p className="mt-1.5 text-[11px] sm:text-xs text-slate-400 leading-relaxed line-clamp-3 min-h-[48px]">
                  {
                    localizedDescription
                  }
                </p>
              </div>

              {/* Keywords */}
              {tool.keywords
                .length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {tool.keywords
                    .slice(0, 3)
                    .map(
                      (
                        keyword,
                      ) => (
                        <span
                          key={`${tool.id}-${keyword}`}
                          className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[9px] text-slate-500"
                        >
                          {
                            keyword
                          }
                        </span>
                      ),
                    )}
                </div>
              )}

              {/* Open */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-emerald-300 group-hover:text-emerald-200">
                  {t.openTool ||
                    'Open Tool'}

                  {language ===
                  'ar' ? (
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </span>

                {isFavorite && (
                  <span className="inline-flex items-center gap-1 text-[9px] text-rose-300 shrink-0">
                    <Check className="w-3 h-3" />

                    {t.saved ||
                      'Saved'}
                  </span>
                )}
              </div>
            </article>
          );
        },
      )}
    </div>
  ) : (
    /* Empty State */
    <section className="rounded-2xl sm:rounded-3xl liquid-glass-card border border-white/10 p-8 sm:p-12 text-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
        <Search className="w-6 h-6 sm:w-7 sm:h-7 text-slate-500" />
      </div>

      <h2 className="mt-4 text-base sm:text-lg font-bold text-white">
        {t.noToolsFound ||
          'No tools found'}
      </h2>

      <p className="mt-2 max-w-md mx-auto text-xs sm:text-sm text-slate-400 leading-relaxed">
        {t.noToolsFoundDescription ||
          'Try another search term or clear the active filters.'}
      </p>

      <button
        type="button"
        onClick={clearFilters}
        className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs sm:text-sm font-semibold hover:bg-emerald-500/15 transition-all"
      >
        <Wrench className="w-4 h-4" />

        {t.showAllTools ||
          'Show all tools'}
      </button>
    </section>
  )}

  {/* Ad */}
  <AdSenseBanner
    slotId={`category-${category}-middle-slot`}
  />

  {/* Bottom Trust Message */}
  <div className="text-center pt-1 sm:pt-2">
    <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-slate-500">
      <Check className="w-3.5 h-3.5 text-emerald-400" />

      <span>
        {t.clientSideBadge ||
          'Fast and privacy-friendly browser tools'}
      </span>
    </div>
  </div>
</div>

);
};
