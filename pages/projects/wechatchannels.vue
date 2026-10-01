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
            <div><dt>Methods</dt><dd>Trend &amp; competitive analysis, speculative design, interactive prototype</dd></div>
        </dl>

        <p class="statement"><span class="statement-label">Research question</span>What does video creation look
            like when AI co-creates across the whole flow, instead of optimizing single tools — and how does the
            creator stay the author?</p>

        <section>
            <h2>Abstract</h2>
            <p class="lead">Channels' “one-tap video” stitches clips into a template. It doesn't create.</p>
            <p>For a Tencent WeChat Channels design challenge, I examined how AI is entering short-video creation,
                where current tools fall short, and what everyday creators struggle with. I propose a redesign in two
                parts — AI one-tap video and AI editing — that embeds AI into the moments creators already pass through,
                moving from instruction-based tools toward conversational co-creation. The work ends in three principles
                for bringing AI into a familiar creative flow without taking authorship away from people.</p>
        </section>

        <section>
            <h2>Context</h2>
            <p class="lead">Editing is shifting from “tool-oriented” to “intent-oriented”: AI is becoming a copilot
                that understands what a creator wants, not an automation plugin.</p>
            <p>WeChat's ecosystem has pushed Channels from social distribution toward content depth, and creation has
                become an everyday form of social expression. Its core creators are general lifestyle documenters and
                niche leaders aged 18–45 — most without scripting knowledge, filming gear, or editing skills.</p>
            <h3>Three problems with current one-tap video</h3>
            <p><strong>Mechanical</strong> — fixed templates with no narrative logic between clips.
                <strong>Low creativity</strong> — animated scaling, not new content.
                <strong>No perception</strong> — the system can't understand the video, so music and visuals
                mismatch.</p>
            <h3>How others approach it</h3>
            <p><strong>Xiaohongshu</strong> focuses on ambiance, with AI image expansion and chat-based refinement, but
                generation is unstable and hard to control precisely. <strong>CapCut</strong> offers a highly automated
                all-in-one tool, but feature overload creates a steep learning curve. Neither pairs strong generation
                with lightweight, controllable interaction.</p>
            <!-- TODO(research): did you talk to any Channels creators? Even 3–5 short conversations would ground the
                 pain points below in evidence rather than assumption. -->
        </section>

        <section>
            <h2>Design goals</h2>
            <p class="lead">Use AI throughout the creative workflow, not as single-point tool optimizations.</p>
            <h3>Embed into the existing UI</h3>
            <p>Creators already follow a stable path — enter, generate, edit, publish — so AI should appear at those
                moments rather than add new flows, keeping WeChat's restrained style.</p>
            <h3>Lower the creation barrier</h3>
            <p>Everyday users often don't know what to shoot, how to shoot it, or how to edit it — which reduces their
                willingness to create at all.</p>
            <h3>Instant and controllable</h3>
            <p>Generated results should appear instantly, and creators should be able to see, control, and adjust them
                until they match what they meant.</p>
        </section>

        <section>
            <h2>Design</h2>
            <p class="lead">Three pain points — don't know what to shoot, don't know how to edit, don't have enough
                clips — answered in two parts.</p>
            <h3>Part one — AI one-tap video: from stitching to creating</h3>
            <p>The original flow is select clips → apply template → auto-stitch → publish. The redesign adds a
                generation step: creators give instructions by text or voice, pick a style or reference video, and AI
                analyzes the content, writes a script, and generates matching clips. A conversational mode goes further:
                the AI reads the clips, points out narrative gaps, and suggests what to add — moving from
                instruction-based interaction toward co-creation.</p>
            <h3>Part two — AI editing inside the existing editor</h3>
            <p>Keeping every existing tool, the editor gains a global AI editing module, AI editing of individual clips
                mid-edit, and personalized decorations generated from a typed or spoken description that match the
                video's style.</p>
            <figure>
                <iframe class="figma-embed"
                    src="https://embed.figma.com/proto/fvgooKpozMN5v0OeOpOQcc/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%91%E5%8F%B7?node-id=34-64&viewport=-524%2C382%2C0.12&scaling=scale-down&content-scaling=fixed&starting-point-node-id=34%3A64&page-id=34%3A63&embed-host=share"
                    title="WeChat Channels × AI Figma prototype" loading="lazy" allowfullscreen></iframe>
                <figcaption>The interactive prototype — click through it here.</figcaption>
            </figure>
            <figure>
                <img v-for="i in 13" :key="i" :src="`/assets/images/projects/wechat-videohao/${lang}/slide-${i}.webp`"
                    :alt="`WeChat Channels AI proposal, slide ${i}`">
                <figcaption>
                    The full proposal, in thirteen slides.
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
            <h2>Principles</h2>
            <p class="lead">Three principles for introducing AI into a familiar creative flow — the main contribution
                of this work.</p>
            <h3>01 · Protect creative ownership</h3>
            <p>The creator remains the author. AI should provide inspiration and remove repetitive work, while people
                retain control over the idea, emotional tone, and final decision.</p>
            <h3>02 · Fit the existing habit</h3>
            <p>AI belongs inside the familiar Channels flow, not beside it as another complicated tool. Every
                intervention should make creating easier while preserving WeChat's restraint.</p>
            <h3>03 · Improve taste in context</h3>
            <p>Strong multimodal models are a starting point. Future iterations should learn the visual language of
                specific creator communities, from everyday skills to cultural-heritage content.</p>
            <p>These echo earlier work on mixed-initiative interfaces (Horvitz, 1999): the question is not only what
                AI can do, but when it should act, when it should suggest, and how easily a person can undo it.</p>
        </section>

        <section>
            <h2>Discussion</h2>
            <h3>Limitations</h3>
            <p>This is a speculative proposal made solo within a design challenge. It has not been tested with Channels
                creators, and the generation quality it assumes depends on models that are still improving.</p>
        </section>

        <section>
            <h2>Open questions</h2>
            <ol class="open-questions">
                <li>When AI proposes the story, how much of the result do creators still feel is theirs?</li>
                <li>Does conversational co-creation help beginners, or does it make every video converge on the same
                    style?</li>
                <li>How would creators judge the principles above after a week of using the prototype?</li>
            </ol>
            <p>The same question — what stays with people as AI does more of the making — runs through
                <a href="/projects/ai-brand-kit">AI Brand Kit</a> and
                <a href="/projects/aigc-video-automation">AIGC Video Automation</a>.</p>
        </section>

        <section>
            <h2>References</h2>
            <ol class="references">
                <li>Horvitz, E. (1999). Principles of Mixed-Initiative User Interfaces. <em>Proceedings of CHI
                    1999.</em></li>
            </ol>
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
