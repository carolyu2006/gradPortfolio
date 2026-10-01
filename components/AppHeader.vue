<template>
<header class="site-header"
        :class="{ 'is-overlay': isOverlay, 'is-scrolled': isScrolled, 'is-menu-open': isMenuOpen }" ref="headerEl">
    <div class="site-header-inner">
        <a href="/" class="site-logo" aria-label="Carol Yu, home">
            <img src="/assets/icons/yu.svg" alt="">
            <span class="site-logo-text">
                <span>carol</span>
                <span>yu</span>
                <span class="site-logo-section">{{ section }}</span>
            </span>
        </a>

        <nav class="site-nav" aria-label="Main">
            <a v-for="link in links" :key="link.href" :href="link.href"
               :class="{ 'is-active': link.section === section }"
               :aria-current="link.section === section ? 'page' : null">{{ link.label }}</a>
            <!-- Phones have no hover, so the menu lists the contact links itself. -->
            <div class="site-nav-contacts">
                <a href="mailto:CAROL.YU@NYU.EDU">carol.yu@nyu.edu</a>
                <a href="https://www.linkedin.com/in/carolyuhf/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/carolyu2006" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.instagram.com/carolyuhf/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </nav>

        <button type="button" class="site-menu-toggle" :aria-expanded="isMenuOpen"
                @click="isMenuOpen = !isMenuOpen">{{ isMenuOpen ? 'Close' : 'Menu' }}</button>
    </div>
</header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const links = [
    { href: '/', label: 'Work', section: 'work' },
    { href: '/play', label: 'Playground', section: 'playground' },
    { href: '/about', label: 'About', section: 'about' },
    { href: '/cv', label: 'CV', section: 'cv' }
];

// The section name shown under the logo, and the nav link marked active.
const route = useRoute();
const section = computed(() => {
    const path = route.path.replace(/\/$/, '') || '/';
    if (path === '/' || path.startsWith('/projects')) return 'work';
    if (path.startsWith('/play')) return 'playground';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/cv')) return 'cv';
    return '';
});

// Project pages open on a full-bleed hero, so the header floats over it:
// transparent with light type until the page is scrolled.
const isOverlay = computed(() => /^\/projects\/[^/]+/.test(route.path));

const headerEl = ref(null);
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const onScroll = () => {
    isScrolled.value = window.scrollY > 8;
};

// Close the mobile menu on an outside click or Escape.
const onDocumentClick = (event) => {
    if (headerEl.value && !headerEl.value.contains(event.target)) {
        isMenuOpen.value = false;
    }
};

const onKeydown = (event) => {
    if (event.key !== 'Escape') return;
    isMenuOpen.value = false;
};

onMounted(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', onKeydown);
});
</script>
