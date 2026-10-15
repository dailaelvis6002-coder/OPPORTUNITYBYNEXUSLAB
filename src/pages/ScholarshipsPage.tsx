import React, { useState, useMemo } from 'react';
import { ScholarshipRecord, Region } from '../types';
import { 
  SCHOLARSHIPS_CATALOGUE, 
  REGIONS_LIST, 
  FUNDING_CLASSIFICATIONS_LIST, 
  AUDIT_STATUSES_LIST 
} from '../data/scholarshipsCatalogue';
import { OpportunityCard } from '../components/OpportunityCard';
import { 
  Search, 
  RotateCcw, 
  GraduationCap, 
  Filter, 
  X, 
  ArrowUpDown, 
  Heart, 
  ShieldCheck,
  LayoutGrid,
  ListFilter,
  Table,
  Globe2,
  ExternalLink,
  Bookmark,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScholarshipsPageProps {
  onSelectScholarship: (scholarship: ScholarshipRecord) => void;
  onHoverScholarship?: (scholarship: ScholarshipRecord) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  initialQuery?: string;
}

export const ScholarshipsPage: React.FC<ScholarshipsPageProps> = ({
  onSelectScholarship,
  onHoverScholarship,
  savedIds,
  onToggleSave,
  initialQuery = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');
  const [selectedFunding, setSelectedFunding] = useState<string>('All Funding Types');
  const [selectedStatus, setSelectedStatus] = useState<string>('All Statuses');
  const [onlyGirlsPriority, setOnlyGirlsPriority] = useState<boolean>(false);
  const [onlyAfricanPriority, setOnlyAfricanPriority] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'number' | 'alpha' | 'region'>('number');
  const [viewMode, setViewMode] = useState<'dossier' | 'ledger' | 'regional'>('dossier');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter & Search Logic across all 65 audited records
  const filteredScholarships = useMemo(() => {
    return SCHOLARSHIPS_CATALOGUE.filter((item) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesProvider = item.provider.toLowerCase().includes(q);
        const matchesInstitution = item.institution?.toLowerCase().includes(q) || false;
        const matchesCountry = item.country.toLowerCase().includes(q);
        const matchesRegion = item.region.toLowerCase().includes(q);

        if (!matchesName && !matchesProvider && !matchesInstitution && !matchesCountry && !matchesRegion) {
          return false;
        }
      }

      if (selectedRegion !== 'All Regions' && item.region !== selectedRegion) {
        return false;
      }

      if (selectedFunding !== 'All Funding Types' && item.fundingClassification !== selectedFunding) {
        return false;
      }

      if (selectedStatus !== 'All Statuses' && item.status !== selectedStatus) {
        return false;
      }

      if (onlyGirlsPriority && !(item.girlsWomenRelevance?.isPriority || item.girlsWomenRelevance?.isReserved)) {
        return false;
      }

      if (onlyAfricanPriority && item.region !== 'Africa') {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'alpha') return a.name.localeCompare(b.name);
      if (sortBy === 'region') return a.region.localeCompare(b.region);
      return a.itemNumber - b.itemNumber;
    });
  }, [searchQuery, selectedRegion, selectedFunding, selectedStatus, onlyGirlsPriority, onlyAfricanPriority, sortBy]);

  const activeFiltersCount = [
    selectedRegion !== 'All Regions',
    selectedFunding !== 'All Funding Types',
    selectedStatus !== 'All Statuses',
    onlyGirlsPriority,
    onlyAfricanPriority,
    Boolean(searchQuery.trim())
  ].filter(Boolean).length;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All Regions');
    setSelectedFunding('All Funding Types');
    setSelectedStatus('All Statuses');
    setOnlyGirlsPriority(false);
    setOnlyAfricanPriority(false);
  };

  // Group by region for regional clustering view
  const regionalGroups = useMemo(() => {
    const groups: { [key: string]: ScholarshipRecord[] } = {};
    filteredScholarships.forEach((item) => {
      if (!groups[item.region]) groups[item.region] = [];
      groups[item.region].push(item);
    });
    return groups;
  }, [filteredScholarships]);

  return (
    <div className="space-y-8 pb-16 text-left">
      
      {/* 1. Header Section matching warm beige theme */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="font-code text-xs uppercase tracking-widest text-[#D92626] flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D92626] animate-pulse" />
            <span>EXHAUSTIVE RECORD REGISTRY (65 TOTAL AUDITED)</span>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center bg-white border border-[#E6DFD3] p-0.5 rounded-none font-code text-xs shadow-xs">
            <button
              onClick={() => setViewMode('dossier')}
              className={`px-3 py-1 flex items-center gap-1.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'dossier' ? 'bg-[#D92626] text-white font-bold' : 'text-[#6A635B] hover:text-[#161412]'
              }`}
              title="Curated Dossier Grid"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Dossier Grid</span>
            </button>

            <button
              onClick={() => setViewMode('ledger')}
              className={`px-3 py-1 flex items-center gap-1.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'ledger' ? 'bg-[#D92626] text-white font-bold' : 'text-[#6A635B] hover:text-[#161412]'
              }`}
              title="Editorial Table Ledger"
            >
              <Table className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ledger Table</span>
            </button>

            <button
              onClick={() => setViewMode('regional')}
              className={`px-3 py-1 flex items-center gap-1.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'regional' ? 'bg-[#D92626] text-white font-bold' : 'text-[#6A635B] hover:text-[#161412]'
              }`}
              title="Geographic Clusters"
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">By Region</span>
            </button>
          </div>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl font-normal italic leading-[0.95] text-[#161412] tracking-tight">
          Curated Educational Opportunities
        </h1>

        <p className="text-xs sm:text-sm text-[#524B43] max-w-2xl leading-relaxed font-sans">
          Every scholarship listed below has been verified against institutional websites, primary statutes, or official foundation charters. No invented leads, zero application fees.
        </p>
      </div>

      {/* 2. Interactive Filter Bar & Quick Category Buttons */}
      <div className="space-y-3">
        {/* Quick Category Buttons for Instant Toggling */}
        <div className="flex flex-wrap items-center gap-2 font-code text-xs">
          <button
            onClick={() => {
              setOnlyAfricanPriority(!onlyAfricanPriority);
              setSelectedRegion('All Regions');
            }}
            className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 rounded-xs ${
              onlyAfricanPriority 
                ? 'bg-[#D92626] text-white border-[#D92626] font-bold shadow-xs' 
                : 'bg-white text-[#524B43] border-[#E6DFD3] hover:border-[#161412]'
            }`}
          >
            <span>Pan-African Flagships (ALU, Ashesi, UCT)</span>
            {onlyAfricanPriority && <X className="w-3 h-3" />}
          </button>

          <button
            onClick={() => setOnlyGirlsPriority(!onlyGirlsPriority)}
            className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 rounded-xs ${
              onlyGirlsPriority 
                ? 'bg-rose-700 text-white border-rose-700 font-bold shadow-xs' 
                : 'bg-white text-[#524B43] border-[#E6DFD3] hover:border-rose-400'
            }`}
          >
            <Heart className="w-3 h-3 fill-rose-600 text-rose-600 inline" />
            <span>For Young Women</span>
            {onlyGirlsPriority && <X className="w-3 h-3" />}
          </button>

          <button
            onClick={() => setSelectedFunding(selectedFunding === 'Fully funded' ? 'All Funding Types' : 'Fully funded')}
            className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 rounded-xs ${
              selectedFunding === 'Fully funded' 
                ? 'bg-emerald-800 text-white border-emerald-800 font-bold shadow-xs' 
                : 'bg-white text-[#524B43] border-[#E6DFD3] hover:border-emerald-600'
            }`}
          >
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>100% Fully Funded</span>
            {selectedFunding === 'Fully funded' && <X className="w-3 h-3" />}
          </button>

          {activeFiltersCount > 0 && (
            <button
              onClick={handleResetFilters}
              className="px-2.5 py-1 text-[#6A635B] hover:text-[#D92626] transition-colors flex items-center gap-1 text-[11px] font-bold"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Detailed Controls: Search Input & Dropdowns */}
        <div className="p-4 bg-white border border-[#E6DFD3] space-y-3 shadow-xs">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#9E9589] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by scholarship name, university host, provider, or country..."
                className="w-full bg-[#FAF7F2] border border-[#E6DFD3] pl-9 pr-8 py-2 text-xs sm:text-sm text-[#161412] placeholder-[#9E9589] focus:border-[#D92626] outline-hidden font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9E9589] hover:text-[#161412]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Region Dropdown */}
            <div className="w-full md:w-48">
              <select
                value={selectedRegion}
                onChange={(e) => {
                  setSelectedRegion(e.target.value);
                  if (e.target.value !== 'Africa') setOnlyAfricanPriority(false);
                }}
                className="w-full bg-[#FAF7F2] border border-[#E6DFD3] px-3 py-2 text-xs text-[#161412] focus:border-[#D92626] outline-hidden font-code"
              >
                <option value="All Regions">All Regions</option>
                {REGIONS_LIST.map((reg) => (
                  <option key={reg} value={reg}>{reg}</option>
                ))}
              </select>
            </div>

            {/* Funding Dropdown */}
            <div className="w-full md:w-48">
              <select
                value={selectedFunding}
                onChange={(e) => setSelectedFunding(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#E6DFD3] px-3 py-2 text-xs text-[#161412] focus:border-[#D92626] outline-hidden font-code"
              >
                <option value="All Funding Types">All Funding Types</option>
                {FUNDING_CLASSIFICATIONS_LIST.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-40">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-[#FAF7F2] border border-[#E6DFD3] px-3 py-2 text-xs text-[#161412] focus:border-[#D92626] outline-hidden font-code"
              >
                <option value="number">Sort: # Record ID</option>
                <option value="alpha">Sort: A → Z Name</option>
                <option value="region">Sort: By Region</option>
              </select>
            </div>
          </div>

          {/* Results Count & Status Pill */}
          <div className="flex items-center justify-between text-[11px] font-code text-[#6A635B] pt-1">
            <div>
              Showing <span className="text-[#161412] font-bold">{filteredScholarships.length}</span> of {SCHOLARSHIPS_CATALOGUE.length} audited opportunities
            </div>
            <div className="text-[#7A7167] hidden sm:block">
              Hover over any item to inspect in right pane
            </div>
          </div>
        </div>
      </div>

      {/* 3. Empty State */}
      {filteredScholarships.length === 0 && (
        <div className="py-16 text-center border border-[#E6DFD3] bg-white space-y-3 font-code shadow-xs">
          <div className="text-[#6A635B] text-sm">No audited records match your active criteria.</div>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-[#D92626] hover:bg-[#B91C1C] text-white text-xs uppercase tracking-wider font-bold cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* 4. VIEW MODE 1: CURATED DOSSIER GRID */}
      {viewMode === 'dossier' && filteredScholarships.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredScholarships.map((scholarship) => (
            <OpportunityCard
              key={scholarship.id}
              scholarship={scholarship}
              onSelect={onSelectScholarship}
              onHover={onHoverScholarship}
              isSaved={savedIds.includes(scholarship.id)}
              onToggleSave={onToggleSave}
              featured={scholarship.itemNumber === 1 || scholarship.itemNumber === 2}
            />
          ))}
        </div>
      )}

      {/* 5. VIEW MODE 2: LEDGER TABLE */}
      {viewMode === 'ledger' && filteredScholarships.length > 0 && (
        <div className="border border-[#E6DFD3] bg-white overflow-x-auto shadow-xs">
          <table className="w-full text-left font-code text-xs">
            <thead className="bg-[#F3EFE6] border-b border-[#E6DFD3] text-[#6A635B] uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 w-12 font-bold">#</th>
                <th className="py-3 px-4 font-bold">Opportunity & Provider</th>
                <th className="py-3 px-4 font-bold">Destination</th>
                <th className="py-3 px-4 font-bold">Coverage</th>
                <th className="py-3 px-4 font-bold">Deadline</th>
                <th className="py-3 px-4 text-right font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6DFD3] font-sans">
              {filteredScholarships.map((item) => {
                const isSaved = savedIds.includes(item.id);
                return (
                  <tr
                    key={item.id}
                    onMouseEnter={() => onHoverScholarship && onHoverScholarship(item)}
                    onClick={() => onSelectScholarship(item)}
                    className="hover:bg-[#FAF7F2] transition-colors cursor-pointer group"
                  >
                    <td className="py-3 px-4 font-code text-[#D92626] font-bold">
                      #{String(item.itemNumber).padStart(2, '0')}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-editorial text-lg text-[#161412] font-semibold group-hover:text-[#D92626] transition-colors">
                        {item.name}
                      </div>
                      <div className="font-code text-[10px] text-[#6A635B]">
                        {item.provider} {item.institution ? `· Host: ${item.institution}` : ''}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-code text-[#524B43] whitespace-nowrap font-medium">
                      {item.country}
                    </td>
                    <td className="py-3 px-4 font-code">
                      <span className={`px-2 py-0.5 text-[10px] rounded-xs ${
                        item.fundingClassification === 'Fully funded'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold'
                          : 'bg-[#F3EFE6] text-[#524B43]'
                      }`}>
                        {item.fundingClassification}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-code text-[11px] text-[#6A635B] whitespace-nowrap">
                      {item.deadline}
                    </td>
                    <td className="py-3 px-4 text-right font-code">
                      <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => onToggleSave(item.id)}
                          className={`p-1.5 transition-colors cursor-pointer rounded-xs ${
                            isSaved ? 'text-red-600 bg-red-50' : 'text-[#9E9589] hover:text-[#161412]'
                          }`}
                          title={isSaved ? 'Saved' : 'Save'}
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => onSelectScholarship(item)}
                          className="px-2.5 py-1 bg-[#D92626] hover:bg-[#B91C1C] text-white text-[10px] uppercase font-bold cursor-pointer rounded-xs shadow-xs"
                        >
                          Audit
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* 6. VIEW MODE 3: REGIONAL CLUSTERS */}
      {viewMode === 'regional' && filteredScholarships.length > 0 && (
        <div className="space-y-12">
          {Object.entries(regionalGroups).map(([regionName, items]) => (
            <section key={regionName} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#E6DFD3]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#D92626] rounded-none" />
                  <h2 className="font-editorial text-3xl font-bold text-[#161412]">
                    {regionName} ({items.length} Programs)
                  </h2>
                </div>
                <span className="font-code text-xs text-[#7A7167]">Verified Region Cluster</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {items.map((scholarship) => (
                  <OpportunityCard
                    key={scholarship.id}
                    scholarship={scholarship}
                    onSelect={onSelectScholarship}
                    onHover={onHoverScholarship}
                    isSaved={savedIds.includes(scholarship.id)}
                    onToggleSave={onToggleSave}
                    showThumbnail={scholarship.itemNumber <= 4}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

    </div>
  );
};
