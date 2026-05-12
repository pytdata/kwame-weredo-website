import { Gift, Sparkles } from 'lucide-react';

export type GiftBoxCardProps = {
  title: string;
  description: string;
  price: string;
  theme: string;
  accent: string;
};

export function GiftBoxCard({ title, description, price, theme, accent }: GiftBoxCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/80 p-6 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-2 dark:border-white/10 dark:bg-white/5">
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${accent} opacity-20 blur-3xl transition group-hover:scale-125`} />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200">
            <Sparkles className="h-3.5 w-3.5" /> {theme}
          </span>

          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent} text-white shadow-xl`}>
            <Gift className="h-5 w-5" />
          </div>
        </div>

        <h3 className="mt-6 text-2xl font-black leading-tight text-slate-950 dark:text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Starting From</p>
            <p className="text-2xl font-black text-slate-950 dark:text-white">{price}</p>
          </div>

          <button className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
            Customize Box
          </button>
        </div>
      </div>
    </div>
  );
}
