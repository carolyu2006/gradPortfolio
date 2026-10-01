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
            <div><dt>Role</dt><dd>Designer, Full-Stack Developer &amp; Researcher</dd></div>
            <div><dt>Methods</dt><dd>Interviews (20+), market analysis, 3D prototyping, public release</dd></div>
        </dl>

        <p class="statement"><span class="statement-label">Research question</span>Can a spatial metaphor — a memory
            palace you build yourself — make recording memories feel more personal and easier to keep up?</p>

        <section>
            <h2>Abstract</h2>
            <p class="lead">We are flooded with new information and experiences, while the moments that matter most
                quietly fade away.</p>
            <p>Interviews with 20+ people who journal or keep diaries showed that memories are relational, organized
                by person, place, or life stage, and easily lost when capturing them takes effort. Palette U turns
                these findings into a website where people record memories quickly and arrange them as islands in their
                own 3D memory palace, with a “memory train” that brings random memories back. It began as the final
                project for NYU's Networked Media and Intro to Three.js courses and grew into a complete personal
                project, reaching 2,000+ views after launch.</p>
        </section>

        <section>
            <h2>Context</h2>
            <p class="lead">Placing memories in imagined space is one of the oldest memory techniques there is.</p>
            <p>The method of loci — the “memory palace” — uses familiar places to hold things one wants to remember
                (Yates, 1966). In HCI, work on everyday reminiscence such as Pensieve (Peesapati et al., 2010) showed
                that small, unprompted triggers can lead people to revisit and value their own past. Existing memory and
                journaling apps mostly offer a feed or a calendar; few give people a space of their own to organize
                memories in.</p>
            <figure>
                <img class="on-surface" src="/assets/images/projects/paletteu/research1.webp" alt="Comparison of existing memory apps">
                <figcaption>Existing memory apps, compared.</figcaption>
            </figure>
            <p class="statement">Gap: a memory-palace experience that makes storing effortless while keeping a clear and
                meaningful organization.</p>
        </section>

        <section>
            <h2>Method</h2>
            <!-- TODO(research): add the exact number of interviews, who the participants were (ages, journaling
                 habits), and how you synthesized the findings. -->
            <p>I interviewed 20+ teenagers, students, and young adults who journal or keep a diary about how they
                relate to their memories and what stops them from preserving them. Alongside the interviews, I compared
                existing memory apps, mapped the site structure, and built the palace iteratively in Blender and
                Three.js.</p>
            <figure>
                <img src="/assets/images/projects/paletteu/site_map.webp" alt="Palette U site map">
                <figcaption>The site map.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Formative findings</h2>
            <h3>Memory is relational</h3>
            <ul>
                <li>Memories are most meaningful when tied to <strong>people and relationships</strong>.</li>
                <li>People want to revisit and share memories with others.</li>
                <li>Small triggers (a song, a drink) spark a whole wave of nostalgia.</li>
            </ul>
            <h3>Context and organization matter</h3>
            <ul>
                <li>People think in categories — <strong>by person, place, or life stage</strong>.</li>
                <li>A timeline view helps people navigate rather than just scroll.</li>
                <li>Linked memories show the full picture of a moment.</li>
            </ul>
            <h3>Friction kills the habit</h3>
            <ul>
                <li>People are too busy for lengthy journaling rituals.</li>
                <li>The best capture methods are <strong>fast and low-effort</strong>.</li>
                <li>Even a single random photo can revive a full memory.</li>
            </ul>
        </section>

        <section id="features">
            <h2>Design</h2>
            <p class="lead">Each part of the palace answers one of the findings.</p>
            <h3>Quick capture → friction kills the habit</h3>
            <p>Adding a memory is kept short, and everything can be browsed together afterwards.</p>
            <!-- TODO(research): say exactly what a memory needs (a photo? a date? a few words?). -->
            <figure>
                <div class="figure-grid">
                    <video src="/assets/images/projects/paletteu/feature-memory.mp4" aria-label="Add memory" autoplay muted loop playsinline></video>
                    <video src="/assets/images/projects/paletteu/feature-view.mp4" aria-label="View all memories" autoplay muted loop playsinline></video>
                </div>
                <figcaption>Left: add a memory. Right: view all memories.</figcaption>
            </figure>
            <h3>Memory islands → context and organization</h3>
            <p>People create islands for the important parts of their lives — a person, a place, a life stage — and
                arrange their memories there.</p>
            <figure>
                <div class="figure-grid">
                    <video src="/assets/images/projects/paletteu/feature-addIsland.mp4" aria-label="Add island" autoplay muted loop playsinline></video>
                    <video src="/assets/images/projects/paletteu/feature-island.mp4" aria-label="View islands" autoplay muted loop playsinline></video>
                </div>
                <figcaption>Left: add an island — create your own memory island. Right: view islands — see the
                    important parts of your life.</figcaption>
            </figure>
            <h3>Memory train → small triggers</h3>
            <p>A customizable dashboard lets each memory show what it means to its owner, and the memory train
                resurfaces random memories, the way a song or a photo does.</p>
            <figure>
                <div class="figure-grid">
                    <video src="/assets/images/projects/paletteu/feature-customize.mp4" aria-label="Customize dashboard" autoplay muted loop playsinline></video>
                    <video src="/assets/images/projects/paletteu/feature-train.mp4" aria-label="Memory train" autoplay muted loop playsinline></video>
                </div>
                <figcaption>Left: customize the dashboard so a memory shows what it means to you. Right: the memory
                    train brings back random memories.</figcaption>
            </figure>
            <figure>
                <img src="/assets/images/projects/paletteu/visual_design.webp" alt="Palette U visual design">
                <figcaption>Logo, colour, and type.</figcaption>
            </figure>
            <figure>
                <iframe src="https://www.youtube.com/embed/i4X9Y0rxINE" title="Palette U final demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <figcaption>A walkthrough of Palette U.</figcaption>
            </figure>
        </section>

        <!-- TODO(research): add a Findings section if you can — how many people signed up, how many came back after
             a week, and what 3–5 users said after using it. Views alone don't show whether the palace helped.
        <section>
            <h2>Findings</h2>
        </section>
        -->

        <section>
            <h2>Discussion</h2>
            <h3>Space as organization</h3>
            <p>A 3D palace turns categories into places. Whether that makes memories easier to find — or simply more
                pleasant to keep — is the question this project raises but has not yet answered.</p>
            <h3>Limitations</h3>
            <p>Palette U has not been evaluated with users over time. The 2,000+ views measure reach, not whether
                people kept recording memories or found the spatial layout more meaningful than a list. It was also my
                first Three.js and backend project, which limited how far the 3D interaction could go.</p>
        </section>

        <section>
            <h2>Open questions</h2>
            <ol class="open-questions">
                <li>Does arranging memories in space help people recall them, or mostly make recording feel
                    meaningful?</li>
                <li>What should a memory palace look like when it is shared with the people in it?</li>
                <li>How often should a system resurface a memory before it stops feeling like a gift?</li>
            </ol>
            <p>Like <a href="/projects/intertabs">interTabs</a> and <a href="/projects/cosmasense">Cosma Sense</a>,
                this asks how tools can hold on to what matters for people.</p>
        </section>

        <section>
            <h2>Contribution</h2>
            <p>A solo project. I did the research, design, and development:</p>
            <ul>
                <li><strong>Research</strong> — user interviews and market research.</li>
                <li><strong>UI/UX design &amp; 3D modeling</strong> — the website, the logo, and the memory islands,
                    modeled in Blender.</li>
                <li><strong>Frontend &amp; Three.js</strong> — the 3D visualization and interaction.</li>
                <li><strong>Backend</strong> — Express.js and MySQL to store user data and the memory islands.</li>
                <li><strong>Launch</strong> — marketing materials that brought the project 2,000+ views.</li>
            </ul>
            <p><strong>Tools:</strong> Three.js, HTML/CSS, JavaScript, Blender, Figma, Express.js, SQL.</p>
        </section>

        <section>
            <h2>References</h2>
            <ol class="references">
                <li>Peesapati, S. T., Schwanda, V., Schultz, J., Lepage, M., Jeong, S., &amp; Cosley, D. (2010).
                    Pensieve: Supporting Everyday Reminiscence. <em>Proceedings of CHI 2010.</em></li>
                <li>Yates, F. A. (1966). <em>The Art of Memory.</em> Routledge &amp; Kegan Paul.</li>
            </ol>
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
