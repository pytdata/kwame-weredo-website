'use client';
import { motion } from 'framer-motion';
export function PageShell({title,desc,children}:{title:string;desc:string;children?:React.ReactNode}){
 return <main className='mx-auto max-w-6xl p-6 space-y-6'><motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}><h1 className='text-3xl font-bold'>{title}</h1><p className='text-slate-600 dark:text-slate-300'>{desc}</p></motion.div>{children}</main>
}
