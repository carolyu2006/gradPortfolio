<template>
<div class="project-grid" ref="gridEl">
    <a v-for="project in items" :key="project.title" class="project-card" :href="project.href"
       :target="isExternal(project.href) ? '_blank' : null"
       :rel="isExternal(project.href) ? 'noopener noreferrer' : null">
        <div class="project-card-media">
            <video v-if="project.video" :src="project.video" :poster="project.image"
                   autoplay muted loop playsinline preload="metadata"></video>
            <img v-else :src="project.image" :alt="`${project.title} project cover`" loading="lazy">
        </div>
        <p class="project-card-name">{{ project.title }}</p>
        <div class="project-card-text">
            <h3 class="project-card-title">{{ project.question || project.title }}</h3>
            <p class="project-card-description" aria-hidden="true">{{ project.description }}</p>
        </div>
    </a>
</div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Two to a row; each cover keeps its own proportions, with the title and
// description below it.
defineProps({
    items: { type: Array, required: true }
});

const isExternal = (href) => href.startsWith('http');

// Several looping cover videos decoding at once makes scrolling stutter, so
// the ones far off screen are paused until they come near again.
const gridEl = ref(null);
let videoObserver = null;

onMounted(() => {
    if (!('IntersectionObserver' in window) || !gridEl.value) return;
    const videos = Array.from(gridEl.value.querySelectorAll('video'));
    if (!videos.length) return;
    videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(({ target: video, isIntersecting }) => {
            if (isIntersecting) {
                if (video.paused) video.play?.().catch(() => {});
            } else if (!video.paused) {
                video.pause();
            }
        });
    }, { rootMargin: '300px 0px' });
    videos.forEach((video) => videoObserver.observe(video));
});

onBeforeUnmount(() => {
    videoObserver?.disconnect();
});
</script>
