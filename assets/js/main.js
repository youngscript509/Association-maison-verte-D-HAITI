
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

// floating leaves random animation
const leaves = [...document.querySelectorAll('.leaf')];
function floatLeaves(){
  leaves.forEach(el=>{
    const x = Math.random()*60;
    const y = Math.random()*60;
    el.style.transform = `translate(${x}px, ${y}px) rotate(${(Math.random()*40)-20}deg)`;
    el.style.opacity = (0.08 + Math.random()*0.26).toFixed(2);
  });
}
setInterval(floatLeaves, 2600);

// Nice popup (instead of alert)
function popup(message){
  const box = document.createElement('div');
  box.className = 'popup-msg';
  box.textContent = message;
  Object.assign(box.style,{
    position:'fixed',bottom:'20px',right:'20px',
    background:'var(--accent)',
    padding:'14px 18px',borderRadius:'12px',color:'#fff',
    boxShadow:'0 8px 25px rgba(0,0,0,0.18)',
    fontSize:'15px',zIndex:9999,opacity:'0',transition:'0.3s'
  });
  document.body.appendChild(box);
  setTimeout(()=> box.style.opacity='1', 10);
  setTimeout(()=>{box.style.opacity='0'; setTimeout(()=>box.remove(),300)}, 3000);
}

// Simple donate simulation
let selected = 0;
function donate(x){
  selected = x;
  const el = document.getElementById('don-amount');
  el.textContent = `Gdes ${x * 50}`;
  el.style.color = 'var(--green-1)';
}
function confirmDonate(){
  if(!selected){popup("Sélectionnez d'abord un montant.");return}
  popup(`Merci — simulation : intention enregistrée (Gdes ${selected * 50})`);

  // gamified badge
  const badge = document.createElement('div');
  badge.textContent = 'Badge débloqué : Éco‑Héros Débutant 🌱';
  Object.assign(badge.style,{
    position:'fixed',left:'50%',top:'50%',transform:'translate(-50%,-50%) scale(0.6)',opacity:'0',
    background:'linear-gradient(90deg,var(--accent),#ffe1ba)',padding:'18px 22px',
    borderRadius:'18px',fontSize:'18px',fontWeight:'600',zIndex:9999,
    boxShadow:'0 10px 30px rgba(0,0,0,0.2)',transition:'0.4s'
  });
  document.body.appendChild(badge);
  setTimeout(()=>{badge.style.transform='translate(-50%,-50%) scale(1)';badge.style.opacity='1'},50);
  setTimeout(()=>{badge.style.opacity='0';badge.style.transform='translate(-50%,-50%) scale(0.6)'},2500);
  setTimeout(()=>badge.remove(),3000);
}

// contact mock
function sendContact(){
  const status=document.getElementById('contact-status');
  status.textContent='Envoi...';
  setTimeout(()=>{
    status.textContent='Message envoyé — merci de nous avoir contactés.';
    document.getElementById('contact-form').reset();
  },900);
}

// Gamified focus for hero cards
document.querySelectorAll('.hero-card').forEach(card=>{
  card.addEventListener('focus',()=> card.style.transform='translateY(-10px) scale(1.02)');
  card.addEventListener('blur',()=> card.style.transform='');
});


// =======================
// HERO SLIDER ENHANCED
// =======================
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let sliderPaused = false;

function showSlide(i){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

function autoSlide(){
  if(!sliderPaused){ slideIndex = (slideIndex+1)%slides.length; showSlide(slideIndex);} }
setInterval(autoSlide, 4800);

dots.forEach((d,i)=> d.addEventListener('click',()=>{ sliderPaused=true; slideIndex=i; showSlide(i); setTimeout(()=>sliderPaused=false,6000);}));

// Swipe mobile
let startX=0;
document.getElementById('hero').addEventListener('touchstart', e=> startX = e.touches[0].clientX);
document.getElementById('hero').addEventListener('touchend', e=>{
  let endX=e.changedTouches[0].clientX;
  if(endX < startX - 50){ slideIndex=(slideIndex+1)%slides.length; showSlide(slideIndex);} 
  if(endX > startX + 50){ slideIndex=(slideIndex-1+slides.length)%slides.length; showSlide(slideIndex); }
});

// =======================
// NATURAL EFFECTS
// =======================
// Falling leaves
function spawnLeaf(){
  let leaf=document.createElement('div');
  leaf.className='leaf-fall';
  leaf.style.left=Math.random()*100+'%';
  leaf.style.animationDuration=(5+Math.random()*5)+'s';
  document.getElementById('leaf-container').appendChild(leaf);
  setTimeout(()=>leaf.remove(),10000);
}
setInterval(spawnLeaf,900);

// Mist moving
setInterval(()=>{
  document.getElementById('mist-layer').style.opacity = 0.3 + Math.random()*0.25;
},2000);

// =======================
// AUDIO PLAYER
// =======================


  function initMobileMenu() {
  if(window.innerWidth <= 850){
    const menuBtn = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    const overlay = document.getElementById("nav-overlay");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.add("active");
     
      nav.style.display="block";
      nav.classList.toggle("open");
      overlay.classList.toggle("visible");
      overlay.style.display="block";
    });

    document.querySelectorAll("#main-nav a").forEach(link => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        nav.style.display="none";
        nav.classList.remove("open");
        overlay.classList.remove("visible");
        overlay.style.display="none";
      });
    });

    overlay.addEventListener("click", () => {
         menuBtn.classList.remove("active");
        nav.style.display="none";
        nav.classList.remove("open");
        overlay.classList.remove("visible");
        overlay.style.display="none";
    });
  }
}

// Init au chargement
window.addEventListener('load', initMobileMenu);

// Recalcul si redimensionnement
window.addEventListener('resize', initMobileMenu);


