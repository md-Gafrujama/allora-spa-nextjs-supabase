import { createClient } from '@/lib/supabase/server';
import { spaItems } from '@/lib/service-data';

const fallbackPackages = spaItems.slice(0,3).map((x,i)=>({id:x.slug,slug:x.slug,name:x.name,short_description:x.description,description:x.description,price:Number(x.price.replace(/[^0-9.]/g,''))||null,image_url:x.image,duration_minutes:parseInt(x.duration)||60,sort_order:i+1,is_active:true}));

export async function getPackages(){
  try { const s=await createClient(); const {data,error}=await s.from('spa_packages').select('*').eq('is_active',true).order('sort_order'); if(!error && data?.length) return data; } catch {}
  return fallbackPackages;
}
export async function getPackageBySlug(slug:string){
  try { const s=await createClient(); const {data,error}=await s.from('spa_packages').select('*').eq('slug',slug).eq('is_active',true).maybeSingle(); if(!error && data) return data; } catch {}
  return fallbackPackages.find(x=>x.slug===slug) || spaItems.find(x=>x.slug===slug);
}
export async function getServices(){ try { const s=await createClient(); const {data}=await s.from('services').select('*').eq('is_active',true).order('sort_order'); if(data?.length) return data; } catch {} return []; }
export async function getEventServices(){ try { const s=await createClient(); const {data}=await s.from('event_services').select('*').eq('is_active',true).order('sort_order'); if(data?.length) return data; } catch {} return []; }
