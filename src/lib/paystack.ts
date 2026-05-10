const PAYSTACK_BASE='https://api.paystack.co';
async function paystackFetch(path:string, init?:RequestInit){
  const key=process.env.PAYSTACK_SECRET_KEY; if(!key) throw new Error('Missing PAYSTACK_SECRET_KEY');
  const res=await fetch(`${PAYSTACK_BASE}${path}`,{...init,headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json',...(init?.headers||{})}});
  if(!res.ok) throw new Error('Paystack request failed'); return res.json();
}
export const initializeTransaction=(payload:{email:string;amount:number;reference:string;callback_url?:string})=>paystackFetch('/transaction/initialize',{method:'POST',body:JSON.stringify(payload)});
export const verifyTransaction=(reference:string)=>paystackFetch(`/transaction/verify/${reference}`);
