# Kongponents Design System Reference

## Overview
Kongponents is Kong's Vue 3 + TypeScript component library. Package: `@kong/kongponents`. Design tokens: `@kong/design-tokens`.

---

## Components

### Buttons & Actions
- **KButton** — `appearance`: primary, secondary, tertiary, danger, none | `size`: small, medium, large | props: icon, disabled, loading
- **KCopy** — Copy-to-clipboard with text display | exposes `copy()` method
- **KDropdown / KDropdownMenu** — Button-triggered dropdown popover menu

### Form Inputs
- **KInput** — Text input with label, error states, character limit, sizes
- **KTextarea** — Multi-line input with autosize support (v9.19+)
- **KCheckbox** — Checkbox with label, indeterminate state, tooltip support
- **KRadio** — Radio button for single selection within a group
- **KSelect** — Dropdown select with optional filtering, required indicator
- **KMultiselect** — Multi-select with autosuggest, item creation, badge display
- **KFileUpload** — File input with type/size validation (default 5MB max)
- **KLabel** — Form label with tooltip integration
- **KDateTimePicker** — Date/time picker inside a popover

### Display & Layout
- **KCard** — Content container with title and helpText
- **KBadge** — Small label (danger, info, success, warning, custom) with uppercase text-transform
- **KAlert** — Contextual alerts (info, success, warning, danger) with dismiss support
- **KBreadcrumbs** — Navigation path hierarchy
- **KEmptyState** — Empty state display with icon variants
- **KSkeleton** — Loading placeholders (card, table, form, spinner, fullscreen-kong, fullscreen-generic, generic)
- **KModal** — Pop-up modal with background overlay
- **KPrompt** — Confirmation/action dialog
- **KCodeBlock** — Code display with syntax highlighting and copy

### Navigation
- **KTabs** — Tabbed interface with `tabs` array (hash + title), conditional tab change via `shouldChangeTab`
- **KPagination** — Page navigation with `totalCount`, `pageSizes`, `restrictNavigation`
- **KSegmentedControl** — Radio button group alternative with string or key-value options

### Data Display
- **KCatalog** — Catalog/listing with cardSize (small/medium/large), search, loading/empty states
- **KCatalogItem** — Clickable item within KCatalog (wraps KCard)

### Utility (Renderless)
- **KComponent** — Renderless state abstraction (wraps components, provides state in slot scope)
- **KToggle** — Renderless toggle behavior wrapper
- **KIcon** — SVG icon display (name, color, size, viewBox 24x24 default)
- **KTooltip** — Tooltip wrapper via `tooltipAttributes`

---

## Foundation — Color Palette

Source: `Foundation--Copy` Figma file, node `2168:8920`

### Color Aliases (Semantic tokens)
| Token | Value | Usage |
|-------|-------|-------|
| `color-text` | `#000933` | Primary text (Blue 100) |
| `color-background` | `#ffffff` | Page/card background |
| `color-border` | `#e0e4ea` | Default borders (Gray 20) |
| `color-text-neutral` | `#6c7489` | Secondary/muted text (Gray 60) |
| `color-background-neutral-weakest` | `#f9fafb` | Subtle bg, unapplied pills (Gray 10) |

### Gray Scale
| Step | Hex | Step | Hex |
|------|-----|------|-----|
| White | `#ffffff` | Gray 50 | `#828a9e` |
| Gray 10 | `#f9fafb` | Gray 60 | `#6c7489` |
| Gray 20 | `#e0e4ea` | Gray 70 | `#52596e` |
| Gray 30 | `#c7ced8` | Gray 80 | `#3a3f51` |
| Gray 40 | `#afb7c5` | Gray 90 | `#232833` |
| | | Gray 100 / Black | `#0d0e14` |

### Blue Scale (Primary / Brand)
| Step | Hex | Role |
|------|-----|------|
| Blue 10 | `#eefaff` | bg-primary-weakest |
| Blue 20 | `#bee2ff` | bg-primary-weaker |
| Blue 30 | `#8fc1ff` | |
| Blue 40 | `#5f9aff` | border-primary-weak (hover) |
| Blue 50 | `#306fff` | |
| **Blue 60** | **`#0044f4`** | **Primary action, links, focus** |
| Blue 70 | `#0030cc` | |
| Blue 80 | `#002099` | text-primary-stronger |
| Blue 90 | `#001466` | |
| Blue 100 | `#000933` | Primary text |

### Green Scale (Success / Brand)
| Step | Hex | Role |
|------|-----|------|
| Green 10 | `#ecfffb` | bg-success-weakest |
| Green 20 | `#b5ffee` | |
| Green 30 | `#00fabe` | |
| Green 40 | `#00d6a4` | |
| **Green 50** | **`#00a17b`** | **Success / Credit grants** |
| Green 60 | `#007d60` | |
| Green 70 | `#005944` | |
| Green 80 | `#004737` | |
| Green 90 | `#003829` | |
| Green 100 | `#00241b` | |

### Red Scale (Danger)
| Step | Hex | Role |
|------|-----|------|
| Red 10 | `#ffe5e5` | bg-danger-weakest |
| Red 20 | `#ffabab` | |
| Red 30 | `#ff7272` | |
| Red 40 | `#ff3954` | |
| **Red 50** | **`#f50045`** | **Danger / Errors** |
| Red 60 | `#d60027` | |
| Red 70 | `#ad000e` | |
| Red 80 | `#850000` | |
| Red 90 | `#5c0000` | |
| Red 100 | `#330000` | |

### Purple Scale
| Step | Hex | Role |
|------|-----|------|
| Purple 10 | `#f1f0ff` | bg-purple-weakest |
| Purple 20 | `#cfc8ff` | |
| Purple 30 | `#b2a0ff` | |
| Purple 40 | `#9878ff` | |
| **Purple 50** | **`#8250ff`** | **Purple action / highlight** |
| Purple 60 | `#6f28ff` | |
| Purple 70 | `#5e00f5` | |
| Purple 80 | `#4900c2` | |
| Purple 90 | `#350085` | |
| Purple 100 | `#200047` | |

### Yellow Scale (Warning)
| Step | Hex | Role |
|------|-----|------|
| Yellow 10 | `#fffce0` | bg-warning-weakest |
| Yellow 20 | `#fff296` | |
| Yellow 30 | `#ffe04b` | |
| **Yellow 40** | **`#ffc400`** | **Brand warning / attention** |
| Yellow 50 | `#b37600` | warning text on light bg |
| Yellow 60 | `#995c00` | |
| Yellow 70 | `#804400` | |
| Yellow 80 | `#662d00` | |
| Yellow 90 | `#4d1b00` | |
| Yellow 100 | `#330c00` | |

### Additional Palettes (not yet extracted)
- **Aqua**: Aqua 10 `#e0fbff` → Aqua 50 `#00b0c8` → Aqua 100 (dark)
- **Orange**: Orange scale for warnings/highlights
- **Pink**: Pink scale for decorative use

### Company Logos (Kong)
Source: node `113:714`. Four variants:
1. **Icon only** — teal/aqua gradient mark (primary brand asset)
2. **Icon + wordmark** — teal icon + "Kong" in Blue 100 (#000933)
3. **Dark icon only** — Blue 100 mark for dark contexts
4. **Dark icon + wordmark** — Blue 100 mark + "Kong" wordmark

---

## Foundation — Typography

Source: `Foundation--Copy` Figma file, node `109:1243`. Detailed token specs from `Typography` Figma page.

### Typefaces
| Font | Use |
|------|-----|
| **Inter** | All UI text — headings, body, labels, UI elements |
| **JetBrains Mono** | Code blocks, monospace content |

### Heading Scale (Inter Bold, negative letter-spacing — token-based)
| Style | Font-Size Token | Size | Line-Height Token | LH | Letter-Spacing Token | LS | Margin-Bottom Token | MB |
|-------|-----------------|------|-------------------|----|---------------------|----|--------------------|----|
| `H1` | `font-size-70` | 32px | `line-height-60` | 40px | `letter-spacing-minus-50` | -1.5px | `space-70` | 24px |
| `H2` | `font-size-60` | 24px | `line-height-50` | 32px | `letter-spacing-minus-40` | -0.75px | `space-60` | 16px |
| `H3` | `font-size-50` | 20px | `line-height-40` | 28px | `letter-spacing-minus-30` | -0.5px | `space-50` | 12px |
| `H4` | `font-size-40` | 16px | `line-height-30` | 24px | `letter-spacing-minus-20` | -0.32px | `space-40` | 8px |
| `H5` | `font-size-30` | 14px | `line-height-30` | 24px | `letter-spacing-minus-10` | -0.07px | `space-30` | 4px |

All headings use `font-weight: 700` (bold) and `font-family: Inter`.

### Body Text Scale (Inter — 3 sizes × 4 weights)
| Style | Font-Size Token | Size | Line-Height Token | LH | Regular | Medium | SemiBold | Bold |
|-------|-----------------|------|-------------------|----|---------|--------|----------|------|
| `text/large` | `font-size-40` | 16px | `line-height-30` | 24px | 400 | 500 | 600 | 700 |
| `text/default` | `font-size-30` | 14px | `line-height-20` | 20px | 400 | 500 | 600 | 700 |
| `text/small` | `font-size-20` | 12px | `line-height-20` | 20px | 400 | 500 | 600 | 700 |

**Most common in UI**: `text/default/semibold` (14px/600) for labels, `text/default/regular` (14px/400) for body, `text/small/semibold` (12px/600) for badges/pills.

### Text Elements
- **Anchor (`<a>`)**: `color-text-primary` (#0044f4), underline on hover
- **Code (`<code>`)**: JetBrains Mono, `font-size-20` (12px), `color-background-neutral-weakest` background, 2px padding, `border-radius-10`
- **Description List (`<dl>`)**: `<dt>` bold 600, `<dd>` regular 400, vertical gap `space-40` (8px)
- **Horizontal Rule (`<hr>`)**: 1px solid `color-border`, margin `space-60` (16px) top/bottom
- **Paragraph (`<p>`)**: `font-size-30` (14px), `line-height-20` (20px), margin-bottom `space-40` (8px)
- **Small (`<small>`)**: `font-size-20` (12px), `color-text-neutral`
- **Lists (`<ul>`, `<ol>`)**: `font-size-30` (14px), `line-height-20` (20px), left-padding `space-70` (24px), item gap `space-30` (4px)

### Token Scale Summary
| Token | Value |
|-------|-------|
| `font-size-70` | 32px |
| `font-size-60` | 24px |
| `font-size-50` | 20px |
| `font-size-40` | 16px |
| `font-size-30` | 14px |
| `font-size-20` | 12px |
| `line-height-60` | 40px |
| `line-height-50` | 32px |
| `line-height-40` | 28px |
| `line-height-30` | 24px |
| `line-height-20` | 20px |
| `letter-spacing-minus-50` | -1.5px |
| `letter-spacing-minus-40` | -0.75px |
| `letter-spacing-minus-30` | -0.5px |
| `letter-spacing-minus-20` | -0.32px |
| `letter-spacing-minus-10` | -0.07px |

---

## Foundation — Icon System

Source: `Foundation--Copy` Figma file, node `104:13`. Detailed specs from `Icons` Figma page. Uses **Material Symbols** as base with custom additions. Package: `@kong/icons`.

### Material Symbols Settings
- **Style**: Outlined (default), Filled available
- **Weight**: 400
- **Grade**: 0
- **Optical Size**: 20px (matches default component size)

### Icon Variants
- **Solid** (filled) — primary variant for UI actions and navigation
- **Stroke** (outlined) — secondary/decorative use, status indicators

### Icon Catalog (~200+ icons in @kong/icons)

**Core UI Icons (60+):** `AddIcon`, `ArrowDownIcon`, `ArrowLeftIcon`, `ArrowRightIcon`, `ArrowUpIcon`, `BackIcon`, `BookIcon`, `BrainIcon`, `CalendarIcon`, `CheckIcon`, `CheckCircleIcon`, `ChevronDownIcon`, `ChevronLeftIcon`, `ChevronRightIcon`, `ChevronUpIcon`, `ClearIcon`, `ClipboardIcon`, `ClockIcon`, `CloseIcon`, `CloudIcon`, `CloudDownloadIcon`, `CloudUploadIcon`, `CodeIcon`, `CogIcon`, `CollapseIcon`, `CopyIcon`, `DangerIcon`, `DashboardIcon`, `DatabaseIcon`, `DocumentIcon`, `DownloadIcon`, `EditIcon`, `EmailIcon`, `ExpandIcon`, `ExternalLinkIcon`, `FilterIcon`, `FolderIcon`, `FullscreenIcon`, `GridIcon`, `HelpIcon`, `HistoryIcon`, `ImageIcon`, `InfoIcon`, `KeyIcon`, `LinkIcon`, `ListIcon`, `LocationIcon`, `LockIcon`, `MenuIcon`, `MoreIcon`, `NotificationIcon`, `OverviewIcon`, `PeopleIcon`, `PlugIcon`, `ProfileIcon`, `RefreshIcon`, `RemoveIcon`, `SearchIcon`, `SecurityIcon`, `ServicesIcon`, `TableIcon`, `TrashIcon`, `VisibilityIcon`

**Chart & Data Icons:** `AddChartIcon`, `AnalyticsIcon`, `BarChartIcon`, `BarChartHorizontalIcon`, `ChartAreaIcon`, `ChartDataIcon`, `ChartLinesIcon`, `DataObjectIcon`, `DataReportIcon`, `DataUsageIcon`, `InsightsIcon`, `TrendDownIcon`, `TrendUpIcon`

**Text Formatting Icons:** `BlockquoteIcon`, `BoldIcon`, `CodeSnippetIcon`, `ItalicIcon`, `MarkdownIcon`, `StrikethroughIcon`, `SubscriptIcon`, `SuperscriptIcon`, `UnderlineIcon`, `ListOrderedIcon`, `ListUnorderedIcon`

### Flags (32 sample countries)
Country flag icons for localization: `us`, `gb`, `de`, `fr`, `jp`, `cn`, `kr`, `in`, `br`, `ca`, `au`, `mx`, `it`, `es`, `nl`, `se`, `no`, `dk`, `fi`, `pl`, `pt`, `ch`, `at`, `be`, `ie`, `nz`, `sg`, `hk`, `tw`, `th`, `vn`, `id`

### Third-Party & Misc Icons (47 platforms + 5 gateways)
Platform/service icons for integrations: AWS, Azure, GCP, GitHub, GitLab, Bitbucket, Docker, Kubernetes, Terraform, Datadog, Splunk, New Relic, PagerDuty, Slack, Jira, Confluence, ServiceNow, Okta, Auth0, Cloudflare, Fastly, Akamai, Vercel, Netlify, Heroku, DigitalOcean, Linode, Vultr, OVH, Hetzner, CircleCI, Jenkins, TravisCI, ArgoCD, Helm, Istio, Envoy, Consul, Vault, Prometheus, Grafana, Elasticsearch, Redis, PostgreSQL, MongoDB, MySQL, Cassandra

Gateway icons: Kong Gateway, Kong Mesh, Kong Konnect, Kong Insomnia, Kong Dev Portal

### Usage Specs
| Property | Value |
|----------|-------|
| Default size | 20×20px |
| Small size | 16×16px (in pills, badges, compact UI) |
| Large size | 24×24px (in headers, empty states) |
| Color inheritance | `fill="currentColor"` — inherits from parent CSS `color` |
| Import pattern | `import { IconName } from '@kong/icons'` |
| Vue usage | `<IconName :size="20" color="var(--color-text-primary)" />` |
| Alignment | Vertically centered with adjacent text |

### Full Icon Name List
`account-tree`, `add`, `add-chart`, `add-circle`, `add-on-single`, `analytics`, `arrow-down`, `arrow-left`, `arrow-right`, `arrow-split`, `arrow-up`, `auto-layout`, `back`, `badge`, `bar-chart`, `bar-chart-horizontal`, `bar-chart-time`, `billing`, `blockquote`, `bold`, `book`, `bot`, `brain`, `cached`, `cal`, `chart-area`, `chart-data`, `chart-lines`, `check`, `check-circle`, `check-small`, `chevron-double-left`, `chevron-double-right`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `cleaning`, `clear`, `clipboard`, `clock`, `close`, `cloud`, `cloud-download`, `cloud-upload`, `code`, `code-snippet`, `codeblock`, `cog`, `cog-mode`, `collapse`, `colors`, `connections`, `copy`, `danger`, `danger-circle`, `dashboard`, `data-info-alert`, `data-object`, `data-report`, `data-usage`, `database`, `decrease`, `deploy`, `design`, `dev-portal`, `dice`, `disabled`, `document`, `document-list`, `download`, `drag`, `dynamic`, `edit`, `email`, `equal`, `events`, `expand`, `experiment`, `extension`, `external-link`, `feature-request`, `feedback`, `file-empty`, `filter`, `filter-off`, `flag`, `flat-fee`, `folder`, `forward`, `free`, `fullscreen`, `gateway`, `graduation`, `grid`, `help`, `history`, `html`, `image`, `immunity`, `inbox`, `inbox-notification`, `increase`, `indeterminate-small`, `info`, `insights`, `italic`, `key`, `keyboard-return`, `kong`, `library-add`, `link`, `linked-services`, `list`, `list-ordered`, `list-unordered`, `location`, `lock`, `mail`, `mail-send`, `mark`, `markdown`, `menu`, `mesh`, `money`, `more`, `more-horizontal`, `nested`, `network`, `notification`, `numeric-value`, `organization`, `overview`, `package`, `panel-close-left`, `panel-close-right`, `panel-open-left`, `panel-open-right`, `pass-key`, `people`, `phone`, `pin`, `pin-outline`, `plans`, `plug`, `popular`, `portal`, `presentation`, `profile`, `profile-team`, `progress`, `redo`, `refresh`, `regex`, `remove`, `response`, `rocket`, `rule`, `runtimes`, `search`, `security`, `service-document`, `service-hub`, `services`, `shared`, `stack`, `strikethrough`, `subscript`, `superscript`, `support`, `swap-sort`, `table`, `table-columns`, `table-rows`, `tablet`, `tasklist`, `team`, `teammate`, `thumb-down`, `thumb-down-fill`, `thumb-up`, `thumb-up-fill`, `tiered`, `toggle-on`, `traffic`, `transformation`, `trash`, `trend-down`, `trend-up`, `tune`, `tv`, `underline`, `undo`, `unfold-less`, `unfold-more`, `upload`, `usage`, `visibility`

---

## Design Tokens (`@kong/design-tokens`)

### CSS Variable Format
```css
/* Pattern: CSS variable with SCSS fallback */
color: var(--kui-color-text-primary, $kui-color-text-primary);
```

### Token Prefixes
- Colors: `--kui-color-text-*`, `--kui-color-background-*`, `--kui-color-border-*`
- Status: `danger`, `success`, `warning`, `info` variants
- Spacing: `--kui-space-*`
- Typography: `--kui-font-*`

### JS/TS Import
```ts
import { KUI_COLOR_BACKGROUND_PRIMARY_STRONG } from '@kong/design-tokens'
```

---

## Theming

- **Global**: Override CSS variables at `:root`
- **Scoped**: Override within specific selectors
- **Dynamic**: Set via JavaScript at runtime

```css
:root {
  --kui-color-text-primary: green;
}
table .my-table-row {
  --kui-color-text-primary: purple;
}
```

---

## Common Props Pattern
| Prop | Values | Notes |
|------|--------|-------|
| size | small, medium (default), large | Most components |
| appearance | primary, secondary, tertiary, danger, none | Buttons/alerts |
| disabled | boolean | All interactive components |
| readonly | boolean | Form inputs |
| v-model | varies | Two-way binding |
| hasError | boolean | Form validation |
| errorMessage | string | Error display |

## Common Events
`@click`, `@input`, `@change`, `@focus`, `@blur`

---

## Icon Names (`@kong/icons`)

Icons are imported individually from `@kong/icons` as PascalCase components (e.g. `import { AddIcon } from '@kong/icons'`). The Figma design system icon name is shown in parentheses where it differs from the component name.

### Core Icons (72)

| Component | Figma name | Component | Figma name |
|---|---|---|---|
| `AddIcon` | add | `AddCircleIcon` | add-circle |
| `ArrowDownIcon` | arrow-down | `ArrowLeftIcon` | arrow-left |
| `ArrowRightIcon` | arrow-right | `ArrowUpIcon` | arrow-up |
| `BackIcon` | back | `BarChartIcon` | bar-chart |
| `BookIcon` | book | `BotIcon` | bot |
| `BrainIcon` | brain | `CalendarIcon` | cal ⚠️ |
| `CheckIcon` | check | `CheckCircleIcon` | check-circle |
| `CheckSmallIcon` | check-small | `ChevronDownIcon` | chevron-down |
| `ChevronLeftIcon` | chevron-left | `ChevronRightIcon` | chevron-right |
| `ChevronUpIcon` | chevron-up | `ClearIcon` | clear |
| `ClipboardIcon` | clipboard | `ClockIcon` | clock |
| `CloseIcon` | close | `CloudHybridIcon` | cloud ⚠️ |
| `CogwheelIcon` | cog ⚠️ | `CollapseIcon` | collapse |
| `ConnectionsIcon` | connections | `CopyIcon` | copy |
| `DangerCircleIcon` | danger-circle | `DashboardIcon` | dashboard |
| `DevPortalIcon` | dev-portal | `DisabledIcon` | disabled |
| `DocumentIcon` | document | `DocumentListIcon` | document-list |
| `DragIcon` | drag | `ExpandIcon` | expand |
| `ExternalLinkIcon` | external-link | `FeatureRequestIcon` | feature-request |
| `FileEmptyIcon` | file-empty | `FilterIcon` | filter |
| `FlagIcon` | flag | `GraduationIcon` | graduation |
| `GridIcon` | grid | `HelpIcon` | help |
| `ImageIcon` | image | `InboxIcon` | inbox |
| `IndeterminateSmallIcon` | indeterminate-small | `InfoIcon` | info |
| `ListIcon` | list | `LockIcon` | lock |
| `MoreIcon` | more | `MoreHorizontalIcon` | more-horizontal |
| `NotificationIcon` | notification | `PanelCloseLeftIcon` | panel-close-left |
| `PeopleIcon` | people | `PlugIcon` | plug |
| `PortalIcon` | portal | `PresentationIcon` | presentation |
| `ProfileIcon` | profile | `RedoIcon` | redo |
| `RuntimesIcon` | runtimes | `SearchIcon` | search |
| `SecurityIcon` | security | `ServiceDocumentIcon` | service-document |
| `ServiceHubIcon` | service-hub | `ServicesIcon` | services |
| `SharedIcon` | shared | `SupportIcon` | support |
| `TeammateIcon` | teammate | `TrashIcon` | trash |
| `VitalsIcon` | vitals | `WarningIcon` | warning |

> ⚠️ **Figma/component name divergences:** `cal` → `CalendarIcon`, `cog` → `CogwheelIcon`, `cloud` → `CloudHybridIcon`

### Misc / Platform Icons (52)

| Component | Figma name | Component | Figma name |
|---|---|---|---|
| `AmazonBedrockIcon` | amazon-bedrock | `AnthropicIcon` | anthropic |
| `AppleIcon` | apple | `Auth0Icon` | auth0 |
| `AwsIcon` | aws | `AzureIcon` | azure |
| `CohereIcon` | cohere | `ConjourIcon` | conjour |
| `ControlPlaneGroupIcon` | control-plane-group | `CurityIcon` | curity |
| `DatadogIcon` | datadog | `DedicatedCloudIcon` | dedicated-cloud |
| `DockerIcon` | docker | `DynatraceIcon` | dynatrace |
| `EventIcon` | event | `GeminiIcon` | gemini |
| `GithubIcon` | github | `GitlabIcon` | gitlab |
| `GoogleIcon` | google | `GoogleCloudIcon` | google-cloud |
| `GrafanaIcon` | grafana | `GrokIcon` | grok |
| `HashicorpIcon` | hashicorp | `HuggingFaceIcon` | hugging-face |
| `IncidentIoIcon` | incident-io | `JiraIcon` | jira |
| `KongGradientIcon` | kong-gradient | `KongIngressControllerIcon` | kong-ingress-controller |
| `LinuxIcon` | linux | `MetaLlamaIcon` | meta-llama |
| `MicrosoftIcon` | microsoft | `MicrosoftTeamsIcon` | microsoft-teams |
| `MistralIcon` | mistral | `NewRelicIcon` | new-relic |
| `OktaIcon` | okta | `OpenAiIcon` | open-ai |
| `OpsgenieIcon` | opsgenie | `PagerdutyIcon` | pagerduty |
| `RedhatIcon` | redhat | `SaltSecurityIcon` | salt-security |
| `SelfManagedIcon` | self-managed | `ServerlessIcon` | serverless |
| `ServicenowIcon` | servicenow | `SlackIcon` | slack |
| `SnykIcon` | snyk | `SonarIcon` | sonar |
| `SparklesIcon` | sparkles | `SplunkIcon` | splunk |
| `SwaggerhubIcon` | swaggerhub | `TraceableIcon` | traceable |
| `UbuntuIcon` | ubuntu | `WindowsIcon` | windows |

### Gateway Icons (6)

| Component | Figma name |
|---|---|
| `ControlPlaneGroupIcon` | control-plane-group |
| `DedicatedCloudIcon` | dedicated-cloud |
| `EventIcon` | event |
| `KongIngressControllerIcon` | kong-ingress-controller |
| `SelfManagedIcon` | self-managed |
| `ServerlessIcon` | serverless |

> Gateway icons are a subset of the Misc icons, surfaced separately in the Figma "04. Misc → Gateways" section. Country flag icons are also available via `@kong/icons` but not listed here.

---

## Filter Patterns (Konnect Design System)

The Konnect filter system is a standardized toolbar pattern used across all list/table/catalog views. Source: `Filter patterns` Figma file. Comprehensive specs derived from 7 Figma references covering pill states, layout, truncation, variations, filter types, sticky persistence, and add-filter flows.

### 1. Filter Pill Component States

Filter pills have two primary states: **unapplied** (applied=False) and **applied** (applied=True). Each has Default, Hover, and Focus sub-states.

**Pill base specs:** `height: 28px`, `padding: 0 8px`, `border-radius: 4px`, `font-size: 12px`, `font-weight: 600`, `cursor: pointer`, `white-space: nowrap`.

**Unapplied (applied = False):**

| Sub-state | Background | Border | Text | Extra |
|-----------|-----------|--------|------|-------|
| Default | `color-background-neutral-weakest` (#f9fafb) | 1px **dashed** `color-border` (#e0e4ea) | #3a3f51 | Shows: filter name + `ChevronDownIcon` |
| Hover | same | 1px **dashed** `color-border-primary` (#0044f4) | same | Border color changes to primary |
| Focus | same | 1px **dashed** `color-border-primary` (#0044f4) | same | `box-shadow: 0 0 0 4px rgba(0,68,244,0.2)` |

**Applied (applied = True):**

| Sub-state | Background | Border | Text | Extra |
|-----------|-----------|--------|------|-------|
| Default | `color-background-primary-weakest` (#eefaff) | 1px **solid** `color-border-primary` (#0044f4) | `color-text-primary` (#0044f4) | Format: "Key: **Value**" + close (×) button |
| Hover | `color-background-primary-weaker` (#bee2ff) | same | same | Background brightens |
| Focus | same as default | same | same | `box-shadow: 0 0 0 4px rgba(0,68,244,0.2)` |

**Close Button States:**

| Sub-state | Background | Border | Extra |
|-----------|-----------|--------|-------|
| Default | transparent | none | `border-radius: 50%`, icon: `CloseIcon` 12px |
| Hover | `rgba(0, 68, 244, 0.1)` | none | Circular hover bg |
| Focus | transparent | none | `box-shadow: 0 0 0 2px rgba(0,68,244,0.2)` |

### 2. Search + Filter Bar Layout

```
[ 🔍 Search (300px fixed) ] │ [Pill ▾] [Pill: Value ×] [More filters +]
 ←── 300px ──────────────→  ↑  ←── fills remaining width ──────────────→
                           divider
```

| Property | Value |
|----------|-------|
| Search width | 300px (fixed, `flex-shrink: 0`) |
| Gap (search → divider) | 24px |
| Divider | 1px × 24px, `color-border` (#e0e4ea) |
| Pill gap | 8px between pills |
| Toolbar padding | 12px |
| Toolbar border | 1px solid `color-border`, `border-radius: 8px` |
| Overflow behavior | Filters area scrolls horizontally when overflowing |

### 3. Truncation Rules

- **Max pill width**: 240px — text truncates with ellipsis; full value shown in tooltip on hover
- **Multi-value collapse**: When more than 2 values are selected, pill shows count format: "**n items**" instead of listing all values. Tooltip shows the complete list.
- **Tooltip**: Dark background (#1a1e2a), white text, 12px, `border-radius: 4px`, appears above pill with arrow pointer

### 4. Filter Popover

When a pill is clicked, a popover appears anchored below the pill:

```
┌─────────────────────────────────────┐
│ Filter Name                        ✕│   ← Title bar: 14px semibold, close icon
├─────────────────────────────────────┤
│ [Operator ▾]   [Value input       ] │   ← Operator: 100px | Value: 252px
│  (100px)           (252px)          │
├─────────────────────────────────────┤
│                   [Cancel] [Apply]  │   ← Actions: right-aligned
└─────────────────────────────────────┘
```

**Popover specs:** `width: 376px`, `border-radius: 8px`, `box-shadow: 0 4px 16px rgba(0,0,0,0.1)`, `border: 1px solid color-border`.
- **Header**: `padding: 12px 16px`, `border-bottom: 1px solid color-border`
- **Body**: `padding: 16px`, `gap: 12px` flex row
- **Footer**: `padding: 12px 16px`, `border-top: 1px solid color-border`, flex end
- **Cancel button**: secondary style, `border: 1px solid color-border`
- **Apply button**: primary style, `background: color-primary-60`, white text

### 5. Variations

**No Quick Filters:**
- Only a search bar and a "More filters+" button (using `AddIcon`)
- All filters are added from the dropdown menu
- Dropdown lists available filter dimensions (14px, plain text, hover bg: gray-10)

**1 Quick Filter:**
- One pre-configured quick filter pill appears unapplied by default
- Click to open popover → select value → Apply → pill becomes applied
- "More filters+" available for additional filters

**2–3 Quick Filters:**
- Multiple pre-configured quick filter pills, each independently applied
- All start as unapplied (dashed border)
- Each can be clicked to open its own popover
- "More filters+" always appears last for additional filters beyond the quick set

### 6. Common Filter Types

**Select + Input (string-based filters):**
- Operator dropdown (100px): `is`, `is not`, `starts with`, `ends with`, `contains`
- Value: free-text KInput (252px)
- Used for: Name, ID, URL, description filters

**Select + Multiselect (enum-based filters):**
- Operator dropdown (100px): `is one of`, `is not one of`
- Value: checkbox list with primary fill when checked (252px)
- Shows selected count in footer
- Used for: Environment, Tags, Region filters

**Boolean (binary filters):**
- Operator dropdown (100px): `is`, `is not`
- Value: single select dropdown (252px) with two options (e.g., Enabled/Disabled)
- Used for: Status, Active/Inactive filters

### 7. Sticky Filter Flow

Filters persist across page navigation within the same context:
1. User is on a list page with no filters applied
2. User applies a filter (e.g., Status: Enabled)
3. User navigates to a different page — filter persists in the bar
4. User returns to original page — filter is still active
5. User can modify the filter value without re-adding
6. Results update to reflect the modified filter

### 8. Adding Filter Flow

Step-by-step flow for adding a new filter:
1. **Starting state**: Filter bar with search and existing quick filters (unapplied)
2. **Click "More filters+"**: Dropdown appears with available filter options
3. **Select a filter**: User picks a filter — popover opens with operator + value fields
4. **Choose operator**: User selects operator from dropdown (e.g., "is one of")
5. **Select values**: User picks value(s) from input or multiselect
6. **Apply filter**: User clicks Apply — pill appears as applied with selected values
7. **Final state**: Filter bar shows the new applied pill alongside existing filters

### 9. Filter Interaction Summary

| Action | Result |
|--------|--------|
| Click unapplied pill | Opens popover with empty operator + value |
| Click applied pill | Opens popover with current values pre-filled |
| Click × on applied pill | Clears value, returns pill to unapplied state |
| Click "More filters+" | Opens dropdown with available filter dimensions |
| Select from dropdown | Opens popover for that filter type |
| Click Cancel in popover | Closes popover, no changes |
| Click Apply in popover | Applies filter, pill changes to applied state |

---

## Alerts (`KAlert`)

Source: `Components--Copy` Figma file, node `1105:733`

### Overview
An Alert is a banner that notifies users of high-priority or time-sensitive information. It renders as a full-width (or container-width) horizontal strip with an optional left icon, message text, optional title, and optional dismiss (close) button on the right.

```
[ icon? ] [ title (opt) + message text ] [ × close? ]
```

### Props
| Prop | Type | Default | Options |
|------|------|---------|---------|
| `appearance` | string | `"Info"` | `"Info"` `"Success"` `"Warning"` `"Danger"` `"Decorative"` |
| `showIcon` | boolean | `false` | Shows predefined appearance icon on the left (20×20px) |
| `showTitle` | boolean | `false` | Shows bold title above the message text |
| `title` | string | `"Alert title"` | Title string (only visible when `showTitle` is true) |
| `showClose` | boolean | `true` | Shows × dismiss button on the right (20×20px) |

### Layout & Spacing
| Property | Token | Value |
|----------|-------|-------|
| Padding (all sides) | `--space-50` | **12px** |
| Gap between icon / content / close | `--space-30` | **6px** |
| Border radius | `--border-radius-30` | **6px** |
| Min height (no title) | — | **44px** |
| Min height (with title) | — | **~70px** |
| Icon size (left + close) | — | **20×20px** |
| Content area | — | `flex: 1` (fills remaining width) |
| Items alignment | — | `items-start` (top-aligned) |

### Appearance Variants

All 5 variants share the same structure — only background, text color, and icon change.

| Appearance | Background token | Background hex | Text token | Text hex |
|------------|-----------------|---------------|-----------|---------|
| **Info** | `color-background-info-weakest` | `#eefaff` (Blue 10) | `color-text-info` | `#0044f4` (Blue 60) |
| **Success** | `color-background-success-weakest` | `#ecfffb` (Green 10) | `color-text-success` | `#007d60` (Green 60) |
| **Warning** | `color-background-warning-weakest` | `#fffce0` (Yellow 10) | `color-text-warning` | `#995c00` (Yellow 60) |
| **Danger** | `color-background-danger-weakest` | `#ffe5e5` (Red 10) | `color-text-danger` | `#d60027` (Red 60) |
| **Decorative** | `color-background-decorative-purple-weakest` | `#f1f0ff` (Purple 10) | `color-text-decorative-purple` | `#6f28ff` (Purple 60) |

> Note: Danger text `#d60027` is **Red 60** (not Red 50 `#f50045`). Use `#d60027` for alert text to maintain legibility on the light danger background. Same pattern for Success: text is **Green 60** `#007d60`, not Green 50.

### Icon per Appearance
Each appearance has a **predefined, non-configurable icon** — it cannot be swapped.

| Appearance | Icon name | Notes |
|------------|-----------|-------|
| Info | `info` | Info circle |
| Success | `check-circle` | Checkmark in circle |
| Warning | `warning` | Warning triangle |
| Danger | `danger` | Exclamation / danger mark |
| Decorative | `rocket` | Rocket icon |

### Typography
| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Message body | Inter | 14px | Regular (400) | 20px | 0px |
| Title (optional) | Inter | 14px | Semi Bold (600) | 20px | 0px |
| Close icon | — | 20×20px SVG | — | — | — |

Title and body share the same color as determined by the `appearance` variant.

### Visual Reference (no icon, with close)
```
┌──────────────────────────────────────────────────── ✕ ┐  ← Info:     bg #eefaff, text/icon #0044f4
│  Check out our documentation to learn more...         │
└───────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────── ✕ ┐  ← Success:  bg #ecfffb, text/icon #007d60
│  The package was successfully updated.                 │
└───────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────── ✕ ┐  ← Warning:  bg #fffce0, text/icon #995c00
│  You have 3 days remaining in your current plan.       │
└───────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────── ✕ ┐  ← Danger:   bg #ffe5e5, text/icon #d60027
│  This action cannot be undone, proceed with caution.   │
└───────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────── ✕ ┐  ← Decorative: bg #f1f0ff, text/icon #6f28ff
│  Learn more about Kong's features.                     │
└───────────────────────────────────────────────────────┘
```

### With Icon + Title
```
┌─────────────────────────────────────────────────── ✕ ─┐
│ [ⓘ]  Alert title (SemiBold 14px)                      │  ← h ~70px
│       Body message text (Regular 14px)                 │
└───────────────────────────────────────────────────────┘
```

### Usage in Prototypes / ClaudeDesigner
When building alert components:
- Background uses the weakest shade of the semantic color scale (step 10)
- Text and icon use a darker shade for contrast (typically step 60)
- No visible border in any variant (background color alone provides context)
- The × close icon matches the appearance text color
- `flex-direction: row`, `align-items: flex-start`, `padding: 12px`, `gap: 6px`, `border-radius: 6px`

---

## Badges (`KBadge` + Method Badge)

Source: `Components--Copy` Figma file, node `467:10283`

There are two distinct badge types in the system: the general-purpose **Badge** and the specialized **Method Badge** for HTTP verbs.

---

### Badge (`KBadge`)

A small inline label used to communicate status, category, or metadata. Always 12px Semi Bold, never wraps — truncate with `overflow: clip`.

#### Structure
```
[ icon-left? ] [ Label text ] [ icon-right? ]
```

#### Props
| Prop | Type | Default | Options |
|------|------|---------|---------|
| `appearance` | string | `"Info"` | `"Info"` `"Success"` `"Warning"` `"Danger"` `"Neutral"` `"Decorative"` `"New"` |
| `size` | string | `"Default"` | `"Default"` `"Small"` |
| `label` | string | `"Label"` | Display text |
| `showIconLeft` | boolean | `false` | Optional left icon |
| `showIconRight` | boolean | `false` | Optional right icon (defaults to × close) |
| `iconLeft` / `iconRight` | node | — | Custom icon slot |

#### Sizes
| Size | Height | Padding (H / V) | Icon-left | Icon-right |
|------|--------|-----------------|-----------|------------|
| **Default** | 24px | `8px / 4px` (`--space-40` / `--space-20`) | 16×16px | 12×12px |
| **Small** | 20px | `4px / 2px` (`--space-20` / `--space-10`) | 12×12px | 12×12px |

#### Shared layout
| Property | Token | Value |
|----------|-------|-------|
| Border radius | `--border-radius-20` | **4px** |
| Gap (icon ↔ text ↔ icon) | `--space-40` | **8px** |
| Overflow | — | `clip` |
| Font | Inter Semi Bold | 12px / line-height 16px / letter-spacing 0px |
| Text | — | `whitespace-nowrap` (single line, no wrap) |

#### Appearance Variants
| Appearance | BG token | BG hex | Text token | Text hex |
|------------|---------|--------|-----------|---------|
| **Info** | `color-background-info-weakest` | `#eefaff` (Blue 10) | `color-text-info` | `#0044f4` (Blue 60) |
| **Success** | `color-background-success-weakest` | `#ecfffb` (Green 10) | `color-text-success` | `#007d60` (Green 60) |
| **Warning** | `color-background-warning-weakest` | `#fffce0` (Yellow 10) | `color-text-warning` | `#995c00` (Yellow 60) |
| **Danger** | `color-background-danger-weakest` | `#ffe5e5` (Red 10) | `color-text-danger` | `#d60027` (Red 60) |
| **Neutral** | `color-background-neutral-weaker` | `#e0e4ea` (Gray 20) | `color-text-neutral-strong` | `#52596e` (Gray 70) |
| **Decorative** | `color-background-decorative-purple-weakest` | `#f1f0ff` (Purple 10) | `color-text-decorative-purple` | `#6f28ff` (Purple 60) |
| **New** ✦ | gradient (see below) | — | `color-text-inverse` | `#ffffff` (white) |

> **Note:** Neutral uses **Gray 20** (`#e0e4ea`) as background — one step darker than the page bg — and **Gray 70** (`#52596e`) text, not the standard secondary gray.

#### "New" Badge — Special Treatment
The `New` badge is the only variant with a gradient background and a visible border.

- **Background**: `linear-gradient(~205°, rgba(0,214,164,0.16) 0%, rgba(0,68,244,0.16) 74.54%)` — Green 40 → Blue 60 at 16% opacity each
- **Border**: `1px solid #00d6a4` (Green 40)
- **Text**: white (`color-text-inverse`) — Semi Bold 12px
- Used specifically to highlight newly released features or plan tiers

#### Visual Reference
```
Default size (h=24px):
┌── 8px ──┬──────────────┬── 8px ──┐
│         │    Label     │         │  h=24px, br=4px
└─────────┴──────────────┴─────────┘

  Info:       bg #eefaff   text #0044f4  (blue)
  Success:    bg #ecfffb   text #007d60  (green)
  Warning:    bg #fffce0   text #995c00  (yellow/brown)
  Danger:     bg #ffe5e5   text #d60027  (red)
  Neutral:    bg #e0e4ea   text #52596e  (gray)
  Decorative: bg #f1f0ff   text #6f28ff  (purple)
  New:        bg gradient  text #ffffff  border #00d6a4
```

---

### Method Badge

A fixed-width badge specifically for HTTP method labels. Always **80px wide**, **ALL CAPS** text, centered. Used in API Gateway / Dev Portal route listings.

#### Layout
| Property | Value |
|----------|-------|
| Width | **80px** (fixed) |
| Height | **24px** |
| Padding | `4px` vertical, `0px` horizontal (text centered) |
| Border radius | `4px` (`--border-radius-20`) |
| Font | Inter Semi Bold 12px, line-height 16px, ALL CAPS |
| Text alignment | Center (`justify-content: center`) |

#### Method Variants
| Method | BG hex | Text hex | Notes |
|--------|--------|---------|-------|
| **GET** | `#ecfffb` (Green 10) | `#007d60` (Green 60) | |
| **POST** | `#eefaff` (Blue 10) | `#0044f4` (Blue 60) | |
| **PUT** | `#fffce0` (Yellow 10) | `#995c00` (Yellow 60) | |
| **DELETE** | `#ffe5e5` (Red 10) | `#d60027` (Red 60) | |
| **PATCH** | `#ecfcff` (Aqua 10) | `#00819d` (Aqua 60) | Uses Aqua scale |
| **OPTIONS** | `#e0e4ea` (Gray 20) | `#52596e` (Gray 70) | Same as Neutral badge |
| **HEAD** | `#52596e` (Gray 70) | `#e0e4ea` (Gray 20) | **Inverted** — dark bg, light text |
| **CONNECT** | `#f1f0ff` (Purple 10) | `#6f28ff` (Purple 60) | Same as Decorative badge |
| **TRACE** | `#fff0f7` (Pink 10) | `#d60067` (Pink/magenta) | Uses Pink scale |
| **CUSTOM** | `#afb7c5` (Gray 40) | `#000933` (Blue 100 / primary text) | Neutral gray, no color signal |

> **Important quirks:**
> - **HEAD** is the only inverted variant — dark background with a light text color
> - **PATCH** and **TRACE** introduce the **Aqua** and **Pink** color scales (not yet fully documented in Foundation)
> - Aqua text `#00819d` and Pink text `#d60067` are their respective step-60 values

#### Visual Reference
```
┌──────────────────┐
│       GET        │  bg #ecfffb, text #007d60 (green)
├──────────────────┤
│       POST       │  bg #eefaff, text #0044f4 (blue)
├──────────────────┤
│       PUT        │  bg #fffce0, text #995c00 (yellow)
├──────────────────┤
│      DELETE      │  bg #ffe5e5, text #d60027 (red)
├──────────────────┤
│      PATCH       │  bg #ecfcff, text #00819d (aqua)
├──────────────────┤
│     OPTIONS      │  bg #e0e4ea, text #52596e (gray)
├──────────────────┤
│       HEAD       │  bg #52596e, text #e0e4ea (INVERTED)
├──────────────────┤
│     CONNECT      │  bg #f1f0ff, text #6f28ff (purple)
├──────────────────┤
│      TRACE       │  bg #fff0f7, text #d60067 (pink)
├──────────────────┤
│      CUSTOM      │  bg #afb7c5, text #000933 (neutral)
└──────────────────┘
  Fixed w=80px, h=24px, br=4px
```

---

### Breadcrumbs (`KBreadcrumbs`)

Kong has **two distinct breadcrumb components** with different purposes, typography, and structure.

---

#### Global Breadcrumb

**Purpose:** Shows the navigation path *from root to the parent of the current page*. Sits directly above the page `<h1>` title. The current page itself is NOT shown in the breadcrumb — it becomes the H1 below it. Always ends with a trailing `/` separator.

**Structure:** `[Home Icon + Level 1 text] / [Level 2 text] / [Level 3 text] / …`

| Property | Value |
|---|---|
| Height | 20px |
| Gap between level groups | 4px (`--space-20`) |
| Gap within level (icon + text) | 6px (`--space-30`) |
| Font | Inter **Medium** (500) |
| Font size | 14px (`--font-size-30`) |
| Line height | 20px (`--line-height-30`) |
| Letter spacing | 0px (`--letter-spacing-0`) |

**Colors:**

| Element | Token | Hex |
|---|---|---|
| Crumb text (all ancestors) | `--text-colors/neutral/color-text-neutral` | `#6c7489` |
| Separator `/` | `--text-colors/neutral/color-text-neutral-weak` | `#afb7c5` |

**Icon (Level 1 only):**
- Home/cloud icon, 16×16px
- Appears only on the first (root) crumb, left of the Level 1 text

**Separator:**
- Character: `/` (plain forward slash)
- Font: Inter Regular (400), 14px
- Color: `#afb7c5`
- Container: 5px wide × 20px tall

**Levels (1–4 variants):**
```
Level 1:  [🏠 Parent] /
Level 2:  [🏠 Parent] / Child /
Level 3:  [🏠 Grandparent] / Parent / Child /
Level 4:  [🏠 Grandparent ] / Parent / Child / Grandchild /
```

#### Visual Reference
```
[☁ Parent] /
[☁ Parent] / Child /
[☁ Grandparent] / Parent / Child /
[☁ Grandparent] / Parent / Child / Grandchild /
```
All text in #6c7489, separators in #afb7c5, trailing separator always present.

---

#### Contextual Breadcrumb

**Purpose:** Shows the full hierarchy *including* the currently selected/active page. Used within tabbed interfaces or nested sections for local navigation context. The final crumb represents the current location and is visually distinct (bold dark navy).

**Structure:** `Parent / Child / … / Selected`

| Property | Value |
|---|---|
| Height | 20px |
| Gap between all items | 4px |
| Alignment | `items-center` (vertically centered) |
| No home icon | — |
| Font | Inter **Bold** (700) |
| Font size | 14px |
| Line height | 20px |
| Letter spacing | **−0.14px** (tighter than Global) |
| Font feature settings | `'liga' 0` (ligatures disabled) |

**Colors:**

| Element | Token | Hex |
|---|---|---|
| **Selected** (current page, last crumb) | `--text-colors/color-text` | `#000933` (near-black navy) |
| Ancestor crumbs | `--text-colors/neutral/color-text-neutral` | `#6c7489` |
| Separator `/` | `--text-colors/neutral/color-text-neutral-weak` | `#afb7c5` |

**Separator:**
- Character: `/` (plain forward slash)
- Font: Inter Regular (400) — note: separator is lighter weight than crumb text
- Color: `#afb7c5`

**Levels (1–4 variants):**
```
Level 1:  Selected
Level 2:  Parent / Selected
Level 3:  Parent / Child / Selected
Level 4:  Parent / Child / Grandchild / Selected
```

#### Visual Reference
```
Selected
Parent / Selected
Parent / Child / Selected
Parent / Child / Grandchild / Selected
```
Ancestors in #6c7489 (medium gray), "Selected" in #000933 (dark navy), separators in #afb7c5 (light gray).

---

#### Parts

**`.Separator`** — Reusable separator element
- Content: `/` character
- Size: 5px wide × 20px tall
- Font: Inter Regular, 14px
- Color: `#afb7c5` (color-text-neutral-weak)

**`.Crumb`** — Reusable crumb element (used in Contextual Breadcrumb)
- `Selected=False`: `#6c7489` ancestor style
- `Selected=True`: `#000933` current-page style, Bold 700

---

#### Comparison: Global vs Contextual

| Property | Global Breadcrumb | Contextual Breadcrumb |
|---|---|---|
| Use case | Above H1 page title | Within tabbed/nested sections |
| Current page shown? | ❌ No (H1 acts as current page) | ✅ Yes (last crumb = "Selected") |
| Font weight | Medium (500) | Bold (700) |
| Letter spacing | 0px | −0.14px |
| Home icon | ✅ Level 1 has icon (16×16) | ❌ None |
| Trailing separator | ✅ Always | ❌ No trailing separator |
| Ancestor color | `#6c7489` | `#6c7489` |
| Current page color | N/A | `#000933` |
| Separator color | `#afb7c5` | `#afb7c5` |

---

### Buttons (`KButton`)

**Component types:** Button (text only), Icon Button (icon + text), Icon Only

**Base typography:** Inter **Semi Bold** (600), 0px letter spacing
**Icon-to-text gap:** `space-30` (6px)
**Border:** Inside the component bounds (overflow-clip — border does not add to element height)

---

#### Appearances

| Appearance | Background token | Border token | Text token | BG hex | Border hex | Text hex |
|---|---|---|---|---|---|---|
| **Primary** | `color-background-primary` | `color-border-primary` | `color-text-inverse` | `#0044f4` | `#0044f4` | white |
| **Secondary** | `color-background-transparent` | `color-border-primary` | `color-text-primary` | transparent | `#0044f4` | `#0044f4` |
| **Tertiary** | `color-background-transparent` | `color-border-transparent` | `color-text-primary` | transparent | transparent | `#0044f4` |
| **Danger** | `color-background-danger` | `color-border-danger` | `color-text-inverse` | `#d60027` | `#d60027` | white |

---

#### Sizes

| Property | Large | Medium (default) | Small |
|---|---|---|---|
| Height | 40px | 32px | 22px |
| Padding top/bottom | `space-30` | `space-20` (6px) | `space-10` |
| Padding left/right | — | `space-40` (10px) | — |
| Border width | `border-width-20` (2px) | `border-width-20` (2px) | `border-width-10` (1px) |
| Border radius | `border-radius-30` (6px) | `border-radius-30` (6px) | `border-radius-20` (4px) |
| Font size | `font-size-40` (16px) | `font-size-30` (14px) | `font-size-20` (12px) |
| Line height | `line-height-40` (24px) | `line-height-30` (20px) | `line-height-20` (16px) |
| Icon size | — | 20×20px | 16×16px |

**Usage guidance:**
- **Large** — use sparingly; only when vertical density is less of a problem (e.g. fullscreen modals)
- **Medium** — default for most actions
- **Small** — use sparingly; only when needed for vertical density

---

### Checkboxes (`KCheckbox`)

**Box size:** 16×16px
**Border radius:** `border-radius-20` (4px)

> ⚠️ **Architecture note:** Checkbox borders are implemented as `box-shadow: inset` — NOT CSS `border`. This avoids box-model layout shifts.
> - `shadow-border` = `inset 0 0 0 1px #e0e4ea`
> - `shadow-border-primary` = `inset 0 0 0 1px #0044f4`

---

#### Types

| Type | Icon | Background token | Box-shadow token | BG hex |
|---|---|---|---|---|
| **Unchecked** | none | `color-background` | `shadow-border` | white |
| **Checked** | `check-small` (16×16px) | `color-background-primary` | `shadow-border-primary` | `#0044f4` |
| **Indeterminate** | `indeterminate-small` (16×16px) | `color-background-primary` | `shadow-border-primary` | `#0044f4` |

---

#### States

7 states: Default, Hover, Focus (uses 2 combined box-shadows — top layer noted in Figma), Active, Disabled, Error, Error Focus

---

#### Label & Help Text

| Element | Font | Weight | Size | Line height | Letter spacing | Color token | Color hex |
|---|---|---|---|---|---|---|---|
| Label | Inter | Semi Bold 600 | `font-size-30` (14px) | `line-height-30` (20px) | `letter-spacing-0` (0px) | `color-text` | `#000933` |
| Help text | Inter | Regular 400 | 12px | 16px | 0px | `color-text-neutral` | `#6c7489` |

---

#### Spacing & Layout

| Property | Token | Value |
|---|---|---|
| Gap: checkbox → label | `space-40` | 8px |
| Gap: between checkbox group items | `space-20` | 4px |
| Checkbox container vertical padding | — | 2px (aligns box center with label) |
| Help text left indent | `space-80` | 24px (= 16px box + 8px gap; aligns under label) |
| Margin top/bottom | `space-10` | — |
| Margin right | `space-40` | 8px |

---

### Cards (`KCard`)

**Description:** "A Card is a styled container that groups related content and actions."

Single component (no size or appearance variants). Overflow clips content.

---

#### Container Tokens

| Property | Token | Value |
|---|---|---|
| Background | `color-background` | white |
| Border color | `color-border` | `#e0e4ea` |
| Border width | `border-width-10` | 1px |
| Border radius | `border-radius-30` | 6px |
| Padding (all sides) | `space-70` | ~20–21px |
| Gap between card sections | `space-70` | 20px |
| Overflow | — | `overflow-clip` |

---

#### Typography

| Element | Font | Weight | Size | Line height | Letter spacing | Color token | Hex |
|---|---|---|---|---|---|---|---|
| Title | Inter | Bold 700 | 16px (`font-size-40`) | 20px (`line-height-30`) | −1.5% (headings/h4) | `color-text` | `#000933` |
| Body text | Inter | Regular 400 | `font-size-30` (14px) | `line-height-30` (20px) | `letter-spacing-0` (0px) | `color-text-neutral-stronger` | `#3a3f51` |

**Title-to-actions gap:** `space-50` (12px)

**Header action buttons (Icon Only / Small size):** `border-width-10` (1px), `border-radius-20` (4px), padding `space-10` (3px), icon 16×16px

---

### Date Pickers (`KDatePicker`)

**Description:** "A Date Picker is a clickable element that allows users to select a date or a date range."

**Variants:** Date (single day), Date Range, Date & Time, Date & Time Range, Months, Years, Relative Time

**Calendar container size:** 242×296px (each picker panel)

---

#### Container Base Values

| Property | Token | Value |
|---|---|---|
| background-color | `color-background` | white |
| border-color | `color-border` | `#e0e4ea` |
| border-radius | `border-radius-40` | 8px |
| border-width | `border-width-10` | 1px |
| padding-top | `space-0` | 0px |
| padding-right | `space-40` | 8-10px |
| padding-bottom | `space-40` | 8-10px |
| padding-left | `space-40` | 8-10px |

---

#### Day Cell States (Date variant)

| State | Background token | Background hex | Color token | Color hex | Extra |
|---|---|---|---|---|---|
| **Default** | `color-background` | white | `color-text` | `#000933` | — |
| **Hover** | `color-background-primary-weakest` | `#eefaff` | `color-text-neutral` | `#6c7489` | `border-radius-circle` (fully round) |

**Date Range specific states:**
- Selected Start/End — 3 tokens (background, border-radius, color)
- Selected Mid — 2 tokens (background, border-radius)
- Selected Row Start — `border-radius` applied to left corners only
- Selected Row End — `border-radius` applied to right corners only

---

### Dropdowns (`KDropdown` / `KDropdownMenu`)

**Description:** "A Dropdown Menu displays a list of actions or options to a user."

**Two sub-components:** Dropdown (the menu container) + Dropdown Option (each menu item)

---

#### Dropdown Menu Container

| Property | Token | Value |
|---|---|---|
| background-color | `color-background` | white |
| box-shadow | `shadow` | dropdown elevation shadow |
| border-color | `color-border` | `#e0e4ea` |
| border-width | `border-width-10` | 1px |
| border-radius | `border-radius-20` | 4px |

---

#### Dropdown Option — Spacing

| Property | Token | Value |
|---|---|---|
| padding-top | `space-50` | 12px |
| padding-right | `space-60` | 16px |
| padding-bottom | `space-50` | 12px |
| padding-left | `space-60` | 16px |

**Total option height:** 44px (default), 48px (with badge)

---

#### Dropdown Option — Typography

| Property | Token | Value |
|---|---|---|
| font-family | `font-family-text` | Inter |
| font-size | `font-size-30` | 14px |
| font-weight | `font-weight-medium` | Medium (500) |
| line-height | `line-height-40` | 24px |

---

#### Dropdown Option — Appearance (2 variants)

| Appearance | Text color token | Text hex | Use case |
|---|---|---|---|
| **Default** | `color-text-neutral` | `#6c7489` | All standard menu options |
| **Danger** | `color-text-danger` | `#d60027` | Destructive or hard-to-reverse actions |

---

#### Dropdown Option — States (5 states)

| State | Background token | BG hex | Text color token | Text hex |
|---|---|---|---|---|
| **Default** | `color-background` | white | `color-text-neutral-stronger` | `#3a3f51` |
| **Hover** | `color-background-neutral-weakest` | `#f9fafb` | `color-text` | `#000933` |
| **Focus** | (see note) | — | — | — |
| **Disabled** | — | — | — | — |
| **Selected** | — | — | — | — |

---

#### Dropdown Option — Icon (left)

- Supports an icon on the left side of the option
- Icon size: 20×20px (from Icon section metadata)
- Icon gap from text: uses spacing tokens

#### Dropdown Option — Badge (right)

- Supports a badge on the right side of the option
- Option height becomes 48px (vs standard 44px) when badge is present

---

### Help Text (`KInput` help-text slot / shared sub-component)

**Description:** An optional sub-component toggled on inside form elements (KInput, KSelect, KFileUpload, etc.) to provide contextual guidance below the field.

**Variants:**

| Variant | Color token | Color hex | Use |
|---|---|---|---|
| Info | `color-text-neutral` | #6c7489 | Helpful guidance to complete the field |
| Danger | `color-text-danger` | #d60027 | Inline error validation message |

**Typography & Spacing:**

| Property | Token | Value |
|---|---|---|
| margin-top | `space-40` | 8px (gap from input to help text) |
| color (Info) | `color-text-neutral` | #6c7489 |
| color (Danger) | `color-text-danger` | #d60027 |
| font-size | `font-size-20` | 12px |
| font-weight | `font-weight-regular` | Regular 400 |
| line-height | `line-height-20` | 16px |

**Icon support:** Both Info and Danger variants support an optional left icon. Icon color matches the text color token for the variant.

---

### Input Fields (`KInput`)

**Description:** Single-line text input with optional label, left/right icons, help text, and character limit. Uses the same `shadow-border` inset technique as Checkboxes.

**Container Base Tokens:**

| Property | Token | Value |
|---|---|---|
| background-color | `color-background` | #ffffff (white) |
| box-shadow (border) | `shadow-border` | `inset 0px 0px 0px 1px #e0e4ea` |
| border-radius | `border-radius-30` | 6px |
| padding-x | `space-50` | 12px |
| padding-y | `space-40` | 8px |
| gap (icon ↔ text) | `space-40` | 8px |

⚠️ Architecture note: Input border is `box-shadow: inset` (not CSS `border`). Focus and error states layer additional inset shadows.

**Typography (input text):**
- font-size: `font-size-30` (14px), font-weight: `font-weight-regular` (Regular 400), line-height: 24px, color: `color-text` (#000933)

**Component Heights:**

| Variant | Height |
|---|---|
| Input only (no label, no help text) | 40px |
| With label | 68px |
| With label + help text | 92px |

**States (7):**

| State | Border / box-shadow |
|---|---|
| Default | `shadow-border` (1px inset #e0e4ea) |
| Hover | Elevated border color |
| Focus | Double inset shadow (border + focus ring in primary blue) |
| Disabled | Reduced opacity, no interaction |
| Readonly | Neutral background, no focus ring |
| Error | `shadow-border` with danger color |
| Error Focus | Error + focus ring combined |

**Sub-components:**
- **Label** — see Labels section below
- **Icon Left / Icon Right** — optional 20×20px icon slots (padding stays symmetric at `space-50`)
- **Help Text** — see Help Text section above

**Vue usage:**
```vue
<KInput
  v-model="value"
  label="Service Name"
  placeholder="Enter name..."
  help-text="Must be unique across the workspace."
  :has-error="!!errorMsg"
  :error-message="errorMsg"
/>
```

---

### Labels (`KLabel`)

**Description:** Form label rendered above inputs. Can include a required indicator (red dot) and/or a tooltip icon. Defaults to on for most form components.

**Variants (4):**
- **Optional (default)** — plain label text, no indicator
- **Required** — label + required red dot indicator
- **Optional w/ tooltip** — label + info icon that triggers a tooltip
- **Required w/ tooltip** — label + required dot + tooltip icon

**Text Tokens:**

| Property | Token | Value |
|---|---|---|
| color | `color-text` | #000933 |
| font-size | `font-size-30` | 14px |
| font-weight | `font-weight-semibold` | Semibold 600 |
| line-height | `line-height-30` | 20px |

**Spacing (gap between label and tooltip icon):**
- Gap: `space-40` (8px)
- Label height: 20px

**Required Dot:**
- Color: `color-text-danger` (#d60027)
- 6×6px circle, positioned inline after text

**Tooltip Icon:**
- Color: `color-text-neutral` (#6c7489)
- 16×16px

**Vue usage:**
```vue
<!-- Label is auto-rendered by KInput when `label` prop is set -->
<KInput label="Service Name" :label-attributes="{ required: true, info: 'Tooltip text' }" />
```

---

### Links (`KExternalLink` / `<a>` styled elements)

**Description:** Text links for navigating to another page or external URL. Two weight variants: Regular and Bold.

**Tokens:**

| Variant | Property | Token | Value |
|---|---|---|---|
| Regular | color | `color-text-primary` | #0044f4 |
| Regular | font-size | `font-size-30` | 14px |
| Regular | font-weight | `font-weight-regular` | Regular 400 |
| Regular | line-height | `line-height-30` | 20px |
| Bold | color | `color-text-primary` | #0044f4 |
| Bold | font-size | `font-size-30` | 14px |
| Bold | font-weight | `font-weight-semibold` | Semibold 600 |
| Bold | line-height | `line-height-30` | 20px |

---

### Modals (`KModal`)

**Description:** A full-page overlay dialog that blocks interaction with the page until dismissed. Composed of two Figma components: **Modal Window** (the dialog) and **Modal Overlay** (the backdrop).

**Structure:**
```
┌──────────────────────────────┐
│  Title                     × │  ← Header (70px)
├──────────────────────────────│
│                              │
│  Body content                │  ← Content (variable height)
│                              │
├──────────────────────────────│
│              [Cancel] [Save] │  ← Footer (66px)
└──────────────────────────────┘
```

**Modal Window — Header Tokens:**

| Property | Token | Value |
|---|---|---|
| border-color | `color-border` | #e0e4ea |
| border-radius (modal) | `border-radius-40` | 8px |
| border-width | `border-width-10` | 1px |

**Modal Window — Content Tokens:**

| Property | Token | Value |
|---|---|---|
| background-color | `color-background-neutral-weakest` | #f9fafb |
| border-color | `color-border` | #e0e4ea |
| border-width | `border-width-10` | 1px |

**Modal Window — Footer:** Same border pattern as Header (`color-border`, 1px top separator).

**Overlay:** Semi-transparent full-screen backdrop that blocks interaction with the page below.

**Vue usage:**
```vue
<KModal :is-visible="showModal" title="Confirm Action" @canceled="showModal = false" @proceed="handleSubmit">
  <template #content>
    <p>Are you sure you want to delete this resource?</p>
  </template>
</KModal>
```

---

### Multiselect (`KMultiselect`)

**Description:** A styled multi-select that allows users to choose multiple values from a list. Selected values render as inline badge chips inside the input.

**Base Tokens (input container):**

| Property | Token | Value |
|---|---|---|
| border-radius | `border-radius-30` | 6px |
| box-shadow (border) | `shadow-border` | `inset 0 0 0 1px #e0e4ea` |
| font-size | `font-size-30` | 14px |
| font-weight | `font-weight-regular` | Regular 400 |
| line-height | `line-height-40` | 24px |

⚠️ Same `shadow-border` inset border pattern as KInput and KCheckbox.

**Sections / Features:**
- **State** — Default, Hover, Focus, Disabled, Error states
- **Value** — Placeholder vs selected badge chips
- **Icon** — Optional left icon slot
- **Label** — Optional/Required/Tooltip label (same as KInput)
- **Help Text** — Info/Danger variants (same as KInput)
- **Dropdown** — Option list menu (same token pattern as KDropdown)

**Selected item badges:** Each selected value renders as a KBadge chip with a dismiss `×` button inline in the input.

**Vue usage:**
```vue
<KMultiselect
  v-model="selected"
  :items="[{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }]"
  label="Services"
  placeholder="Select services..."
/>
```

---

### Navigation (sidebar nav pattern)

**Description:** The primary sidebar navigation for the Konnect platform. Includes collapsible main sections with sub-navigation, plus organization and locale/region selectors at the bottom.

**Layout:**
```
┌──────────────────────┐
│  [Logo]              │
│  ─────────────────── │
│  ▼ Section Name      │  ← Main section (expanded)
│    ┃ Sub Item        │  ← Active sub-item (blue left border)
│      Sub Item        │
│  ▶ Section Name      │  ← Main section (collapsed)
│  ─────────────────── │
│  [Org Selector ▾]    │  ← Organization KSelect
│  [Region Selector ▾] │  ← Region/locale KSelect
└──────────────────────┘
```

**Nav width:** 240px. Active sub-item uses a left accent border in `color-border-primary` (#0044f4). Sub-navigation appears as an indented list within the parent section.

---

### Pagination (`KPagination`)

**Description:** Lets users navigate through data divided into multiple pages. Includes total count display, page item buttons, and an items-per-page selector.

**Layout:**
```
[ ← Prev ]  1  2  [3]  4  5  [ Next → ]       1-25 of 300    [ 25 ▾ ]
```

**Page Item Base Tokens:**

| Property | Token | Value |
|---|---|---|
| background-color | `color-background` | #ffffff |
| box-shadow (border) | `shadow-border` | `inset 0 0 0 1px #e0e4ea` |

**Item States:**

| State | Background | Border |
|---|---|---|
| Default | `color-background` (#fff) | `shadow-border` (#e0e4ea) |
| Active (current page) | `color-background-primary` (#0044f4) | `color-border-primary` |
| Disabled (Prev/Next at limits) | Reduced opacity | — |

**Sections:** Overview, Count (current visible / total), Items (page buttons with Default/Active/Disabled states), Items Per Page (uses KButton to select page size).

**Vue usage:**
```vue
<KPagination
  :total-count="300"
  :page-sizes="[25, 50, 100]"
  @page-change="handlePage"
/>
```

---

### Popovers (`KPopover`)

**Description:** A page overlay triggered by a button that displays additional interactive content. Supports 4 position variants.

**Base Tokens:**

| Property | Token | Value |
|---|---|---|
| background-color | `color-background` | #ffffff |
| border-color | `color-border` | #e0e4ea |
| border-radius | `border-radius-30` | 6px |
| border-width | `border-width-10` | 1px |

**Position variants (4):** `left`, `right`, `top`, `bottom` — each supports sub-alignment (start/center/end for top/bottom; top/center/bottom for left/right).

**Content variants:**
- **Default** — Title + description text
- **With button** — Adds a KButton below the description

**Close icon:** Top-right × button. Consistent color and position across all variants.

**Vue usage:**
```vue
<KPopover title="More info" position="bottom">
  <template #content>
    <p>Helpful information here.</p>
  </template>
  <KButton appearance="tertiary">Info</KButton>
</KPopover>
```

---

### Radio Buttons (`KRadio`)

**Description:** A form element for selecting a single choice from a list of at least two options.

**Base Tokens (same inset-shadow pattern as KCheckbox):**

| Property | Token | Value |
|---|---|---|
| border (unselected) | `shadow-border` | `inset 0 0 0 1px #e0e4ea` |
| border (selected) | `shadow-border-primary` | `inset 0 0 0 1px #0044f4` |
| background (unselected) | `color-background` | #ffffff |
| selected fill | `color-background-primary` | #0044f4 |
| label color | `color-text` | #000933 |
| label font-size | `font-size-30` | 14px |

⚠️ Like KCheckbox, the radio border uses `box-shadow: inset` not CSS `border`.

**States:** Default (unselected), Selected, Hover, Focus, Disabled, Disabled Selected.

**Vue usage:**
```vue
<KRadio v-model="selected" :selected-value="'a'" label="Option A" />
<KRadio v-model="selected" :selected-value="'b'" label="Option B" />
```

---

### Segmented Controls (`KSegmentedControl`)

**Description:** A row of mutually exclusive options — like a radio group but rendered as a unified control. Used for switching between views or filter modes.

**Base Tokens:**

| Property | Token | Value |
|---|---|---|
| border-color | `color-border-primary-weak` | #5f9aff |
| border-radius | `border-radius-30` | 6px |
| border-width | `border-width-10` | 1px |

**Sizes:**

| Size | Height |
|---|---|
| Default | 32px |
| Large | 40px |

**Option States — Unselected:**

| State | Background | Text |
|---|---|---|
| Default | transparent | `color-text-neutral` (#6c7489) |
| Hover | `color-background-neutral-weakest` | `color-text` (#000933) |
| Focus | + focus ring | — |
| Disabled | reduced opacity | — |

**Option States — Selected:**

| State | Background | Text |
|---|---|---|
| Selected | `color-background-primary-weakest` (#eefaff) | `color-text-primary` (#0044f4) |
| Selected Focus | + focus ring | — |
| Selected Disabled | reduced opacity | — |

**Vue usage:**
```vue
<KSegmentedControl
  v-model="view"
  :options="[{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }]"
/>
```

---

### Selects (`KSelect`)

**Description:** A styled single-select dropdown allowing users to choose one value from a list.

**Base Tokens:** Identical to KInput container — `shadow-border` inset border, `border-radius-30` (6px), `space-50` / `space-40` padding.

**Heights:** 40px (input only), 68px (with label), 92px (with label + help text).

**States (7):** Default, Hover, Focus, Disabled, Readonly, Error, Error Focus.

**Dropdown menu:** Same token pattern as KDropdown — `shadow` elevation, `color-border`, `border-radius-20` (4px).

**Vue usage:**
```vue
<KSelect
  v-model="value"
  :items="options"
  label="Protocol"
  placeholder="Select a protocol"
/>
```

---

### Skeleton Loaders (`KSkeleton`)

**Description:** Animated shimmer placeholders that match the shape of real content while data loads.

**Variants:**

| Variant (`type` prop) | Dimensions | Use |
|---|---|---|
| `generic` | 480×40px | Generic row or content block |
| `form` | 360×68px | Input field with label placeholder |
| `table` | 960×280px | Full data table |
| `card` | 468×190px | Content card |
| `spinner` | — | Circular spinner |
| `fullscreen-kong` | — | Full-page Kong-branded loading |
| `fullscreen-generic` | — | Full-page generic loading |

**Animation:** Left-to-right shimmer using `color-background-neutral-weakest` (#f9fafb) as base with a lighter highlight sweep.

**Vue usage:**
```vue
<KSkeleton type="table" />
<KSkeleton type="form" :rows="3" />
```

---

### Slideout Drawers (`KSlideout`)

**Description:** A panel that slides in from the right edge of the screen, overlaying the page. Shares the same Modal Overlay backdrop component as KModal.

**Layout:** Same Header / Content / Footer structure as KModal, but anchored to the right edge.

**Dimensions:** Panel width = 768px, full viewport height.

**Tokens:** Same as KModal — `border-radius-40` on the window, `color-border` separators between Header/Content/Footer, `color-background-neutral-weakest` for content background, semi-transparent overlay.

**Sections (Figma):** 01. Slideouts (overview), 02. Overlay (backdrop properties).

**Vue usage:**
```vue
<KSlideout :is-visible="isOpen" title="Edit Service" @close="isOpen = false">
  <template #content>
    <!-- Form content here -->
  </template>
</KSlideout>
```

---

### Switches (`KToggle` / switch pattern)

**Description:** A boolean toggle control with a Track (background pill) and Handle (circular thumb). Two sizes.

**Sizes:**

| Size | Track (W×H) | Handle (W×H) |
|---|---|---|
| Small | 44×24px | ~20×20px |
| Medium | 60×32px | ~28×28px |

**State Tokens:**

| State | Part | Token | Value |
|---|---|---|---|
| Off | Track | `color-background-neutral-weaker` | #e0e4ea |
| Off | Handle | `color-background` | #ffffff |
| On | Track | `color-background-primary` | #0044f4 |
| On | Handle | `color-background` | #ffffff |

**Symbol indicators:** Optional Off Symbol (×) and On Symbol (✓) visible inside the handle for additional accessibility affordance.

**Sections (Figma):** 01. Switches (intro), 02. Size (Small/Medium with Track/Handle/Off Symbol/On Symbol tokens), 03. State (Off/On state tokens).

**Vue usage:**
```vue
<KToggle v-model="isEnabled" label="Enable feature" />
```

---

### Empty States (`KEmptyState`)

**Description:** Displays contextual empty states at three hierarchy levels — L1 (primary product area, e.g. Gateway Manager), L2 (secondary area, e.g. Gateway Services list), L3 (granular UI like empty cards or tables).

**Container Base Tokens:**

| Property | Token | Value |
|---|---|---|
| background-color | `color-background` | #ffffff |
| border-color (L1) | `color-border-transparent` | transparent (no visible border) |
| border-color (L2/L3) | `color-border` | #e0e4ea |
| border-radius | `border-radius-30` | 6px |
| border-width | `border-width-10` | 1px |
| padding (all sides) | `space-110` | large (container padding) |

**Hierarchy Levels:**

| Level | Context | Border | Typical Content |
|---|---|---|---|
| L1 | Primary product area (e.g. Gateway Manager with 0 services) | None (transparent) | Icon/illustration + title + description + pricing + CTA |
| L2 | Secondary area (e.g. Gateway Services list, empty table) | `color-border` (#e0e4ea) | Icon + title + description + CTA |
| L3 | Granular UI element (empty card, empty data row) | `color-border` (#e0e4ea) | Minimal — icon or short message only |

**Sub-sections:**
- **Usecase Cards** — Optional cards surfacing next-step actions (used on L1 and L2)
- **Icon / Illustration** — SVG icon or illustration; use `emptyStateIconVariant` prop (v9+, replaces `emptyStateIcon`)
- **Content** — Title + description + optional pricing text
- **Actions** — Primary CTA button(s)

**Vue usage:**
```vue
<KEmptyState
  :cta-is-hidden="false"
  :icon-variant="'kong'"
  message="No services found"
  title="No Services Yet"
>
  <template #actions>
    <KButton appearance="primary">Add Service</KButton>
  </template>
</KEmptyState>
```

---

### File Uploads (`KFileUpload`)

**Description:** File input component with label, help text, and embedded browse button. Validates file type and size (default 5MB max).

**Container Base Tokens:**

| Property | Token | Value |
|---|---|---|
| border-radius | `border-radius-30` | 6px |
| box-shadow (border) | `shadow-border` | `inset 0 0 0 1px #e0e4ea` |
| padding-top | `space-20` | 6px |
| padding-right | `space-20` | 6px |
| padding-bottom | `space-20` | 6px |
| padding-left | `space-50` | 12px (asymmetric — icon on left) |

⚠️ Architecture note: Like Checkboxes, the input border is implemented via `box-shadow: inset` (not CSS `border`). Focus state adds a second inset shadow layer.

**Typography:**

| Property | Token | Value |
|---|---|---|
| font-size | `font-size-30` | 14px |
| font-weight | `font-weight-regular` | Regular 400 |
| line-height | `line-height-40` | 24px |

**Embedded "Browse" Button:**
- appearance: `tertiary`
- size: `medium`
- state: `default`

**Component Heights:**

| Variant | Height |
|---|---|
| Input only (no label) | 40px |
| With label | 68px |
| With label + help text | 92px |

**States (6):**

| State | Description |
|---|---|
| Default | `shadow-border` (1px inset #e0e4ea) |
| Hover | Elevated border color |
| Focus | Double inset box-shadow (border + focus ring) |
| Disabled | Reduced opacity, no interaction |
| Error | `shadow-border` with danger color |
| Error Focus | Error + focus ring combined |

**Sub-components:**
- **Icon** — Optional left icon (accounts for asymmetric left padding `space-50`)
- **Label** — Variants: Optional, Required, Tooltip
- **Help Text** — Variants: Info (`color-text-neutral`), Danger (`color-text-danger`)

**Vue usage:**
```vue
<KFileUpload
  label="Upload Config"
  accept=".yaml,.json"
  :max-file-size="5"
  help-text="Max 5MB. YAML or JSON only."
  @change="handleFile"
/>
```

---

### Tables (`KTable` / `KTableData` / `KTableView`)

**Structure:** 3 Figma sections — 01. Tables (outer container), 02. Table Header, 03. Table Cell.
Token sub-groups: Actions, Border, Checkbox, Hover, Sort, Spacing, Tooltip, Typography.
Detailed specs from `Tables` Figma page covering loading skeleton, header variants, cell variants, and row states.

**01. Tables — outer container**

| Property | Token | Value |
|---|---|---|
| border-width | `border-width-20` | 2px |
| font-family | `font-family-text` | Inter |
| header font-weight | `font-weight-semibold` | 600 |

**02. Loading Skeleton**

Tables display a skeleton loading state while data is being fetched:
- Header row: gray shimmer bars matching column widths
- Body rows: 5 placeholder rows with pulsing `background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)`
- Skeleton cells: rounded rect placeholders (height 12px, random widths 40–80%)
- Animation: 1.5s infinite shimmer via `background-size: 200%`

**03. Table Header Cell Variants**

| Variant | Description | Visual |
|---------|-------------|--------|
| Default | Plain text label, left-aligned | `Name` |
| Sortable (none) | Label + sort icon (unfold-more, neutral) | `Name ⇅` |
| Sortable (asc) | Label + up arrow, primary color | `Name ↑` |
| Sortable (desc) | Label + down arrow, primary color | `Name ↓` |
| Checkbox | Checkbox for select-all, 16×16 | `☐` |

Header specs: `padding: 12px 16px`, `font-size: 12px`, `font-weight: 600`, `text-transform: uppercase`, `letter-spacing: 0.5px`, `color: color-text-neutral` (#6c7489), `border-bottom: 1px solid color-border`.

**04. Table Cell Variants**

| Variant | Description | Example |
|---------|-------------|---------|
| Text | Plain text, 14px regular | `my-service` |
| Text + Badge | Text with inline KBadge | `my-service` `Enabled` |
| Text + Description | Primary text + muted secondary line | `my-service` / `Main API gateway` |
| Link | Clickable text in primary-60 | `my-service` (underline on hover) |
| Badge only | KBadge centered in cell | `HTTP` |
| Switch/Toggle | KToggle switch for enable/disable | `[●——]` |
| Actions | Icon buttons (edit, delete, more) | `✏️ 🗑️ ⋯` |
| Checkbox | Row selection checkbox, 16×16 | `☐` / `☑` |

Cell specs: `padding: 12px 16px`, `font-size: 14px`, `line-height: 20px`, `border-bottom: 1px solid color-border`, `vertical-align: middle`.

**05. Row States**

| State | Background | Border | Notes |
|-------|-----------|--------|-------|
| Default | `transparent` | bottom 1px `color-border` | Normal state |
| Hover | `color-background-neutral-weakest` (#f9fafb) | — | Subtle highlight |
| Selected | `color-background-primary-weakest` (#eefaff) | — | Checkbox checked |
| Disabled | `opacity: 0.5` | — | Non-interactive |
| Danger | `color-background-danger-weakest` | — | Error/warning row |

**06. Design Tokens**

| Property | Token | Value |
|---|---|---|
| border-color | `color-border` | #e0e4ea |
| outer border-width | `border-width-20` | 2px |
| inner border-width | `border-width-10` | 1px |
| cell padding | `space-60` | 16px (left/right) |
| cell padding-y | `space-50` | 12px (top/bottom) |
| header font-size | `font-size-20` | 12px |
| cell font-size | `font-size-30` | 14px |
| hover bg | `color-background-neutral-weakest` | #f9fafb |
| selected bg | `color-background-primary-weakest` | #eefaff |
| sort icon color | `color-text-neutral` | #6c7489 |
| sort active color | `color-text-primary` | #0044f4 |
| action icon size | 16×16 | — |

```vue
<KTable
  :fetcher="fetcher"
  :headers="headers"
>
  <template #action-items="{ row }">
    <KDropdownItem @click="editRow(row)">Edit</KDropdownItem>
  </template>
</KTable>
```

---

### Textareas (`KTextArea`)

**Structure:** 5 Figma sections — 01 base, 02 State, 03 Value/Placeholder, 04 Label, 05 Help Text. Shares border, spacing, and typography tokens with `KInput`.

**Base tokens**

| Property | Token | Value |
|---|---|---|
| border-radius | `border-radius-30` | 6px |
| box-shadow (border) | `shadow-border` | inset 0 0 0 1px #e0e4ea |
| padding-top | `space-40` | 8px |
| padding-bottom | `space-40` | 8px |
| padding-right | `space-50` | 12px |
| padding-left | `space-50` | 12px |
| font-size | `font-size-30` | 14px |
| font-weight | `font-weight-regular` | 400 |
| line-height | `line-height-40` | 24px |

**States:** Default → Hover (border brightens) → Focus (double box-shadow: inner `shadow-border` + outer focus ring, combine into a single `box-shadow` property with comma-separated layers) → Disabled (reduced opacity, no interaction) → Error (border switches to `color-border-danger`)

**04. Label** — same as `KLabel` tokens (`font-weight-semibold`, `font-size-30`, `color-text`). Supports Optional, Required, and w-tooltip variants.

**05. Help Text** — same as `KInputHelp` tokens. Info variant uses `color-text-neutral`; Danger variant uses `color-text-danger`.

```vue
<KTextArea
  v-model="value"
  label="Description"
  help="Enter a short description."
  :rows="4"
/>
```

---

### Toasts (`KToast` / `useToast`)

**Structure:** 4 Figma sections — 01 Toasts (base), 02 Appearance (per-variant color), 03 Title (optional), 04 Close (dismiss ×).
Fixed width: **440px**.

**01. Base tokens**

| Property | Token | Value |
|---|---|---|
| background-color | `color-background-inverse` | dark/near-black |
| border-radius | `border-radius-30` | 6px |
| box-shadow | `shadow` | elevation shadow |
| icon size | `icon-size-50` | 24px |
| gap | `space-50` | 12px |
| padding-top | `space-60` | 16px |
| padding-right | `space-60` | 16px |
| padding-bottom | `space-60` | 16px |
| padding-left | `space-60` | 16px |
| text color | `color-text-inverse` | light/white |
| font-family | `font-family-text` | Inter |
| font-size | `font-size-30` | 14px |
| font-weight | `font-weight-semibold` | 600 |
| line-height | `line-height-30` | ~20px |

**02. Appearances** — 5 variants with per-appearance background/icon color overrides:

| Appearance | Semantic role |
|---|---|
| `info` | Informational (default blue) |
| `success` | Confirmation (green) |
| `warning` | Caution (yellow/amber) |
| `danger` | Error/destructive (red) |
| `system` | System-level message |

**03. Title** — optional bold header above the message body; has its own Spacing and Typography token tables (same scale as body but with `font-weight-semibold`).

**04. Close** — optional × dismiss button with Icon and Spacing token tables.

```vue
const { notify } = useToast()

notify({
  message: 'Changes saved successfully.',
  appearance: 'success',
  timeoutMilliseconds: 3000,
})
```

---

### Tooltips (`KTooltip` / `KInlineHelp`)

**Structure:** 3 Figma sections — 01 Tooltips (overview), 02 Tooltip (the overlay popup component), 03 Info Tooltip (the ℹ icon + trigger component).
Two separate Figma components for flexibility: use **Tooltip** when attaching to a custom element; use **Info Tooltip** for the standard info-icon pattern next to labels.

**02. Tooltip — the overlay popup**

| Property | Token | Value |
|---|---|---|
| background | `color-background-inverse` | dark/near-black |
| border-radius | `border-radius-20` | 4px |
| padding-top | `space-30` | 4px |
| padding-right | `space-30` | 4px |
| padding-bottom | `space-30` | 4px |
| padding-left | `space-30` | 4px |
| text color | `color-text-inverse` | light/white |
| font-family | `font-family-text` | Inter |
| font-size | `font-size-20` | 12px |
| font-weight | `font-weight-medium` | 500 |
| line-height | `line-height-20` | ~16px |

**03. Info Tooltip — the ℹ icon trigger**

| Property | Token | Value |
|---|---|---|
| icon size | `icon-size-30` | 16px |

**States:** Default and Hover (icon color shifts on hover).

**Positions:** 4 primary — `left`, `top`, `bottom`, `right` (each centered on the opposite axis). 6 additional — `top-start`, `top-end`, `bottom-start`, `bottom-end`, `left-start`/`left-end`, `right-start`/`right-end` for fine-grained alignment.

```vue
<!-- Tooltip wrapping a custom element -->
<KTooltip text="More information about this field">
  <KButton>Hover me</KButton>
</KTooltip>

<!-- Info Tooltip next to a label -->
<KInlineHelp>Explanation text shown on hover</KInlineHelp>
```

---

## Form Layouts (Form Step pattern)

Source: Figma file `LkvKvmaE2MvmG7RZztCGUg`, node `1:3115`

Form steps are the standard layout pattern for multi-step wizards and configuration flows in Konnect. Each step consists of a **header** and a **content container**. There are **3 layout types**, each available with or without a step number — giving 6 total variants.

---

### Step Header

The header sits above the content container and contains the step identity and context.

```
[ (#) ]  Step title (h3 bold)
         Brief description providing context for this step.     [ slot? ]
```

| Element | Token / Value |
|---|---|
| Overall layout | `flex row`, `gap: space-40` (8px), `items-start` |
| **Step badge** (optional) | 32×32px circle, `border-radius-round` (100px), 1px border `color-border-neutral-weak` (#afb7c5), white bg |
| Step badge number | 12px Inter SemiBold, centered, `color-text` (#000933) |
| Title | `headings/h3` — Inter Bold 700, 18px, line-height 24px, letter-spacing −0.32px, `color-text` (#000933) |
| Description | Inter Regular 400, 14px, line-height 20px, `color-text-neutral-stronger` (#3a3f51) |
| Text column padding-top | `space-20` (4px) — aligns baseline with step badge |
| Right slot (optional) | Shrink-0 slot for a `KSegmentedControl` (e.g. Basic / Advanced toggle) |

**With step number:** step badge renders to the left of the text column.
**Without step number:** text column takes full width, no badge.

---

### Content Container

The content area sits below the header, indented to align with the title text.

| Property | Token | Value |
|---|---|---|
| Left indent (with step) | `space-60` | 16px (offsets past the 32px badge + 8px gap) |
| Background | `color-background-neutral-weakest` | #f9fafb |
| Border | `color-border` | 1px solid #e0e4ea |
| Border-radius | `border-radius-30` | 6px |
| Padding (horizontal) | `space-80` | 24px |
| Padding (vertical) | `space-70` | 20px |
| Gap between field groups | `space-70` | 20px |

---

### Layout Type 1 — Cards + Fields

Used when the first decision is a visual provider/option selector, followed by dependent form fields.

```
┌─────────────────────────────────────────────────────────────┐
│  • Provider                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ ◉  [icon]   │  │ ○  [icon]   │  │ ○  [icon]   │       │
│  │   AWS       │  │   Azure     │  │  G Cloud Beta│       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  • Region              • Network                             │
│  [ Select a region ▾ ] [ Select a network ▾ ]                │
└─────────────────────────────────────────────────────────────┘
```

#### Provider Card tokens

| Property | Token / Value |
|---|---|
| Background | `color-background` (white) |
| Border-radius | `border-radius-20` (4px) |
| Padding | `space-70` (20px) all sides |
| Layout | `flex-col`, `items-center`, `gap: space-40` (8px) |
| Card row gap | `space-70` (20px) between cards |
| Cards width | `flex: 1` each (equal width) |
| **Unselected border** | `box-shadow: inset 0 0 0 1px #e0e4ea` |
| **Selected border** | `box-shadow: inset 0 0 0 2px #0044f4` |
| Radio button | Absolute, top-left 12px from edge, 16×16px |
| Icon | 32×32px, centered |
| Label (unselected) | 14px SemiBold, `color-text` (#000933), centered |
| Label (selected) | 14px SemiBold, `color-text-primary` (#0044f4), centered |

Below the card row, form fields appear in a **2-column grid** (`flex row`, `gap: space-70` / 20px), each column containing a `KSelect` at full column width.

---

### Layout Type 2 — Basic

Standard stacked full-width fields. The most common form step layout.

```
┌─────────────────────────────────────────────────────────────┐
│  • Name                                                      │
│  [ Enter a unique name                                     ] │
│                                                              │
│  Description                                                 │
│  [ Describe the purpose of your new gateway              ↕ ] │
│                                                              │
│  > Show labels                                               │
└─────────────────────────────────────────────────────────────┘
```

- Fields stack vertically with `gap: space-70` (20px) between each group
- Full-width `KInput` for short text, `KTextarea` for long text
- Expandable sections (e.g. "Show labels") use a `>` chevron disclosure pattern — `ChevronRightIcon` rotates to `ChevronDownIcon` when open
- The header slot can hold a `KSegmentedControl` for mode switching (e.g. Basic / Advanced) — the selected option determines which field set is shown

---

### Layout Type 3 — Only Fields

Minimal layout for straightforward field-only steps with no card selection. Generic label/value pairs.

```
┌─────────────────────────────────────────────────────────────┐
│  Label                                                       │
│  [ Value                                                   ] │
│                                                              │
│  Label                                                       │
│  [ Value                                                   ] │
│                                                              │
│  Label                                                       │
│  [ Value                                              ▾    ] │
└─────────────────────────────────────────────────────────────┘
```

- No card selection — fields only, stacked full-width
- Can mix `KInput` and `KSelect` (or other field types) freely
- Labels use `KLabel` tokens: 14px SemiBold, `color-text` (#000933)
- Required fields show the 6×6px red dot indicator (`color-text-danger` #d60027)

---

### Variant Summary

| Type | Step badge | Figma node |
|---|---|---|
| Cards + Fields | ✅ With step | `1:1568` |
| Cards + Fields | ❌ No step | `1:2459` |
| Basic | ✅ With step | `1:2170` |
| Basic | ❌ No step | `1:2460` |
| Only Fields | ✅ With step | `1:2306` |
| Only Fields | ❌ No step | `1:2461` |

### Vue structure (Basic with step)

```vue
<!-- Form step wrapper -->
<div class="form-step">

  <!-- Header -->
  <div class="form-step-header">
    <div class="step-badge">1</div>        <!-- omit if no step -->
    <div class="form-step-desc">
      <h3>Step title</h3>
      <p>Brief description providing context for this step.</p>
    </div>
    <!-- optional right slot: <KSegmentedControl .../> -->
  </div>

  <!-- Content container (indented 16px when step badge present) -->
  <div class="form-step-content">
    <KInput label="Name" placeholder="Enter a unique name" required />
    <KTextarea label="Description" placeholder="Describe the purpose..." />
  </div>

</div>
```

```css
.form-step { display: flex; flex-direction: column; gap: 20px; }
.form-step-header { display: flex; gap: 8px; align-items: flex-start; }
.step-badge {
  width: 32px; height: 32px; border-radius: 100px; flex-shrink: 0;
  border: 1px solid #afb7c5; background: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 600; color: #000933;
}
.form-step-desc h3 { font-size: 18px; font-weight: 700; color: #000933; margin: 0; }
.form-step-desc p  { font-size: 14px; color: #3a3f51; margin: 0; }
.form-step-content {
  margin-left: 40px;  /* 32px badge + 8px gap — omit when no step */
  background: #f9fafb; border: 1px solid #e0e4ea; border-radius: 6px;
  padding: 20px 24px; display: flex; flex-direction: column; gap: 20px;
}
```

---

## Key v9 Notes
- Import ButtonAppearances/ButtonSizes from `@kong/kongponents` directly
- `emptyStateIcon` → `emptyStateIconVariant`
- `isShowing` removed from KAlert; use `v-if`
- Styles require Vue component usage (not standalone)
