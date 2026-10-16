import React, { useState } from 'react';
import { PageId } from '../types';
import { siteConfig } from '../data/config';
import { NexusLabLogo } from './NexusLabLogo';
import { 
  Bookmark, 
  Menu, 
  X, 
  Search, 
  MessageCircle,
  GraduationCap,
  Heart,
  BookOpen,
  Info
} from 'lucide-react';
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

  const navItems: { id: PageId; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'scholarships', label: 'Scholarships', icon: GraduationCap },
    { id: 'for-girls', label: 'For Girls', icon: Heart },
    { id: 'resources', label: 'Guides & Resources', icon: BookOpen },
    { id: 'about', label: 'About', icon: Info }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFD5] text-[#0E0D11] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Brand Wordmark & Emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-600 rounded-xs p-1 transition-opacity hover:opacity-95 cursor-pointer shrink-0"
            aria-label="Opportunity by Nexus Lab - Return to Home"
          >
            <NexusLabLogo variant="light" size="md" />
          </button>

          {/* Zone 2: Navigation Links (Clean typography with gold underline indicator) */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-semibold transition-all relative cursor-pointer font-sans whitespace-nowrap shrink-0 rounded-xs ${
                    isActive
                      ? 'text-[#0E0D11] font-bold'
                      : 'text-[#5E5953] hover:text-[#0E0D11] hover:bg-[#F3EFEA]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D97706]"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Functional Utilities (Search, Bookmarks, WhatsApp) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Quick Search trigger (⌘K) */}
            <button
              onClick={onOpenQuickSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#5E5953] hover:text-[#0E0D11] bg-white border border-[#E5DFD5] hover:border-[#0E0D11] transition-colors rounded-xs cursor-pointer shadow-xs whitespace-nowrap shrink-0"
              title="Search scholarships (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-[#8A847C]" />
              <span className="font-sans font-medium">Quick Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-[#FAF8F5] border border-[#E5DFD5] text-[#716D66] rounded-xs font-semibold">
                ⌘K
              </kbd>
            </button>

            {/* Saved Bookmarks */}
            <button
              onClick={onOpenSaved}
              className="relative p-2 text-[#5E5953] hover:text-[#0E0D11] hover:bg-[#F3EFEA] border border-transparent hover:border-[#E5DFD5] transition-colors rounded-xs cursor-pointer"
              title="Saved opportunities"
              aria-label="View saved opportunities"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D97706] text-white text-[9px] font-bold rounded-full flex items-center justify-center font-code shadow-xs">
                  {savedCount}
                </span>
              )}
            </button>

            {/* WhatsApp Community Alerts */}
            <a
              href={siteConfig.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#0E0D11] hover:bg-[#25232B] hover:text-amber-300 border border-[#2B2833] transition-colors rounded-xs shadow-xs cursor-pointer font-sans whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span>WhatsApp Alerts</span>
            </a>
          </div>

          {/* Mobile Header Actions */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={onOpenQuickSearch}
              className="p-2 text-[#5E5953] hover:text-[#0E0D11] cursor-pointer"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenSaved}
              className="relative p-2 text-[#5E5953] hover:text-[#0E0D11] cursor-pointer"
              aria-label="View saved items"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#D97706] text-white text-[8px] font-bold rounded-full flex items-center justify-center font-code">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0E0D11] rounded-xs hover:bg-[#F3EFEA] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-[#FAF8F5] border-b border-[#E5DFD5] px-4 pt-3 pb-6 space-y-1.5 shadow-lg overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-2.5 px-3 rounded-xs text-sm font-semibold flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#0E0D11] text-white font-bold'
                      : 'text-[#0E0D11] hover:bg-[#F3EFEA]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                  </span>
                  {isActive ? (
                    <span className="text-amber-400">●</span>
                  ) : (
                    <span className="text-[#8A847C]">→</span>
                  )}
                </button>
              );
            })}

            <div className="pt-3 border-t border-[#E5DFD5]">
              <a
                href={siteConfig.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#0E0D11] text-white rounded-xs text-xs font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-amber-400 fill-current" />
                <span>{siteConfig.whatsappButtonLabel}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
