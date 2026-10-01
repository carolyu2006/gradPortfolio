<template>
<AppHeader />
<img class="hero-image" src="/assets/images/covers/placeholder.webp" alt="Orango Games">

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2026</p>
            <h1>Orango Games</h1>
            <p class="lead">A lightweight web game platform for offline social settings — designed to study how
                people interact when they play together in the same room.</p>
        </header>

        <dl class="project-facts">
            <div><dt>Year</dt><dd>2026 – present</dd></div>
            <div><dt>Team</dt><dd>3 marketing, 1 game designer, 1 engineer — a New York–based studio of
                university students</dd></div>
            <div><dt>Role</dt><dd>Project Lead, Lead Designer &amp; Engineer</dd></div>
            <div><dt>Skills</dt><dd>Unity, WebSocket, Frontend Development, Game Design, Illustration</dd></div>
        </dl>

        <section>
            <h2>Problem</h2>
            <p class="statement">In an increasingly disconnected world, how can we help people truly connect again?</p>
            <p>Most social games are built for screens and strangers. Orango focuses on the offline moments instead —
                gatherings that go quiet, and old friends who haven't played together since they were kids.</p>
        </section>

        <section>
            <h2>Approach</h2>
            <p class="lead">Good social experiences don't come from complex mechanics, but from simple joy and
                sincere interaction.</p>
            <p>Games here are treated as a language that brings people closer. We build light, easy-to-learn web
                games that anyone can pick up on the spot, so a party never has to go cold. Three games are live, and
                more are in progress.</p>
        </section>

        <section>
            <h2>The games</h2>
            <!-- TODO: one h3 per live game — name, how it's played, what interaction it's designed to create,
                 plus a screenshot or <video> in public/assets/images/projects/orango-games/. -->
            <h3>TODO: Game 1</h3>
            <p>TODO</p>
            <h3>TODO: Game 2</h3>
            <p>TODO</p>
            <h3>TODO: Game 3</h3>
            <p>TODO</p>
        </section>

        <section>
            <h2>What we learned</h2>
            <!-- TODO: observations from watching people play — how groups behaved, what broke the ice,
                 what changed between iterations. -->
            <p>TODO</p>
        </section>

        <section>
            <h2>Brand</h2>
            <p>The visual identity behind the platform is covered in its own case study.</p>
            <p><a href="/projects/orangobranding">Orango Branding →</a></p>
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
useHead({
  title: 'Orango Games',
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
