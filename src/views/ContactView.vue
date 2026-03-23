<script setup lang="ts">
</script>

<template>
  <div class="view contact-view">
    <header class="page-header">
      <h1>Contact</h1>
      <p class="contact-intro">Thank you for your interest. Please feel free to contact me via the information below.</p>
    </header>
    <ul class="contact-list">
      <li><strong>Email</strong>: <a href="mailto:songxinyuan@sjtu.edu.cn">songxinyuan@sjtu.edu.cn</a></li>
      <li><strong>Location</strong>: Shanghai, China</li>
    </ul>
  </div>
</template>

<style scoped>
.page-header { margin-bottom: var(--space-xl); }
.page-header h1 { margin-bottom: var(--space-sm); }
.contact-intro {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
}
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.contact-list li {
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-border-light);
  transition: opacity var(--transition);
}
.contact-list li:hover { opacity: 0.9; }
.contact-list li:last-child { border-bottom: none; }
.contact-list a:hover { text-decoration: underline; }
</style>
