# OpportunitybyNexusLab — Master Product Redesign & Curatorial Architecture

OpportunitybyNexusLab is an educational opportunity and scholarship intelligence platform specifically curated for African students, researchers, and early-career leaders seeking fully funded international academic pathways.

***

### Confirmed Architectural Decisions

> [!IMPORTANT]
> The following directions have been confirmed and serve as the binding blueprint for implementation:

*   **Layout Topology**: Desktop 3-zone editorial workspace featuring an interactive catalog stream coupled to a synchronized real-time inspector pane.
*   **Target Representation & Visual Tone**: 100% African student and scholar photography across all cards, member programs (including Albi, Alès, and IMT Mines), and hero zones. Full removal of obsolete quota references ("70% quota").
*   **Palette & Atmosphere**: Archival Warm Linen (`#FAF7F2`), alabaster paper cards (`#FFFFFF` and `#F5F1EA`), refined hairline dividers (`#E6DFD3`), and deep obsidian ink (`#1A1715`) with measured ruby carmine accents (`#DC2626`).
*   **Specialized Opportunity Access**: Two-tier discoverability for Women in STEM and African Female Leadership—available as an instant filter preset in the catalog and as a dedicated comprehensive showcase page.
*   **Support & Verification Channels**: Direct one-click WhatsApp guidance for applicant readiness, paired with verified institutional email contact and zero commercial intermediaries.

***

## 1. Overview & Core Concept

### What It Delivers
OpportunitybyNexusLab indexes verified, fully funded international scholarships, doctoral fellowships, research grants, and exchange opportunities for African students. Every record is audited against official university and governmental decree portals, complete with exact funding breakdowns (tuition, stipend, travel, housing, equipment), eligibility requirements, verified application URLs, and deadline tracking.

### Target Audience & Persona
*   **African Undergraduates & Graduates**: Seeking master's and doctoral degrees abroad without financial burden.
*   **Women in STEM & Future Leaders**: Targeting dedicated affirmative fellowships (e.g., L'Oréal-UNESCO For Women in Science, Margaret McNamara, AIMS).
*   **Academic Mentors & Counselors**: Requiring official institutional sources, verified deadliness, and criteria without third-party paywalls.

### Key Value Proposition
Absolute content fidelity. Zero fabricated awards, zero commercial ad redirects, and a curatorial presentation that treats African academic achievement with dignity and prestige.

***

## 2. User Experience & Visual Design

### Visual Identity & Theme Tokens
Following institutional and museum-grade archival standards, the visual system prioritizes calm focus and high readability:

*   **Dominant Canvas (60%)**: Warm Archival Linen (`#FAF7F2`) delivering a warm paper tactile feel without eye fatigue.
*   **Structural Surfaces (30%)**: Alabaster Card Fields (`#FFFFFF`), Soft Parchment Hover States (`#F3EFE6`), and 1px Hairline Borders (`#E6DFD3`).
*   **High-Intent Accent (10%)**: Deep Ruby Carmine (`#DC2626`) for primary action states, bookmark confirmations, and live indicators.
*   **Typography**:
    *   *Display & Headlines*: **Cormorant Garamond** (SemiBold 600, elegant editorial serif).
    *   *Body Prose & Interface*: **Plus Jakarta Sans** (Weights 400 & 500, high legibility).
    *   *Data & Telemetry*: **Geist Mono** / tabular numerals (`tabular-nums`) for deadlines, funding values, and accession indices.

### Key User Flows

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TOP BAR NAVIGATION                              │
│  [OpportunitybyNexusLab]   ·   Catalog  ·  Women in STEM  ·  Guide     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
        ┌───────────────────────────┴───────────────────────────┐
        ▼                                                       ▼
┌───────────────────────────────┐       ┌───────────────────────────────┐
│       CATALOG FEED VIEW       │       │    REAL-TIME INSPECTOR PANE   │
│  · Search & Country Filters   │       │  · Selected Award Dossier     │
│  · Academic Level Selectors   │──────▶│  · Full Coverage Breakdown    │
│  · Interactive Opportunity    │(hover)│  · Direct Official Portal     │
│    Cards (African Scholars)   │       │  · Quick WhatsApp Assistance  │
└───────────────┬───────────────┘       └───────────────────────────────┘
                │ (click card)
                ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 VERIFIED AUDIT MODAL (DEEP DIVE)                       │
│  Overview · Full Financial Package · Step-by-Step Procedure · Portal   │
└────────────────────────────────────────────────────────────────────────┘
```

1.  **Catalog Discovery Flow**:
    *   User browses opportunities filtered by degree level (Bachelor, Master, PhD, Postdoc) or region.
    *   Hovering any opportunity smoothly updates the desktop **Inspector Pane** with key logistics (stipend, flights, laptop, housing).
    *   Clicking an opportunity opens the **Full Audit Modal** with complete requirements, documentation checklists, and verified application portals.
2.  **Women in STEM Flow**:
    *   Accessible either via the one-click catalog quick-filter or via the dedicated top-level page.
    *   Spotlights specialized grants (L'Oréal-UNESCO, Margaret McNamara, AIMS, Schlumberger FFTF) with tailored eligibility parameters.
3.  **Application Support Flow**:
    *   Dedicated action connects applicants directly to NexusLab's advisory desk via verified WhatsApp link and direct institutional email.

***

## 3. Key Product Decisions & Trade-Offs

### 1. Split-View Editorial Feed vs. Multi-Column Grid
*   **Chosen Approach**: Desktop 3-zone layout with sidebar rail, central continuous feed, and synchronized right-hand inspector.
*   **Rationale**: Matches the workflow of serious applicants comparing requirements. Prevents jarring page context switches while maintaining the visual cadence of high-end editorial archives. On mobile viewports, the layout gracefully collapses into a single-column stream with a bottom drawer sheet.

### 2. Verified Real Data vs. Synthetic Records
*   **Chosen Approach**: Retain all 60+ meticulously researched scholarship dossiers (Eiffel, Chevening, DAAD, Emile Boutmy, IMT Mines Alès/Albi, Mastercard Foundation, AIMS, Swiss Government Excellence, Commonwealth).
*   **Rationale**: Students rely on exact figures and deadlines. Real URLs and accurate eligibility rules establish trust and deliver genuine utility.

### 3. Visual Inclusivity & Dignity
*   **Chosen Approach**: 100% authentic depiction of African students, researchers, and campus environments across all cards and program badges.
*   **Rationale**: Directly honors the community and the mission of OpportunitybyNexusLab, eradicating mismatched generic stock photos.

***

## 4. Technical Architecture & Component Hierarchy

```
┌─────────────────────────────────────────────────────────────────────┐
│                              App.tsx                                │
│       (Routing, Global Search Query State, Bookmarks Store)         │
└──────┬───────────────────────────────┬──────────────────────────────┘
       │                               │
       ▼                               ▼
┌───────────────────────────┐   ┌─────────────────────────────────────┐
│        Navbar.tsx         │   │            Pages Router             │
│  · Wordmark & Navigation  │   │  · HomePage (Catalog Feed)          │
│  · Saved Counter          │   │  · ForGirlsPage (Women in STEM)     │
│  · WhatsApp Quick CTA     │   │  · AboutPage (Manifesto & Audit)    │
└───────────────────────────┘   │  · ResourcesPage (Guides & Tools)   │
                                └──────────────────┬──────────────────┘
                                                   │
                   ┌───────────────────────────────┴──────────────────┐
                   ▼                                                  ▼
┌──────────────────────────────────────┐   ┌──────────────────────────────────┐
│          CatalogStream.tsx           │   │        InspectorPane.tsx         │
│  · FilterBar (Levels, STEM, Country) │   │  · Active Award Summary Card     │
│  · OpportunityCard (Photo & Badges)  │──▶│  · Financial Benefits Breakdown  │
│  · Bookmark Trigger                  │   │  · Official External Link Button │
└──────────────────────────────────────┘   └──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       AuditDetailModal.tsx                          │
│  · Tabbed Dossier: Overview, Financial Coverage, How to Apply, Link │
└─────────────────────────────────────────────────────────────────────┘
```

### Component & State Mapping

*   `activeOpportunityId`: Synchronizes the hovered or clicked opportunity from the feed directly to the `InspectorPane` and `AuditDetailModal`.
*   `bookmarks`: Persisted in local storage so students can curate their shortlist across browser sessions.
*   `filterState`: Reactive filtering by academic level (Master, PhD, All), dedicated women in leadership initiatives, and destination countries.
*   `images.ts`: Central catalog of verified high-resolution portraits of African scholars, mapped semantically to award disciplines (engineering, public policy, sciences, medical research).
