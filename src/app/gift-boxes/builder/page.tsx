'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PageShell } from '@/components/public/page-shell';
const schema=z.object({theme:z.string().min(1),message:z.string().max(250).optional()});
export default function Builder(){const {register,handleSubmit,formState:{errors}}=useForm<z.infer<typeof schema>>({resolver:zodResolver(schema)});return <PageShell title='Gift Box Builder' desc='Step 1: Choose theme/box • Step 2: Pick products • Step 3: Add gift message • Step 4: Review and checkout'><form onSubmit={handleSubmit(()=>{})} className='space-y-3 max-w-lg'><input {...register('theme')} placeholder='Theme' className='w-full border rounded p-2'/>{errors.theme&&<p className='text-red-500'>Theme is required</p>}<textarea {...register('message')} placeholder='Gift note' className='w-full border rounded p-2'/><button className='rounded bg-brand-500 text-white px-4 py-2'>Continue</button></form></PageShell>}
