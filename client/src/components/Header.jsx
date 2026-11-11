import React from 'react';
import { PanelLeft, UserRound } from 'lucide-react';
import { useAuth, MAX_GUEST_RUNS } from '../context/AuthContext';
import Button from './ui/Button';
import ProgressStepper from './ProgressStepper';

function BrandLoomIcon({ className = 'h-7 w-7' }) {
  return (
    <span className={`grid place-items-center rounded-lg bg-terracotta text-white shadow-xs ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" className="h-4 w-4">
        <path
          d="M18 20C18 16.686 20.686 14 24 14H40C43.314 14 46 16.686 46 20V25C46 28.314 43.314 31 40 31H24C20.686 31 18 33.686 18 37V44C18 47.314 20.686 50 24 50H40C43.314 50 46 47.314 46 44"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 12V52"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="0.1 8"
        />
        <circle cx="32" cy="31" r="3.5" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function Header({ stage, onReset, handleLoadSample }) {
  const { user, isAuthenticated, guestRunsCount, toggleSidebar, openAuthModal } = useAuth();
  const isHome = stage === 'intake';
  const step = stage === 'refinement' ? 1 : stage === 'interview' ? 2 : stage === 'dashboard' ? 4 : 1;

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--canvas)_88%,transparent)] backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-2.5 text-charcoal transition-opacity hover:opacity-85"
            aria-label="BrandLoom home"
          >
            <BrandLoomIcon className="h-7 w-7" />
            <span className="editorial-heading text-xl font-semibold tracking-tight">BrandLoom</span>
          </button>
          {!isHome && (
            <button
              type="button"
              onClick={toggleSidebar}
              className="rounded-full p-2 text-muted hover:bg-sand/30"
              aria-label="Open Brand Library"
            >
              <PanelLeft className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isHome ? (
            <>
              <button
                type="button"
                onClick={() => handleLoadSample?.()}
                className="hidden text-xs font-medium text-muted hover:text-terracotta sm:block"
              >
                View Demo
              </button>
              <Button
                className="px-4 py-2 text-xs"
                onClick={() => document.getElementById('project-setup')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </>
          ) : isAuthenticated ? (
            <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-terracotta text-xs font-semibold text-white">
              {user?.avatarUrl ? (
                <img src={user.avatarUrl} alt="Your profile" className="h-full w-full object-cover" />
              ) : (
                (user?.displayName || 'R').slice(0, 1).toUpperCase()
              )}
            </span>
          ) : (
            <button
              type="button"
              onClick={() => openAuthModal('sign_in')}
              className="grid h-8 w-8 place-items-center rounded-full bg-terracotta text-white"
              aria-label="Sign in"
            >
              <UserRound className="h-4 w-4" />
            </button>
          )}
        </div>
      </nav>
      {!isHome && (
        <div className="mx-auto max-w-7xl px-5 pb-3 sm:px-8">
          <ProgressStepper flow currentStep={step} totalSteps={4} />
        </div>
      )}
      {!isAuthenticated && !isHome && (
        <p className="sr-only">Guest runs remaining: {Math.max(0, MAX_GUEST_RUNS - guestRunsCount)}</p>
      )}
    </header>
  );
}
