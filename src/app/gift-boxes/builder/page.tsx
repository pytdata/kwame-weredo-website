'use client';

const products = [
  'Premium Beverage Selection',
  'Chocolate & Snacks Bundle',
  'Luxury Wellness Pack',
  'Family Essentials Basket',
  'Corporate Appreciation Items',
  'Festive Celebration Add-ons',
];

export default function GiftBoxBuilderPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[3rem] border border-white/40 bg-white/80 p-10 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">Gift Box Builder</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 dark:text-white">Create a personalized gift experience.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">Interactive builder flow for customized gift boxes with products, gift notes, delivery, and Paystack checkout.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {['Theme', 'Products', 'Message', 'Checkout'].map((step, index) => (
              <div key={step} className={`rounded-2xl border px-5 py-4 text-center ${index === 0 ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-200 bg-white dark:border-white/10 dark:bg-white/5'}`}>
                <p className="text-xs font-black uppercase tracking-[0.18em]">Step {index + 1}</p>
                <p className="mt-2 text-sm font-black">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-white/30 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">Choose your theme</h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {['Festive', 'Corporate', 'Luxury', 'Family'].map((theme, index) => (
                <button key={theme} className={`rounded-[2rem] border p-6 text-left transition hover:-translate-y-1 ${index === 0 ? 'border-emerald-500 bg-gradient-to-br from-emerald-500 to-cyan-500 text-white' : 'border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5'}`}>
                  <p className="text-xs font-black uppercase tracking-[0.18em]">Theme</p>
                  <h3 className="mt-4 text-2xl font-black">{theme}</h3>
                  <p className="mt-3 text-sm leading-7 opacity-90">Premium curated experience designed for memorable gifting.</p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/30 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-black text-slate-950 dark:text-white">Select products</h2>

            <div className="mt-8 grid gap-4">
              {products.map((product) => (
                <label key={product} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-white/5">
                  <div>
                    <p className="font-black text-slate-950 dark:text-white">{product}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Curated premium FMCG selection.</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-emerald-500" />
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/30 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 dark:border-white/10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">Gift Summary</p>
            <h3 className="mt-4 text-3xl font-black">Festive Celebration Box</h3>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span>Products</span><span className="font-black text-white">4 Items</span></div>
              <div className="flex items-center justify-between"><span>Packaging</span><span className="font-black text-white">Premium</span></div>
              <div className="flex items-center justify-between"><span>Discount</span><span className="font-black text-emerald-300">- GHS 40</span></div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Estimated Total</p>
                  <p className="mt-2 text-4xl font-black">GHS 520</p>
                </div>
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950">Continue</button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
