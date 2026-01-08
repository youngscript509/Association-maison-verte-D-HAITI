
// Utility: smooth scroll
function scrollToSection(sel){
  document.querySelector(sel).scrollIntoView({behavior:'smooth', block:'start'});
}

// Preloader: fade out on load
window.addEventListener('load', ()=>{
  setTimeout(()=>{
    const p = document.getElementById('preloader');
    p.style.transform = 'translateY(-15px)';
    p.style.opacity = '0';
    setTimeout(()=> p.remove(), 600);
  }, 800);
});


