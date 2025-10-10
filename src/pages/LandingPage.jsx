import { useNavigate } from 'react-router-dom';
import { Bot, Calculator, Shield, TrendingUp, Sparkles, BookOpen, ArrowRight } from 'lucide-react';

function LandingPage() {
  const navigate = useNavigate();

  const handleAgentClick = () => {
    // Track agent CTA click
    if (window.va) {
      window.va('event', {
        name: 'landing_agent_cta_click',
        data: { location: 'hero' }
      });
    }
    navigate('/agents');
  };

  const handleFrameworkClick = () => {
    // Track framework CTA click
    if (window.va) {
      window.va('event', {
        name: 'landing_framework_cta_click',
        data: { location: 'hero' }
      });
    }
    navigate('/browse');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">

        {/* Hero Section */}
        <header className="mb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-emerald-50 dark:bg-emerald-950/30 rounded-full border border-emerald-200 dark:border-emerald-800">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">100% Free • No Signup Required</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-gray-900 dark:text-white">AI agents that </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              autopilot PM work
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Generate business cases, audit risks, and scout competitors—in hours, not weeks. Put your PM deliverables on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              className="bg-gray-900 dark:bg-white text-white dark:text-black px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              onClick={handleAgentClick}
            >
              <Bot className="w-5 h-5" />
              Run Your First Agent
            </button>
            <button
              className="px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 border-2 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white text-gray-900 dark:text-white flex items-center gap-2"
              onClick={handleFrameworkClick}
            >
              <BookOpen className="w-5 h-5" />
              Browse 157 Frameworks
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500">
            Backed by frameworks from Dell Technologies • 100K+ users in production
          </p>
        </header>

        {/* AI Agents Grid */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              4 AI agents on demand
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Each agent automates a PM deliverable that typically takes days. Get instant output you can use immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ROI Calculator Agent */}
            <div
              className="p-8 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer group"
              onClick={() => navigate('/agents')}
            >
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calculator className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">ROI Calculator</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Build data-driven business cases that get budget approved. 3-scenario analysis with conservative estimates that CFOs trust.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">⏱️ 2 hours → deliverable</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Risk Auditor Agent */}
            <div
              className="p-8 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all cursor-pointer group"
              onClick={() => navigate('/agents')}
            >
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Risk Auditor</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Comprehensive pre-launch risk audits across model performance, data privacy, bias, security, and compliance.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">⏱️ 1 afternoon → audit</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Value Scout Agent */}
            <div
              className="p-8 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all cursor-pointer group"
              onClick={() => navigate('/agents')}
            >
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Value Scout</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Competitive intelligence and positioning analysis. Understand what competitors are doing and how to differentiate.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">⏱️ Minutes → insights</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* PRD Writer Agent */}
            <div
              className="p-8 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer group"
              onClick={() => navigate('/agents')}
            >
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">PRD Writer</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Write comprehensive Product Requirement Documents with AI-specific considerations, edge cases, and failure modes.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">⏱️ 2-3 hours → PRD</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              className="bg-gray-900 dark:bg-white text-white dark:text-black px-12 py-5 rounded-lg text-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              onClick={handleAgentClick}
            >
              <Bot className="w-6 h-6" />
              Try All 4 Agents Free
            </button>
          </div>
        </section>

        {/* Why This Works */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why PM Autopilot beats alternatives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/30 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                100% Free, Forever
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                No $99/mo subscriptions. No "upgrade for premium". All agents and frameworks completely free.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Battle-Tested Depth
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Backed by 157 frameworks from Dell Technologies. Shipped to 100K+ users in production.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Zero Learning Curve
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                No training required. No 40-hour courses. Instant output you can use immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Frameworks Section */}
        <section className="mb-32">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl border-2 border-gray-200 dark:border-gray-700 p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white dark:bg-gray-900 rounded-full border border-gray-300 dark:border-gray-700">
                  <BookOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Want to go deeper?</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  157 tactical frameworks
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  The agents automate output. The frameworks build expertise. Strategy, Risk, Execution—fully covered.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">31</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Strategy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">50</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Risk</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">76</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Execution</div>
                </div>
              </div>

              <div className="text-center">
                <button
                  className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 border-2 border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white text-gray-900 dark:text-white hover:text-white dark:hover:text-black inline-flex items-center gap-2"
                  onClick={handleFrameworkClick}
                >
                  <BookOpen className="w-5 h-5" />
                  Explore Framework Library
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Put your PM work on autopilot
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            Stop manually building business cases, risk audits, and competitive analyses. Let AI agents do it in hours while you focus on strategy.
          </p>
          <button
            className="bg-gray-900 dark:bg-white text-white dark:text-black px-16 py-6 rounded-lg text-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-lg hover:shadow-xl mb-6 inline-flex items-center gap-3"
            onClick={handleAgentClick}
          >
            <Bot className="w-6 h-6" />
            Start with AI Agents
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            100% free • No signup • All 4 agents + 157 frameworks
          </p>
        </section>

      </div>
    </div>
  );
}

export default LandingPage;
