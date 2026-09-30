<template>
<div class="sidebar" ref="sidebarEl">
    <div class="sidebar-content">
        <div class="sidebar-content-item">
            <!-- <h3>A <strong>Product Designer</strong> who uses <strong>creative technology</strong> and -->
        </div>
        <div class="sidebar-content-item">
            <a v-for="link in links" :key="link.id" :href="`#${link.id}`"
               :class="{ 'is-active': link.id === activeId }"
               @click="goTo($event, link.id)">{{ link.label }}</a>

            <p class="header-title">PROJECTS</p>
        </div>
    </div>
</div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Mirrors the order of the sections in pages/projects/index.vue.
const links = [
    { id: 'wechatChannels', label: 'WeChat Channels × AI' },
    { id: 'interTabs', label: 'interTabs' },
    { id: 'albertPlus', label: 'Albert Plus' },
    { id: 'paletteU', label: 'Palette U' },
    { id: 'mbtiIdealPartner', label: 'MBTI Ideal Partner' },
    { id: 'orangoBranding', label: 'Orango Branding' },
    { id: 'everstream', label: 'Everstream' },
    { id: 'dreammail', label: 'DREAMMAIL' },
    { id: 'cosmaSense', label: 'Cosma Sense' },
    { id: 'globalDeltaSecurities', label: 'Global Delta Securities' },
    { id: 'sweetDreams', label: 'Sweet Dreams 4 All' }
];

const sidebarEl = ref(null);
const activeId = ref(links[0].id);

// Sections are looked up on every read rather than cached once: the covers are
// videos and images that finish loading after mount, so the list has to survive
// a page that is still settling.
const sectionFor = (id) => document.getElementById(id);

// The header is fixed, so an anchor jump would drop the title underneath it.
const scrollOffset = () => {
    const header = document.querySelector('.main-header');
    const height = header ? header.getBoundingClientRect().height : 0;
    return (height || 90) + 40;
};

const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const targetTopFor = (section) =>
    Math.max(section.getBoundingClientRect().top + window.scrollY - scrollOffset(), 0);

const scrollToSection = (id, behavior) => {
    const section = sectionFor(id);
    if (!section) return;
    window.scrollTo({ top: targetTopFor(section), behavior });
};

// The covers are videos and lazy images, so a section can move while a long
// smooth scroll is still travelling and the page lands short of the heading.
// Re-measure once the scroll stops and close the gap — unless the reader has
// taken over the scroll in the meantime.
let correctionToken = 0;
const correctAfterScroll = (id) => {
    const token = ++correctionToken;
    const cancel = () => { correctionToken++; };
    const events = ['wheel', 'touchstart', 'keydown'];
    events.forEach((type) => window.addEventListener(type, cancel, { once: true, passive: true }));

    const finish = () => {
        events.forEach((type) => window.removeEventListener(type, cancel));
        if (token !== correctionToken) return; // superseded, or the reader took over
        const section = sectionFor(id);
        if (!section) return;
        const drift = section.getBoundingClientRect().top - scrollOffset();
        if (Math.abs(drift) > 2) window.scrollTo({ top: targetTopFor(section), behavior: 'auto' });
        updateActive();
    };

    // 'scrollend' is the precise signal; the timeout covers browsers without it
    // and the case where the scroll never starts because it had nowhere to go.
    const timer = setTimeout(finish, 900);
    if ('onscrollend' in window) {
        window.addEventListener('scrollend', () => { clearTimeout(timer); finish(); }, { once: true });
    }
};

const goTo = (event, id) => {
    if (!sectionFor(id)) return; // no section — let the browser handle the anchor
    event.preventDefault();
    activeId.value = id;
    scrollToSection(id, prefersReducedMotion() ? 'auto' : 'smooth');
    history.replaceState(null, '', `#${id}`);
    correctAfterScroll(id);
};

// The last section whose top has crossed the offset line wins. Picking by
// crossing rather than by intersection keeps sections taller than the viewport
// from leaving the nav with nothing highlighted.
const updateActive = () => {
    const line = scrollOffset() + 1;
    const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (atBottom) {
        const last = [...links].reverse().find((link) => sectionFor(link.id));
        if (last) activeId.value = last.id;
        return;
    }

    let current = activeId.value;
    for (const link of links) {
        const section = sectionFor(link.id);
        if (!section) continue;
        if (section.getBoundingClientRect().top - line <= 0) current = link.id;
        else break;
    }
    activeId.value = current;
};

// The sidebar is fixed for the length of the page, then rides up with the
// footer instead of floating on top of it.
const updateFooterOffset = () => {
    const sidebar = sidebarEl.value;
    if (!sidebar) return;

    const footer = document.querySelector('footer');
    const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;
    const overlap = window.innerHeight - footerTop;

    sidebar.style.transform = overlap > 0 ? `translateY(${-overlap}px)` : '';
};

const onScroll = () => {
    updateActive();
    updateFooterOffset();
};

// The covers finish loading after mount and move every section under them, so
// the nav has to re-measure on layout changes, not only on scroll.
let layoutObserver = null;

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // A deep link (/projects#everstream) lands with the native anchor jump,
    // which ignores the fixed header — redo it with the offset once the page
    // has laid out.
    const hash = window.location.hash.slice(1);
    if (hash && sectionFor(hash)) {
        activeId.value = hash;
        scrollToSection(hash, 'auto');
        correctAfterScroll(hash);
    }

    if (window.ResizeObserver) {
        layoutObserver = new ResizeObserver(onScroll);
        layoutObserver.observe(document.body);
    }

    updateActive();
    updateFooterOffset();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    layoutObserver?.disconnect();
});
</script>
