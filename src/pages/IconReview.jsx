import {
  Target, Compass, Lightbulb, TrendingUp, Users, MessageSquare,
  FileText, CheckCircle, Workflow, GitBranch, Database, Code,
  Shield, AlertTriangle, Lock, Eye, FileCheck, Scale,
  Rocket, Gauge, Zap, Settings, Layers, Package,
  Brain, Network, Sparkles, Activity, BarChart, LineChart,
  Search, Filter, Map, Flag, Clock, Calendar,
  Box, Folder, List, Grid, Layout, Puzzle,
  CircleDot, Square, Triangle, Hexagon, Circle, Diamond
} from 'lucide-react';

function IconReview() {
  const iconSections = [
    {
      category: 'Strategy Icons',
      description: 'For planning, vision, and decision-making frameworks',
      icons: [
        { name: 'Target', component: Target, use: 'Goals, objectives, focus' },
        { name: 'Compass', component: Compass, use: 'Direction, navigation, strategy' },
        { name: 'Lightbulb', component: Lightbulb, use: 'Ideas, innovation, discovery' },
        { name: 'TrendingUp', component: TrendingUp, use: 'Growth, metrics, performance' },
        { name: 'Users', component: Users, use: 'User research, personas, teams' },
        { name: 'MessageSquare', component: MessageSquare, use: 'Interviews, feedback, communication' },
        { name: 'Search', component: Search, use: 'Discovery, research, analysis' },
        { name: 'Map', component: Map, use: 'Roadmaps, planning, navigation' },
        { name: 'Flag', component: Flag, use: 'Milestones, goals, checkpoints' },
      ]
    },
    {
      category: 'Risk & Safety Icons',
      description: 'For risk management, compliance, and safety frameworks',
      icons: [
        { name: 'Shield', component: Shield, use: 'Protection, security, safety' },
        { name: 'AlertTriangle', component: AlertTriangle, use: 'Warnings, risks, caution' },
        { name: 'Lock', component: Lock, use: 'Security, privacy, compliance' },
        { name: 'Eye', component: Eye, use: 'Monitoring, observation, transparency' },
        { name: 'FileCheck', component: FileCheck, use: 'Validation, verification, testing' },
        { name: 'Scale', component: Scale, use: 'Balance, ethics, fairness' },
        { name: 'Activity', component: Activity, use: 'Monitoring, health checks, metrics' },
      ]
    },
    {
      category: 'Execution & Building Icons',
      description: 'For implementation, development, and delivery frameworks',
      icons: [
        { name: 'Rocket', component: Rocket, use: 'Launch, deployment, delivery' },
        { name: 'Gauge', component: Gauge, use: 'Performance, speed, optimization' },
        { name: 'Zap', component: Zap, use: 'Fast, efficient, quick wins' },
        { name: 'Settings', component: Settings, use: 'Configuration, setup, tuning' },
        { name: 'Layers', component: Layers, use: 'Architecture, structure, components' },
        { name: 'Package', component: Package, use: 'Features, modules, releases' },
        { name: 'Code', component: Code, use: 'Development, technical specs' },
        { name: 'Database', component: Database, use: 'Data, storage, pipelines' },
        { name: 'Workflow', component: Workflow, use: 'Processes, flows, pipelines' },
        { name: 'GitBranch', component: GitBranch, use: 'Branching, decisions, paths' },
      ]
    },
    {
      category: 'AI & Intelligence Icons',
      description: 'For AI-specific frameworks',
      icons: [
        { name: 'Brain', component: Brain, use: 'AI, ML, intelligence, learning' },
        { name: 'Network', component: Network, use: 'Neural networks, connections' },
        { name: 'Sparkles', component: Sparkles, use: 'AI magic, generative AI' },
        { name: 'CircleDot', component: CircleDot, use: 'Model, node, focus point' },
      ]
    },
    {
      category: 'Analysis & Metrics Icons',
      description: 'For measurement, analysis, and reporting frameworks',
      icons: [
        { name: 'BarChart', component: BarChart, use: 'Metrics, analytics, data' },
        { name: 'LineChart', component: LineChart, use: 'Trends, growth, tracking' },
        { name: 'Filter', component: Filter, use: 'Filtering, segmentation' },
        { name: 'CheckCircle', component: CheckCircle, use: 'Validation, success, completion' },
      ]
    },
    {
      category: 'Organization & Structure Icons',
      description: 'For frameworks about organization and planning',
      icons: [
        { name: 'Box', component: Box, use: 'Components, modules, units' },
        { name: 'Folder', component: Folder, use: 'Categories, groups, organization' },
        { name: 'List', component: List, use: 'Checklists, steps, sequences' },
        { name: 'Grid', component: Grid, use: 'Frameworks, matrices, structure' },
        { name: 'Layout', component: Layout, use: 'Design, UX, structure' },
        { name: 'Puzzle', component: Puzzle, use: 'Integration, fit, compatibility' },
        { name: 'Clock', component: Clock, use: 'Timing, scheduling, duration' },
        { name: 'Calendar', component: Calendar, use: 'Planning, timeline, roadmap' },
      ]
    },
    {
      category: 'Shape Icons',
      description: 'Geometric shapes for abstract concepts',
      icons: [
        { name: 'Square', component: Square, use: 'Stability, foundation, structure' },
        { name: 'Triangle', component: Triangle, use: 'Priority, hierarchy, direction' },
        { name: 'Hexagon', component: Hexagon, use: 'Interconnected, modular' },
        { name: 'Circle', component: Circle, use: 'Cycle, complete, holistic' },
        { name: 'Diamond', component: Diamond, use: 'Value, quality, premium' },
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-32 bg-white dark:bg-black">
      <div className="max-w-[1400px] mx-auto px-20 max-md:px-6">
        <div className="text-center mt-4 mb-8 md:mt-20 md:mb-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Icon Library Preview
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Lucide icons organized by use case. These could replace the emoji icons on cards.
          </p>
        </div>

        <div className="space-y-16">
          {iconSections.map((section) => (
            <div key={section.category}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {section.category}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.icons.map((icon) => {
                  const Icon = icon.component;
                  return (
                    <div
                      key={icon.name}
                      className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-900 dark:hover:border-white transition-all"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon preview - default size */}
                        <div className="flex-shrink-0">
                          <Icon className="w-8 h-8 text-gray-900 dark:text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                            {icon.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {icon.use}
                          </p>
                        </div>

                        {/* Larger preview */}
                        <div className="flex-shrink-0">
                          <Icon className="w-12 h-12 text-gray-400 dark:text-gray-600" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Size Comparison */}
        <div className="mt-20 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Size Comparison
          </h2>
          <div className="flex items-center gap-8 flex-wrap">
            <div className="text-center">
              <Target className="w-6 h-6 text-gray-900 dark:text-white mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Small (24px)</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-gray-900 dark:text-white mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Medium (32px)</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-gray-900 dark:text-white mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Large (48px)</p>
            </div>
            <div className="text-center">
              <Target className="w-16 h-16 text-gray-900 dark:text-white mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400">XL (64px)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🎯</div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Emoji (current)</p>
            </div>
          </div>
        </div>

        {/* Color Variations */}
        <div className="mt-8 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Deck Color Variations
          </h2>
          <div className="flex items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                <Compass className="w-8 h-8 text-blue-700 dark:text-blue-300" />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Strategy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-2">
                <Shield className="w-8 h-8 text-red-700 dark:text-red-300" />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Risk</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-2">
                <Rocket className="w-8 h-8 text-emerald-700 dark:text-emerald-300" />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Execution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconReview;
