document.addEventListener('DOMContentLoaded',()=>{
  const root=document.documentElement;
  const toggle=document.querySelectorAll('#themeToggle');
  const saved=localStorage.getItem('theme');
  if(saved==='dark') root.classList.add('dark');
  toggle.forEach(t=>t.addEventListener('click',()=>{
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark')?'dark':'light');
  }));

  const io=new IntersectionObserver((en)=>{
    en.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const btn=document.getElementById('navToggle');
  const menu=document.getElementById('mobileMenu');
  if(btn&&menu){
    btn.addEventListener('click',()=>menu.classList.toggle('hidden'));
    document.querySelectorAll('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>menu.classList.add('hidden')));
  }

  const track=document.querySelector('[data-carousel-track]');
  if(track){
    const prev=document.querySelector('[data-carousel-prev]');
    const next=document.querySelector('[data-carousel-next]');
    let i=0;const cards=track.children;
    const show=()=>track.style.transform=`translateX(-${i*100}%)`;
    if(next) next.addEventListener('click',()=>{i=(i+1)%cards.length;show();});
    if(prev) prev.addEventListener('click',()=>{i=(i-1+cards.length)%cards.length;show();});
  }
});