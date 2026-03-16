<script setup lang="ts">
import { ref } from 'vue'
import { KCatalog, KCatalogItem, KCard, KBadge } from '@kong/kongponents'

// Mock Data
const allServices = Array.from({ length: 25 }).map((_, i) => ({
  id: `service_${i + 1}`,
  name: `Service Alpha ${i + 1}`,
  description: 'An API gateway service handling core proxy functionality and plugin execution.',
  version: `v${Math.floor(Math.random() * 5) + 1}.0`,
  status: Math.random() > 0.2 ? 'Active' : 'Deprecated'
}))

// Fetcher Function for KCatalog
const fetchServices = async (payload: { pageSize: number, page: number, query: string }): Promise<{ data: any[], total: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredData = allServices

      if (payload.query) {
         filteredData = filteredData.filter(s => 
           s.name.toLowerCase().includes(payload.query.toLowerCase())
         )
      }

      const start = (payload.page - 1) * payload.pageSize
      const end = start + payload.pageSize
      
      resolve({
        data: filteredData.slice(start, end),
        total: filteredData.length
      })
    }, 800) // fake network delay
  })
}

// Controls
const cardSize = ref<'small'|'medium'|'large'>('medium')
const cardSizes = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
]

const handleItemClick = (item: any) => {
  alert(`Clicked on ${item.name}!`)
}
</script>

<template>
  <div class="view-container">
    <div class="header">
      <h1>Data Display</h1>
      <p class="description">Showcasing KCatalog and KCatalogItem with searching and pagination.</p>
    </div>

    <!-- Controls -->
    <KCard title="Catalog Controls">
      <template #default>
        <div class="demo-row">
          <label class="text-neutral">Card Size:</label>
          <select v-model="cardSize" class="native-select">
            <option v-for="size in cardSizes" :key="size.value" :value="size.value">
              {{ size.label }}
            </option>
          </select>
        </div>
      </template>
    </KCard>

    <!-- KCatalog -->
    <KCard title="Service Catalog">
      <template #default>
        <KCatalog
          :fetcher="fetchServices"
          :card-size="cardSize"
          cache-identifier="services-catalog"
          :search-enabled="true"
        >
          <template #body="{ data }">
            <KCatalogItem
              v-for="item in (data as any[])"
              :key="item.id"
              :item="item"
              @click="handleItemClick(item)"
              class="catalog-item"
            >
              <template #card-title>
                <div class="item-title">
                  {{ item.name }}
                  <KBadge 
                    :appearance="item.status === 'Active' ? 'success' : 'warning'"
                  >
                    {{ item.status }}
                  </KBadge>
                </div>
              </template>
              <template #card-body>
                <p class="item-description">{{ item.description }}</p>
                <p class="item-version">Version: {{ item.version }}</p>
              </template>
            </KCatalogItem>
          </template>
        </KCatalog>
      </template>
    </KCard>
  </div>
</template>

<style scoped>
.view-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.description {
  color: var(--color-text-neutral);
  font-size: 16px;
  line-height: 24px;
}
.demo-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.text-neutral {
  color: var(--color-text-neutral);
  font-size: 14px;
  font-weight: 500;
}
.native-select {
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);
  font-size: 14px;
}
.catalog-item {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.catalog-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.item-title {
  display: flex;
  align-items: center;
  gap: 12px;
}
.item-description {
  margin: 8px 0;
  color: var(--color-text-neutral);
  font-size: 14px;
  line-height: 20px;
}
.item-version {
  margin: 0;
  font-size: 12px;
  font-family: 'JetBrains Mono', monospace;
  color: var(--color-text-neutral);
}
</style>
