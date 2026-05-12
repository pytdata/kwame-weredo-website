import { ProductCard } from '@/components/public/product-card';
import { Search } from 'lucide-react';

const products = [
  { name: 'Spark Refresh Beverage Pack', category: 'Beverages', price: 'GHS 120', description: 'Premium beverage collection suitable for retail shops and celebrations.', accent: 'bg-cyan-400', badge: 'Best Seller' },
  { name: 'PureHome Essentials Bundle', category: 'Household', price: 'GHS 185', description: 'Curated household essentials package for homes and hospitality.', accent: 'bg-emerald-400' },
  { name: 'CarePlus Wellness Kit', category: 'Personal Care', price: 'GHS 150', description: 'Daily care and wellness products from trusted FMCG brands.', accent: 'bg-fuchsia-400', badge: 'New' },
  { name: 'Family Grocery Basket', category: 'Groceries', price: 'GHS 220', description: 'Convenient grocery assortment designed for gifting.', accent: 'bg-amber-400' },
  { name: 'Office Supply Refresh Pack', category: 'Corporate', price: 'GHS 420', description: 'Bulk FMCG package for offices and workplaces.', accent: 'bg-violet-400' },
  { name: 'Weekend Celebration Combo', category: 'Celebration', price: 'GHS 300', description: 'Celebration-ready package ideal for festive moments.', accent: 'bg-rose-400', badge: 'Promo' },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[3rem] border border-white/40 bg-white/80 p-10 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">FMCG Product Catalog</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 dark:text-white">Explore premium wholesale and retail product collections.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">Discover beverages, groceries, household essentials, wellness products, and curated business supply packages.</p>
          </div>

          <div className="glass flex w-full max-w-md items-center gap-3 rounded-2xl px-5 py-4">
            <Search className="h-5 w-5 text-slate-400" />
            <input placeholder="Search products..." className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" />
          </div>
        </div>
      </section>

      <section className="mt-14 flex flex-wrap gap-3">
        {['All', 'Beverages', 'Household', 'Groceries', 'Personal Care', 'Corporate'].map((filter) => (
          <button key={filter} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-950 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-950">{filter}</button>
        ))}
      </section>

      <section className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </section>
    </main>
  );
}
