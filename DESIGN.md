# DESIGN.md — BrandLoom Editorial Design System 2.0

> **Visual Paradigm:** Haute Horlogerie Atelier for Brand Architecture.  
> **Aesthetic Principles:** Architectural Dignity, Warm French Paper, Tactile Motion, Bespoke Aceternity Integration.

---

## 1. Brand Concept & Creative Direction

* **Concept:** *“An Haute Horlogerie Atelier for Brand Architecture”* — where founder intuition is measured, woven, and codified into enduring design systems.
* **Three Personality Words:** **Architectural · Tactile · Unhurried**
* **Signature Move:** **The Live Atelier Bento Matrix** — an interactive specimen grid showcasing synthesized design tokens, the Socratic Onlyness Test, responsive web viewports, and code export suites.
* **Anti-Goals:**
  - ❌ *No generic purple/cyan cyber-glow* (All Aceternity effects are strictly art-directed into warm sand, raw terracotta, and warm linen).
  - ❌ *No static placeholder cards* (Every surface actively previews real design system tokens).
  - ❌ *No cluttered navigation or jarring scroll jumps*.

---

## 2. Color System Tokens

| Token Name | CSS Variable | Hex Code | Purpose & Accessibility |
| :--- | :--- | :--- | :--- |
| **Warm Canvas** | `--canvas` | `#F5EEE4` | Warm French paper canvas background. |
| **Atelier Surface** | `--surface` | `#FBF7F1` | Elevated studio cards, dialogue surfaces, and bento cells. |
| **Deckle Border** | `--line` | `#E6D9CB` | Structural deckle hairline divider borders. |
| **Raw Terracotta** | `--terracotta` | `#C65A3A` | Primary brand accent, interactive indicators, CTA highlights. |
| **Deep Terracotta**| `--terracotta-deep` | `#A8472B` | Hover states and high-contrast emphasis. |
| **Warm Sand** | `--sand` | `#DCC8B1` | Secondary accents, progress meters, and ambient motion lines. |
| **Botanical Olive** | `--olive` | `#8A8F6A` | Accent verification tags and natural craft indicators. |
| **Obsidian Charcoal**| `--charcoal` | `#2B2B2B` | Primary typography and high-contrast buttons. |
| **Warm Umber** | `--muted` | `#7A6F66` | Secondary body text, metadata, and subtitles. |

---

## 3. Typography Hierarchy

### Display Headings
- **Typeface:** `Playfair Display` (Serif).
- **Weights:** `500` (Medium) & `600` (Semi-Bold).
- **Line Height:** `1.0` – `1.08` (editorial, baseline-locked).
- **Tracking:** `-0.035em` to `-0.045em`.
- **Scale:**
  - `Hero Display Title:` 48px – 72px (`text-5xl sm:text-7xl`)
  - `Section Heading:` 36px – 48px (`text-4xl sm:text-5xl`)
  - `Card / Dialogue Heading:` 24px – 32px (`text-2xl sm:text-3xl`)
  - `Subheading:` 18px – 20px (`text-lg sm:text-xl`)

### Interface & Body
- **Typeface:** `Inter` (Sans-Serif).
- **Weights:** `400` (Regular), `500` (Medium), `600` (Semi-Bold).
- **Tracking:** `-0.01em`.

### Code & Token Values
- **Typeface:** `JetBrains Mono` / Monospace.
- **Sizes:** `10px` – `12px` (`text-[10px]`, `text-xs`).

---

## 4. Aceternity UI Component Integration

All Aceternity UI components are housed in `client/src/components/ui/aceternity/` and strictly themed to BrandLoom tokens:

1. **`FlipWords.jsx`**:
   - Cycles through strategic deliverables: *"iconic brands"*, *"living tokens"*, *"sharp positions"*, *"enduring systems"*.
   - Rendered in terracotta italic serif with smooth spring entry/exit.
2. **`BackgroundLines.jsx`**:
   - Architectural waving paths behind the hero, utilizing linear gradients of `#C65A3A`, `#DCC8B1`, and `#8A8F6A`.
   - Subtle, non-intrusive `pointer-events-none` ambient texture.
3. **`BentoGrid.jsx` (`BentoGrid` & `BentoGridItem`)**:
   - Asymmetric 4-cell layout:
     - *Cell 1 (2 cols):* Synthesized Design Tokens with live hex swatches.
     - *Cell 2 (1 col):* Defensible Positioning with the Onlyness Test ledger.
     - *Cell 3 (1 col):* Live Website Simulator with responsive viewport.
     - *Cell 4 (2 cols):* Production Code & Dossier Exports (.css, .svg, .json, .txt).
4. **`CardSpotlight.jsx`**:
   - Mouse-tracking radial gradient spotlight in warm terracotta glow (`rgba(198, 90, 58, 0.09)`).
   - Applied to the `#project-setup` intake card.
5. **`TextGenerateEffect.jsx`**:
   - Staggered word fade-in for Socratic interview questions in `InterviewChat.jsx`.

---

## 5. Responsive Behavior

- **Mobile (< 640px):** Single-column bento stacking, simplified navigation, tactile full-width CTAs.
- **Tablet (640px – 1024px):** 2-column bento grouping, side-drawer library drawer, fluid typography.
- **Desktop (> 1024px):** Asymmetric split hero with interactive specimen board, 3-column bento grid, expansive whitespace.
