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

        <p class="statement"><span class="statement-label">Design question</span>What should a visual identity look
            like when its job is to make people want to put their phones down and play together?</p>

        <section>
            <h2>Abstract</h2>
            <p class="lead">Orango is a web game platform for offline social play. Its identity has to feel light,
                warm, and instantly approachable — before anyone has read a rule.</p>
            <p>This is the identity behind <a href="/projects/orangogames">Orango Games</a>: the visual language,
                typography, and assets used across the games and the platform. The research behind the
                games — how people interact when they play together in the same room — is covered on that page.</p>
            <!-- TODO(research): add 2–3 sentences on the choices that tie back to the research — e.g. why orange, why
                 the character, how the identity signals “easy to join” to people who don't play games. -->
        </section>

        <section>
            <h2>Brand identity</h2>
            <figure>
                <img v-for="board in boards" :key="board" :src="`/assets/images/projects/orango-branding/${board}.webp`"
                    alt="Orango brand identity board">
            </figure>
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
