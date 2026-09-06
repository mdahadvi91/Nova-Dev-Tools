import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Theme, ToolCategory } from '../types';
import { translations, TranslationDictionary } from '../i18n/translations';

export type ActiveView = 'home' | 'tool' | 'category' | 'legal';
export type LegalPageType = 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact';

interface NavigationState {
  view: ActiveView;
  toolId?: string;
  category?: ToolCategory;
  legalPage?: LegalPageType;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  t: TranslationDictionary;
  navState: NavigationState;
  navigateToHome: () => void;
  navigateToTool: (toolId: string) => void;
  navigateToCategory: (category: ToolCategory) => void;
  navigateToLegal: (legalPage: LegalPageType) => void;
  navigateBack: () => void;
  favorites: string[];
  recentTools: string[];
  toggleFavorite: (toolId: string) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  leftSidebarOpen: boolean;
  setLeftSidebarOpen: (open: boolean) => void;
  rightSidebarOpen: boolean;
  setRightSidebarOpen: (open: boolean) => void;
  openLeftSidebar: () => void;
  openRightSidebar: () => void;
  closeAllSidebars: () => void;
  customBg: string | null;
  setCustomBg: (bg: string | null) => void;
  mobileDrawerOpen: boolean;
  setMobileDrawerOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

function parseUrlToNavState(): NavigationState {
  if (typeof window === 'undefined') return { view: 'home' };
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.replace(/^#\/?/, '');

  if (params.get('tool') || hash.startsWith('tool/')) {
    const toolId = params.get('tool') || hash.replace('tool/', '');
    return { view: 'tool', toolId };
  }
  if (params.get('category') || hash.startsWith('category/')) {
    const category = (params.get('category') || hash.replace('category/', '')) as ToolCategory;
    return { view: 'category', category };
  }
  if (params.get('legal') || hash.startsWith('legal/')) {
    const legalPage = (params.get('legal') || hash.replace('legal/', '')) as LegalPageType;
    return { view: 'legal', legalPage };
  }
  return { view: 'home' };
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('nova_lang') as Language) || 'en';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem('nova_theme') as Theme) || 'system';
  });

  const [isDark, setIsDark] = useState<boolean>(false);
  const [navState, setNavState] = useState<NavigationState>(parseUrlToNavState);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [customBg, setCustomBgState] = useState<string | null>(() => {
    try {
      return localStorage.getItem('nova_custom_bg') || null;
    } catch {
      return null;
    }
  });

  const setCustomBg = (bg: string | null) => {
    setCustomBgState(bg);
    try {
      if (bg) {
        localStorage.setItem('nova_custom_bg', bg);
      } else {
        localStorage.removeItem('nova_custom_bg');
      }
    } catch {
      // storage quota
    }
  };

  const openLeftSidebar = () => {
    setLeftSidebarOpen(true);
    setRightSidebarOpen(false);
    setMobileDrawerOpen(false);
  };

  const openRightSidebar = () => {
    setRightSidebarOpen(true);
    setLeftSidebarOpen(false);
    setMobileDrawerOpen(false);
  };

  const closeAllSidebars = () => {
    setLeftSidebarOpen(false);
    setRightSidebarOpen(false);
    setMobileDrawerOpen(false);
  };

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const val = JSON.parse(localStorage.getItem('nova_favorites') || '[]');
      return Array.isArray(val) ? val : [];
    } catch {
      return [];
    }
  });

  const [recentTools, setRecentTools] = useState<string[]>(() => {
    try {
      const val = JSON.parse(localStorage.getItem('nova_recents') || '[]');
      return Array.isArray(val) ? val : [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = (toolId: string) => {
    setFavorites((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      const updated = safePrev.includes(toolId)
        ? safePrev.filter((id) => id !== toolId)
        : [...safePrev, toolId];
      try {
        localStorage.setItem('nova_favorites', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Sync theme with system and html tag
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      let dark = false;
      if (theme === 'dark') {
        dark = true;
      } else if (theme === 'light') {
        dark = false;
      } else {
        dark = mediaQuery.matches;
      }

      setIsDark(dark);
      if (dark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();
    mediaQuery.addEventListener('change', applyTheme);
    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, [theme]);

  // Sync language and RTL direction
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    if (language === 'ar') {
      root.setAttribute('dir', 'rtl');
    } else {
      root.setAttribute('dir', 'ltr');
    }
    localStorage.setItem('nova_lang', language);
  }, [language]);

  // Listen to browser forward/back buttons naturally
  useEffect(() => {
    const handlePopState = () => {
      setNavState(parseUrlToNavState());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('nova_theme', newTheme);
  };

  const updateUrlAndState = (newState: NavigationState) => {
    setNavState(newState);
    setMobileDrawerOpen(false);
    setLeftSidebarOpen(false);
    setRightSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let url = window.location.pathname;
    if (newState.view === 'tool' && newState.toolId) {
      url += `?tool=${encodeURIComponent(newState.toolId)}`;
    } else if (newState.view === 'category' && newState.category) {
      url += `?category=${encodeURIComponent(newState.category)}`;
    } else if (newState.view === 'legal' && newState.legalPage) {
      url += `?legal=${encodeURIComponent(newState.legalPage)}`;
    }

    window.history.pushState(newState, '', url);
  };

  const navigateToHome = () => updateUrlAndState({ view: 'home' });
  const navigateToTool = (toolId: string) => {
    setRecentTools((prev) => {
      const updated = [toolId, ...prev.filter((id) => id !== toolId)].slice(0, 8);
      localStorage.setItem('nova_recents', JSON.stringify(updated));
      return updated;
    });
    updateUrlAndState({ view: 'tool', toolId });
  };
  const navigateToCategory = (category: ToolCategory) => updateUrlAndState({ view: 'category', category });
  const navigateToLegal = (legalPage: LegalPageType) => updateUrlAndState({ view: 'legal', legalPage });

  const navigateBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Graceful fallback to category or home
      if (navState.category) {
        navigateToCategory(navState.category);
      } else {
        navigateToHome();
      }
    }
  };

  const t = translations[language] || translations.en;

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        isDark,
        t,
        navState,
        navigateToHome,
        navigateToTool,
        navigateToCategory,
        navigateToLegal,
        navigateBack,
        favorites,
        recentTools,
        toggleFavorite,
        searchOpen,
        setSearchOpen,
        sidebarCollapsed,
        setSidebarCollapsed,
        leftSidebarOpen,
        setLeftSidebarOpen,
        rightSidebarOpen,
        setRightSidebarOpen,
        openLeftSidebar,
        openRightSidebar,
        closeAllSidebars,
        customBg,
        setCustomBg,
        mobileDrawerOpen,
        setMobileDrawerOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
