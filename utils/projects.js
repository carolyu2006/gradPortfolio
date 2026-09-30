// Every project shown in the work grids (home page and /projects), in display
// order. Covers with a video loop use `image` as the poster; `tags` are the
// small pills shown above each title. Nuxt auto-imports this from utils/.
export const projects = [
  {
    title: 'AI Brand Kit',
    year: '2026',
    tags: ['Image & HTML H5 generating', 'AI Agent Product'],
    description: 'Training AI for brand content automation by creating skills and LoRA — an AI Product Design internship at TikTok.',
    href: '/projects/ai-brand-kit',
    image: '/assets/images/covers/ai-brand-kit.webp'
  },
  {
    title: 'AIGC Video Automation',
    year: '2026',
    tags: ['AIGC Video Generation', 'Creative Automation'],
    description: 'Turning product information and cultural trends into scalable, platform-native e-commerce video ads at TikTok.',
    href: '/projects/aigc-video-automation',
    image: '/assets/images/covers/aigc-video-automation.webp'
  },
  {
    title: 'WeChat Channels × AI',
    year: '2026',
    tags: ['AI Product', 'Case Study', 'Tencent Design Challenge'],
    description: 'A design challenge for Tencent WeChat Channels — reimagining video creation as human–AI co-creation.',
    href: '/projects/wechatchannels',
    image: '/assets/images/covers/wechat.webp',
    video: '/assets/images/covers/wechat.mp4'
  },
  {
    title: 'Cosma Sense',
    year: '2026',
    tags: ['AI', 'Branding', 'Product Design'],
    description: 'A local-first, AI-powered search engine that indexes your files and lets you find information semantically.',
    href: 'https://cosmasense.tech/',
    image: '/assets/images/covers/cosmasense.webp'
  },
  {
    title: 'interTabs',
    year: '2025',
    tags: ['HOF Hack 2025 1st Place & Best UI/UX', '20+ User Interviews', 'Shipped Product'],
    description: 'An AI-powered Chrome extension for managing tabs. 1st Place & Best UI/UX at HOF Hack 2025.',
    href: '/projects/intertabs',
    image: '/assets/images/covers/intertabs.webp'
  },
  {
    title: 'Albert Plus',
    year: '2025',
    tags: ['Tech@NYU Dev Team 2025', 'Case Study', 'Shipped Product'],
    description: "A next-generation companion for NYU's Albert course registration system, built with the Tech@NYU Dev Team.",
    href: '/projects/albertplus',
    image: '/assets/images/covers/albertplus.webp',
    video: '/assets/images/covers/albertplus.mp4'
  },
  {
    title: 'Palette U',
    year: '2025',
    tags: ['Self-initiated', '3D Interaction'],
    description: 'A website to record your memories and store them in your own 3D memory palace.',
    href: '/projects/paletteu',
    image: '/assets/images/covers/paletteu.webp',
    video: '/assets/images/covers/paletteu.mp4'
  },
  {
    title: 'Everstream',
    year: '2025',
    tags: ['Game Design', 'Original Music', 'Original Art'],
    description: 'A 2D game following a stream through the four seasons, with original art and music.',
    href: '/projects/everstream',
    image: '/assets/images/covers/everstream.webp',
    video: '/assets/images/covers/everstream.mp4'
  },
  {
    title: 'DREAMMAIL',
    year: '2026',
    tags: ['XR', 'AI', 'MIT Reality Hack 2026'],
    description: 'A spatial AR interface for everyday digital tools, powered by AI-driven interaction. Built at MIT Reality Hack 2026.',
    href: 'https://devpost.com/software/dreamail',
    image: '/assets/images/covers/dreamail.webp'
  },
  {
    title: 'MBTI Ideal Partner',
    year: '2025',
    tags: ['Mini Program', 'Shipped Product'],
    description: 'An interactive WeChat Mini Program that helps users find their ideal MBTI partner.',
    href: '/projects/mbtiidealpartner',
    image: '/assets/images/covers/mbti.webp',
    video: '/assets/images/covers/mbti.mp4'
  },
  {
    title: 'Orango Branding',
    year: '2026',
    tags: ['Branding', 'Visual Design'],
    description: 'A comprehensive brand identity for a playful, web-based social gaming platform.',
    href: '/projects/orangobranding',
    image: '/assets/images/covers/orango_branding.webp'
  },
  {
    title: 'Global Delta Securities',
    year: '2025',
    tags: ['Next.js', 'Frontend'],
    description: 'Designed and built the website frontend from scratch in Next.js for a finance startup.',
    href: 'https://globaldeltasecurities.com/',
    image: '/assets/images/experience/gds-behind.webp'
  },
  {
    title: 'Sweet Dreams 4 All',
    year: '2025',
    tags: ['Non-profit', 'Web Design & Dev'],
    description: 'Designed and developed the website from scratch for a 501(c)(3) non-profit organization.',
    href: 'https://sweetdreams4all.org/',
    image: '/assets/images/experience/sweetdreams-behind.webp'
  }
];

// The given projects, in the given order, for a case study's "More projects".
export const pickProjects = (...hrefs) =>
  hrefs.map((href) => projects.find((project) => project.href === href)).filter(Boolean);
