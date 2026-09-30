<template>
<AppHeader />
<img class="hero-image" src="/assets/images/projects/wechat-videohao/cover.webp" alt="WeChat Channels AI case study cover">

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2026</p>
            <h1>WeChat Channels × AI</h1>
            <p class="lead">A design challenge for the Tencent WeChat Channels team — rethinking video creation with
                AI, moving from clip assembly toward true human–AI co-creation.</p>
        </header>

        <dl class="project-facts">
            <div><dt>Timeline</dt><dd>Mar 2026</dd></div>
            <div><dt>Team</dt><dd>Solo</dd></div>
            <div><dt>Role</dt><dd>Product Designer</dd></div>
            <div><dt>Skills</dt><dd>Figma, AI Product Design</dd></div>
        </dl>

        <p class="statement">How can AI reshape the entire creation flow of WeChat Channels, rather than only
            optimizing single-point tools?</p>

        <section>
            <h2>Figma prototype</h2>
            <figure>
                <iframe class="figma-embed"
                    src="https://embed.figma.com/proto/fvgooKpozMN5v0OeOpOQcc/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%91%E5%8F%B7?node-id=34-64&viewport=-524%2C382%2C0.12&scaling=scale-down&content-scaling=fixed&starting-point-node-id=34%3A64&page-id=34%3A63&embed-host=share"
                    title="WeChat Channels × AI Figma prototype" loading="lazy" allowfullscreen></iframe>
                <figcaption>The interactive prototype — click through it here.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Design proposal</h2>
            <figure>
                <img v-for="i in 13" :key="i" :src="`/assets/images/projects/wechat-videohao/${lang}/slide-${i}.webp`"
                    :alt="`WeChat Channels AI proposal, slide ${i}`">
                <figcaption>
                    The proposal, in thirteen slides.
                    <span class="slide-language">
                        Show in
                        <button type="button" :aria-pressed="lang === 'en'" @click="lang = 'en'">English</button>
                        /
                        <button type="button" :aria-pressed="lang === 'zh'" @click="lang = 'zh'">中文</button>
                    </span>
                </figcaption>
            </figure>
        </section>

        <section>
            <h2>Reflection</h2>
            <p class="lead">Three principles shaped how I introduced AI into a familiar creation flow.</p>
            <h3>01 · Protect creative ownership</h3>
            <p>The creator remains the author. AI should provide inspiration and remove repetitive work, while people
                retain control over the idea, emotional tone, and final decision.</p>
            <h3>02 · Fit the existing habit</h3>
            <p>AI belongs inside the familiar Channels flow, not beside it as another complicated tool. Every
                intervention should make creating easier while preserving WeChat's restraint.</p>
            <h3>03 · Improve taste in context</h3>
            <p>Strong multimodal models are a starting point. Future iterations should learn the visual language of
                specific creator communities, from everyday skills to cultural-heritage content.</p>
        </section>

        <section class="next-project-section">
            <h2>More projects</h2>
            <ProjectGrid :items="pickProjects('/projects/albertplus', '/projects/intertabs')" />
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
import { ref } from 'vue';

// The proposal slides exist in English and Chinese.
const lang = ref('en');

useHead({
  title: 'WeChat Channels × AI',
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
