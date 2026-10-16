/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, ScholarshipRecord } from './types';
import { SCHOLARSHIPS_CATALOGUE } from './data/scholarshipsCatalogue';
import { siteConfig } from './data/config';
import { SideNavSpine } from './components/SideNavSpine';
import { InspectorPane } from './components/InspectorPane';
import { OpportunityModal } from './components/OpportunityModal';
import { BookmarksModal } from './components/BookmarksModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { NexusLabLogo } from './components/NexusLabLogo';

import { HomePage } from './pages/HomePage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { ForGirlsPage } from './pages/ForGirlsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';

import { 
  Menu, 
  X, 
  Search, 
  Bookmark, 
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedScholarship, setSelectedScholarship] = useState<ScholarshipRecord | null>(null);
  const [inspectedScholarship, setInspectedScholarship] = useState<ScholarshipRecord | null>(
    SCHOLARSHIPS_CATALOGUE[0] || null
  );
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState(false);
  const [searchPrefill, setSearchPrefill] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. Load bookmarked opportunities
  useEffect(() => {
    try {
      const stored = localStorage.getItem('nexus_saved_scholarship_ids');
      if (stored) {
        setSavedIds(JSON.parse(stored));
      }
    } catch (e) {}
  }, []);

  // 2. Deep linking support: ?id=xxx or hash navigation
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const oppId = params.get('id');
    if (oppId) {
      const match = SCHOLARSHIPS_CATALOGUE.find((s) => s.id === oppId);
      if (match) {
        setSelectedScholarship(match);
        setInspectedScholarship(match);
      }
    }

    const hash = window.location.hash.replace('#', '');
    if (['home', 'scholarships', 'for-girls', 'resources', 'about'].includes(hash)) {
      setCurrentPage(hash as PageId);
    }
  }, []);

  // Sync inspected scholarship when a scholarship is selected
  const handleSelectScholarship = (scholarship: ScholarshipRecord) => {
    setSelectedScholarship(scholarship);
    setInspectedScholarship(scholarship);
  };

  // 3. Toggle Bookmark
  const handleToggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('nexus_saved_scholarship_ids', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const handleClearAllBookmarks = () => {
    setSavedIds([]);
    try {
      localStorage.removeItem('nexus_saved_scholarship_ids');
    } catch (e) {}
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    setMobileMenuOpen(false);
  };

  const handleSearchFromHome = (query: string) => {
    setSearchPrefill(query);
    setCurrentPage('scholarships');
    window.location.hash = 'scholarships';
  };

  const savedScholarshipsList = SCHOLARSHIPS_CATALOGUE.filter((s) => savedIds.includes(s.id));

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'for-girls', label: 'For Girls' },
    { id: 'resources', label: 'Resources' },
    { id: 'about', label: 'About' }
  ];

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-[#FAF8F5] text-[#0E0D11] font-sans selection:bg-[#D97706] selection:text-white antialiased">
      
      {/* Mobile Top Header (Hidden on lg screens) */}
      <div className="lg:hidden h-16 border-b border-[#E5DFD5] bg-[#F7F4EE] px-4 flex items-center justify-between flex-shrink-0 z-40">
        <button
          onClick={() => handleNavigate('home')}
          className="focus:outline-hidden"
          aria-label="Nexus Lab Home"
        >
          <NexusLabLogo variant="light" size="sm" />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsQuickSearchOpen(true)}
            className="p-2 text-[#5E5953] hover:text-[#0E0D11]"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsBookmarksOpen(true)}
            className="relative p-2 text-[#5E5953] hover:text-[#0E0D11]"
            aria-label="Saved Bookmarks"
          >
            <Bookmark className="w-4 h-4" />
            {savedIds.length > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#D97706] text-white text-[8px] font-bold rounded-full flex items-center justify-center font-code shadow-xs tabular-nums">
                {savedIds.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0E0D11]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-[#E5DFD5] bg-[#FAF8F5] px-4 py-4 space-y-2 z-50 overflow-hidden font-code text-xs shadow-md"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full text-left py-2.5 px-3 rounded-xs flex items-center justify-between cursor-pointer transition-colors ${
                  currentPage === item.id 
                    ? 'bg-[#0E0D11] text-[#F59E0B] font-bold' 
                    : 'text-[#5E5953] hover:bg-[#F3EFEA]'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && <span>→</span>}
              </button>
            ))}

            <div className="pt-3 border-t border-[#E5DFD5]">
              <a
                href={siteConfig.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-[#0E0D11] text-white flex items-center justify-center gap-2 font-bold shadow-xs rounded-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current text-amber-400" />
                <span>{siteConfig.whatsappButtonLabel}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main 3-Column Layout with Warm Alabaster & Nexus Gold Aesthetic */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* 1. Left Vertical Spine Navigation (Desktop 80px) */}
        <SideNavSpine
          currentPage={currentPage}
          onNavigate={handleNavigate}
          savedCount={savedIds.length}
          onOpenSaved={() => setIsBookmarksOpen(true)}
          onOpenQuickSearch={() => setIsQuickSearchOpen(true)}
        />

        {/* 2. Center Content Area (Scrollable with Cormorant Garamond & Plus Jakarta Sans) */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 py-8 border-r border-[#E5DFD5] bg-[#FAF8F5]">
          
          {/* Top Sub-Nav Links on Desktop */}
          <div className="hidden lg:flex items-center justify-between pb-6 mb-8 border-b border-[#E5DFD5] font-code text-xs text-[#5E5953]">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`hover:text-[#0E0D11] transition-colors cursor-pointer uppercase tracking-wider font-semibold ${
                    currentPage === item.id ? 'text-[#0E0D11] font-bold underline underline-offset-8 decoration-[#D97706]' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                65 Records Audited
              </span>
              <span className="text-[#D5CDC0]">|</span>
              <span className="text-[#D97706] font-bold">Strict Source Control</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <HomePage
                  onNavigate={handleNavigate}
                  onSelectScholarship={handleSelectScholarship}
                  onHoverScholarship={setInspectedScholarship}
                  savedIds={savedIds}
                  onToggleSave={handleToggleSave}
                  onSearchQuery={handleSearchFromHome}
                />
              </motion.div>
            )}

            {currentPage === 'scholarships' && (
              <motion.div
                key="scholarships"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <ScholarshipsPage
                  onSelectScholarship={handleSelectScholarship}
                  onHoverScholarship={setInspectedScholarship}
                  savedIds={savedIds}
                  onToggleSave={handleToggleSave}
                  initialQuery={searchPrefill}
                />
              </motion.div>
            )}

            {currentPage === 'for-girls' && (
              <motion.div
                key="for-girls"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <ForGirlsPage
                  onSelectScholarship={handleSelectScholarship}
                  onHoverScholarship={setInspectedScholarship}
                  savedIds={savedIds}
                  onToggleSave={handleToggleSave}
                  onNavigate={handleNavigate}
                />
              </motion.div>
            )}

            {currentPage === 'resources' && (
              <motion.div
                key="resources"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <ResourcesPage />
              </motion.div>
            )}

            {currentPage === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                <AboutPage onNavigate={handleNavigate} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* 3. Right-hand Editorial Inspector Pane (Desktop 380px-420px) */}
        <div className="hidden lg:block overflow-y-auto">
          <InspectorPane
            activeScholarship={inspectedScholarship}
            onSelectScholarship={handleSelectScholarship}
            onNavigate={handleNavigate}
            onOpenQuickSearch={() => setIsQuickSearchOpen(true)}
            isSaved={inspectedScholarship ? savedIds.includes(inspectedScholarship.id) : false}
            onToggleSave={handleToggleSave}
          />
        </div>

      </div>

      {/* Reusable Detailed Opportunity Audit Modal */}
      <OpportunityModal
        scholarship={selectedScholarship}
        onClose={() => setSelectedScholarship(null)}
        isSaved={selectedScholarship ? savedIds.includes(selectedScholarship.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* Bookmarks Drawer */}
      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedScholarships={savedScholarshipsList}
        onSelectScholarship={handleSelectScholarship}
        onRemoveBookmark={handleToggleSave}
        onClearAll={handleClearAllBookmarks}
      />

      {/* Quick Search Overlay (Ctrl + K) */}
      <QuickSearchModal
        isOpen={isQuickSearchOpen}
        onClose={() => setIsQuickSearchOpen(false)}
        onSelectScholarship={handleSelectScholarship}
      />

      {/* Curatorial Footer matching Nexus Lab Palette */}
      <footer className="h-12 border-t border-[#E5DFD5] bg-[#F7F4EE] flex items-center justify-between px-4 sm:px-8 font-code text-[11px] uppercase tracking-wider text-[#5E5953] flex-shrink-0 z-30">
        <div>© 2026 OpportunitybyNexusLab</div>
        
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => handleNavigate('about')} className="hover:text-[#0E0D11] transition-colors cursor-pointer">
            Anti-Fraud Policy
          </button>
          <span>·</span>
          <button onClick={() => handleNavigate('about')} className="hover:text-[#0E0D11] transition-colors cursor-pointer">
            Reliability Principles
          </button>
          <span>·</span>
          <span className="text-[#716D66]">Nexus Lab — Hand-Audited Admissions</span>
        </div>

        <a
          href={`mailto:${siteConfig.email}`}
          className="text-[#0E0D11] hover:text-[#D97706] transition-colors lowercase font-semibold"
        >
          {siteConfig.email}
        </a>
      </footer>

    </div>
  );
}
