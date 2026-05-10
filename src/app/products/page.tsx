import { PageShell } from '@/components/public/page-shell';
export default function Products(){return <PageShell title='Products' desc='Browse FMCG products by categories and brands.'><div className='grid md:grid-cols-3 gap-4'>{Array.from({length:6}).map((_,i)=><article key={i} className='rounded-xl border p-4'>Product {i+1}</article>)}</div></PageShell>}
