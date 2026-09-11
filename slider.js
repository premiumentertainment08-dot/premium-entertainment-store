
(function(){
 const row=document.querySelector('.heroApps');
 if(!row) return;
 const items=[...row.children];
 const dots=document.createElement('div'); dots.className='sliderDots';
 items.forEach((_,i)=>{const b=document.createElement('button'); b.setAttribute('aria-label','Slide '+(i+1)); b.onclick=()=>go(i); dots.appendChild(b)});
 row.parentElement.appendChild(dots);
 let i=0,timer;
 function go(n){i=(n+items.length)%items.length; row.scrollTo({left:Math.max(0,items[i].offsetLeft-row.clientWidth/2+items[i].clientWidth/2),behavior:'smooth'}); [...dots.children].forEach((d,k)=>d.classList.toggle('active',k===i));}
 function start(){clearInterval(timer);timer=setInterval(()=>go(i+1),3000)}
 row.addEventListener('touchstart',()=>clearInterval(timer),{passive:true}); row.addEventListener('touchend',start,{passive:true}); row.addEventListener('mouseenter',()=>clearInterval(timer)); row.addEventListener('mouseleave',start); go(0); start();
})();
