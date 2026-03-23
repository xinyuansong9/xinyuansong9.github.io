<script setup lang="ts">
</script>

<template>
  <div class="view home-view">
    <section class="hero">
      <div class="hero-photo-wrap">
        <img src="/photo.png" alt="Xinyuan Song" class="hero-photo" />
      </div>
      <div class="hero-text">
        <h1>Xinyuan Song</h1>
        <p class="lead">
          Hello there! I'm Xinyuan Song, a curious mind exploring the exciting intersection of design and technology. Welcome to my academic corner where ideas meet innovation and creativity drives the future!
        </p>
        <p class="lead">
          I'm a 3rd-year Master's student in International Industrial Design Engineering at Shanghai Jiao Tong University.
        </p>
        <p class="lead">
          I am currently seeking PhD opportunities.
        </p>
      </div>
    </section>
    <section class="quick-links">
      <h2 class="quick-links-title">Quick links</h2>
      <ul class="quick-links-list">
        <li><router-link to="/about" class="quick-link">About</router-link><span class="quick-desc"> — Education & background</span></li>
        <li><router-link to="/research" class="quick-link">Research</router-link><span class="quick-desc"> — Publications</span></li>
        <li><router-link to="/projects" class="quick-link">Projects</router-link><span class="quick-desc"> — Research & open-source projects</span></li>
        <li><router-link to="/contact" class="quick-link">Contact</router-link><span class="quick-desc"> — Email & profiles</span></li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home-view { padding: 0; }
.hero {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-2xl);
  align-items: start;
  margin-bottom: var(--space-3xl);
}
@media (max-width: 560px) {
  .hero { grid-template-columns: 1fr; gap: var(--space-xl); }
}
.hero-photo-wrap {
  padding: 4px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
}
.hero-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}
.hero-text { min-width: 0; }
.hero h1 { margin-bottom: var(--space-md); letter-spacing: -0.02em; }
.lead {
  color: var(--color-text-muted);
  font-size: 1rem;
  margin: 0 0 var(--space-lg) 0;
  line-height: 1.65;
}
.hero-text .lead:last-child { margin-bottom: 0; }
.quick-links-title {
  margin-bottom: var(--space-lg);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
}
.quick-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0;
}
.quick-links-list li {
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-border);
  transition: opacity var(--transition);
}
.quick-links-list li:hover { opacity: 0.85; }
.quick-links-list li:last-child { border-bottom: none; }
.quick-link { font-weight: 500; color: var(--color-accent); }
.quick-link:hover { text-decoration: underline; }
.quick-desc { color: var(--color-text-muted); font-size: 0.9375rem; }
</style>
