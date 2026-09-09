const WHATSAPP='917668677629';
const plans=[
{name:'Netflix 4K',price:99,old:'',cat:'subscription',icon:'N',badge:'POPULAR',meta:'1 Month'},
{name:'Netflix 4K',price:249,cat:'subscription',icon:'N',badge:'VALUE',meta:'3 Months'},
{name:'Netflix 4K',price:399,cat:'subscription',icon:'N',badge:'VALUE',meta:'6 Months'},
{name:'Netflix 4K',price:699,cat:'subscription',icon:'N',badge:'BEST VALUE',meta:'12 Months'},
{name:'Netflix 4K Shared',price:299,cat:'shared',icon:'N',badge:'SHARED',meta:'1 Month • 1 Device • On Your Number'},
{name:'JioHotstar Super',price:89,cat:'subscription',icon:'J+',badge:'POPULAR',meta:'1 Month'},
{name:'JioHotstar Super',price:199,cat:'subscription',icon:'J+',badge:'VALUE',meta:'3 Months'},
{name:'JioHotstar Super',price:299,cat:'subscription',icon:'J+',badge:'VALUE',meta:'6 Months'},
{name:'JioHotstar Super',price:499,cat:'subscription',icon:'J+',badge:'BEST VALUE',meta:'12 Months'},
{name:'JioHotstar Shared',price:899,cat:'shared',icon:'J+',badge:'SHARED',meta:'12 Months • On Your Number'},
{name:'ZEE5',price:399,cat:'subscription',icon:'Z5',badge:'ON NUMBER',meta:'1 Year • On Your Number'},
{name:'SonyLIV',price:399,cat:'subscription',icon:'SL',badge:'ON NUMBER',meta:'1 Year • On Your Number'},
{name:'Starshare IPTV',price:150,cat:'tools',icon:'▶',badge:'POPULAR',meta:'1 Month'},
{name:'Starshare IPTV',price:399,cat:'tools',icon:'▶',badge:'VALUE',meta:'3 Months'},
{name:'Starshare IPTV',price:699,cat:'tools',icon:'▶',badge:'VALUE',meta:'6 Months'},
{name:'Starshare IPTV',price:1299,cat:'tools',icon:'▶',badge:'BEST VALUE',meta:'12 Months'},
{name:'BOSTV Prime IPTV',price:299,cat:'tools',icon:'4K',badge:'POPULAR',meta:'3 Months'},
{name:'BOSTV Prime IPTV',price:549,cat:'tools',icon:'4K',badge:'VALUE',meta:'6 Months'},
{name:'BOSTV Prime IPTV',price:899,cat:'tools',icon:'4K',badge:'BEST VALUE',meta:'12 Months'},
{name:'Rolex TV',price:249,cat:'tools',icon:'TV',badge:'POPULAR',meta:'3 Months'},
{name:'Rolex TV',price:449,cat:'tools',icon:'TV',badge:'VALUE',meta:'6 Months'},
{name:'Rolex TV',price:799,cat:'tools',icon:'TV',badge:'BEST VALUE',meta:'12 Months'}
];
let current='all';
function setCat(c){current=c;render()}
function order(x){const text=`Hi, I want to order ${x.name} - ${x.meta} - ₹${x.price}.`;window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,'_blank')}
function render(){const q=(document.getElementById('search')?.value||'').toLowerCase();const custom=JSON.parse(localStorage.petProducts||'[]');const a=plans.concat(custom).filter(x=>(current==='all'||x.cat===current)&&(`${x.name} ${x.meta}`.toLowerCase().includes(q)));document.getElementById('grid').innerHTML=a.map(x=>`<article class="card"><div class="pic">${x.icon||'✨'}</div><span class="badge">${x.badge||'NEW'}</span><h3>${x.name}</h3><p class="meta">${x.meta||''}</p><p class="price">₹${x.price}</p><button class="buy" onclick='order(${JSON.stringify(x)})'>Order on WhatsApp</button></article>`).join('')||'<p>No plans found.</p>'}
render();
