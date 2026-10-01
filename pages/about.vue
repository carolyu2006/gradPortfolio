<template>
<AppHeader />
<main class="page">
    <aside class="page-side">
        <SideNav :links="sections" />
    </aside>

    <div class="page-main">
        <section id="overview" class="about-overview">
            <h1 class="page-title">
                <span class="page-kicker">About</span>
                Hi, I'm Carol.
            </h1>
            <div class="about-overview-body">
                <figure class="about-portrait">
                    <img src="/assets/images/about/profile.webp" alt="Carol Yu">
                    <figcaption class="caption">Carol Yu — designer and creative technologist, NYU Tisch School of
                        the Arts.</figcaption>
                </figure>
                <div class="about-overview-text">
                    <p class="lead">
                        <em>A designer and creative technologist exploring how AI and play can make everyday tools
                            feel more human.</em>
                    </p>
                    <p>
                        For me, design is an interdisciplinary artwork. <strong>Technology</strong> forms the canvas
                        that defines the possibilities; <strong>art</strong> is the unique strokes;
                        <strong>business</strong>, <strong>philosophy</strong>, and <strong>game mechanics</strong>
                        mix into the palette that creates experiences and interactions that resonate.
                    </p>
                    <p>I pour love into every design, weaving together this colorful world.</p>
                    <div class="button-row">
                        <a class="btn" href="/cv">View CV</a>
                        <a class="btn" href="mailto:CAROL.YU@NYU.EDU">Email me</a>
                    </div>
                    <p class="about-links">
                        <a href="https://www.linkedin.com/in/carolyuhf/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/carolyu2006" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.instagram.com/carolyuhf/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </p>
                </div>
            </div>
        </section>

        <section id="research">
            <h2 class="section-heading">Research Interests</h2>
            <p class="lead about-research-intro">
                <em>As AI takes over more of the making, what is left for designers — and for the people we design
                    for?</em> Three questions run through my work:
            </p>
            <div class="about-research">
                <article v-for="(item, index) in research" :key="item.title" class="about-research-item">
                    <h4>{{ String(index + 1).padStart(2, '0') }}</h4>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.question }}</p>
                    <p class="about-research-links">
                        <a v-for="link in item.projects" :key="link.label" :href="link.href"
                           :target="link.href.startsWith('http') ? '_blank' : null"
                           :rel="link.href.startsWith('http') ? 'noopener noreferrer' : null">{{ link.label }}</a>
                    </p>
                </article>
            </div>
        </section>

        <section id="outside-design" class="outside-design">
            <div ref="wrapper" class="interests-wrapper">
                <div ref="panel" class="interests-panel">
                    <h2 class="section-heading">Outside Design</h2>
                    <div class="interests-container">
                        <div ref="track" class="interest-item-scroll">
                        <img src="/assets/images/about/interest/1.webp" alt="Music">
                        <img src="/assets/images/about/interest/2.webp" alt="Guitar">
                        <img src="/assets/images/about/interest/3.webp" alt="Painting">
                        <img src="/assets/images/about/interest/leaf.webp" alt="leaf">
                        <img src="/assets/images/about/interest/flower.webp" alt="flower">
                        <img src="/assets/images/about/interest/4.webp" alt="Photography">
                        <img src="/assets/images/about/interest/5.webp" alt="3D printing">
                        <img src="/assets/images/about/interest/6.webp" alt="Robotics">
                        <img src="/assets/images/about/interest/leaf.webp" alt="leaf">
                        <img src="/assets/images/about/interest/7.webp" alt="Arduino">
                        <img src="/assets/images/about/interest/8.webp" alt="WordPress">
                        <img src="/assets/images/about/interest/9.webp" alt="Github">
                        <img src="/assets/images/about/interest/10.webp" alt="Music">
                        <img src="/assets/images/about/interest/flower.webp" alt="flower">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
<AppFooter />
</template>

<script setup>
const wrapper = ref(null);
const panel = ref(null);
const track = ref(null);

const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'research', label: 'Research Interests' },
    { id: 'outside-design', label: 'Outside Design' }
];

const research = [
    {
        title: 'Human–AI Creativity',
        question: "How can AI act as a creative collaborator that understands a brand, a story, or a person's intent — rather than a replacement for the designer?",
        projects: [
            { label: 'AI Brand Kit', href: '/projects/ai-brand-kit' },
            { label: 'AIGC Video Automation', href: '/projects/aigc-video-automation' },
            { label: 'WeChat Channels × AI', href: '/projects/wechatchannels' }
        ]
    },
    {
        title: 'Tools for Attention & Memory',
        question: 'How can interfaces help people hold on to what matters — their tabs, their files, their memories — without adding more cognitive load?',
        projects: [
            { label: 'interTabs', href: '/projects/intertabs' },
            { label: 'Palette U', href: '/projects/paletteu' },
            { label: 'Cosma Sense', href: '/projects/cosmasense' }
        ]
    },
    {
        title: 'Playful & Spatial Interaction',
        question: 'What happens when everyday digital tools leave the flat screen — through games, 3D space, and mixed reality?',
        projects: [
            { label: 'Everstream', href: '/projects/everstream' },
            { label: 'DREAMMAIL', href: 'https://devpost.com/software/dreamail' },
            { label: 'MBTI Ideal Partner', href: '/projects/mbtiidealpartner' }
        ]
    }
];

// Outside Design: the panel pins under the header while the page scroll drives
// the image strip sideways (smoothed), then lets go at the end. The wrapper is
// as tall as the strip is wide, so scrolling down = moving along the strip.
const LERP_SPEED = 0.12;
let cleanupOutside = null;

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

onMounted(() => {
  const wrapperEl = wrapper.value;
  const panelEl = panel.value;
  const trackEl = track.value;
  if (!wrapperEl || !panelEl || !trackEl) return;

  let currentX = 0;
  let targetX = 0;
  let animating = false;
  let frame = 0;

  const headerHeight = () => parseFloat(getComputedStyle(panelEl).top) || 0;
  // The strip starts at the column's left edge, so that offset counts too.
  const scrollableWidth = () => Math.max(0, trackEl.offsetLeft + trackEl.offsetWidth - panelEl.clientWidth);

  // The panel is full-bleed but its heading and first image line up with the column.
  const measure = () => {
    wrapperEl.style.setProperty('--bleed', `${wrapperEl.getBoundingClientRect().left + window.scrollX}px`);
    wrapperEl.style.height = `${panelEl.offsetHeight + scrollableWidth()}px`;
  };

  const animate = () => {
    const dx = targetX - currentX;
    if (Math.abs(dx) < 0.5) {
      currentX = targetX;
      animating = false;
    } else {
      currentX += dx * LERP_SPEED;
      frame = requestAnimationFrame(animate);
    }
    trackEl.style.transform = `translateX(${currentX}px)`;
  };

  const update = () => {
    const maxScroll = wrapperEl.offsetHeight - panelEl.offsetHeight;
    const scrolled = headerHeight() - wrapperEl.getBoundingClientRect().top;
    const progress = maxScroll > 0 ? Math.min(Math.max(scrolled / maxScroll, 0), 1) : 0;
    targetX = -easeInOutCubic(progress) * scrollableWidth();
    if (!animating) {
      animating = true;
      frame = requestAnimationFrame(animate);
    }
  };

  const onResize = () => { measure(); update(); };
  const images = Array.from(trackEl.querySelectorAll('img'));
  images.forEach((img) => {
    if (!img.complete) img.addEventListener('load', onResize, { once: true });
  });

  measure();
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', onResize);
  cleanupOutside = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('scroll', update);
    window.removeEventListener('resize', onResize);
  };
});

onBeforeUnmount(() => cleanupOutside?.());

useHead({
  title: 'About — Carol Yu',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/about.css' }
  ],
  script: [
    { src: '/js/script.js', body: true }
  ]
});
</script>
