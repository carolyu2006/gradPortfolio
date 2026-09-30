<template>
<AppHeader />
<img class="hero-image" src="/assets/images/projects/orango-branding/cover.webp" alt="Orango Branding">

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2026</p>
            <h1>Orango Branding</h1>
            <p class="lead">Brand identity for a playful web-based social gaming platform.</p>
            <p>Defining the visual language, typography, and assets that shape Orango's joyful, social-first
                experience.</p>
        </header>

        <section>
            <h2>Brand identity</h2>
            <figure>
                <img v-for="board in boards" :key="board" :src="`/assets/images/projects/orango-branding/${board}.webp`"
                    alt="Orango brand identity board">
            </figure>
        </section>

        <section class="next-project-section">
            <h2>More projects</h2>
            <ProjectGrid :items="pickProjects('/projects/aigc-video-automation', '/projects/wechatchannels')" />
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
// The brand boards, in order. (4-3 is left out.)
const boards = [
  '0', '1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7',
  '2-1', '2-2', '2-3',
  '3-1', '3-3', '3-4', '3-5',
  '4-1', '4-2', '4-4', '4-5',
  '5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7'
];

useHead({
  title: 'Orango Branding',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/project.css' }
  ],
  script: [
    { src: '/js/script.js', body: true },
    { src: '/js/project.js', body: true }
  ]
});
</script>
