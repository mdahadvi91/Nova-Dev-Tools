import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { TOOLS } from './data/tools';

import { Header } from './components/layout/Header';
import { LeftSidebar } from './components/layout/LeftSidebar';
import { RightSidebar } from './components/layout/RightSidebar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { ToolWorkspace } from './components/common/ToolWorkspace';

// Pages
import { HomePage } from './components/home/HomePage';
import { CategoryPage } from './components/pages/CategoryPage';
import {
  PrivacyPolicyPage,
  TermsPage,
  AboutPage,
  ContactPage,
} from './components/pages/PolicyPages';

// Developer Tools
import { DevTools } from './components/tools/utilities/DevTools';
import { TextTools } from './components/tools/utilities/TextTools';

const MainContent: React.FC = () => {
  const { navState, customBg } = useApp();

  /**
   * Render the correct developer tool for the active tool ID.
   *
   * Tool definitions live in src/data/tools.ts.
   * This keeps routing separate from the tool catalogue and allows
   * the existing Nova Tools UI architecture to remain reusable.
   */
  const renderToolComponent = (toolId: string) => {
    switch (toolId) {
      // ------------------------------------------------------------
      // Developer / Data Tools
      // ------------------------------------------------------------

      case 'json-formatter':
      case 'json-validator':
      case 'json-minifier':
        return <DevTools toolType="json" />;

      case 'base64-converter':
        return <DevTools toolType="base64" />;

      case 'url-encoder':
        return <DevTools toolType="url" />;

      case 'timestamp-converter':
        return <DevTools toolType="timestamp" />;

      case 'password-generator':
        return <DevTools toolType="password" />;

      // ------------------------------------------------------------
      // Text / Code Tools
      // ------------------------------------------------------------

      case 'word-counter':
        return <TextTools toolType="counter" />;

      case 'case-converter':
        return <TextTools toolType="case" />;

      case 'text-cleaner':
        return <TextTools toolType="cleaner" />;

      case 'markdown-preview':
        return <TextTools toolType="markdown" />;

      // ------------------------------------------------------------
      // New Developer Tools
      // ------------------------------------------------------------
      //
      // These IDs are intentionally reserved for the new
      // Nova Dev Tools catalogue. Their dedicated components
      // will be connected here as they are introduced.
      //
      // Examples:
      //
      // case 'regex-tester':
      //   return <RegexTesterTool />;
      //
      // case 'jwt-decoder':
      //   return <JwtDecoderTool />;
      //
      // case 'uuid-generator':
      //   return <UuidGeneratorTool />;
      //
      // case 'hash-generator':
      //   return <HashGeneratorTool />;
      //
      // case 'sql-formatter':
      //   return <SqlFormatterTool />;
      //
      // case 'diff-checker':
      //   return <DiffCheckerTool />;
      //
      // ------------------------------------------------------------

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative text-slate-100 selection:bg-emerald-500 selection:text-white w-full max-w-full overflow-x-hidden">
      {/* Background layer: existing Nova Tools visual system */}
      {customBg ? (
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${customBg})` }}
        />
      ) : (
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-[#060b09]"
          style={{ backgroundImage: `url('/assets/background.jpg')` }}
        />
      )}

      <div className="fixed inset-0 app-bg-overlay pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen w-full max-w-full overflow-x-hidden pt-14 sm:pt-16">
        <Header />

        <LeftSidebar />

        <RightSidebar />

        <SearchModal />

        <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-3 sm:py-6 overflow-x-hidden">
          {/* Home */}
          {navState.view === 'home' && <HomePage />}

          {/* Category */}
          {navState.view === 'category' && navState.category && (
            <CategoryPage category={navState.category} />
          )}

          {/* Legal Pages */}
          {navState.view === 'legal' && (
            <>
              {navState.legalPage === 'privacy' && <PrivacyPolicyPage />}

              {navState.legalPage === 'terms' && <TermsPage />}

              {navState.legalPage === 'about' && <AboutPage />}

              {navState.legalPage === 'contact' && <ContactPage />}

              {(!navState.legalPage ||
                navState.legalPage === 'disclaimer') && (
                <PrivacyPolicyPage />
              )}
            </>
          )}

          {/* Tool Workspace */}
          {navState.view === 'tool' && navState.toolId && (
            (() => {
              const toolDef = TOOLS.find(
                (tool) => tool.id === navState.toolId,
              );

              if (!toolDef) {
                return null;
              }

              const toolComponent = renderToolComponent(navState.toolId);

              if (!toolComponent) {
                return null;
              }

              return (
                <ToolWorkspace tool={toolDef}>
                  {toolComponent}
                </ToolWorkspace>
              );
            })()
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
