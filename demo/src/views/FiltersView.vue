<script setup lang="ts">
import { ref, computed } from 'vue'
import { KCard } from '@kong/kongponents'
import { SearchIcon, ChevronDownIcon, CloseIcon, AddIcon, CheckIcon } from '@kong/icons'

/* ───────────── Search + Filter Bar Layout ───────────── */
const layoutSearch = ref('')
const layoutFilters = ref([
  { key: 'status', label: 'Status', value: 'Enabled', applied: true },
  { key: 'type', label: 'Type', value: '', applied: false },
  { key: 'protocol', label: 'Protocol', value: 'HTTP', applied: true }
])

const removeLayoutFilter = (key: string) => {
  const f = layoutFilters.value.find(f => f.key === key)
  if (f) { f.applied = false; f.value = '' }
}

/* ───────────── Truncation Demo ───────────── */
const truncationPills = ref([
  { label: 'Status', value: 'Enabled', truncated: false },
  { label: 'Environment', value: 'Production, Staging, Development, Testing', truncated: true },
  { label: 'Protocol', value: 'HTTP, HTTPS, gRPC', truncated: false },
  { label: 'Tags', value: 'internal, external, public, private, deprecated', truncated: true }
])
const hoveredTruncPill = ref<number | null>(null)

/* ───────────── Variations ───────────── */
// --- No quick filter ---
const noQuickSearch = ref('')
const noQuickDropdownOpen = ref(false)
const noQuickAvailable = ref(['Status', 'Environment', 'Protocol', 'Tags', 'Created At'])
const noQuickApplied = ref<{ label: string; value: string }[]>([])
const noQuickPopover = ref<string | null>(null)
const noQuickPopoverValue = ref('')

const openNoQuickPopover = (filter: string) => {
  noQuickDropdownOpen.value = false
  noQuickPopover.value = filter
  noQuickPopoverValue.value = ''
}
const applyNoQuickFilter = () => {
  if (noQuickPopover.value && noQuickPopoverValue.value) {
    noQuickApplied.value.push({ label: noQuickPopover.value, value: noQuickPopoverValue.value })
  }
  noQuickPopover.value = null
  noQuickPopoverValue.value = ''
}
const cancelNoQuickPopover = () => {
  noQuickPopover.value = null
  noQuickPopoverValue.value = ''
}
const removeNoQuickFilter = (index: number) => {
  noQuickApplied.value.splice(index, 1)
}

// --- 1 quick filter ---
const oneQuickSearch = ref('')
const oneQuickFilter = ref<{ label: string; value: string; applied: boolean }>({
  label: 'Status', value: '', applied: false
})
const oneQuickPopoverOpen = ref(false)
const oneQuickPopoverValue = ref('')
const oneQuickMoreOpen = ref(false)
const oneQuickExtraFilters = ref<{ label: string; value: string }[]>([])
const oneQuickExtraAvailable = ref(['Environment', 'Protocol', 'Tags'])
const oneQuickExtraPopover = ref<string | null>(null)
const oneQuickExtraPopoverValue = ref('')

const openOneQuickPopover = () => {
  oneQuickPopoverOpen.value = true
  oneQuickPopoverValue.value = oneQuickFilter.value.value
}
const applyOneQuickFilter = () => {
  if (oneQuickPopoverValue.value) {
    oneQuickFilter.value.value = oneQuickPopoverValue.value
    oneQuickFilter.value.applied = true
  }
  oneQuickPopoverOpen.value = false
}
const cancelOneQuickFilter = () => {
  oneQuickPopoverOpen.value = false
  oneQuickPopoverValue.value = ''
}
const removeOneQuickFilter = () => {
  oneQuickFilter.value.value = ''
  oneQuickFilter.value.applied = false
}
const openOneQuickExtraPopover = (filter: string) => {
  oneQuickMoreOpen.value = false
  oneQuickExtraPopover.value = filter
  oneQuickExtraPopoverValue.value = ''
}
const applyOneQuickExtra = () => {
  if (oneQuickExtraPopover.value && oneQuickExtraPopoverValue.value) {
    oneQuickExtraFilters.value.push({ label: oneQuickExtraPopover.value, value: oneQuickExtraPopoverValue.value })
  }
  oneQuickExtraPopover.value = null
  oneQuickExtraPopoverValue.value = ''
}
const cancelOneQuickExtra = () => {
  oneQuickExtraPopover.value = null
  oneQuickExtraPopoverValue.value = ''
}
const removeOneQuickExtra = (index: number) => {
  oneQuickExtraFilters.value.splice(index, 1)
}

// --- 2-3 quick filters ---
const multiQuickSearch = ref('')
const multiQuickFilters = ref([
  { label: 'Status', value: '', applied: false },
  { label: 'Environment', value: '', applied: false },
  { label: 'Protocol', value: '', applied: false }
])
const multiQuickPopover = ref<number | null>(null)
const multiQuickPopoverValue = ref('')
const multiQuickMoreOpen = ref(false)
const multiQuickExtraFilters = ref<{ label: string; value: string }[]>([])
const multiQuickExtraAvailable = ref(['Tags', 'Created At', 'Updated At'])
const multiQuickExtraPopover = ref<string | null>(null)
const multiQuickExtraPopoverValue = ref('')

const openMultiQuickPopover = (index: number) => {
  multiQuickPopover.value = index
  multiQuickPopoverValue.value = multiQuickFilters.value[index]!.value
}
const applyMultiQuickFilter = () => {
  if (multiQuickPopover.value !== null && multiQuickPopoverValue.value) {
    multiQuickFilters.value[multiQuickPopover.value]!.value = multiQuickPopoverValue.value
    multiQuickFilters.value[multiQuickPopover.value]!.applied = true
  }
  multiQuickPopover.value = null
  multiQuickPopoverValue.value = ''
}
const cancelMultiQuickPopover = () => {
  multiQuickPopover.value = null
  multiQuickPopoverValue.value = ''
}
const removeMultiQuickFilter = (index: number) => {
  multiQuickFilters.value[index]!.value = ''
  multiQuickFilters.value[index]!.applied = false

}
const openMultiQuickExtraPopover = (filter: string) => {
  multiQuickMoreOpen.value = false
  multiQuickExtraPopover.value = filter
  multiQuickExtraPopoverValue.value = ''
}
const applyMultiQuickExtra = () => {
  if (multiQuickExtraPopover.value && multiQuickExtraPopoverValue.value) {
    multiQuickExtraFilters.value.push({ label: multiQuickExtraPopover.value, value: multiQuickExtraPopoverValue.value })
  }
  multiQuickExtraPopover.value = null
  multiQuickExtraPopoverValue.value = ''
}
const cancelMultiQuickExtra = () => {
  multiQuickExtraPopover.value = null
  multiQuickExtraPopoverValue.value = ''
}
const removeMultiQuickExtra = (index: number) => {
  multiQuickExtraFilters.value.splice(index, 1)
}

/* ───────────── Common Filter Types ───────────── */
const selectInputOperator = ref('is')
const selectInputValue = ref('')
const selectInputOperators = ['is', 'is not', 'starts with', 'ends with', 'contains']

const selectMultiOperator = ref('is one of')
const selectMultiOptions = ref([
  { label: 'Production', selected: false },
  { label: 'Staging', selected: false },
  { label: 'Development', selected: false },
  { label: 'Testing', selected: false }
])
const selectMultiOperators = ['is one of', 'is not one of']
const selectedMultiCount = computed(() => selectMultiOptions.value.filter(o => o.selected).length)

const booleanOperator = ref('is')
const booleanValue = ref('')
const booleanOptions = ['Enabled', 'Disabled']

/* ───────────── Sticky Filter Flow ───────────── */
const stickyStep = ref(0)
const stickySteps = [
  { title: 'Services list', desc: 'User is on the Services page with no filters applied.' },
  { title: 'Apply filter', desc: 'User applies a Status: Enabled filter.' },
  { title: 'Navigate away', desc: 'User navigates to Routes page — filter persists in the bar.' },
  { title: 'Return to Services', desc: 'User returns to Services — filter is still active.' },
  { title: 'Modify filter', desc: 'User changes the filter value to Disabled.' },
  { title: 'Filter updated', desc: 'Results update to show only Disabled services.' }
]

/* ───────────── Adding Filter Flow ───────────── */
const addingStep = ref(0)
const addingSteps = [
  { title: 'Starting state', desc: 'Filter bar with search and existing quick filters (unapplied).' },
  { title: 'Click "More filters+"', desc: 'Dropdown appears with list of available filter options.' },
  { title: 'Select a filter', desc: 'User selects "Environment" — popover opens with operator + value.' },
  { title: 'Choose operator', desc: 'User picks "is one of" operator from the select dropdown.' },
  { title: 'Select values', desc: 'User selects Production and Staging from the multiselect.' },
  { title: 'Apply filter', desc: 'User clicks Apply — pill appears as applied with the selected values.' },
  { title: 'Final state', desc: 'Filter bar shows the new applied pill alongside existing filters.' }
]
</script>

<template>
  <div class="view-container">
    <div class="header">
      <h1>Filter Patterns</h1>
      <p class="description">Comprehensive reference for the Konnect standardized filter toolbar — pill states, layout specs, truncation rules, variations, common types, and interaction flows.</p>
    </div>

    <!-- ============ 1. FILTER PILL COMPONENT STATES ============ -->
    <KCard>
      <template #default>
        <h2 class="section-title">Filter Pill Component States</h2>
        <p class="section-desc">Filter pills have two main states: <strong>unapplied</strong> (applied=False, dashed border) and <strong>applied</strong> (applied=True, solid primary border). Each has Default, Hover, and Focus sub-states. Applied pills include a close/remove button.</p>

        <div class="states-grid">
          <!-- Unapplied Row -->
          <div class="state-group">
            <h3 class="state-group-title">Unapplied (applied = False)</h3>
            <div class="state-row">
              <div class="state-item">
                <span class="state-label">Default</span>
                <button class="filter-pill unapplied">
                  Status <ChevronDownIcon :size="14" />
                </button>
              </div>
              <div class="state-item">
                <span class="state-label">Hover</span>
                <button class="filter-pill unapplied hover-demo">
                  Status <ChevronDownIcon :size="14" />
                </button>
              </div>
              <div class="state-item">
                <span class="state-label">Focus</span>
                <button class="filter-pill unapplied focus-demo">
                  Status <ChevronDownIcon :size="14" />
                </button>
              </div>
            </div>
            <div class="spec-note">
              <code>background: gray-10</code> · <code>border: 1px dashed border-color</code> · <code>color: #3a3f51</code> · <code>height: 28px</code> · <code>padding: 0 8px</code> · <code>border-radius: 4px</code> · <code>font-size: 12px</code> · <code>font-weight: 600</code>
            </div>
          </div>

          <!-- Applied Row -->
          <div class="state-group">
            <h3 class="state-group-title">Applied (applied = True)</h3>
            <div class="state-row">
              <div class="state-item">
                <span class="state-label">Default</span>
                <div class="filter-pill applied">
                  Status: <strong>Enabled</strong>
                  <button class="close-btn">
                    <CloseIcon :size="12" color="var(--color-primary-60)" />
                  </button>
                </div>
              </div>
              <div class="state-item">
                <span class="state-label">Hover</span>
                <div class="filter-pill applied hover-demo">
                  Status: <strong>Enabled</strong>
                  <button class="close-btn">
                    <CloseIcon :size="12" color="var(--color-primary-60)" />
                  </button>
                </div>
              </div>
              <div class="state-item">
                <span class="state-label">Focus</span>
                <div class="filter-pill applied focus-demo">
                  Status: <strong>Enabled</strong>
                  <button class="close-btn">
                    <CloseIcon :size="12" color="var(--color-primary-60)" />
                  </button>
                </div>
              </div>
            </div>
            <div class="spec-note">
              <code>background: primary-10</code> · <code>border: 1px solid primary-60</code> · <code>color: primary-60</code> · Hover: <code>background: #bee2ff (Blue 20)</code>
            </div>
          </div>

          <!-- Close Button States -->
          <div class="state-group">
            <h3 class="state-group-title">Close Button States</h3>
            <div class="state-row">
              <div class="state-item">
                <span class="state-label">Default</span>
                <button class="close-btn-demo">
                  <CloseIcon :size="12" color="var(--color-primary-60)" />
                </button>
              </div>
              <div class="state-item">
                <span class="state-label">Hover</span>
                <button class="close-btn-demo hover-demo">
                  <CloseIcon :size="12" color="var(--color-primary-60)" />
                </button>
              </div>
              <div class="state-item">
                <span class="state-label">Focus</span>
                <button class="close-btn-demo focus-demo">
                  <CloseIcon :size="12" color="var(--color-primary-60)" />
                </button>
              </div>
            </div>
            <div class="spec-note">
              <code>border-radius: 50%</code> · Hover: <code>background: rgba(0, 68, 244, 0.1)</code> · Focus: <code>box-shadow: 0 0 0 2px rgba(0, 68, 244, 0.2)</code>
            </div>
          </div>
        </div>
      </template>
    </KCard>

    <!-- ============ 2. SEARCH + FILTER BAR LAYOUT ============ -->
    <KCard>
      <template #default>
        <h2 class="section-title">Search + Filter Bar Layout</h2>
        <p class="section-desc">The filter toolbar consists of a fixed-width search input (300px) followed by a divider and the filters area which fills the remaining space. Gap between search and divider: 24px.</p>

        <div class="layout-demo">
          <div class="layout-toolbar">
            <div class="layout-search">
              <div class="search-input-demo">
                <SearchIcon :size="16" color="var(--color-text-neutral)" />
                <input v-model="layoutSearch" placeholder="Search..." class="search-field" />
              </div>
              <div class="dimension-label">300px fixed</div>
            </div>

            <div class="layout-divider">
              <div class="divider-line"></div>
            </div>

            <div class="layout-filters">
              <template v-for="filter in layoutFilters" :key="filter.key">
                <button
                  v-if="!filter.applied"
                  class="filter-pill unapplied"
                >
                  {{ filter.label }} <ChevronDownIcon :size="14" />
                </button>
                <div
                  v-else
                  class="filter-pill applied"
                >
                  {{ filter.label }}: <strong>{{ filter.value }}</strong>
                  <button class="close-btn" @click="removeLayoutFilter(filter.key)">
                    <CloseIcon :size="12" color="var(--color-primary-60)" />
                  </button>
                </div>
              </template>
              <div class="dimension-label">Fills remaining width</div>
            </div>
          </div>

          <div class="layout-specs">
            <div class="spec-row">
              <span class="spec-key">Search width</span>
              <span class="spec-val">300px (fixed, flex-shrink: 0)</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Gap</span>
              <span class="spec-val">24px between search and divider</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Divider</span>
              <span class="spec-val">1px × 24px, border-color</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Pill gap</span>
              <span class="spec-val">8px between pills</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Toolbar padding</span>
              <span class="spec-val">12px</span>
            </div>
            <div class="spec-row">
              <span class="spec-key">Overflow</span>
              <span class="spec-val">Filters area scrolls horizontally when overflowing</span>
            </div>
          </div>
        </div>
      </template>
    </KCard>

    <!-- ============ 3. TRUNCATION RULES ============ -->
    <KCard>
      <template #default>
        <h2 class="section-title">Truncation Rules</h2>
        <p class="section-desc">Applied filter pills have a max-width of <strong>240px</strong>. When the value text overflows, it truncates with an ellipsis. Hovering reveals a tooltip with the full value. When a filter has more than 2 values selected, they collapse to show "<em>n</em> items" instead of listing all values.</p>

        <div class="truncation-demo">
          <div class="truncation-toolbar">
            <template v-for="(pill, i) in truncationPills" :key="i">
              <div
                class="filter-pill applied truncation-pill"
                @mouseenter="hoveredTruncPill = i"
                @mouseleave="hoveredTruncPill = null"
              >
                {{ pill.label }}: <strong class="truncate-value">{{ pill.value }}</strong>
                <button class="close-btn">
                  <CloseIcon :size="12" color="var(--color-primary-60)" />
                </button>
                <!-- Tooltip -->
                <div v-if="hoveredTruncPill === i && pill.truncated" class="trunc-tooltip">
                  {{ pill.value }}
                </div>
              </div>
            </template>
          </div>

          <div class="truncation-rules">
            <div class="rule-item">
              <span class="rule-icon">📏</span>
              <div>
                <strong>Max width: 240px</strong>
                <p>Pill text truncates with ellipsis when exceeding 240px. A tooltip shows the full value on hover.</p>
              </div>
            </div>
            <div class="rule-item">
              <span class="rule-icon">🔢</span>
              <div>
                <strong>Multi-value collapse: "n items"</strong>
                <p>When more than 2 values are selected, the pill shows the count (e.g., "3 items") instead of listing them. Tooltip shows all values.</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </KCard>

    <!-- ============ 4. VARIATIONS ============ -->
    <KCard>
      <template #default>
        <h2 class="section-title">Variations</h2>
        <p class="section-desc">The filter bar adapts based on how many "quick filters" are pre-configured. Quick filters appear as unapplied pills by default; additional filters are added via a "More filters+" dropdown.</p>

        <!-- 4a: No quick filters -->
        <div class="variation-block">
          <h3 class="variation-title">No Quick Filters</h3>
          <p class="variation-desc">Only a search bar and a "More filters+" button. All filters are added from the dropdown menu.</p>

          <div class="filter-toolbar-demo">
            <div class="search-input-demo">
              <SearchIcon :size="16" color="var(--color-text-neutral)" />
              <input v-model="noQuickSearch" placeholder="Search..." class="search-field" />
            </div>
            <div class="divider-line"></div>

            <!-- Applied filters -->
            <div
              v-for="(af, i) in noQuickApplied"
              :key="'nq-' + i"
              class="filter-pill applied"
            >
              {{ af.label }}: <strong>{{ af.value }}</strong>
              <button class="close-btn" @click="removeNoQuickFilter(i)">
                <CloseIcon :size="12" color="var(--color-primary-60)" />
              </button>
            </div>

            <!-- Popover for adding -->
            <div v-if="noQuickPopover" class="filter-popover-wrapper">
              <div class="filter-popover">
                <div class="popover-header">
                  <span>{{ noQuickPopover }}</span>
                  <button class="popover-close" @click="cancelNoQuickPopover">
                    <CloseIcon :size="14" />
                  </button>
                </div>
                <div class="popover-body">
                  <select class="popover-select">
                    <option>is</option>
                    <option>is not</option>
                    <option>contains</option>
                  </select>
                  <input
                    v-model="noQuickPopoverValue"
                    class="popover-input"
                    placeholder="Enter value..."
                  />
                </div>
                <div class="popover-footer">
                  <button class="popover-btn cancel" @click="cancelNoQuickPopover">Cancel</button>
                  <button class="popover-btn apply" @click="applyNoQuickFilter">Apply</button>
                </div>
              </div>
            </div>

            <!-- More filters dropdown -->
            <div class="more-filters-wrapper">
              <button
                class="filter-pill unapplied more-btn"
                @click="noQuickDropdownOpen = !noQuickDropdownOpen"
              >
                <AddIcon :size="14" /> More filters+
              </button>
              <div v-if="noQuickDropdownOpen" class="more-dropdown">
                <button
                  v-for="opt in noQuickAvailable"
                  :key="opt"
                  class="dropdown-item"
                  @click="openNoQuickPopover(opt)"
                >
                  {{ opt }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 4b: 1 quick filter -->
        <div class="variation-block">
          <h3 class="variation-title">1 Quick Filter</h3>
          <p class="variation-desc">One pre-configured quick filter pill appears unapplied by default. Click to open the popover and apply a value.</p>

          <div class="filter-toolbar-demo">
            <div class="search-input-demo">
              <SearchIcon :size="16" color="var(--color-text-neutral)" />
              <input v-model="oneQuickSearch" placeholder="Search..." class="search-field" />
            </div>
            <div class="divider-line"></div>

            <!-- Quick filter pill -->
            <button
              v-if="!oneQuickFilter.applied"
              class="filter-pill unapplied"
              @click="openOneQuickPopover"
            >
              {{ oneQuickFilter.label }} <ChevronDownIcon :size="14" />
            </button>
            <div v-else class="filter-pill applied">
              {{ oneQuickFilter.label }}: <strong>{{ oneQuickFilter.value }}</strong>
              <button class="close-btn" @click="removeOneQuickFilter">
                <CloseIcon :size="12" color="var(--color-primary-60)" />
              </button>
            </div>

            <!-- Quick filter popover -->
            <div v-if="oneQuickPopoverOpen" class="filter-popover-wrapper">
              <div class="filter-popover">
                <div class="popover-header">
                  <span>{{ oneQuickFilter.label }}</span>
                  <button class="popover-close" @click="cancelOneQuickFilter">
                    <CloseIcon :size="14" />
                  </button>
                </div>
                <div class="popover-body">
                  <select class="popover-select">
                    <option>is</option>
                    <option>is not</option>
                  </select>
                  <select v-model="oneQuickPopoverValue" class="popover-input">
                    <option value="">Select...</option>
                    <option value="Enabled">Enabled</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </div>
                <div class="popover-footer">
                  <button class="popover-btn cancel" @click="cancelOneQuickFilter">Cancel</button>
                  <button class="popover-btn apply" @click="applyOneQuickFilter">Apply</button>
                </div>
              </div>
            </div>

            <!-- Applied extra filters -->
            <div
              v-for="(af, i) in oneQuickExtraFilters"
              :key="'oqe-' + i"
              class="filter-pill applied"
            >
              {{ af.label }}: <strong>{{ af.value }}</strong>
              <button class="close-btn" @click="removeOneQuickExtra(i)">
                <CloseIcon :size="12" color="var(--color-primary-60)" />
              </button>
            </div>

            <!-- Extra filter popover -->
            <div v-if="oneQuickExtraPopover" class="filter-popover-wrapper">
              <div class="filter-popover">
                <div class="popover-header">
                  <span>{{ oneQuickExtraPopover }}</span>
                  <button class="popover-close" @click="cancelOneQuickExtra">
                    <CloseIcon :size="14" />
                  </button>
                </div>
                <div class="popover-body">
                  <select class="popover-select">
                    <option>is</option>
                    <option>is not</option>
                  </select>
                  <input
                    v-model="oneQuickExtraPopoverValue"
                    class="popover-input"
                    placeholder="Enter value..."
                  />
                </div>
                <div class="popover-footer">
                  <button class="popover-btn cancel" @click="cancelOneQuickExtra">Cancel</button>
                  <button class="popover-btn apply" @click="applyOneQuickExtra">Apply</button>
                </div>
              </div>
            </div>

            <!-- More filters -->
            <div class="more-filters-wrapper">
              <button
                class="filter-pill unapplied more-btn"
                @click="oneQuickMoreOpen = !oneQuickMoreOpen"
              >
                <AddIcon :size="14" /> More filters+
              </button>
              <div v-if="oneQuickMoreOpen" class="more-dropdown">
                <button
                  v-for="opt in oneQuickExtraAvailable"
                  :key="opt"
                  class="dropdown-item"
                  @click="openOneQuickExtraPopover(opt)"
                >
                  {{ opt }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 4c: 2-3 quick filters -->
        <div class="variation-block">
          <h3 class="variation-title">2–3 Quick Filters</h3>
          <p class="variation-desc">Multiple pre-configured quick filter pills. Each can be independently applied. Additional filters added via "More filters+".</p>

          <div class="filter-toolbar-demo">
            <div class="search-input-demo">
              <SearchIcon :size="16" color="var(--color-text-neutral)" />
              <input v-model="multiQuickSearch" placeholder="Search..." class="search-field" />
            </div>
            <div class="divider-line"></div>

            <!-- Quick filter pills -->
            <template v-for="(qf, idx) in multiQuickFilters" :key="'mq-' + idx">
              <button
                v-if="!qf.applied"
                class="filter-pill unapplied"
                @click="openMultiQuickPopover(idx)"
              >
                {{ qf.label }} <ChevronDownIcon :size="14" />
              </button>
              <div v-else class="filter-pill applied">
                {{ qf.label }}: <strong>{{ qf.value }}</strong>
                <button class="close-btn" @click="removeMultiQuickFilter(idx)">
                  <CloseIcon :size="12" color="var(--color-primary-60)" />
                </button>
              </div>
            </template>

            <!-- Quick filter popover -->
            <div v-if="multiQuickPopover !== null" class="filter-popover-wrapper">
              <div class="filter-popover">
                <div class="popover-header">
                  <span>{{ multiQuickFilters[multiQuickPopover!]?.label }}</span>
                  <button class="popover-close" @click="cancelMultiQuickPopover">
                    <CloseIcon :size="14" />
                  </button>
                </div>
                <div class="popover-body">
                  <select class="popover-select">
                    <option>is</option>
                    <option>is not</option>
                  </select>
                  <input
                    v-model="multiQuickPopoverValue"
                    class="popover-input"
                    placeholder="Enter value..."
                  />
                </div>
                <div class="popover-footer">
                  <button class="popover-btn cancel" @click="cancelMultiQuickPopover">Cancel</button>
                  <button class="popover-btn apply" @click="applyMultiQuickFilter">Apply</button>
                </div>
              </div>
            </div>

            <!-- Applied extra filters -->
            <div
              v-for="(af, i) in multiQuickExtraFilters"
              :key="'mqe-' + i"
              class="filter-pill applied"
            >
              {{ af.label }}: <strong>{{ af.value }}</strong>
              <button class="close-btn" @click="removeMultiQuickExtra(i)">
                <CloseIcon :size="12" color="var(--color-primary-60)" />
              </button>
            </div>

            <!-- Extra filter popover -->
            <div v-if="multiQuickExtraPopover" class="filter-popover-wrapper">
              <div class="filter-popover">
                <div class="popover-header">
                  <span>{{ multiQuickExtraPopover }}</span>
                  <button class="popover-close" @click="cancelMultiQuickExtra">
                    <CloseIcon :size="14" />
                  </button>
                </div>
                <div class="popover-body">
                  <select class="popover-select">
                    <option>is</option>
                    <option>is not</option>
                  </select>
                  <input
                    v-model="multiQuickExtraPopoverValue"
                    class="popover-input"
                    placeholder="Enter value..."
                  />
                </div>
                <div class="popover-footer">
                  <button class="popover-btn cancel" @click="cancelMultiQuickExtra">Cancel</button>
                  <button class="popover-btn apply" @click="applyMultiQuickExtra">Apply</button>
                </div>
              </div>
            </div>

            <!-- More filters -->
            <div class="more-filters-wrapper">
              <button
                class="filter-pill unapplied more-btn"
                @click="multiQuickMoreOpen = !multiQuickMoreOpen"
              >
                <AddIcon :size="14" /> More filters+
              </button>
              <div v-if="multiQuickMoreOpen" class="more-dropdown">
                <button
                  v-for="opt in multiQuickExtraAvailable"
                  :key="opt"
                  class="dropdown-item"
                  @click="openMultiQuickExtraPopover(opt)"
                >
                  {{ opt }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </KCard>

    <!-- ============ 5. COMMON FILTER TYPES ============ -->
    <KCard>
      <template #default>
        <h2 class="section-title">Common Filter Types</h2>
        <p class="section-desc">Three standard popover patterns for filter value entry. All popovers follow the same structure: title bar with close button, operator select (100px) + value input (252px), and Cancel/Apply buttons.</p>

        <div class="filter-types-grid">
          <!-- Select + Input -->
          <div class="filter-type-card">
            <h3 class="filter-type-title">Select + Input</h3>
            <p class="filter-type-desc">Operator dropdown paired with a free-text input. Used for string-based filters like Name, ID, or URL.</p>
            <div class="filter-popover inline-popover">
              <div class="popover-header">
                <span>Name</span>
                <button class="popover-close"><CloseIcon :size="14" /></button>
              </div>
              <div class="popover-body">
                <select v-model="selectInputOperator" class="popover-select">
                  <option v-for="op in selectInputOperators" :key="op" :value="op">{{ op }}</option>
                </select>
                <input v-model="selectInputValue" class="popover-input" placeholder="Enter name..." />
              </div>
              <div class="popover-footer">
                <button class="popover-btn cancel">Cancel</button>
                <button class="popover-btn apply">Apply</button>
              </div>
            </div>
            <div class="spec-note">
              <code>Operator select: 100px</code> · <code>Value input: 252px</code>
            </div>
          </div>

          <!-- Select + Multiselect -->
          <div class="filter-type-card">
            <h3 class="filter-type-title">Select + Multiselect</h3>
            <p class="filter-type-desc">Operator dropdown paired with a multiselect list. Used for filters with predefined options like Environment or Tags.</p>
            <div class="filter-popover inline-popover">
              <div class="popover-header">
                <span>Environment</span>
                <button class="popover-close"><CloseIcon :size="14" /></button>
              </div>
              <div class="popover-body popover-body-multi">
                <select v-model="selectMultiOperator" class="popover-select">
                  <option v-for="op in selectMultiOperators" :key="op" :value="op">{{ op }}</option>
                </select>
                <div class="multi-select-list">
                  <label
                    v-for="opt in selectMultiOptions"
                    :key="opt.label"
                    class="multi-option"
                  >
                    <input type="checkbox" v-model="opt.selected" />
                    <span class="check-box" :class="{ checked: opt.selected }">
                      <CheckIcon v-if="opt.selected" :size="12" color="#fff" />
                    </span>
                    {{ opt.label }}
                  </label>
                </div>
              </div>
              <div class="popover-footer">
                <span class="multi-count" v-if="selectedMultiCount > 0">{{ selectedMultiCount }} selected</span>
                <button class="popover-btn cancel">Cancel</button>
                <button class="popover-btn apply">Apply</button>
              </div>
            </div>
            <div class="spec-note">
              <code>Operator select: 100px</code> · <code>Multiselect: 252px</code> · Checkboxes with primary fill
            </div>
          </div>

          <!-- Boolean -->
          <div class="filter-type-card">
            <h3 class="filter-type-title">Boolean</h3>
            <p class="filter-type-desc">Simple select dropdown with two options. Used for binary state filters like Enabled/Disabled or Active/Inactive.</p>
            <div class="filter-popover inline-popover">
              <div class="popover-header">
                <span>Status</span>
                <button class="popover-close"><CloseIcon :size="14" /></button>
              </div>
              <div class="popover-body">
                <select v-model="booleanOperator" class="popover-select">
                  <option value="is">is</option>
                  <option value="is not">is not</option>
                </select>
                <select v-model="booleanValue" class="popover-input">
                  <option value="">Select...</option>
                  <option v-for="opt in booleanOptions" :key="opt" :value="opt">{{ opt }}</option>
                </select>
              </div>
              <div class="popover-footer">
                <button class="popover-btn cancel">Cancel</button>
                <button class="popover-btn apply">Apply</button>
              </div>
            </div>
            <div class="spec-note">
              <code>Operator select: 100px</code> · <code>Value select: 252px</code> · No multiselect needed
            </div>
          </div>
        </div>
      </template>
    </KCard>

    <!-- ============ 6. STICKY FILTER FLOW ============ -->
    <KCard>
      <template #default>
        <h2 class="section-title">Sticky Filter Flow</h2>
        <p class="section-desc">Filters persist across page navigation within the same context. When a user applies a filter and navigates to a different page, the filter remains active when they return.</p>

        <div class="flow-demo">
          <div class="flow-steps">
            <button
              v-for="(step, i) in stickySteps"
              :key="'ss-' + i"
              class="flow-step-btn"
              :class="{ active: stickyStep === i }"
              @click="stickyStep = i"
            >
              <span class="step-num">{{ i + 1 }}</span>
              {{ step.title }}
            </button>
          </div>
          <div class="flow-display">
            <div class="flow-screen">
              <div class="flow-screen-header">
                <span class="flow-page-title">{{ stickySteps[stickyStep]?.title }}</span>
              </div>
              <div class="flow-toolbar-preview">
                <div class="search-pill-mini">Search...</div>
                <div class="divider-mini"></div>
                <div
                  v-if="stickyStep >= 1"
                  class="filter-pill applied mini-pill"
                >
                  Status: <strong>{{ stickyStep >= 4 ? 'Disabled' : 'Enabled' }}</strong>
                </div>
                <div v-else class="filter-pill unapplied mini-pill">
                  Status
                </div>
              </div>
              <div class="flow-content-area">
                <div class="flow-placeholder-row" v-for="n in 4" :key="n"></div>
              </div>
            </div>
            <p class="flow-description">{{ stickySteps[stickyStep]?.desc }}</p>
          </div>
        </div>
      </template>
    </KCard>

    <!-- ============ 7. ADDING FILTER FLOW ============ -->
    <KCard>
      <template #default>
        <h2 class="section-title">Adding Filter Flow</h2>
        <p class="section-desc">Step-by-step flow showing how a user adds a new filter through the "More filters+" dropdown, configures it via a popover, and sees the applied result.</p>

        <div class="flow-demo">
          <div class="flow-steps">
            <button
              v-for="(step, i) in addingSteps"
              :key="'as-' + i"
              class="flow-step-btn"
              :class="{ active: addingStep === i }"
              @click="addingStep = i"
            >
              <span class="step-num">{{ i + 1 }}</span>
              {{ step.title }}
            </button>
          </div>
          <div class="flow-display">
            <div class="flow-screen">
              <div class="flow-toolbar-preview">
                <div class="search-pill-mini">Search...</div>
                <div class="divider-mini"></div>
                <div class="filter-pill unapplied mini-pill">Status</div>
                <div class="filter-pill unapplied mini-pill">Protocol</div>

                <!-- Show applied environment filter at steps 5-6 -->
                <div
                  v-if="addingStep >= 5"
                  class="filter-pill applied mini-pill"
                >
                  Environment: <strong>2 items</strong>
                </div>

                <!-- More filters button -->
                <div class="filter-pill unapplied mini-pill more-mini">
                  + More filters
                </div>
              </div>

              <!-- Dropdown overlay at step 1 -->
              <div v-if="addingStep === 1" class="flow-overlay">
                <div class="flow-dropdown-preview">
                  <div class="flow-dd-item">Environment</div>
                  <div class="flow-dd-item">Tags</div>
                  <div class="flow-dd-item">Created At</div>
                </div>
              </div>

              <!-- Popover overlay at steps 2-4 -->
              <div v-if="addingStep >= 2 && addingStep <= 4" class="flow-overlay">
                <div class="flow-popover-preview">
                  <div class="flow-pop-header">Environment</div>
                  <div class="flow-pop-body">
                    <div class="flow-pop-select">{{ addingStep >= 3 ? 'is one of' : 'Select...' }}</div>
                    <div class="flow-pop-multi">
                      <div class="flow-pop-option" :class="{ selected: addingStep >= 4 }">Production</div>
                      <div class="flow-pop-option" :class="{ selected: addingStep >= 4 }">Staging</div>
                      <div class="flow-pop-option">Development</div>
                      <div class="flow-pop-option">Testing</div>
                    </div>
                  </div>
                  <div class="flow-pop-footer">
                    <span class="flow-pop-cancel">Cancel</span>
                    <span class="flow-pop-apply">Apply</span>
                  </div>
                </div>
              </div>

              <div class="flow-content-area" v-if="addingStep <= 1 || addingStep >= 5">
                <div class="flow-placeholder-row" v-for="n in 3" :key="n"></div>
              </div>
            </div>
            <p class="flow-description">{{ addingSteps[addingStep]?.desc }}</p>
          </div>
        </div>
      </template>
    </KCard>
  </div>
</template>

<style scoped>
/* ── Base Layout ── */
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
.section-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px;
}
.section-desc {
  color: var(--color-text-neutral);
  font-size: 14px;
  line-height: 22px;
  margin: 0 0 24px;
}

/* ── Filter Pill Base ── */
.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  position: relative;
}

.filter-pill.unapplied {
  background-color: var(--color-gray-10, #f9fafb);
  border: 1px dashed var(--color-border, #e0e4ea);
  color: #3a3f51;
  outline: none;
}
.filter-pill.unapplied:hover,
.filter-pill.unapplied.hover-demo {
  border-color: var(--color-primary-60, #0044f4);
  border-style: dashed;
}
.filter-pill.unapplied:focus,
.filter-pill.unapplied.focus-demo {
  border-color: var(--color-primary-60, #0044f4);
  box-shadow: 0 0 0 4px rgba(0, 68, 244, 0.2);
  border-style: dashed;
}

.filter-pill.applied {
  background-color: var(--color-primary-10, #e6f2ff);
  border: 1px solid var(--color-primary-60, #0044f4);
  color: var(--color-primary-60, #0044f4);
}
.filter-pill.applied:hover,
.filter-pill.applied.hover-demo {
  background-color: #bee2ff;
}
.filter-pill.applied:focus,
.filter-pill.applied.focus-demo {
  box-shadow: 0 0 0 4px rgba(0, 68, 244, 0.2);
}
.filter-pill.applied strong {
  font-weight: 700;
}

/* ── Close Button ── */
.close-btn {
  background: transparent;
  border: none;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 2px;
  transition: background 0.15s ease;
}
.close-btn:hover {
  background-color: rgba(0, 68, 244, 0.1);
}
.close-btn:focus {
  box-shadow: 0 0 0 2px rgba(0, 68, 244, 0.2);
  outline: none;
}

.close-btn-demo {
  background: transparent;
  border: 1px solid var(--color-border, #e0e4ea);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.15s ease;
}
.close-btn-demo.hover-demo {
  background-color: rgba(0, 68, 244, 0.1);
}
.close-btn-demo.focus-demo {
  box-shadow: 0 0 0 2px rgba(0, 68, 244, 0.2);
}

/* ── Section 1: Pill States ── */
.states-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.state-group {
  background: var(--color-gray-10, #f9fafb);
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 8px;
  padding: 20px;
}
.state-group-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 16px;
  color: var(--color-text-primary, #1a1e2a);
}
.state-row {
  display: flex;
  gap: 32px;
  align-items: center;
  margin-bottom: 16px;
}
.state-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.state-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--color-text-neutral, #6c7489);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.spec-note {
  font-size: 12px;
  color: var(--color-text-neutral, #6c7489);
  line-height: 20px;
  padding-top: 8px;
  border-top: 1px solid var(--color-border, #e0e4ea);
}
.spec-note code {
  background: #fff;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 3px;
  padding: 1px 4px;
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
}

/* ── Section 2: Layout Demo ── */
.layout-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.layout-toolbar {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 8px;
  background: #fff;
  position: relative;
}
.layout-search {
  width: 300px;
  flex-shrink: 0;
  position: relative;
}
.layout-divider {
  display: flex;
  align-items: center;
}
.layout-filters {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  overflow-x: auto;
  position: relative;
}
.dimension-label {
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: var(--color-primary-60, #0044f4);
  white-space: nowrap;
}
.search-input-demo {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 4px;
  background: #fff;
  width: 100%;
}
.search-field {
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  background: transparent;
  color: var(--color-text-primary, #1a1e2a);
}
.search-field::placeholder {
  color: var(--color-text-neutral, #6c7489);
}
.divider-line {
  width: 1px;
  height: 24px;
  background-color: var(--color-border, #e0e4ea);
  flex-shrink: 0;
}
.layout-specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 16px;
  background: var(--color-gray-10, #f9fafb);
  border-radius: 8px;
  border: 1px solid var(--color-border, #e0e4ea);
}
.spec-row {
  display: flex;
  gap: 8px;
  font-size: 13px;
}
.spec-key {
  font-weight: 600;
  color: var(--color-text-primary, #1a1e2a);
  min-width: 120px;
}
.spec-val {
  color: var(--color-text-neutral, #6c7489);
}

/* ── Section 3: Truncation ── */
.truncation-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.truncation-toolbar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 12px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 8px;
  background: #fff;
}
.truncation-pill {
  max-width: 240px;
  position: relative;
}
.truncate-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 140px;
  display: inline-block;
  vertical-align: middle;
}
.trunc-tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #1a1e2a;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  padding: 6px 10px;
  border-radius: 4px;
  white-space: nowrap;
  max-width: 360px;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 10;
  pointer-events: none;
}
.trunc-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #1a1e2a;
}
.truncation-rules {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.rule-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px;
  background: var(--color-gray-10, #f9fafb);
  border-radius: 8px;
  border: 1px solid var(--color-border, #e0e4ea);
}
.rule-icon {
  font-size: 18px;
  flex-shrink: 0;
}
.rule-item strong {
  font-size: 13px;
  display: block;
  margin-bottom: 4px;
}
.rule-item p {
  font-size: 13px;
  color: var(--color-text-neutral, #6c7489);
  margin: 0;
  line-height: 20px;
}

/* ── Section 4: Variations ── */
.variation-block {
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-border, #e0e4ea);
}
.variation-block:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}
.variation-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px;
}
.variation-desc {
  font-size: 13px;
  color: var(--color-text-neutral, #6c7489);
  margin: 0 0 16px;
  line-height: 20px;
}
.filter-toolbar-demo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 8px;
  background: #fff;
  flex-wrap: wrap;
  position: relative;
}
.filter-toolbar-demo .search-input-demo {
  width: 300px;
  flex-shrink: 0;
}

/* ── Filter Popover ── */
.filter-popover-wrapper {
  position: relative;
}
.filter-popover {
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  width: 376px;
  overflow: hidden;
}
.inline-popover {
  width: 100%;
}
.popover-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border, #e0e4ea);
  font-size: 14px;
  font-weight: 600;
}
.popover-close {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 4px;
  color: var(--color-text-neutral, #6c7489);
}
.popover-close:hover {
  background: var(--color-gray-10, #f9fafb);
}
.popover-body {
  display: flex;
  gap: 12px;
  padding: 16px;
}
.popover-body-multi {
  flex-direction: column;
}
.popover-body-multi .popover-select {
  width: 100%;
}
.popover-select {
  width: 100px;
  height: 36px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 4px;
  font-size: 13px;
  padding: 0 8px;
  background: #fff;
  color: var(--color-text-primary, #1a1e2a);
  cursor: pointer;
  flex-shrink: 0;
}
.popover-input {
  flex: 1;
  height: 36px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 4px;
  font-size: 13px;
  padding: 0 12px;
  background: #fff;
  color: var(--color-text-primary, #1a1e2a);
}
.popover-input::placeholder {
  color: var(--color-text-neutral, #6c7489);
}
.popover-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid var(--color-border, #e0e4ea);
  align-items: center;
}
.popover-btn {
  height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease;
}
.popover-btn.cancel {
  background: transparent;
  color: var(--color-text-neutral, #6c7489);
  border: 1px solid var(--color-border, #e0e4ea);
}
.popover-btn.cancel:hover {
  background: var(--color-gray-10, #f9fafb);
}
.popover-btn.apply {
  background: var(--color-primary-60, #0044f4);
  color: #fff;
}
.popover-btn.apply:hover {
  background: #0033cc;
}

/* ── Multiselect ── */
.multi-select-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 160px;
  overflow-y: auto;
}
.multi-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s;
}
.multi-option:hover {
  background: var(--color-gray-10, #f9fafb);
}
.multi-option input[type="checkbox"] {
  display: none;
}
.check-box {
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;
}
.check-box.checked {
  background: var(--color-primary-60, #0044f4);
  border-color: var(--color-primary-60, #0044f4);
}
.multi-count {
  font-size: 12px;
  color: var(--color-text-neutral, #6c7489);
  margin-right: auto;
}

/* ── More Filters Dropdown ── */
.more-filters-wrapper {
  position: relative;
}
.more-btn {
  gap: 4px;
}
.more-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: #fff;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  min-width: 180px;
  z-index: 20;
  padding: 4px;
}
.dropdown-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 12px;
  border: none;
  background: transparent;
  font-size: 13px;
  cursor: pointer;
  border-radius: 4px;
  color: var(--color-text-primary, #1a1e2a);
}
.dropdown-item:hover {
  background: var(--color-gray-10, #f9fafb);
}

/* ── Section 5: Filter Types ── */
.filter-types-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
.filter-type-card {
  padding: 20px;
  background: var(--color-gray-10, #f9fafb);
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 8px;
}
.filter-type-title {
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 4px;
}
.filter-type-desc {
  font-size: 13px;
  color: var(--color-text-neutral, #6c7489);
  margin: 0 0 16px;
  line-height: 20px;
}
.filter-type-card .spec-note {
  margin-top: 12px;
}

/* ── Sections 6 & 7: Flow Demos ── */
.flow-demo {
  display: flex;
  gap: 24px;
}
.flow-steps {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 220px;
  flex-shrink: 0;
}
.flow-step-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 6px;
  background: #fff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s;
  color: var(--color-text-primary, #1a1e2a);
}
.flow-step-btn:hover {
  background: var(--color-gray-10, #f9fafb);
}
.flow-step-btn.active {
  background: var(--color-primary-10, #e6f2ff);
  border-color: var(--color-primary-60, #0044f4);
  color: var(--color-primary-60, #0044f4);
}
.step-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-gray-10, #f9fafb);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}
.flow-step-btn.active .step-num {
  background: var(--color-primary-60, #0044f4);
  color: #fff;
}
.flow-display {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.flow-screen {
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  min-height: 200px;
  position: relative;
}
.flow-screen-header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border, #e0e4ea);
  background: var(--color-gray-10, #f9fafb);
}
.flow-page-title {
  font-size: 14px;
  font-weight: 600;
}
.flow-toolbar-preview {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--color-border, #e0e4ea);
}
.search-pill-mini {
  padding: 4px 10px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 4px;
  font-size: 11px;
  color: var(--color-text-neutral, #6c7489);
  width: 100px;
}
.divider-mini {
  width: 1px;
  height: 16px;
  background: var(--color-border, #e0e4ea);
}
.mini-pill {
  height: 22px;
  font-size: 11px;
  padding: 0 6px;
}
.more-mini {
  font-size: 10px;
}
.flow-content-area {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.flow-placeholder-row {
  height: 12px;
  background: var(--color-gray-10, #f9fafb);
  border-radius: 4px;
}
.flow-placeholder-row:nth-child(odd) {
  width: 80%;
}
.flow-placeholder-row:nth-child(even) {
  width: 60%;
}
.flow-description {
  font-size: 13px;
  color: var(--color-text-neutral, #6c7489);
  margin: 0;
  line-height: 20px;
  font-style: italic;
}

/* ── Flow Overlay ── */
.flow-overlay {
  padding: 12px 16px;
}
.flow-dropdown-preview {
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 160px;
  padding: 4px;
}
.flow-dd-item {
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 4px;
  cursor: default;
}
.flow-dd-item:first-child {
  background: var(--color-primary-10, #e6f2ff);
  color: var(--color-primary-60, #0044f4);
}
.flow-popover-preview {
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  width: 320px;
}
.flow-pop-header {
  padding: 10px 14px;
  border-bottom: 1px solid var(--color-border, #e0e4ea);
  font-size: 13px;
  font-weight: 600;
}
.flow-pop-body {
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.flow-pop-select {
  padding: 6px 10px;
  border: 1px solid var(--color-border, #e0e4ea);
  border-radius: 4px;
  font-size: 12px;
  color: var(--color-text-neutral, #6c7489);
}
.flow-pop-multi {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.flow-pop-option {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 4px;
}
.flow-pop-option.selected {
  background: var(--color-primary-10, #e6f2ff);
  color: var(--color-primary-60, #0044f4);
}
.flow-pop-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 10px 14px;
  border-top: 1px solid var(--color-border, #e0e4ea);
}
.flow-pop-cancel {
  font-size: 12px;
  color: var(--color-text-neutral, #6c7489);
}
.flow-pop-apply {
  font-size: 12px;
  color: var(--color-primary-60, #0044f4);
  font-weight: 600;
}
</style>
