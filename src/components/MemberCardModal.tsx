import React, { useState } from 'react';
import { CURATED_IMAGES } from '../data/images';
import { siteConfig } from '../data/config';
import { NexusLabLogo } from './NexusLabLogo';
import { 
  X, 
  Printer, 
  Download, 
  ShieldCheck, 
  Award, 
  QrCode, 
  Check, 
  Sparkles,
  GraduationCap,
  Building2,
  Calendar,
  Compass,
  FileCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MemberCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemberCardModal: React.FC<MemberCardModalProps> = ({
  isOpen,
  onClose
}) => {
  const [scholarName, setScholarName] = useState('Élève Chercheur Africain');
  const [fieldOfStudy, setFieldOfStudy] = useState('Génie Industriel & Procédés (Albi / Alès)');
  const [selectedTrack, setSelectedTrack] = useState<'albi-ales' | 'pan-african'>('albi-ales');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentPhoto = selectedTrack === 'albi-ales' 
    ? CURATED_IMAGES.africanStemEngineer 
    : CURATED_IMAGES.africanWomanArchitecture;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText('NEXUS-AFR-2026-ALBI-ALES-0842');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white text-[#161412]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-[#FAF7F2] border border-[#E6DFD3] shadow-2xl overflow-hidden my-auto print:max-w-none print:shadow-none print:border-none"
        >
          {/* Header Bar */}
          <div className="bg-[#F3EFE6] px-6 py-4 flex items-center justify-between border-b border-[#E6DFD3] font-code text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-bold text-[#161412] uppercase tracking-wider">
                Carte de Membre Officielle · Programme d'Excellence Afrique
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-1.5 text-[#6A635B] hover:text-[#161412] hover:bg-white rounded-xs transition-colors cursor-pointer flex items-center gap-1 font-code text-[11px]"
                title="Imprimer la carte"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Imprimer</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-[#6A635B] hover:text-[#161412] hover:bg-white rounded-xs transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Context & Description */}
            <div className="space-y-1 text-left">
              <div className="font-code text-[11px] text-[#D92626] uppercase tracking-widest font-bold">
                Programme d'Ingénierie & Bourses d'Excellence · Albi & Alès
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#161412]">
                Carte d'Accréditation Candidat Boursier Africain
              </h2>
              <p className="text-xs sm:text-sm text-[#524B43] font-sans leading-relaxed">
                Représentation officielle et exclusive d'élèves et chercheurs africains pour les partenariats académiques d'ingénierie (IMT Mines Albi, IMT Mines Alès, 2iE Burkina Faso, et programmes pan-africains).
              </p>
            </div>

            {/* Track Switcher */}
            <div className="flex flex-wrap items-center gap-2 font-code text-xs pt-1">
              <button
                onClick={() => {
                  setSelectedTrack('albi-ales');
                  setFieldOfStudy('Génie Industriel & Procédés (Albi / Alès)');
                }}
                className={`px-3.5 py-1.5 transition-colors cursor-pointer border ${
                  selectedTrack === 'albi-ales'
                    ? 'bg-[#D92626] text-white border-[#D92626] font-bold shadow-xs'
                    : 'bg-white text-[#524B43] border-[#E6DFD3] hover:border-[#161412]'
                }`}
              >
                Filière Ingénierie Albi & Alès
              </button>

              <button
                onClick={() => {
                  setSelectedTrack('pan-african');
                  setFieldOfStudy('Sciences Appliquées & Architecture');
                }}
                className={`px-3.5 py-1.5 transition-colors cursor-pointer border ${
                  selectedTrack === 'pan-african'
                    ? 'bg-[#D92626] text-white border-[#D92626] font-bold shadow-xs'
                    : 'bg-white text-[#524B43] border-[#E6DFD3] hover:border-[#161412]'
                }`}
              >
                Filière Leadership Pan-Africain & Femmes en STEM
              </button>
            </div>

            {/* THE CARD ITSELF: Authentic Archival Beige Card with Fine Borders & Zero White People */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F4EEE2] border-2 border-[#D8CFBF] p-6 sm:p-8 shadow-md rounded-none text-left print:border print:shadow-none">
              
              {/* Fine Archival Guilloche-Style Framing */}
              <div className="absolute inset-1.5 border border-[#E6DFD3] pointer-events-none" />
              
              {/* Top Card Bar */}
              <div className="relative z-10 flex items-start justify-between gap-4 pb-4 border-b border-[#E6DFD3]">
                <div className="flex items-center gap-3">
                  <NexusLabLogo variant="light" size="sm" />
                  <div>
                    <div className="font-editorial text-lg font-bold tracking-tight text-[#161412]">
                      OPPORTUNITYBYNEXUSLAB
                    </div>
                    <div className="font-code text-[9px] uppercase tracking-wider text-[#6A635B]">
                      Nexus Lab Academic Registry · République du Burkina Faso & Afrique
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-code text-[10px] uppercase tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-700" />
                    ACCRÉDITÉ 2026–2027
                  </span>
                  <div className="font-code text-[9px] text-[#7A7167] mt-1">
                    N° : NEXUS-AFR-0842
                  </div>
                </div>
              </div>

              {/* Main Card Body */}
              <div className="relative z-10 grid sm:grid-cols-3 gap-6 pt-6 items-center">
                
                {/* Photo: STRICTLY AUTHENTIC AFRICAN SCHOLAR */}
                <div className="sm:col-span-1 space-y-2">
                  <div className="relative aspect-4/5 overflow-hidden border-2 border-[#D8CFBF] bg-[#EAE3D5] shadow-inner group">
                    <img
                      src={currentPhoto.url}
                      alt={currentPhoto.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2 text-white">
                      <div className="font-code text-[8px] uppercase tracking-wider text-amber-300 font-bold">
                        Boursier Africain
                      </div>
                      <div className="font-code text-[9px] truncate">
                        Afrique de l'Ouest
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-code text-[9px] uppercase tracking-widest text-[#7A7167]">
                      Empreinte Biométrique Certifiée
                    </span>
                  </div>
                </div>

                {/* Candidate Information & Exchange Partnership */}
                <div className="sm:col-span-2 space-y-4 font-sans text-xs">
                  <div className="space-y-1">
                    <div className="font-code text-[10px] uppercase tracking-wider text-[#7A7167]">
                      Titulaire de la Carte d'Excellence :
                    </div>
                    <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#161412] tracking-tight">
                      {scholarName}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1 border-t border-[#E6DFD3] text-[11px]">
                    <div>
                      <span className="font-code text-[9px] text-[#7A7167] uppercase block">Programme Partenaire</span>
                      <strong className="text-[#161412] font-semibold">
                        {selectedTrack === 'albi-ales' 
                          ? 'IMT Mines Albi & IMT Mines Alès' 
                          : 'Flagship Pan-Africain & Mastercard'}
                      </strong>
                    </div>

                    <div>
                      <span className="font-code text-[9px] text-[#7A7167] uppercase block">Discipline</span>
                      <strong className="text-[#161412] font-semibold">{fieldOfStudy}</strong>
                    </div>

                    <div>
                      <span className="font-code text-[9px] text-[#7A7167] uppercase block">Statut Financement</span>
                      <strong className="text-emerald-800 font-bold">Exonération 100% + Allocation</strong>
                    </div>

                    <div>
                      <span className="font-code text-[9px] text-[#7A7167] uppercase block">Institution d'Origine</span>
                      <strong className="text-[#161412] font-semibold">Burkina Faso / Afrique</strong>
                    </div>
                  </div>

                  {/* Anti-fraud & Security Ribbon */}
                  <div className="pt-2 border-t border-[#E6DFD3] flex items-center justify-between gap-3 text-[10px] font-code text-[#6A635B]">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Dossier Sans Frais d'Agence</span>
                    </div>

                    <button
                      onClick={handleCopyId}
                      className="text-[#D92626] hover:text-[#B91C1C] cursor-pointer font-bold flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-600" /> : null}
                      <span>{copied ? 'ID Copié' : 'Copier N° Registre'}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Bottom Card Strip with Gold Seal Emulation */}
              <div className="relative z-10 mt-6 pt-3 border-t border-[#E6DFD3] flex flex-wrap items-center justify-between gap-2 font-code text-[9px] text-[#7A7167]">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-amber-600 flex items-center justify-center text-amber-700 font-bold text-[8px]">
                    ★
                  </span>
                  <span>OPPORTUNITYBYNEXUSLAB · PROTOCOLE DE VÉRIFICATION OFFICIELLE</span>
                </div>
                <span>VALABLE JUSQU'EN JUILLET 2027</span>
              </div>

            </div>

            {/* Quick customization input to let student input their name */}
            <div className="p-4 bg-white border border-[#E6DFD3] flex flex-col sm:flex-row items-center justify-between gap-3 font-code text-xs">
              <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
                <span className="text-[#6A635B] whitespace-nowrap">Nom de l'élève :</span>
                <input
                  type="text"
                  value={scholarName}
                  onChange={(e) => setScholarName(e.target.value)}
                  className="bg-[#FAF7F2] border border-[#E6DFD3] px-2.5 py-1.5 text-[#161412] text-xs font-sans w-full outline-hidden focus:border-[#D92626]"
                  placeholder="Votre nom complet..."
                />
              </div>

              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-4 py-2 bg-[#D92626] hover:bg-[#B91C1C] text-white font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Télécharger / Imprimer la Carte</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
