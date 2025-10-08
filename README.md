# AI PM Card Decks - React MVP

A guided card system to help AI Product Managers navigate strategy, risk, and execution challenges.

**Now built with React + Vite for better scalability and component reusability.**

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
- **React 18** - Component-based UI
- **React Router 7** - Client-side routing
- **Vite 5** - Fast build tool and dev server
- **Vanilla CSS** - Modular CSS files

### Screens
- Landing Page → Diagnostic Q1 → Diagnostic Q2 → Path View → Browse
- 6 sample cards across Strategy, Risk, and Execution decks
- Complete "Concept to Strategy" journey path

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

## 🚀 Deployment

Works with Netlify, Vercel, GitHub Pages, or any static host.

Build command: `npm run build`  
Publish directory: `dist`

## 📈 Next Steps

1. Add remaining 144 cards
2. Build 15-20 journey paths  
3. Add search and filtering
4. Implement bookmarks/progress tracking

---

**Built with React + Vite**
