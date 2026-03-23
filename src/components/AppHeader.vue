<script setup lang="ts">
import { useRoute } from 'vue-router'
import { siteName } from '@/config'

const route = useRoute()

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/research', name: 'Research' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' },
]

const isActive = (path: string) =>
  path === '/' ? route.path === '/' : route.path.startsWith(path)
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/" class="brand">{{ siteName }}</router-link>
      <nav class="nav">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: isActive(item.path) }"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}
.header-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-xl) var(--space-xl) var(--space-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
}
.brand {
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: -0.02em;
  color: var(--color-text);
  text-decoration: none;
  transition: color var(--transition);
}
.brand:hover {
  color: var(--color-accent);
  text-decoration: none;
}
.nav {
  display: flex;
  gap: var(--space-lg);
}
.nav-link {
  padding: var(--space-xs) 0;
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: color var(--transition);
}
.nav-link:hover {
  color: var(--color-text);
  text-decoration: none;
}
.nav-link.active {
  color: var(--color-accent);
}
</style>
