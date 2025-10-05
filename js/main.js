
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for reveal animations
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, {threshold: 0.15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Mobile nav toggle
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if(btn){
    btn.addEventListener('click', ()=>{
      menu.classList.toggle('hidden');
    });
  }

  // Smooth close mobile menu on anchor click
  document.querySelectorAll('#mobileMenu a').forEach(a => a.addEventListener('click', ()=>{
    menu.classList.add('hidden');
  }));
});
