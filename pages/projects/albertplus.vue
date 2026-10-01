<template>
<AppHeader />
<img class="hero-image" src="/assets/images/projects/albertplus/cover.webp" alt="Albert Plus">

<main class="page project-page">
    <aside class="page-side"><ProjectSectionNav /></aside>

    <article class="content page-main">
        <header class="project-header">
            <p class="project-kicker">2025</p>
            <h1>Albert Plus</h1>
            <p class="lead">A redesigned companion for NYU's Albert — integrating course search, bulletin information,
                and timetable planning into one connected flow so students can make registration decisions faster and
                with less stress.</p>
        </header>

        <dl class="project-facts">
            <div><dt>Timeline</dt><dd>Sep 2025 – Dec 2025</dd></div>
            <div><dt>Team</dt><dd>Case study with Charles Zhang, Tech@NYU Dev Team</dd></div>
            <div><dt>Role</dt><dd>Designer &amp; Frontend Developer</dd></div>
            <div><dt>Skills</dt><dd>Figma, TypeScript, Next.js, Convex</dd></div>
        </dl>

        <section>
            <h2>Problems</h2>
            <p class="statement">How can NYU students search courses and plan their degree more efficiently?</p>
            <p><strong>Target audience:</strong> NYU students.</p>
            <p class="lead">The current Albert system has four key pain points that consistently frustrate students
                during registration.</p>
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/albertplus/issue.webp" alt="Albert current UI – course search modal">
                    <img src="/assets/images/projects/albertplus/issue2.webp" alt="Albert current UI – course detail view">
                </div>
                <figcaption>Albert today: the course search modal and the course detail view.</figcaption>
            </figure>
            <h3>Messy UI/UX</h3>
            <p>Cluttered and outdated — too many clicks, dense text with no visual hierarchy, and pop-up modals that
                hinder scanning.</p>
            <h3>Hard to search and find courses</h3>
            <p>15+ filter dropdowns return plain text lists with no way to compare sections, professors, or timings side
                by side.</p>
            <h3>No course planning support</h3>
            <p>No built-in way to track degree requirements or see what courses still need to be completed.</p>
            <h3>Can't preview the calendar</h3>
            <p>No calendar preview before committing — students can't spot conflicts or build a balanced schedule
                without registering first.</p>
        </section>

        <section id="features">
            <h2>Solution</h2>
            <p class="lead">Search, review, and schedule, designed as one connected flow.</p>

            <h3>Smart course search</h3>
            <p>Find courses by navigating easily through school and major, with filters and a search bar to narrow down
                to the course you want.</p>
            <figure>
                <video src="/assets/images/projects/albertplus/feature3.mp4" autoplay muted loop playsinline></video>
                <figcaption>Browsing by school and major, then filtering.</figcaption>
            </figure>

            <h3>AI-powered course detail and saved courses</h3>
            <p>See all course information clearly, with an AI summary of the course. Save courses to your account and
                access them anytime.</p>
            <figure>
                <video src="/assets/images/projects/albertplus/feature2.mp4" autoplay muted loop playsinline></video>
                <figcaption>Course detail with an AI summary, and saving a course.</figcaption>
            </figure>

            <h3>Timetable builder</h3>
            <p>Build your own timetable by adding courses and see how it looks. Save multiple timetables and compare
                different course plans.</p>
            <figure>
                <video src="/assets/images/projects/albertplus/feature4.mp4" autoplay muted loop playsinline></video>
                <figcaption>Building and comparing timetables.</figcaption>
            </figure>

            <h3>Four-year plan builder</h3>
            <p>Build your own four-year plan by adding courses, see the bulletin requirements of your majors and
                minors, and check whether you are on track to graduate.</p>
            <figure>
                <video src="/assets/images/projects/albertplus/feature1.mp4" autoplay muted loop playsinline></video>
                <figcaption>Planning four years against the bulletin requirements.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Figma prototype</h2>
            <figure>
                <iframe class="figma-embed"
                    src="https://embed.figma.com/proto/7yjtGk13BUvr7oNGfl6HPI/Albert-Plus?page-id=1%3A83&node-id=371-5836&viewport=404%2C-2415%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=371%3A6071&embed-host=share"
                    title="Albert Plus Figma prototype" loading="lazy" allowfullscreen></iframe>
                <figcaption>The interactive prototype — click through it here.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Process</h2>
            <h3>User research</h3>
            <p>I interviewed 20+ NYU students to understand how they really feel about the course selection system.</p>
            <!-- <img src="/assets/images/projects/albertplus/interview.webp" alt="Interview notes from NYU student research"> -->
            <blockquote>
                <p>“I have to click through so many pages just to find one course. The interface feels like it was built
                    in 2005 and never touched since.”</p>
                <cite>— Junior, CAS</cite>
            </blockquote>
            <blockquote>
                <p>“There's no good way to compare two sections of the same class. I have to open like five tabs and flip
                    back and forth.”</p>
                <cite>— Sophomore, Stern</cite>
            </blockquote>
            <blockquote>
                <p>“I genuinely don't know if I'm on track to graduate. Albert gives me a checklist but I still have to
                    manually figure it out every semester.”</p>
                <cite>— Senior, Tandon</cite>
            </blockquote>
            <blockquote>
                <p>“I accidentally enrolled in two classes that overlap because there's no calendar preview. I didn't find
                    out until the first week of class.”</p>
                <cite>— Junior, Gallatin</cite>
            </blockquote>

            <h3>Existing alternative — Einstein</h3>
            <p>Einstein is a student-built tool offering a cleaner course list and timetable builder, but it still falls
                short in key ways.</p>
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/albertplus/issue3.webp" alt="Einstein – course search view">
                    <img src="/assets/images/projects/albertplus/issue4.webp" alt="Einstein – timetable planner view">
                </div>
                <figcaption>Einstein: the course search and timetable planner views.</figcaption>
            </figure>
            <p><strong>What works:</strong></p>
            <ul>
                <li><strong>Cleaner than Albert</strong> — a more readable course list with less visual noise.</li>
                <li><strong>All course info in one place</strong> — details, times, professor, and credits are visible
                    without navigating away, easy to scan and compare.</li>
                <li><strong>Built-in timetable builder</strong> — students can preview their weekly schedule before
                    committing, a step Albert lacks entirely.</li>
            </ul>
            <p><strong>Issues:</strong></p>
            <ul>
                <li><strong>Visually overwhelming</strong> — bright, saturated course cards with no clear logic create
                    a loud patchwork that makes scanning harder, not easier.</li>
                <li><strong>Hard to navigate</strong> — small, unlabelled school filter icons and no clear hierarchy
                    make it hard to move from search to selecting and adding a course.</li>
                <li><strong>Calendar is hard to use</strong> — no conflict or credit-load feedback; switching between
                    Favorites and numbered Schedules is unintuitive and easy to lose track of.</li>
            </ul>

            <h3>Existing alternative — Paper (Northwestern)</h3>
            <p>Paper is a course-planning tool used at Northwestern that introduces smart multi-year planning and a
                fluid schedule builder — but its interface works against its own strengths.</p>
            <figure>
                <div class="figure-grid">
                    <img src="/assets/images/projects/albertplus/issue-6.webp" alt="Paper – 4-year plan view">
                    <img src="/assets/images/projects/albertplus/issue-5.webp" alt="Paper – schedule builder view">
                </div>
                <figcaption>Paper: the four-year plan and the schedule builder.</figcaption>
            </figure>
            <p><strong>What works:</strong></p>
            <ul>
                <li><strong>Smart four-year plan</strong> — dragging courses into a year-by-year grid makes long-term
                    degree planning intuitive and visual.</li>
                <li><strong>Course-to-schedule flow</strong> — searching a course and adding it straight into a live
                    calendar preview is seamless, so conflicts show before committing.</li>
            </ul>
            <p><strong>Issues:</strong></p>
            <ul>
                <li><strong>Cluttered, hard to read</strong> — dense information and inconsistent hierarchy across the
                    Plan and Schedule views make it hard to know where to focus.</li>
                <li><strong>Disconnected navigation</strong> — the planning grid and the weekly schedule feel like two
                    separate products, with no through-line from search to plan to register.</li>
            </ul>

            <p class="statement">Conclusion: create a clear, simple tool with smart navigation that helps students
                search courses easily and plan their degree more efficiently.</p>

            <h3>Design system to hi-fi</h3>
            <p>From design system foundations to full hi-fi screens, I built Albert Plus iteratively in Figma,
                establishing components, layout patterns, and visual language before moving into refined interface
                explorations.</p>
            <figure>
                <img src="/assets/images/projects/albertplus/process-components.webp" alt="Albert Plus – Figma components and design system">
                <figcaption>Components and the design system in Figma.</figcaption>
            </figure>
            <figure>
                <div class="figure-grid figure-grid--wide-tall">
                    <img src="/assets/images/projects/albertplus/process.webp" alt="Albert Plus – wireframe and screen iterations">
                    <img src="/assets/images/projects/albertplus/visualdesign.webp" alt="Albert Plus visual design — logo and branding">
                </div>
                <figcaption>Left: wireframes and screen iterations. Right: the logo and visual identity.</figcaption>
            </figure>
        </section>

        <section>
            <h2>Design decisions</h2>
            <p class="lead">I didn't treat this as a set of separate features — I designed “search → review → schedule”
                as one continuous, connected flow.</p>
            <h3>Connecting the flow</h3>
            <p>Albert forces students to jump between search, bulletin, and timetable separately. I designed these as
                one continuous journey — state carries forward instead of resetting.</p>
            <h3>Pages that influence each other</h3>
            <p>Selecting a course updates the timetable live. Adjusting a time slot filters the course list back. Users
                never re-enter information — the interface keeps everything in sync.</p>
            <h3>See results, not data</h3>
            <p>Core details surface first; additional context expands on demand. Students see outcomes directly instead
                of having to process raw data themselves.</p>
            <h3>The trade-off</h3>
            <p>More information means better decisions — but also higher cognitive cost. I resolved this with layered
                disclosure: key details always visible, deeper context revealed on demand.</p>
        </section>

        <section>
            <h2>Reflection</h2>
            <p class="lead">This project taught me how to build useful tools around complex user experiences, and how
                design can create a much better workflow — bringing the concepts into practice.</p>
            <h3>Fragmented flows are the real problem</h3>
            <p>Complex systems feel overwhelming not because they lack features, but because their flows are split
                across too many disconnected surfaces. The challenge here was reassembling those pieces into one natural
                path.</p>
            <h3>Design as flow reorganisation</h3>
            <p>The value wasn't adding features — it was reordering the sequence. Search, options, and schedule visible
                together and in sync make decisions faster and far less stressful.</p>
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
useHead({
  title: 'Albert Plus',
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
