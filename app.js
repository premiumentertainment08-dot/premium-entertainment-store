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
['OPPLEX TV','TV Subscriptions','opplex-tv.jpg','1 Month ₹150 • 3 Months ₹349<br>6 Months ₹599 • 12 Months ₹999','Popular'],
['ZUMTV','TV Subscriptions','zum-tv.jpg','3 Months ₹499 • 6 Months ₹699 • 12 Months ₹1049','Offer'],
['FIBER STREAM TV','TV Subscriptions','fiber-stream-tv.jpg','3 Months ₹299 • 6 Months ₹499 • 12 Months ₹899','New'],
['STAR TV','TV Subscriptions','star-tv.jpg','3 Months ₹499 • 6 Months ₹799 • 12 Months ₹1299','Popular'],
['ZIGGTV','TV Subscriptions','premium-logo.png','3 Months ₹399 • 6 Months ₹699 • 12 Months ₹1049','New'],
['YouTube Premium – Family','TV Subscriptions','youtube-family.jpg','1 Month ₹149 • 5 Mails Supported<br>Mobile • Laptop • TV','Offer']
];
let cat='All',cart=0,sel='';
function card(x){return `<article class="card"><span class="badge">${x[4]}</span><img src="${x[2]}" alt="${x[0]}"><div class="info"><h3>${x[0]}</h3><div class="price">${x[3]}</div><button class="buy" onclick="checkout('${x[0].replaceAll("'","\\'")}')">🛒 Buy Now</button></div></article>`}
function render(){let q=(document.getElementById('search').value||'').toLowerCase();let list=P.filter(x=>x[1]!=='TV Subscriptions'&&(cat==='All'||x[1]===cat||cat==='Offers'&&x[4]==='Offer')&&x[0].toLowerCase().includes(q));document.getElementById('products').innerHTML=list.map(card).join('')||'<p>No products found.</p>';let tv=P.filter(x=>x[1]==='TV Subscriptions'&&(cat==='All'||cat==='TV Subscriptions')&&x[0].toLowerCase().includes(q));document.getElementById('tvProducts').innerHTML=tv.map(card).join('')||'<p>No TV plans found.</p>';document.getElementById('tvPlans').style.display=(cat==='All'||cat==='TV Subscriptions')?'block':'none'}
function filterCat(c){cat=c;render();scrollTo({top:document.querySelector('main').offsetTop-70,behavior:'smooth'})}function filterProducts(){render()}function checkout(x){sel=x;document.getElementById('selected').textContent='Selected: '+x;document.getElementById('modal').classList.add('show')}function closeModal(){document.getElementById('modal').classList.remove('show')}function payNow(){let n=document.getElementById('name').value||'Customer';location.href='upi://pay?pa=Q00403870@ybl&pn=Universal%20Telecommunication%20Service&cu=INR&tn='+encodeURIComponent(sel+' - '+n)}function waOrder(){let n=document.getElementById('name').value||'Customer';let m=document.getElementById('mobile').value||'';location.href='https://wa.me/917668677629?text='+encodeURIComponent('Hello, I want to order: '+sel+'\nName: '+n+'\nMobile: '+m)}function showCart(){alert('Buy Now checkout is ready. Add your selected plan by tapping Buy Now.')}function go(){window.scrollTo({top:0,behavior:'smooth'})}render();
