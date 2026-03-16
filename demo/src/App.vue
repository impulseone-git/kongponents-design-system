<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { KBadge, KInput } from '@kong/kongponents'
import {
  KongIcon, ChevronRightIcon, ListIcon, DocumentIcon,
  DashboardIcon, MenuIcon, TableIcon, FilterIcon, SearchIcon,
  ClipboardIcon, GridIcon
} from '@kong/icons'

const searchQuery = ref('')
const links = [
  { to: '/buttons', icon: ListIcon, title: 'Buttons & Actions', keywords: 'button btn copy dropdown' },
  { to: '/forms', icon: DocumentIcon, title: 'Form Inputs', keywords: 'form input text textarea checkbox radio select multiselect date file' },
  { to: '/display', icon: DashboardIcon, title: 'Display & Layout', keywords: 'card badge alert modal prompt skeleton code empty state' },
  { to: '/navigation', icon: MenuIcon, title: 'Navigation', keywords: 'tab pagination segment' },
  { to: '/data', icon: TableIcon, title: 'Data Display', keywords: 'table list catalog item' },
  { to: '/filters', icon: FilterIcon, title: 'Filter Patterns', keywords: 'filter search toolbar tags' },
  { to: '/form-layouts', icon: ClipboardIcon, title: 'Form Layouts', keywords: 'form step layout cards fields wizard basic provider' },
  { to: '/tables', icon: TableIcon, title: 'Tables', keywords: 'table header cell skeleton sort badge switch checkbox row' },
  { to: '/typography', icon: DocumentIcon, title: 'Typography', keywords: 'typography font heading text style inter jetbrains mono paragraph list anchor code' },
  { to: '/icons', icon: GridIcon, title: 'Icons', keywords: 'icon material symbol flag platform gateway third party logo' }
]

const filteredLinks = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return links
  return links.filter(link => 
    link.title.toLowerCase().includes(query) || 
    link.keywords.includes(query)
  )
})
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="logo">
          <KongIcon color="var(--color-primary-60)" size="32" />
          <h2>Kongponents</h2>
        </div>
        <KBadge appearance="info">v9 Demos</KBadge>
      </div>

      <nav class="sidebar-nav">
        <div class="sidebar-search">
          <KInput v-model="searchQuery" placeholder="Search components..." type="search">
             <template #before>
               <SearchIcon size="16" color="var(--color-text-neutral)" />
             </template>
          </KInput>
        </div>
        
        <RouterLink 
          v-for="link in filteredLinks" 
          :key="link.to"
          :to="link.to" 
          class="nav-link"
        >
          <component :is="link.icon" size="20" />
          {{ link.title }}
        </RouterLink>

        <!-- Empty state when search yields no results -->
        <div v-if="filteredLinks.length === 0" class="no-results">
          No components found
        </div>
      </nav>
    </aside>

    <main class="main-content">
      <header class="main-header">
        <div class="header-breadcrumb">
          <span class="text-neutral">Showcase</span>
          <ChevronRightIcon size="16" color="var(--color-text-neutral)" />
          <span class="text-primary">{{ $route.name }}</span>
        </div>
      </header>
      
      <div class="page-content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-background-neutral-weakest);
}

.sidebar {
  width: 280px;
  min-width: 280px;
  max-width: 280px;
  background-color: var(--color-background);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
}

.sidebar-header {
  padding: 24px 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo h2 {
  margin: 0;
  font-size: 20px;
  color: var(--color-text);
  letter-spacing: -0.4px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
  gap: 4px;
}

.sidebar-search {
  margin-bottom: 12px;
  width: 100%;
}
.sidebar-search :deep(.k-input) {
  width: 100%;
}
.sidebar-search :deep(.k-input-wrapper) {
  width: 100%;
}

.no-results {
  padding: 16px;
  text-align: center;
  color: var(--color-text-neutral);
  font-size: 14px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 6px;
  color: var(--color-text-neutral);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: var(--color-background-neutral-weakest);
  color: var(--color-text);
}

.nav-link.router-link-active {
  background-color: var(--color-primary-10);
  color: var(--color-primary-60);
}

.nav-link.router-link-active :deep(svg path) {
  fill: var(--color-primary-60);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.main-header {
  height: 64px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 32px;
}

.header-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
}

.text-neutral {
  color: var(--color-text-neutral);
}

.text-primary {
  color: var(--color-primary-60);
}

.page-content {
  padding: 32px;
  flex: 1;
  overflow-y: auto;
}
</style>
