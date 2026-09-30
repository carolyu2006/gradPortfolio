<template>
<IntroLoader v-if="!isInternalNavigation" :exit="loaderExit" @prepare="prepareIntro" @leave="playIntro" @done="releaseRestoredScroll" />
<AppHeader />
    <div id="hero" class="hero hero-section">
      <div class="hero-title-container">
        <h1 class="hero-title">YU</h1>
        <img class="hero-title-icon" src="/assets/icons/yu.svg" alt="yu">
        <h1 class="hero-title">HF</h1>
      </div>
      <img class="hero-image" src="/assets/images/main/hero-image.webp" alt="hero">

      <div class="parallax-leaves">
        <div class="leaf leaf-1"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
        <div class="leaf leaf-4"></div>
        <div class="leaf leaf-5"></div>
        <div class="leaf leaf-6"></div>
        <img class="hero-fish-icon" src="/assets/images/main/fish.svg" alt="fish">
      </div>

      <h1 class="hero-title hero-title-carol">CAROL</h1>

      <div class="hero-side">
        <p class="hero-side-title">Hello :)</p>
        <p class="hero-side-description">
          I'm Carol, a <strong>designer and creative technologist</strong> exploring how AI and play can make everyday tools feel more human.
        </p>
      </div>
      <nav class="hero-side-right" aria-label="Research themes">
        <a v-for="tag in heroTags" :key="tag" href="/about#research">
          <img class="hero-side-image" src="/assets/icons/icon-tag.webp" alt="">
          <p>{{ tag }}</p>
        </a>
      </nav>
    </div>

<main class="page">
    <aside class="page-side">
        <SideNav :links="sections" />
    </aside>

    <div class="page-main">
        <section id="work">
            <h2 class="section-heading">Work</h2>
            <ProjectGrid :items="projects" />
        </section>

        <section id="about" class="home-about">
            <h2 class="section-heading">About</h2>
            <div class="home-about-body">
                <figure class="home-about-figure">
                    <img src="/assets/images/main/profile.webp" alt="Carol Yu">
                </figure>
                <div class="home-about-text">
                    <p class="lead">
                        <em>As AI takes over more of the making, what is left for designers — and for the people we
                            design for?</em>
                    </p>
                    <p>
                        I'm Carol, a designer and creative technologist at NYU's Interactive Media Arts program. My
                        work asks how AI can become a creative collaborator rather than a replacement, and how play
                        and space can make everyday digital tools feel more human. I build to find out: prototypes,
                        games, and shipped tools that I test with real people.
                    </p>
                    <div class="button-row">
                        <a class="btn" href="/about">More about me</a>
                        <a class="btn" href="/cv">View CV</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
<AppFooter />
</template>

<script setup>
// Hero entrance: held on its first frame behind the loader ('loading'), played
// as the loader lifts ('playing'), then the classes come off entirely so the
// intro animations can't pin opacity/translate over the page's own styles.
const INTRO_DURATION = 4500;
// The intro is for landing on the site (or reloading at the top). Arriving from
// another page of the site — links here are full page loads — is a plain
// navigation with a same-origin referrer: no loader, no intro.
const isInternalNavigation = import.meta.client && (() => {
  try {
    const navigation = performance.getEntriesByType?.('navigation')?.[0];
    if (navigation && navigation.type !== 'navigate') return false;
    return !!document.referrer && new URL(document.referrer).origin === location.origin;
  } catch {
    return false;
  }
})();
const introState = ref(isInternalNavigation ? 'done' : 'loading');
let introDoneTimer = null;

// Everything but the image starts stacked on the image's centre and slides out
// from under it. The offsets are measured rather than hand-written so the travel
// stays right at any viewport size; the measuring class suppresses the intro for
// the read, which happens inside one frame so nothing flashes.
const INTRO_EMERGE_SELECTOR = [
  '.hero-title-container',
  '.hero-fish-icon',
  '.hero-title-carol',
  '.hero-side'
].join(', ');

// The tags slide straight out to the right from behind the image, together,
// each at its own height.
const INTRO_SLIDE_SELECTOR = '.hero-side-right > a';

// The leaves are the exception: they drift in from off the right
// edge of the page like something carried downstream, so each one starts past
// the right edge with its own vertical offset and tilt rather than on the image.
const INTRO_DRIFT_SELECTOR = '.hero .leaf';
const DRIFT_RISE = [-46, 28, -30, 44, -18, 36, -24];
const DRIFT_TILT = [-32, 24, -18, 30, -26, 16, -12];

const measureIntroOffsets = () => {
  const image = document.querySelector('.hero-image');
  const emergeTargets = Array.from(document.querySelectorAll(INTRO_EMERGE_SELECTOR));
  const driftTargets = Array.from(document.querySelectorAll(INTRO_DRIFT_SELECTOR));
  const slideTargets = Array.from(document.querySelectorAll(INTRO_SLIDE_SELECTOR));
  if (!image || !emergeTargets.length) return;

  const root = document.documentElement;
  root.classList.add('intro-measuring');
  const imageBox = image.getBoundingClientRect();
  const centerX = imageBox.left + imageBox.width / 2;
  const centerY = imageBox.top + imageBox.height / 2;
  const emergeOffsets = emergeTargets.map((el) => {
    const box = el.getBoundingClientRect();
    return [el, centerX - (box.left + box.width / 2), centerY - (box.top + box.height / 2)];
  });
  // Far enough past the right edge that nothing is half-on screen at rest; the
  // page already clips horizontal overflow, so this adds no scrollbar.
  const driftOffsets = driftTargets.map((el, index) => {
    const box = el.getBoundingClientRect();
    return [el, window.innerWidth - box.left + 140, index];
  });
  // One shared offset so the block moves as a unit: the widest tag starts
  // centred on the image, and the rest (left-aligned with it) sit inside it too.
  const slideBoxes = slideTargets.map((el) => el.getBoundingClientRect());
  const slideLeft = Math.min(...slideBoxes.map((box) => box.left));
  const slideWidth = Math.max(...slideBoxes.map((box) => box.right)) - slideLeft;
  const slideDx = centerX - (slideLeft + slideWidth / 2);
  const slideOffsets = slideTargets.map((el) => [el, slideDx]);
  root.classList.remove('intro-measuring');

  slideOffsets.forEach(([el, dx]) => {
    el.style.setProperty('--intro-from-x', `${Math.round(dx)}px`);
  });

  emergeOffsets.forEach(([el, dx, dy]) => {
    el.style.setProperty('--intro-from-x', `${Math.round(dx)}px`);
    el.style.setProperty('--intro-from-y', `${Math.round(dy)}px`);
  });

  driftOffsets.forEach(([el, dx, index]) => {
    el.style.setProperty('--intro-from-x', `${Math.round(dx)}px`);
    el.style.setProperty('--intro-from-y', `${DRIFT_RISE[index % DRIFT_RISE.length]}px`);
    el.style.setProperty('--intro-from-tilt', `${DRIFT_TILT[index % DRIFT_TILT.length]}deg`);
  });
};

// The loader turns see-through while its mark flips, before the intro plays.
// Measuring here parks every piece at its starting point first — otherwise the
// leaves (which have no fade) show in their final spots for that moment and
// then jump off screen.
let hasMeasuredIntro = false;
const prepareIntro = () => {
  if (loaderExit.value !== 'flip') return;
  measureIntroOffsets();
  hasMeasuredIntro = true;
};

const playIntro = () => {
  if (loaderExit.value !== 'flip') return;
  if (!hasMeasuredIntro) measureIntroOffsets();
  introState.value = 'playing';
  clearTimeout(introDoneTimer);
  introDoneTimer = setTimeout(() => {
    introState.value = 'done';
  }, INTRO_DURATION);
};

// A reload (or back/forward) lands the reader back where they were instead of
// replaying the intro. Where they were is saved as the page is left; on the way
// back the page is parked there before the loader lifts. From the hero the
// loader still flips its mark into the image; anywhere further along it skips
// the mark and only fades the overlay onto the parked content.
const RESTORE_KEY = 'home-scroll-position';
const nuxtApp = useNuxtApp();
const isFirstPageLoad = nuxtApp.isHydrating;
const loaderExit = ref('flip');
let getScrollSnapshot = null;
let isHoldingRestoredScroll = false;
let restoreListenersCleanup = null;

const readSavedScroll = () => {
  if (!isFirstPageLoad) return null;
  try {
    const navigation = performance.getEntriesByType?.('navigation')?.[0];
    if (navigation && navigation.type !== 'reload' && navigation.type !== 'back_forward') return null;
    return JSON.parse(sessionStorage.getItem(RESTORE_KEY) || 'null');
  } catch {
    return null;
  }
};

const isSavedPastHero = (saved) => Number(saved?.y) > 40;

// Set before the loader mounts so it never starts the mark on a mid-page restore.
if (import.meta.client && isSavedPastHero(readSavedScroll())) {
  loaderExit.value = 'fade';
}

const saveScroll = () => {
  try {
    const snapshot = getScrollSnapshot?.();
    if (snapshot) sessionStorage.setItem(RESTORE_KEY, JSON.stringify(snapshot));
  } catch {
    // Storage blocked — a reload simply starts from the top.
  }
};

// Restoring below the hero: no intro. The head manager doesn't pick up a class
// change made this early in hydration, so the classes also come off directly.
const skipIntro = () => {
  introState.value = 'done';
  document.documentElement.classList.remove('intro', 'intro-paused');
};

// The loader has lifted: from here the reader drives the scroll.
const releaseRestoredScroll = () => {
  isHoldingRestoredScroll = false;
};

// The hero's theme tags point at the research questions they name.
const heroTags = ['Human–AI Creativity', 'Everyday Tools', 'Playful Interaction'];

const sections = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' }
];

onMounted(() => {
  const savedScroll = readSavedScroll();
  window.addEventListener('pagehide', saveScroll);

  // A plain scroll offset, re-applied until the loader lifts since images above
  // it can still shift the layout while they load.
  getScrollSnapshot = () => ({ y: Math.round(window.scrollY) });
  const restoreY = Number(savedScroll?.y) || 0;
  if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  isHoldingRestoredScroll = !isInternalNavigation;
  window.scrollTo(0, restoreY);
  const holdOnLoad = () => {
    if (isHoldingRestoredScroll) window.scrollTo(0, restoreY);
  };
  window.addEventListener('load', holdOnLoad, { once: true });
  restoreListenersCleanup = () => window.removeEventListener('load', holdOnLoad);
  if (isSavedPastHero(savedScroll)) {
    skipIntro();
    loaderExit.value = 'fade';
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('pagehide', saveScroll);
  restoreListenersCleanup?.();
  clearTimeout(introDoneTimer);
});

useHead({
  title: 'Carol Yu',
  htmlAttrs: {
    class: computed(() => ({
      loading: 'intro intro-paused',
      playing: 'intro',
      done: ''
    }[introState.value]))
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/index.css' }
  ],
  script: [
    // Same check as isInternalNavigation, before first paint, so the server-rendered
    // loader and held hero never show when jumping in from another page.
    {
      key: 'home-skip-intro',
      tagPosition: 'head',
      innerHTML: `(function(){try{var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];if(n&&n.type!=='navigate')return;if(!document.referrer||new URL(document.referrer).origin!==location.origin)return;var e=document.createElement('style');e.textContent='.intro-loader{display:none!important}';document.head.appendChild(e);document.documentElement.classList.remove('intro','intro-paused');}catch(t){}})();`
    },
    // Runs before first paint so a mid-page reload never flashes the loader mark.
    {
      key: 'home-restore-mark',
      tagPosition: 'head',
      innerHTML: `(function(){try{var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];if(!n||(n.type!=='reload'&&n.type!=='back_forward'))return;var s=JSON.parse(sessionStorage.getItem('home-scroll-position')||'null');if(!s)return;if(typeof s.y==='number'&&s.y>40){var e=document.createElement('style');e.id='intro-content-exit-style';e.textContent='.intro-loader__mark,.intro-loader__flip{visibility:hidden!important;opacity:0!important}';document.head.appendChild(e);}}catch(t){}})();`
    },
    { src: '/js/script.js', body: true },
    { src: '/js/index.js', body: true }
  ]
});
</script>
