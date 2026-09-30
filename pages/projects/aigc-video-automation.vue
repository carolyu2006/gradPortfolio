<template>
<AppHeader />
<img class="hero-image" src="/assets/images/projects/aigc-video-automation/cover.webp" alt="AIGC e-commerce advertisement video examples">

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2026</p>
            <h1>AIGC Video Automation</h1>
            <p class="lead">Creating a reusable workflow for generating trend-led video ads.</p>
        </header>

        <dl class="project-facts">
            <div><dt>Timeline</dt><dd>Jun – Aug 2026</dd></div>
            <div><dt>Team</dt><dd>2 Designers, 1 Product Manager, 1 Developer</dd></div>
            <div><dt>Role</dt><dd>AI Product Design Intern @TikTok</dd></div>
            <div><dt>Skills</dt><dd>AI Workflow, AIGC, Prompt Engineering, Video Strategy</dd></div>
        </dl>

        <section>
            <h2>Overview</h2>
            <p class="lead">During my internship at TikTok, my team collaborated with the TikTok User Growth team to
                explore how AIGC can turn product and trend signals into better-performing e-commerce advertisement
                videos.</p>
            <figure class="figure-float">
                <video controls muted loop playsinline preload="none"
                    poster="/assets/images/projects/aigc-video-automation/overview-demo-poster.webp"
                    src="/assets/images/projects/aigc-video-automation/overview-demo.mp4"
                    aria-label="AIGC video automation overview demo"></video>
                <figcaption>An overview of the generated ad videos.</figcaption>
            </figure>
            <p>The work covered three parts:</p>
            <ul>
                <li><strong>AI workflow building</strong> — exploring how to create a workflow that generates
                    high-quality videos with no human intervention.</li>
                <li><strong>Prompt engineering</strong> — editing prompts for plot, script, character, and scene
                    descriptions to support a reusable AIGC workflow with strong results.</li>
                <li><strong>Video strategy</strong> — exploring different video formats and styles, then evaluating how
                    effectively they can be produced through the workflow.</li>
            </ul>
            <p class="statement">Goal: create advertisement videos that deliver strong performance results, and build a
                workflow that can later support automatic generation at scale.</p>
        </section>

        <section id="features">
            <h2>Solution</h2>
            <p class="lead">A creative automation workflow that turns one product brief into several ad-video
                directions.</p>
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/aigc-video-automation/workflow-diagram.webp"
                        alt="Creative generation workflow: product extraction, plot and script generation, character and scene assets, video clips, and final output.">
                    <div class="figure-grid">
                        <video v-for="video in solutionVideos" :key="video.src" :src="video.src" :poster="video.poster"
                            :aria-label="`${video.label} video demo`" controls muted loop playsinline preload="none"></video>
                    </div>
                </div>
                <figcaption>Left: the workflow — product extraction, plot and script generation, character and scene
                    assets, video clips, and the final output. Right: generated ads in two formats, AI short drama and
                    3D animation.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Impact</h2>
            <p class="lead">Strong delivery results led to automation at scale — and a next system to keep templates
                current.</p>
            <h3>Strong delivery results</h3>
            <p>Generated materials outperformed agency-made and other production-path baselines. On average, a single
                creative drove <strong>400+ new additions</strong> and <strong>~7k in spend</strong> on TikTok.</p>
            <h3>Automating the workflow</h3>
            <p>TikTok is putting the workflow into automation to create similar videos at scale.</p>
            <h3>Expanding the system</h3>
            <p>TikTok is developing a new system to capture hot topics and high-performing videos and turn them into
                video workflow templates.</p>
        </section>

        <section>
            <h2>Reflection</h2>
            <p class="lead">Through this internship I got hands-on experience with different video and image AIGC
                models and with building AI workflows. With this understanding, I hope to explore how AI workflows can
                make everyday work more efficient and effective.</p>
            <h3>Explore formats before automating them</h3>
            <p>I tested short-drama insertion, rapid remix, AI short drama, animation, and IP-led routes to understand
                where each structure could create attention for a product.</p>
            <h3>Let performance shape the next template</h3>
            <p>The most valuable output is not one video; it is a system that can learn from strong results and create
                the next automated template faster.</p>
        </section>

        <section class="next-project-section">
            <h2>More projects</h2>
            <ProjectGrid :items="pickProjects('/projects/everstream', '/projects/mbtiidealpartner')" />
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
const mediaBase = '/assets/images/projects/aigc-video-automation';

const solutionVideos = [
  { label: 'AI short drama 01', src: `${mediaBase}/ai-drama-01.mp4`, poster: `${mediaBase}/ai-drama-01-poster.webp` },
  { label: '3D animation 01', src: `${mediaBase}/animation-01.mp4`, poster: `${mediaBase}/animation-01-poster.webp` },
  { label: '3D animation 02', src: `${mediaBase}/animation-02.mp4`, poster: `${mediaBase}/animation-02-poster.webp` },
  { label: 'AI short drama 02', src: `${mediaBase}/ai-drama-02.mp4`, poster: `${mediaBase}/ai-drama-02-poster.webp` }
];

useHead({
  title: 'AIGC Video Automation',
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
