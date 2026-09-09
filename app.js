const WHATSAPP='917668677629';
const logos={
  netflix:'netflix.svg',
  jiohotstar:'jiohotstar.svg',
  zee5:'zee5.svg',
  sonyliv:'sonyliv.svg',
  youtube:'youtube.svg',
  hoichoi:'hoichoi.svg',
  primevideo:'primevideo.svg',
  canva:'canva.svg',
  spotify:'spotify.svg',
  starshare:'starshare-iptv.png',
  bostv:'bostv-prime-iptv.png',
  rolex:'rolex-tv.png'
};
const plans=[
{name:'Netflix 4K',price:99,cat:'subscription',logo:'netflix',fallback:'N',badge:'POPULAR',meta:'1 Month'},
{name:'Netflix 4K',price:249,cat:'subscription',logo:'netflix',fallback:'N',badge:'VALUE',meta:'3 Months'},
{name:'Netflix 4K',price:399,cat:'subscription',logo:'netflix',fallback:'N',badge:'VALUE',meta:'6 Months'},
{name:'Netflix 4K',price:699,cat:'subscription',logo:'netflix',fallback:'N',badge:'BEST VALUE',meta:'12 Months'},
{name:'Netflix 4K Shared',price:299,cat:'shared',logo:'netflix',fallback:'N',badge:'SHARED',meta:'1 Month • 1 Device • On Your Number'},
{name:'JioHotstar Premium 4K',price:249,cat:'subscription',logo:'jiohotstar',fallback:'J+',badge:'POPULAR',meta:'3 Months • 1 Device'},
{name:'JioHotstar Premium 4K',price:449,cat:'subscription',logo:'jiohotstar',fallback:'J+',badge:'VALUE',meta:'6 Months • 1 Device'},
{name:'JioHotstar Premium 4K',price:749,cat:'subscription',logo:'jiohotstar',fallback:'J+',badge:'BEST VALUE',meta:'12 Months • 1 Device'},
{name:'ZEE5',price:399,cat:'subscription',logo:'zee5',fallback:'Z5',badge:'ON NUMBER',meta:'1 Year • On Your Number'},
{name:'SonyLIV Premium Shared',price:99,cat:'shared',logo:'sonyliv',fallback:'SL',badge:'POPULAR',meta:'1 Month • 1 Device'},
{name:'SonyLIV Premium Shared',price:149,cat:'shared',logo:'sonyliv',fallback:'SL',badge:'VALUE',meta:'3 Months • 1 Device'},
{name:'SonyLIV Premium Shared',price:199,cat:'shared',logo:'sonyliv',fallback:'SL',badge:'VALUE',meta:'6 Months • 1 Device'},
{name:'SonyLIV Premium Shared',price:299,cat:'shared',logo:'sonyliv',fallback:'SL',badge:'BEST VALUE',meta:'1 Year • 1 Device'},
{name:'SonyLIV Premium Personal',price:699,cat:'subscription',logo:'sonyliv',fallback:'SL',badge:'PERSONAL',meta:'1 Year • On Your Number • 5 Devices'},
{name:'YouTube Premium',price:49,cat:'subscription',logo:'youtube',fallback:'YT',badge:'POPULAR',meta:'1 Month • Activation On Your Mail'},
{name:'YouTube Premium',price:189,cat:'subscription',logo:'youtube',fallback:'YT',badge:'VALUE',meta:'3 Months • Activation On Your Mail'},
{name:'YouTube Premium',price:399,cat:'subscription',logo:'youtube',fallback:'YT',badge:'BEST VALUE',meta:'6 Months • Activation On Your Mail'},
{name:'Hoichoi Premium',price:59,cat:'subscription',logo:'hoichoi',fallback:'H',badge:'POPULAR',meta:'1 Month'},
{name:'Hoichoi Premium',price:299,cat:'subscription',logo:'hoichoi',fallback:'H',badge:'VALUE',meta:'6 Months'},
{name:'Hoichoi Premium',price:399,cat:'subscription',logo:'hoichoi',fallback:'H',badge:'BEST VALUE',meta:'1 Year'},
{name:'Prime Video Premium',price:349,cat:'subscription',logo:'primevideo',fallback:'P',badge:'VALUE',meta:'6 Months • Personal Email • 5 Devices'},
{name:'Prime Video Premium',price:599,cat:'subscription',logo:'primevideo',fallback:'P',badge:'BEST VALUE',meta:'1 Year • Personal Email • 5 Devices'},
{name:'Canva Pro Personal',price:199,cat:'subscription',logo:'canva',fallback:'C',badge:'POPULAR',meta:'6 Months • Your Own Email ID'},
{name:'Canva Pro Personal',price:299,cat:'subscription',logo:'canva',fallback:'C',badge:'BEST VALUE',meta:'1 Year • Your Own Email ID'},
{name:'Spotify Standard',price:99,cat:'subscription',logo:'spotify',fallback:'S',badge:'POPULAR',meta:'2 Months • Personal Email Activation'},
{name:'Spotify Standard',price:149,cat:'subscription',logo:'spotify',fallback:'S',badge:'VALUE',meta:'3 Months • Personal Email Activation'},
{name:'Starshare IPTV',price:150,cat:'tools',logo:'starshare',fallback:'STAR',badge:'POPULAR',meta:'1 Month'},
{name:'Starshare IPTV',price:399,cat:'tools',logo:'starshare',fallback:'STAR',badge:'VALUE',meta:'3 Months'},
{name:'Starshare IPTV',price:699,cat:'tools',logo:'starshare',fallback:'STAR',badge:'VALUE',meta:'6 Months'},
{name:'Starshare IPTV',price:1299,cat:'tools',logo:'starshare',fallback:'STAR',badge:'BEST VALUE',meta:'12 Months'},
{name:'BOSTV Prime IPTV',price:299,cat:'tools',logo:'bostv',fallback:'BOSTV',badge:'POPULAR',meta:'3 Months'},
{name:'BOSTV Prime IPTV',price:549,cat:'tools',logo:'bostv',fallback:'BOSTV',badge:'VALUE',meta:'6 Months'},
{name:'BOSTV Prime IPTV',price:899,cat:'tools',logo:'bostv',fallback:'BOSTV',badge:'BEST VALUE',meta:'12 Months'},
{name:'Rolex TV',price:249,cat:'tools',logo:'rolex',fallback:'ROLEX',badge:'POPULAR',meta:'3 Months'},
{name:'Rolex TV',price:449,cat:'tools',logo:'rolex',fallback:'ROLEX',badge:'VALUE',meta:'6 Months'},
{name:'Rolex TV',price:799,cat:'tools',logo:'rolex',fallback:'ROLEX',badge:'BEST VALUE',meta:'12 Months'}
];
let current='all';
function setCat(c){current=c;render()}
function order(x){const text=`Hi, I want to order ${x.name} - ${x.meta} - ₹${x.price}.`;window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,'_blank')}
function logoHtml(x){const url=logos[x.logo]; return `<div class="pic"><img src="${url}" alt="${x.name} logo" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span>${x.fallback||'★'}</span></div>`}
function render(){const q=(document.getElementById('search')?.value||'').toLowerCase();const custom=JSON.parse(localStorage.petProducts||'[]');const a=plans.concat(custom).filter(x=>(current==='all'||x.cat===current)&&(`${x.name} ${x.meta}`.toLowerCase().includes(q)));document.getElementById('grid').innerHTML=a.map(x=>`<article class="card">${logoHtml(x)}<span class="badge">${x.badge||'NEW'}</span><h3>${x.name}</h3><p class="meta">${x.meta||''}</p><p class="price">₹${x.price}</p><button class="buy" onclick='order(${JSON.stringify(x)})'>💬 Order on WhatsApp</button></article>`).join('')||'<p>No plans found.</p>'}
render();'
