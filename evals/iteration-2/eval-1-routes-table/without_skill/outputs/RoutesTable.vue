<template>
  <div class="routes-table-container">
    <table class="routes-table">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            @click="sort(column.key)"
            :class="['sortable', { 'sorted': sortBy === column.key }]"
          >
            <span class="column-label">{{ column.label }}</span>
            <span v-if="sortBy === column.key" class="sort-indicator">
              {{ sortOrder === 'asc' ? '↑' : '↓' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="route in sortedRoutes"
          :key="route.id"
          class="route-row"
        >
          <td class="method-cell">
            <span :class="['method-badge', `method-${route.method.toLowerCase()}`]">
              {{ route.method }}
            </span>
          </td>
          <td class="path-cell">
            <code class="path-code">{{ route.path }}</code>
          </td>
          <td class="status-cell">
            <span :class="['status-badge', `status-${route.status.toLowerCase()}`]">
              {{ route.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="sortedRoutes.length === 0" class="empty-state">
      No routes found
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Route {
  id: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'
  path: string
  status: 'active' | 'inactive' | 'deprecated' | 'beta'
}

interface Column {
  key: string
  label: string
}

const props = defineProps<{
  routes?: Route[]
}>()

const columns: Column[] = [
  { key: 'method', label: 'Method' },
  { key: 'path', label: 'Path' },
  { key: 'status', label: 'Status' }
]

const sortBy = ref<string>('path')
const sortOrder = ref<'asc' | 'desc'>('asc')

const defaultRoutes: Route[] = [
  { id: '1', method: 'GET', path: '/api/v1/services', status: 'active' },
  { id: '2', method: 'POST', path: '/api/v1/services', status: 'active' },
  { id: '3', method: 'GET', path: '/api/v1/services/{id}', status: 'active' },
  { id: '4', method: 'PUT', path: '/api/v1/services/{id}', status: 'active' },
  { id: '5', method: 'DELETE', path: '/api/v1/services/{id}', status: 'active' },
  { id: '6', method: 'GET', path: '/api/v1/routes', status: 'active' },
  { id: '7', method: 'POST', path: '/api/v1/routes', status: 'beta' },
  { id: '8', method: 'GET', path: '/api/v1/routes/{id}', status: 'deprecated' },
  { id: '9', method: 'PATCH', path: '/api/v1/consumers/{id}', status: 'active' },
  { id: '10', method: 'DELETE', path: '/api/v1/consumers/{id}', status: 'inactive' }
]

const routeList = computed(() => props.routes || defaultRoutes)

const sortedRoutes = computed(() => {
  const sorted = [...routeList.value]

  sorted.sort((a, b) => {
    let aVal: string | number
    let bVal: string | number

    if (sortBy.value === 'method') {
      aVal = a.method
      bVal = b.method
    } else if (sortBy.value === 'path') {
      aVal = a.path
      bVal = b.path
    } else {
      aVal = a.status
      bVal = b.status
    }

    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase()
      bVal = (bVal as string).toLowerCase()
      return sortOrder.value === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal)
    }

    return sortOrder.value === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number)
  })

  return sorted
})

const sort = (column: string) => {
  if (sortBy.value === column) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortBy.value = column
    sortOrder.value = 'asc'
  }
}
</script>

<style scoped>
.routes-table-container {
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.routes-table {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
}

thead {
  background: #f5f5f5;
  border-bottom: 2px solid #e0e0e0;
}

th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #333333;
  user-select: none;
}

th.sortable {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

th.sortable:hover {
  background-color: #eeeeee;
}

th.sorted {
  background-color: #e8f5e9;
}

.column-label {
  display: inline-block;
  margin-right: 6px;
}

.sort-indicator {
  font-size: 12px;
  margin-left: 4px;
  color: #2e7d32;
  font-weight: 700;
}

tbody tr {
  border-bottom: 1px solid #eeeeee;
  transition: background-color 0.15s ease;
}

.route-row:hover {
  background-color: #f9f9f9;
}

td {
  padding: 12px 16px;
  color: #555555;
}

.method-cell {
  width: 100px;
}

.path-cell {
  flex: 1;
}

.status-cell {
  width: 120px;
  text-align: center;
}

.method-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.method-get {
  background-color: #e3f2fd;
  color: #1565c0;
}

.method-post {
  background-color: #f3e5f5;
  color: #6a1b9a;
}

.method-put {
  background-color: #fff3e0;
  color: #e65100;
}

.method-delete {
  background-color: #ffebee;
  color: #c62828;
}

.method-patch {
  background-color: #f1f8e9;
  color: #558b2f;
}

.method-head,
.method-options {
  background-color: #eceff1;
  color: #455a64;
}

.path-code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Courier New', monospace;
  background-color: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  color: #333333;
  font-size: 13px;
}

.status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 12px;
  text-transform: capitalize;
}

.status-active {
  background-color: #c8e6c9;
  color: #2e7d32;
}

.status-inactive {
  background-color: #ffccbc;
  color: #d84315;
}

.status-deprecated {
  background-color: #ffe0b2;
  color: #e65100;
}

.status-beta {
  background-color: #b3e5fc;
  color: #01579b;
}

.empty-state {
  padding: 40px;
  text-align: center;
  color: #999999;
  font-size: 14px;
  background: #ffffff;
}
</style>
