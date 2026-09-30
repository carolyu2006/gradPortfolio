<template>
<AppHeader />
<main class="page">
    <aside class="page-side">
        <SideNav :links="[{ id: 'work', label: 'All projects' }]" />
    </aside>

    <div class="page-main">
        <section id="work">
            <h1 class="page-title">
                <span class="page-kicker">Work</span>
                Projects
            </h1>
            <p class="lead projects-lead">
                <em>Prototypes, games, and shipped tools</em> exploring human–AI creativity, tools for attention and
                memory, and playful, spatial interaction.
            </p>
            <ProjectGrid :items="projects" />
        </section>
    </div>
</main>
<AppFooter />
</template>

<script setup>
useHead({
  title: 'Projects — Carol Yu',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' }
  ],
  script: [
    { src: '/js/script.js', body: true }
  ]
});
</script>
