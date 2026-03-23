<script setup lang="ts">
import { papers } from '@/data/papers'

function highlightMyName(authors: string): string {
  return authors.replace(
    /Song, X\./g,
    '<span class="author-me">Song, X.</span>'
  )
}

function highlightAward(status?: string): string {
  if (!status) return ''
  return status.replace(
    /Honourable Mention Award/g,
    '<span class="award-highlight">Honourable Mention Award</span>'
  )
}
</script>

<template>
  <div class="view research-view">
    <header class="page-header">
      <h1>Research & Publications</h1>
      <p class="intro">Academic papers and preprints.</p>
    </header>
    <ol class="paper-list">
      <li v-for="p in papers" :key="p.id" class="paper-item">
        <p class="paper-authors" v-html="highlightMyName(p.authors)"></p>
        <p class="paper-title">
          <a v-if="p.link" :href="p.link" target="_blank" rel="noopener noreferrer" class="paper-link">{{ p.title }}</a>
          <template v-else>{{ p.title }}</template>
          <a v-if="p.link" :href="p.link" target="_blank" rel="noopener noreferrer" class="pdf-badge">PDF</a>
        </p>
        <p class="paper-venue">{{ p.venue }}{{ p.year ? ` (${p.year})` : '' }}</p>
        <p class="paper-meta">
          <template v-if="p.status || p.note">
            <span v-if="p.status" v-html="highlightAward(p.status)"></span>
            <span v-if="p.status && p.note"> · </span>
            <span v-if="p.note" class="note">{{ p.note }}</span>
          </template>
        </p>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.page-header { margin-bottom: var(--space-2xl); }
.page-header h1 { margin-bottom: var(--space-sm); }
.intro {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
}
.paper-list {
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: paper;
}
.paper-item {
  counter-increment: paper;
  padding: var(--space-xl) 0 var(--space-xl) 2.5rem;
  border-bottom: 1px solid var(--color-border-light);
  position: relative;
  transition: opacity var(--transition);
}
.paper-item:hover { opacity: 0.9; }
.paper-item::before {
  content: counter(paper) ".";
  position: absolute;
  left: 0;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-accent);
}
.paper-item:last-child { border-bottom: none; }
.paper-authors {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin: 0 0 var(--space-xs) 0;
}
.paper-authors :deep(.author-me) {
  font-weight: 600;
  color: var(--color-accent);
}
.paper-title {
  font-weight: 600;
  margin: 0 0 var(--space-xs) 0;
  line-height: 1.4;
  font-size: 1rem;
}
.paper-title .paper-link {
  color: inherit;
  text-decoration: none;
}
.paper-title .paper-link:hover {
  color: var(--color-accent);
  text-decoration: underline;
}
.paper-title .pdf-badge {
  margin-left: var(--space-sm);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-accent);
  text-decoration: none;
}
.paper-title .pdf-badge:hover { text-decoration: underline; }
.paper-venue {
  font-size: 0.9375rem;
  margin: 0 0 var(--space-xs) 0;
  font-style: italic;
  color: var(--color-text-muted);
}
.paper-meta {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin: 0;
}
.paper-meta .note { font-style: italic; }
.paper-meta :deep(.award-highlight) {
  font-weight: 700;
  color: var(--color-accent);
}
</style>
