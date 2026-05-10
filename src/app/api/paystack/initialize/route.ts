import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod'; import { initializeTransaction } from '@/lib/paystack';
const schema=z.object({email:z.string().email(),amount:z.number().int().positive(),reference:z.string().min(6)});
export async function POST(req:NextRequest){const body=schema.parse(await req.json());const data=await initializeTransaction(body);return NextResponse.json(data);}
