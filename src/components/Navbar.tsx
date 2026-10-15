import React, { useState } from 'react';
import { PageId } from '../types';
import { siteConfig } from '../data/config';
import { NexusLabLogo } from './NexusLabLogo';
import { Bookmark, Menu, X, ArrowUpRight, Search, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenQuickSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  savedCount,
  onOpenSaved,
  onOpenQuickSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact 5 items specified in Phase 5.1
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'other-opportunities', label: 'Other Opportunities' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DFD3] text-[#161412] transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with official Nexus Lab mark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-600 rounded-sm p-1 transition-opacity hover:opacity-90 cursor-pointer"
            aria-label="OpportunitybyNexusLab - Return to Home"
          >
            <NexusLabLogo variant="light" size="md" />
          </button>

          {/* Desktop Navigation: Exact 5 items */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-semibold transition-all relative cursor-pointer font-sans ${
                    isActive
                      ? 'text-[#800020] font-bold'
                      : 'text-[#524B43] hover:text-[#161412] hover:bg-[#F3EFE6] rounded-sm'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#800020]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools: Quick Search, Bookmarks, and WhatsApp */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Search trigger */}
            <button
              onClick={onOpenQuickSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#6A635B] hover:text-[#161412] bg-white border border-[#E6DFD3] hover:border-[#161412] transition-colors rounded-sm cursor-pointer shadow-xs"
              title="Search opportunities (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="font-sans font-medium">Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-[#FAF7F2] border border-[#E6DFD3] text-[#7A7167] rounded-xs">
                ⌘K
              </kbd>
            </button>

            {/* Saved Bookmarks */}
            <button
              onClick={onOpenSaved}
              className="relative p-2 text-[#524B43] hover:text-[#161412] hover:bg-[#F3EFE6] border border-transparent hover:border-[#E6DFD3] transition-colors rounded-sm cursor-pointer"
              title="Saved opportunities"
              aria-label="View saved opportunities"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D92626] text-white text-[9px] font-bold rounded-full flex items-center justify-center font-code shadow-xs">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Official WhatsApp Broadcast CTA */}
            <a
              href={siteConfig.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors rounded-sm shadow-xs cursor-pointer font-sans"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Alerts</span>
            </a>
          </div>

          {/* Mobile Menu & Quick Actions Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuickSearch}
              className="p-2 text-[#6A635B] hover:text-[#161412] cursor-pointer"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenSaved}
              className="relative p-2 text-[#6A635B] hover:text-[#161412] cursor-pointer"
              aria-label="View saved items"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#D92626] text-white text-[9px] font-bold rounded-full flex items-center justify-center font-code">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#161412] rounded-sm hover:bg-[#F3EFE6] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#FAF7F2] border-b border-[#E6DFD3] px-4 pt-2 pb-6 space-y-1 shadow-lg overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-sm text-sm font-semibold flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#800020] text-white font-bold'
                      : 'text-[#161412] hover:bg-[#F3EFE6]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span>→</span>}
                </button>
              );
            })}

            {/* Quick Link to For Girls & HALI Resources */}
            <div className="pt-3 border-t border-[#E6DFD3] grid grid-cols-2 gap-2 text-xs font-semibold">
              <button
                onClick={() => handleNavClick('for-girls')}
                className="py-2.5 px-3 bg-white border border-[#E6DFD3] text-rose-800 text-left hover:border-rose-400"
              >
                For Young Women →
              </button>
              <button
                onClick={() => handleNavClick('resources')}
                className="py-2.5 px-3 bg-white border border-[#E6DFD3] text-[#161412] text-left hover:border-[#161412]"
              >
                Fee Waiver Guide →
              </button>
            </div>

            <div className="pt-3">
              <a
                href={siteConfig.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-700 text-white rounded-sm text-sm font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{siteConfig.whatsappButtonLabel}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
