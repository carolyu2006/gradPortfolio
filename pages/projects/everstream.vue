<template>
<AppHeader />
<img class="hero-image" src="/assets/images/projects/everstream/cover.webp" alt="Everstream">

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2025</p>
            <h1>Everstream</h1>
            <p class="lead">A 2D game depicting the journey of the four seasons along a stream.</p>
        </header>

        <dl class="project-facts">
            <div><dt>Timeline</dt><dd>Oct 2025 – Jan 2026</dd></div>
            <div><dt>Team</dt><dd>Personal project</dd></div>
            <div><dt>Role</dt><dd>Game Designer, Developer &amp; Music Artist</dd></div>
            <div><dt>Skills</dt><dd>Unity, C#, Figma, Adobe Illustrator</dd></div>
        </dl>

        <section>
            <h2>Overview</h2>
            <p class="lead">Final project for NYU Game Center's Game Development course.</p>
            <p>I made every part of it:</p>
            <ul>
                <li><strong>Development</strong> — the game, built in Unity and C#.</li>
                <li><strong>Music</strong> — the original music and sound effects, with guitar and GarageBand.</li>
                <li><strong>Art</strong> — the original art, in Adobe Illustrator and Figma.</li>
                <li><strong>Game UI design</strong> — the interface, designed in Figma.</li>
            </ul>
            <figure>
                <img src="/assets/images/projects/everstream/process.webp" alt="Everstream in development">
                <figcaption>Everstream in development.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Final demo</h2>
            <figure>
                <iframe src="https://www.youtube.com/embed/MlhcxK95jvM" title="Everstream final demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <figcaption>A playthrough of the final game.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Game UI</h2>
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/everstream/ui1.webp" alt="Everstream game UI">
                    <img src="/assets/images/projects/everstream/ui4.webp" alt="Everstream game UI">
                </div>
                <img src="/assets/images/projects/everstream/ui2.webp" alt="Everstream game UI">
                <figcaption>In-game UI.</figcaption>
            </figure>

            <h3>Win screen</h3>
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/everstream/ui5.webp" alt="Everstream win screen">
                    <img src="/assets/images/projects/everstream/ui6.webp" alt="Everstream win screen">
                    <img src="/assets/images/projects/everstream/ui7.webp" alt="Everstream win screen">
                    <img src="/assets/images/projects/everstream/ui8.webp" alt="Everstream win screen">
                </div>
                <figcaption>Win screens.</figcaption>
            </figure>

            <h3>Menu</h3>
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/everstream/menu-spring.webp" alt="Everstream menu in spring">
                    <img src="/assets/images/projects/everstream/menu-summer.webp" alt="Everstream menu in summer">
                    <img src="/assets/images/projects/everstream/menu-autumn.webp" alt="Everstream menu in autumn">
                    <img src="/assets/images/projects/everstream/menu-winter.webp" alt="Everstream menu in winter">
                </div>
                <figcaption>The menu in spring, summer, autumn, and winter.</figcaption>
            </figure>

            <h3>Colour palette</h3>
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/everstream/color1.webp" alt="Everstream colour palette">
                    <img src="/assets/images/projects/everstream/color2.webp" alt="Everstream colour palette">
                    <img src="/assets/images/projects/everstream/color3.webp" alt="Everstream colour palette">
                    <img src="/assets/images/projects/everstream/color4.webp" alt="Everstream colour palette">
                </div>
                <figcaption>A palette for each season.</figcaption>
            </figure>

            <h3>The four seasons</h3>
            <figure>
                <div class="figure-grid figure-grid--3">
                    <img src="/assets/images/projects/everstream/spring.webp" alt="Spring">
                    <img src="/assets/images/projects/everstream/spring_2.webp" alt="Spring">
                    <img src="/assets/images/projects/everstream/spring_3.webp" alt="Spring">
                </div>
                <figcaption>Spring.</figcaption>
            </figure>
            <figure>
                <div class="figure-grid figure-grid--3">
                    <img src="/assets/images/projects/everstream/summer.webp" alt="Summer">
                    <img src="/assets/images/projects/everstream/summer_2.webp" alt="Summer">
                    <img src="/assets/images/projects/everstream/summer_3.webp" alt="Summer">
                </div>
                <figcaption>Summer.</figcaption>
            </figure>
            <figure>
                <div class="figure-grid figure-grid--3">
                    <img src="/assets/images/projects/everstream/autumn.webp" alt="Autumn">
                    <img src="/assets/images/projects/everstream/autumn_2.webp" alt="Autumn">
                    <img src="/assets/images/projects/everstream/autumn_3.webp" alt="Autumn">
                </div>
                <figcaption>Autumn.</figcaption>
            </figure>
            <figure>
                <div class="figure-grid figure-grid--3">
                    <img src="/assets/images/projects/everstream/winter.webp" alt="Winter">
                    <img src="/assets/images/projects/everstream/winter_2.webp" alt="Winter">
                    <img src="/assets/images/projects/everstream/winter_3.webp" alt="Winter">
                </div>
                <figcaption>Winter.</figcaption>
            </figure>
        </section>

        <section class="next-project-section">
            <h2>More projects</h2>
            <ProjectGrid :items="pickProjects('/projects/wechatchannels', '/projects/ai-brand-kit')" />
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
useHead({
  title: 'Everstream',
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
