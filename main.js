document.getElementById('y').textContent=new Date().getFullYear();
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const h=document.querySelector('.hero');
addEventListener('scroll',()=>{const y=scrollY;if(y<innerHeight)h.style.setProperty('--py',(y*.25)+'px')},{passive:true});