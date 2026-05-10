import { NextRequest, NextResponse } from 'next/server';
import { verifyTransaction } from '@/lib/paystack';
export async function POST(req:NextRequest){const {reference}=await req.json(); if(!reference) return NextResponse.json({error:'reference required'},{status:400}); const data=await verifyTransaction(reference); return NextResponse.json(data);}
