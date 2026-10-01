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
            <div><dt>Methods</dt><dd>Format exploration, AI workflow design, prompt engineering, live ad delivery</dd></div>
        </dl>

        <p class="statement"><span class="statement-label">Research question</span>Can product data and cultural
            trends be turned into platform-native video ads automatically — and where does a person still need to
            step in?</p>

        <section>
            <h2>Abstract</h2>
            <p class="lead">Short-form ads live or die on whether they feel native to the feed — which usually means
                human creators, agencies, and time.</p>
            <figure class="figure-float">
                <video controls muted loop playsinline preload="none"
                    poster="/assets/images/projects/aigc-video-automation/overview-demo-poster.webp"
                    src="/assets/images/projects/aigc-video-automation/overview-demo.mp4"
                    aria-label="AIGC video automation overview demo"></video>
                <figcaption>An overview of the generated ad videos.</figcaption>
            </figure>
            <p>With the TikTok User Growth team, we explored whether generative video models could turn a product brief
                and trend signals into e-commerce ads. I tested five video formats, built a workflow that goes from
                product information to plot, script, characters, scenes, and finished clips, and engineered the prompts
                at each step. In live delivery, the generated ads outperformed agency-made and other production-path
                baselines, and TikTok is now automating the workflow.</p>
        </section>

        <section>
            <h2>Context</h2>
            <p class="lead">Generative video can now produce a convincing clip. Producing a whole ad — a story, a
                consistent character, a product shown correctly — is a workflow problem, not a single prompt.</p>
            <p>The goal was twofold: make ads that perform, and build a workflow that could later generate them at scale
                with little or no human intervention. That meant deciding which ad structures suit generation at all,
                before trying to automate them.</p>
        </section>

        <section>
            <h2>Method</h2>
            <h3>01 — Explore formats before automating them</h3>
            <p>I tested five routes — short-drama insertion, rapid remix, AI short drama, animation, and IP-led — to
                understand where each structure could create attention for a product, and how reliably each could be
                produced through a workflow.</p>
            <!-- TODO(research): a small table here would help — format × how it was made × production reliability ×
                 performance. Say which formats you dropped and why. -->
            <h3>02 — Build the workflow</h3>
            <p>I broke the ad into steps a model could do reliably on its own: extract the product, generate the plot
                and script, generate character and scene assets, generate clips, and assemble the final video.</p>
            <h3>03 — Prompt engineering at each step</h3>
            <p>I wrote and revised prompts for plot, script, character, and scene descriptions so the steps stayed
                consistent with one another and could be reused across products.</p>
            <h3>04 — Deliver and measure</h3>
            <p>Generated ads ran as live campaigns on TikTok and were compared with ads from other production paths.</p>
        </section>

        <section id="features">
            <h2>System</h2>
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
            <h2>Findings</h2>
            <p class="lead">The generated ads outperformed the baselines — and the result changed what the team built
                next.</p>
            <h3>Delivery results</h3>
            <!-- TODO(research): define the metrics (what is a “new addition”?), the comparison period, how many
                 creatives were compared, and what the baselines were. -->
            <p>Generated materials outperformed agency-made and other production-path baselines. On average, a single
                creative drove <strong>400+ new additions</strong> and <strong>~7k in spend</strong> on TikTok.</p>
            <h3>From workflow to automation</h3>
            <p>TikTok is putting the workflow into automation to create similar videos at scale, and is developing a
                system that captures hot topics and high-performing videos and turns them into new workflow
                templates.</p>
            <!-- TODO(research): which steps still needed a person (checking the product, picking takes, fixing
                 continuity)? The original goal was no human intervention — say honestly how close it got. -->
        </section>

        <section>
            <h2>Discussion</h2>
            <h3>Let performance shape the next template</h3>
            <p>The most valuable output is not one video; it is a system that learns from strong results and produces
                the next template faster. Creative direction shifts from making each ad to deciding what the system
                should learn from.</p>
            <h3>Limitations</h3>
            <p>Performance was measured in a commercial setting over a short period, and details are limited by
                confidentiality. Ad performance also says little about how viewers perceive AI-generated content, or
                how it should be disclosed to them.</p>
        </section>

        <section>
            <h2>Open questions</h2>
            <ol class="open-questions">
                <li>Which creative decisions should stay with people when a workflow can generate ads end to end?</li>
                <li>How should AI-generated ads be disclosed, and does disclosure change how they perform?</li>
                <li>Can a workflow keep up with culture, or will it always optimize for last week's trend?</li>
            </ol>
            <p>The same tension — automation versus human authorship — runs through
                <a href="/projects/wechatchannels">WeChat Channels × AI</a>.</p>
        </section>

        <section>
            <h2>Contribution</h2>
            <!-- TODO(research): separate your part from the other designer's. -->
            <p>I explored and evaluated the video formats, built the generation workflow, and wrote the prompts for
                plot, script, character, and scene.</p>
            <p><strong>Tools:</strong> image and video generation models, AI workflow tools, prompt engineering.</p>
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
