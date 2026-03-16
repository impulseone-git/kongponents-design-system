<script setup lang="ts">
import { ref } from 'vue'
import { KCard } from '@kong/kongponents'

// ── Loading skeleton toggle ─────────────────────────────────────────────────
const showSkeleton = ref(false)

// ── Sort state ──────────────────────────────────────────────────────────────
type SortDir = 'none' | 'asc' | 'desc'
const sortCol = ref<string | null>(null)
const sortDir = ref<SortDir>('none')

function toggleSort(col: string) {
  if (sortCol.value !== col) {
    sortCol.value = col
    sortDir.value = 'asc'
  } else if (sortDir.value === 'asc') {
    sortDir.value = 'desc'
  } else if (sortDir.value === 'desc') {
    sortDir.value = 'none'
    sortCol.value = null
  } else {
    sortDir.value = 'asc'
  }
}

// ── Checkbox selection ──────────────────────────────────────────────────────
const selectedRows = ref<Set<number>>(new Set())
const allSelected = ref(false)
function toggleAll() {
  if (allSelected.value) {
    selectedRows.value.clear()
    allSelected.value = false
  } else {
    selectedRows.value = new Set([0, 1, 2, 3, 4])
    allSelected.value = true
  }
}
function toggleRow(idx: number) {
  if (selectedRows.value.has(idx)) {
    selectedRows.value.delete(idx)
  } else {
    selectedRows.value.add(idx)
  }
  allSelected.value = selectedRows.value.size === 5
}

// ── Switch state ────────────────────────────────────────────────────────────
const switchStates = ref([true, false, true, false, true])
function toggleSwitch(idx: number) {
  switchStates.value[idx] = !switchStates.value[idx]
}

// ── Sample data ─────────────────────────────────────────────────────────────
const services = [
  { name: 'auth-service', protocol: 'HTTPS', host: 'auth.internal.io', port: 443, status: 'Active', requests: 284912, latency: 12, tags: ['production', 'critical'] },
  { name: 'payment-api', protocol: 'HTTPS', host: 'pay.internal.io', port: 443, status: 'Active', requests: 159384, latency: 45, tags: ['production'] },
  { name: 'user-profiles', protocol: 'HTTP', host: 'users.staging.io', port: 8080, status: 'Degraded', requests: 92841, latency: 120, tags: ['staging'] },
  { name: 'notifications', protocol: 'gRPC', host: 'notify.internal.io', port: 9090, status: 'Active', requests: 518204, latency: 8, tags: ['production'] },
  { name: 'search-index', protocol: 'HTTP', host: 'search.internal.io', port: 8200, status: 'Inactive', requests: 0, latency: 0, tags: ['deprecated'] },
]

function badgeAppearance(status: string) {
  if (status === 'Active') return 'success'
  if (status === 'Degraded') return 'warning'
  if (status === 'Inactive') return 'neutral'
  return 'info'
}
</script>

<template>
  <div class="view-container">

    <!-- ── Page header ───────────────────────────────────────────────────── -->
    <div class="header">
      <h1>Tables</h1>
      <p class="description">Table patterns including header cells, body cells, row states, loading skeletons, and interactive features.</p>
    </div>

    <!-- ══════════════════════════════════════════════════════════════════════
         1. LOADING SKELETON
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Loading Skeleton</h2>
        <p class="section-desc">
          Animated placeholder shown while table data is being fetched.
          Skeleton rows mirror the eventual table layout to reduce layout shift.
        </p>
      </div>

      <div class="skeleton-table">
        <div class="skeleton-header">
          <div class="skeleton-cell skeleton-cell--narrow"><div class="skeleton-bar skeleton-bar--short" /></div>
          <div class="skeleton-cell skeleton-cell--wide"><div class="skeleton-bar skeleton-bar--medium" /></div>
          <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
          <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
          <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
        </div>
        <div v-for="r in 6" :key="r" class="skeleton-row">
          <div class="skeleton-cell skeleton-cell--narrow"><div class="skeleton-bar skeleton-bar--short" /></div>
          <div class="skeleton-cell skeleton-cell--wide"><div class="skeleton-bar skeleton-bar--long" /></div>
          <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--medium" /></div>
          <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
          <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         2. HEADER CELL VARIANTS
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Header Cell Variants</h2>
        <p class="section-desc">
          Header cells come in text, number, checkbox, sort ascending, sort descending, and tooltip variants.
        </p>
      </div>

      <div class="variants-grid">
        <!-- Text header -->
        <div class="variant-card">
          <span class="variant-label">Text</span>
          <div class="variant-demo">
            <div class="th-cell">Header</div>
          </div>
        </div>
        <!-- Number header (right-aligned) -->
        <div class="variant-card">
          <span class="variant-label">Number</span>
          <div class="variant-demo">
            <div class="th-cell th-cell--right"># Header</div>
          </div>
        </div>
        <!-- Checkbox header -->
        <div class="variant-card">
          <span class="variant-label">Checkbox</span>
          <div class="variant-demo">
            <div class="th-cell">
              <input type="checkbox" class="table-checkbox" />
            </div>
          </div>
        </div>
        <!-- Sort ascending -->
        <div class="variant-card">
          <span class="variant-label">Sort Ascending</span>
          <div class="variant-demo">
            <div class="th-cell th-cell--sortable th-cell--sorted">
              Header
              <svg class="sort-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3.33334L12.6667 8.00001H3.33334L8 3.33334Z" fill="currentColor"/></svg>
            </div>
          </div>
        </div>
        <!-- Sort descending -->
        <div class="variant-card">
          <span class="variant-label">Sort Descending</span>
          <div class="variant-demo">
            <div class="th-cell th-cell--sortable th-cell--sorted th-cell--right">
              # Header
              <svg class="sort-icon sort-icon--desc" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3.33334L12.6667 8.00001H3.33334L8 3.33334Z" fill="currentColor"/></svg>
            </div>
          </div>
        </div>
        <!-- Tooltip header -->
        <div class="variant-card">
          <span class="variant-label">Tooltip</span>
          <div class="variant-demo">
            <div class="th-cell th-cell--tooltip">
              Header
              <svg class="info-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.33334C4.32 1.33334 1.33334 4.32 1.33334 8C1.33334 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33334 8 1.33334ZM8.66667 11.3333H7.33334V7.33334H8.66667V11.3333ZM8.66667 6H7.33334V4.66667H8.66667V6Z" fill="currentColor"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         3. TABLE CELL VARIANTS
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Table Cell Variants</h2>
        <p class="section-desc">
          Body cells support text, bold, link, icon, image, number, multi-line, badge, checkbox, switch, button, and actions variants.
        </p>
      </div>

      <div class="variants-grid variants-grid--wide">
        <!-- Text -->
        <div class="variant-card">
          <span class="variant-label">Text</span>
          <div class="variant-demo"><div class="td-cell">Cell text</div></div>
        </div>
        <!-- Bold -->
        <div class="variant-card">
          <span class="variant-label">Bold</span>
          <div class="variant-demo"><div class="td-cell td-cell--bold">Cell bold</div></div>
        </div>
        <!-- Link -->
        <div class="variant-card">
          <span class="variant-label">Link</span>
          <div class="variant-demo"><div class="td-cell"><a href="#" class="cell-link" @click.prevent>Cell link</a></div></div>
        </div>
        <!-- Icon -->
        <div class="variant-card">
          <span class="variant-label">Icon + Text</span>
          <div class="variant-demo">
            <div class="td-cell td-cell--icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2Z" fill="#6c7489"/></svg>
              Cell icon
            </div>
          </div>
        </div>
        <!-- Image -->
        <div class="variant-card">
          <span class="variant-label">Image + Text</span>
          <div class="variant-demo">
            <div class="td-cell td-cell--icon">
              <div class="cell-avatar">K</div>
              Cell image
            </div>
          </div>
        </div>
        <!-- Number -->
        <div class="variant-card">
          <span class="variant-label">Number</span>
          <div class="variant-demo"><div class="td-cell td-cell--right">123456</div></div>
        </div>
        <!-- Number Bold -->
        <div class="variant-card">
          <span class="variant-label">Number Bold</span>
          <div class="variant-demo"><div class="td-cell td-cell--right td-cell--bold">123456</div></div>
        </div>
        <!-- Number Link -->
        <div class="variant-card">
          <span class="variant-label">Number Link</span>
          <div class="variant-demo"><div class="td-cell td-cell--right"><a href="#" class="cell-link" @click.prevent>123456</a></div></div>
        </div>
        <!-- Multi-line -->
        <div class="variant-card variant-card--wide">
          <span class="variant-label">Multi-line</span>
          <div class="variant-demo">
            <div class="td-cell td-cell--multiline">
              <span class="cell-title">Cell title</span>
              <span class="cell-subtitle">Brief description of the cell</span>
            </div>
          </div>
        </div>
        <!-- Badge -->
        <div class="variant-card">
          <span class="variant-label">Badge</span>
          <div class="variant-demo">
            <div class="td-cell">
              <span class="cell-badge cell-badge--info">Tag 1</span>
            </div>
          </div>
        </div>
        <!-- Checkbox -->
        <div class="variant-card">
          <span class="variant-label">Checkbox</span>
          <div class="variant-demo"><div class="td-cell td-cell--right"><input type="checkbox" class="table-checkbox" /></div></div>
        </div>
        <!-- Switch -->
        <div class="variant-card">
          <span class="variant-label">Switch</span>
          <div class="variant-demo">
            <div class="td-cell td-cell--right">
              <button class="table-switch" @click.prevent><span class="switch-handle" /></button>
            </div>
          </div>
        </div>
        <!-- Button -->
        <div class="variant-card">
          <span class="variant-label">Button</span>
          <div class="variant-demo">
            <div class="td-cell td-cell--right">
              <button class="cell-button">Label</button>
            </div>
          </div>
        </div>
        <!-- Actions -->
        <div class="variant-card">
          <span class="variant-label">Actions</span>
          <div class="variant-demo">
            <div class="td-cell td-cell--right">
              <svg class="actions-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="5" r="1.5" fill="currentColor"/><circle cx="10" cy="10" r="1.5" fill="currentColor"/><circle cx="10" cy="15" r="1.5" fill="currentColor"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         4. ROW STATES
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Row States</h2>
        <p class="section-desc">
          Table rows have default, hover, and selected states. Hover uses a neutral weakest background;
          selected uses a primary weakest tint.
        </p>
      </div>

      <div class="states-demo">
        <div class="state-row">
          <span class="state-label">Default</span>
          <div class="td-cell">Cell text</div>
        </div>
        <div class="state-row state-row--hover">
          <span class="state-label">Hover</span>
          <div class="td-cell">Cell text</div>
        </div>
        <div class="state-row state-row--selected">
          <span class="state-label">Selected</span>
          <div class="td-cell">Cell text</div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         5. FULL TABLE DEMO (interactive)
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Full Table Demo</h2>
        <p class="section-desc">
          An interactive table combining sortable headers, selectable rows, badge cells, number cells, and action menus.
          Click column headers to sort, checkboxes to select rows.
        </p>
      </div>

      <div class="demo-table-wrap">
        <!-- Toggle loading -->
        <div class="demo-toolbar">
          <button class="toolbar-btn" :class="{ 'toolbar-btn--active': showSkeleton }" @click="showSkeleton = !showSkeleton">
            {{ showSkeleton ? 'Hide' : 'Show' }} Loading Skeleton
          </button>
        </div>

        <!-- Skeleton overlay -->
        <div v-if="showSkeleton" class="demo-table-skeleton">
          <div class="skeleton-header">
            <div class="skeleton-cell skeleton-cell--check"><div class="skeleton-bar skeleton-bar--tiny" /></div>
            <div class="skeleton-cell skeleton-cell--wide"><div class="skeleton-bar skeleton-bar--medium" /></div>
            <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
            <div class="skeleton-cell skeleton-cell--wide"><div class="skeleton-bar skeleton-bar--medium" /></div>
            <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
            <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
            <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
            <div class="skeleton-cell skeleton-cell--narrow"><div class="skeleton-bar skeleton-bar--tiny" /></div>
          </div>
          <div v-for="r in 5" :key="r" class="skeleton-row">
            <div class="skeleton-cell skeleton-cell--check"><div class="skeleton-bar skeleton-bar--tiny" /></div>
            <div class="skeleton-cell skeleton-cell--wide"><div class="skeleton-bar skeleton-bar--long" /></div>
            <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
            <div class="skeleton-cell skeleton-cell--wide"><div class="skeleton-bar skeleton-bar--medium" /></div>
            <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
            <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
            <div class="skeleton-cell"><div class="skeleton-bar skeleton-bar--short" /></div>
            <div class="skeleton-cell skeleton-cell--narrow"><div class="skeleton-bar skeleton-bar--tiny" /></div>
          </div>
        </div>

        <!-- Real table -->
        <table v-else class="demo-table">
          <thead>
            <tr>
              <th class="th--check">
                <input type="checkbox" class="table-checkbox" :checked="allSelected" @change="toggleAll" />
              </th>
              <th class="th--sortable" @click="toggleSort('name')">
                Service
                <svg v-if="sortCol === 'name'" class="sort-icon" :class="{ 'sort-icon--desc': sortDir === 'desc' }" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3.33334L12.6667 8.00001H3.33334L8 3.33334Z" fill="currentColor"/></svg>
              </th>
              <th>Protocol</th>
              <th>Host</th>
              <th class="th--sortable th--right" @click="toggleSort('port')">
                Port
                <svg v-if="sortCol === 'port'" class="sort-icon" :class="{ 'sort-icon--desc': sortDir === 'desc' }" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3.33334L12.6667 8.00001H3.33334L8 3.33334Z" fill="currentColor"/></svg>
              </th>
              <th>Status</th>
              <th class="th--sortable th--right" @click="toggleSort('requests')">
                Requests
                <svg v-if="sortCol === 'requests'" class="sort-icon" :class="{ 'sort-icon--desc': sortDir === 'desc' }" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3.33334L12.6667 8.00001H3.33334L8 3.33334Z" fill="currentColor"/></svg>
              </th>
              <th class="th--right">Enabled</th>
              <th class="th--actions" />
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(svc, idx) in services"
              :key="svc.name"
              :class="{ 'tr--selected': selectedRows.has(idx) }"
            >
              <td class="td--check">
                <input type="checkbox" class="table-checkbox" :checked="selectedRows.has(idx)" @change="toggleRow(idx)" />
              </td>
              <td class="td--bold"><a href="#" class="cell-link" @click.prevent>{{ svc.name }}</a></td>
              <td>
                <span class="cell-badge" :class="svc.protocol === 'gRPC' ? 'cell-badge--warning' : 'cell-badge--neutral'">{{ svc.protocol }}</span>
              </td>
              <td class="td--mono">{{ svc.host }}</td>
              <td class="td--right">{{ svc.port }}</td>
              <td>
                <span class="cell-badge" :class="'cell-badge--' + badgeAppearance(svc.status)">{{ svc.status }}</span>
              </td>
              <td class="td--right td--mono">{{ svc.requests.toLocaleString() }}</td>
              <td class="td--right">
                <button class="table-switch" :class="{ 'table-switch--on': switchStates[idx] }" @click="toggleSwitch(idx)">
                  <span class="switch-handle" />
                </button>
              </td>
              <td class="td--actions">
                <button class="actions-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="5" r="1.5" fill="currentColor"/><circle cx="10" cy="10" r="1.5" fill="currentColor"/><circle cx="10" cy="15" r="1.5" fill="currentColor"/></svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         6. DESIGN TOKENS
         ══════════════════════════════════════════════════════════════════════ -->
    <KCard title="Table Design Tokens">
      <template #default>
        <div class="tokens-grid">
          <div class="token-item">
            <div class="token-swatch" style="background: #f9fafb" />
            <div><div class="token-name">color-background-neutral-weakest</div><div class="token-val">#f9fafb (hover row)</div></div>
          </div>
          <div class="token-item">
            <div class="token-swatch" style="background: #eefaff" />
            <div><div class="token-name">color-background-primary-weakest</div><div class="token-val">#eefaff (selected row)</div></div>
          </div>
          <div class="token-item">
            <div class="token-swatch" style="background: #e0e4ea" />
            <div><div class="token-name">color-border</div><div class="token-val">#e0e4ea (row divider)</div></div>
          </div>
          <div class="token-item">
            <div class="token-swatch" style="background: #6c7489" />
            <div><div class="token-name">color-text-neutral</div><div class="token-val">#6c7489 (header text)</div></div>
          </div>
          <div class="token-item">
            <div class="token-swatch" style="background: #000933" />
            <div><div class="token-name">color-text</div><div class="token-val">#000933 (sorted header, body text)</div></div>
          </div>
          <div class="token-item">
            <div class="token-swatch" style="background: #0044f4" />
            <div><div class="token-name">color-text-primary</div><div class="token-val">#0044f4 (link, button)</div></div>
          </div>
        </div>
        <div class="token-specs">
          <p>Header height: <strong>40px</strong> · padding: <strong>12px 16px</strong> · font: <strong>14px Inter SemiBold</strong> · letter-spacing: 0</p>
          <p>Cell height: <strong>48px</strong> · padding: <strong>0 16px</strong> · font: <strong>14px Inter Regular</strong></p>
          <p>Badge: <strong>12px Inter SemiBold</strong> · padding <strong>4px 8px</strong> · border-radius <strong>4px</strong></p>
          <p>Switch: <strong>44×24px</strong> · handle <strong>20×20px</strong> · border-radius <strong>4px</strong></p>
        </div>
      </template>
    </KCard>

  </div>
</template>

<style scoped>
/* ── Page structure ──────────────────────────────────────────────────────── */
.view-container { display: flex; flex-direction: column; gap: 32px; }
.header { display: flex; flex-direction: column; gap: 8px; }
.description { color: var(--color-text-neutral); font-size: 16px; line-height: 24px; }

/* ── Section ─────────────────────────────────────────────────────────────── */
.layout-section { display: flex; flex-direction: column; gap: 20px; }
.section-header { display: flex; flex-direction: column; gap: 6px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border); }
.section-title { font-size: 18px; font-weight: 700; color: var(--color-text); margin: 0; }
.section-desc { color: var(--color-text-neutral); font-size: 14px; line-height: 20px; margin: 0; }

/* ══════════════════════════════════════════════════════════════════════════
   LOADING SKELETON
   ══════════════════════════════════════════════════════════════════════════ */
.skeleton-table, .demo-table-skeleton {
  border: 1px solid #e0e4ea;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}
.skeleton-header {
  display: flex;
  align-items: center;
  padding: 16px 32px;
  gap: 32px;
  border-bottom: 1px solid #e0e4ea;
}
.skeleton-row {
  display: flex;
  align-items: center;
  padding: 16px 32px;
  gap: 32px;
  border-bottom: 1px solid #e0e4ea;
}
.skeleton-row:last-child { border-bottom: none; }
.skeleton-cell { flex: 1; }
.skeleton-cell--narrow { flex: 0 0 40px; }
.skeleton-cell--wide { flex: 2; }
.skeleton-cell--check { flex: 0 0 24px; }
.skeleton-bar {
  height: 12px;
  border-radius: 4px;
  background: #e0e4ea;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}
.skeleton-bar--tiny { width: 20px; }
.skeleton-bar--short { width: 60px; }
.skeleton-bar--medium { width: 120px; }
.skeleton-bar--long { width: 180px; }

@keyframes skeleton-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* ══════════════════════════════════════════════════════════════════════════
   VARIANT CARDS GRID
   ══════════════════════════════════════════════════════════════════════════ */
.variants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}
.variants-grid--wide {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}
.variant-card {
  border: 1px solid #e0e4ea;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}
.variant-card--wide { grid-column: span 2; }
.variant-label {
  display: block;
  padding: 8px 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c7489;
  background: #f9fafb;
  border-bottom: 1px solid #e0e4ea;
}
.variant-demo {
  padding: 0;
  min-height: 48px;
  display: flex;
  align-items: center;
}

/* ── Header cell styles ──────────────────────────────────────────────── */
.th-cell {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #6c7489;
  line-height: 20px;
  width: 100%;
  border-bottom: 1px solid #e0e4ea;
}
.th-cell--right { justify-content: flex-end; }
.th-cell--sortable { cursor: pointer; }
.th-cell--sorted { color: #000933; }
.th-cell--tooltip { color: #6c7489; }
.sort-icon { flex-shrink: 0; color: #000933; }
.sort-icon--desc { transform: rotate(180deg); }
.info-icon { flex-shrink: 0; color: #6c7489; }

/* ── Body cell styles ────────────────────────────────────────────────── */
.td-cell {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 400;
  color: #000933;
  line-height: 24px;
  width: 100%;
  height: 48px;
}
.td-cell--bold { font-weight: 600; }
.td-cell--right { justify-content: flex-end; }
.td-cell--icon { gap: 8px; }
.td-cell--multiline {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
}
.cell-title { font-size: 14px; font-weight: 600; color: #000933; line-height: 20px; }
.cell-subtitle { font-size: 12px; font-weight: 400; color: #3a3f51; line-height: 16px; }
.cell-link { color: #0044f4; font-weight: 600; text-decoration: none; font-size: 14px; }
.cell-link:hover { text-decoration: underline; }
.cell-avatar {
  width: 24px; height: 24px; border-radius: 4px;
  background: #cfc8ff; color: #000933;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; flex-shrink: 0;
}

/* Badge */
.cell-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  white-space: nowrap;
}
.cell-badge--info { background: #eefaff; color: #0044f4; }
.cell-badge--success { background: #eefbf4; color: #007d3a; }
.cell-badge--warning { background: #fff8e6; color: #8a6400; }
.cell-badge--neutral { background: #f1f1f5; color: #6c7489; }

/* Checkbox */
.table-checkbox {
  appearance: none;
  width: 16px; height: 16px;
  border: 1px solid #e0e4ea;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
}
.table-checkbox:checked {
  background: #0044f4;
  border-color: #0044f4;
}
.table-checkbox:checked::after {
  content: '';
  position: absolute;
  left: 4.5px; top: 1.5px;
  width: 5px; height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Switch */
.table-switch {
  display: flex;
  align-items: center;
  width: 44px; height: 24px;
  padding: 2px;
  border-radius: 4px;
  background: #e0e4ea;
  border: none;
  cursor: pointer;
  position: relative;
  transition: background 0.2s ease;
}
.table-switch--on { background: #0044f4; }
.switch-handle {
  display: block;
  width: 20px; height: 20px;
  border-radius: 4px;
  background: white;
  box-shadow: inset 0 0 0 1px #afb7c5;
  transition: transform 0.2s ease;
}
.table-switch--on .switch-handle {
  transform: translateX(20px);
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
}

/* Button */
.cell-button {
  padding: 3px 7px;
  border: 1px solid #0044f4;
  border-radius: 4px;
  background: transparent;
  color: #0044f4;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  white-space: nowrap;
}
.cell-button:hover { background: #eefaff; }

/* Actions */
.actions-icon, .actions-btn svg { color: #6c7489; }
.actions-btn {
  background: none; border: none; cursor: pointer; padding: 4px;
  border-radius: 4px; display: flex; align-items: center; justify-content: center;
}
.actions-btn:hover { background: #f1f1f5; }

/* ══════════════════════════════════════════════════════════════════════════
   ROW STATES
   ══════════════════════════════════════════════════════════════════════════ */
.states-demo {
  border: 1px solid #e0e4ea;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}
.state-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid #e0e4ea;
}
.state-row:last-child { border-bottom: none; }
.state-row--hover { background: #f9fafb; }
.state-row--selected { background: #eefaff; }
.state-label {
  width: 80px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c7489;
  flex-shrink: 0;
}

/* ══════════════════════════════════════════════════════════════════════════
   FULL TABLE DEMO
   ══════════════════════════════════════════════════════════════════════════ */
.demo-table-wrap {
  border: 1px solid #e0e4ea;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}
.demo-toolbar {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e4ea;
  display: flex;
  gap: 8px;
}
.toolbar-btn {
  padding: 6px 12px;
  border: 1px solid #e0e4ea;
  border-radius: 4px;
  background: white;
  font-size: 12px;
  font-weight: 600;
  color: #000933;
  cursor: pointer;
}
.toolbar-btn:hover { background: #f9fafb; }
.toolbar-btn--active { background: #eefaff; border-color: #0044f4; color: #0044f4; }

.demo-table {
  width: 100%;
  border-collapse: collapse;
}
.demo-table thead th {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #6c7489;
  text-align: left;
  border-bottom: 1px solid #e0e4ea;
  line-height: 20px;
  white-space: nowrap;
  user-select: none;
}
.demo-table thead .th--right { text-align: right; }
.demo-table thead .th--check { width: 48px; padding: 12px 16px; }
.demo-table thead .th--actions { width: 52px; }
.demo-table thead .th--sortable {
  cursor: pointer;
  transition: color 0.15s;
}
.demo-table thead .th--sortable:hover { color: #000933; }
.demo-table thead .th--sortable svg { display: inline-block; vertical-align: middle; margin-left: 4px; }
.demo-table tbody tr {
  border-bottom: 1px solid #e0e4ea;
  transition: background 0.1s;
}
.demo-table tbody tr:last-child { border-bottom: none; }
.demo-table tbody tr:hover { background: #f9fafb; }
.demo-table tbody tr.tr--selected { background: #eefaff; }
.demo-table tbody td {
  padding: 0 16px;
  height: 48px;
  font-size: 14px;
  color: #000933;
  line-height: 24px;
  white-space: nowrap;
}
.demo-table tbody .td--check { width: 48px; }
.demo-table tbody .td--bold { font-weight: 600; }
.demo-table tbody .td--right { text-align: right; }
.demo-table tbody .td--mono { font-family: 'SFMono-Regular', 'Consolas', monospace; font-size: 13px; }
.demo-table tbody .td--actions { width: 52px; padding: 0 8px; text-align: right; }

/* ══════════════════════════════════════════════════════════════════════════
   DESIGN TOKENS SECTION
   ══════════════════════════════════════════════════════════════════════════ */
.tokens-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}
.token-item { display: flex; align-items: center; gap: 10px; }
.token-swatch { width: 28px; height: 28px; border-radius: 4px; flex-shrink: 0; border: 1px solid #e0e4ea; }
.token-name { font-size: 12px; font-weight: 600; color: var(--color-text); font-family: monospace; }
.token-val { font-size: 11px; color: var(--color-text-neutral); font-family: monospace; }
.token-specs { display: flex; flex-direction: column; gap: 4px; }
.token-specs p { margin: 0; font-size: 13px; color: var(--color-text-neutral); line-height: 20px; }
.token-specs strong { color: var(--color-text); }
</style>
