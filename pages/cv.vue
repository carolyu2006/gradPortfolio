<template>
<AppHeader />
<main class="page cv">
    <aside class="page-side">
        <SideNav :links="navLinks" />
    </aside>

    <article class="page-main cv-main">
        <header id="overview" class="cv-header">
            <p class="cv-kicker">CV</p>
            <h1>Carol Yu</h1>
            <p class="lead">Designer + Creative Technologist.</p>
            <p class="cv-contact">
                <a href="mailto:CAROL.YU@NYU.EDU">carol.yu@nyu.edu</a>
                <a href="https://www.linkedin.com/in/carolyuhf/" target="_blank" rel="noopener noreferrer">linkedin.com/in/carolyuhf</a>
                <a href="https://github.com/carolyu2006" target="_blank" rel="noopener noreferrer">github.com/carolyu2006</a>
            </p>
            <p class="cv-actions">
                <button type="button" class="cv-print" @click="printCv">Save as PDF</button>
            </p>
        </header>

        <section id="research-interests" class="cv-section">
            <h2>Research Interests</h2>
            <p class="lead">Human–AI creativity · tools for attention and memory · playful and spatial
                interaction.</p>
            <p>I study how AI can act as a creative collaborator rather than a replacement, and how games, 3D space,
                and mixed reality can make everyday digital tools feel more human.</p>
        </section>

        <section v-for="section in sections" :id="slug(section.title)" :key="section.title" class="cv-section">
            <h2>{{ section.title }}</h2>
            <div v-for="entry in section.entries" :key="entry.title" class="cv-entry">
                <div class="cv-body">
                    <h3>
                        <a v-if="entry.href" :href="entry.href"
                           :target="entry.href.startsWith('http') ? '_blank' : null"
                           :rel="entry.href.startsWith('http') ? 'noopener noreferrer' : null">{{ entry.title }}</a>
                        <template v-else>{{ entry.title }}</template>
                    </h3>
                    <p v-if="entry.subtitle" class="cv-subtitle">{{ entry.subtitle }}</p>
                    <ul v-if="entry.points">
                        <li v-for="point in entry.points" :key="point">{{ point }}</li>
                    </ul>
                </div>
                <!-- The dates sit in the right margin, like a caption. -->
                <p v-if="entry.date" class="cv-date">{{ entry.date }}</p>
            </div>
        </section>

        <section id="skills" class="cv-section">
            <h2>Skills</h2>
            <div v-for="group in skills" :key="group.label" class="cv-entry">
                <div class="cv-body">
                    <h3>{{ group.label }}</h3>
                    <p>{{ group.items }}</p>
                </div>
            </div>
        </section>
    </article>
</main>
<AppFooter />
</template>

<script setup>
const printCv = () => window.print();

const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const sections = [
    {
        title: 'Education',
        entries: [
            {
                date: '2024 – 2027',
                title: 'New York University, Tisch School of the Arts',
                subtitle: 'BFA, Interactive Media Arts · New York, NY · GPA 3.94',
                points: [
                    'Minors: Game Design; Social Entrepreneurship; Business of Entertainment, Media and Technology'
                ]
            },
            {
                date: '2015 – 2024',
                title: 'Keystone Academy, Beijing',
                subtitle: 'High school, IB curriculum'
            }
        ]
    },
    {
        title: 'Experience',
        entries: [
            {
                date: 'May – Aug 2026',
                title: 'TikTok, ByteDance — AI Product Design Intern',
                subtitle: 'Beijing, China',
                points: [
                    'Designed the HTML editor feature for TikTok’s internal agent platform, letting operations teams generate H5 pages.',
                    'Prototyped and designed an AIGC video-generation workflow for e-commerce ads that outperformed agency-made creatives by ~300% and drove 400+ new users per creative; later adopted as the team’s default video pipeline.',
                    'Built and launched an AI Brand Kit feature that auto-generates brand-aligned page elements and cover images, improving visual consistency and production speed and contributing to a 120% user increase for the business unit.'
                ]
            },
            {
                date: 'Feb – May 2026',
                title: 'PaiBox — UX Design Intern',
                subtitle: 'New York · Part-time',
                points: [
                    'Built cross-platform workflows, interfaces, and interactive prototypes for an AI-powered vendor-management platform, streamlining coordination across vendors, customers, and project managers.'
                ]
            },
            {
                date: 'Jan – Apr 2026',
                title: 'Nook — Product Design Intern',
                subtitle: 'Remote · Part-time',
                points: [
                    'Led user research and brand styling, and worked with product managers on the gamified task, progression, and reward systems of a teen-focused AI productivity app.',
                    'Designed AI-driven interfaces that turn user goals into personalized challenges and habit-building experiences.'
                ]
            },
            {
                date: 'Sep – Dec 2025',
                title: 'Tech@NYU Dev Team — Designer & Developer',
                href: '/projects/albertplus',
                subtitle: 'New York, NY',
                points: [
                    'Built Albert Plus, a web platform improving NYU course planning through clearer navigation and progress visualization.',
                    'Designed and developed core tools, including a Chrome extension and course search (Figma, TypeScript, Next.js).'
                ]
            },
            {
                date: 'May – Dec 2025',
                title: 'Freelance — Designer & Front-End Developer',
                subtitle: 'Remote',
                points: [
                    'Built branding and responsive websites for four startup and non-profit clients across FinTech, non-profit, and AI — including Sweet Dreams 4 All and Global Delta Securities.'
                ]
            }
        ]
    },
    {
        title: 'Teaching',
        entries: [
            {
                date: 'Apr – Aug 2025',
                title: 'Tech X Academy — Teaching Assistant',
                subtitle: 'Shanghai, China',
                points: [
                    'Led workshops for 20+ students on HCI theory, Figma, website development, and multimodal AI in an HCI bootcamp.',
                    'Mentored winning hackathon teams on UI design, UX strategy, web development, robotics and Arduino, and multimodal AI.'
                ]
            }
        ]
    },
    {
        title: 'Selected Projects',
        entries: [
            {
                date: 'Mar 2026',
                title: 'WeChat Channels × AI',
                href: '/projects/wechatchannels',
                subtitle: 'Solo design challenge for Tencent WeChat Channels — rethinking short-video creation with AI.'
            },
            {
                date: '2026',
                title: 'DREAMMAIL',
                href: 'https://devpost.com/software/dreamail',
                subtitle: 'Spatial AR interface for everyday digital tools, powered by AI-driven interaction. Built at MIT Reality Hack 2026.'
            },
            {
                date: '2026',
                title: 'Cosma Sense',
                href: 'https://cosmasense.tech/',
                subtitle: 'Product design and frontend for a local-first, AI-powered semantic search engine for personal files.'
            },
            {
                date: 'Oct 2025 – Jan 2026',
                title: 'Palette U',
                href: '/projects/paletteu',
                subtitle: 'Personal project: a web app for storing memories in a 3D memory palace (Three.js, Blender, Express.js, SQL).'
            },
            {
                date: 'Oct 2025 – Jan 2026',
                title: 'Everstream',
                href: '/projects/everstream',
                subtitle: 'Personal project: a 2D Unity game following a stream through four seasons, with original art and music.'
            },
            {
                date: 'May – Aug 2025',
                title: 'interTabs',
                href: '/projects/intertabs',
                subtitle: 'Product designer and front-end developer on a team of four: an AI-powered tab manager that generates and reorganizes browser tab groups with the OpenAI API. Reached 200+ users; published on the Chrome Web Store with interfinity Limited.'
            },
            {
                date: 'Feb – Jul 2025',
                title: 'MBTI Ideal Partner',
                href: '/projects/mbtiidealpartner',
                subtitle: 'Led a five-person team to design and develop an MBTI matchmaking WeChat Mini Program that generates personalized reports. Grew to 2,000+ users and expanded into a sequel product.'
            }
        ]
    },
    {
        title: 'Awards & Hackathons',
        entries: [
            {
                date: '2026',
                title: 'MIT Reality Hack 2026',
                subtitle: 'Built DREAMMAIL, a spatial AR interface for everyday digital tools.'
            },
            {
                date: '2025',
                title: 'HOF Hack 2025 — 1st Place, Best UI/UX, Best Beginner Hack',
                subtitle: 'For interTabs, an AI-powered Chrome extension for tab management.'
            },
            {
                date: '2025',
                title: 'Fazier — #1 Product of the Day',
                subtitle: 'interTabs, on its public launch.'
            }
        ]
    },
    {
        title: 'Leadership & Community',
        entries: [
            {
                date: 'Feb 2025 – Present',
                title: 'Orango — Founder, Designer, Project Manager & Engineer',
                href: 'https://orango.games/',
                subtitle: 'New York, NY',
                points: [
                    'Founded a creative studio that developed a social game platform; recruited and led a team of nine and launched three independent games.'
                ]
            },
            { date: '', title: 'NYU CSSA — UI/UX Designer & Developer' }
        ]
    }
];

const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'research-interests', label: 'Research Interests' },
    ...sections.map((section) => ({ id: slug(section.title), label: section.title })),
    { id: 'skills', label: 'Skills' }
];

const skills = [
    { label: 'Design', items: 'Product design, UI/UX, product management, branding, illustration, motion graphics, video editing, game development, marketing' },
    { label: 'Research', items: 'User interviews, user & market research, rapid prototyping, prompt engineering' },
    { label: 'Design tools', items: 'Figma, Adobe Creative Suite, Blender, generative AI, Framer, WebGL' },
    { label: 'Development', items: 'JavaScript, TypeScript, Python, C++, C#, SQL, HTML · Unity, SwiftUI, Three.js, WebXR, VR/AR, GitHub' },
    { label: 'Languages', items: 'Chinese (native), English (fluent)' }
];

useHead({
  title: 'CV — Carol Yu',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/cv.css' }
  ],
  script: [
    { src: '/js/script.js', body: true }
  ]
});
</script>
