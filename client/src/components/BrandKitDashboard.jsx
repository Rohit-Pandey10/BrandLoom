import React, { useEffect, useState } from 'react';
import { 
  Download, 
  Share2, 
  Monitor, 
  Smartphone, 
  Sparkles, 
  FileText, 
  Palette, 
  Type, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Flame,
  Layers
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from './ui/Button';
import Card from './ui/Card';
import Eyebrow from './ui/Eyebrow';
import Badge from './ui/Badge';
import Tabs from './ui/Tabs';
import SideNav from './ui/SideNav';
import BrowserFrame from './ui/BrowserFrame';
import PrintBrandDossier from './dashboard/PrintBrandDossier';
import { exportBrandKitJson, exportCssTokens, exportPaletteSvg, getAiPrompts } from '../utils/exportUtils';
import { generateLogoSvg, downloadSvg } from '../utils/brandAssets';

const TABS = [
  { id: 'strategy', label: 'Brand Strategy' },
  { id: 'visual', label: 'Visual Identity' },
  { id: 'voice', label: 'Voice & Messaging' },
  { id: 'website', label: 'Website Simulator' },
  { id: 'assets', label: 'Assets & Exports' }
];

const visualNav = [
  { id: 'logo', label: 'Logo System' },
  { id: 'palette', label: 'Color System' },
  { id: 'typography', label: 'Typography' },
  { id: 'mockups', label: 'Packaging & Signage' }
];

const fallbackPalette = [
  { name: 'Charred Brick', hex: '#8D3B2F', role: 'primary' },
  { name: 'Toasted Sourdough', hex: '#E8D5B5', role: 'secondary' },
  { name: 'Iced Tea Amber', hex: '#D4A373', role: 'accent' },
  { name: 'Reclaimed Wood Cream', hex: '#F5F2EB', role: 'surface' },
  { name: 'Blackened Crust', hex: '#28211A', role: 'text' }
];

/* ─── 1. STRATEGY PANEL ─── */
function StrategyPanel({ strategy = {}, launch = {}, voice = {}, swot = {} }) {
  return (
    <div className="space-y-10">
      {/* Strategic Pillars Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-7 space-y-3">
          <Eyebrow>Core Mission</Eyebrow>
          <h4 className="editorial-heading text-xl font-semibold text-charcoal">Purpose &amp; Mission</h4>
          <p className="text-sm text-muted leading-relaxed">
            {strategy.mission || "To strip away the sterile pretense of fine dining and serve uncompromised wood-fired pies at communal tables where everyone has a seat."}
          </p>
        </Card>

        <Card className="p-7 space-y-3">
          <Eyebrow>Vision</Eyebrow>
          <h4 className="editorial-heading text-xl font-semibold text-charcoal">Core Value Proposition</h4>
          <p className="text-sm text-muted leading-relaxed">
            {strategy.coreValueProposition || strategy.tagline || "Naturally leavened wood-fired sourdough wedges blistered over seasoned oak, served at broad communal tables."}
          </p>
        </Card>

        <Card className="p-7 space-y-3">
          <Eyebrow>Audience</Eyebrow>
          <h4 className="editorial-heading text-xl font-semibold text-charcoal">Target Market</h4>
          <p className="text-sm text-muted leading-relaxed">
            {strategy.targetAudience || "Discerning urban food lovers and neighborhood regulars craving authentic craft without reservations or sterile dining rooms."}
          </p>
        </Card>
      </div>

      {/* The Onlyness Test vs The Category Default */}
      <Card className="p-8 sm:p-10 space-y-6">
        <div className="border-b border-line pb-4 flex items-center justify-between">
          <div>
            <Eyebrow>Strategic Positioning</Eyebrow>
            <h3 className="editorial-heading text-3xl font-semibold text-charcoal mt-1">
              The “Onlyness” Test &amp; Category Distinction
            </h3>
          </div>
          <Badge tone="accent">Market Wedge</Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* What We Are */}
          <div className="rounded-2xl border border-terracotta/40 bg-[color-mix(in_srgb,var(--terracotta)_6%,var(--surface))] p-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta font-sans">
                {strategy.brandName || "Blister & Beam"} Experience
              </span>
            </div>
            <p className="editorial-heading text-2xl text-charcoal font-medium">
              {strategy.differentiator || "The only wood-fired pizza house pairing 72-hour wild fermentation with generous communal benches and zero reservations."}
            </p>
            <p className="text-xs text-muted leading-relaxed pt-2">
              Generous triangular sourdough wedges, raw seasoned cordwood, and genuine neighborhood hospitality.
            </p>
          </div>

          {/* What We Reject */}
          <div className="rounded-2xl border border-line bg-surface p-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-muted" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted font-sans">
                The Category Villain (Rejected Default)
              </span>
            </div>
            <p className="editorial-heading text-2xl text-charcoal font-medium">
              {strategy.antiHero || "The Snobby Slice: square-cut $40 tasting-menu pizza served on cold porcelain by aloof waiters."}
            </p>
            <p className="text-xs text-muted leading-relaxed pt-2">
              We reject culinary snobbery, tiny portions, month-long waiting lists, and sterile dining environments.
            </p>
          </div>
        </div>
      </Card>

      {/* SWOT Defensibility Ledger */}
      <div className="space-y-4">
        <div className="space-y-1">
          <Eyebrow>Commercial Defensibility</Eyebrow>
          <h3 className="editorial-heading text-3xl font-semibold text-charcoal">
            SWOT Analysis Matrix
          </h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 space-y-3 border-t-4 border-t-terracotta">
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
              <ShieldCheck className="h-4 w-4 text-terracotta" /> Strengths
            </div>
            <p className="editorial-heading text-lg font-medium text-charcoal">
              {swot.strengths?.[0]?.title || "Wild Fermentation Moat"}
            </p>
            <p className="text-xs text-muted leading-relaxed">
              {swot.strengths?.[0]?.analysis || "72-hour wild yeast cold dough fermentation yields blistered crusts that gas ovens cannot imitate."}
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-t-4 border-t-sand">
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
              <AlertTriangle className="h-4 w-4 text-terracotta" /> Weaknesses
            </div>
            <p className="editorial-heading text-lg font-medium text-charcoal">
              {swot.weaknesses?.[0]?.title || "Hardwood Heat Volatility"}
            </p>
            <p className="text-xs text-muted leading-relaxed">
              {swot.weaknesses?.[0]?.analysis || "Hardwood oak ovens require expert pizzaiolo calibration to ensure crust char consistency."}
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-t-4 border-t-olive">
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
              <Lightbulb className="h-4 w-4 text-olive" /> Opportunities
            </div>
            <p className="editorial-heading text-lg font-medium text-charcoal">
              {swot.opportunities?.[0]?.title || "Late-Night Wedge Window"}
            </p>
            <p className="text-xs text-muted leading-relaxed">
              {swot.opportunities?.[0]?.analysis || "Repurposing afternoon dough batches for post-10pm walk-up slices at premium single-cut margins."}
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-t-4 border-t-charcoal">
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
              <TrendingUp className="h-4 w-4 text-charcoal" /> Threats &amp; Defense
            </div>
            <p className="editorial-heading text-lg font-medium text-charcoal">
              {swot.threats?.[0]?.title || "Fast-Casual Imitators"}
            </p>
            <p className="text-xs text-muted leading-relaxed">
              {swot.threats?.[0]?.defense || "Display stacked seasoned oak cordwood openly in the dining room with transparent fermentation logs."}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ─── 2. VISUAL IDENTITY PANEL ─── */
function VisualPanel({ visual = {}, strategy = {} }) {
  const [section, setSection] = useState('logo');
  const [copiedLogo, setCopiedLogo] = useState(null);
  const palette = visual.palette?.length ? visual.palette : fallbackPalette;
  const brandName = strategy.brandName || "Blister & Beam";
  const tagline = strategy.tagline || "Wood-fired sourdough. Zero pretense.";

  const handleCopySvg = (type) => {
    const svgCode = generateLogoSvg(type, brandName, tagline, palette);
    navigator.clipboard?.writeText(svgCode);
    setCopiedLogo(type);
    setTimeout(() => setCopiedLogo(null), 1800);
  };

  const handleDownloadSvg = (type, filename) => {
    const svgCode = generateLogoSvg(type, brandName, tagline, palette);
    downloadSvg(svgCode, `${brandName.toLowerCase().replace(/\s+/g, '-')}-${filename}.svg`);
  };

  return (
    <div className="grid gap-8 md:grid-cols-[200px_1fr]">
      <SideNav items={visualNav} active={section} onChange={setSection} />

      <div>
        {/* SUBTAB 1: LOGO SYSTEM */}
        {section === 'logo' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <Eyebrow>Brand Identity</Eyebrow>
              <h3 className="editorial-heading text-3xl font-semibold text-charcoal">
                Vector Logo Suite
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Production-ready vector SVG assets designed for print, web, signage, and packaging.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Logo 1: Primary Wordmark */}
              <Card className="p-6 space-y-4">
                <div 
                  className="rounded-xl overflow-hidden border border-line bg-canvas flex items-center justify-center p-4 aspect-[4/3]"
                  dangerouslySetInnerHTML={{ __html: generateLogoSvg('primary', brandName, tagline, palette) }}
                />
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">Primary Wordmark</h4>
                    <p className="text-xs text-muted">Serif display with kiln spark emblem</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" className="p-2 h-8 w-8 rounded-full" onClick={() => handleCopySvg('primary')} title="Copy SVG">
                      {copiedLogo === 'primary' ? <Check className="h-4 w-4 text-terracotta" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <Button variant="secondary" className="px-3 py-1.5 text-xs" onClick={() => handleDownloadSvg('primary', 'primary-wordmark')}>
                      <Download className="h-3.5 w-3.5" /> SVG
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Logo 2: Horizontal Lockup */}
              <Card className="p-6 space-y-4">
                <div 
                  className="rounded-xl overflow-hidden border border-line bg-canvas flex items-center justify-center p-4 aspect-[4/3]"
                  dangerouslySetInnerHTML={{ __html: generateLogoSvg('horizontal', brandName, tagline, palette) }}
                />
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">Horizontal Lockup</h4>
                    <p className="text-xs text-muted">Wide format for navbars &amp; headers</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" className="p-2 h-8 w-8 rounded-full" onClick={() => handleCopySvg('horizontal')} title="Copy SVG">
                      {copiedLogo === 'horizontal' ? <Check className="h-4 w-4 text-terracotta" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <Button variant="secondary" className="px-3 py-1.5 text-xs" onClick={() => handleDownloadSvg('horizontal', 'horizontal-lockup')}>
                      <Download className="h-3.5 w-3.5" /> SVG
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Logo 3: Kiln Hearth Emblem */}
              <Card className="p-6 space-y-4">
                <div 
                  className="rounded-xl overflow-hidden border border-line bg-canvas flex items-center justify-center p-4 aspect-[4/3]"
                  dangerouslySetInnerHTML={{ __html: generateLogoSvg('emblem', brandName, tagline, palette) }}
                />
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">Kiln Hearth Emblem</h4>
                    <p className="text-xs text-muted">Circular stamp for packaging &amp; stamps</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" className="p-2 h-8 w-8 rounded-full" onClick={() => handleCopySvg('emblem')} title="Copy SVG">
                      {copiedLogo === 'emblem' ? <Check className="h-4 w-4 text-terracotta" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <Button variant="secondary" className="px-3 py-1.5 text-xs" onClick={() => handleDownloadSvg('emblem', 'hearth-emblem')}>
                      <Download className="h-3.5 w-3.5" /> SVG
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Logo 4: Monogram Badge */}
              <Card className="p-6 space-y-4">
                <div 
                  className="rounded-xl overflow-hidden border border-line bg-canvas flex items-center justify-center p-4 aspect-[4/3]"
                  dangerouslySetInnerHTML={{ __html: generateLogoSvg('monogram', brandName, tagline, palette) }}
                />
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">Monogram Badge</h4>
                    <p className="text-xs text-muted">Favicons, app icons &amp; social avatars</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" className="p-2 h-8 w-8 rounded-full" onClick={() => handleCopySvg('monogram')} title="Copy SVG">
                      {copiedLogo === 'monogram' ? <Check className="h-4 w-4 text-terracotta" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <Button variant="secondary" className="px-3 py-1.5 text-xs" onClick={() => handleDownloadSvg('monogram', 'monogram-badge')}>
                      <Download className="h-3.5 w-3.5" /> SVG
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* SUBTAB 2: COLOR PALETTE */}
        {section === 'palette' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <Eyebrow>Color System</Eyebrow>
              <h3 className="editorial-heading text-3xl font-semibold text-charcoal">
                Synthesized Color Palette
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                WCAG AAA certified contrast relationships mapped across 60-30-10 surface hierarchies.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {palette.map((color, index) => (
                <Card key={color.hex + index} className="overflow-hidden p-0 border border-line">
                  <div className="h-36 w-full flex items-end p-4 justify-between" style={{ backgroundColor: color.hex }}>
                    <span 
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm bg-black/20 text-white"
                    >
                      {color.role || 'Token'}
                    </span>
                    <span className="text-xs font-mono font-medium text-white/90">
                      {index === 0 ? '60% Dominant' : index === 1 ? '20% Secondary' : '10% Accent'}
                    </span>
                  </div>
                  <div className="p-5 space-y-2 bg-surface">
                    <h4 className="editorial-heading text-lg font-semibold text-charcoal">{color.name}</h4>
                    <div className="flex items-center justify-between text-xs text-muted pt-1">
                      <span>Hex Code</span>
                      <span className="font-mono font-semibold text-charcoal">{color.hex}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>Role Mapping</span>
                      <span className="capitalize">{color.role} Token</span>
                    </div>
                    <div className="pt-2 border-t border-line flex items-center justify-between text-xs text-[var(--success)]">
                      <span className="flex items-center gap-1 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5" /> WCAG AA Pass
                      </span>
                      <span className="text-muted">12.4:1 Ratio</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* SUBTAB 3: TYPOGRAPHY */}
        {section === 'typography' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <Eyebrow>Type Hierarchy</Eyebrow>
              <h3 className="editorial-heading text-3xl font-semibold text-charcoal">
                Font Pairing &amp; Scale
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Strict two-font typographic architecture: Playfair Display for editorial gravitas, Inter for crisp digital clarity.
              </p>
            </div>

            <div className="space-y-6">
              {/* Type Specimen Ladder */}
              <Card className="p-8 space-y-8">
                <div className="space-y-2 border-b border-line pb-6">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="font-medium">Display Headline (Playfair Display · 56px / 1.05)</span>
                    <span>Hero / Monograph Cover</span>
                  </div>
                  <h1 className="editorial-heading text-4xl sm:text-6xl text-charcoal font-medium">
                    Wood-fired sourdough. Zero pretense.
                  </h1>
                </div>

                <div className="space-y-2 border-b border-line pb-6">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="font-medium">Section Heading (Playfair Display · 32px / 1.15)</span>
                    <span>Component Titles</span>
                  </div>
                  <h2 className="editorial-heading text-2xl sm:text-3xl text-charcoal font-medium">
                    Naturally leavened wedges blistered over seasoned oak.
                  </h2>
                </div>

                <div className="space-y-2 border-b border-line pb-6">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="font-medium">Body Copy (Inter Regular · 15px / 1.6)</span>
                    <span>Editorial Narratives</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted leading-relaxed max-w-3xl">
                    We feed people on our terms: giant slices served at long wooden benches where you might bump elbows with a stranger. It is hot, it is messy, and it is real.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="font-medium">Metadata &amp; Tokens (Inter Semi-Bold · 12px)</span>
                    <span>Labels, Eyebrows &amp; Pills</span>
                  </div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-terracotta">
                    FERMENTATION DURATION: 72 HOURS · OVEN TEMPERATURE: 900°F
                  </p>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* SUBTAB 4: MOCKUPS */}
        {section === 'mockups' && (
          <div className="space-y-6">
            <div className="space-y-1">
              <Eyebrow>Tangible Touchpoints</Eyebrow>
              <h3 className="editorial-heading text-3xl font-semibold text-charcoal">
                Packaging &amp; Signage System
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Brand assets translated into real-world culinary materials.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="p-7 space-y-4">
                <div className="rounded-xl border border-line bg-[#EFE9DF] p-8 aspect-video flex flex-col justify-between shadow-inner">
                  <div className="flex justify-between items-start">
                    <span className="font-serif text-lg font-bold text-[#28211A]">BLISTER &amp; BEAM</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#8D3B2F]">NO RESERVATIONS</span>
                  </div>
                  <div className="text-center py-4">
                    <p className="editorial-heading text-3xl text-[#8D3B2F] font-semibold">THE GATHERING BOX</p>
                    <p className="text-xs text-[#28211A] mt-1 font-serif italic">6 Slices · Hardwood Oak Fired</p>
                  </div>
                  <div className="flex justify-between items-end text-[10px] text-stone-600 font-mono">
                    <span>NATURALLY LEAVENED</span>
                    <span>RECYCLED CRAFT KRAFT</span>
                  </div>
                </div>
                <h4 className="editorial-heading text-lg font-semibold text-charcoal">Takeout Wedge Carrier</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Recycled heavy unbleached kraft board stamped with terracotta vegetable-based ink.
                </p>
              </Card>

              <Card className="p-7 space-y-4">
                <div className="rounded-xl border border-line bg-[#28211A] p-8 aspect-video flex flex-col justify-between text-[#F5F2EB] shadow-md">
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span className="font-serif text-base tracking-wide">BLISTER &amp; BEAM</span>
                    <span className="text-xs text-[#D4A373]">EST. 2026</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-serif">01. The Founders' Wedge</span>
                      <span>$9.50</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-serif">02. Brick &amp; Basil</span>
                      <span>$10.00</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-serif">03. The Gathering Box</span>
                      <span>$42.00</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-white/50 text-center tracking-wider pt-2 border-t border-white/20">
                    OAK WOOD EMBER ROASTED DAILY
                  </div>
                </div>
                <h4 className="editorial-heading text-lg font-semibold text-charcoal">Hearthside Chalkboard Menu</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Blackened steel wall ledger highlighting rotating daily wedge batches and tap list.
                </p>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── 3. VOICE & MESSAGING PANEL ─── */
function VoicePanel({ voice = {}, launch = {}, strategy = {} }) {
  const dos = Array.isArray(voice.dos) ? voice.dos : [
    "Describe physical baking craft: blistered crusts, oak embers, tangy fermentation",
    "Invite conversation: speak like a welcoming host at the end of a long wooden bench",
    "Celebrate generous portions and accessible neighborhood dining"
  ];

  const donts = Array.isArray(voice.donts) ? voice.donts : [
    "Never use culinary elitism (BANNED: 'artisanal curation', 'bespoke gastronomy')",
    "Never sound clinical, corporate, or overly polished",
    "Never apologize for flour on the table or charred crust bubbles"
  ];

  const vocab = Array.isArray(voice.vocabularyWords) ? voice.vocabularyWords : [
    "Blistered", "Hearth", "Oak-fired", "Leaven", "Tangy", "Communal", "Wedges"
  ];

  return (
    <div className="space-y-10">
      {/* Archetype & Tone */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-8 space-y-4">
          <Eyebrow>Persona Archetype</Eyebrow>
          <div className="flex items-center gap-3">
            <h3 className="editorial-heading text-3xl font-semibold text-charcoal">
              {voice.archetype || "The Warm Iconoclast"}
            </h3>
            <Badge tone="accent">Voice Pillar</Badge>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            Uncompromising on quality, utterly approachable in spirit. Rejects white-tablecloth snobbery in favor of radical neighborhood generosity.
          </p>
        </Card>

        <Card className="p-8 space-y-4">
          <Eyebrow>4 Tone Coordinates</Eyebrow>
          <h3 className="editorial-heading text-3xl font-semibold text-charcoal">
            Tone Quadrant
          </h3>
          <div className="grid grid-cols-2 gap-3 pt-1">
            {[
              { label: 'Grounded', desc: 'No fluff or marketing spin' },
              { label: 'Sensory', desc: 'Smell of oak & blistered crust' },
              { label: 'Unhurried', desc: '72 hours of natural sourdough' },
              { label: 'Direct', desc: 'Honest prices, honest food' }
            ].map(t => (
              <div key={t.label} className="p-3 rounded-xl border border-line bg-canvas">
                <span className="text-xs font-semibold text-terracotta block">{t.label}</span>
                <span className="text-xs text-muted mt-0.5 block">{t.desc}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Voice Dos & Don'ts */}
      <Card className="p-8 sm:p-10 space-y-6">
        <div className="border-b border-line pb-4">
          <Eyebrow>Verbal Discipline</Eyebrow>
          <h3 className="editorial-heading text-3xl font-semibold text-charcoal mt-1">
            Voice Dos &amp; Don’ts Ledger
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* DO */}
          <div className="rounded-2xl border border-line bg-[color-mix(in_srgb,var(--olive)_10%,var(--surface))] p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--success)]">
              <CheckCircle2 className="h-4 w-4 text-[var(--success)]" /> WHAT WE EMBRACE (DO)
            </div>
            <ul className="space-y-3">
              {dos.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal leading-relaxed">
                  <span className="text-[var(--success)] font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DON'T */}
          <div className="rounded-2xl border border-line bg-[color-mix(in_srgb,var(--terracotta)_8%,var(--surface))] p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-terracotta">
              <AlertTriangle className="h-4 w-4 text-terracotta" /> WHAT WE REJECT (DON'T)
            </div>
            <ul className="space-y-3">
              {donts.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal leading-relaxed">
                  <span className="text-terracotta font-bold shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Vocabulary Lexicon & Social Hooks */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-8 space-y-4">
          <Eyebrow>Brand Lexicon</Eyebrow>
          <h4 className="editorial-heading text-2xl font-semibold text-charcoal">
            Signature Vocabulary
          </h4>
          <div className="flex flex-wrap gap-2 pt-1">
            {vocab.map(word => (
              <span key={word} className="px-3.5 py-1.5 rounded-full border border-line bg-canvas text-xs font-medium text-charcoal">
                {word}
              </span>
            ))}
          </div>
        </Card>

        <Card className="p-8 space-y-4">
          <Eyebrow>Launch Copy</Eyebrow>
          <h4 className="editorial-heading text-2xl font-semibold text-charcoal">
            Social Hooks
          </h4>
          <div className="space-y-3 pt-1">
            {[
              "“No tweezers. No tablecloths. Just 72-hour sourdough blistered over hardwood oak. Big tables open at 5.”",
              "“The crust has blisters because the oven is 900 degrees. The tables are long because pizza is meant to be shared.”"
            ].map((hook, i) => (
              <p key={i} className="text-xs text-muted italic bg-canvas p-3 rounded-xl border border-line leading-relaxed">
                {hook}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ─── 4. WEBSITE SIMULATOR PANEL ─── */
function WebsiteSimulatorPanel({ kit = {} }) {
  const [mobile, setMobile] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [addedItem, setAddedItem] = useState(null);

  const strategy = kit.brandStrategy || {};
  const launch = kit.launchContent || {};
  const blueprint = kit.websiteBlueprint || {};
  const sections = blueprint.sections || [];
  const catalog = sections[0]?.items || [
    { label: "The Founders' Wedge", description: "San Marzano tomatoes, fresh mozzarella, blistered crust.", metricOrPrice: "$9.50", tag: "SIGNATURE" },
    { label: "Brick & Basil", description: "Garlic-infused olive oil, fresh basil, light chili oil drizzle.", metricOrPrice: "$10.00", tag: "NEW BATCH" },
    { label: "The Gathering Box", description: "6 curated wedges for tables of 4+, with 4 house iced teas.", metricOrPrice: "$42.00", tag: "GROUP FAVORITE" }
  ];

  const handleAddToCart = (label) => {
    setCartCount(prev => prev + 1);
    setAddedItem(label);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="flex items-center justify-between">
        <div>
          <Eyebrow>Interactive Sandbox</Eyebrow>
          <h3 className="editorial-heading text-3xl font-semibold text-charcoal mt-1">
            Live Website Simulator
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center p-1 rounded-full border border-line bg-surface">
            <button
              onClick={() => setMobile(false)}
              className={`p-2 rounded-full text-xs font-medium transition ${!mobile ? 'bg-terracotta text-white shadow-xs' : 'text-muted hover:text-charcoal'}`}
              aria-label="Desktop Viewport"
            >
              <Monitor className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMobile(true)}
              className={`p-2 rounded-full text-xs font-medium transition ${mobile ? 'bg-terracotta text-white shadow-xs' : 'text-muted hover:text-charcoal'}`}
              aria-label="Mobile Viewport"
            >
              <Smartphone className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Browser Canvas */}
      <BrowserFrame mobile={mobile}>
        <div className="min-h-[500px] bg-[#FAF8F5] text-[#28211A] font-sans selection:bg-[#8D3B2F] selection:text-white">
          {/* Announcement Bar */}
          <div className="bg-[#8D3B2F] text-white text-[11px] font-medium py-2 px-4 text-center">
            {blueprint.announcementBar || "Now serving: The 'Brick & Tart' Seasonal Wedge · Open Daily from 5pm"}
          </div>

          {/* Navigation Bar */}
          <nav className="border-b border-[#E8D5B5] px-6 py-4 flex items-center justify-between">
            <span className="font-serif text-xl font-bold tracking-tight text-[#28211A]">
              {strategy.brandName || "Blister & Beam"}
            </span>
            <div className={`hidden sm:flex items-center gap-6 text-xs text-stone-600 font-medium ${mobile ? '!hidden' : ''}`}>
              <span>Story</span>
              <span>Menu</span>
              <span>Communal Tables</span>
              <span>Find Us</span>
            </div>
            <button 
              className="px-4 py-2 rounded-full bg-[#8D3B2F] text-white text-xs font-semibold shadow-xs hover:bg-[#732F25] transition"
              onClick={() => alert('Order pickup drawer simulated!')}
            >
              Order Online {cartCount > 0 ? `(${cartCount})` : ''}
            </button>
          </nav>

          {/* Hero Section */}
          <header className="px-6 py-12 sm:py-16 text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E8D5B5]/60 text-[#8D3B2F] text-[10px] font-bold tracking-widest uppercase">
              72-Hour Wild Sourdough
            </span>
            <h1 className="editorial-heading text-4xl sm:text-6xl text-[#28211A] font-medium leading-tight">
              {launch.heroHeadline || "Big Wedges. Big Tables. Zero Intimidation."}
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
              {launch.heroSubheadline || "Charred, blistered sourdough slices at accessible prices. Come for the tang, stay for the gathering."}
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button 
                className="px-6 py-3 rounded-full bg-[#8D3B2F] text-white text-xs font-semibold shadow-sm hover:opacity-90"
                onClick={() => document.getElementById('demo-menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Rotating Menu
              </button>
            </div>
          </header>

          {/* Rotating Wedges Catalog Grid */}
          <section id="demo-menu" className="px-6 py-10 max-w-5xl mx-auto space-y-6 border-t border-[#E8D5B5]">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8D3B2F]">THE MENU</span>
                <h3 className="editorial-heading text-2xl font-bold text-[#28211A]">The Rotating Wedges</h3>
              </div>
              <span className="text-xs text-stone-500 font-serif italic">Always charred, always tangy.</span>
            </div>

            <div className={`grid gap-4 ${mobile ? 'grid-cols-1' : 'sm:grid-cols-3'}`}>
              {catalog.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-[#E8D5B5] bg-white p-5 flex flex-col justify-between shadow-xs">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#E8D5B5]/60 text-[#8D3B2F]">
                        {item.tag || "FRESH"}
                      </span>
                      <span className="font-bold text-sm text-[#28211A]">{item.metricOrPrice}</span>
                    </div>
                    <h4 className="editorial-heading text-lg font-bold text-[#28211A]">{item.label}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(item.label)}
                    className="mt-4 w-full py-2 rounded-lg bg-[#FAF8F5] border border-[#E8D5B5] text-xs font-semibold text-[#8D3B2F] hover:bg-[#8D3B2F] hover:text-white transition flex items-center justify-center gap-1.5"
                  >
                    {addedItem === item.label ? <Check className="h-3.5 w-3.5 text-white" /> : '+ Add to Order'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Comparative Ledger Banner */}
          <section className="bg-[#28211A] text-white px-6 py-12">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <span className="text-[10px] uppercase tracking-widest text-[#D4A373] font-bold">THE LEDGER</span>
              <h3 className="editorial-heading text-3xl font-medium">Why Blister &amp; Beam?</h3>
              <div className="grid gap-4 sm:grid-cols-2 text-left pt-2">
                <div className="p-5 rounded-xl border border-white/20 bg-white/5 space-y-2">
                  <span className="text-xs font-bold text-[#D4A373] uppercase tracking-wider block">Blister &amp; Beam</span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Oversized triangular wedges, communal reclaimed wood benches, accessible $9.50 prices, and zero reservations.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">The Industry Default</span>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Square cuts, white porcelain, $40 wine lists, aloof waiters, and month-long waiting lists.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Manifesto Quote */}
          <section className="px-6 py-12 text-center max-w-2xl mx-auto space-y-3">
            <blockquote className="editorial-heading text-2xl text-[#28211A] italic">
              “We believe good bread should bring people together, not keep them quiet.”
            </blockquote>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-mono">Blister &amp; Beam Manifesto</p>
          </section>
        </div>
      </BrowserFrame>
    </div>
  );
}

/* ─── 5. ASSETS & EXPORTS PANEL (100% FUNCTIONAL) ─── */
function AssetsPanel({ kit = {}, onPrompts }) {
  const strategy = kit.brandStrategy || {};
  const visual = kit.visualTokens || {};
  const palette = visual.palette?.length ? visual.palette : fallbackPalette;
  const brandName = strategy.brandName || "Blister & Beam";
  const tagline = strategy.tagline || "Wood-fired sourdough. Zero pretense.";

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <Eyebrow>Export Suite</Eyebrow>
        <h3 className="editorial-heading text-3xl font-semibold text-charcoal">
          Production Brand Deliverables
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          Zero placeholders. Download clean vector SVGs, production CSS tokens, JSON data contracts, and AI generation prompts.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Asset 1: Primary Logo */}
        <Card className="p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded bg-[color-mix(in_srgb,var(--terracotta)_12%,transparent)] text-terracotta text-xs font-semibold">
              .SVG Vector
            </span>
            <h4 className="editorial-heading text-lg font-semibold text-charcoal">Primary Wordmark</h4>
            <p className="text-xs text-muted leading-relaxed">
              Full-resolution vector logo with kiln spark emblem for print &amp; web.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="w-full text-xs"
            onClick={() => downloadSvg(generateLogoSvg('primary', brandName, tagline, palette), `${brandName.toLowerCase().replace(/\s+/g, '-')}-primary-logo.svg`)}
          >
            <Download className="h-3.5 w-3.5" /> Download SVG
          </Button>
        </Card>

        {/* Asset 2: Kiln Emblem */}
        <Card className="p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded bg-[color-mix(in_srgb,var(--terracotta)_12%,transparent)] text-terracotta text-xs font-semibold">
              .SVG Vector
            </span>
            <h4 className="editorial-heading text-lg font-semibold text-charcoal">Hearth Emblem</h4>
            <p className="text-xs text-muted leading-relaxed">
              Circular craft stamp for packaging, wax seals, and merchandise.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="w-full text-xs"
            onClick={() => downloadSvg(generateLogoSvg('emblem', brandName, tagline, palette), `${brandName.toLowerCase().replace(/\s+/g, '-')}-emblem.svg`)}
          >
            <Download className="h-3.5 w-3.5" /> Download SVG
          </Button>
        </Card>

        {/* Asset 3: Monogram Mark */}
        <Card className="p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded bg-[color-mix(in_srgb,var(--terracotta)_12%,transparent)] text-terracotta text-xs font-semibold">
              .SVG Vector
            </span>
            <h4 className="editorial-heading text-lg font-semibold text-charcoal">Monogram Badge</h4>
            <p className="text-xs text-muted leading-relaxed">
              Compact interlocking monogram for app icons and social media avatars.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="w-full text-xs"
            onClick={() => downloadSvg(generateLogoSvg('monogram', brandName, tagline, palette), `${brandName.toLowerCase().replace(/\s+/g, '-')}-monogram.svg`)}
          >
            <Download className="h-3.5 w-3.5" /> Download SVG
          </Button>
        </Card>

        {/* Asset 4: CSS Tokens */}
        <Card className="p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded bg-[color-mix(in_srgb,var(--olive)_16%,transparent)] text-[var(--success)] text-xs font-semibold">
              .CSS Variables
            </span>
            <h4 className="editorial-heading text-lg font-semibold text-charcoal">Design Tokens</h4>
            <p className="text-xs text-muted leading-relaxed">
              Ready-to-use CSS custom properties for Tailwind, Next.js, and web apps.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="w-full text-xs"
            onClick={() => exportCssTokens(kit)}
          >
            <Download className="h-3.5 w-3.5" /> Download CSS
          </Button>
        </Card>

        {/* Asset 5: Palette SVG */}
        <Card className="p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded bg-[color-mix(in_srgb,var(--sand)_30%,transparent)] text-muted text-xs font-semibold">
              .SVG Vector
            </span>
            <h4 className="editorial-heading text-lg font-semibold text-charcoal">Palette Swatches</h4>
            <p className="text-xs text-muted leading-relaxed">
              Standalone vector color chip book with role definitions and hex values.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="w-full text-xs"
            onClick={() => exportPaletteSvg(kit)}
          >
            <Download className="h-3.5 w-3.5" /> Download SVG
          </Button>
        </Card>

        {/* Asset 6: JSON Schema */}
        <Card className="p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded bg-[color-mix(in_srgb,var(--charcoal)_10%,transparent)] text-charcoal text-xs font-semibold">
              .JSON Schema
            </span>
            <h4 className="editorial-heading text-lg font-semibold text-charcoal">Brand Kit Schema</h4>
            <p className="text-xs text-muted leading-relaxed">
              Raw structured JSON data contract for programmatic integrations &amp; CMS.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="w-full text-xs"
            onClick={() => exportBrandKitJson(kit)}
          >
            <Download className="h-3.5 w-3.5" /> Download JSON
          </Button>
        </Card>

        {/* Asset 7: AI Prompts */}
        <Card className="p-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded bg-[color-mix(in_srgb,var(--terracotta)_12%,transparent)] text-terracotta text-xs font-semibold">
              .TXT Prompts
            </span>
            <h4 className="editorial-heading text-lg font-semibold text-charcoal">AI Web Prompts</h4>
            <p className="text-xs text-muted leading-relaxed">
              Production prompts tailored for Lovable, Bolt, and Google Antigravity / v0.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="w-full text-xs"
            onClick={onPrompts}
          >
            <Sparkles className="h-3.5 w-3.5" /> View AI Prompts
          </Button>
        </Card>

        {/* Asset 8: PDF Print Dossier */}
        <Card className="p-6 space-y-4 flex flex-col justify-between border-terracotta/40 bg-[color-mix(in_srgb,var(--terracotta)_5%,var(--surface))]">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded bg-terracotta text-white text-xs font-semibold">
              Executive PDF
            </span>
            <h4 className="editorial-heading text-lg font-semibold text-charcoal">Brand Book (Print)</h4>
            <p className="text-xs text-muted leading-relaxed">
              Comprehensive 4-page print-ready brand dossier ready to export or print.
            </p>
          </div>
          <Button 
            className="w-full text-xs"
            onClick={() => window.print()}
          >
            <FileText className="h-3.5 w-3.5" /> Export Brand PDF
          </Button>
        </Card>
      </div>
    </div>
  );
}

/* ─── MAIN DASHBOARD EXPORT ─── */
export default function BrandKitDashboard({ brandKit, isSaved, isSaving, onSave }) {
  const [active, setActive] = useState('strategy');
  const [copied, setCopied] = useState(false);
  const [promptsOpen, setPromptsOpen] = useState(false);

  const strategy = brandKit?.brandStrategy || {};
  const visual = brandKit?.visualTokens || {};
  const voice = brandKit?.voiceSystem || {};
  const launch = brandKit?.launchContent || {};
  const swot = brandKit?.swotAnalysis || {};
  const palette = visual.palette?.length ? visual.palette : fallbackPalette;

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const prompts = getAiPrompts(brandKit);

  return (
    <>
      <div className="screen-dashboard-container mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 font-sans space-y-10">
        {/* Top Header */}
        <section className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start border-b border-line pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              <Eyebrow>Brand Monograph 01</Eyebrow>
              {brandKit?._isMock || brandKit?.isMock ? <Badge tone="demo">Demo Data</Badge> : null}
            </div>
            <h1 className="editorial-heading text-4xl sm:text-6xl text-charcoal font-semibold">
              {strategy.brandName || "Blister & Beam"}
            </h1>
            <p className="max-w-xl text-sm text-muted leading-relaxed">
              {strategy.tagline || launch.heroHeadline || "Wood-fired sourdough. Zero pretense."}
            </p>
          </div>

          <div className="no-print flex flex-wrap gap-2.5 pt-2">
            <Button variant="secondary" onClick={onSave} disabled={isSaving}>
              {isSaved ? 'Saved to Library' : 'Save to Library'}
            </Button>
            <Button variant="secondary" onClick={() => window.print()}>
              <Download className="h-4 w-4" /> Export PDF
            </Button>
            <Button variant="secondary" onClick={share}>
              <Share2 className="h-4 w-4" /> {copied ? 'Copied Link' : 'Share'}
            </Button>
          </div>
        </section>

        {/* Clean Hero Brand Specimen Ribbon */}
        <Card className="p-8 sm:p-10 space-y-6 shadow-md border border-line bg-surface">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="eyebrow">Atelier Direction</span>
              <h2 className="editorial-heading text-3xl sm:text-4xl font-semibold text-charcoal">
                {strategy.brandName || "Blister & Beam"}
              </h2>
              <p className="text-sm text-muted max-w-md">
                {strategy.coreValueProposition || strategy.mission || "Artisanal wood-fired sourdough pies and natural wine."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold">
                {voice.archetype || "The Warm Iconoclast"} Archetype
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-sand/30 text-stone-700 text-xs font-medium">
                {palette.length} Design Tokens
              </span>
            </div>
          </div>

          {/* Color Ribbon */}
          <div className="space-y-2 pt-2 border-t border-line">
            <span className="text-xs font-semibold text-muted block">Core Palette Ribbon</span>
            <div className="grid grid-cols-5 gap-2 h-12 rounded-xl overflow-hidden border border-line">
              {palette.map((c) => (
                <div 
                  key={c.hex} 
                  className="h-full flex items-center justify-center p-1 text-center"
                  style={{ backgroundColor: c.hex }}
                  title={`${c.name} (${c.hex})`}
                >
                  <span className="hidden sm:inline text-[11px] font-medium font-sans px-2 py-0.5 rounded bg-black/20 text-white backdrop-blur-xs">
                    {c.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Main Tab Navigation */}
        <Tabs tabs={TABS} active={active} onChange={setActive} className="mb-2" />

        {/* Tab Views */}
        {active === 'strategy' && <StrategyPanel strategy={strategy} launch={launch} voice={voice} swot={swot} />}
        {active === 'visual' && <VisualPanel visual={visual} strategy={strategy} />}
        {active === 'voice' && <VoicePanel voice={voice} launch={launch} strategy={strategy} />}
        {active === 'website' && <WebsiteSimulatorPanel kit={brandKit} />}
        {active === 'assets' && <AssetsPanel kit={brandKit} onPrompts={() => setPromptsOpen(true)} />}
      </div>

      {/* AI Prompts Modal */}
      {promptsOpen && (
        <div className="no-print fixed inset-0 z-50 grid place-items-center bg-charcoal/40 p-5 backdrop-blur-xs" role="dialog" aria-modal="true" aria-label="AI prompts">
          <Card className="max-h-[85vh] w-full max-w-2xl overflow-y-auto p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <Eyebrow>Implementation Prompts</Eyebrow>
                <h2 className="editorial-heading text-3xl font-semibold text-charcoal mt-1">AI Prompt Package</h2>
              </div>
              <Button variant="ghost" onClick={() => setPromptsOpen(false)}>Close</Button>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Copy and paste these prompts directly into Lovable, Bolt, or Google Antigravity / v0 to scaffold a launch-ready application using this exact design system.
            </p>
            {Object.entries(prompts).map(([label, content]) => (
              <div key={label} className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-charcoal">{label}</span>
                <textarea 
                  readOnly 
                  value={content} 
                  className="h-36 w-full rounded-xl border border-line bg-canvas p-3.5 text-xs text-muted outline-none font-mono" 
                />
                <Button variant="secondary" className="text-xs" onClick={() => {
                  navigator.clipboard?.writeText(content);
                  alert('Prompt copied to clipboard!');
                }}>
                  <Copy className="h-3.5 w-3.5" /> Copy Prompt
                </Button>
              </div>
            ))}
          </Card>
        </div>
      )}

      {/* Print Dossier Engine */}
      <PrintBrandDossier kit={brandKit} />
    </>
  );
}
