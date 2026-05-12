import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { SiteHeader } from '@/components/public/site-header';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'KWAME WEREKO ENTERPRISE',
    template: '%s | KWAME WEREKO ENTERPRISE',
  },
  description:
    'Premium FMCG distribution company in Ghana supplying beverages, household goods, personal care products, gift boxes, and wholesale packages.',
  keywords: [
    'FMCG Ghana',
    'Wholesale Ghana',
    'Gift Boxes Ghana',
    'Beverages Ghana',
    'Household Products Ghana',
  ],
  openGraph: {
    title: 'KWAME WEREKO ENTERPRISE',
    description:
      'Premium FMCG distribution company in Ghana supplying beverages, household goods, personal care products, gift boxes, and wholesale packages.',
    url: '/',
    siteName: 'KWAME WEREKO ENTERPRISE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KWAME WEREKO ENTERPRISE',
    description:
      'Premium FMCG distribution company in Ghana supplying beverages, household goods, personal care products, gift boxes, and wholesale packages.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-[#f6f8fb] text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
        <ThemeProvider>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/10" />
          </div>

          <SiteHeader />

          {children}

          <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
              <div className="space-y-4">
                <h3 className="text-lg font-black">KWAME WEREKO ENTERPRISE</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Premium FMCG distribution company delivering trusted products, wholesale packages, and curated gift experiences across Ghana.
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-500">Company</h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>About Us</li>
                  <li>Wholesale Distribution</li>
                  <li>Gift Box Services</li>
                  <li>Corporate Supply</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-500">Support</h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>Contact</li>
                  <li>Returns Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-800 p-6 text-white shadow-2xl shadow-slate-950/20 dark:border-white/10">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Wholesale</p>
                <h3 className="mt-3 text-2xl font-black leading-tight">
                  Ready to distribute quality FMCG products?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Partner with us for wholesale supply, festive gift packages, and nationwide distribution support.
                </p>
                <button className="mt-5 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5">
                  Become a Partner
                </button>
              </div>
            </div>

            <div className="border-t border-slate-200/80 py-5 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-500">
              © 2026 KWAME WEREKO ENTERPRISE. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
