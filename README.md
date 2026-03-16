# Kongponents Design System Skill

A Claude skill for building pixel-accurate UI with Kong's Kongponents design system. Includes all design tokens, component specs, icon assets, and navigation patterns used in the Konnect platform.

## Setup

1. Install `kongponents.skill` as a skill in Claude
2. Place `kongponents-reference.md` in your workspace folder

That's it. When you ask Claude to build Konnect UI, the skill will automatically guide it to use the correct components, tokens, icons, and patterns.

## What's included

**`kongponents.skill`** — The skill package containing:
- Instructions for Claude on how to use Kongponents correctly
- 193 `@kong/icons` SVGs (consolidated in `icons-solid.json`)
- 7 custom Konnect navigation icons (Catalog, Dev Portal, Event Gateway, Identity, Metering & Billing, Observability, Organisation)
- Official Konnect logo SVG

**`kongponents-reference.md`** — Detailed design system reference (~2200 lines) covering:
- All component APIs (KButton, KTable, KBadge, KAlert, KModal, etc.)
- Color palette with hex values and semantic tokens
- Typography scale and spacing tokens
- Navigation drawer structure and specs
- Filter toolbar, breadcrumb, and form layout patterns

## Example prompts

- "Create a Konnect dashboard page with a data table and filter toolbar"
- "Build the sidebar navigation matching the Konnect design"
- "What color token should I use for muted secondary text?"
