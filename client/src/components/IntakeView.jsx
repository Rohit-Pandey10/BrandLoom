import React, { useState } from 'react';
import { 
  Compass, 
  Palette, 
  Globe2, 
  PackageOpen, 
  Lightbulb, 
  Sprout, 
  RefreshCw, 
  Building2, 
  AlertCircle, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import Eyebrow from './ui/Eyebrow';
import Badge from './ui/Badge';
import OptionCard from './ui/OptionCard';
import FlipWords from './ui/aceternity/FlipWords';
import BackgroundLines from './ui/aceternity/BackgroundLines';
import { BentoGrid, BentoGridItem } from './ui/aceternity/BentoGrid';
import CardSpotlight from './ui/aceternity/CardSpotlight';

const stages = [
  { id: 'idea', title: 'Idea Stage', subtitle: 'Exploring concepts', icon: Lightbulb },
  { id: 'growing', title: 'Growing', subtitle: 'Building momentum', icon: Sprout },
  { id: 'rebrand', title: 'Rebrand', subtitle: 'Ready for a rethink', icon: RefreshCw },
  { id: 'established', title: 'Established', subtitle: 'Expanding reach', icon: Building2 },
];

export default function IntakeView({ onStartInterview, handleLoadSample, isExpanding, serverError }) {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [description, setDescription] = useState('');
  const [stage, setStage] = useState('idea');
  const [error, setError] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!name.trim() || !description.trim()) {
      return setError('Add a project name and a short description to continue.');
    }
    setError('');
    onStartInterview(
      `${name.trim()} — ${description.trim()}${industry ? `. Industry: ${industry}.` : ''} Stage: ${stage}.`
    );
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 font-sans">
      {/* Hero Section with Aceternity BackgroundLines & FlipWords */}
      <BackgroundLines className="rounded-3xl border border-line/60 bg-[color-mix(in_srgb,var(--surface)_50%,transparent)] mb-20">
        <section className="grid min-h-[calc(100vh-140px)] items-center gap-12 p-6 sm:p-14 lg:grid-cols-[1.1fr_.9fr]">
          <div className="z-10 space-y-6">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-terracotta text-white shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <Eyebrow>AI Socratic Brand Studio</Eyebrow>
            </div>

            <h1 className="editorial-heading max-w-2xl text-5xl font-medium text-charcoal sm:text-7xl leading-[1.06]">
              From ideas to{' '}
              <FlipWords
                words={[
                  'living tokens.',
                  'iconic brands.',
                  'sharp positions.',
                  'enduring systems.'
                ]}
                className="text-terracotta"
              />
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-muted">
              An architectural brand studio that pairs Socratic dialogue with design tokens, verbal frameworks, and launch-ready website blueprints.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                arrow
                onClick={() =>
                  document.getElementById('project-setup')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Start Building
              </Button>
              <Button variant="secondary" onClick={() => handleLoadSample?.()}>
                View Demo Monograph
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted border-t border-line/70 pt-6">
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="h-4 w-4 text-terracotta" /> Strategy-led
              </span>
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="h-4 w-4 text-terracotta" /> WCAG Design Tokens
              </span>
              <span className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="h-4 w-4 text-terracotta" /> Zero Generic Fluff
              </span>
            </div>
          </div>

          {/* Right Column: Clean Atelier Specimen Board */}
          <div className="relative z-10 w-full max-w-md lg:ml-auto">
            <div className="studio-card p-7 shadow-xl border border-line bg-surface/95 space-y-5">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <span className="eyebrow">Atelier Specimen 01</span>
                  <h3 className="editorial-heading text-2xl text-charcoal mt-1">Blister & Beam</h3>
                </div>
                <Badge tone="accent">Artisanal</Badge>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border-l-2 border-terracotta bg-[color-mix(in_srgb,var(--sand)_25%,var(--surface))] p-4 text-xs italic text-charcoal leading-relaxed">
                  “Wood-fired sourdough pizza and natural wine—rejecting commercial shortcuts for transparent craftsmanship.”
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-muted mb-2.5">
                    <span>Synthesized Palette</span>
                    <span>4 Tokens</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2.5">
                    {[
                      { hex: '#2B2B2B', name: 'Charcoal' },
                      { hex: '#C65A3A', name: 'Terracotta' },
                      { hex: '#DCC8B1', name: 'Sand' },
                      { hex: '#8A8F6A', name: 'Olive' }
                    ].map((c) => (
                      <div key={c.hex} className="rounded-lg border border-line overflow-hidden text-center bg-canvas">
                        <div className="h-10" style={{ backgroundColor: c.hex }} />
                        <span className="block py-1 text-[11px] font-medium text-charcoal">{c.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-line flex items-center justify-between text-xs text-muted">
                  <span>Typography: <strong className="font-serif text-charcoal font-semibold">Playfair + Inter</strong></span>
                  <span className="text-terracotta font-medium">21 Design Tokens</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BackgroundLines>

      {/* Capabilities Section: Clean, Spacious Bento Grid */}
      <section className="mb-24">
        <div className="mb-10 space-y-3">
          <Eyebrow>Studio Architecture</Eyebrow>
          <h2 className="editorial-heading text-4xl sm:text-5xl text-charcoal font-semibold">
            Everything synthesized in one atelier.
          </h2>
          <p className="max-w-2xl text-sm text-muted leading-relaxed">
            From founder intuition to code-ready design tokens, explore the core dimensions generated during Socratic synthesis.
          </p>
        </div>

        <BentoGrid className="gap-6">
          {/* Bento Item 1: Visual Tokens (2 cols) */}
          <BentoGridItem
            className="md:col-span-2"
            title="Synthesized Design Tokens"
            description="Automated WCAG-compliant color systems, typography pairings, and geometry rules exported as CSS custom properties and Figma-ready tokens."
            icon={<Palette className="h-5 w-5 text-terracotta" />}
            badge={<Badge tone="accent">Design Systems</Badge>}
            header={
              <div className="w-full min-h-[9.5rem] rounded-xl border border-line bg-[color-mix(in_srgb,var(--canvas)_55%,var(--surface))] p-4 sm:p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-medium text-muted">
                  <span>CSS Variables &amp; Tokens</span>
                  <span className="text-terracotta font-semibold">WCAG AAA Certified</span>
                </div>
                <div className="grid grid-cols-4 gap-2.5 my-2">
                  {[
                    { role: 'Primary', hex: '#2B2B2B', text: 'white' },
                    { role: 'Terracotta', hex: '#C65A3A', text: 'white' },
                    { role: 'Sand Tint', hex: '#DCC8B1', text: '#2B2B2B' },
                    { role: 'Botanical', hex: '#8A8F6A', text: 'white' }
                  ].map((s) => (
                    <div
                      key={s.role}
                      className="rounded-lg p-2.5 text-xs flex flex-col justify-end shadow-xs"
                      style={{ backgroundColor: s.hex, color: s.text }}
                    >
                      <span className="text-[11px] font-semibold">{s.role}</span>
                      <span className="text-[10px] opacity-85 mt-0.5 font-medium">{s.hex}</span>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] text-muted flex items-center justify-between pt-1">
                  <span>Typography: Playfair Display + Inter</span>
                  <span>Fluid Scale: 12px – 64px</span>
                </div>
              </div>
            }
          />

          {/* Bento Item 2: Socratic Positioning (1 col) */}
          <BentoGridItem
            className="md:col-span-1"
            title="Defensible Positioning"
            description="Extracts your unique 'Onlyness' differentiator and clearly codifies what category conventions your brand explicitly rejects."
            icon={<Compass className="h-5 w-5 text-terracotta" />}
            badge={<Badge tone="neutral">Strategy</Badge>}
            header={
              <div className="w-full min-h-[9.5rem] rounded-xl border border-line bg-[color-mix(in_srgb,var(--sand)_20%,var(--surface))] p-4 sm:p-5 flex flex-col justify-between text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-charcoal">The Onlyness Test</span>
                  <Badge tone="accent">Validated</Badge>
                </div>
                <p className="italic text-charcoal text-xs sm:text-sm leading-relaxed my-2">
                  “The only artisan studio that refuses industrial mass-production in favor of single-origin transparent sourcing.”
                </p>
                <div className="text-[11px] text-terracotta font-semibold">
                  Anti-Hero Rejected: Corporate Indifference
                </div>
              </div>
            }
          />

          {/* Bento Item 3: Website Blueprint (1 col) */}
          <BentoGridItem
            className="md:col-span-1"
            title="Live Website Simulator"
            description="Experience your brand applied in real-time across high-conversion heroes, dynamic catalog grids, and responsive viewports."
            icon={<Globe2 className="h-5 w-5 text-terracotta" />}
            badge={<Badge tone="neutral">Interactive</Badge>}
            header={
              <div className="w-full min-h-[9.5rem] rounded-xl border border-line bg-white p-4 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 border-b border-line pb-2">
                  <span className="h-2 w-2 rounded-full bg-terracotta" />
                  <span className="h-2 w-2 rounded-full bg-sand" />
                  <span className="h-2 w-2 rounded-full bg-olive" />
                  <span className="ml-2 text-[11px] text-muted">preview.brandloom.app</span>
                </div>
                <div className="py-2">
                  <span className="font-serif text-base font-semibold text-charcoal">Blister &amp; Beam</span>
                  <p className="text-[11px] text-muted mt-0.5">Wood-fired sourdough &amp; natural wine.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-terracotta text-white text-[11px] font-semibold">Explore Menu</span>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-[11px] font-medium">Story</span>
                </div>
              </div>
            }
          />

          {/* Bento Item 4: Universal Exports (2 cols) */}
          <BentoGridItem
            className="md:col-span-2"
            title="Production Code &amp; Dossier Exports"
            description="Download production CSS variables, standalone SVG color books, JSON schemas, or tailored prompts for Lovable, Bolt, and Google Antigravity / v0."
            icon={<PackageOpen className="h-5 w-5 text-terracotta" />}
            badge={<Badge tone="accent">Universal Export</Badge>}
            header={
              <div className="w-full min-h-[9.5rem] rounded-xl border border-line bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] p-4 sm:p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-charcoal">Export Artifacts</span>
                  <span className="text-[11px] text-muted font-medium">Zero Cloud Lock-in</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-2">
                  {[
                    { label: 'CSS Tokens', ext: '.css', desc: 'Variables' },
                    { label: 'Palette SVG', ext: '.svg', desc: 'Vector Book' },
                    { label: 'Brand Kit', ext: '.json', desc: 'Full Schema' },
                    { label: 'AI Prompts', ext: '.txt', desc: 'v0 & Lovable' }
                  ].map((f) => (
                    <div key={f.label} className="p-2.5 rounded-lg border border-line bg-surface text-center">
                      <span className="text-xs font-semibold text-terracotta block">{f.ext}</span>
                      <p className="text-[11px] font-medium text-charcoal mt-0.5">{f.label}</p>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] text-muted flex items-center justify-between pt-1">
                  <span>Executive 4-Page Print Dossier Included</span>
                  <span className="text-terracotta font-semibold">One-Click Export &rarr;</span>
                </div>
              </div>
            }
          />
        </BentoGrid>
      </section>

      {/* Project Setup Form wrapped in Aceternity CardSpotlight */}
      <section id="project-setup" className="scroll-mt-24">
        <div className="mb-8 space-y-2">
          <Eyebrow>01. Project Setup</Eyebrow>
          <h2 className="editorial-heading text-4xl sm:text-5xl text-charcoal font-semibold">
            Let’s start building your brand.
          </h2>
        </div>

        <CardSpotlight className="grid overflow-hidden lg:grid-cols-[1.25fr_.75fr] shadow-xl border border-line">
          <form className="p-8 sm:p-12 space-y-6" onSubmit={submit}>
            <p className="max-w-lg text-sm leading-relaxed text-muted">
              Share a few details about your idea so BrandLoom can tailor your high-conviction strategic directions.
            </p>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-2">
                  Brand / Project Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-charcoal outline-none transition focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                  placeholder="e.g. Terra, BeamBake, Nova Studio"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-2">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-charcoal outline-none transition focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                >
                  <option value="">Select industry</option>
                  <option>Food &amp; Beverage</option>
                  <option>Retail &amp; CPG</option>
                  <option>Technology &amp; SaaS</option>
                  <option>Professional Services</option>
                  <option>Hospitality &amp; Travel</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal mb-2">
                  Short Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-charcoal outline-none transition focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                  placeholder="What is your product, and what makes it distinct?"
                />
              </div>
            </div>

            <fieldset className="pt-2">
              <legend className="block text-xs font-semibold text-charcoal mb-3">
                What best describes your current stage?
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {stages.map((item) => (
                  <OptionCard
                    key={item.id}
                    {...item}
                    selected={stage === item.id}
                    onSelect={() => setStage(item.id)}
                  />
                ))}
              </div>
            </fieldset>

            {(error || serverError) && (
              <p className="flex items-center gap-2 text-xs text-terracotta pt-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error || serverError}
              </p>
            )}

            <div className="pt-3">
              <Button
                arrow
                disabled={isExpanding}
                className="w-full sm:w-auto"
                type="submit"
              >
                {isExpanding ? 'Synthesizing Strategic Angles…' : 'Continue to Refinement'}
              </Button>
            </div>
          </form>

          <aside className="editorial-photo-dark relative min-h-[360px] p-10 text-white flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-terracotta animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-sand font-medium">
                Socratic Methodology
              </span>
            </div>
            <div className="space-y-4">
              <blockquote className="editorial-heading text-3xl sm:text-4xl leading-tight">
                “Great brands begin with better questions.”
              </blockquote>
              <p className="text-sm text-white/80 leading-relaxed max-w-sm">
                BrandLoom pairs your answers with market synthesis to generate a custom visual and verbal identity book.
              </p>
            </div>
          </aside>
        </CardSpotlight>
      </section>
    </div>
  );
}
