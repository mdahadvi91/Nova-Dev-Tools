import React, {
createContext,
useContext,
useEffect,
useState,
} from 'react';

import { Language, Theme, ToolCategory } from '../types';
import {
translations,
TranslationDictionary,
} from '../i18n/translations';

export type ActiveView =
| 'home'
| 'tool'
| 'category'
| 'legal';

export type LegalPageType =
| 'privacy'
| 'terms'
| 'disclaimer'
| 'about'
| 'contact';

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

const AppContext = createContext<AppContextType | undefined>(
undefined,
);

const VALID_CATEGORIES: ToolCategory[] = [
'utilities',
'design',
];

const VALID_LEGAL_PAGES: LegalPageType[] = [
'privacy',
'terms',
'disclaimer',
'about',
'contact',
];

function isValidCategory(
value: string | null,
): value is ToolCategory {
return (
typeof value === 'string' &&
VALID_CATEGORIES.includes(value as ToolCategory)
);
}

function isValidLegalPage(
value: string | null,
): value is LegalPageType {
return (
typeof value === 'string' &&
VALID_LEGAL_PAGES.includes(value as LegalPageType)
);
}

function parseUrlToNavState(): NavigationState {
if (typeof window === 'undefined') {
return { view: 'home' };
}

try {
const params = new URLSearchParams(
window.location.search,
);

const hash = window.location.hash.replace(
  /^#\/?/,
  '',
);

const toolFromQuery = params.get('tool');

const toolFromHash = hash.startsWith('tool/')
  ? hash.slice('tool/'.length)
  : null;

const toolId = (
  toolFromQuery || toolFromHash
)?.trim();

if (toolId) {
  return {
    view: 'tool',
    toolId,
  };
}

const categoryFromQuery =
  params.get('category');

const categoryFromHash =
  hash.startsWith('category/')
    ? hash.slice('category/'.length)
    : null;

const categoryValue =
  categoryFromQuery || categoryFromHash;

if (isValidCategory(categoryValue)) {
  return {
    view: 'category',
    category: categoryValue,
  };
}

const legalFromQuery = params.get('legal');

const legalFromHash =
  hash.startsWith('legal/')
    ? hash.slice('legal/'.length)
    : null;

const legalValue =
  legalFromQuery || legalFromHash;

if (isValidLegalPage(legalValue)) {
  return {
    view: 'legal',
    legalPage: legalValue,
  };
}

} catch {
return {
view: 'home',
};
}

return {
view: 'home',
};
}

function readStorage<T>(
key: string,
fallback: T,
): T {
if (typeof window === 'undefined') {
return fallback;
}

try {
const value = window.localStorage.getItem(key);

if (value === null) {
  return fallback;
}

return JSON.parse(value) as T;

} catch {
return fallback;
}
}

function writeStorage(
key: string,
value: unknown,
): void {
if (typeof window === 'undefined') {
return;
}

try {
window.localStorage.setItem(
key,
JSON.stringify(value),
);
} catch {
// Storage may be unavailable or quota-limited.
}
}

function removeStorage(key: string): void {
if (typeof window === 'undefined') {
return;
}

try {
window.localStorage.removeItem(key);
} catch {
// Ignore unavailable storage.
}
}

function getStoredLanguage(): Language {
if (typeof window === 'undefined') {
return 'en';
}

try {
const stored =
window.localStorage.getItem('nova_lang');

if (
  stored === 'en' ||
  stored === 'bn' ||
  stored === 'ar'
) {
  return stored;
}

} catch {
// Ignore unavailable storage.
}

return 'en';
}

function getStoredTheme(): Theme {
if (typeof window === 'undefined') {
return 'system';
}

try {
const stored =
window.localStorage.getItem('nova_theme');

if (
  stored === 'light' ||
  stored === 'dark' ||
  stored === 'system'
) {
  return stored;
}

} catch {
// Ignore unavailable storage.
}

return 'system';
}

function getStoredCustomBackground(): string | null {
if (typeof window === 'undefined') {
return null;
}

try {
return (
window.localStorage.getItem(
'nova_custom_bg',
) || null
);
} catch {
return null;
}
}

export const AppProvider: React.FC<{
children: React.ReactNode;
}> = ({ children }) => {
const [language, setLanguageState] =
useState<Language>(getStoredLanguage);

const [theme, setThemeState] =
useState<Theme>(getStoredTheme);

const [isDark, setIsDark] =
useState(false);

const [navState, setNavState] =
useState<NavigationState>(
parseUrlToNavState,
);

const [searchOpen, setSearchOpen] =
useState(false);

const [sidebarCollapsed, setSidebarCollapsed] =
useState(false);

const [mobileDrawerOpen, setMobileDrawerOpen] =
useState(false);

const [leftSidebarOpen, setLeftSidebarOpen] =
useState(false);

const [rightSidebarOpen, setRightSidebarOpen] =
useState(false);

const [customBg, setCustomBgState] =
useState<string | null>(
getStoredCustomBackground,
);

const [favorites, setFavorites] =
useState<string[]>(() => {
const stored = readStorage<unknown>(
'nova_favorites',
[],
);

  return Array.isArray(stored)
    ? stored.filter(
        (item): item is string =>
          typeof item === 'string' &&
          item.trim().length > 0,
      )
    : [];
});

const [recentTools, setRecentTools] =
useState<string[]>(() => {
const stored = readStorage<unknown>(
'nova_recents',
[],
);

  return Array.isArray(stored)
    ? stored.filter(
        (item): item is string =>
          typeof item === 'string' &&
          item.trim().length > 0,
      )
    : [];
});

const setCustomBg = (
bg: string | null,
) => {
const normalizedBg =
typeof bg === 'string'
? bg.trim()
: null;

const nextBg =
  normalizedBg || null;

setCustomBgState(nextBg);

if (nextBg) {
  try {
    window.localStorage.setItem(
      'nova_custom_bg',
      nextBg,
    );
  } catch {
    // Ignore unavailable or quota-limited storage.
  }
} else {
  removeStorage('nova_custom_bg');
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

const toggleFavorite = (
toolId: string,
) => {
const normalizedToolId =
toolId.trim();

if (!normalizedToolId) {
  return;
}

setFavorites((previous) => {
  const safePrevious =
    Array.isArray(previous)
      ? previous
      : [];

  const updated =
    safePrevious.includes(
      normalizedToolId,
    )
      ? safePrevious.filter(
          (id) =>
            id !== normalizedToolId,
        )
      : [
          ...safePrevious,
          normalizedToolId,
        ];

  writeStorage(
    'nova_favorites',
    updated,
  );

  return updated;
});

};

/**

* Synchronize the selected theme with
* the document and operating system preference.
  */
  useEffect(() => {
  if (typeof window === 'undefined') {
  return;
  }

const root =
  document.documentElement;

const mediaQuery =
  window.matchMedia(
    '(prefers-color-scheme: dark)',
  );

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

  root.classList.toggle(
    'dark',
    dark,
  );
};

applyTheme();

mediaQuery.addEventListener(
  'change',
  applyTheme,
);

return () => {
  mediaQuery.removeEventListener(
    'change',
    applyTheme,
  );
};

}, [theme]);

/**

* Synchronize language, HTML lang attribute,
* and RTL/LTR direction.
  */
  useEffect(() => {
  if (typeof document === 'undefined') {
  return;
  }

const root =
  document.documentElement;

root.setAttribute(
  'lang',
  language,
);

root.setAttribute(
  'dir',
  language === 'ar'
    ? 'rtl'
    : 'ltr',
);

writeStorage(
  'nova_lang',
  language,
);

}, [language]);

/**

* Keep application navigation synchronized
* with browser Back / Forward buttons.
  */
  useEffect(() => {
  if (typeof window === 'undefined') {
  return;
  }

const handlePopState = () => {
  setNavState(
    parseUrlToNavState(),
  );

  setSearchOpen(false);
  closeAllSidebars();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

window.addEventListener(
  'popstate',
  handlePopState,
);

return () => {
  window.removeEventListener(
    'popstate',
    handlePopState,
  );
};

}, []);

const setLanguage = (
lang: Language,
) => {
setLanguageState(lang);
};

const setTheme = (
newTheme: Theme,
) => {
setThemeState(newTheme);

writeStorage(
  'nova_theme',
  newTheme,
);

};

const updateUrlAndState = (
newState: NavigationState,
) => {
if (typeof window === 'undefined') {
setNavState(newState);
return;
}

setNavState(newState);

setSearchOpen(false);
setMobileDrawerOpen(false);
setLeftSidebarOpen(false);
setRightSidebarOpen(false);

window.scrollTo({
  top: 0,
  behavior: 'smooth',
});

let url =
  window.location.pathname;

if (
  newState.view === 'tool' &&
  newState.toolId
) {
  url += `?tool=${encodeURIComponent(
    newState.toolId,
  )}`;
} else if (
  newState.view === 'category' &&
  newState.category
) {
  url += `?category=${encodeURIComponent(
    newState.category,
  )}`;
} else if (
  newState.view === 'legal' &&
  newState.legalPage
) {
  url += `?legal=${encodeURIComponent(
    newState.legalPage,
  )}`;
}

window.history.pushState(
  newState,
  '',
  url,
);

};

const navigateToHome = () => {
updateUrlAndState({
view: 'home',
});
};

const navigateToTool = (
toolId: string,
) => {
const normalizedToolId =
toolId.trim();

if (!normalizedToolId) {
  return;
}

setRecentTools((previous) => {
  const safePrevious =
    Array.isArray(previous)
      ? previous
      : [];

  const updated = [
    normalizedToolId,
    ...safePrevious.filter(
      (id) =>
        id !== normalizedToolId,
    ),
  ].slice(0, 8);

  writeStorage(
    'nova_recents',
    updated,
  );

  return updated;
});

updateUrlAndState({
  view: 'tool',
  toolId: normalizedToolId,
});

};

const navigateToCategory = (
category: ToolCategory,
) => {
if (
!VALID_CATEGORIES.includes(
category,
)
) {
return;
}

updateUrlAndState({
  view: 'category',
  category,
});

};

const navigateToLegal = (
legalPage: LegalPageType,
) => {
if (
!VALID_LEGAL_PAGES.includes(
legalPage,
)
) {
return;
}

updateUrlAndState({
  view: 'legal',
  legalPage,
});

};

const navigateBack = () => {
if (
typeof window !== 'undefined' &&
window.history.length > 1
) {
window.history.back();
return;
}

if (navState.view === 'category') {
  navigateToHome();
  return;
}

if (navState.view === 'tool') {
  navigateToHome();
  return;
}

if (navState.view === 'legal') {
  navigateToHome();
  return;
}

navigateToHome();

};

const t =
translations[language] ||
translations.en;

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

export const useApp =
(): AppContextType => {
const context =
useContext(AppContext);

if (!context) {
  throw new Error(
    'useApp must be used within an AppProvider',
  );
}

return context;

};
