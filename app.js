const P=[
['Netflix 4K','OTT','netflix.svg','1 Month ₹99 • 3 Months ₹249<br>6 Months ₹399 • 12 Months ₹699','Best Seller'],
['JioHotstar Premium 4K','OTT','jiohotstar-banner.jpg','3 Months ₹249 • 6 Months ₹449<br>12 Months ₹749','Popular'],
['Amazon Prime Video','Premium Apps','primevideo-banner.jpg','6 Months ₹349 • 1 Year ₹599','Offer'],
['ZEE5 Premium','OTT','zee5-banner.jpg','1 Year ₹399 • On Your Number','Trending'],
['SonyLIV','OTT','sonyliv-banner.jpg','1M ₹99 • 3M ₹149 • 6M ₹199 • 1Y ₹299<br>Personal 5 Devices: 1Y ₹699','Top Rated'],
['Starshare IPTV','IPTV','starshare-iptv.png','1M ₹150 • 3M ₹399 • 6M ₹699 • 12M ₹1299','Offer'],
['BOSTV Prime IPTV','IPTV','bostv-prime-iptv.png','3 Months ₹299 • 6 Months ₹549 • 12 Months ₹899','Popular'],
['Rolex TV','IPTV','rolex-tv.png','3 Months ₹249 • 6 Months ₹449 • 12 Months ₹799','New'],
['Filex TV','IPTV','filex-tv.png','Contact for latest plan & price','New'],
['YouTube Premium','Premium Apps','youtube.svg','1 Month ₹49 • 3 Months ₹189 • 6 Months ₹399<br>Activation on your mail','Offer'],
['Hoichoi Premium','Premium Apps','hoichoi-tool.jpg','1 Month ₹59 • 6 Months ₹299 • 1 Year ₹399','Popular'],
['Canva Pro Personal','AI Tools','canva.svg','6 Months ₹199 • 1 Year ₹299','Popular'],
['Spotify Standard','Premium Apps','spotify.svg','2 Months ₹99 • 3 Months ₹149<br>Personal email activation','Offer'],
['Super Grok','AI Tools','super-grok.jpg','3 Months ₹3599<br>Reference Price ₹8700','New'],
['Gamma AI Pro','AI Tools','gamma-ai.jpg','12 Months ₹499<br>Reference Price ₹11000','Popular'],
['Gemini Pro','AI Tools','gemini-pro.jpg','18 Months ₹399 • Personal email activation','New'],
['LinkedIn Career Premium','Premium Apps','linkedin-career.jpg','12 Months ₹1299<br>Reference Price ₹28788','Popular'],
['CapCut Pro','Premium Apps','capcut-pro.jpg','6 Months ₹3499 • On your mail','Offer'],
['Gaana Plus','Premium Apps','gaana-plus.jpg','1 Year ₹299 • Activation on your number','Offer'],
['Play OTT','OTT','jiohotstar-banner.jpg','Yearly Plan ₹699 • 25+ OTT • Up to 5 Devices','Popular'],
['IBO SOL Player Activation','Activations','ibosol-player-activation/ibosol-player.jpg','1 Year ₹600<br>Lifetime ₹1199','New']];
let cat='All',cart=0,sel='',selPrice=0,qty=1,selPlan='';
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function getPlans(product){
  const text=product[3].replace(/<br\s*\/?>/gi,' • ');
  const plans=[];
  const re=/([^•]+?)\s*₹\s*([\d,]+)/g; let m;
  while((m=re.exec(text))){
    let label=m[1].trim().replace(/^•\s*/,'').replace(/Reference Price/i,'').trim();
    const price=parseInt(m[2].replace(/,/g,''),10);
    if(!price || /Reference Price/i.test(m[1])) continue;
    if(label) plans.push({label,price});
  }
  return plans;
}
function render(){
  let q=(document.getElementById('search').value||'').toLowerCase();
  let list=P.filter(x=>(cat==='All'||x[1]===cat||cat==='Offers'&&x[4]==='Offer')&&x[0].toLowerCase().includes(q));
  document.getElementById('products').innerHTML=list.map(x=>`<article class="card"><span class="badge">${x[4]}</span><img src="${x[2]}" alt="${escapeHtml(x[0])}"><div class="info"><h3>${escapeHtml(x[0])}</h3><div class="price">${x[3]}</div><button class="buy" onclick="checkout('${x[0].replaceAll("'","\\'")}')">🛒 Buy Now</button></div></article>`).join('')||'<p>No products found.</p>'
}
function filterCat(c){cat=c;render();scrollTo({top:document.querySelector('main').offsetTop-70,behavior:'smooth'})}
function filterProducts(){render()}
function checkout(x){
  const product=P.find(p=>p[0]===x); if(!product)return;
  sel=x; qty=1;
  const plans=getPlans(product);
  selPlan=plans[0]?.label||'Selected plan'; selPrice=plans[0]?.price||0;
  document.getElementById('checkoutProduct').textContent=x;
  document.getElementById('qty').textContent=qty;
  document.getElementById('planOptions').innerHTML=plans.length
    ? plans.map((p,i)=>`<button class="planPill ${i===0?'active':''}" onclick="selectPlan(${p.price},'${p.label.replaceAll("'","\\'")}',this)">${escapeHtml(p.label)} <b>₹${p.price.toLocaleString('en-IN')}</b></button>`).join('')
    : '<p>No plan price available. Please contact support.</p>';
  updateCheckout(product);
  document.getElementById('modal').classList.add('show');
}
function selectPlan(price,label,el){
  selPrice=price; selPlan=label;
  document.querySelectorAll('.planPill').forEach(b=>b.classList.remove('active')); el.classList.add('active');
  updateCheckout(P.find(p=>p[0]===sel));
}
function updateCheckout(product){
  document.getElementById('total').textContent='₹'+(selPrice*qty).toLocaleString('en-IN');
  document.getElementById('payAmount').textContent='₹'+(selPrice*qty).toLocaleString('en-IN');
  document.getElementById('detailText').innerHTML=`<b>${escapeHtml(sel)}</b><br>${escapeHtml(selPlan)} • Quantity ${qty}`;
  document.getElementById('detailFeatures').innerHTML='<div>✨ Features</div><div>✔️ Quick activation</div><div>✔️ Secure checkout</div><div>✔️ Customer support</div>';
}
function changeQty(n){qty=Math.max(1,Math.min(10,qty+n));document.getElementById('qty').textContent=qty;updateCheckout(P.find(p=>p[0]===sel))}
function closeModal(){document.getElementById('modal').classList.remove('show')}
function payNow(){
  let n=document.getElementById('name').value||'Customer';
  location.href='upi://pay?pa=Q00403870@ybl&pn=Universal%20Telecommunication%20Service&am='+(selPrice*qty).toFixed(2)+'&cu=INR&tn='+encodeURIComponent(sel+' - '+selPlan+' - '+n)
}
function waOrder(){
  let n=document.getElementById('name').value||'Customer',m=document.getElementById('mobile').value||'';
  location.href='https://wa.me/917668677629?text='+encodeURIComponent('Hello, I want to order: '+sel+'\nPlan: '+selPlan+'\nQuantity: '+qty+'\nTotal: ₹'+(selPrice*qty).toLocaleString('en-IN')+'\nName: '+n+'\nMobile: '+m)
}
function showCart(){alert('Select a plan and tap Buy Now to continue.')}
function go(){window.scrollTo({top:0,behavior:'smooth'})}
render();
