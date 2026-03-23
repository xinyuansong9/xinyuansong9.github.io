<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProjectById } from '@/data/researchExperience'

const route = useRoute()
const router = useRouter()

const project = computed(() => getProjectById(route.params.id as string))

watch(
  project,
  (p) => {
    if (p) document.title = `${p.title} - Xinyuan Song`
  },
  { immediate: true }
)

function goBack() {
  router.push('/projects')
}
</script>

<template>
  <div class="view project-detail-view">
    <button type="button" class="back-btn" @click="goBack">← Back to Projects</button>
    <template v-if="project">
      <div class="detail-header">
        <img v-if="project.image" :src="project.image" :alt="project.title" class="detail-image" />
        <div class="detail-meta">
          <h1 class="detail-title">{{ project.title }}</h1>
          <p class="detail-period-venue">
            <span>{{ project.period }}</span>
            <span v-if="project.venue"> · {{ project.venue }}</span>
            <span v-if="project.collaboration"> · {{ project.collaboration }}</span>
          </p>
          <p v-if="project.website" class="detail-link">
            Official website:
            <a :href="project.website" target="_blank" rel="noopener noreferrer">{{ project.website }}</a>
          </p>
        </div>
      </div>
      <p class="detail-overview">{{ project.overview }}</p>
      <div class="detail-block">
        <h2>My Contributions</h2>
        <ul>
          <li v-for="(c, i) in project.contributions" :key="i">{{ c }}</li>
        </ul>
      </div>
      <div class="detail-block">
        <h2>Key Outcomes</h2>
        <ul>
          <li v-for="(k, i) in project.keyOutcomes" :key="i">{{ k }}</li>
        </ul>
      </div>
      <section v-if="project.gallery?.length" class="gallery">
        <h2>Project gallery</h2>
        <div class="gallery-grid">
          <img
            v-for="(src, i) in project.gallery"
            :key="i"
            :src="src"
            :alt="`${project.title} — figure ${i + 1}`"
            class="gallery-img"
            loading="lazy"
          />
        </div>
      </section>
    </template>
    <p v-else class="not-found">Project not found. <router-link to="/projects">Return to Projects</router-link>.</p>
  </div>
</template>

<style scoped>
.back-btn {
  margin-bottom: var(--space-xl);
  padding: 0;
  background: none;
  border: none;
  color: var(--color-accent);
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: color var(--transition);
}
.back-btn:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
}
.detail-header { margin-bottom: var(--space-xl); }
.detail-image {
  width: 100%;
  max-width: 480px;
  height: auto;
  border-radius: var(--radius);
  margin-bottom: var(--space-lg);
  object-fit: cover;
  border: 1px solid var(--color-border);
}
.detail-title {
  font-size: 1.25rem;
  margin: 0 0 var(--space-sm) 0;
  line-height: 1.3;
  letter-spacing: -0.02em;
}
.detail-period-venue {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0;
}
.detail-link {
  margin: var(--space-xs) 0 0;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}
.detail-link a {
  color: var(--color-accent);
}
.detail-link a:hover {
  color: var(--color-accent-hover);
}
.detail-overview {
  margin: 0 0 var(--space-xl) 0;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
}
.detail-block {
  padding: var(--space-xl) 0;
  border-bottom: 1px solid var(--color-border-light);
}
.detail-block:last-child { border-bottom: none; }
/* Single divider before gallery: remove bottom border; keep space above the line */
.detail-block:has(+ .gallery) {
  border-bottom: none;
  padding-bottom: var(--space-2xl);
}
.detail-block h2,
.gallery h2 {
  font-size: 0.9375rem;
  font-weight: 600;
  margin: 0 0 var(--space-md) 0;
}
.detail-block ul {
  margin: 0;
  padding-left: 1.25rem;
  line-height: 1.55;
  font-size: 0.9375rem;
}
.detail-block li { margin-bottom: var(--space-xs); }
.gallery {
  padding: var(--space-xl) 0 0;
  border-top: 1px solid var(--color-border-light);
}
.gallery-grid {
  display: grid;
  gap: var(--space-lg);
}
.gallery-img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  display: block;
}
.not-found { color: var(--color-text-muted); font-size: 0.9375rem; }
</style>
