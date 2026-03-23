<script setup lang="ts">
import { researchExperiences } from '@/data/researchExperience'
</script>

<template>
  <div class="view projects-view">
    <header class="page-header">
      <h1>Projects</h1>
    </header>
    <div class="project-grid">
      <router-link
        v-for="p in researchExperiences"
        :key="p.id"
        :to="`/projects/${p.id}`"
        class="project-card"
      >
        <div class="card-image-wrap">
          <img v-if="p.image" :src="p.image" :alt="p.title" class="card-image" />
          <div v-else class="card-image card-image-placeholder">No image</div>
        </div>
        <div class="card-body">
          <h2 class="card-title">{{ p.title }}</h2>
          <p v-if="p.collaboration" class="card-author">{{ p.collaboration }}</p>
          <p v-else-if="p.venue" class="card-author">{{ p.venue }}</p>
          <p class="card-summary">{{ p.shortSummary }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.page-header { margin-bottom: var(--space-2xl); }
.page-header h1 { margin-bottom: 0; }
.project-grid {
  display: grid;
  gap: var(--grid-gap);
}
.project-card {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: var(--space-lg);
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  align-items: start;
  transition: border-color var(--transition), background-color var(--transition);
}
.project-card:hover {
  border-color: var(--color-text-muted);
  background-color: var(--color-bg-secondary);
}
@media (max-width: 480px) {
  .project-card { grid-template-columns: 1fr; }
}
.card-image-wrap {
  width: 160px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
  background: var(--color-bg-hover);
}
@media (max-width: 480px) {
  .card-image-wrap { width: 100%; height: 140px; }
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}
.card-body { min-width: 0; }
.card-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 var(--space-xs) 0;
  line-height: 1.35;
}
.card-author {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin: 0 0 var(--space-sm) 0;
}
.card-summary {
  font-size: 0.9375rem;
  line-height: 1.5;
  margin: 0;
  color: var(--color-text);
}
</style>
