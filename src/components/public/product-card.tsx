import { ArrowRight, ShoppingCart, Star } from 'lucide-react';

export type ProductCardProps = {
  name: string;
  category: string;
  price: string;
  description: string;
  accent: string;
  badge?: string;
};

export function ProductCard({ name, category, price, description, accent, badge }: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/85 p-5 shadow-xl shadow-slate-200/60 backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-none">
      <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${accent} opacity-30 blur-2xl transition group-hover:scale-125`} />

      <div className="relative h-52 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-white p-5 dark:from-white/10 dark:to-white/5">
        <div className={`absolute inset-x-10 bottom-6 h-24 rounded-full ${accent} opacity-30 blur-2xl`} />
        <div className="relative mx-auto flex h-full max-w-[12rem] items-center justify-center rounded-[2rem] border border-white/50 bg-white/80 shadow-2xl dark:border-white/10 dark:bg-white/10">
          <div className={`h-24 w-24 rounded-[2rem] ${accent} shadow-xl`} />
        </div>
        {badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-slate-950 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white dark:bg-white dark:text-slate-950">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="relative pt-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:bg-white/10 dark:text-slate-300">
            {category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" /> 4.9
          </span>
        </div>

        <h3 className="mt-4 text-xl font-black leading-tight text-slate-950 dark:text-white">{name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">From</p>
            <p className="text-xl font-black text-slate-950 dark:text-white">{price}</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
            <ShoppingCart className="h-4 w-4" /> Add
          </button>
        </div>

        <button className="mt-4 inline-flex items-center gap-2 text-sm font-black text-emerald-600 dark:text-emerald-400">
          View details <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
