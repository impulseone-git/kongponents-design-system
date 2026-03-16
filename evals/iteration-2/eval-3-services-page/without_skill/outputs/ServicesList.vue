<template>
  <div class="services-list-container">
    <!-- Filter Toolbar -->
    <div class="filter-toolbar">
      <div class="filter-controls">
        <!-- Search Bar -->
        <div class="search-wrapper">
          <KInput
            v-model="searchQuery"
            type="text"
            placeholder="Search services..."
            class="search-input"
          />
        </div>

        <!-- Quick Filters -->
        <div class="quick-filters">
          <!-- Status Filter -->
          <KSelect
            v-model="selectedStatus"
            label="Status"
            placeholder="All Statuses"
            :items="statusOptions"
            class="filter-select"
          />

          <!-- Protocol Filter -->
          <KSelect
            v-model="selectedProtocol"
            label="Protocol"
            placeholder="All Protocols"
            :items="protocolOptions"
            class="filter-select"
          />
        </div>

        <!-- More Filters Button -->
        <KButton
          appearance="tertiary"
          icon="sliders"
          @click="showMoreFilters = !showMoreFilters"
          class="more-filters-btn"
        >
          More Filters
        </KButton>
      </div>

      <!-- More Filters Expanded Section -->
      <div v-if="showMoreFilters" class="more-filters-section">
        <div class="filters-grid">
          <div class="filter-group">
            <label>Version</label>
            <KInput
              v-model="versionFilter"
              type="text"
              placeholder="Enter version"
            />
          </div>
          <div class="filter-group">
            <label>Port</label>
            <KInput
              v-model="portFilter"
              type="number"
              placeholder="Enter port"
            />
          </div>
          <div class="filter-group">
            <label>Region</label>
            <KSelect
              v-model="regionFilter"
              placeholder="Select region"
              :items="regionOptions"
            />
          </div>
        </div>
        <div class="filter-actions">
          <KButton
            appearance="secondary"
            size="small"
            @click="clearAllFilters"
          >
            Clear All
          </KButton>
          <KButton
            appearance="primary"
            size="small"
            @click="applyFilters"
          >
            Apply Filters
          </KButton>
        </div>
      </div>
    </div>

    <!-- Services Table -->
    <div class="table-wrapper">
      <KTable
        :data="filteredServices"
        :headers="tableHeaders"
        :fetching="false"
        class="services-table"
      >
        <template #name="{ row }">
          <span class="service-name">{{ row.name }}</span>
        </template>

        <template #protocol="{ row }">
          <KBadge
            :appearance="getProtocolAppearance(row.protocol)"
            size="medium"
          >
            {{ row.protocol }}
          </KBadge>
        </template>

        <template #status="{ row }">
          <KBadge
            :appearance="getStatusAppearance(row.status)"
            size="medium"
          >
            {{ row.status }}
          </KBadge>
        </template>

        <template #actions="{ row }">
          <div class="action-buttons">
            <KButton
              appearance="tertiary"
              size="small"
              icon="eye"
              @click="viewService(row)"
              title="View"
            />
            <KButton
              appearance="tertiary"
              size="small"
              icon="edit"
              @click="editService(row)"
              title="Edit"
            />
            <KButton
              appearance="tertiary"
              size="small"
              icon="trash"
              @click="deleteService(row)"
              title="Delete"
            />
          </div>
        </template>
      </KTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { KInput, KSelect, KButton, KBadge, KTable } from '@kong/kongponents'

interface Service {
  id: string
  name: string
  protocol: string
  status: string
  version: string
  port: number
  region: string
  createdAt: string
}

// State
const searchQuery = ref('')
const selectedStatus = ref('')
const selectedProtocol = ref('')
const showMoreFilters = ref(false)
const versionFilter = ref('')
const portFilter = ref('')
const regionFilter = ref('')

// Filter options
const statusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' },
  { label: 'Error', value: 'error' }
]

const protocolOptions = [
  { label: 'HTTP', value: 'http' },
  { label: 'HTTPS', value: 'https' },
  { label: 'gRPC', value: 'grpc' },
  { label: 'TCP', value: 'tcp' },
  { label: 'UDP', value: 'udp' }
]

const regionOptions = [
  { label: 'US East', value: 'us-east' },
  { label: 'US West', value: 'us-west' },
  { label: 'EU', value: 'eu' },
  { label: 'APAC', value: 'apac' }
]

// Table headers
const tableHeaders = [
  { key: 'name', label: 'Service Name' },
  { key: 'protocol', label: 'Protocol' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions' }
]

// Mock data
const services = ref<Service[]>([
  {
    id: '1',
    name: 'User Service',
    protocol: 'http',
    status: 'active',
    version: '1.2.0',
    port: 8080,
    region: 'us-east',
    createdAt: '2026-01-15'
  },
  {
    id: '2',
    name: 'Auth Service',
    protocol: 'https',
    status: 'active',
    version: '2.0.1',
    port: 8443,
    region: 'us-east',
    createdAt: '2026-01-20'
  },
  {
    id: '3',
    name: 'Payment Gateway',
    protocol: 'grpc',
    status: 'active',
    version: '1.5.2',
    port: 50051,
    region: 'us-west',
    createdAt: '2026-02-01'
  },
  {
    id: '4',
    name: 'Cache Service',
    protocol: 'tcp',
    status: 'inactive',
    version: '1.0.0',
    port: 6379,
    region: 'eu',
    createdAt: '2026-02-05'
  },
  {
    id: '5',
    name: 'Message Queue',
    protocol: 'http',
    status: 'pending',
    version: '3.1.0',
    port: 5672,
    region: 'apac',
    createdAt: '2026-02-10'
  },
  {
    id: '6',
    name: 'Analytics Service',
    protocol: 'https',
    status: 'active',
    version: '1.8.3',
    port: 8443,
    region: 'eu',
    createdAt: '2026-02-15'
  },
  {
    id: '7',
    name: 'Notification Service',
    protocol: 'udp',
    status: 'error',
    version: '2.1.1',
    port: 5000,
    region: 'us-west',
    createdAt: '2026-02-20'
  },
  {
    id: '8',
    name: 'Data Pipeline',
    protocol: 'grpc',
    status: 'active',
    version: '1.3.5',
    port: 50052,
    region: 'us-east',
    createdAt: '2026-03-01'
  }
])

// Computed filtered services
const filteredServices = computed(() => {
  return services.value.filter(service => {
    const matchesSearch =
      !searchQuery.value ||
      service.name.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesStatus =
      !selectedStatus.value ||
      service.status === selectedStatus.value

    const matchesProtocol =
      !selectedProtocol.value ||
      service.protocol === selectedProtocol.value

    const matchesVersion =
      !versionFilter.value ||
      service.version.includes(versionFilter.value)

    const matchesPort =
      !portFilter.value ||
      service.port === parseInt(portFilter.value)

    const matchesRegion =
      !regionFilter.value ||
      service.region === regionFilter.value

    return (
      matchesSearch &&
      matchesStatus &&
      matchesProtocol &&
      matchesVersion &&
      matchesPort &&
      matchesRegion
    )
  })
})

// Helper functions
const getStatusAppearance = (status: string) => {
  const appearanceMap: Record<string, string> = {
    active: 'success',
    inactive: 'neutral',
    pending: 'warning',
    error: 'danger'
  }
  return appearanceMap[status] || 'neutral'
}

const getProtocolAppearance = (protocol: string) => {
  const appearanceMap: Record<string, string> = {
    http: 'info',
    https: 'success',
    grpc: 'info',
    tcp: 'neutral',
    udp: 'neutral'
  }
  return appearanceMap[protocol] || 'neutral'
}

const applyFilters = () => {
  showMoreFilters.value = false
}

const clearAllFilters = () => {
  searchQuery.value = ''
  selectedStatus.value = ''
  selectedProtocol.value = ''
  versionFilter.value = ''
  portFilter.value = ''
  regionFilter.value = ''
}

const viewService = (service: Service) => {
  console.log('View service:', service)
}

const editService = (service: Service) => {
  console.log('Edit service:', service)
}

const deleteService = (service: Service) => {
  console.log('Delete service:', service)
}
</script>

<style scoped>
.services-list-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.filter-toolbar {
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.filter-controls {
  display: flex;
  gap: 12px;
  align-items: flex-end;
  flex-wrap: wrap;
}

.search-wrapper {
  flex: 1;
  min-width: 200px;
}

.search-input {
  width: 100%;
}

.quick-filters {
  display: flex;
  gap: 12px;
  align-items: flex-end;
}

.filter-select {
  min-width: 150px;
}

.more-filters-btn {
  white-space: nowrap;
}

.more-filters-section {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-group label {
  font-weight: 500;
  font-size: 14px;
  color: #333;
}

.filter-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.table-wrapper {
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.services-table {
  width: 100%;
}

.service-name {
  font-weight: 500;
  color: #333;
}

.action-buttons {
  display: flex;
  gap: 8px;
}
</style>
