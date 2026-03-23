<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <p class="copy">© {{ year }} Xinyuan Song · Built with Vue 3 & Vite</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-bg);
}
.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-xl) var(--space-xl) var(--space-xl);
}
.copy {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  font-weight: 400;
}
</style>
