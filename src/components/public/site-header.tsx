'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, Menu, Gift, PhoneCall, X, ShoppingCart } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/theme-toggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/gift-boxes', label: 'Gift Boxes' },
  { href: '/checkout', label: 'Checkout' },
  { href: '/admin', label: 'Admin' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25 transition group-hover:scale-105">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-900 dark:text-white">Wereko</p>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">FMCG Distribution</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 lg:flex">
          {navItems.slice(0, 6).map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/gift-boxes" className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
            <Gift className="h-4 w-4" /> Gift Boxes
          </Link>
          <Link href="/checkout" className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-black text-white">3</span>
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">
            <PhoneCall className="h-4 w-4" /> Request Quote
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/checkout" className="relative rounded-2xl border border-slate-200 p-2 dark:border-white/10" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-emerald-500 text-center text-[10px] font-black text-white">3</span>
          </Link>
          <ThemeToggle />
          <button onClick={() => setOpen(true)} className="rounded-2xl border border-slate-200 p-2 dark:border-white/10" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}>
          <aside className="ml-auto h-full w-[86%] max-w-sm border-l border-white/10 bg-white p-5 shadow-2xl dark:bg-slate-950" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-600">Menu</p>
                <h2 className="text-xl font-black">Wereko Enterprise</h2>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-2xl border border-slate-200 p-2 dark:border-white/10" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-black text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-emerald-500 to-cyan-500 p-6 text-white shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-50">Wholesale Ready</p>
              <h3 className="mt-3 text-2xl font-black leading-tight">Order FMCG products and gift boxes faster.</h3>
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950">Contact Sales</Link>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
