<template>
<AppHeader />
<img class="hero-image" src="/assets/images/covers/cosmasense.webp" alt="Cosma Sense">

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2026</p>
            <h1>Cosma Sense</h1>
            <p class="lead">A local-first, AI-powered search engine that indexes your files and lets you find
                information semantically.</p>
            <p class="project-links">
                <a class="btn" href="https://cosmasense.tech/" target="_blank" rel="noopener noreferrer">Visit cosmasense.tech</a>
                <a class="btn" href="https://github.com/cosmasense/cosma" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
        </header>

        <dl class="project-facts">
            <div><dt>Year</dt><dd>2026</dd></div>
            <!-- TODO(research): add the team (size and roles) — the GitHub org suggests this wasn't solo. -->
            <div><dt>Role</dt><dd>Product Designer &amp; Frontend Developer</dd></div>
            <div><dt>Platform</dt><dd>macOS app + landing page</dd></div>
            <div><dt>Methods</dt><dd>Product design, working prototype</dd></div>
        </dl>

        <p class="statement"><span class="statement-label">Research question</span>How can people find their own
            files by what they remember about them — without handing those files to the cloud?</p>

        <section>
            <h2>Abstract</h2>
            <p class="lead">We rarely remember where we saved something. We remember what it looked like, what it was
                about, or when we last used it.</p>
            <p>Desktop search still asks for the first kind of memory: a file name, a folder, a keyword. Cosma Sense
                indexes the files on a computer and understands what is inside them — images, PDFs, audio, video, and
                documents — so people can search in natural language for what they remember. It runs local-first, so
                that semantic understanding of personal files doesn't require uploading them. I designed the product
                experience and built the landing page.</p>
        </section>

        <section>
            <h2>Context</h2>
            <p class="lead">Re-finding personal information is a long-standing problem in HCI.</p>
            <p>Systems like Stuff I've Seen (Dumais et al., 2003) showed the value of a single index across a
                person's email, files, and web pages, searched by the cues people actually remember. At the same time,
                studies of search behaviour (Teevan et al., 2004) found that people often prefer to navigate step by
                step to a known location rather than type a query. Cosma Sense sits in that tension: modern language
                and vision models make meaning-based search far more capable than keyword search, but they raise a new
                question about where personal data is processed.</p>
            <!-- TODO(research): add a short comparison with Spotlight / Finder and any other semantic search tools you
                 looked at (a table or image like the interTabs competitor chart). -->
        </section>

        <!-- TODO(research): add a Method section once you have it. Even a small study makes this page much stronger:
             1. Formative — ask 5–8 people to describe the last file they struggled to find, and how they found it.
             2. Evaluation — give the same people re-finding tasks in Finder/Spotlight vs. Cosma Sense; record time and
                success rate.
        <section>
            <h2>Method</h2>
        </section>
        -->

        <section id="features">
            <h2>Design</h2>
            <p class="lead">Four interactions, from indexing a folder to using the file you found.</p>

            <h3>Drop a folder. See everything inside.</h3>
            <p>Drag in a folder and AI analyzes its contents, generating summaries and previews you can quickly
                scroll through.</p>
            <figure>
                <video src="/assets/images/projects/cosmasense/feature1.mp4" autoplay muted loop playsinline></video>
                <figcaption>Indexing a folder and browsing AI summaries.</figcaption>
            </figure>

            <h3>Search by what you remember</h3>
            <p>Type natural language like “the receipt from last night” or “the file with the blue logo” and find the
                right file.</p>
            <figure>
                <video src="/assets/images/projects/cosmasense/feature2.mp4" autoplay muted loop playsinline></video>
                <figcaption>Semantic search in natural language.</figcaption>
            </figure>

            <h3>Work across every file type</h3>
            <p>Images, PDFs, audio, video, and documents are understood from one unified interface.</p>
            <figure>
                <video src="/assets/images/projects/cosmasense/feature3.mp4" autoplay muted loop playsinline></video>
                <figcaption>One interface for every file type.</figcaption>
            </figure>

            <h3>Every search becomes a clear flow</h3>
            <p>Drag results directly into emails, browser uploads, or other apps without digging through folders.</p>
            <figure>
                <video src="/assets/images/projects/cosmasense/feature4.mp4" autoplay muted loop playsinline></video>
                <figcaption>Dragging search results straight into other apps.</figcaption>
            </figure>

            <!-- TODO(research): add 2–3 design decisions with the reasoning behind them, e.g. how a result shows why it
                 matched, what happens when the match is wrong, and what the local-first choice cost you. -->
        </section>

        <section>
            <h2>Discussion</h2>
            <h3>Local-first as a design constraint</h3>
            <p>Keeping indexing on the device protects files that are often the most personal data a person owns, but
                it limits which models can run and how fast. That trade-off is part of the design, not only the
                engineering.</p>
            <h3>Limitations</h3>
            <p>Cosma Sense has not yet been evaluated with users. We don't yet know how often semantic results match
                what people meant, or whether people trust a search they can't see the logic of.</p>
        </section>

        <section>
            <h2>Open questions</h2>
            <ol class="open-questions">
                <li>When a semantic match is wrong, how should the interface help someone recover?</li>
                <li>Does searching by memory change how carefully people organize their files in the first place?</li>
                <li>How much does “local-first” matter to people when they decide whether to trust an AI with their
                    files?</li>
            </ol>
            <p>This continues the question behind <a href="/projects/intertabs">interTabs</a>: how tools can hold
                on to information for people, instead of asking them to.</p>
        </section>

        <section>
            <h2>Contribution</h2>
            <ul>
                <li><strong>Product design</strong> — the product experience of the macOS app.</li>
                <li><strong>Branding</strong> — the visual identity.</li>
                <li><strong>Frontend development</strong> — the landing page, built in Nuxt with GSAP.</li>
            </ul>
        </section>

        <section>
            <h2>References</h2>
            <ol class="references">
                <li>Dumais, S., Cutrell, E., Cadiz, J. J., Jancke, G., Sarin, R., &amp; Robbins, D. C. (2003). Stuff
                    I've Seen: A System for Personal Information Retrieval and Re-Use. <em>Proceedings of SIGIR
                    2003.</em></li>
                <li>Teevan, J., Alvarado, C., Ackerman, M. S., &amp; Karger, D. R. (2004). The Perfect Search Engine Is
                    Not Enough: A Study of Orienteering Behavior in Directed Search. <em>Proceedings of CHI
                    2004.</em></li>
            </ol>
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
useHead({
  title: 'Cosma Sense',
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
