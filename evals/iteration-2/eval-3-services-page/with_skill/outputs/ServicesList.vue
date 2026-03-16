<script setup lang="ts">
import { ref, computed } from 'vue'
import { KInput, KButton, KBadge, KDropdown, KDropdownMenu, KDropdownItem, KTable, KCard } from '@kong/kongponents'
import { SearchIcon, ChevronDownIcon, AddIcon, MoreIcon, EditIcon, TrashIcon } from '@kong/icons'

// State
const searchQuery = ref('')
const statusFilter = ref<string | null>(null)
const protocolFilter = ref<string | null>(null)

// Mock service data
const allServices = ref([
  { id: 1, name: 'Payment API', protocol: 'HTTP', status: 'Active', description: 'Payment processing service' },
  { id: 2, name: 'Auth Service', protocol: 'HTTPS', status: 'Active', description: 'Authentication and authorization' },
  { id: 3, name: 'Notification Service', protocol: 'HTTP', status: 'Inactive', description: 'Email and SMS notifications' },
  { id: 4, name: 'Analytics API', protocol: 'HTTPS', status: 'Active', description: 'Analytics and reporting' },
  { id: 5, name: 'Webhook Handler', protocol: 'HTTP', status: 'Maintenance', description: 'Webhook event processing' },
  { id: 6, name: 'Data Pipeline', protocol: 'HTTPS', status: 'Inactive', description: 'ETL data processing' },
  { id: 7, name: 'User Service', protocol: 'HTTP', status: 'Active', description: 'User management' },
  { id: 8, name: 'Logging Service', protocol: 'HTTPS', status: 'Active', description: 'Centralized logging' },
])

// Filter options
const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
  { label: 'Maintenance', value: 'Maintenance' },
]

const protocolOptions = [
  { label: 'HTTP', value: 'HTTP' },
  { label: 'HTTPS', value: 'HTTPS' },
  { label: 'gRPC', value: 'gRPC' },
]

// Filtered services
const filteredServices = computed(() => {
  return allServices.value.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = statusFilter.value === null || service.status === statusFilter.value
    const matchesProtocol = protocolFilter.value === null || service.protocol === protocolFilter.value
    return matchesSearch && matchesStatus && matchesProtocol
  })
})

// Table headers
const headers = [
  { key: 'name', label: 'Service Name', sortable: true },
  { key: 'protocol', label: 'Protocol' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions' },
]

// Get badge appearance based on status
function getStatusBadgeAppearance(status: string) {
  switch (status) {
    case 'Active':
      return 'success'
    case 'Inactive':
      return 'danger'
    case 'Maintenance':
      return 'warning'
    default:
      return 'neutral'
  }
}

// Get badge appearance based on protocol
function getProtocolBadgeAppearance(protocol: string) {
  switch (protocol) {
    case 'HTTPS':
      return 'success'
    case 'HTTP':
      return 'info'
    case 'gRPC':
      return 'warning'
    default:
      return 'neutral'
  }
}

// Actions
function clearFilters() {
  searchQuery.value = ''
  statusFilter.value = null
  protocolFilter.value = null
}

function handleStatusFilterChange(value: string | null) {
  statusFilter.value = value
}

function handleProtocolFilterChange(value: string | null) {
  protocolFilter.value = value
}
</script>

<template>
  <KCard class="services-list-container">
    <!-- Page Title -->
    <div class="page-header">
      <h1>Services</h1>
      <KButton appearance="primary" size="medium">
        <template #icon>
          <AddIcon :size="16" />
        </template>
        Add Service
      </KButton>
    </div>

    <!-- Filter Toolbar -->
    <div class="filter-toolbar">
      <!-- Search Input -->
      <div class="search-section">
        <div class="search-input-wrapper">
          <SearchIcon :size="16" color="var(--color-text-neutral)" class="search-icon" />
          <KInput
            v-model="searchQuery"
            type="text"
            placeholder="Search services..."
            class="search-input"
            :show-label="false"
          />
        </div>
      </div>

      <!-- Divider -->
      <div class="toolbar-divider"></div>

      <!-- Filter Pills -->
      <div class="filters-section">
        <!-- Status Filter Pill -->
        <div
          class="filter-pill"
          :class="{ applied: statusFilter !== null }"
        >
          <button
            class="pill-button"
            @click="statusFilter = statusFilter ? null : statusOptions[0].value"
          >
            <span v-if="statusFilter" class="pill-label">Status: <strong>{{ statusFilter }}</strong></span>
            <span v-else class="pill-label">Status</span>
            <ChevronDownIcon :size="14" class="pill-icon" />
          </button>
          <div v-if="statusFilter" class="pill-close" @click="statusFilter = null">
            ×
          </div>
        </div>

        <!-- Protocol Filter Pill -->
        <div
          class="filter-pill"
          :class="{ applied: protocolFilter !== null }"
        >
          <button
            class="pill-button"
            @click="protocolFilter = protocolFilter ? null : protocolOptions[0].value"
          >
            <span v-if="protocolFilter" class="pill-label">Protocol: <strong>{{ protocolFilter }}</strong></span>
            <span v-else class="pill-label">Protocol</span>
            <ChevronDownIcon :size="14" class="pill-icon" />
          </button>
          <div v-if="protocolFilter" class="pill-close" @click="protocolFilter = null">
            ×
          </div>
        </div>

        <!-- More Filters Button -->
        <button class="more-filters-btn">
          <AddIcon :size="14" />
          More filters
        </button>
      </div>
    </div>

    <!-- Services Table -->
    <div class="table-container">
      <table class="services-table">
        <thead>
          <tr>
            <th class="col-name">Service Name</th>
            <th class="col-protocol">Protocol</th>
            <th class="col-status">Status</th>
            <th class="col-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in filteredServices" :key="service.id" class="table-row">
            <td class="col-name">
              <div class="cell-content">
                <div class="service-name">{{ service.name }}</div>
                <div class="service-description">{{ service.description }}</div>
              </div>
            </td>
            <td class="col-protocol">
              <KBadge
                :appearance="getProtocolBadgeAppearance(service.protocol)"
                :label="service.protocol"
                size="small"
              />
            </td>
            <td class="col-status">
              <KBadge
                :appearance="getStatusBadgeAppearance(service.status)"
                :label="service.status"
                size="small"
              />
            </td>
            <td class="col-actions">
              <div class="actions-cell">
                <button class="action-btn" :title="`Edit ${service.name}`">
                  <EditIcon :size="16" color="var(--color-text-neutral)" />
                </button>
                <button class="action-btn" :title="`Delete ${service.name}`">
                  <TrashIcon :size="16" color="var(--color-text-neutral)" />
                </button>
                <KDropdown appearance="secondary" size="small">
                  <template #trigger>
                    <button class="action-btn">
                      <MoreIcon :size="16" color="var(--color-text-neutral)" />
                    </button>
                  </template>
                  <KDropdownMenu>
                    <KDropdownItem>View Details</KDropdownItem>
                    <KDropdownItem>Duplicate</KDropdownItem>
                    <KDropdownItem>View Analytics</KDropdownItem>
                  </KDropdownMenu>
                </KDropdown>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="filteredServices.length === 0" class="empty-state">
        <p>No services found matching your filters.</p>
        <KButton
          v-if="searchQuery || statusFilter || protocolFilter"
          appearance="tertiary"
          @click="clearFilters"
        >
          Clear filters
        </KButton>
      </div>
    </div>
  </KCard>
</template>

<style scoped>
.services-list-container {
  padding: 24px;
}

/* Page Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.page-header h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -1.5px;
  color: var(--color-text);
  margin: 0;
}

/* Filter Toolbar */
.filter-toolbar {
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 24px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  gap: 12px;
}

/* Search Section */
.search-section {
  flex-shrink: 0;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
}

.search-icon {
  position: absolute;
  left: 12px;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding-left: 36px;
}

/* Toolbar Divider */
.toolbar-divider {
  width: 1px;
  height: 24px;
  background-color: var(--color-border);
  margin: 0 8px;
  flex-shrink: 0;
}

/* Filters Section */
.filters-section {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  overflow-x: auto;
  padding-right: 4px;
}

/* Filter Pill */
.filter-pill {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 8px;
  border-radius: 4px;
  background-color: var(--color-background-neutral-weakest);
  border: 1px dashed var(--color-border);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.filter-pill:hover:not(.applied) {
  border-color: var(--color-text-primary);
}

.filter-pill.applied {
  background-color: var(--color-background-primary-weakest);
  border-style: solid;
  border-color: var(--color-text-primary);
  color: var(--color-text-primary);
}

.filter-pill.applied:hover {
  background-color: var(--color-background-primary-weaker);
}

.pill-button {
  all: unset;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
}

.pill-label {
  color: var(--color-text);
}

.filter-pill.applied .pill-label {
  color: var(--color-text-primary);
}

.pill-icon {
  flex-shrink: 0;
}

.pill-close {
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 4px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 16px;
  color: var(--color-text-primary);
  transition: background-color 0.2s ease;
}

.pill-close:hover {
  background-color: rgba(0, 68, 244, 0.1);
}

/* More Filters Button */
.more-filters-btn {
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 8px;
  height: 28px;
  cursor: pointer;
  color: var(--color-text-neutral);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.more-filters-btn:hover {
  color: var(--color-text-primary);
}

/* Table Container */
.table-container {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
}

.services-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Inter;
  font-size: 14px;
}

/* Table Header */
.services-table thead {
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.services-table thead th {
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text-neutral);
  border-bottom: 1px solid var(--color-border);
  font-weight: 600;
}

.col-name {
  width: 30%;
}

.col-protocol {
  width: 15%;
}

.col-status {
  width: 15%;
}

.col-actions {
  width: 20%;
  text-align: center;
}

/* Table Body */
.table-row {
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.2s ease;
}

.table-row:hover {
  background-color: var(--color-background-neutral-weakest);
}

.services-table tbody td {
  padding: 12px 16px;
  color: var(--color-text);
  vertical-align: middle;
}

.cell-content {
  display: flex;
  flex-direction: column;
}

.service-name {
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
}

.service-description {
  font-size: 12px;
  color: var(--color-text-neutral);
}

/* Actions Cell */
.actions-cell {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.action-btn {
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;
  color: var(--color-text-neutral);
}

.action-btn:hover {
  background-color: var(--color-background-neutral-weakest);
  color: var(--color-text-primary);
}

.action-btn:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(0, 68, 244, 0.2);
}

/* Empty State */
.empty-state {
  padding: 48px 24px;
  text-align: center;
  color: var(--color-text-neutral);
  font-size: 14px;
}

.empty-state p {
  margin: 0 0 16px 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .filter-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .search-section {
    flex-shrink: unset;
  }

  .search-input-wrapper {
    width: 100%;
  }

  .toolbar-divider {
    display: none;
  }

  .filters-section {
    width: 100%;
  }

  .services-table {
    font-size: 12px;
  }

  .services-table thead th,
  .services-table tbody td {
    padding: 8px 12px;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
