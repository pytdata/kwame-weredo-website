import { CreditCard, LockKeyhole, MapPin, PackageCheck, ShieldCheck, Truck } from 'lucide-react';

const cartItems = [
  { name: 'Spark Refresh Beverage Pack', qty: 2, price: 'GHS 240' },
  { name: 'Festive Celebration Gift Box', qty: 1, price: 'GHS 520' },
  { name: 'PureHome Essentials Bundle', qty: 1, price: 'GHS 185' },
];

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[3rem] border border-white/40 bg-white/80 p-10 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/5">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">Secure Checkout</p>
        <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 dark:text-white">Complete your order with confidence.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">Review your items, confirm delivery details, and pay securely with Paystack cards, bank transfer, or mobile money.</p>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-white/30 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-emerald-500" />
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">Delivery Information</h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {['Full Name', 'Phone Number', 'Email Address', 'City / Area'].map((label) => (
                <label key={label} className="space-y-2">
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{label}</span>
                  <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500 dark:border-white/10 dark:bg-white/5" placeholder={label} />
                </label>
              ))}
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Delivery Address</span>
                <textarea className="min-h-28 w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none transition focus:border-emerald-500 dark:border-white/10 dark:bg-white/5" placeholder="Enter delivery location and useful directions" />
              </label>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/30 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 dark:border-white/10">
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6 text-emerald-300" />
              <h2 className="text-2xl font-black">Paystack Payment</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">Payment is initialized securely through Paystack Inline JS. Final order confirmation must happen only after backend transaction verification.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['Card', 'Mobile Money', 'Bank Transfer'].map((method) => (
                <button key={method} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-5 text-sm font-black text-white backdrop-blur transition hover:bg-white/20">{method}</button>
              ))}
            </div>

            <button className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-black text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600">
              <LockKeyhole className="h-5 w-5" /> Pay Securely with Paystack
            </button>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-[2rem] border border-white/30 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <PackageCheck className="h-6 w-6 text-cyan-500" />
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">Order Summary</h2>
            </div>

            <div className="mt-8 space-y-4">
              {cartItems.map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4 dark:bg-white/5">
                  <div>
                    <p className="font-black text-slate-950 dark:text-white">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Qty: {item.qty}</p>
                  </div>
                  <p className="font-black text-slate-950 dark:text-white">{item.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 border-t border-slate-200 pt-6 text-sm dark:border-white/10">
              <div className="flex justify-between"><span className="text-slate-500">Subtotal</span><span className="font-black">GHS 945</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Delivery</span><span className="font-black">GHS 35</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Discount</span><span className="font-black text-emerald-500">- GHS 40</span></div>
              <div className="flex justify-between pt-4 text-xl"><span className="font-black">Total</span><span className="font-black">GHS 940</span></div>
            </div>
          </div>

          <div className="grid gap-4">
            {[{icon: ShieldCheck, title: 'Verified payment flow'}, {icon: Truck, title: 'Reliable delivery coordination'}, {icon: LockKeyhole, title: 'Secure checkout experience'}].map(({icon: Icon, title}) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl border border-white/30 bg-white/70 p-5 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"><Icon className="h-5 w-5" /></div>
                <p className="font-black text-slate-950 dark:text-white">{title}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
