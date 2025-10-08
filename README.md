# AI PM Card Decks

A guided card system to help AI Product Managers navigate strategy, risk, and execution challenges.

**128 tactical cards across 3 decks | 20 curated journey paths | Problem-focused diagnostic flow**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended 18.20.8 or higher)
- npm 10+

### Installation & Running

```bash
# Navigate to the project
cd ai-pm-cards

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at: **http://localhost:5173/**

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
ai-pm-cards/
├── src/
│   ├── components/
│   │   ├── Card.jsx              # Reusable card component with flip
│   │   └── Card.css
│   ├── pages/
│   │   ├── LandingPage.jsx       # Home/landing screen
│   │   ├── DiagnosticQ1.jsx      # First diagnostic question
│   │   ├── DiagnosticQ2Problem.jsx # Problem selection
│   │   ├── PathView.jsx          # Journey path with cards
│   │   ├── BrowseView.jsx        # Deck browser
│   │   └── *.css                 # Page-specific styles
│   ├── data/
│   │   └── cardData.json         # All card content and paths
│   ├── App.jsx                   # Main app with routing
│   ├── App.css                   # Global app styles
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Base styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 What's Included

### Tech Stack
- **React 19** - Component-based UI
- **React Router 6** - Client-side routing
- **Vite 5** - Fast build tool and dev server
- **Vanilla CSS** - Modular CSS files

### Content
- **128 Cards Total**
  - 25 Strategy cards (Vision, Value Prop, AI Feasibility, Business Model, Roadmap)
  - 50 Risk Management cards (Risk Assessment, Model Risks, Data Risks, Trust, Compliance, Ops)
  - 53 Execution cards (Specs, Data, Models, Testing, UX, Monitoring, MLOps, Process)
- **20 Journey Paths** - Curated card sequences for common AI PM scenarios
- **Problem-focused Diagnostic** - Answer questions to find the right path for your situation

### Features
- 🔄 Interactive card flipping (front/back)
- 🗺️ Guided paths with progress tracking
- 🔍 Browse all cards with search and filters
- 📱 Fully responsive mobile design
- 🎯 Problem-based navigation flow

## 🛠️ Development

### Adding Cards

Edit `src/data/cardData.json` and add new cards to the `cards` object.

### Creating Paths

Add to `paths` in `cardData.json` with array of card IDs.

## 📊 Scripts

```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🌐 Deployment

**Live Site:** [Coming soon - deploying to Vercel]

**GitHub:** https://github.com/FrankS36/ai-pm-cards

### Deploy Your Own
1. Fork the repository
2. Connect to Vercel/Netlify
3. Build command: `npm run build`
4. Output directory: `dist`

## 📈 Roadmap

- [ ] Analytics integration
- [ ] Progress tracking with localStorage
- [ ] Bookmark favorite cards
- [ ] Dark mode
- [ ] Custom domain
- [ ] Social sharing features
- [ ] Export paths as PDFs

---

**Built with React + Vite | 128 Cards | 20 Paths**
