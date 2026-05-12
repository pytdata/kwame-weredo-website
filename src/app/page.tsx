import { ArrowRight, Gift, ShieldCheck, ShoppingBag, Sparkles, Truck } from 'lucide-react';
import Link from 'next/link';

const featuredProducts = [
  {
    title: 'Premium Beverage Collection',
    category: 'Beverages',
    description: 'Refreshing beverages and soft drinks curated for homes, offices, and retail distribution.',
  },
  {
    title: 'Household Essentials',
    category: 'Household',
    description: 'Everyday household products sourced for reliability, quality, and affordability.',
  },
  {
    title: 'Personal Care Selection',
    category: 'Personal Care',
    description: 'Trusted personal care and wellness products for retail and wholesale customers.',
  },
];

const stats = [
  { value: '500+', label: 'Products Distributed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Wholesale Support' },
  { value: 'Nationwide', label: 'Delivery Coverage' },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="hero-grid relative isolate overflow-hidden">
        <div className="mx-auto grid min-h-[88vh] max-w-7xl gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-24">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <Sparkles className="h-4 w-4" /> Premium FMCG Distribution in Ghana
            </div>

            <h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Wholesale FMCG supply built for
              <span className="gradient-text"> modern commerce.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              KWAME WEREKO ENTERPRISE supplies quality beverages, household goods, personal care products, and curated gift packages for retail, wholesale, and corporate customers across Ghana.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 dark:bg-white dark:text-slate-950"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/gift-boxes"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-800 shadow-lg transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <Gift className="h-4 w-4" /> Build a Gift Box
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/50 bg-white/70 p-5 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-2xl font-black text-slate-950 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-20 blur-3xl" />

            <div className="relative grid w-full max-w-2xl gap-6 lg:grid-cols-2">
              <div className="space-y-6 lg:mt-20">
                <div className="overflow-hidden rounded-[2rem] border border-white/30 bg-white/80 p-6 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                      Gift Boxes
                    </span>
                    <Gift className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black">Curated Celebration Packages</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Personalized gift experiences for festive seasons, families, teams, and corporate clients.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/30 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-cyan-300" />
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">
                      Nationwide Logistics
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black leading-tight">
                    Fast wholesale and retail delivery.
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-white/30 bg-white/80 p-6 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="h-5 w-5 text-cyan-500" />
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                      FMCG Products
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black leading-tight">
                    Trusted products from leading brands.
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/10">Beverages</div>
                    <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/10">Household</div>
                    <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/10">Groceries</div>
                    <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/10">Personal Care</div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/30 bg-gradient-to-br from-emerald-500 to-teal-500 p-6 text-white shadow-2xl shadow-emerald-500/20 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-emerald-100">
                      Secure Payments
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black">Paystack-powered checkout experience.</h3>
                  <p className="mt-3 text-sm leading-7 text-emerald-50">
                    Smooth and secure online payments for retail, wholesale, and gift package purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
              Featured Collections
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-slate-950 dark:text-white">
              Curated FMCG selections designed for modern households and businesses.
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black shadow-lg transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5"
          >
            View Catalog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <div
              key={product.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/80 p-7 shadow-xl backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-2xl" />

              <div className="relative">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  {product.category}
                </span>

                <h3 className="mt-6 text-2xl font-black leading-tight text-slate-950 dark:text-white">
                  {product.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {product.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
                  Explore Collection <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="absolute bottom-6 right-6 text-6xl font-black text-slate-100 dark:text-white/5">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
