<template>
<AppHeader />
<video class="hero-image" src="/assets/images/projects/paletteu/cover.mp4" aria-label="Palette U" autoplay muted loop
    playsinline preload="metadata"></video>

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2025</p>
            <h1>Palette U</h1>
            <p class="lead">A website to record your memories and store them in your own 3D memory palace.</p>
            <p class="project-links">
                <a class="btn" href="http://www.paletteu.com/" target="_blank" rel="noopener noreferrer">View website</a>
                <a class="btn" href="https://youtu.be/i4X9Y0rxINE" target="_blank" rel="noopener noreferrer">View video</a>
            </p>
        </header>

        <dl class="project-facts">
            <div><dt>Timeline</dt><dd>Oct 2025 – Jan 2026</dd></div>
            <div><dt>Team</dt><dd>Personal project</dd></div>
            <div><dt>Role</dt><dd>UI/UX Designer, Project Manager, Full-Stack Developer &amp; Marketing</dd></div>
            <div><dt>Skills</dt><dd>Three.js, HTML/CSS, JavaScript, Blender, Figma, Express.js, SQL</dd></div>
        </dl>

        <section>
            <h2>Overview</h2>
            <p class="lead">The final project for NYU's Networked Media and Intro to Three.js courses, later extended
                into a complete personal project — my first Three.js and backend development project.</p>
            <p>My roles and responsibilities:</p>
            <ul>
                <li><strong>UI/UX design &amp; 3D modeling</strong> — the visual design and UI/UX of the website and
                    logo, and 3D models of the memory islands in Blender.</li>
                <li><strong>Frontend &amp; Three.js</strong> — vanilla JavaScript and Three.js for the 3D visualization
                    and interaction; Express.js, HTML, and CSS for the website.</li>
                <li><strong>Backend</strong> — Express.js and MySQL to store user data and the memory islands.</li>
                <li><strong>Research &amp; marketing</strong> — user and market research to understand needs and pain
                    points, and marketing materials that brought the project 2,000+ views.</li>
            </ul>
            <p class="statement">How can we store memories in a more convenient and meaningful way?</p>
            <p><strong>Target audience:</strong> teenagers, students, young adults — people who love journaling or
                keeping a diary.</p>
        </section>

        <section>
            <h2>Problems</h2>
            <p class="lead">In this fast-paced world, we are constantly flooded with new information and experiences —
                yet the moments that matter most quietly fade away.</p>
            <h3>User research</h3>
            <p>I conducted <strong>20+ user interviews</strong> to understand how people relate to their memories and
                what stops them from preserving them.</p>
            <p><strong>Memory is relational.</strong></p>
            <ul>
                <li>Memories are most meaningful when tied to <strong>people and relationships</strong>.</li>
                <li>Users want to revisit and share memories with others.</li>
                <li>Small triggers (a song, a drink) spark a whole wave of nostalgia.</li>
            </ul>
            <p><strong>Context and organization matter.</strong></p>
            <ul>
                <li>Users think in categories — <strong>by person, place, or life stage</strong>.</li>
                <li>A timeline view helps users navigate rather than just scroll.</li>
                <li>Linked memories let users see the full picture of a moment.</li>
            </ul>
            <p><strong>Friction kills the habit.</strong></p>
            <ul>
                <li>People are too busy for lengthy journaling rituals.</li>
                <li>The best capture methods are <strong>fast and low-effort</strong>.</li>
                <li>Even a single random photo can revive a full memory.</li>
            </ul>
        </section>

        <section>
            <h2>Market research</h2>
            <p class="lead">I researched existing memory-related apps.</p>
            <figure>
                <img class="on-surface" src="/assets/images/projects/paletteu/research1.webp" alt="Comparison of existing memory apps">
                <figcaption>Existing memory apps, compared.</figcaption>
            </figure>
            <p class="statement">Conclusion: the product should provide a memory-palace experience that enables
                effortless storage while keeping a clear and meaningful organization.</p>
            <figure>
                <img src="/assets/images/projects/paletteu/site_map.webp" alt="Palette U site map">
                <figcaption>The site map.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Visual design</h2>
            <figure>
                <img src="/assets/images/projects/paletteu/visual_design.webp" alt="Palette U visual design">
                <figcaption>Logo, colour, and type.</figcaption>
            </figure>
        </section>

        <section id="features">
            <h2>Features</h2>
            <figure>
                <div class="figure-grid">
                    <video src="/assets/images/projects/paletteu/feature-memory.mp4" aria-label="Add memory" autoplay muted loop playsinline></video>
                    <video src="/assets/images/projects/paletteu/feature-view.mp4" aria-label="View all memories" autoplay muted loop playsinline></video>
                </div>
                <figcaption>Left: add a memory. Right: view all memories.</figcaption>
            </figure>
            <figure>
                <div class="figure-grid">
                    <video src="/assets/images/projects/paletteu/feature-addIsland.mp4" aria-label="Add island" autoplay muted loop playsinline></video>
                    <video src="/assets/images/projects/paletteu/feature-island.mp4" aria-label="View islands" autoplay muted loop playsinline></video>
                </div>
                <figcaption>Left: add an island — create your own memory island. Right: view islands — see the
                    important parts of your life.</figcaption>
            </figure>
            <figure>
                <div class="figure-grid">
                    <video src="/assets/images/projects/paletteu/feature-customize.mp4" aria-label="Customize dashboard" autoplay muted loop playsinline></video>
                    <video src="/assets/images/projects/paletteu/feature-train.mp4" aria-label="Memory train" autoplay muted loop playsinline></video>
                </div>
                <figcaption>Left: customize the dashboard so a memory shows what it means to you. Right: the memory
                    train brings back random memories.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Final demo</h2>
            <figure>
                <iframe src="https://www.youtube.com/embed/i4X9Y0rxINE" title="Palette U final demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <figcaption>A walkthrough of Palette U.</figcaption>
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
  title: 'Palette U',
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
