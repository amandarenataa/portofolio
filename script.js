const cDot=document.getElementById('cDot'),cRing=document.getElementById('cRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function tick(){
  cDot.style.transform=`translate(${mx-4}px,${my-4}px)`;
  rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;
  cRing.style.transform=`translate(${rx-18}px,${ry-18}px)`;
  requestAnimationFrame(tick);
})();
window.addEventListener('scroll',()=>{
  document.getElementById('spBar').style.width=(window.scrollY/(document.body.scrollHeight-innerHeight)*100)+'%';
  document.querySelector('nav').style.boxShadow=window.scrollY>60?'0 4px 40px rgba(0,0,0,0.5)':'none';
});
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-'+btn.dataset.tab).classList.add('active');
  });
});
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('visible'),+(e.target.dataset.delay||0));
      io.unobserve(e.target);
    }
  });
},{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
['.project-card','.award-card','.research-card','.cert-card','.timeline-item','.edu-card'].forEach(sel=>{
  document.querySelectorAll(sel).forEach((el,i)=>{el.dataset.delay=i*85;io.observe(el);});
});
// Photo drag-to-reposition
(function(){
  const img = document.getElementById('heroImg');
  const hint = document.getElementById('photoHint');
  if(!img) return;

  // Use natural size for best quality — let object-fit handle display
  let posX = 50, posY = 15; // % offsets (default: center-top)
  let isDragging = false, startX, startY, startPosX, startPosY;

  function applyPos(){
    img.style.objectPosition = posX+'% '+posY+'%';
  }
  applyPos();

  img.addEventListener('mousedown', e=>{
    isDragging = true;
    startX = e.clientX; startY = e.clientY;
    startPosX = posX; startPosY = posY;
    e.preventDefault();
  });
  document.addEventListener('mousemove', e=>{
    if(!isDragging) return;
    const frame = img.parentElement;
    const dx = (e.clientX - startX) / frame.offsetWidth * -100;
    const dy = (e.clientY - startY) / frame.offsetHeight * -100;
    posX = Math.min(100, Math.max(0, startPosX + dx));
    posY = Math.min(100, Math.max(0, startPosY + dy));
    applyPos();
  });
  document.addEventListener('mouseup', ()=>{
    if(isDragging){ isDragging = false; }
  });

  // Touch support
  img.addEventListener('touchstart', e=>{
    isDragging = true;
    startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    startPosX = posX; startPosY = posY;
  },{passive:true});
  document.addEventListener('touchmove', e=>{
    if(!isDragging) return;
    const frame = img.parentElement;
    const dx = (e.touches[0].clientX - startX) / frame.offsetWidth * -100;
    const dy = (e.touches[0].clientY - startY) / frame.offsetHeight * -100;
    posX = Math.min(100, Math.max(0, startPosX + dx));
    posY = Math.min(100, Math.max(0, startPosY + dy));
    applyPos();
  },{passive:true});
  document.addEventListener('touchend', ()=>{ isDragging = false; });

  // Hide hint after first drag
  img.addEventListener('mousedown', ()=>{
    setTimeout(()=>hint && hint.classList.add('hidden'), 1500);
  },{once:true});
})();

// Project Filter Functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
      if (filter === 'all') {
        project.style.display = 'flex';
      } else {
        const category = project.dataset.category;
        project.style.display = category === filter ? 'flex' : 'none';
      }
    });
    
    // After filtering, reapply view more logic
    applyViewMoreLogic('projects');
  });
});

// View More Functionality
function applyViewMoreLogic(section) {
  let grid, cards, viewMoreBtn, cardsPerRow, initialRows;
  
  if (section === 'projects') {
    grid = document.querySelector('.projects-grid');
    cards = Array.from(document.querySelectorAll('.project-card')).filter(card => card.style.display !== 'none');
    viewMoreBtn = document.querySelector('#projectsViewMore');
    cardsPerRow = getCardsPerRow(grid);
    initialRows = 2;
  } else if (section === 'awards') {
    grid = document.querySelector('.awards-grid');
    cards = Array.from(document.querySelectorAll('.award-card'));
    viewMoreBtn = document.querySelector('#awardsViewMore');
    cardsPerRow = getCardsPerRow(grid);
    initialRows = 2;
  } else if (section === 'certifications') {
    grid = document.querySelector('.certs-grid');
    cards = Array.from(document.querySelectorAll('.cert-card'));
    viewMoreBtn = document.querySelector('#certsViewMore');
    cardsPerRow = getCardsPerRow(grid);
    initialRows = 2;
  }
  
  const initialCardCount = cardsPerRow * initialRows;
  
  // Hide cards beyond initial rows
  cards.forEach((card, index) => {
    if (index >= initialCardCount) {
      card.classList.add('hidden');
    } else {
      card.classList.remove('hidden');
    }
  });
  
  // Show/hide view more button
  if (cards.length > initialCardCount) {
    viewMoreBtn.classList.remove('hidden');
  } else {
    viewMoreBtn.classList.add('hidden');
  }
}

function getCardsPerRow(grid) {
  const gridStyle = window.getComputedStyle(grid);
  const gridTemplateColumns = gridStyle.gridTemplateColumns;
  return gridTemplateColumns.split(' ').length;
}

// View More button click handlers
document.querySelector('#projectsViewMore .view-more-btn').addEventListener('click', function() {
  const cards = Array.from(document.querySelectorAll('.project-card')).filter(card => card.style.display !== 'none');
  cards.forEach(card => card.classList.remove('hidden'));
  document.querySelector('#projectsViewMore').classList.add('hidden');
});

document.querySelector('#awardsViewMore .view-more-btn').addEventListener('click', function() {
  document.querySelectorAll('.award-card').forEach(card => card.classList.remove('hidden'));
  document.querySelector('#awardsViewMore').classList.add('hidden');
});

document.querySelector('#certsViewMore .view-more-btn').addEventListener('click', function() {
  document.querySelectorAll('.cert-card').forEach(card => card.classList.remove('hidden'));
  document.querySelector('#certsViewMore').classList.add('hidden');
});

// Initialize view more on page load
window.addEventListener('load', () => {
  applyViewMoreLogic('projects');
  applyViewMoreLogic('awards');
  applyViewMoreLogic('certifications');
});