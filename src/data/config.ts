/**
 * Configuration for OpportunitybyNexusLab
 * Strict Source Control: Exact values only as specified in project brief.
 */

export interface AppConfig {
  brandName: string;
  organizationName: string;
  headline: string;
  subheadline: string;
  audiencePhilosophy: string;
  targetAudience: string;

  // Strict Contact Info
  email: string;
  whatsappChannelUrl: string;
  whatsappButtonLabel: string;

  copyright: string;
}

export const siteConfig: AppConfig = {
  brandName: 'OpportunitybyNexusLab',
  organizationName: 'Nexus Lab',
  headline: 'Your potential deserves a fair chance.',
  subheadline: 'A verified, transparent educational opportunity catalogue for high-achieving, low-income African students pursuing undergraduate degrees and transformative pathways.',
  audiencePhilosophy: 'Financial circumstances should never automatically determine a young person\'s educational future. We provide rigorous, zero-fee access to verified higher education funding across Africa and worldwide.',
  targetAudience: 'High-Achieving, Low-Income (HALI) students across Burkina Faso, Pan-African nations, and underrepresented communities.',

  email: '1dailaelvis6002@gmail.com',
  whatsappChannelUrl: 'https://whatsapp.com/channel/0029Vb8o1uFKGGGLqexMS10a',
  whatsappButtonLabel: 'Join our WhatsApp Channel',

  copyright: `© ${new Date().getFullYear()} OpportunitybyNexusLab. An initiative by Nexus Lab.`
};
