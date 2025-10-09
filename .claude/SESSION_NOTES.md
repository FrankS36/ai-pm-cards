# Session Notes - 2025-10-08

## What We Accomplished Today

### 1. Individual Framework Pages (Major Feature)
**Impact:** SEO game-changer - 156 unique URLs for search engine indexing

**What was built:**
- Created `FrameworkPage.jsx` component for dedicated framework display
- Created `FrameworkPage.css` with full responsive styling
- Added `/framework/:cardId` route to App.jsx
- Updated all navigation to use framework pages instead of modals

**Files modified:**
- `src/pages/FrameworkPage.jsx` (NEW)
- `src/pages/FrameworkPage.css` (NEW)
- `src/App.jsx` - Added framework route
- `src/pages/BrowseView.jsx` - Removed modal, cards navigate to framework pages
- `src/components/Card.jsx` - Related cards link to framework pages
- `src/pages/LandingPage.jsx` - Validation cards link to frameworks
- `src/pages/ResourcesPage.jsx` - Template links navigate to frameworks
- `src/pages/ResourcesPage.css` - Button styling

**Key features:**
- Individual pages show: metadata, icon, title, description, when to use, overview, steps, tips, related frameworks, learning paths
- Related framework navigation with title-based matching
- Shows which learning paths contain each framework
- Query parameter redirect: `/browse?card=ID` → `/framework/ID`
- Share functionality on each page
- Mobile responsive

**Why it matters:**
- Each framework can now rank independently in Google
- Direct shareable links to specific frameworks
- Better UX than modal (easier to read, bookmark, share)
- Discoverability: users can see which paths contain each framework

### 2. Updated CLAUDE.md
**What:** Comprehensive documentation for future AI coding sessions

**Sections added:**
- Development commands
- Content architecture (cardData.json structure)
- Routing & navigation patterns
- State management approach
- Component structure
- CSS scoping rules (lessons learned)
- Content guidelines
- Git workflow
- Known issues and technical debt

**Why it matters:** Future Claude sessions can pick up exactly where we left off without re-learning project patterns

## Previous Session Accomplishments (Context)

### Path Title Rebrand
- Changed all 20 path titles from corporate speak to outcome-focused, conversational, pain-driven language
- Example: "AI Product Roadmap Planning" → "Plan Your Next 6 Months of AI"

### Navigation Subtlety
- Changed "Hire Me" to "Collaborate" in navigation

### Problem Discovery Frameworks (6 New Frameworks)
- Added STRAT-026 through STRAT-031
- Topics: Problem statements, customer discovery, JTBD, validation, sizing, design sprints
- Total frameworks increased from 150 to 156

### Diagnostic Flow Enhancement
- Made "Is AI Even the Right Solution?" the featured first option
- Added gradient background and "⭐ Start Here" badge
- Properly routes to problem-discovery path

## What's Working Well

✅ **Content Architecture** - Single source of truth in cardData.json is clean and maintainable
✅ **SEO Foundation** - 156 unique framework URLs ready for indexing
✅ **User Flow** - Diagnostic → Path → Framework page flow is solid
✅ **Messaging** - Outcome-focused, pain-driven language resonates
✅ **Navigation** - Consistent patterns across all pages
✅ **Mobile UX** - Responsive design works well

## What Needs Attention Next

### Priority 1: About Page (Credibility)
**Why:** Users need to know who Frank is and why they should trust the frameworks

**What to build:**
- Frank's background (AI/ML PM at Dell, CSPO)
- Origin story: Why these frameworks exist
- Battle-tested credibility (shipped real AI/ML products)
- Social proof if available (LinkedIn, testimonials)
- Clear but subtle call-to-action for collaboration

**Files to modify:**
- `src/pages/AboutPage.jsx` (exists but likely empty/placeholder)
- `src/pages/AboutPage.css`

**Messaging approach:**
- Direct, no BS tone (matches rest of site)
- Show the pain: "I shipped AI features that flopped and AI features that scaled"
- Position frameworks as hard-won lessons, not theory
- Emphasize practical, actionable content

### Priority 2: Search Functionality
**Why:** With 156 frameworks, users need better discovery beyond browse filters

**What to build:**
- Global search bar (probably in Navigation)
- Search across: title, description, category, steps, tips
- Live search results dropdown
- Keyboard shortcuts (⌘K / Ctrl+K to open search)
- Recent searches persistence

**Files to create:**
- `src/components/GlobalSearch.jsx`
- `src/components/GlobalSearch.css`

**Files to modify:**
- `src/components/Navigation.jsx` - Add search trigger
- `src/utils/search.js` - Search algorithm

**Implementation notes:**
- Use fuzzy matching (allow typos)
- Highlight matched text
- Group results by deck
- Link directly to framework pages

### Priority 3: Template Files (Resources Page)
**Why:** ResourcesPage promises 3 templates but files don't exist yet

**What to build:**
- Progressive Disclosure Design Worksheet (PDF)
- AI Risk Assessment Scorecard (PDF)
- AI Opportunity Canvas (PDF)

**Files to create:**
- `public/templates/progressive-disclosure-worksheet.pdf`
- `public/templates/risk-assessment-scorecard.pdf`
- `public/templates/ai-opportunity-canvas.pdf`

**Implementation notes:**
- Design in Figma/Canva
- Export as PDF
- Ensure related framework IDs are correct in ResourcesPage.jsx
- Test download flow

### Priority 4: Email Integration (ConvertKit/Beehiiv)
**Why:** Currently ResourcesPage triggers downloads immediately, no email capture

**What to integrate:**
- ConvertKit or Beehiiv API for email collection
- Send download links via email instead of browser download
- Weekly newsletter integration mentioned in copy

**Files to modify:**
- `src/pages/ResourcesPage.jsx` - Replace setTimeout with API call
- `.env` - Add API keys
- Consider serverless function (Vercel Functions) to hide API keys

### Priority 5: Analytics Enhancement
**Why:** Only basic Vercel analytics, need more insights

**What to add:**
- Custom events for key actions:
  - Framework viewed
  - Path started/completed
  - Diagnostic completed
  - Template downloaded
  - Share button clicked
- Heatmap tool (Hotjar/Microsoft Clarity)
- Exit intent tracking

## Technical Debt to Address

1. **Related Card Navigation** - Currently uses fuzzy title matching, should use card IDs
2. **404 Handling** - NotFound page exists but not styled/optimized
3. **Loading States** - No spinners/skeletons for content loading
4. **Error Boundaries** - No React error boundaries for graceful failures
5. **Accessibility** - Need ARIA labels, keyboard nav improvements
6. **Test Coverage** - No tests yet (consider Vitest + Testing Library)

## Content Opportunities

1. **More Paths** - Only 20 paths, could expand to 25-30 for more entry points
2. **Video Walkthroughs** - Embed Loom videos explaining key frameworks
3. **Case Studies** - Detailed "how I used this" stories
4. **Framework Combos** - "If you're doing X, also do Y and Z" suggestions
5. **Difficulty Progression** - Beginner → Intermediate → Advanced learning tracks

## SEO To-Do (Post-Framework Pages)

1. **Meta Tags** - Add unique meta descriptions for each framework page
2. **Structured Data** - Add schema.org markup for articles/how-tos
3. **Sitemap** - Generate sitemap.xml with all framework URLs
4. **robots.txt** - Ensure proper crawling directives
5. **Open Graph** - Preview cards for social sharing
6. **Internal Linking** - Cross-link related frameworks more aggressively

## Questions for Next Session

- **About page tone:** How much personal story vs. pure credentials?
- **Search scope:** Include path descriptions in search or just frameworks?
- **Template style:** Professional corporate or more casual/visual?
- **Email service:** ConvertKit vs. Beehiiv preference?

## Files to Review Before Next Session

- `src/pages/AboutPage.jsx` - Check current state
- `src/pages/ResourcesPage.jsx` - Review TODO comments
- `src/data/cardData.json` - Consider which paths might need expansion

## Deployment Status

✅ All changes pushed to GitHub
✅ Vercel auto-deploy triggered
✅ Framework pages live at https://ai-pm-cards.vercel.app/framework/{CARD-ID}

## Last Commit

```
Add individual framework pages for all 156 frameworks

## Features
- Dedicated `/framework/:cardId` route for each framework
- Shows metadata, steps, tips, related frameworks, learning paths
- Related framework navigation with title matching
- Query parameter redirect: /browse?card=ID → /framework/ID

## Benefits
- SEO: Each framework can rank independently
- Sharing: Direct links to specific frameworks
- UX: Cleaner than modal, easier to read
- Discoverability: Shows which paths contain each framework

## Files Modified
- Added FrameworkPage.jsx and FrameworkPage.css
- Updated App.jsx with framework route
- Updated BrowseView, Card, LandingPage, ResourcesPage navigation

🤖 Generated with Claude Code
```

---

**Next time:** Start with About page for credibility, then search functionality.
