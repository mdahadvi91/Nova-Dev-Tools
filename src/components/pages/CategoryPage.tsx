import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Star,
  Search,
  ArrowLeft,
  TerminalSquare,
  Code2,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TOOLS } from '../../data/tools';
import { ToolCategory } from '../../types';
import { IconRenderer } from '../common/IconRenderer';
import { Breadcrumbs } from '../layout/Breadcrumbs';
import {
  getLocalizedToolName,
  getLocalizedToolDesc,
} from '../../i18n/translations';
import { AdSenseBanner } from '../common/AdSenseBanner';

interface CategoryPageProps {
  category: ToolCategory;
}

interface CategoryMeta {
  name: string;
  badge: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  gradient: string;
}

const CATEGORY_META: Partial<Record<ToolCategory, CategoryMeta>> = {
  utilities: {
    name: 'Developer Essentials',
    badge: 'DEV CORE',
    description:
      'Essential browser-based tools for everyday development, debugging, APIs, authentication, validation, and backend workflows.',
    icon: TerminalSquare,
    gradient: 'from-emerald-500 to-teal-700',
  },
  design: {
    name: 'Web & Code Tools',
    badge: 'WEB STACK',
    description:
      'Practical tools for frontend and backend developers working with SQL, HTML, CSS, JavaScript, HTTP, MIME types, and code comparison.',
    icon: Code2,
    gradient: 'from-blue-500 to-indigo-700',
  },
};

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
}) => {
  const {
    navigateToHome,
    navigateToTool,
    favorites,
    toggleFavorite,
    t,
    language,
  } = useApp();

  const [searchFilter, setSearchFilter] = useState('');

  const categoryMeta = CATEGORY_META[category];

  const categoryTools = useMemo(() => {
    return TOOLS.filter((tool) => tool.category === category);
  }, [category]);

  const filteredTools = useMemo(() => {
    const query = searchFilter.trim().toLowerCase();

    if (!query) {
      return categoryTools;
    }

    return categoryTools.filter((tool) => {
      const localizedName = getLocalizedToolName(
        tool.id,
        tool.name,
        language,
      ).toLowerCase();

      const localizedDescription = getLocalizedToolDesc(
        tool.id,
        tool.description,
        language,
      ).toLowerCase();

      return (
        localizedName.includes(query) ||
        localizedDescription.includes(query) ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.aliases.some((alias) =>
          alias.toLowerCase().includes(query),
        ) ||
        tool.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query),
        )
      );
    });
  }, [categoryTools, searchFilter, language]);

  /*
   * The current developer site intentionally exposes only
   * the two internal workstations represented by the current
   * ToolCategory values. If an outdated URL references a removed
   * category, return the user to the homepage instead of rendering
   * a broken workstation.
   */
  if (!categoryMeta) {
    return (
      <div className="w-full max-w-7xl mx-auto py-8 animate-fade-in">
        <div className="p-8 text-center rounded-2xl liquid-glass border border-white/10">
          <h1 className="text-xl font-bold text-white">
            Category unavailable
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            This workstation is no longer available on Nova Dev Tools.
          </p>

          <button
            type="button"
            onClick={navigateToHome}
            className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {t.actions.back}
          </button>
        </div>
      </div>
    );
  }

  const CategoryIcon = categoryMeta.icon;

  return (
    <div className="w-full max-w-7xl mx-auto py-3 sm:py-6 md:py-8 space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
        <button
          type="button"
          onClick={navigateToHome}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl liquid-glass border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-medium transition-colors"
          aria-label={t.actions.back}
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          <span>{t.actions.back}</span>
        </button>

        <Breadcrumbs currentCategory={category} />
      </div>

      {/* Workstation Header */}
      <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl liquid-glass border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 shadow-xl">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${categoryMeta.gradient} text-white flex items-center justify-center flex-shrink-0 shadow-lg`}
          >
            <CategoryIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>

          <div className="min-w-0">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-0.5 sm:mb-1">
              {categoryMeta.badge}
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              {categoryMeta.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 mt-0.5 sm:mt-1 max-w-2xl leading-relaxed">
              {categoryMeta.description}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 flex-shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 absolute start-3 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="search"
              value={searchFilter}
              onChange={(event) =>
                setSearchFilter(event.target.value)
              }
              placeholder={t.filterPlaceholder}
              aria-label={t.filterPlaceholder}
              className="w-full ps-9 pe-3 py-2.5 rounded-xl bg-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 border border-white/10"
            />
          </div>
        </div>
      </div>

      {/* Tool Count */}
      <div className="flex items-center justify-between px-1">
        <p className="text-xs sm:text-sm text-slate-400">
          <span className="text-emerald-400 font-semibold">
            {filteredTools.length}
          </span>{' '}
          {filteredTools.length === 1
            ? 'developer tool'
            : 'developer tools'}
        </p>

        {searchFilter.trim() && (
          <button
            type="button"
            onClick={() => setSearchFilter('')}
            className="text-xs text-slate-400 hover:text-emerald-300 transition-colors"
          >
            {t.actions.reset}
          </button>
        )}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
        {filteredTools.map((tool) => {
          const isFavorite = favorites.includes(tool.id);

          const localizedName = getLocalizedToolName(
            tool.id,
            tool.name,
            language,
          );

          const localizedDescription = getLocalizedToolDesc(
            tool.id,
            tool.description,
            language,
          );

          return (
            <div
              key={tool.id}
              onClick={() => navigateToTool(tool.id)}
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' ||
                  event.key === ' '
                ) {
                  event.preventDefault();
                  navigateToTool(tool.id);
                }
              }}
              role="button"
              tabIndex={0}
              className="group relative cursor-pointer p-4 sm:p-5 md:p-6 rounded-2xl liquid-glass-card border border-white/10 hover:border-emerald-500/50 transition-all flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            >
              <div className="space-y-3 sm:space-y-3.5">
                {/* Tool Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 flex items-center justify-center transition-transform group-hover:scale-110">
                    <IconRenderer
                      iconName={tool.iconName}
                      className="w-5 h-5"
                    />
                  </div>

                  <div className="flex items-center gap-1.5">
                    {tool.isPopular && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {t.categories.popular}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleFavorite(tool.id);
                      }}
                      className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-amber-400 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400/50"
                      title={
                        isFavorite
                          ? 'Remove from favorites'
                          : 'Add to favorites'
                      }
                      aria-label={
                        isFavorite
                          ? 'Remove from favorites'
                          : 'Add to favorites'
                      }
                    >
                      <Star
                        className={`w-4 h-4 ${
                          isFavorite
                            ? 'fill-amber-400 text-amber-400'
                            : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Tool Information */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {localizedName}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-1 sm:mt-1.5 line-clamp-3 leading-relaxed">
                    {localizedDescription}
                  </p>
                </div>

                {/* Keywords */}
                {tool.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {tool.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Launch */}
              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                <span>{t.launchTool}</span>

                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredTools.length === 0 && (
        <div className="p-8 sm:p-10 text-center rounded-2xl liquid-glass border border-white/10 text-slate-300">
          <Search className="w-8 h-8 mx-auto mb-3 text-slate-500" />

          <p className="text-sm sm:text-base font-semibold text-white">
            {t.noResultsFound}
          </p>

          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Try a different tool name, keyword, or developer concept.
          </p>
        </div>
      )}

      {/* AdSense */}
      <AdSenseBanner slotId="category-footer" />
    </div>
  );
};
