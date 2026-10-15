import React from 'react';
import { PageId } from '../types';
import { NexusLabLogo } from './NexusLabLogo';
import { 
  Home, 
  GraduationCap, 
  Heart, 
  BookOpen, 
  Info, 
  Search, 
  Bookmark,
  CreditCard,
  Award
} from 'lucide-react';

interface SideNavSpineProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenQuickSearch: () => void;
  onOpenMemberCard?: () => void;
}

export const SideNavSpine: React.FC<SideNavSpineProps> = ({
  currentPage,
  onNavigate,
  savedCount,
  onOpenSaved,
  onOpenQuickSearch,
  onOpenMemberCard
}) => {
  const navItems: { id: PageId; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'scholarships', label: 'Scholarships', icon: GraduationCap },
    { id: 'for-girls', label: 'For Girls', icon: Heart },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'about', label: 'About', icon: Info }
  ];

  return (
    <aside className="hidden lg:flex w-20 flex-col items-center justify-between py-6 border-r border-[#E6DFD3] bg-[#F3EFE6] text-[#161412] flex-shrink-0 select-none z-30">
      
      {/* Top Brand Mark */}
      <button
        onClick={() => onNavigate('home')}
        className="focus:outline-hidden hover:opacity-80 transition-opacity cursor-pointer p-1"
        title="OpportunitybyNexusLab"
      >
        <NexusLabLogo variant="light" size="sm" showWordmark={false} />
      </button>

      {/* Middle Vertical Text & Page Nav Icons */}
      <div className="flex flex-col items-center gap-8 my-auto">
        
        {/* Quick Nav Icon Buttons */}
        <div className="flex flex-col items-center gap-2.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`p-2.5 rounded-md transition-all cursor-pointer relative group ${
                  isActive
                    ? 'bg-[#D92626] text-white shadow-md shadow-red-600/20'
                    : 'text-[#6A635B] hover:text-[#161412] hover:bg-[#EAE3D5]'
                }`}
                title={item.label}
              >
                <Icon className="w-4 h-4" />
                {/* Tooltip on hover */}
                <span className="absolute left-14 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#161412] text-white text-[11px] font-code whitespace-nowrap rounded-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Vertical Rule & Spine Typography */}
        <div className="h-10 w-[1px] bg-[#D8CFBF]" />

        <div className="font-code text-[10px] tracking-[0.25em] uppercase text-[#7A7167] font-semibold rotate-180 [writing-mode:vertical-rl]">
          Opportunities by Nexus Lab
        </div>
      </div>

      {/* Bottom Search & Bookmarks */}
      <div className="flex flex-col items-center gap-2.5 pt-4">
        {onOpenMemberCard && (
          <button
            onClick={onOpenMemberCard}
            className="p-2 text-[#D92626] hover:bg-[#EAE3D5] rounded-md transition-colors cursor-pointer relative group"
            title="Carte de Membre Albi-Alès"
          >
            <Award className="w-4 h-4" />
            <span className="absolute left-14 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#161412] text-white text-[11px] font-code whitespace-nowrap rounded-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 shadow-md">
              Carte de Membre Albi-Alès
            </span>
          </button>
        )}

        <button
          onClick={onOpenQuickSearch}
          className="p-2 text-[#6A635B] hover:text-[#161412] hover:bg-[#EAE3D5] rounded-md transition-colors cursor-pointer"
          title="Search Catalogue (Ctrl + K)"
        >
          <Search className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenSaved}
          className="relative p-2 text-[#6A635B] hover:text-[#161412] hover:bg-[#EAE3D5] rounded-md transition-colors cursor-pointer"
          title="Saved Opportunities"
        >
          <Bookmark className="w-4 h-4" />
          {savedCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D92626] text-white text-[9px] font-bold rounded-full flex items-center justify-center font-code shadow-xs">
              {savedCount}
            </span>
          )}
        </button>

        <div className="font-code text-[10px] text-[#D92626] font-bold mt-1">
          2026
        </div>
      </div>

    </aside>
  );
};
