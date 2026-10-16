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
  Filter, 
  X, 
  Heart, 
  ShieldCheck,
  LayoutGrid,
  Table,
  Globe2,
  Bookmark,
  Calendar,
  Eye,
  MapPin
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
      
      {/* 1. Header Section */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="font-code text-xs uppercase tracking-widest text-[#D97706] flex items-center gap-2 font-bold">
            <span>EXHAUSTIVE RECORD REGISTRY · 65 AUDITED OPPORTUNITIES</span>
          </div>

          {/* View Mode Switcher (Clean segmented buttons) */}
          <div className="flex items-center bg-[#EFE9E0] p-0.5 rounded-xs font-code text-xs">
            <button
              onClick={() => setViewMode('dossier')}
              className={`px-3 py-1.5 flex items-center gap-1.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'dossier' ? 'bg-[#0E0D11] text-white font-bold' : 'text-[#5E5953] hover:text-[#0E0D11]'
              }`}
              title="Curated Dossier Grid"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Dossier Grid</span>
            </button>

            <button
              onClick={() => setViewMode('ledger')}
              className={`px-3 py-1.5 flex items-center gap-1.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'ledger' ? 'bg-[#0E0D11] text-white font-bold' : 'text-[#5E5953] hover:text-[#0E0D11]'
              }`}
              title="Editorial Table Ledger"
            >
              <Table className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ledger Table</span>
            </button>

            <button
              onClick={() => setViewMode('regional')}
              className={`px-3 py-1.5 flex items-center gap-1.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'regional' ? 'bg-[#0E0D11] text-white font-bold' : 'text-[#5E5953] hover:text-[#0E0D11]'
              }`}
              title="Geographic Clusters"
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">By Region</span>
            </button>
          </div>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl font-normal italic leading-[0.95] text-[#0E0D11] tracking-tight">
          Curated Educational Opportunities
        </h1>

        <p className="text-sm text-[#4A4643] max-w-2xl leading-relaxed font-sans">
          Every scholarship listed below has been verified against institutional websites, primary statutes, or official foundation charters. No invented leads, zero application fees.
        </p>
      </div>

      {/* 2. Interactive Filter Bar & Quick Category Buttons */}
      <div className="space-y-3 font-sans">
        {/* Quick Category Buttons for Instant Toggling */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => {
              setOnlyAfricanPriority(!onlyAfricanPriority);
              setSelectedRegion('All Regions');
            }}
            className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 rounded-xs ${
              onlyAfricanPriority 
                ? 'bg-[#0E0D11] text-white border-[#0E0D11] font-bold shadow-xs' 
                : 'bg-white text-[#5E5953] border-[#E5DFD5] hover:border-[#0E0D11]'
            }`}
          >
            <span>Pan-African Flagships (ALU, Ashesi, UCT)</span>
            {onlyAfricanPriority && <X className="w-3 h-3 text-amber-400" />}
          </button>

          <button
            onClick={() => setOnlyGirlsPriority(!onlyGirlsPriority)}
            className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 rounded-xs ${
              onlyGirlsPriority 
                ? 'bg-[#0E0D11] text-amber-300 border-[#0E0D11] font-bold shadow-xs' 
                : 'bg-white text-[#5E5953] border-[#E5DFD5] hover:border-amber-500'
            }`}
          >
            <Heart className="w-3 h-3 fill-amber-500 text-amber-500 inline" />
            <span>For Young Women Priority</span>
            {onlyGirlsPriority && <X className="w-3 h-3 text-amber-400" />}
          </button>

          <button
            onClick={() => setSelectedFunding(selectedFunding === 'Fully funded' ? 'All Funding Types' : 'Fully funded')}
            className={`px-3 py-1.5 border transition-all cursor-pointer flex items-center gap-1.5 rounded-xs ${
              selectedFunding === 'Fully funded' 
                ? 'bg-emerald-900 text-white border-emerald-900 font-bold shadow-xs' 
                : 'bg-white text-[#5E5953] border-[#E5DFD5] hover:border-emerald-600'
            }`}
          >
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>100% Fully Funded Only</span>
            {selectedFunding === 'Fully funded' && <X className="w-3 h-3" />}
          </button>

          {activeFiltersCount > 0 && (
            <button
              onClick={handleResetFilters}
              className="px-2.5 py-1 text-[#5E5953] hover:text-[#D97706] transition-colors flex items-center gap-1 text-xs font-bold"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Detailed Controls: Search Input & Dropdowns */}
        <div className="p-4 bg-white border border-[#E5DFD5] space-y-3 shadow-xs">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#8A847C] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by scholarship name, university host, provider, or country..."
                className="w-full bg-[#FAF8F5] border border-[#E5DFD5] pl-9 pr-8 py-2 text-xs sm:text-sm text-[#0E0D11] placeholder-[#8A847C] focus:border-[#D97706] outline-hidden font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A847C] hover:text-[#0E0D11]"
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
                className="w-full bg-[#FAF8F5] border border-[#E5DFD5] px-3 py-2 text-xs text-[#0E0D11] focus:border-[#D97706] outline-hidden font-sans"
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
                className="w-full bg-[#FAF8F5] border border-[#E5DFD5] px-3 py-2 text-xs text-[#0E0D11] focus:border-[#D97706] outline-hidden font-sans"
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
                className="w-full bg-[#FAF8F5] border border-[#E5DFD5] px-3 py-2 text-xs text-[#0E0D11] focus:border-[#D97706] outline-hidden font-sans"
              >
                <option value="number">Sort: # ID</option>
                <option value="alpha">Sort: A → Z Name</option>
                <option value="region">Sort: Region</option>
              </select>
            </div>
          </div>

          {/* Results Count & Inspection Hint */}
          <div className="flex items-center justify-between text-xs font-sans text-[#5E5953] pt-1">
            <div>
              Showing <span className="text-[#0E0D11] font-bold tabular-nums">{filteredScholarships.length}</span> of {SCHOLARSHIPS_CATALOGUE.length} audited opportunities
            </div>
            <div className="text-[#716D66] hidden sm:block font-code text-[11px]">
              Hover or click any opportunity to view comprehensive audit record
            </div>
          </div>
        </div>
      </div>

      {/* 3. Empty State */}
      {filteredScholarships.length === 0 && (
        <div className="py-16 text-center border border-[#E5DFD5] bg-white space-y-3 font-sans shadow-xs">
          <div className="text-[#5E5953] text-sm">No audited records match your active criteria.</div>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-[#0E0D11] hover:bg-[#25232B] text-white text-xs uppercase tracking-wider font-bold cursor-pointer rounded-xs"
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
        <div className="border border-[#E5DFD5] bg-white overflow-x-auto shadow-xs">
          <table className="w-full text-left font-sans text-xs">
            <thead className="bg-[#FAF8F5] border-b border-[#E5DFD5] text-[#5E5953] uppercase tracking-wider font-code text-[10px]">
              <tr>
                <th className="py-3 px-4 w-12 font-bold">#</th>
                <th className="py-3 px-4 font-bold">Opportunity & Provider</th>
                <th className="py-3 px-4 font-bold">Destination</th>
                <th className="py-3 px-4 font-bold">Coverage</th>
                <th className="py-3 px-4 font-bold">Deadline</th>
                <th className="py-3 px-4 text-right font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DFD5] font-sans">
              {filteredScholarships.map((item) => {
                const isSaved = savedIds.includes(item.id);
                return (
                  <tr
                    key={item.id}
                    onMouseEnter={() => onHoverScholarship && onHoverScholarship(item)}
                    onClick={() => onSelectScholarship(item)}
                    className="hover:bg-[#FAF8F5] transition-colors cursor-pointer group"
                  >
                    <td className="py-3 px-4 font-code text-[#D97706] font-bold tabular-nums">
                      #{String(item.itemNumber).padStart(2, '0')}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-editorial text-lg text-[#0E0D11] font-semibold group-hover:text-[#D97706] transition-colors">
                        {item.name}
                      </div>
                      <div className="font-sans text-xs text-[#5E5953]">
                        {item.provider} {item.institution ? `· Host: ${item.institution}` : ''}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-sans text-[#4A4643] whitespace-nowrap font-medium">
                      {item.country}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 text-[11px] rounded-xs font-sans ${
                        item.fundingClassification === 'Fully funded'
                          ? 'bg-amber-50 text-amber-900 border border-amber-200 font-semibold'
                          : 'bg-[#F3EFEA] text-[#4A4643]'
                      }`}>
                        {item.fundingClassification}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-code text-xs text-[#5E5953] whitespace-nowrap tabular-nums">
                      {item.deadline}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => onToggleSave(item.id)}
                          className={`p-1.5 transition-colors cursor-pointer rounded-xs ${
                            isSaved ? 'text-amber-700 bg-amber-50' : 'text-[#8A847C] hover:text-[#0E0D11]'
                          }`}
                          title={isSaved ? 'Saved' : 'Save'}
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => onSelectScholarship(item)}
                          className="px-2.5 py-1 bg-[#0E0D11] hover:bg-[#25232B] text-white text-[11px] uppercase font-bold cursor-pointer rounded-xs shadow-xs"
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
              <div className="flex items-center justify-between pb-2 border-b border-[#E5DFD5]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#D97706] rounded-xs" />
                  <h2 className="font-editorial text-3xl font-bold text-[#0E0D11]">
                    {regionName} ({items.length} Programs)
                  </h2>
                </div>
                <span className="font-code text-xs text-[#716D66]">Verified Region Cluster</span>
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
