# AI PM Cards - Project Context

**Last Updated:** 2025-10-08
**Status:** ✅ Deployed to GitHub | 🚀 Deploying to Vercel
**GitHub:** https://github.com/FrankS36/ai-pm-cards

---

## 📋 Project Overview

**AI Product Manager Card Decks** - A guided card system inspired by Pip Decks format to help AI Product Managers navigate strategy, risk, and execution challenges.

### What This Is
- Interactive web application built with React + Vite
- 128 tactical cards across 3 decks (Strategy, Risk, Execution)
- 20 curated journey paths for common AI PM scenarios
- Problem-focused diagnostic flow to guide users
- Full browse/search/filter capabilities

### Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite 5.4.11
- **Routing:** React Router 7
- **Styling:** Vanilla CSS
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

---

## 🎯 What We've Built

### 1. Card System (128 Cards Total)

**Strategy Deck (25 cards)**
- Categories: Vision & Opportunity, Value Proposition, AI Feasibility, Business Model, Roadmap
- File: `src/data/cardData.json` (partial - STRAT-001 through STRAT-025)

**Risk Management Deck (50 cards)**
- Categories: Risk Assessment, Model Risks, Data Risks, User Trust, Compliance & Ethics, Operational Risks
- Complete deck in cardData.json (RISK-001 through RISK-050)

**Execution Tactics Deck (53 cards)**
- Categories: Product Specs, Data Infrastructure, Model Development, Testing & Deployment, UX Design, Monitoring & Operations, MLOps, Team & Process
- Complete deck in cardData.json (EXEC-001 through EXEC-053)

### 2. Journey Paths (20 Total)

**Strategy Paths (5)**
1. From Concept to Validated Strategy
2. Building Your First AI Business Case
3. AI Product Roadmap Planning
4. Choosing the Right AI Approach
5. Pricing Your AI Product

**Risk Paths (4)**
6. Preventing AI Failures Before Launch
7. Building Trust in AI Products
8. AI Compliance & Ethics Fundamentals
9. Fixing Underperforming AI

**Execution Paths (6)**
10. Scoping Your First AI Feature
11. From Model to Production
12. Launching AI Features Safely
13. Building AI Data Pipelines
14. Designing AI User Experiences
15. AI Testing & Quality Assurance

**Cross-Cutting Paths (5)**
16. End-to-End: New AI Product Launch
17. AI for Enterprise: Complete Guide
18. Optimizing AI Costs & Performance
19. AI Product Management Fundamentals (Beginner)
20. Responsible AI Program Setup

All paths defined in: `JOURNEY_PATHS_DESIGN.md` and `src/data/cardData.json`

### 3. User Experience Flow

**Entry Points:**
1. **Diagnostic Flow** - Problem-focused questions lead to appropriate paths
   - Q1: What's your current situation? (New to AI / Planning / Building / Problem)
   - Q2: Specific problem statements based on Q1 selection
2. **Browse Paths** - Visual directory of all 20 journey paths
3. **Browse Cards** - Filter/search all 128 cards

**Diagnostic Pages:**
- `/start` - DiagnosticQ1.jsx (4 situation categories)
- `/start/planning` - DiagnosticPlanning.jsx (6 planning problems)
- `/start/building` - DiagnosticBuilding.jsx (7 execution problems)
- `/start/problem` - DiagnosticQ2Problem.jsx (5 critical issues)

**Core Pages:**
- `/` - LandingPage.jsx (hero, CTA, how it works)
- `/paths` - PathsDirectory.jsx (all 20 paths with filters)
- `/path/:pathId` - PathView.jsx (card-by-card journey)
- `/browse` - BrowseView.jsx (all cards with search/filters)

### 4. Features Implemented

**Card Features:**
- ✅ Card flip interaction (front/back)
- ✅ Full card content (title, description, when to use, overview, steps, tips)
- ✅ Category and difficulty badges
- ✅ Icon representation

**Path Features:**
- ✅ Sequential card navigation (Next/Previous)
- ✅ Progress tracking with dots
- ✅ Card counter display
- ✅ Completion message

**Browse Features:**
- ✅ Deck filter (All/Strategy/Risk/Execution)
- ✅ Difficulty filter (All/Beginner/Intermediate/Advanced)
- ✅ Real-time search (title, description, category)
- ✅ Card preview cards with metadata
- ✅ Click-to-expand modal with full card content
- ✅ Results counter

**Paths Directory Features:**
- ✅ Category filter (All/Strategy/Risk/Execution/Cross-Cutting)
- ✅ Path preview cards with metadata
- ✅ Duration and difficulty display
- ✅ Target audience information
- ✅ Card count per path

**Design System:**
- ✅ Consistent color coding (blue=strategy, red=risk, green=execution)
- ✅ Responsive design (mobile-friendly)
- ✅ Smooth transitions and hover states
- ✅ Clean, professional UI

---

## 📁 Project Structure

```
ai-pm-cards/
├── .claude/
│   ├── agents/
│   │   └── ai-pm-card-generator.md
│   └── PROJECT_CONTEXT.md (this file)
├── src/
│   ├── components/
│   │   ├── Card.jsx (reusable card component)
│   │   └── Card.css
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── DiagnosticQ1.jsx
│   │   ├── DiagnosticPlanning.jsx
│   │   ├── DiagnosticBuilding.jsx
│   │   ├── DiagnosticQ2Problem.jsx
│   │   ├── PathView.jsx
│   │   ├── PathsDirectory.jsx
│   │   ├── BrowseView.jsx
│   │   └── [corresponding .css files]
│   ├── data/
│   │   └── cardData.json (128 cards + 20 paths)
│   ├── App.jsx (routing setup)
│   ├── main.jsx
│   └── index.css
├── public/
├── DEPLOYMENT_GUIDE.md
├── JOURNEY_PATHS_DESIGN.md
├── README.md
├── package.json
└── vite.config.js
```

---

## 🚀 Deployment Status

### GitHub
- ✅ Repository created: https://github.com/FrankS36/ai-pm-cards
- ✅ Initial commit pushed
- ✅ Branch: `main`

### Vercel
- 🚧 In Progress
- Next: Connect GitHub repo to Vercel
- Expected URL: `ai-pm-cards.vercel.app`

### Build Configuration
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite (auto-detected)
- Node Version: 18.20.8+

---

## 📝 Development Notes

### Card Data Structure
Each card in `cardData.json` follows this schema:
```json
{
  "id": "EXEC-001",
  "deck": "execution",
  "category": "Product Specs",
  "difficulty": "intermediate",
  "companyContext": "both",
  "title": "Write AI Product Specs",
  "description": "...",
  "whenToUse": ["...", "..."],
  "overview": "...",
  "steps": ["...", "..."],
  "tips": ["...", "..."],
  "relatedCards": ["...", "..."],
  "icon": "📝"
}
```

### Path Data Structure
Each path in `cardData.json` follows this schema:
```json
{
  "id": "path-id",
  "title": "Path Name",
  "description": "...",
  "duration": "1-2 weeks",
  "difficulty": "intermediate",
  "targetAudience": "...",
  "cardIds": ["CARD-001", "CARD-002", ...]
}
```

### Component Architecture
- **Stateless functional components** with hooks
- **React Router** for client-side navigation
- **JSON-driven content** - all card/path data in one file
- **CSS Modules pattern** - component-specific stylesheets

### Content Generation
- Used `ai-pm-card-generator` agent (Claude task agent)
- Generated cards in batches to avoid token limits
- Merged into single `cardData.json`
- Intermediate files: `strategy-cards-batch-2.json`, `risk-management-cards-complete.json`, `execution-tactics-complete.json`

---

## 🎯 Current State & Next Steps

### ✅ Completed
1. Full React application with 128 cards
2. 20 curated journey paths
3. Problem-focused diagnostic flow
4. Browse/search/filter functionality
5. Paths directory
6. Responsive design
7. Git repository initialized
8. Pushed to GitHub

### 🚧 In Progress
- Deploying to Vercel

### 📋 Immediate Next Steps
1. **Verify Vercel deployment** - Test all pages work in production
2. **Add vercel.json** - For proper SPA routing
3. **Test on mobile** - Ensure responsive design works
4. **Fix any deployment issues**

### 🔮 Future Enhancements
1. **Analytics** - Add Vercel Analytics or Google Analytics
2. **Progress Tracking** - Save user progress in localStorage
3. **Bookmarking** - Allow users to favorite cards
4. **Custom Domain** - Set up professional domain
5. **Dark Mode** - Theme toggle
6. **Card Linking** - Navigate between related cards
7. **Export Features** - Print/PDF paths as checklists
8. **Social Sharing** - Share paths and cards
9. **Keyboard Shortcuts** - ESC to close, arrows to navigate
10. **Generate Missing Cards** - Complete to 150 cards (22 more needed)

---

## 🐛 Known Issues

### None Currently
Build tested successfully, no errors in production build.

### Potential Issues to Watch
- **SPA Routing:** May need `vercel.json` with rewrites for client-side routing
- **Large Bundle Size:** Main JS bundle is ~437KB (consider code splitting later)
- **Card Data Size:** Loading all 128 cards at once (could lazy load in future)

---

## 💡 Design Decisions

### Why These Choices?

**React + Vite over Next.js:**
- Simpler for SPA use case
- Faster dev experience
- No need for SSR/API routes yet

**Single JSON file for data:**
- Easy to edit and maintain
- Fast client-side filtering
- Could move to CMS later if needed

**Problem-focused diagnostic flow:**
- More user-centric than generic categories
- Uses real PM language ("I need to..." statements)
- Guides users to solutions faster

**20 paths (not just 1-2):**
- Covers diverse AI PM scenarios
- Mix of beginner to advanced
- Cross-cutting paths for complex journeys

**CSS over Tailwind:**
- Full control over styling
- No build-time overhead
- Cleaner for this project size

---

## 🔧 Common Commands

```bash
# Development
cd ~/Projects/ai-pm-cards
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build

# Git
git status           # Check changes
git add .            # Stage all changes
git commit -m "..."  # Commit with message
git push             # Push to GitHub

# Deployment
vercel               # Deploy preview
vercel --prod        # Deploy to production
```

---

## 📚 Key Files to Reference

1. **cardData.json** - All cards and paths
2. **JOURNEY_PATHS_DESIGN.md** - Path definitions and methodology
3. **DEPLOYMENT_GUIDE.md** - Complete deployment instructions
4. **README.md** - Project overview and quick start

---

## 🤝 How to Use This Context

**When starting a new Claude Code session:**

1. Read this file first:
   ```
   Read .claude/PROJECT_CONTEXT.md
   ```

2. Check current status:
   ```bash
   git status
   git log --oneline -5
   ```

3. Ask specific questions like:
   - "What paths are implemented?"
   - "Where is the card data stored?"
   - "What's left to deploy?"
   - "Show me the diagnostic flow"

**When making changes:**
- Update this file if you add major features
- Keep "Current State & Next Steps" section current
- Add to "Known Issues" if bugs found

---

## 🎓 Project Philosophy

### Content Approach
- **Tactical over Theoretical** - Every card is actionable
- **Battle-tested** - Real-world PM practices
- **Specific over Generic** - Clear, concrete guidance
- **Progressive Disclosure** - Start simple, go deep

### UX Approach
- **Problem-first** - Start with user's pain point
- **Guided Discovery** - Paths lead through related concepts
- **Exploration-friendly** - Browse/search for direct access
- **Mobile-first** - Works on any device

### Development Approach
- **Ship Fast** - MVP first, iterate based on feedback
- **Keep it Simple** - No premature optimization
- **User-Centric** - Solve real PM problems
- **Open for Evolution** - Easy to extend and improve

---

**This project was built with Claude Code (Sonnet 4.5) over multiple sessions in October 2025.**

---

## 📞 Quick Reference

- **Local URL:** http://localhost:5173
- **GitHub:** https://github.com/FrankS36/ai-pm-cards
- **Vercel:** [Pending deployment]
- **Project Path:** /Users/franksellhausen/Projects/ai-pm-cards
- **Card Count:** 128 (25 Strategy, 50 Risk, 53 Execution)
- **Path Count:** 20
- **Main Data File:** src/data/cardData.json
