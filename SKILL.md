---
name: portfolio-design
description: Portfolio design and styling conventions. Use when writing or editing CSS, Vue pages, or UI components in this project.
---

# Portfolio Design

## Project Case Studies

The portfolio is one website, not a collection of independently art-directed
microsites. Every visible page, component, interaction, and project case study
must feel like it belongs to this site's established visual system.

`pages/projects/intertabs.vue` is the required structural and styling reference
for every project detail page in `pages/projects/`. This requirement applies to
existing pages as well as newly created pages: when touching a project that
does not conform, bring it back to the shared structure before adding new work.
Do not introduce a standalone visual system, page shell, or large page-scoped
style block for an individual project.

Every project detail page is an article in the MIT Media Lab style — one
centred column of plain text with figures whose captions sit in the right
margin — in this order:

1. `<AppHeader />`
2. Full-width cover media using `.hero-image`
3. The page grid: `<main class="page project-page">` containing
   `<aside class="page-side"><ProjectSectionNav /></aside>` (section links built
   from the page's `<section>` `<h2>` headings) and
   `<article class="content page-main">` for everything below
4. `<header class="project-header">`: `p.project-kicker` (year), `h1`, a one-line
   `p.lead`, an optional `p.project-award`, and optional
   `p.project-links > a.btn`
5. `<dl class="project-facts">` with the four facts — timeline, team, role,
   skills — each as `<div><dt>…</dt><dd>…</dd></div>`
6. `<section>`s in the standard narrative order when relevant: overview,
   problem, research/process, solution, impact, reflection
7. `<section class="next-project-section">` with
   `<ProjectGrid :items="pickProjects('/projects/…', '/projects/…')" />`
8. `<AppFooter />`

Inside a section, use text, not boxes: `h2`, a bold-italic `p.lead` for the
first sentence, `p`, `h3` subheads, `ul`/`ol`, `blockquote` (+ `cite`) for what
people said, and `p.statement` for a guiding question, goal, or conclusion.
Put media in `<figure>` with a `<figcaption>`: the media fills the text column
and the caption sits in the right margin (below the media on narrow screens).
Several pieces of media go in one `div.figure-grid` (`--3` / `--4` for more
across; `--wide-tall` pairs a landscape piece with a portrait one at equal
height). Use `.on-surface` for transparent screenshots.

Portrait media (taller than wide, including 9:16 video) is never shown full
width on its own: put it in a `figure-grid` with other media, or, when it has
no partner, make it `<figure class="figure-float">` placed just before the text
it belongs to, so it floats beside that text under half the column wide. Do
not add cards, tinted panels, multi-column text layouts, or per-project
components.

Section headings (`<h2>`) are sentence case ("Design process", not "DESIGN
PROCESS"); they double as the labels in the section links.

If a project has less material, keep the same shell and omit only the empty
sections — not the cover, header, facts, or footer.

Project pages must load both shared stylesheets through `useHead`:

```js
{ rel: 'stylesheet', href: '/css/styles.css' },
{ rel: 'stylesheet', href: '/css/project.css' }
```

Use only the vocabulary above (documented at the top of
`public/css/project.css`). Extend that stylesheet only when a pattern will be
useful across case studies. All CSS must live in a stylesheet under
`public/css/`; never put a `<style>` or `<style scoped>` block in a Vue page.
For page-specific rules, create a clearly named file such as
`public/css/project-name.css` and load it after `project.css` in `useHead`.
Avoid inline `style` attributes, and never use them for colour. A narrowly
named project class is allowed only for a small media or storytelling
treatment that sits inside the shared
layout and does not redefine global typography, spacing, cards, buttons,
navigation, or section structure.

### Site-Wide Consistency Rules

- Start every edit by reusing the existing layout, typography, button, link,
  tag, card, media, and spacing patterns. Do not recreate an existing pattern
  under a new class name.
- Use the single shared typeface, `var(--font-sans)` (Helvetica Neue stack),
  with weight for hierarchy: bold headings, bold links and labels, regular body.
  Do not add a new typeface or an unrelated type scale for a single page.
- The look is Swiss/editorial (modeled on the MIT Media Lab site): near-black on
  white, generous white space, rectangular outline buttons (`button` / `.btn`),
  and pink as the only accent — `--color-accent` for text and active states,
  the soft pinks (`--color-primary`, `--color-primary-light`) for fills and
  rules.
- Three pieces deliberately keep the original playful style and display fonts
  (`Gabarito`, `ArchivoBlack`, `GajrajOne`): the home-page hero (illustration,
  lotus leaves, intro animation), the Contact hover dropdown in the header, and
  the footer. Preserve them as they are; do not restyle them to the sans, and
  do not use the display fonts or decorations anywhere else.
- Non-project pages use the shared page grid: `<main class="page">` with an
  `<aside class="page-side">` holding `<SideNav :links="...">` and a
  `<div class="page-main">` of `<section id>` blocks. Open with a two-tone
  `.page-title` (gray `.page-kicker` over the black statement), use `.lead` for
  the opening paragraph and `.section-heading` for section titles. Project
  listings use `<ProjectGrid :items="projects" />` with data from
  `utils/projects.js`.
- Use the shared spacing tokens and the desktop/mobile spacing rhythm already
  present in `public/css/styles.css` and `public/css/project.css`. Do not use
  `clamp()`, one-off viewport-based type scales, or arbitrary page-wide padding
  systems.
- Use root color tokens only. Case studies carry no project-brand colours:
  cards, statements, labels, markers, and backdrops are black, white, and
  gray, the way the MIT Media Lab site is. Colour comes from the project
  imagery itself.
- Preserve the common header and footer exactly. Do not create an alternate
  header, hide the header/footer, or change their visual language per project.
- Match existing image treatment: full-width cover media, contained editorial
  content media, and the shared border-radius/cropping behavior. Avoid
  decorative graphics that compete with the project story.
- Keep motion understated and compatible with shared interaction patterns.
  Avoid page-specific cursor behavior, theatrical entrance animation, or
  layout-shifting animation.
- New reusable patterns belong in the shared CSS after checking that they are
  needed by more than one project. Keep one-off content markup simple.

### Required Consistency Check

Before completing any page or component work, inspect the changed result next
to the relevant existing portfolio pages and verify all of the following:

- It uses the shared header, footer, fonts, global stylesheet, and project
  stylesheet where applicable.
- It follows the `intertabs` case-study shell for project detail pages.
- Its content width, section spacing, headings, metadata, buttons, cards, and
  media treatment match the existing site patterns.
- It introduces no duplicate component style, standalone CSS system, hard-coded
  global theme, or responsive `clamp()` typography.
- It adds no project-specific colours (no tinted fills, coloured text, or
  gradients).

Before finishing work on a project page, compare it with
`pages/projects/intertabs.vue` and confirm that it uses the shared header,
footer, cover-media treatment, content width, metadata block, and shared CSS.
Project media and content are welcome, but they must sit within this common
structure and its neutral palette.

## Colors

All colors should use root color tokens from `public/css/styles.css` (`:root`), never hard-coded hex values.

Use `var(--color-...)` for backgrounds, text, borders, shadows, and hover states. Examples:

- `--color-background`
- `--color-foreground`
- `--color-primary`
- `--color-primary-light`
- `--color-primary-dark`

If a new reusable color is needed, add it to `:root` in `public/css/styles.css` first, then reference it elsewhere.

## CSS Units

Do not use `clamp()` for any CSS value. Use fixed `px` values instead.

See `design.md` for full design rules.
