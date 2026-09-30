export default defineNuxtConfig({
  compatibilityDate: '2026-06-24',
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        {
          name: 'description',
          content: 'Carol Yu — designer and creative technologist (NYU IMA) exploring human–AI creativity, everyday tools, and playful, spatial interaction.'
        }
      ]
    }
  }
});
