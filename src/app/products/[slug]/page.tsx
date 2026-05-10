import { PageShell } from '@/components/public/page-shell';
export default function ProductDetail({params}:{params:{slug:string}}){return <PageShell title={params.slug} desc='Product details, pricing, and inventory status.'/ >}
