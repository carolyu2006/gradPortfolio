<template>
<SideNav v-if="links.length > 1" :links="links" label="Page sections" />
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Section links for a project case study, read from the page's own section
// headings once it has rendered, so each page lists exactly the sections it
// has. The "more projects" block at the end is left out.
const links = ref([]);

const slug = (text) => 'sec-' + text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

onMounted(() => {
    const content = document.querySelector('.project-page .content');
    if (!content) return;
    links.value = Array.from(content.querySelectorAll('section'))
        .filter((section) => section.querySelector('h2') && !section.classList.contains('next-project-section'))
        .map((section) => {
            const label = section.querySelector('h2').textContent.trim();
            if (!section.id) section.id = slug(label);
            return { id: section.id, label };
        });
});
</script>
