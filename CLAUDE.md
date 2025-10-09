# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI PM Cards is a React-based educational platform featuring 156 tactical frameworks for AI Product Managers, organized into 20 curated learning paths. The app helps PMs navigate AI strategy, risk management, and execution challenges through an interactive card-based learning system.

**Live Site:** https://ai-pm-cards.vercel.app

## Development Commands

```bash
npm run dev      # Start Vite dev server on localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Architecture

### Content Architecture

**Single Source of Truth:** All content lives in `src/data/cardData.json`

```json
{
  "paths": {
    "path-id": {
      "id": "path-id",
      "title": "Path Title",
      "description": "...",
      "cardIds": ["STRAT-001", "EXEC-002", ...]
    }
  },
  "cards": {
    "STRAT-001": {
      "id": "STRAT-001",
      "deck": "strategy|risk|execution",
      "category": "...",
      "title": "...",
      "description": "...",
      "whenToUse": [...],
      "overview": "...",
      "steps": [...],
      "tips": [...],
      "relatedCards": [...],
      "icon": "emoji"
    }
  }
}
```

**Card IDs follow convention:**
- `STRAT-###` - Strategy deck (001-031)
- `RISK-###` - Risk Management deck (001-050)
- `EXEC-###` - Execution deck (001-053)

**Paths** are curated sequences of cards for specific user journeys (e.g., "Is AI Even the Right Solution?", "Launch Without Getting Fired")

### Routing & Navigation

**App.jsx** defines all routes:
- `/` - Landing page with problem discovery section
- `/start` → `/start/problem` → `/start/planning|building` - Multi-step diagnostic flow
- `/path/:pathId` - Card-by-card path navigation with progress tracking
- `/paths` - Directory of all 20 paths
- `/browse` - Filterable card browser (by deck, difficulty, search)
- `/about`, `/resources`, `/collaborate` - Info pages

**Navigation between cards:**
- PathView: Cards link via "related cards" using card title matching
- BrowseView: Direct navigation via card ID query param (`/browse?card=STRAT-001`)
- Progress is saved to localStorage: `path-progress-{pathId}`

### State Management

**No Redux/Zustand.** Simple patterns:
- **Theme:** Context API (`ThemeContext`) - persists to localStorage, syncs with system preference
- **Path Progress:** localStorage per path (`path-progress-{pathId}`)
- **Card State:** Local component state (flip state, filters, search)

### Component Structure

**Card.jsx** - Core reusable component:
- 3D flip animation (front/back)
- Front: title, description, whenToUse, icon
- Back: overview, numbered steps, tips, related cards
- Related card navigation via title matching algorithm
- Keyboard shortcut: Spacebar to flip

**PathView.jsx** - Path traversal:
- Card-by-card navigation with prev/next
- Progress dots + jump menu
- Touch/swipe support for mobile
- Keyboard arrows (←/→) for navigation
- Completion modal on path finish
- Auto-saves progress to localStorage

**BrowseView.jsx** - Card discovery:
- Filters: deck, difficulty, search query
- Card preview grid
- Click opens modal with full card details
- URL query param support (`?card=CARD-ID`)
- ESC key closes modal

### Styling Philosophy

**Vanilla CSS with CSS Custom Properties.** No Tailwind/CSS-in-JS.

- Each component has paired `.css` file
- Global theme variables in `:root` and `[data-theme="dark"]`
- Responsive breakpoints at 768px
- Card component uses absolute positioning for flip effect
- **IMPORTANT:** Scope generic class names (e.g., `.steps` in LandingPage must be `.how-it-works .steps` to avoid conflicts with Card component)

### Key User Flows

1. **Problem Discovery (Primary CTA):**
   - Landing → "Find Your Framework" → `/start` diagnostic
   - Routes to specific path based on answers
   - Emphasizes problem validation before AI solution

2. **Path Learning:**
   - Select path → Card 1 → Read → Flip → Next → ... → Completion
   - Progress auto-saves, can resume later
   - Can jump to any card via menu

3. **Card Browsing:**
   - Browse all cards by deck/difficulty
   - Search by title/description/category
   - Click card → modal → related cards → discover more

## Content Guidelines

**Path Titles:** Outcome-focused, conversational, pain-driven
- ❌ "AI Product Roadmap Planning"
- ✅ "Plan Your Next 6 Months of AI"

**Card Content:**
- **whenToUse:** 3 specific scenarios (not generic)
- **steps:** Actionable numbered list (use proper markdown lists, not "(1), (2)")
- **tips:** 2 pro tips with tactical advice
- **relatedCards:** 2-3 cards in format "Next: Card Title" or "Also: Card Title"

**Terminology:**
- Content: "frameworks" (SEO-friendly, professional)
- Brand: "AI PM Cards" (memorable, unique)
- Avoid: "tactics", "tools", "cards" in user-facing copy

## Git Workflow

**Commit message format:**
```
Brief title describing change

## Section
- Bullet points with details
- What changed and why

## Another Section
- More context

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Never commit without:**
1. Running the dev server to verify changes
2. Testing affected user flows
3. Checking for CSS conflicts (especially with generic class names)

## Common Patterns

### Adding a New Card
1. Add to `cardData.json` cards object with proper ID (next in sequence for deck)
2. Follow all required fields: id, deck, category, difficulty, companyContext, title, description, whenToUse, overview, steps, tips, relatedCards, icon
3. Update relevant path `cardIds` arrays if part of a learning journey
4. Test card rendering in both PathView and BrowseView

### Adding a New Path
1. Add to `cardData.json` paths object
2. Required: id, title, description, cardIds
3. Optional: duration, difficulty, targetAudience
4. Use outcome-focused title (see Content Guidelines)
5. Order cardIds in logical learning sequence

### CSS Scoping
When adding styles for components used in multiple contexts:
```css
/* ❌ Too generic - will conflict */
.steps { display: grid; }

/* ✅ Properly scoped */
.how-it-works .steps { display: grid; }
.card-back .steps { list-style: decimal; }
```

## Known Issues & Quirks

- **Card related navigation:** Uses fuzzy title matching, not IDs. Can fail if titles are too similar.
- **localStorage keys:** Must include path ID to avoid conflicts (`path-progress-{pathId}`)
- **Theme flash:** Brief flash on load before theme applies (acceptable UX tradeoff)
- **Mobile swipe:** Requires 50px minimum swipe distance to prevent accidental navigation

## Technical Debt

- No backend - all content is client-side JSON
- No authentication - all features are public
- Templates on ResourcesPage are placeholders (files don't exist yet)
- Diagnostic flow exists but could be more sophisticated
- No analytics beyond Vercel default (page views only)
