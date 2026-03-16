# Kongponents Design System — Claude Skill + Reference

A Claude skill that helps your team build pixel-accurate UI following Kong's **Kongponents** design system (Vue 3 + TypeScript).

## What's in this repo

```
kongponents-design-system/
├── skill/                    # The Claude skill
│   ├── SKILL.md              # Skill instructions (auto-loaded by Claude)
│   └── kongponents.skill     # Packaged .skill file for easy install
├── reference/                # Design system source of truth
│   ├── kongponents-reference.md   # 2200+ lines of component specs, tokens, patterns
│   └── icons/                # Custom SVG icons (fill="currentColor")
├── demo/                     # Vue 3 demo website showcasing all patterns
│   ├── src/views/            # Interactive demos (Buttons, Filters, Tables, etc.)
│   ├── package.json
│   └── vite.config.ts
├── evals/                    # Skill evaluation results
│   ├── evals.json            # Test prompts and assertions
│   └── iteration-2/          # Latest run: 96% with-skill vs 15% baseline
└── previews/                 # Visual comparison HTML
    └── eval-visual-preview.html  # Side-by-side rendered output comparison
```

## Quick start — install the skill

### Option 1: Install the .skill file (easiest)

1. Download `skill/kongponents.skill`
2. In Claude Desktop, go to Settings > Skills
3. Click "Install skill" and select the file

### Option 2: Copy the skill folder

1. Copy the `skill/` folder to your Claude skills directory:
   - **macOS**: `~/Library/Application Support/Claude/skills/kongponents-skill/`
   - **Linux**: `~/.config/claude/skills/kongponents-skill/`
2. Rename `skill/SKILL.md` to `SKILL.md` inside that folder

### After installing

The skill needs access to the reference file to work. Place `reference/kongponents-reference.md` in whichever workspace folder you use with Claude. The skill will look for it there when triggered.

## What the skill does

Once installed, the skill triggers automatically when you ask Claude to:

- Build any UI with Kongponents (Vue components, page layouts, filter toolbars, tables)
- Create HTML/CSS prototypes using Kong's design tokens and color palette
- Look up specific token values ("what's the danger alert background color?")
- Work with `@kong/icons` or custom SVG icons

The skill ensures Claude uses the correct design tokens (`var(--color-*)`), component APIs, interaction states, icon imports, and typography — instead of guessing with generic Material Design colors and emoji icons.

## Eval results (iteration 2)

| Eval | With Skill | Baseline (no skill) |
|------|-----------|-------------------|
| Routes Table | 89% (8/9) | 22% (2/9) |
| Danger Alert Specs | 100% (6/6) | 0% (0/6) |
| Services Page | 100% (9/9) | 22% (2/9) |
| **Average** | **96%** | **15%** |

Open `previews/eval-visual-preview.html` in your browser to see a rendered side-by-side comparison of what the with-skill vs baseline outputs look like.

## Running the demo website

```bash
cd demo
npm install
npm run dev
```

The demo showcases interactive examples of buttons, data display, filters, and table patterns — all built with Kongponents and following the same specs the skill teaches Claude.

## Key patterns the skill covers

- **Color system**: Gray/Blue/Green/Red/Purple/Yellow/Aqua scales (10–100), semantic aliases, CSS variables
- **Typography**: Inter + JetBrains Mono, token-based heading specs (H1–H5), letter-spacing
- **Filter toolbar**: 300px search, dashed/solid pill states, popover layout, truncation rules
- **Tables**: Header variants, cell types, row states, loading skeletons, sort cycling
- **Icons**: `@kong/icons` package imports (PascalCase), custom SVGs, sizing rules, name mapping gotchas
- **Badges & Alerts**: Status colors, method badges (GET=green, POST=blue, DELETE=red), appearances

## Contributing

To update the skill:

1. Edit `skill/SKILL.md`
2. Update `reference/kongponents-reference.md` if specs have changed
3. Re-run evals to verify improvements (see `evals/evals.json` for test prompts)
4. Repackage: the `.skill` file is a zip of the skill folder
