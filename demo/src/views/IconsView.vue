<script setup lang="ts">
import { ref, computed } from 'vue'
import { KCard } from '@kong/kongponents'
import {
  AddIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon,
  BackIcon, BarChartIcon, BookIcon, BotIcon, BrainIcon,
  CalIcon, CheckIcon, CheckSmallIcon,
  ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon,
  ClipboardIcon, ClockIcon, CloseIcon, CloudIcon, CollapseIcon,
  CopyIcon, CogIcon, DangerCircleIcon,
  DashboardIcon, DocumentIcon, DocumentListIcon,
  ExternalLinkIcon, ExpandIcon,
  FileEmptyIcon, FilterIcon, FlagIcon,
  GridIcon, GraduationIcon,
  HelpIcon, ImageIcon, IndeterminateSmallIcon, InfoIcon, InboxIcon,
  ListIcon, LockIcon,
  MoreIcon, MoreHorizontalIcon,
  NotificationIcon,
  OverviewIcon,
  PanelCloseLeftIcon, PeopleIcon, PlugIcon, ProfileIcon,
  RedoIcon,
  SearchIcon, SecurityIcon, ServiceDocumentIcon,
  TableIcon, TeamIcon, TrashIcon,
  WarningIcon,
  CheckCircleIcon, AddCircleIcon,
  DisabledIcon
} from '@kong/icons'

// ── Search state ────────────────────────────────────────────────────────────
const iconSearch = ref('')

// ── Icon catalog ────────────────────────────────────────────────────────────
const iconCatalog = [
  { name: 'add', component: AddIcon, keywords: 'plus, create, new' },
  { name: 'add-circle', component: AddCircleIcon, keywords: 'plus, create, circle' },
  { name: 'arrow-down', component: ArrowDownIcon, keywords: 'direction, down' },
  { name: 'arrow-left', component: ArrowLeftIcon, keywords: 'direction, left' },
  { name: 'arrow-right', component: ArrowRightIcon, keywords: 'direction, right' },
  { name: 'arrow-up', component: ArrowUpIcon, keywords: 'direction, up' },
  { name: 'back', component: BackIcon, keywords: 'return, previous' },
  { name: 'bar-chart', component: BarChartIcon, keywords: 'analytics, chart, graph' },
  { name: 'book', component: BookIcon, keywords: 'documentation, read' },
  { name: 'bot', component: BotIcon, keywords: 'robot, ai, automation' },
  { name: 'brain', component: BrainIcon, keywords: 'ai, intelligence, smart' },
  { name: 'calendar', component: CalIcon, keywords: 'date, schedule, event' },
  { name: 'check', component: CheckIcon, keywords: 'done, confirm, tick' },
  { name: 'check-circle', component: CheckCircleIcon, keywords: 'done, success, approved' },
  { name: 'check-small', component: CheckSmallIcon, keywords: 'done, tick, mini' },
  { name: 'chevron-down', component: ChevronDownIcon, keywords: 'expand, dropdown' },
  { name: 'chevron-left', component: ChevronLeftIcon, keywords: 'previous, back' },
  { name: 'chevron-right', component: ChevronRightIcon, keywords: 'next, forward' },
  { name: 'chevron-up', component: ChevronUpIcon, keywords: 'collapse, up' },
  { name: 'clipboard', component: ClipboardIcon, keywords: 'paste, copy, board' },
  { name: 'clock', component: ClockIcon, keywords: 'time, history, schedule' },
  { name: 'close', component: CloseIcon, keywords: 'remove, delete, x' },
  { name: 'cloud', component: CloudIcon, keywords: 'upload, hosting, saas' },
  { name: 'cog', component: CogIcon, keywords: 'settings, config, gear' },
  { name: 'collapse', component: CollapseIcon, keywords: 'minimize, shrink' },
  { name: 'copy', component: CopyIcon, keywords: 'duplicate, clone' },
  { name: 'danger-circle', component: DangerCircleIcon, keywords: 'error, alert, warning' },
  { name: 'dashboard', component: DashboardIcon, keywords: 'home, overview, panel' },
  { name: 'disabled', component: DisabledIcon, keywords: 'blocked, not-allowed' },
  { name: 'document', component: DocumentIcon, keywords: 'file, page, paper' },
  { name: 'document-list', component: DocumentListIcon, keywords: 'files, pages, list' },
  { name: 'expand', component: ExpandIcon, keywords: 'fullscreen, maximize' },
  { name: 'external-link', component: ExternalLinkIcon, keywords: 'open, new-tab, url' },
  { name: 'file-empty', component: FileEmptyIcon, keywords: 'blank, new file' },
  { name: 'filter', component: FilterIcon, keywords: 'sort, narrow, funnel' },
  { name: 'flag', component: FlagIcon, keywords: 'report, mark, country' },
  { name: 'graduation', component: GraduationIcon, keywords: 'learn, education, academy' },
  { name: 'grid', component: GridIcon, keywords: 'layout, apps, tiles' },
  { name: 'help', component: HelpIcon, keywords: 'question, support, faq' },
  { name: 'image', component: ImageIcon, keywords: 'photo, picture, media' },
  { name: 'indeterminate-small', component: IndeterminateSmallIcon, keywords: 'minus, partial' },
  { name: 'info', component: InfoIcon, keywords: 'information, details, about' },
  { name: 'inbox', component: InboxIcon, keywords: 'mail, messages' },
  { name: 'list', component: ListIcon, keywords: 'items, menu, rows' },
  { name: 'lock', component: LockIcon, keywords: 'security, private, auth' },
  { name: 'more', component: MoreIcon, keywords: 'actions, ellipsis, vertical' },
  { name: 'more-horizontal', component: MoreHorizontalIcon, keywords: 'actions, ellipsis, horizontal' },
  { name: 'notification', component: NotificationIcon, keywords: 'bell, alert, notify' },
  { name: 'overview', component: OverviewIcon, keywords: 'home, summary, dashboard' },
  { name: 'panel-close-left', component: PanelCloseLeftIcon, keywords: 'sidebar, collapse, nav' },
  { name: 'people', component: PeopleIcon, keywords: 'users, group, team' },
  { name: 'plug', component: PlugIcon, keywords: 'plugin, connect, extension' },
  { name: 'profile', component: ProfileIcon, keywords: 'user, person, avatar' },
  { name: 'redo', component: RedoIcon, keywords: 'refresh, retry, reload' },
  { name: 'search', component: SearchIcon, keywords: 'find, lookup, magnify' },
  { name: 'security', component: SecurityIcon, keywords: 'shield, protect, safe' },
  { name: 'service-document', component: ServiceDocumentIcon, keywords: 'api, spec, doc' },
  { name: 'table', component: TableIcon, keywords: 'data, grid, spreadsheet' },
  { name: 'team', component: TeamIcon, keywords: 'member, person, add user' },
  { name: 'trash', component: TrashIcon, keywords: 'delete, remove, bin' },
  { name: 'warning', component: WarningIcon, keywords: 'caution, alert, exclamation' },
]

const filteredIcons = computed(() => {
  const q = iconSearch.value.toLowerCase().trim()
  if (!q) return iconCatalog
  return iconCatalog.filter(i =>
    i.name.includes(q) || i.keywords.includes(q)
  )
})

// ── Platforms ────────────────────────────────────────────────────────────────
const platforms = [
  'Amazon Bedrock', 'Anthropic', 'Apple', 'Auth0', 'AWS', 'Azure',
  'Cohere', 'Conjur', 'Curity', 'Datadog', 'Docker', 'Dynatrace',
  'Gemini', 'GitHub', 'GitLab', 'Google', 'Google Cloud', 'Grafana',
  'Grok', 'HashiCorp', 'Hugging Face', 'Incident.io', 'Jira',
  'Kong', 'Linux', 'Meta Llama', 'Microsoft', 'Microsoft Teams',
  'Mistral', 'New Relic', 'Okta', 'OpenAI', 'OpsGenie',
  'PagerDuty', 'Red Hat', 'Salt Security', 'ServiceNow',
  'Slack', 'Snyk', 'Sonar', 'Sparkles', 'Splunk',
  'SwaggerHub', 'Traceable', 'Ubuntu', 'Windows'
]

// ── Gateways ────────────────────────────────────────────────────────────────
const gateways = [
  { name: 'Control Plane Group', color: '#0044f4' },
  { name: 'Dedicated Cloud', color: '#00a3ff' },
  { name: 'Kong Ingress Controller', color: '#7b61ff' },
  { name: 'Self-Managed', color: '#00b4d8' },
  { name: 'Serverless', color: '#d946ef' },
]

// ── Flags sample ────────────────────────────────────────────────────────────
const flagsSample = [
  'US', 'United Kingdom', 'Germany', 'France', 'Japan', 'Australia',
  'Canada', 'Brazil', 'India', 'China', 'South Korea', 'Singapore',
  'Ireland', 'Netherlands', 'Sweden', 'Switzerland', 'Israel',
  'UAE', 'Mexico', 'Indonesia', 'Thailand', 'Poland',
  'Italy', 'Spain', 'Norway', 'Denmark', 'Finland', 'Austria',
  'New Zealand', 'Belgium', 'Czech Republic', 'Portugal'
]
</script>

<template>
  <div class="view-container">

    <!-- ── Page header ───────────────────────────────────────────────────── -->
    <div class="header">
      <h1>Icons</h1>
      <p class="description">
        Curated icon library for the Kong design system. Icons come from Material Symbols,
        with additional custom icons for Kong products, flags, and third-party platforms.
      </p>
    </div>

    <!-- ══════════════════════════════════════════════════════════════════════
         1. MATERIAL SYMBOLS OVERVIEW
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Material Symbols</h2>
        <p class="section-desc">
          The core icon library uses Material Symbols from Google. It provides a robust set
          of icons across a variety of categories and styles.
        </p>
      </div>

      <div class="material-overview">
        <!-- Settings panel -->
        <div class="material-settings">
          <div class="material-settings-title">Default Settings</div>
          <div class="settings-grid">
            <div class="setting-item">
              <span class="setting-label">Style</span>
              <span class="setting-value">Outlined</span>
            </div>
            <div class="setting-item">
              <span class="setting-label">Weight</span>
              <span class="setting-value">400</span>
            </div>
            <div class="setting-item">
              <span class="setting-label">Fill</span>
              <span class="setting-value">Off</span>
            </div>
            <div class="setting-item">
              <span class="setting-label">Grade</span>
              <span class="setting-value">Normal</span>
            </div>
            <div class="setting-item">
              <span class="setting-label">Optical Size</span>
              <span class="setting-value">24dp</span>
            </div>
          </div>
        </div>

        <!-- Guidelines -->
        <div class="guidelines-panel">
          <div class="guideline-card">
            <div class="guideline-icon">✓</div>
            <div class="guideline-title">Reusable</div>
            <p class="guideline-text">The icon must be reusable and something other designers can use and benefit from.</p>
          </div>
          <div class="guideline-card">
            <div class="guideline-icon">◎</div>
            <div class="guideline-title">Intention</div>
            <p class="guideline-text">The icon must have clear intention and use, not causing confusion with other similar icons.</p>
          </div>
          <div class="guideline-card">
            <div class="guideline-icon">≡</div>
            <div class="guideline-title">Consistency</div>
            <p class="guideline-text">The icon must be consistent in weight and size to the other icons in the set.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         2. ICON CATALOG (searchable grid)
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Icon Catalog</h2>
        <p class="section-desc">
          The curated set of {{ iconCatalog.length }} icons from <code>@kong/icons</code>.
          Search by name or keyword to find the icon you need.
        </p>
      </div>

      <!-- Search -->
      <div class="icon-search-bar">
        <svg class="icon-search-icon" width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <input
          v-model="iconSearch"
          class="icon-search-input"
          type="text"
          placeholder="Search icons…"
        />
        <span class="icon-count">{{ filteredIcons.length }} icons</span>
      </div>

      <!-- Grid -->
      <div class="icon-grid">
        <div
          v-for="icon in filteredIcons"
          :key="icon.name"
          class="icon-tile"
        >
          <div class="icon-tile-icon">
            <component :is="icon.component" :size="24" />
          </div>
          <span class="icon-tile-name">{{ icon.name }}</span>
        </div>
      </div>

      <p v-if="filteredIcons.length === 0" class="icon-empty">
        No icons match "{{ iconSearch }}".
      </p>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         3. FLAGS
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Flags</h2>
        <p class="section-desc">
          Curated flag icon library for region/country selectors. Flags render as
          20×20px circles and are used in the nav drawer region selector and locale pickers.
        </p>
      </div>

      <div class="flags-grid">
        <div v-for="flag in flagsSample" :key="flag" class="flag-tile">
          <div class="flag-circle">
            <span class="flag-initials">{{ flag.slice(0, 2).toUpperCase() }}</span>
          </div>
          <span class="flag-label">{{ flag }}</span>
        </div>
      </div>

      <div class="flag-note">
        Full library contains 200+ country flags. All flags are circular, rendered at 20×20px with
        proportional artwork inside a clip-path circle.
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         4. THIRD-PARTY / MISC
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="layout-section">
      <div class="section-header">
        <h2 class="section-title">Third-Party &amp; Misc</h2>
        <p class="section-desc">
          Logos and icons from third parties that add to the user experience of Kong products.
          Includes platform integrations, cloud providers, and gateway type identifiers.
        </p>
      </div>

      <!-- Platforms sub-section -->
      <div class="subsection">
        <h3 class="subsection-title">Platforms</h3>
        <div class="platform-grid">
          <div v-for="p in platforms" :key="p" class="platform-tile">
            <div class="platform-icon-placeholder">
              <span>{{ p.charAt(0) }}</span>
            </div>
            <span class="platform-name">{{ p }}</span>
          </div>
        </div>
      </div>

      <!-- Gateways sub-section -->
      <div class="subsection">
        <h3 class="subsection-title">Gateways</h3>
        <div class="gateways-grid">
          <div v-for="g in gateways" :key="g.name" class="gateway-tile">
            <div class="gateway-icon" :style="{ borderColor: g.color }">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="6" :stroke="g.color" stroke-width="2" fill="none"/>
                <circle cx="10" cy="10" r="2" :fill="g.color"/>
              </svg>
            </div>
            <span class="gateway-name">{{ g.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         5. USAGE & SPECS
         ══════════════════════════════════════════════════════════════════════ -->
    <KCard title="Icon Usage Specs">
      <template #default>
        <div class="spec-grid">
          <div class="spec-block">
            <div class="spec-block-title">Sizing</div>
            <div class="spec-row"><span class="spec-prop">Default icon</span><span class="spec-val">20 × 20px</span></div>
            <div class="spec-row"><span class="spec-prop">Table / card icon</span><span class="spec-val">24 × 24px</span></div>
            <div class="spec-row"><span class="spec-prop">Nav icon</span><span class="spec-val">20 × 20px</span></div>
            <div class="spec-row"><span class="spec-prop">Flag circle</span><span class="spec-val">20 × 20px</span></div>
          </div>
          <div class="spec-block">
            <div class="spec-block-title">Colors</div>
            <div class="spec-row"><span class="spec-prop">Default</span><span class="token-pill">color-text</span> <span class="spec-val">#000933</span></div>
            <div class="spec-row"><span class="spec-prop">Neutral / disabled</span><span class="token-pill">color-text-neutral</span> <span class="spec-val">#6c7489</span></div>
            <div class="spec-row"><span class="spec-prop">Primary / interactive</span><span class="token-pill">color-text-primary</span> <span class="spec-val">#0044f4</span></div>
            <div class="spec-row"><span class="spec-prop">Danger</span><span class="token-pill">color-text-danger</span> <span class="spec-val">#d44324</span></div>
            <div class="spec-row"><span class="spec-prop">Success</span><span class="token-pill">color-text-success</span> <span class="spec-val">#007d3a</span></div>
          </div>
          <div class="spec-block">
            <div class="spec-block-title">Package</div>
            <div class="spec-row"><span class="spec-prop">npm</span><span class="spec-val">@kong/icons</span></div>
            <div class="spec-row"><span class="spec-prop">Import</span><span class="spec-val mono">import { AddIcon } from '@kong/icons'</span></div>
            <div class="spec-row"><span class="spec-prop">Usage</span><span class="spec-val mono">&lt;AddIcon :size="20" /&gt;</span></div>
          </div>
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
.section-desc code { font-family: monospace; font-size: 12px; background: #f1f1f5; padding: 1px 4px; border-radius: 3px; }

/* ══════════════════════════════════════════════════════════════════════════
   1. MATERIAL SYMBOLS
   ══════════════════════════════════════════════════════════════════════════ */
.material-overview { display: flex; flex-direction: column; gap: 20px; }
.material-settings {
  border: 1px solid #e0e4ea; border-radius: 8px; overflow: hidden; background: white;
}
.material-settings-title {
  padding: 12px 20px; font-size: 14px; font-weight: 700; color: #000933;
  border-bottom: 1px solid #e0e4ea; background: #f9fafb;
}
.settings-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0;
}
.setting-item {
  display: flex; flex-direction: column; gap: 4px;
  padding: 16px 20px; border-right: 1px solid #e0e4ea;
}
.setting-item:last-child { border-right: none; }
.setting-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #6c7489; }
.setting-value { font-size: 16px; font-weight: 600; color: #000933; }

.guidelines-panel { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.guideline-card {
  border: 1px solid #e0e4ea; border-radius: 8px; padding: 20px; background: white;
}
.guideline-icon { font-size: 20px; margin-bottom: 8px; color: #0044f4; }
.guideline-title { font-size: 14px; font-weight: 700; color: #000933; margin-bottom: 6px; }
.guideline-text { font-size: 13px; color: #6c7489; line-height: 20px; margin: 0; }

/* ══════════════════════════════════════════════════════════════════════════
   2. ICON CATALOG
   ══════════════════════════════════════════════════════════════════════════ */
.icon-search-bar {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 16px; border: 1px solid #e0e4ea; border-radius: 8px; background: white;
}
.icon-search-icon { color: #6c7489; flex-shrink: 0; }
.icon-search-input {
  flex: 1; border: none; outline: none; font-size: 14px;
  color: #000933; background: transparent; font-family: inherit;
}
.icon-search-input::placeholder { color: #afb7c5; }
.icon-count { font-size: 12px; color: #6c7489; white-space: nowrap; }

.icon-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 4px;
}
.icon-tile {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 16px 8px; border-radius: 8px; cursor: default;
  transition: background 0.1s;
}
.icon-tile:hover { background: #f9fafb; }
.icon-tile-icon { color: #000933; display: flex; align-items: center; justify-content: center; height: 24px; }
.icon-tile-name { font-size: 10px; color: #6c7489; text-align: center; line-height: 14px; word-break: break-all; }
.icon-empty { text-align: center; color: #6c7489; font-size: 14px; padding: 32px 0; }

/* ══════════════════════════════════════════════════════════════════════════
   3. FLAGS
   ══════════════════════════════════════════════════════════════════════════ */
.flags-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 8px;
}
.flag-tile {
  display: flex; align-items: center; gap: 8px; padding: 8px 12px;
  border-radius: 6px; transition: background 0.1s;
}
.flag-tile:hover { background: #f9fafb; }
.flag-circle {
  width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, #0052b4 50%, #d80027 50%);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.flag-initials { font-size: 7px; font-weight: 700; color: white; text-shadow: 0 0 2px rgba(0,0,0,0.3); }
.flag-label { font-size: 11px; color: #000933; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.flag-note {
  font-size: 12px; color: #6c7489; line-height: 20px; padding: 12px 16px;
  background: #f9fafb; border-radius: 6px; border: 1px solid #e0e4ea;
}

/* ══════════════════════════════════════════════════════════════════════════
   4. THIRD-PARTY / MISC
   ══════════════════════════════════════════════════════════════════════════ */
.subsection { display: flex; flex-direction: column; gap: 12px; }
.subsection-title { font-size: 14px; font-weight: 700; color: #000933; margin: 0; }

.platform-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 8px;
}
.platform-tile {
  display: flex; align-items: center; gap: 8px; padding: 8px 12px;
  border: 1px solid #e0e4ea; border-radius: 6px; background: white;
  transition: background 0.1s;
}
.platform-tile:hover { background: #f9fafb; }
.platform-icon-placeholder {
  width: 24px; height: 24px; border-radius: 4px; flex-shrink: 0;
  background: #f1f1f5; display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; color: #6c7489;
}
.platform-name { font-size: 12px; color: #000933; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.gateways-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
.gateway-tile {
  display: flex; align-items: center; gap: 12px; padding: 12px 16px;
  border: 1px solid #e0e4ea; border-radius: 8px; background: white;
}
.gateway-icon { flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.gateway-name { font-size: 14px; font-weight: 600; color: #000933; }

/* ══════════════════════════════════════════════════════════════════════════
   5. SPECS
   ══════════════════════════════════════════════════════════════════════════ */
.spec-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
.spec-block { display: flex; flex-direction: column; gap: 6px; }
.spec-block-title {
  font-size: 12px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.3px; color: #6c7489; margin-bottom: 4px;
}
.spec-row { display: flex; align-items: center; gap: 8px; font-size: 12px; padding: 4px 0; border-bottom: 1px solid #f1f1f5; }
.spec-prop { color: #6c7489; min-width: 110px; flex-shrink: 0; }
.spec-val { color: #000933; font-size: 12px; }
.spec-val.mono { font-family: monospace; font-size: 11px; }
.token-pill {
  display: inline-block; padding: 2px 10px; border-radius: 12px;
  background: #eefaff; color: #002099; font-size: 12px; font-weight: 500;
  white-space: nowrap;
}
</style>
