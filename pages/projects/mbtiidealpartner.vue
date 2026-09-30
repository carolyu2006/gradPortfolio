<template>
<AppHeader />
<img class="hero-image" src="/assets/images/projects/mbti/cover.webp" alt="MBTI Ideal Partner">

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2025</p>
            <h1>MBTI Ideal Partner</h1>
            <p class="lead">An interactive WeChat Mini Program that helps users find their ideal MBTI partner.</p>
        </header>

        <dl class="project-facts">
            <div><dt>Timeline</dt><dd>Feb 2025 – Jul 2025</dd></div>
            <div><dt>Team</dt><dd>1 Artist/Developer, 2 Consultants, 1 Marketing</dd></div>
            <div><dt>Role</dt><dd>Project Manager, Development Lead &amp; Design Lead</dd></div>
            <div><dt>Skills</dt><dd>Figma, WXML, WXSS, JavaScript, Adobe Illustrator</dd></div>
        </dl>

        <section>
            <h2>Overview</h2>
            <p class="lead">A WeChat Mini Program for finding your ideal MBTI match, reaching 1,500+ users and 500+
                likes.</p>
            <p>The program focuses on interactivity through code and art, and on keeping users engaged through the
                process to grow the user base. My roles and responsibilities:</p>
            <ul>
                <li><strong>Leadership</strong> — leading the team through research, ideation, design, development,
                    user testing, and marketing.</li>
                <li><strong>Design</strong> — the visual design and UI/UX, including the character design and
                    interactive elements.</li>
                <li><strong>Development</strong> — the front end, focusing on interactive CSS animation and
                    transitions.</li>
                <li><strong>Concept &amp; UX</strong> — shaping the core concept through ideation, user insight, and
                    experience strategy, considering psychology and user flow.</li>
            </ul>
            <figure>
                <div class="figure-grid">
                    <video src="/assets/images/projects/mbti/video.mp4" autoplay muted loop playsinline
                        aria-label="MBTI Ideal Partner walkthrough"></video>
                    <img src="/assets/images/projects/mbti/qrcode.webp" alt="QR code for the MBTI Ideal Partner Mini Program">
                </div>
                <figcaption>Left: a walkthrough of the Mini Program (also on
                    <a href="https://youtube.com/shorts/xU0D0vRQFwU" target="_blank" rel="noopener noreferrer">YouTube</a>).
                    Right: scan in WeChat to try it.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Visual design</h2>
            <figure>
                <img class="on-surface" src="/assets/images/projects/mbti/avatarDesign.webp" alt="Character design exploration">
                <figcaption>Character design exploration.</figcaption>
            </figure>
            <figure>
                <img class="on-surface" src="/assets/images/projects/mbti/avatarDesignFinal.webp" alt="Final character designs">
                <figcaption>The final characters.</figcaption>
            </figure>
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/mbti/visualDesign.webp" alt="Visual design">
                    <img src="/assets/images/projects/mbti/colorDesign.webp" alt="Colour design">
                </div>
                <figcaption>Visual language and colour.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Frontend design &amp; dev</h2>
            <p class="lead">Designed and developed the front end, focusing on interactive CSS animation and
                transitions.</p>
            <p>I strongly considered how to make the interaction flow more engaging and smooth for the user.</p>
            <figure>
                <div class="figure-grid figure-grid--wide-tall">
                    <img src="/assets/images/projects/mbti/dev.webp" alt="Front-end development">
                    <img src="/assets/images/projects/mbti/ui.webp" alt="Mini Program screens">
                </div>
                <figcaption>Left: front-end development. Right: the Mini Program's screens.</figcaption>
            </figure>
        </section>

        <!-- <section>
            <h2>Notes from Carol</h2>
            <p>Leading this project and conteibuting from every parts, from concept, design, development, user testing,
                and marketing. I strongly connected to each part, and noticed how </p>
        </section> -->

        <section class="next-project-section">
            <h2>More projects</h2>
            <ProjectGrid :items="pickProjects('/projects/ai-brand-kit', '/projects/aigc-video-automation')" />
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
useHead({
  title: 'MBTI Ideal Partner',
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
