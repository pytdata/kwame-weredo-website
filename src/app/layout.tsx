import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: 'KWAME WEREKO ENTERPRISE', template: '%s | KWAME WEREKO ENTERPRISE' },
  description: 'Trusted FMCG distribution partner in Ghana.',
  openGraph: { title: 'KWAME WEREKO ENTERPRISE', description: 'Trusted FMCG distribution partner in Ghana.', url: '/', siteName: 'KWAME WEREKO ENTERPRISE', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'KWAME WEREKO ENTERPRISE', description: 'Trusted FMCG distribution partner in Ghana.' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang='en' suppressHydrationWarning><body><ThemeProvider><header className='border-b'><div className='mx-auto max-w-6xl p-4 flex justify-between'><strong>KWAME WEREKO ENTERPRISE</strong><ThemeToggle/></div></header>{children}</ThemeProvider></body></html>;
}
