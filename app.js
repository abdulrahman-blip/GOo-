
async function loadData(){
  const res = await fetch('assets/sample-data.json');
  return res.json();
}
function $(s,ctx=document){return ctx.querySelector(s)}
function $all(s,ctx=document){return [...ctx.querySelectorAll(s)]}
function fmtUSD(n){return '$' + Number(n).toLocaleString()}
function setActive(navId){
  $all('.nav a').forEach(a=>a.classList.remove('active'));
  const el = $(navId); if(el) el.classList.add('active');
}
