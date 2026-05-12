import Link from 'next/link';
import { ArrowRight, Gift, HeartHandshake, PartyPopper, Sparkles } from 'lucide-react';
import { GiftBoxCard } from '@/components/public/gift-box-card';

const curatedBoxes = [
  {
    title: 'Corporate Appreciation Box',
    description: 'Premium appreciation package for clients, executives, and company teams.',
    price: 'GHS 450',
    theme: 'Corporate',
    accent: 'bg-cyan-500',
  },
  {
    title: 'Festive Family Celebration Box',
    description: 'Curated festive products and celebration essentials for family moments.',
    price: 'GHS 320',
    theme: 'Festive',
    accent: 'bg-emerald-500',
  },
  {
    title: 'Luxury Wellness Gift Box',
    description: 'Wellness and premium care package designed for thoughtful gifting.',
    price: 'GHS 550',
    theme: 'Luxury',
    accent: 'bg-fuchsia-500',
  },
];

const builderSteps = [
  {
    title: 'Choose a Theme',
    description: 'Select from festive, luxury, family, wellness, or corporate themes.',
    icon: Sparkles,
  },
  {
    title: 'Add Products',
    description: 'Build your own curated experience with premium FMCG products.',
    icon: Gift,
  },
  {
    title: 'Add Message & Delivery',
    description: 'Include personalized notes and recipient delivery details.',
    icon: HeartHandshake,
  },
  {
    title: 'Checkout Securely',
    description: 'Complete payment seamlessly using Paystack checkout.',
    icon: PartyPopper,
  },
];

export default function GiftBoxesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[3rem] border border-white/40 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-10 text-white shadow-2xl shadow-slate-950/20 dark:border-white/10">
        <div className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-200 backdrop-blur">
              <Gift className="h-4 w-4" /> Signature Gift Experiences
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Curated and customizable gift boxes for every occasion.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Build memorable experiences with personalized gift packages, festive collections, and premium FMCG assortments designed for families, teams, and corporate gifting.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/gift-boxes/builder" className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1">
                Start Building
              </Link>

              <Link href="/products" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/20">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {builderSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
              Curated Collections
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
              Premium gift experiences curated by our team.
            </h2>
          </div>

          <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black shadow-lg transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5">
            View Promotions
          </button>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {curatedBoxes.map((box) => (
            <GiftBoxCard key={box.title} {...box} />
          ))}
        </div>
      </section>
    </main>
  );
}
