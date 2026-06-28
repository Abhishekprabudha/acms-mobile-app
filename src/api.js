export function getApiUrl(){return localStorage.getItem('ACMS_APPS_SCRIPT_URL')||import.meta.env.VITE_APPS_SCRIPT_URL||''}
export function setApiUrl(url){localStorage.setItem('ACMS_APPS_SCRIPT_URL',url||'')}
export async function api(action,payload={}){const url=getApiUrl();if(!url)return{ok:false,offline:true};try{const r=await fetch(url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action,source:'mobile',...payload})});const t=await r.text();try{return JSON.parse(t)}catch{return{ok:r.ok,raw:t}}}catch(e){return{ok:false,error:e.message}}}
