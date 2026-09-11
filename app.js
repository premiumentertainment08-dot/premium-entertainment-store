const P = [
  // OTT
  ['Netflix 4K','OTT','netflix.svg','1 Month ₹99 • 3 Months ₹249<br>6 Months ₹399 • 12 Months ₹699','Best Seller',[['1 Month',99],['3 Months',249],['6 Months',399],['12 Months',699]]],
  ['JioHotstar Premium 4K','OTT','jiohotstar-banner.jpg','3 Months ₹249 • 6 Months ₹449<br>12 Months ₹749','Popular',[['3 Months',249],['6 Months',449],['12 Months',749]]],
  ['Amazon Prime Video – Private','OTT','primevideo-banner.jpg','6 Months ₹349 • 1 Year ₹599','Offer',[['6 Months',349],['1 Year',599]]],
  ['ZEE5 Premium','OTT','zee5-banner.jpg','1 Year ₹399 • On Your Number','Trending',[['1 Year',399]]],
  ['SonyLIV','OTT','sonyliv-banner.jpg','1M ₹99 • 3M ₹149 • 6M ₹199 • 1Y ₹299<br>Personal 1Y ₹699','Top Rated',[['1 Month',99],['3 Months',149],['6 Months',199],['1 Year',299],['Personal 1 Year',699]]],
  ['Lionsgate Play','OTT','lionsgate-play.webp','3 Months ₹299 • Premium membership','New',[['3 Months',299]]],
  ['Apple TV+','OTT','apple-tv-plus.webp','6 Months ₹399 • Redeem/activation on own account','New',[['6 Months',399]]],
  ['Discovery+ Premium','OTT','jiohotstar-banner.jpg','6 Months ₹299 • Premium access','New',[['6 Months',299]]],

  // IPTV
  ['Starshare IPTV','IPTV','starshare-iptv.png','1M ₹150 • 3M ₹399 • 6M ₹699 • 12M ₹1299','Offer',[['1 Month',150],['3 Months',399],['6 Months',699],['12 Months',1299]]],
  ['BOSTV Prime IPTV','IPTV','bostv-prime-iptv.png','3 Months ₹299 • 6 Months ₹549 • 12 Months ₹899','Popular',[['3 Months',299],['6 Months',549],['12 Months',899]]],
  ['Rolex TV','IPTV','rolex-tv.png','3 Months ₹249 • 6 Months ₹449 • 12 Months ₹799','New',[['3 Months',249],['6 Months',449],['12 Months',799]]],
  ['Filex TV','IPTV','filex-tv.png','Contact for latest plan & price','New',[['Contact',0]]],

  // TV Subscriptions
  ['OPPLEX TV','TV Subscriptions','opplex-tv.jpg','1 Month ₹150 • 3 Months ₹349<br>6 Months ₹599 • 12 Months ₹999','Popular',[['1 Month',150],['3 Months',349],['6 Months',599],['12 Months',999]]],
  ['ZUMTV','TV Subscriptions','zum-tv.jpg','3 Months ₹499 • 6 Months ₹699 • 12 Months ₹1049','Offer',[['3 Months',499],['6 Months',699],['12 Months',1049]]],
  ['FIBER STREAM TV','TV Subscriptions','fiber-stream-tv.jpg','3 Months ₹299 • 6 Months ₹499 • 12 Months ₹899','New',[['3 Months',299],['6 Months',499],['12 Months',899]]],
  ['STAR TV','TV Subscriptions','star-tv.jpg','3 Months ₹499 • 6 Months ₹799 • 12 Months ₹1299','Popular',[['3 Months',499],['6 Months',799],['12 Months',1299]]],
  ['ZIGGTV','TV Subscriptions','premium-logo.png','3 Months ₹399 • 6 Months ₹699 • 12 Months ₹1049','New',[['3 Months',399],['6 Months',699],['12 Months',1049]]],
  ['YouTube Premium – Family','TV Subscriptions','youtube-family.jpg','1 Month ₹149 • 5 Mails Supported<br>Mobile • Laptop • TV','Offer',[['1 Month',149]]],

  // Music
  ['JioSaavn Premium','Music','jiosaavn-premium.webp','2 Months ₹149 • 6 Months ₹249 • 12 Months ₹399','Popular',[['2 Months',149],['6 Months',249],['12 Months',399]]],
  ['Apple Music Premium','Music','apple-music-premium.webp','6 Months ₹499 • Premium music access','Trending',[['6 Months',499]]],
  ['Spotify Standard','Music','spotify.svg','2 Months ₹99 • 3 Months ₹149<br>Personal email activation','Offer',[['2 Months',99],['3 Months',149]]],
  ['Gaana Plus','Music','gaana-plus.jpg','1 Year ₹299 • Activation on your number','Offer',[['1 Year',299]]],

  // Software
  ['Adobe Creative Cloud Premium','Software','adobe-creative-cloud.webp','4 Months ₹2000 • Personal email activation','Offer',[['4 Months',2000]]],
  ['CapCut Pro','Software','capcut-pro-new.webp','1 Month ₹399 • Pro features','Offer',[['1 Month',399]]],
  ['CorelDRAW Premium','Software','coreldraw-premium.webp','1 Year ₹999 • Premium design software','New',[['1 Year',999]]],
  ['Kaspersky Antivirus','Software','kaspersky-antivirus.webp','1 Year ₹699 • Antivirus protection','Popular',[['1 Year',699]]],
  ['Windows 10 Pro','Software','windows-10-pro.webp','1 PC License ₹799 • Digital key','New',[['1 PC License',799]]],
  ['AutoCAD Premium','Software','coreldraw-premium.webp','1 Year ₹1499 • CAD software access','New',[['1 Year',1499]]],

  // AI Tools
  ['ChatGPT Premium','AI Tools','gemini-pro.jpg','1 Month ₹299 • AI productivity access','Popular',[['1 Month',299]]],
  ['Perplexity AI','AI Tools','gemini-pro.jpg','1 Month ₹299 • Premium AI search','New',[['1 Month',299]]],
  ['Lovable AI','AI Tools','lovable-ai.webp','1 Month ₹499 • AI software builder access','New',[['1 Month',499]]],
  ['Gamma AI Pro','AI Tools','gamma-ai.jpg','12 Months ₹499 • Reference Price ₹11000','Popular',[['12 Months',499]]],
  ['Gemini Pro','AI Tools','gemini-pro.jpg','18 Months ₹399 • Personal email activation','New',[['18 Months',399]]],
  ['Super Grok','AI Tools','super-grok.jpg','3 Months ₹3599 • Reference Price ₹8700','New',[['3 Months',3599]]],

  // Education
  ['DataCamp Premium','Education','datacamp-premium.webp','1 Year ₹1299 • 350+ courses','Popular',[['1 Year',1299]]],
  ['Coursera Plus','Education','datacamp-premium.webp','1 Year ₹1399 • Learning & certifications','Popular',[['1 Year',1399]]],
  ['Bolt Step-by-Step Guide','Education','bolt-guide.webp','1 Year ₹499 • Step-by-step learning guide','New',[['1 Year',499]]],

  // Premium Apps
  ['Amazon Prime Membership','Premium Apps','amazon-prime-membership.webp','1 Year ₹599 • Membership access','Offer',[['1 Year',599]]],
  ['Lenskart Gold Max','Premium Apps','lenskart-gold-max.webp','1 Year ₹299 • Gold membership','New',[['1 Year',299]]],
  ['LinkedIn Career Premium','Premium Apps','linkedin-career.jpg','12 Months ₹1299 • Reference Price ₹28788','Popular',[['12 Months',1299]]],
  ['YouTube Premium','Premium Apps','youtube.svg','1 Month ₹49 • 3 Months ₹189 • 6 Months ₹399<br>Activation on your mail','Offer',[['1 Month',49],['3 Months',189],['6 Months',399]]],
  ['Hoichoi Premium','Premium Apps','hoichoi-tool.jpg','1 Month ₹59 • 6 Months ₹299 • 1 Year ₹399','Popular',[['1 Month',59],['6 Months',299],['1 Year',399]]],
  ['Canva Pro Personal','Premium Apps','canva.svg','6 Months ₹199 • 1 Year ₹299','Popular',[['6 Months',199],['1 Year',299]]],

  // Combos
  ['Netflix + Prime Video Combo','Combos','netflix-prime-combo.webp','1 Year ₹1499 • Combined streaming plan','Offer',[['1 Year',1499]]],
  ['JioHotstar + Hoichoi + SonyLIV Combo','Combos','jiohotstar-hoichoi-sonyliv-combo.webp','1 Month ₹149 • Combo access','Offer',[['1 Month',149]]],
  ['JioHotstar + Prime + ZEE5 + SonyLIV Combo','Combos','jiohotstar-prime-zee5-sonyliv-combo.webp','6 Months ₹999 • 1 Year ₹1499','Popular',[['6 Months',999],['1 Year',1499]]],
  ['Apple TV+ + Apple Music Combo','Combos','apple-tv-music-combo.webp','6 Months ₹699 • Combo subscription','Trending',[['6 Months',699]]],
  ['ZEE5 + SonyLIV Combo','Combos','zee5-sonyliv-combo.webp','1 Year ₹699 • Combo subscription','Offer',[['1 Year',699]]],
  ['Netflix + Prime Video Combo – Premium','Combos','netflix-prime-combo-2.webp','1 Year ₹1499 • Premium combo','New',[['1 Year',1499]]],
  ['Play OTT Combo','Combos','jiohotstar-banner.jpg','Yearly ₹699 • 25+ OTT • Up to 5 Devices','Popular',[['Yearly Plan',699]]],

  // IBOSOL
  ['IBOSOL Premium Player Activation','IBOSOL Player','ibosol-reseller-panel.png','1 Year ₹600 • Lifetime ₹1199','New',[['1 Year',600],['Lifetime',1199]]],
  ['IBOSOL Reseller Panel','IBOSOL Player','ibosol-reseller-panel.png','20 Credits ₹6000 • 50 Credits ₹14000 • 100 Credits ₹28000<br>Activation on your mail','Popular',[['20 Credits',6000],['50 Credits',14000],['100 Credits',28000]]]
];

let cat='All', cart=0, sel='', selPlan=null, qty=1;
const WA='917668677629';

function esc(s){return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'");}
function card(x){
  return `<article class="card"><span class="badge">${x[4]}</span><img src="${x[2]}" alt="${x[0]}" onerror="this.style.display='none'"><div class="info"><div class="catMini">${x[1]}</div><h3>${x[0]}</h3><div class="price">${x[3]}</div><button class="buy" onclick="checkout('${esc(x[0])}')">🛒 Buy Now</button></div></article>`;
}
function matches(x,q){return x[0].toLowerCase().includes(q)||x[1].toLowerCase().includes(q);}
function render(){
  const q=(document.getElementById('search')?.value||'').toLowerCase().trim();
  const list=P.filter(x=> (cat==='All'||x[1]===cat||(cat==='Offers'&&x[4]==='Offer')) && matches(x,q));
  const tv=P.filter(x=>x[1]==='TV Subscriptions' && (cat==='All'||cat==='TV Subscriptions') && matches(x,q));
  const main=list.filter(x=>x[1]!=='TV Subscriptions');
  document.getElementById('products').innerHTML=main.map(card).join('')||'<p class="empty">No products found.</p>';
  document.getElementById('tvProducts').innerHTML=tv.map(card).join('')||'<p class="empty">No TV plans found.</p>';
  document.getElementById('tvPlans').style.display=(cat==='All'||cat==='TV Subscriptions')?'block':'none';
  document.getElementById('resultTitle').textContent=cat==='All'?'🔥 Popular Subscriptions':`🔥 ${cat}`;
  document.querySelectorAll('[data-cat]').forEach(b=>b.classList.toggle('activeCat',b.dataset.cat===cat));
}
function filterCat(c){cat=c;render();window.scrollTo({top:document.querySelector('main').offsetTop-70,behavior:'smooth'});}
function filterProducts(){render();}
function checkout(x){sel=x;qty=1;selPlan=P.find(p=>p[0]===x);document.getElementById('modal').classList.add('show');document.getElementById('paymentBox').style.display='none';renderPlans();}
function renderPlans(){
  const opts=selPlan?.[5]||[];
  document.getElementById('planOptions').innerHTML=opts.map((o,i)=>`<button class="planBtn ${i===0?'active':''}" onclick="selectPlan(${i})">${o[0]}${o[1]?' • ₹'+o[1]:''}</button>`).join('');
  selectPlan(0);
}
function selectPlan(i){
  const opts=selPlan[5], o=opts[i]; selPlan._selectedIndex=i;
  document.querySelectorAll('.planBtn').forEach((b,j)=>b.classList.toggle('active',j===i));
  const total=o[1]*qty;
  document.getElementById('qty').textContent=qty;
  document.getElementById('total').textContent=o[1]?'₹'+total:'Contact';
  document.getElementById('payAmount').textContent=o[1]?'₹'+total:'Contact';
  document.getElementById('detailTitle').innerHTML=`<strong>👤 ${sel}</strong><br><span>Selected Plan: ${o[0]}</span>`;
  document.getElementById('detailText').textContent=o[1]?'Plan price updates automatically with quantity. Complete payment by QR and send confirmation on WhatsApp.':'Contact us for the latest available plan and price.';
  document.getElementById('features').innerHTML='<div class="featureList"><div>✔ Fast activation</div><div>✔ Secure QR checkout</div><div>✔ WhatsApp order support</div></div>';
}
function changeQty(n){qty=Math.max(1,qty+n);selectPlan(selPlan?selPlan._selectedIndex||0:0);}
function closeModal(){document.getElementById('modal').classList.remove('show');}
function addToCart(){cart+=qty;document.getElementById('cartCount').textContent=cart;toast('🛒 Added to cart — you can continue shopping.');}
function payNow(){
  if(!selPlan)return;
  const o=selPlan[5][selPlan._selectedIndex||0];
  if(!o||!o[1]){waOrder();return;}
  const amount=o[1]*qty;
  document.getElementById('paymentBox').style.display='block';
  document.getElementById('qrAmount').textContent='₹'+amount;
  document.getElementById('paymentBox').scrollIntoView({behavior:'smooth',block:'center'});
}
function copyUPI(){navigator.clipboard?.writeText('Q00403870@ybl').then(()=>toast('✅ UPI ID copied')).catch(()=>toast('UPI ID: Q00403870@ybl'));}
function waOrder(){
  const o=selPlan?.[5]?.[selPlan._selectedIndex||0];
  const n=document.getElementById('name').value||'Customer';
  const e=document.getElementById('email').value||'';
  const m=document.getElementById('mobile').value||'';
  const amount=o&&o[1]?(o[1]*qty):0;
  const msg='Hello, I want to order:\n'+sel+'\nPlan: '+(o?.[0]||'Please confirm')+'\nQuantity: '+qty+'\nAmount: '+(amount?'₹'+amount:'Please confirm')+'\nName: '+n+'\nEmail: '+e+'\nMobile: '+m;
  closeModal();
  showOrderNotice('Order details ready','WhatsApp is opening. Please send the order message to complete your request.');
  setTimeout(()=>location.href='https://wa.me/'+WA+'?text='+encodeURIComponent(msg),900);
}
function showCart(){toast(cart?('🛒 Cart items: '+cart):'🛒 Your cart is empty. Tap Buy Now to select a plan.');}
function go(){window.scrollTo({top:0,behavior:'smooth'});}

function toast(text){
  const t=document.getElementById('toast');t.textContent=text;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),3200);
}
function showOrderNotice(title,text){
  document.getElementById('noticeTitle').textContent=title;
  document.getElementById('noticeText').textContent=text;
  document.getElementById('orderNotice').classList.add('show');
  clearTimeout(window.__notice);window.__notice=setTimeout(()=>document.getElementById('orderNotice').classList.remove('show'),5200);
}
function closeNotice(){document.getElementById('orderNotice').classList.remove('show');}

function initSale(){
  const key='pet_flash_sale_end_v2';
  let end=Number(localStorage.getItem(key)||0);
  if(!end || end<Date.now()){end=Date.now()+((3*60*60)+(12*60)+21)*1000;localStorage.setItem(key,String(end));}
  function tick(){
    let s=Math.max(0,Math.floor((end-Date.now())/1000));
    const h=String(Math.floor(s/3600)).padStart(2,'0');s%=3600;
    const m=String(Math.floor(s/60)).padStart(2,'0');const sec=String(s%60).padStart(2,'0');
    document.getElementById('hours').textContent=h;document.getElementById('mins').textContent=m;document.getElementById('secs').textContent=sec;
    if(!s && !h && !m) localStorage.removeItem(key);
  }
  tick();setInterval(tick,1000);
}
function initOfferPopup(){
  if(sessionStorage.getItem('pet_offer_seen'))return;
  setTimeout(()=>{document.getElementById('offerPopup').classList.add('show');sessionStorage.setItem('pet_offer_seen','1');},5000);
}
function closeOffer(){document.getElementById('offerPopup').classList.remove('show');}

window.addEventListener('DOMContentLoaded',()=>{render();initSale();initOfferPopup();});
