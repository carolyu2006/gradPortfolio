<template>
<AppHeader />
<img class="hero-image" src="/assets/images/projects/intertabs/cover2.webp" alt="interTabs">

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2025</p>
            <h1>interTabs</h1>
            <p class="lead">An AI-powered Chrome extension that manages tabs.</p>
            <p class="project-award">1st Place &amp; Best UI/UX at HOF Hack 2025</p>
            <p class="project-links">
                <a class="btn" href="https://www.intertabs.com/" target="_blank" rel="noopener noreferrer">View official website</a>
            </p>
        </header>

        <dl class="project-facts">
            <div><dt>Timeline</dt><dd>May 2025 – Aug 2025</dd></div>
            <div><dt>Team</dt><dd>4 members</dd></div>
            <div><dt>Role</dt><dd>Lead Designer &amp; Frontend Developer</dd></div>
            <div><dt>Methods</dt><dd>Interviews (20+), competitive analysis, iterative prototyping, public release</dd></div>
        </dl>

        <p class="statement"><span class="statement-label">Research question</span>Why do people keep tabs open that
            they are no longer reading — and can AI grouping lower the cost of letting them go?</p>

        <section>
            <h2>Abstract</h2>
            <p class="lead">Browser tabs have become an informal working memory: people keep them open not to read
                them, but because closing one feels like losing something.</p>
            <p>Interviews with 20+ browser users showed three connected problems — tabs that can't be found, tabs
                people are afraid to close, and a browser slowed down by both — reinforcing one another in a loop. We
                designed interTabs, a Chrome extension that saves tabs as task-based Sessions and uses AI to name and
                group them, so closing a tab no longer means losing it. Built at HOF Hack 2025 (1st Place, Best UI/UX,
                Best Beginner Hack), it was later published to the Chrome Web Store and launched by
                <a href="https://interfinity.tech/" target="_blank" rel="noopener noreferrer">interfinity Limited</a>,
                where it gathered early feedback from real users.</p>
            <figure class="figure-float">
                <img src="/assets/images/projects/intertabs/hofHack.webp" alt="interTabs on Devpost with the winner ribbon">
                <figcaption>interTabs on <a href="https://devpost.com/software/intertabs" target="_blank"
                        rel="noopener noreferrer">Devpost</a>, HOF Hack 2025.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Context</h2>
            <p class="lead">Tab overload is a known problem, both in HCI research and in the market.</p>
            <p>HCI research on browser tabs (Chang et al., 2021) describes the same pattern our interviews surfaced:
                tabs act as reminders and placeholders for unfinished work, and people keep them open because closing
                them has a perceived cost. Existing tab-manager extensions mostly address the symptom — listing,
                suspending, or searching tabs — rather than that cost.</p>
            <figure>
                <img class="on-surface" src="/assets/images/projects/intertabs/research1.webp" alt="Comparison of existing tab-manager extensions">
                <figcaption>Existing tab managers, compared. None sorted tabs by task automatically.</figcaption>
            </figure>
            <p class="statement">Gap: a tool that makes closing tabs safe by grouping them according to what the user is
                working on.</p>
        </section>

        <section>
            <h2>Method</h2>
            <h3>01 — Formative interviews</h3>
            <!-- TODO(research): add the exact number, who they were (fields, ages), how they were recruited, and how
                 you synthesized them (e.g. affinity mapping). -->
            <p>I interviewed 20+ browser users from different fields and age groups — students, teachers, office
                workers, and researchers — about how they open, keep, and lose tabs.</p>
            <h3>02 — Competitive analysis</h3>
            <p>I compared existing tab-manager extensions on how they group, save, and restore tabs.</p>
            <h3>03 — Iterative prototyping</h3>
            <p>From early product thinking in Figma to prototype reviews and real-world testing, I iterated on the
                information architecture, interaction flow, and visual system.</p>
            <figure>
                <img src="/assets/images/projects/intertabs/process-fgma.webp" alt="interTabs Figma exploration and design process">
                <div class="figure-grid">
                    <img src="/assets/images/projects/intertabs/process.webp" alt="interTabs extension testing on laptop">
                    <img src="/assets/images/projects/intertabs/process2.webp" alt="interTabs interface review in Figma">
                </div>
                <figcaption>Exploration in Figma, testing on a laptop, and interface review.</figcaption>
            </figure>
            <h3>04 — Public release</h3>
            <p>Publishing to the Chrome Web Store turned the prototype into a field deployment, with feedback from
                people outside our team.</p>
        </section>

        <section>
            <h2>Formative findings</h2>
            <p class="lead">The problems are interrelated and form a cycle: the more tabs people keep, the harder each
                one is to find — and the less willing they are to close any of them.</p>
            <h3>Can't find the tab</h3>
            <blockquote><p>“The biggest problem is that there are too many tabs and I can't find the one I need.”</p></blockquote>
            <h3>Afraid to close tabs</h3>
            <blockquote><p>“Tabs need to be reused for certain projects or classes, so we don't want to close them. But
                    they just pile up.”</p></blockquote>
            <h3>Slowing everything down</h3>
            <blockquote><p>“There are so many tabs open, slowing down both me and the computer.”</p></blockquote>
            <figure>
                <img src="/assets/images/projects/intertabs/problem.webp" alt="A browser tab bar crowded with dozens of tabs">
                <figcaption>Tab overload: so many tabs that none of them can be read.</figcaption>
            </figure>
        </section>

        <section id="features">
            <h2>Design</h2>
            <p class="lead">Four features, each answering a finding from the interviews.</p>

            <h3>Save tabs as Sessions</h3>
            <p>Save your tabs as a Session you can reopen anytime, with separate Sessions for different tasks.</p>
            <p><strong>From the research:</strong> users avoid closing tabs they still need later; Sessions make
                closing safe and keep project-based work easy to return to.</p>
            <figure>
                <img class="on-surface" src="/assets/images/projects/intertabs/feature2.webp" alt="Saving the open tabs as a Session">
                <figcaption>Saving a window's tabs as a Session.</figcaption>
            </figure>

            <h3>Smart labeling</h3>
            <p>AI suggests names for tab groups based on their content — the user can edit them anytime.</p>
            <p><strong>From the research:</strong> people struggled to find the right tab once too many were open;
                labels make saved groups easier to scan and recognize.</p>
            <figure>
                <img class="on-surface" src="/assets/images/projects/intertabs/feature4.webp" alt="Sessions labeled automatically by AI">
                <figcaption>AI-suggested Session labels.</figcaption>
            </figure>

            <h3>Start new Sessions with AI</h3>
            <p>When a window holds many tabs, interTabs uses AI to sort them into sections.</p>
            <p><strong>From the research:</strong> overload peaks when a window is most crowded; automatic grouping
                removes the manual work at exactly that moment.</p>
            <figure>
                <img class="on-surface" src="/assets/images/projects/intertabs/feature5.webp" alt="A crowded window sorted into sections by AI">
                <figcaption>A crowded window sorted into sections.</figcaption>
            </figure>

            <h3>One-click organize</h3>
            <p>Organize every open tab into Sessions with one click.</p>
            <p><strong>From the research:</strong> the tool had to feel simpler than the problem — not like another
                complex tab manager.</p>
            <figure>
                <img class="on-surface" src="/assets/images/projects/intertabs/feature6.webp" alt="Organizing all tabs with one click">
                <figcaption>One-click organize.</figcaption>
            </figure>

            <h3>Design decisions</h3>
            <p><strong>Hierarchy over a flat list.</strong> Tabs are grouped by task, so they have structure and
                relationships, not just order. This was the core shift away from native tab management.</p>
            <p><strong>Fast location.</strong> Visual distinction and grouping let users find a target at a glance
                instead of bouncing between tabs.</p>
            <p><strong>Restraint.</strong> Because it is used many times a day, the interface stays quiet — no
                unnecessary prompts, so users manage their work, not the manager.</p>

            <figure>
                <iframe src="https://www.youtube.com/embed/2bHR0zIa2yA" title="interTabs video demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <figcaption>interTabs, end to end.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Deployment &amp; feedback</h2>
            <p class="lead">The public release gave early real-world signal — though not yet a controlled
                evaluation.</p>
            <!-- TODO(research): add Chrome Web Store numbers (installs, weekly active users, retention) and summarize
                 the feedback below into 2–3 themes. -->
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/intertabs/feedback1.webp" alt="User feedback – MCP Explorer">
                    <img src="/assets/images/projects/intertabs/feedback5.webp" alt="User feedback – Subhadip Saha">
                    <img src="/assets/images/projects/intertabs/feedback6.webp" alt="User feedback – Iyobosa Rehoboth">
                    <img src="/assets/images/projects/intertabs/feedback8.webp" alt="User feedback – contactnucandleco">
                    <img src="/assets/images/projects/intertabs/feedback2.webp" alt="User feedback – Yongjie Xie">
                    <img src="/assets/images/projects/intertabs/feedback3.webp" alt="User feedback – Victor Reztune">
                    <img src="/assets/images/projects/intertabs/feedback4 copy.webp" alt="User feedback – Aerosend ai">
                    <img src="/assets/images/projects/intertabs/feedback4.webp" alt="User feedback – Aifindbag Team">
                </div>
                <figcaption>Feedback from users after launch.</figcaption>
            </figure>
            <p>interTabs was #1 Product of the Day on
                <a href="https://fazier.com/launches/intertabs" target="_blank" rel="noopener noreferrer">Fazier</a>,
                featured on
                <a href="https://www.producthunt.com/products/intertabs" target="_blank" rel="noopener noreferrer">Product Hunt</a>,
                and listed on
                <a href="https://startupfa.me/s/intertabs?utm_source=intertabs.com" target="_blank" rel="noopener noreferrer">Startup Fame</a>.</p>
        </section>

        <section>
            <h2>Discussion</h2>
            <p class="lead">The real challenge in productivity design isn't adding capability — it's reducing
                cognitive load.</p>
            <h3>Simplicity as a trade-off</h3>
            <p>More features mean more control, but also a steeper learning curve. Early concepts included deep
                customization of how AI groups tabs, and notifications reminding users to save Sessions before closing.
                Both were cut: they added friction to an experience that needed to feel effortless. A tool people use
                daily is worth more than a fully-featured one that feels like a chore.</p>
            <h3>Design value = fewer decisions</h3>
            <p>Every layout choice, label, and grouping was judged by one question: does this help the user decide
                <em>less</em>?</p>
            <h3>Limitations</h3>
            <p>Our evidence so far is qualitative and self-selected: launch feedback comes from people who chose to
                try the tool. We have not yet measured whether grouping shortens the time to find a tab, how often AI
                labels are wrong, or whether saving a Session actually leads people to close tabs.</p>
        </section>

        <section>
            <h2>Open questions</h2>
            <ol class="open-questions">
                <li>When should AI decide how someone's work is organized, and when should it only suggest?</li>
                <li>Do Sessions reduce tab hoarding — or just move the hoard somewhere tidier?</li>
                <li>What would a lightweight study measuring re-finding time with and without interTabs show?</li>
            </ol>
            <p><a href="/projects/cosmasense">Cosma Sense</a> carries the same question from tabs to the files on a
                computer.</p>
        </section>

        <section>
            <h2>Contribution</h2>
            <p>A team of four. My part of the work:</p>
            <ul>
                <li><strong>Design research</strong> — interviews, competitive analysis, and turning findings into
                    features.</li>
                <li><strong>Design &amp; prototype</strong> — the visual design and UI/UX of the extension and website,
                    including the logo and light and dark themes.</li>
                <li><strong>Frontend development</strong> — the front end of the landing page.</li>
                <li><strong>Communication</strong> — product videos and launch materials.</li>
            </ul>
            <p><strong>Tools:</strong> Figma, HTML, CSS, JavaScript, Adobe After Effects.</p>
            <figure>
                <img src="/assets/images/projects/intertabs/logodesign.webp" alt="interTabs logo design">
                <div class="figure-grid">
                    <img src="/assets/images/projects/intertabs/color_l.webp" alt="Light colour palette">
                    <img src="/assets/images/projects/intertabs/color_d.webp" alt="Dark colour palette">
                    <img src="/assets/images/projects/intertabs/intertabs_l.webp" alt="interTabs in light mode">
                    <img src="/assets/images/projects/intertabs/intertabs_d.webp" alt="interTabs in dark mode">
                </div>
                <figcaption>The logo, the light and dark palettes, and the extension in both modes.</figcaption>
            </figure>
        </section>

        <section>
            <h2>References</h2>
            <ol class="references">
                <li>Chang, J. C., Hahn, N., Kim, Y., Coupland, J., Breneisen, B., Kim, H. S., Hwong, J., &amp;
                    Kittur, A. (2021). When the Tab Comes Due: Challenges in the Cost Structure of Browser Tab Usage.
                    <em>Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems.</em></li>
            </ol>
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
useHead({
  title: 'interTabs',
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
