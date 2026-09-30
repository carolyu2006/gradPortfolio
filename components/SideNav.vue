<template>
<nav class="side-nav" :aria-label="label">
    <a v-for="link in links" :key="link.id" :href="`#${link.id}`"
       :class="{ 'is-active': link.id === activeId }"
       :aria-current="link.id === activeId ? 'true' : null"
       @click="goTo($event, link.id)">{{ link.label }}</a>
</nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Section links for the left column of a page. The column itself is sticky in
// CSS (.page-side); this only highlights the section being read and scrolls to
// a section on click, landing it below the sticky header.
const props = defineProps({
    links: { type: Array, required: true }, // [{ id, label }], in page order
    label: { type: String, default: 'On this page' }
});

const activeId = ref(props.links[0]?.id);

const sectionFor = (id) => document.getElementById(id);

const scrollOffset = () => {
    const header = document.querySelector('.site-header');
    return (header ? header.getBoundingClientRect().height : 88) + 32;
};

const targetTopFor = (section) =>
    Math.max(section.getBoundingClientRect().top + window.scrollY - scrollOffset(), 0);

// Covers are videos and lazy images, so a section can move while a smooth
// scroll is still travelling and the page lands short of the heading.
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
        if (token !== correctionToken) return;
        const section = sectionFor(id);
        if (!section) return;
        if (Math.abs(section.getBoundingClientRect().top - scrollOffset()) > 2) {
            window.scrollTo({ top: targetTopFor(section), behavior: 'auto' });
        }
        updateActive();
    };

    const timer = setTimeout(finish, 900);
    if ('onscrollend' in window) {
        window.addEventListener('scrollend', () => { clearTimeout(timer); finish(); }, { once: true });
    }
};

const goTo = (event, id) => {
    const section = sectionFor(id);
    if (!section) return;
    event.preventDefault();
    activeId.value = id;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: targetTopFor(section), behavior: reduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', `#${id}`);
    correctAfterScroll(id);
};

// The last section whose top has crossed the offset line is the current one;
// at the very bottom of the page the last section wins, since a short final
// section may never reach the line.
const updateActive = () => {
    const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
        const last = [...props.links].reverse().find((link) => sectionFor(link.id));
        if (last) activeId.value = last.id;
        return;
    }

    const line = scrollOffset() + 1;
    let current = props.links[0]?.id;
    for (const link of props.links) {
        const section = sectionFor(link.id);
        if (!section) continue;
        if (section.getBoundingClientRect().top - line <= 0) current = link.id;
        else break;
    }
    activeId.value = current;
};

onMounted(() => {
    // A handful of rect reads per scroll event is cheap enough to run directly.
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive, { passive: true });

    // A deep link (/about#research) lands with the native jump; redo it once the
    // page has laid out so the heading clears the sticky header.
    const hash = window.location.hash.slice(1);
    if (hash && sectionFor(hash)) {
        activeId.value = hash;
        window.scrollTo({ top: targetTopFor(sectionFor(hash)), behavior: 'auto' });
        correctAfterScroll(hash);
    }

    updateActive();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateActive);
    window.removeEventListener('resize', updateActive);
});
</script>
