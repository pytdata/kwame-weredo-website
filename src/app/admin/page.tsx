import { BarChart3, Boxes, CreditCard, PackageCheck, ShoppingBag, Users } from 'lucide-react';

const stats = [
  { title: 'Revenue', value: 'GHS 124,500', icon: CreditCard },
  { title: 'Orders', value: '1,284', icon: ShoppingBag },
  { title: 'Customers', value: '842', icon: Users },
  { title: 'Gift Boxes', value: '312', icon: PackageCheck },
];

const recentOrders = [
  { customer: 'Akosua Mensah', order: 'Festive Gift Box', amount: 'GHS 520', status: 'Paid' },
  { customer: 'Nii Tackie', order: 'Corporate Bundle', amount: 'GHS 1,240', status: 'Pending' },
  { customer: 'Ama Owusu', order: 'Family Grocery Basket', amount: 'GHS 220', status: 'Delivered' },
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-xl shadow-emerald-500/20">
              <Boxes className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Admin Portal</p>
              <h1 className="text-lg font-black">Wereko Commerce</h1>
            </div>
          </div>

          <nav className="mt-10 grid gap-3">
            {['Dashboard', 'Products', 'Gift Boxes', 'Orders', 'Customers', 'Payments', 'Analytics', 'Content'].map((item, index) => (
              <button key={item} className={`rounded-2xl px-5 py-4 text-left text-sm font-black transition ${index === 0 ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-xl shadow-emerald-500/20' : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'}`}>
                {item}
              </button>
            ))}
          </nav>
        </aside>

        <section className="p-6 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-300">Overview</p>
              <h2 className="mt-4 text-5xl font-black tracking-tight">Business analytics dashboard.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Monitor products, gift boxes, customer growth, wholesale activity, payments, and revenue performance from one central dashboard.</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Live Metrics</p>
              <div className="mt-3 flex items-center gap-3 text-emerald-300">
                <BarChart3 className="h-6 w-6" />
                <span className="text-3xl font-black">+18.4%</span>
              </div>
            </div>
          </div>

          <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ title, value, icon: Icon }) => (
              <div key={title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">{title}</p>
                    <h3 className="mt-4 text-4xl font-black">{value}</h3>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-12 grid gap-8 xl:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Revenue Analytics</p>
                  <h3 className="mt-3 text-3xl font-black">Sales performance trend</h3>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-black text-emerald-300">Monthly</span>
              </div>

              <div className="mt-10 flex h-72 items-end gap-4">
                {[35, 55, 48, 72, 64, 88, 96, 78, 92].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-[1.5rem] bg-gradient-to-t from-emerald-500 to-cyan-400 shadow-xl shadow-emerald-500/20" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Recent Orders</p>
                  <h3 className="mt-3 text-3xl font-black">Latest transactions</h3>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.customer} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-black">{order.customer}</p>
                        <p className="mt-1 text-sm text-slate-400">{order.order}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-emerald-300">{order.amount}</p>
                        <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">{order.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
