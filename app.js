if('IntersectionObserver'in window){document.documentElement.classList.add('js-ready');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element))}
document.getElementById('share-button')?.addEventListener('click',async()=>{const status=document.getElementById('share-status');const url=location.protocol==='file:'?document.querySelector('link[rel=canonical]').href:location.origin+location.pathname;try{if(navigator.share){await navigator.share({title:'Selah — Donde la fe nos une',text:document.querySelector('meta[property="og:description"]').content,url});status.textContent='Gracias por compartir el propósito.'}else if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(url);status.textContent='Enlace copiado. Compártelo con tu comunidad.'}else{status.textContent='Copia este enlace para compartir: '+url}}catch(error){if(error.name!=='AbortError')status.textContent='Puedes compartir copiando el enlace de esta página.'}});

const opening = document.querySelector('.opening');
if (opening) {
  const stage = opening.querySelector('.opening-stage');
  const header = document.querySelector('header');
  const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
  const passages = [...document.querySelectorAll('[data-scroll-reveal]')];
  const tourLinks = [...document.querySelectorAll('.tour-nav a')];
  const chapters = tourLinks.map(link => document.querySelector(link.hash));
  let openingStart = 0;
  let openingTravel = 0;
  let lastProgress = -1;
  let viewport = 0;
  let passageBounds = [];
  let chapterStarts = [];
  let selected = -1;
  let frame = 0;

  function fraction(value) {
    return Math.max(0, Math.min(1, value));
  }

  function paint() {
    frame = 0;
    const y = window.scrollY;
    if (openingTravel) {
      const progress = fraction((y - openingStart) / openingTravel);
      if (progress !== lastProgress) {
        opening.style.setProperty('--question-opacity', fraction(1 - (progress - .12) / .36));
        opening.style.setProperty('--answer-opacity', fraction((progress - .45) / .30));
        lastProgress = progress;
      }
    }

    if (motion.matches) {
      for (const passage of passageBounds) {
        const entering = (y + viewport * .97 - passage.top) / (viewport * .30);
        const leaving = (passage.bottom - y - viewport * .06) / (viewport * .32);
        const opacity = fraction(Math.min(entering, leaving));
        if (opacity !== passage.opacity) {
          passage.element.style.setProperty('--read-opacity', opacity);
          passage.opacity = opacity;
        }
      }
    }

    // Match the shortcut to the chapter at reading height, in either scroll direction.
    let current = 0;
    for (let i = 1; i < chapterStarts.length; i++) {
      if (y + viewport * .45 >= chapterStarts[i]) current = i;
    }
    if (current !== selected) {
      tourLinks[selected]?.removeAttribute('aria-current');
      tourLinks[current].setAttribute('aria-current', 'location');
      selected = current;
    }
  }

  function schedulePaint() {
    if (!frame) frame = requestAnimationFrame(paint);
  }

  function measure() {
    viewport = document.documentElement.clientHeight;
    opening.style.setProperty('--header-height', header.offsetHeight + 'px');
    opening.classList.toggle('is-pinned', motion.matches);
    if (stage.offsetHeight > viewport) opening.classList.remove('is-pinned');

    const y = window.scrollY;
    openingStart = opening.getBoundingClientRect().top + y;
    openingTravel = opening.classList.contains('is-pinned') ? opening.clientHeight - stage.offsetHeight : 0;
    chapterStarts = chapters.map(chapter => chapter.getBoundingClientRect().top + y);
    passageBounds = passages.map(element => {
      const { top, bottom } = element.getBoundingClientRect();
      return { element, top: top + y, bottom: bottom + y };
    });
    schedulePaint();
  }

  window.addEventListener('scroll', schedulePaint, { passive: true });
  window.addEventListener('resize', measure);
  window.addEventListener('pageshow', measure);
  motion.addEventListener('change', measure);
  document.querySelector('.home-faq').addEventListener('toggle', measure, true);
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(measure);
    for (const element of [header, stage, document.body, ...passages]) observer.observe(element);
  }
  measure();
}
