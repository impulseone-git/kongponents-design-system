---
name: kongponents
description: |
  Build UI with Kong's Kongponents design system (Vue 3 + TypeScript). Use this skill whenever the user wants to create, prototype, or modify any UI that should follow the Kongponents/Konnect design system — including Vue components, page views, layouts, filter toolbars, tables, forms, navigation patterns, or any HTML/CSS prototype using Kong's design tokens and color palette. Also trigger when the user asks about Kongponents component APIs, design token values, color scales, typography specs, icon usage, or how to implement specific Konnect UI patterns (filter pills, breadcrumbs, method badges, etc.). If the user mentions "kongponents", "konnect UI", "kong design system", "kong components", or references specific components like KButton, KTable, KBadge, KAlert, etc., use this skill.
---

# Kongponents Design System Skill

You are building UI that follows Kong's **Kongponents** design system. This skill gives you the knowledge and patterns to produce pixel-accurate, design-system-compliant output — whether that's a full Vue 3 page, a single component, an HTML/CSS prototype, or just answering a question about a token value.

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
| Build | Vite | — |

All components are imported individually: `import { KButton, KCard } from '@kong/kongponents'`. Icons are PascalCase: `import { SearchIcon, CloseIcon } from '@kong/icons'`.

## Core principles

These aren't arbitrary rules — they come from how the Konnect product team actually builds UI, and following them is what makes the output look "right" rather than "close but off."

**Use design tokens, not magic numbers.** Every spacing value, font size, color, and border radius in the system maps to a named token. When you write `padding: 16px`, that's `space-60`. When you write `font-size: 14px`, that's `font-size-30`. Using tokens means the UI automatically adapts if the design system ever updates its scale. The reference file documents every token and its resolved value.

**Use CSS variables for colors.** Colors are referenced as `var(--color-primary-60)` or `var(--color-text-neutral)` — not raw hex values. The reference has the hex values too (useful for understanding what a color looks like), but code should use the variable form. This matters because Kongponents ships theming support through CSS variable overrides.

**Follow the component API — don't reinvent.** If Kongponents has a component for something (and it has components for a lot), use it. Don't build a custom dropdown when `KDropdown` exists. Don't hand-roll a modal when `KModal` handles focus trapping and overlay. The reference file's "Components" section lists every available component with its key props.

**Match interaction states exactly.** The design system specifies hover, focus, active, and disabled states for every interactive element. These aren't suggestions — a filter pill has a dashed border when unapplied and a solid primary border when applied, with specific focus ring specs. The reference documents these state-by-state.

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

3. **For prototypes and mockups**, you can also output plain HTML/CSS that uses the same token values and color palette. Not everything needs to be a Vue component — sometimes a static HTML reference is more useful.

4. **Scope your styles.** Always use `<style scoped>` in Vue SFCs. Use CSS custom properties (the `var(--color-*)` pattern) for all colors so theming works.

## Key patterns to know

These are the patterns that come up most often. The reference file has full details, but here's the mental model:

### Color system
The palette is organized by scale (Gray, Blue, Green, Red, Purple, Yellow, Aqua) with steps 10–100. Step 10 is the lightest (used for backgrounds), step 60 is typically the primary action shade, and step 100 is the darkest. Semantic aliases like `color-text-primary` map to specific scale values (Blue 60 = #0044f4).

The pattern for status colors is consistent: background uses step 10 (weakest), text/icons use step 60. This applies to badges, alerts, method badges, and any status indicator.

### Typography
Two fonts: **Inter** for everything, **JetBrains Mono** for code. Headings (H1–H5) use bold weight with negative letter-spacing that gets tighter as size increases. Body text comes in three sizes (large 16px, default 14px, small 12px) × four weights (400–700). The reference has the exact token-to-pixel mappings.

### Filter toolbar
This is one of the most complex patterns. It's a search input (300px fixed) + filter pills + "More filters+" button. Pills have unapplied (dashed border) and applied (solid primary border) states. Clicking a pill opens a popover with operator select (100px) + value input (252px) + Cancel/Apply buttons. The reference has 9 subsections covering every aspect.

### Tables
Tables use header cells (sortable with direction states), body cells (text, badge, link, switch, checkbox, actions variants), loading skeletons, and row states (default, hover, selected, disabled, danger). The reference has full token specs.

### Icons

Icons come from two sources — know which to use:

**1. `@kong/icons` package** — 200+ standard icons for common UI needs. Import as PascalCase Vue components:
```ts
import { SearchIcon, CloseIcon, ChevronDownIcon } from '@kong/icons'
```
Usage: `<SearchIcon :size="20" color="var(--color-text-neutral)" />`

**2. Custom project SVGs** — The project may have an `icons/` folder with custom SVGs (e.g., `Icon_overview.svg`, `Icon_apigateway.svg`). These use `fill="currentColor"` for CSS color inheritance and are typically inlined in templates. Always check if custom icons exist before defaulting to the package — the navigation sidebar, for example, uses custom SVGs exclusively.

**Sizing rules:**
| Context | Size | Example |
|---------|------|---------|
| Default UI | 20×20px | Navigation, toolbar buttons |
| Compact (pills, badges) | 16×16px | Filter pill chevrons, badge icons |
| Large (headers, empty states) | 24×24px | Page headers, KEmptyState |

**Name mapping gotchas** — Some Figma names don't match the component name. These trip people up:
| Figma name | Component import | Why it's confusing |
|-----------|-----------------|-------------------|
| `cal` | `CalendarIcon` | Not `CalIcon` |
| `cog` | `CogwheelIcon` | Not `CogIcon` |
| `cloud` | `CloudHybridIcon` | Not `CloudIcon` |
| `warning` | `WarningIcon` | Not `DangerIcon` (that's different) |
| `danger` | `DangerIcon` | The exclamation mark, not the circle |
| `danger-circle` | `DangerCircleIcon` | Circle variant |

**Common icon choices by UI pattern** — use these exact imports, not approximations:
| Pattern | Import name | Size | Notes |
|---------|------------|------|-------|
| Search inputs | `SearchIcon` | 16px | `color="var(--color-text-neutral)"` |
| Filter pill chevron | `ChevronDownIcon` | 14px | Rotates 180° when open |
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

**Never substitute icons with emoji, Unicode symbols, or HTML entities.** No ▾ for chevrons, no ⋮ for the more menu, no ✎ for edit, no ↑↓ for sort arrows. Every icon in the UI must be either an `@kong/icons` Vue component or a project SVG. If you're writing a static HTML prototype (not Vue), use inline `<svg>` elements — the reference file's "Full Icon Name List" section has the SVG paths for common icons, or draw minimal geometric representations (e.g., three stacked dots for MoreIcon, a magnifying glass for SearchIcon).

## Common mistakes to avoid

**Don't confuse DangerIcon with DangerCircleIcon.** `DangerIcon` is the exclamation/warning mark used in alerts. `DangerCircleIcon` is a circled variant — a different icon. The KAlert danger appearance uses `DangerIcon` (Figma name: `danger`).

**Don't use `@kong/icons` when custom SVGs exist.** Check for an `icons/` folder in the project. Navigation and product-specific icons (gateway types, Konnect features) are typically custom SVGs, not from the package. Custom SVGs use `fill="currentColor"` so they inherit the active/hover state color from CSS.

**Don't guess icon names — check the reference.** The `@kong/icons` naming convention is `{PascalCaseName}Icon`, but the Figma names often use kebab-case and sometimes diverge entirely (see gotchas table above). When in doubt, look it up in the Icon Names section of the reference.

**Don't forget focus states.** Every interactive element needs a visible focus indicator — typically a `box-shadow: 0 0 0 4px rgba(0, 68, 244, 0.2)` ring. This is critical for accessibility.

**Don't hardcode widths on flex children** unless the spec calls for it (like the 300px search input in the filter bar). Most layouts should use `flex: 1` for content areas.

**Don't mix up border styles.** Unapplied filter pills use `dashed` borders. Applied pills use `solid`. Method badges have no visible border (except the "New" badge). Getting this wrong is one of the most visible inconsistencies.

**Don't forget the trailing slash on global breadcrumbs.** Global breadcrumbs always end with a `/` separator. Contextual breadcrumbs don't. The reference has a comparison table.

## When the user asks about specs or tokens

Sometimes the user just wants to know "what color is the danger badge background?" or "what's the H3 font size?" — they're not asking you to build anything. In these cases, look up the answer in the reference and respond directly. You don't need to generate code for lookup questions.

## Output checklist

Before delivering any UI code, verify:

- [ ] All colors use `var(--color-*)` CSS variables (not raw hex)
- [ ] Spacing values correspond to design tokens (8px = space-40, 12px = space-50, 16px = space-60, 24px = space-70)
- [ ] Typography uses Inter for UI text, JetBrains Mono for code
- [ ] Heading sizes and letter-spacing match the token scale (H1=32px/-1.5px through H5=14px/-0.07px)
- [ ] Interactive elements have hover, focus, and disabled states
- [ ] Kongponents are used where available (not hand-rolled equivalents)
- [ ] Icons are imported from `@kong/icons` with correct PascalCase names (see pattern→import table above)
- [ ] No emoji, Unicode symbols, or HTML entities used as icon substitutes (use `@kong/icons` components or inline SVGs)
- [ ] Scoped styles in Vue SFCs
