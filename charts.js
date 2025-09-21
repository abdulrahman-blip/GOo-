
export function lineChart(canvas, series){
  const ctx = canvas.getContext('2d'); const W=canvas.width=canvas.clientWidth, H=canvas.height=canvas.clientHeight;
  ctx.clearRect(0,0,W,H); const pad=30; const max=Math.max(...series)*1.1, min=0;
  // axes
  ctx.strokeStyle='#2a3b57'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(pad, pad); ctx.lineTo(pad, H-pad); ctx.lineTo(W-pad, H-pad); ctx.stroke();
  // line
  ctx.strokeStyle='#7fb5ff'; ctx.lineWidth=2; ctx.beginPath();
  series.forEach((v,i)=>{
    const x = pad + i*( (W-2*pad)/(series.length-1) );
    const y = H-pad - ( (v-min)/(max-min) )*(H-2*pad);
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    ctx.fillStyle='#9ec3ff'; ctx.beginPath(); ctx.arc(x,y,3,0,2*Math.PI); ctx.fill();
  });
  ctx.stroke();
}
export function barChart(canvas, items){
  const ctx=canvas.getContext('2d'); const W=canvas.width=canvas.clientWidth,H=canvas.height=canvas.clientHeight;
  ctx.clearRect(0,0,W,H); const pad=30; const max=Math.max(...items.map(i=>i.value))*1.1;
  const bw = (W-2*pad)/items.length * 0.6;
  items.forEach((it,idx)=>{
    const x = pad + idx*((W-2*pad)/items.length) + ((W-2*pad)/items.length - bw)/2;
    const h = ((it.value)/max)*(H-2*pad);
    const y = H-pad - h;
    const grd = ctx.createLinearGradient(0,y,0,y+h); grd.addColorStop(0,'#2563eb'); grd.addColorStop(1,'#22d3ee');
    ctx.fillStyle=grd; ctx.fillRect(x,y,bw,h);
    ctx.fillStyle='#9fb4d8'; ctx.font='12px system-ui'; ctx.textAlign='center'; ctx.fillText(it.label, x+bw/2, H-10);
  });
}
