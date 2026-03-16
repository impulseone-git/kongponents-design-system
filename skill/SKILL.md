---
name: kongponents
description: |
  Build UI with Kong's Kongponents design system (Vue 3 + TypeScript). Use this skill whenever the user wants to create, prototype, or modify any UI that should follow the Kongponents/Konnect design system â including Vue components, page views, layouts, filter toolbars, tables, forms, navigation patterns, or any HTML/CSS prototype using Kong's design tokens and color palette. Also trigger when the user asks about Kongponents component APIs, design token values, color scales, typography specs, icon usage, or how to implement specific Konnect UI patterns (filter pills, breadcrumbs, method badges, etc.). If the user mentions "kongponents", "konnect UI", "kong design system", "kong components", or references specific components like KButton, KTable, KBadge, KAlert, etc., use this skill.
---

# Kongponents Design System Skill

You are building UI that follows Kong's **Kongponents** design system. This skill gives you the knowledge and patterns to produce pixel-accurate, design-system-compliant output â whether that's a full Vue 3 page, a single component, an HTML/CSS prototype, or just answering a question about a token value.

## Before you start

Read the reference file at `kongponents-reference.md` in the user's workspace. This is the single source of truth for all component APIs, design tokens, color palettes, typography scales, icon catalogs, and interaction patterns. The reference is comprehensive (~2200 lines) so read the sections relevant to your task rather than the whole thing.

If you can't find `kongponents-reference.md` in the workspace, ask the user where it's located. The skill cannot produce accurate output without it.

## Tech stack

| Layer | Package | Version |
|-------|---------|---------|
| Components | `@kong/kongponents` | v9.x |
| Icons | `@kong/icons` | v1.x |
| Design tokens | `@kong/design-tokens` | latest |
| Framework | Vue 3 | `<script setup lang="ts">` SFC pattern |
| Build | Vite | â |

All components are imported individually: `import { KButton, KCard } from '@kong/kongponents'`. Icons are PascalCase: `import { SearchIcon, CloseIcon } from '@kong/icons'`.

## Core principles

These aren't arbitrary rules â they come from how the Konnect product team actually builds UI, and following them is what makes the output look "right" rather than "close but off."

**Use design tokens, not magic numbers.** Every spacing value, font size, color, and border radius in the system maps to a named token. When you write `padding: 16px`, that's `space-60`. When you write `font-size: 14px`, that's `font-size-30`. Using tokens means the UI automatically adapts if the design system ever updates its scale. The reference file documents every token and its resolved value.

**Use CSS variables for colors.** Colors are referenced as `var(--color-primary-60)` or `var(--color-text-neutral)` â not raw hex values. The reference has the hex values too (useful for understanding what a color looks like), but code should use the variable form. This matters because Kongponents ships theming support through CSS variable overrides.

**Follow the component API â don't reinvent.** If Kongponents has a component for something (and it has components for a lot), use it. Don't build a custom dropdown when `KDropdown` exists. Don't hand-roll a modal when `KModal` handles focus trapping and overlay. The reference file's "Components" section lists every available component with its key props.

**Match interaction states exactly.** The design system specifies hover, focus, active, and disabled states for every interactive element. These aren't suggestions â a filter pill has a dashed border when unapplied and a solid primary border when applied, with specific focus ring specs. The reference documents these state-by-state.

## How to approach a task

1. **Identify which components and patterns are involved.** Read the relevant sections of `kongponents-reference.md`. If the task involves a table, read the Tables section. If it involves filters, read the Filter Patterns section. If it involves alerts and badges, read both those sections.

2. **Use Vue 3 SFC with `<script setup lang="ts">`.** All code should follow this pattern:
   ```vue
   <script setup lang="ts">
   import { ref } from 'vue'
   import { KButton, KCard } from '@kong/kongponents'
   import { SearchIcon } from '@kong/icons'

   const myState = ref('')
   </script>

   <template>
     <!-- template here -->
   </template>

   <style scoped>
   /* scoped styles using design tokens */
   </style>
   ```

3. **For prototypes and mockups**, you can also output plain HTML/CSS that uses the same token values and color palette. Not everything needs to be a Vue component â sometimes a static HTML reference is more useful.

4. **Scope your styles.** Always use `<style scoped>` in Vue SFCs. Use CSS custom properties (the `var(--color-*)` pattern) for all colors so theming works.

## Key patterns to know

These are the patterns the reference covers in detail. The summaries below give you the mental model â consult the reference file for exact token values, state specs, and Vue usage examples.

### Color system
The palette is organized by scale (Gray, Blue, Green, Red, Purple, Yellow, Aqua) with steps 10â100. Step 10 is the lightest (used for backgrounds), step 60 is typically the primary action shade, and step 100 is the darkest. Semantic aliases like `color-text-primary` map to specific scale values (Blue 60 = #0044f4).

The pattern for status colors is consistent: background uses step 10 (weakest), text/icons use step 60. This applies to badges, alerts, method badges, and any status indicator.

### Typography
Two fonts: **Inter** for everything, **JetBrains Mono** for code. Headings (H1âH5) use bold weight with negative letter-spacing that gets tighter as size increases. Body text comes in three sizes (large 16px, default 14px, small 12px) Ã four weights (400â700). The reference has the exact token-to-pixel mappings.

### Buttons (`KButton`, `KCopy`, `KDropdown`)
Four appearances: **primary** (filled blue), **secondary** (outlined blue), **tertiary** (text-only blue), **danger** (filled red). Three sizes: large (40px), medium (32px, default), small (22px). Font is Inter SemiBold 600. Icon-to-text gap is 6px (`space-30`). `KCopy` is a copy-to-clipboard button. `KDropdown`/`KDropdownMenu` is a button-triggered popover menu â options are 44px tall with 12px/16px padding, danger appearance available for destructive actions.

### Form inputs (`KInput`, `KTextArea`, `KSelect`, `KMultiselect`, `KCheckbox`, `KRadio`, `KFileUpload`, `KLabel`, `KDateTimePicker`)
All form inputs share the same `shadow-border` inset technique (borders are `box-shadow: inset 0 0 0 1px`, not CSS `border`) and consistent state pattern: Default â Hover â Focus (double inset shadow with blue ring) â Disabled â Error â Error+Focus. Input height is 40px standalone, 68px with label, 92px with label + help text. Labels use SemiBold 600 14px with optional required dot (red, 6Ã6px) and tooltip icon. Help text is 12px regular in either info (gray) or danger (red) variant.

Key differences: `KSelect` is single-value dropdown. `KMultiselect` shows selected values as badge chips inside the input. `KCheckbox` uses a 16Ã16px box with `check-small` icon when checked and `indeterminate-small` for indeterminate. `KRadio` uses the same inset-shadow border. `KFileUpload` has an embedded "Browse" button (tertiary appearance). `KDateTimePicker` opens a calendar popover (242Ã296px per panel).

### Cards (`KCard`)
Simple content container â white background, 1px `color-border`, 6px radius, ~20px padding. Title is Bold 700 16px, body text is Regular 400 14px in `color-text-neutral-stronger` (#3a3f51). Header can include small icon-only action buttons. No size or appearance variants â just one style.

### Badges (`KBadge`) and Method Badges
**KBadge**: Inline label, always 12px SemiBold, single-line with `overflow: clip`. Seven appearances: Info (blue), Success (green), Warning (yellow), Danger (red), Neutral (gray), Decorative (purple), New (gradient with green border). Default size is 24px tall, Small is 20px. Border-radius 4px, gap 8px.

**Method Badge**: Fixed 80px Ã 24px, ALL CAPS centered text for HTTP verbs. Each method has a specific color: GET=green, POST=blue, PUT=yellow, DELETE=red, PATCH=aqua, OPTIONS=gray, HEAD=inverted (dark bg/light text), CONNECT=purple, TRACE=pink. The reference has exact hex values for each.

### Alerts (`KAlert`)
Full-width banner with optional icon, title, message, and dismiss button. Five appearances: Info, Success, Warning, Danger, Decorative (purple). Each has a predefined icon that cannot be swapped (e.g., Danger uses `DangerIcon`, not `DangerCircleIcon`). Layout: `flex-direction: row`, `align-items: flex-start`, `padding: 12px`, `gap: 6px`, `border-radius: 6px`. No visible border â background color alone provides context. Background uses step-10, text uses step-60 of the semantic color scale.

### Breadcrumbs (`KBreadcrumbs`)
Two distinct types â don't mix them up:
- **Global breadcrumb**: Above the H1 page title. Shows ancestors only (current page = H1 below). Medium weight 500, has home icon on level 1, **always ends with trailing `/`**.
- **Contextual breadcrumb**: Inside tabbed sections. Includes current page as last crumb (bold dark navy #000933). Bold weight 700, no home icon, **no trailing separator**.
Both use `/` separator in `#afb7c5`, ancestor text in `#6c7489`.

### Filter toolbar
This is one of the most complex patterns. It's a search input (300px fixed) + filter pills + "More filters+" button. Pills have unapplied (dashed border) and applied (solid primary border) states. Clicking a pill opens a popover with operator select (100px) + value input (252px) + Cancel/Apply buttons. The reference has 9 subsections covering every aspect.

### Tables (`KTable` / `KTableData` / `KTableView`)
Tables use header cells (sortable with direction states), body cells (text, badge, link, switch, checkbox, actions variants), loading skeletons, and row states (default, hover, selected, disabled, danger). Header text is 12px SemiBold uppercase with 0.5px letter-spacing. Cell text is 14px regular. Both use 12px/16px padding. The reference has full token specs.

### Navigation (`KTabs`, `KPagination`, `KSegmentedControl`, sidebar pattern)
- **KTabs**: Tabbed interface with `tabs` array of `{ hash, title }`. Supports `shouldChangeTab` for conditional navigation.
- **KPagination**: Page buttons with active state (primary blue fill), total count display, items-per-page selector. Uses same inset-shadow border pattern.
- **KSegmentedControl**: Radio-group alternative rendered as unified control bar. Selected option gets primary-weakest blue background. Two sizes: default (32px) and large (40px).
- **Sidebar nav**: 240px wide, collapsible sections, active sub-item has blue left accent border. Org/region selectors at bottom.

### Display components (`KEmptyState`, `KSkeleton`, `KCodeBlock`, `KCatalog`)
- **KEmptyState**: Three hierarchy levels â L1 (primary, no border), L2 (secondary, with border), L3 (granular, minimal). Includes icon/illustration + title + description + CTA.
- **KSkeleton**: Animated shimmer placeholders. Types: generic, form, table, card, spinner, fullscreen-kong, fullscreen-generic. Uses gray shimmer animation.
- **KCodeBlock**: Code display with syntax highlighting and copy button.
- **KCatalog**/**KCatalogItem**: Card-based listing with small/medium/large card sizes, search, and loading/empty states.

### Modals and overlays (`KModal`, `KPrompt`, `KPopover`, `KSlideout`, `KToast`, `KTooltip`)
- **KModal**: Full-page overlay dialog. Header (70px) / Content (variable, gray bg `#f9fafb`) / Footer (66px) structure. Border-radius 8px. Use `#content` slot for body.
- **KPrompt**: Confirmation dialog variant of modal.
- **KPopover**: Positioned overlay (left/right/top/bottom) triggered by a button. Border-radius 6px, white bg, 1px border.
- **KSlideout**: Right-edge drawer panel, 768px wide, full viewport height. Same header/content/footer structure as modal.
- **KToast**: Dark notification banner (440px fixed width), dark bg with white text. Five appearances (info, success, warning, danger, system). Use `useToast()` composable.
- **KTooltip**: Dark overlay (4px radius, 4px padding, dark bg, white text). **Info Tooltip** (`KInlineHelp`) is the â¹ icon variant used next to labels.

### Switches (`KToggle`)
Boolean toggle with track + handle. Two sizes: small (44Ã24px track) and medium (60Ã32px track). Off = gray track (#e0e4ea), On = primary blue track (#0044f4). Handle is always white. Optional check/x symbol indicators inside handle.

### Icons

Icons come from two sources â know which to use:

**1. `@kong/icons` package** â 200+ standard icons for common UI needs. Import as PascalCase Vue components:
```ts
import { SearchIcon, CloseIcon, ChevronDownIcon } from '@kong/icons'
```
Usage: `<SearchIcon :size="20" color="var(--color-text-neutral)" />`

**2. Custom project SVGs** â The project may have an `icons/` folder with custom SVGs (e.g., `Icon_overview.svg`, `Icon_apigateway.svg`). These use `fill="currentColor"` for CSS color inheritance and are typically inlined in templates. Always check if custom icons exist before defaulting to the package â the navigation sidebar, for example, uses custom SVGs exclusively.

**Sizing rules:**
| Context | Size | Example |
|---------|------|---------|
| Default UI | 20Ã20px | Navigation, toolbar buttons |
| Compact (pills, badges) | 16Ã16px | Filter pill chevrons, badge icons |
| Large (headers, empty states) | 24Ã24px | Page headers, KEmptyState |

**Name mapping gotchas** â Some Figma names don't match the component name. These trip people up:
| Figma name | Component import | Why it's confusing |
|-----------|-----------------|-------------------|
| `cal` | `CalendarIcon` | Not `CalIcon` |
| `cog` | `CogwheelIcon` | Not `CogIcon` |
| `cloud` | `CloudHybridIcon` | Not `CloudIcon` |
| `warning` | `WarningIcon` | Not `DangerIcon` (that's different) |
| `danger` | `DangerIcon` | The exclamation mark, not the circle |
| `danger-circle` | `DangerCircleIcon` | Circle variant |

**Common icon choices by UI pattern** â use these exact imports, not approximations:
| Pattern | Import name | Size | Notes |
|---------|------------|------|-------|
| Search inputs | `SearchIcon` | 16px | `color="var(--color-text-neutral)"` |
| Filter pill chevron | `ChevronDownIcon` | 14px | Rotates 180Â° when open |
| Close / dismiss (pill) | `CloseIcon` | 12px | Inside pill close button |
| Close / dismiss (modal) | `CloseIcon` | 20px | Modal/dialog close button |
| Add / create button | `AddIcon` | 16px | Primary action buttons |
| "More filters+" trigger | `AddIcon` | 14px | Text button alongside pills |
| Actions dropdown trigger | `MoreIcon` | 16px | Vertical three-dot menu |
| Edit action | `EditIcon` | 16px | Row/item edit button |
| Delete action | `TrashIcon` | 16px | Row/item delete button |
| External links | `ExternalLinkIcon` | 14px | After link text |
| Sort (unsorted) | `UnfoldMoreIcon` | 16px | `color="var(--color-text-neutral)"` |
| Sort (ascending) | `ArrowUpIcon` | 16px | `color="var(--color-text-primary)"` |
| Sort (descending) | `ArrowDownIcon` | 16px | `color="var(--color-text-primary)"` |
| Breadcrumb home | `CloudIcon` | 16px | First breadcrumb segment |
| Copy to clipboard | `CopyIcon` | 16px | Code blocks, ID fields |
| Refresh / reload | `RefreshIcon` | 16px | Data refresh buttons |
| Navigation sidebar | Custom SVGs | 24px | From project `icons/` folder |

**Never substitute icons with emoji, Unicode symbols, or HTML entities.** No â¾ for chevrons, no â® for the more menu, no â for edit, no ââ for sort arrows. Every icon in the UI must be either an `@kong/icons` Vue component or a project SVG. If you're writing a static HTML prototype (not Vue), use inline `<svg>` elements â the reference file's "Full Icon Name List" section has the SVG paths for common icons, or draw minimal geometric representations (e.g., three stacked dots for MoreIcon, a magnifying glass for SearchIcon).

## Common mistakes to avoid

**Don't confuse DangerIcon with DangerCircleIcon.** `DangerIcon` is the exclamation/warning mark used in alerts. `DangerCircleIcon` is a circled variant â a different icon. The KAlert danger appearance uses `DangerIcon` (Figma name: `danger`).

**Don't use `@kong/icons` when custom SVGs exist.** Check for an `icons/` folder in the project. Navigation and product-specific icons (gateway types, Konnect features) are typically custom SVGs, not from the package. Custom SVGs use `fill="currentColor"` so they inherit the active/hover state color from CSS.

**Don't guess icon names â check the reference.** The `@kong/icons` naming convention is `{PascalCaseName}Icon`, but the Figma names often use kebab-case and sometimes diverge entirely (see gotchas table above). When in doubt, look it up in the Icon Names section of the reference.

**Don't forget focus states.** Every interactive element needs a visible focus indicator â typically a `box-shadow: 0 0 0 4px rgba(0, 68, 244, 0.2)` ring. This is critical for accessibility.

**Don't hardcode widths on flex children** unless the spec calls for it (like the 300px search input in the filter bar). Most layouts should use `flex: 1` for content areas.

**Don't mix up border styles.** Unapplied filter pills use `dashed` borders. Applied pills use `solid`. Method badges have no visible border (except the "New" badge). Getting this wrong is one of the most visible inconsistencies.

**Don't forget the trailing slash on global breadcrumbs.** Global breadcrumbs always end with a `/` separator. Contextual breadcrumbs don't. The reference has a comparison table.

## When the user asks about specs or tokens

Sometimes the user just wants to know "what color is the danger badge background?" or "what's the H3 font size?" â they're not asking you to build anything. In these cases, look up the answer in the reference and respond directly. You don't need to generate code for lookup questions.

## Output checklist

Before delivering any UI code, verify:

- [ ] All colors use `var(--color-*)` CSS variables (not raw hex)
- [ ] Spacing values correspond to design tokens (8px = space-40, 12px = space-50, 16px = space-60, 24px = space-70)
- [ ] Typography uses Inter for UI text, JetBrains Mono for code
- [ ] Heading sizes and letter-spacing match the token scale (H1=32px/-1.5px through H5=14px/-0.07px)
- [ ] Interactive elements have hover, focus, and disabled states
- [ ] Kongponents are used where available (not hand-rolled equivalents)
- [ ] Icons are imported from `@kong/icons` with correct PascalCase names (see patternâimport table above)
- [ ] No emoji, Unicode symbols, or HTML entities used as icon substitutes (use `@kong/icons` components or inline SVGs)
- [ ] Scoped styles in Vue SFCs
