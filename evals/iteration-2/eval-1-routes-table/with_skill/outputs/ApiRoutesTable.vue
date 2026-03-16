<script setup lang="ts">
import { computed, ref } from 'vue'
import { KBadge, KTable } from '@kong/kongponents'
import { ArrowUpIcon, ArrowDownIcon, UnfoldMoreIcon } from '@kong/icons'

interface Route {
  id: string
  method: string
  path: string
  status: 'active' | 'inactive' | 'deprecated'
}

interface Props {
  routes?: Route[]
}

interface SortState {
  column: 'method' | 'path' | 'status'
  direction: 'asc' | 'desc' | null
}

withDefaults(defineProps<Props>(), {
  routes: () => [
    { id: '1', method: 'GET', path: '/api/users', status: 'active' },
    { id: '2', method: 'POST', path: '/api/users', status: 'active' },
    { id: '3', method: 'PUT', path: '/api/users/:id', status: 'active' },
    { id: '4', method: 'DELETE', path: '/api/users/:id', status: 'active' },
    { id: '5', method: 'GET', path: '/api/services', status: 'active' },
    { id: '6', method: 'POST', path: '/api/services', status: 'inactive' },
    { id: '7', method: 'PATCH', path: '/api/config/:id', status: 'deprecated' },
    { id: '8', method: 'DELETE', path: '/api/config/:id', status: 'active' },
  ],
})

const sortState = ref<SortState>({
  column: 'method',
  direction: null,
})

const sortedRoutes = computed(() => {
  const routes = [...(props.routes || [])]

  if (!sortState.value.direction || !sortState.value.column) {
    return routes
  }

  return routes.sort((a, b) => {
    let aVal: string
    let bVal: string

    if (sortState.value.column === 'method') {
      aVal = a.method
      bVal = b.method
    } else if (sortState.value.column === 'path') {
      aVal = a.path
      bVal = b.path
    } else {
      aVal = a.status
      bVal = b.status
    }

    const comparison = aVal.localeCompare(bVal)
    return sortState.value.direction === 'asc' ? comparison : -comparison
  })
})

const props = withDefaults(defineProps<Props>(), {
  routes: () => [
    { id: '1', method: 'GET', path: '/api/users', status: 'active' },
    { id: '2', method: 'POST', path: '/api/users', status: 'active' },
    { id: '3', method: 'PUT', path: '/api/users/:id', status: 'active' },
    { id: '4', method: 'DELETE', path: '/api/users/:id', status: 'active' },
    { id: '5', method: 'GET', path: '/api/services', status: 'active' },
    { id: '6', method: 'POST', path: '/api/services', status: 'inactive' },
    { id: '7', method: 'PATCH', path: '/api/config/:id', status: 'deprecated' },
    { id: '8', method: 'DELETE', path: '/api/config/:id', status: 'active' },
  ],
})

const getMethodBadgeStyle = (method: string) => {
  const methodStyles: Record<string, { bg: string; text: string }> = {
    GET: { bg: 'var(--color-background-success-weakest)', text: 'var(--color-text-success)' },
    POST: { bg: 'var(--color-background-info-weakest)', text: 'var(--color-text-info)' },
    PUT: { bg: 'var(--color-background-warning-weakest)', text: 'var(--color-text-warning)' },
    DELETE: { bg: 'var(--color-background-danger-weakest)', text: 'var(--color-text-danger)' },
    PATCH: { bg: 'var(--color-background-info-weakest)', text: 'var(--color-text-info)' },
    OPTIONS: { bg: 'var(--color-background-neutral-weaker)', text: 'var(--color-text-neutral-strong)' },
    HEAD: { bg: 'var(--color-text-neutral-strong)', text: 'var(--color-border)' },
  }
  return methodStyles[method] || { bg: 'var(--color-background-neutral-weaker)', text: 'var(--color-text-neutral-strong)' }
}

const getStatusBadgeAppearance = (status: string): 'success' | 'warning' | 'danger' | 'info' => {
  switch (status) {
    case 'active':
      return 'success'
    case 'inactive':
      return 'warning'
    case 'deprecated':
      return 'danger'
    default:
      return 'info'
  }
}

const toggleSort = (column: 'method' | 'path' | 'status') => {
  if (sortState.value.column === column) {
    if (sortState.value.direction === 'asc') {
      sortState.value.direction = 'desc'
    } else if (sortState.value.direction === 'desc') {
      sortState.value.direction = null
    } else {
      sortState.value.direction = 'asc'
    }
  } else {
    sortState.value.column = column
    sortState.value.direction = 'asc'
  }
}

const getSortIcon = (column: 'method' | 'path' | 'status') => {
  if (sortState.value.column !== column || !sortState.value.direction) {
    return 'unfold'
  }
  return sortState.value.direction === 'asc' ? 'up' : 'down'
}
</script>

<template>
  <div class="api-routes-table-wrapper">
    <div class="table-container">
      <table class="api-routes-table">
        <thead>
          <tr class="table-header-row">
            <th class="column-method">
              <button class="sort-header" @click="toggleSort('method')">
                <span class="header-text">Method</span>
                <span class="sort-icon">
                  <ArrowUpIcon
                    v-if="getSortIcon('method') === 'up'"
                    :size="16"
                    color="var(--color-text-primary)"
                  />
                  <ArrowDownIcon
                    v-else-if="getSortIcon('method') === 'down'"
                    :size="16"
                    color="var(--color-text-primary)"
                  />
                  <UnfoldMoreIcon
                    v-else
                    :size="16"
                    color="var(--color-text-neutral)"
                  />
                </span>
              </button>
            </th>
            <th class="column-path">
              <button class="sort-header" @click="toggleSort('path')">
                <span class="header-text">Route Path</span>
                <span class="sort-icon">
                  <ArrowUpIcon
                    v-if="getSortIcon('path') === 'up'"
                    :size="16"
                    color="var(--color-text-primary)"
                  />
                  <ArrowDownIcon
                    v-else-if="getSortIcon('path') === 'down'"
                    :size="16"
                    color="var(--color-text-primary)"
                  />
                  <UnfoldMoreIcon
                    v-else
                    :size="16"
                    color="var(--color-text-neutral)"
                  />
                </span>
              </button>
            </th>
            <th class="column-status">
              <button class="sort-header" @click="toggleSort('status')">
                <span class="header-text">Status</span>
                <span class="sort-icon">
                  <ArrowUpIcon
                    v-if="getSortIcon('status') === 'up'"
                    :size="16"
                    color="var(--color-text-primary)"
                  />
                  <ArrowDownIcon
                    v-else-if="getSortIcon('status') === 'down'"
                    :size="16"
                    color="var(--color-text-primary)"
                  />
                  <UnfoldMoreIcon
                    v-else
                    :size="16"
                    color="var(--color-text-neutral)"
                  />
                </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="route in sortedRoutes" :key="route.id" class="table-body-row">
            <td class="cell-method">
              <span class="method-badge" :style="{ backgroundColor: getMethodBadgeStyle(route.method).bg, color: getMethodBadgeStyle(route.method).text }">
                {{ route.method }}
              </span>
            </td>
            <td class="cell-path">
              {{ route.path }}
            </td>
            <td class="cell-status">
              <KBadge
                :appearance="getStatusBadgeAppearance(route.status)"
                :label="route.status.charAt(0).toUpperCase() + route.status.slice(1)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.api-routes-table-wrapper {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--color-background);
}

.table-container {
  overflow-x: auto;
}

.api-routes-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Inter, sans-serif;
}

.table-header-row {
  background-color: var(--color-background-neutral-weakest);
  border-bottom: 1px solid var(--color-border);
}

.api-routes-table thead th {
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text-neutral);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background-neutral-weakest);
}

.sort-header {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--color-text-neutral);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: Inter, sans-serif;
  transition: color 0.2s ease;
}

.sort-header:hover {
  color: var(--color-text-primary);
}

.sort-header:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-background), 0 0 0 4px rgba(0, 68, 244, 0.2);
  border-radius: 4px;
}

.sort-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.header-text {
  flex: 1;
  white-space: nowrap;
}

.column-method {
  width: 120px;
}

.column-path {
  flex: 1;
  min-width: 250px;
}

.column-status {
  width: 140px;
}

.table-body-row {
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.15s ease;
}

.table-body-row:hover {
  background-color: var(--color-background-neutral-weakest);
}

.api-routes-table tbody td {
  padding: 12px 16px;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-text);
  vertical-align: middle;
}

.cell-method {
  width: 120px;
}

.cell-path {
  flex: 1;
  min-width: 250px;
  font-family: JetBrains Mono, monospace;
  color: var(--color-text-neutral-stronger);
}

.cell-status {
  width: 140px;
  text-align: left;
}

.method-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 24px;
  padding: 4px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;
  font-family: Inter, sans-serif;
  letter-spacing: 0px;
  white-space: nowrap;
}
</style>
