import {
  Target, Compass, Lightbulb, TrendingUp, Users, MessageSquare,
  FileText, CheckCircle, Workflow, GitBranch, Database, Code,
  Shield, AlertTriangle, Lock, Eye, FileCheck, Scale,
  Rocket, Gauge, Zap, Settings, Layers, Package,
  Brain, Network, Sparkles, Activity, BarChart, LineChart,
  Search, Filter, Map, Flag, Clock, Calendar,
  Box, Folder, List, Grid, Layout, Puzzle,
  CircleDot, Triangle, Diamond, Hexagon, Beaker,
  ClipboardList, PenTool, Microscope, TestTube, Bug,
  CloudCog, Server, HardDrive, Cpu, Binary
} from 'lucide-react';

// Default icon mapping by category
const categoryIcons = {
  'Strategy': Compass,
  'User Research': Users,
  'Vision & Planning': Target,
  'Product Discovery': Search,
  'Roadmapping': Map,
  'Business Case': FileText,
  'Metrics & KPIs': BarChart,
  'Decision Making': GitBranch,
  'Innovation': Lightbulb,
  'Growth': TrendingUp,

  'Risk Management': Shield,
  'Model Risk': AlertTriangle,
  'Bias & Fairness': Scale,
  'Safety & Security': Lock,
  'Monitoring': Eye,
  'Compliance': FileCheck,
  'Testing': TestTube,
  'Ethics': Scale,
  'Incident Response': AlertTriangle,

  'Execution': Rocket,
  'Technical Specs': Code,
  'Data Pipeline': Database,
  'Model Development': Brain,
  'Performance': Gauge,
  'Deployment': CloudCog,
  'Integration': Puzzle,
  'UX Design': Layout,
  'Architecture': Layers,
  'Optimization': Zap,
  'Workflow': Workflow,
  'Configuration': Settings,
  'Quality Assurance': CheckCircle,
  'Development': Code,
};

// Special icon mapping by card title keywords
const keywordIcons = {
  'Problem': Search,
  'Interview': MessageSquare,
  'Discover': Lightbulb,
  'Vision': Target,
  'Metric': BarChart,
  'Measure': LineChart,
  'Test': TestTube,
  'Monitor': Eye,
  'Deploy': Rocket,
  'Launch': Rocket,
  'Build': Layers,
  'Design': Layout,
  'User': Users,
  'Data': Database,
  'Model': Brain,
  'AI': Brain,
  'Risk': Shield,
  'Security': Lock,
  'Compliance': FileCheck,
  'Performance': Gauge,
  'Optimize': Zap,
  'Pipeline': Workflow,
  'Architecture': Layers,
  'Roadmap': Map,
  'Timeline': Calendar,
  'Sprint': Clock,
  'Bug': Bug,
  'Bias': Scale,
  'Fair': Scale,
  'Trust': Shield,
  'Neural': Network,
  'Train': Brain,
  'Feature': Package,
  'Integration': Puzzle,
  'API': Code,
  'Workflow': Workflow,
  'Process': Workflow,
  'Framework': Grid,
  'Template': FileText,
  'Checklist': ClipboardList,
  'Plan': Map,
  'Strategy': Compass,
};

// Deck fallback icons
const deckIcons = {
  'strategy': Compass,
  'risk': Shield,
  'execution': Rocket,
};

/**
 * Get the appropriate Lucide icon component for a card
 * @param {Object} card - Card object with title, category, and deck
 * @returns {Object} Lucide icon component
 */
export function getCardIcon(card) {
  if (!card) return Target; // Default fallback

  // 1. Try to match by category
  if (card.category && categoryIcons[card.category]) {
    return categoryIcons[card.category];
  }

  // 2. Try to match by title keywords
  if (card.title) {
    const title = card.title.toLowerCase();
    for (const [keyword, Icon] of Object.entries(keywordIcons)) {
      if (title.includes(keyword.toLowerCase())) {
        return Icon;
      }
    }
  }

  // 3. Fallback to deck-specific icon
  if (card.deck && deckIcons[card.deck]) {
    return deckIcons[card.deck];
  }

  // 4. Ultimate fallback
  return Target;
}

export { Target }; // Export default for testing
