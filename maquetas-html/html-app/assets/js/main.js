  (function(){
    const tabs = Array.from(document.querySelectorAll('.tab-btn'));
    const panes = {
      'tab-datos'  : document.getElementById('pane-datos'),
      'tab-mant'   : document.getElementById('pane-mant'),
      'tab-tareas' : document.getElementById('pane-tareas')
    };
    function activate(id){
      tabs.forEach(btn=>{
        const on = btn.id===id;
        btn.setAttribute('aria-selected', String(on));
        panes[btn.id].hidden = !on;
      });
      panes[id].focus({preventScroll:true});
    }
    tabs.forEach(btn=>{
      btn.addEventListener('click',()=>activate(btn.id));
      btn.addEventListener('keydown',e=>{
        if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
          e.preventDefault();
          const i=tabs.indexOf(btn);
          const next=e.key==='ArrowRight'?(i+1)%tabs.length:(i-1+tabs.length)%tabs.length;
          tabs[next].focus();
        }
        if(e.key==='Enter'||e.key===' '){e.preventDefault();activate(btn.id);}
      });
    });

    // Deep-link: ?tab=tareas o #tareas
    const url = new URL(window.location.href);
    const q = (url.searchParams.get('tab') || location.hash.replace('#','')).toLowerCase();
    if(q==='mant'||q==='mantenedores') activate('tab-mant');
    else if(q==='tareas') activate('tab-tareas');

    // Ajusta --footer-h automáticamente por si cambias tipografías
    const root=document.documentElement, bar=document.querySelector('.footer-tabs');
    const setH=()=>root.style.setProperty('--footer-h',`${bar.offsetHeight}px`);
    setH(); new ResizeObserver(setH).observe(bar);
    window.addEventListener('orientationchange',()=>setTimeout(setH,200));
  })();
  
  
  
  (function () {
  const btn  = document.querySelector('.btn-engrane');
  const menu = document.querySelector('#menu-engrane') || document.querySelector('.menu-engrane');

  if (!btn || !menu) return;

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const isActive = menu.classList.toggle('active');
    btn.setAttribute('aria-expanded', String(isActive));
  });
})();
