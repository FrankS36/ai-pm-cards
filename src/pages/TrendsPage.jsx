import { useNavigate } from 'react-router-dom';
import { TrendingUp, AlertCircle, Zap, Eye, ArrowRight } from 'lucide-react';

function TrendsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16 px-6 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full">
            <TrendingUp className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">January 2025</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI PM Trend Alert
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            What's happening in AI product management this month—and what you should do about it.
          </p>
        </div>

        {/* Hot Trends */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              🔥 Hot Topics This Month
            </h2>
          </div>

          {/* Trend 1: Agentic AI */}
          <div className="mb-10 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  1. Agentic AI & Multi-Agent Systems
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-xs font-bold uppercase">
                    Emerging
                  </span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-xs font-bold uppercase">
                    Critical
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-bold uppercase">
                    Actionable
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">What's Happening</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  AI products are shifting from single-model features to multi-agent systems. OpenAI's Swarm, LangGraph orchestration, and AutoGPT patterns are moving from research to production. Maven's #1 AI PM course now teaches "agentic AI" as core curriculum.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why It Matters for AI PMs</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Single models hit capability limits on complex workflows (research + analysis + writing)</li>
                  <li>Specialized agents outperform monolithic models on multi-step tasks</li>
                  <li>PMs need new frameworks for designing agent workflows, handoffs, and failure recovery</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Knowledge Gap</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  PMs are asking: "How do I design agent handoffs?" "What's the right granularity?" "How do I test agent interactions?" No tactical PM frameworks exist yet—mostly engineering documentation.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">✅ What We Added</h4>
                <button
                  onClick={() => navigate('/framework/EXEC-054')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <span>New Framework: Design Multi-Agent Workflows</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Tactical framework for decomposing workflows, defining agent roles, and designing handoff protocols. We're the first to publish a PM-focused agentic AI framework.
                </p>
              </div>
            </div>
          </div>

          {/* Trend 2: AI Evaluation */}
          <div className="mb-10 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  2. AI Evaluation Frameworks & Benchmarking
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-bold uppercase">
                    Growing
                  </span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-xs font-bold uppercase">
                    Critical
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">What's Happening</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  "How do I know if my AI is good enough to ship?" is the #1 PM question. Anthropic and OpenAI releasing evaluation libraries. EU AI Act requires documented evaluation processes.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why It Matters</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Regulations require evidence that AI systems meet safety and performance thresholds</li>
                  <li>Accuracy metrics alone hide critical failure modes (bias, robustness, edge cases)</li>
                  <li>PMs need holistic evaluation: model metrics + user satisfaction + safety</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">📋 Coming Soon</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We're building an <strong>AI Evaluation Scorecard</strong> tool (like our ROI Calculator) to help you design comprehensive evaluation suites with model, user, and safety metrics.
                </p>
              </div>
            </div>
          </div>

          {/* Trend 3: Prompt Engineering for PMs */}
          <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  3. Prompt Engineering as Core PM Skill
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-bold uppercase">
                    Growing
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-xs font-bold uppercase">
                    High Impact
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">What's Happening</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  PMs expected to prototype with Claude Code, Cursor, Replit Agent. OpenAI Academy launching "prompt engineering basics" certification. Job postings now require "proficiency with LLM prompting."
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Why It Matters</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>PMs need to spec prompts in PRDs, not just features</li>
                  <li>Rapid prototyping requires hands-on prompting skills</li>
                  <li>Prompt design affects cost, latency, and quality at scale</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">✅ Already Available</h4>
                <button
                  onClick={() => navigate('/prompts')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <span>View AI PM Prompts Library</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  Production-ready prompts for ChatGPT, Claude, or any AI assistant. Each prompt uses frameworks from this site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Watch List */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              🚀 Watch List: Emerging Signals
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                AI-Generated Synthetic Data for Training
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                <strong>Status:</strong> Early adopters testing, not yet mainstream
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Using LLMs to generate training data instead of collecting real data. Could accelerate cold-start problem but raises quality questions.
              </p>
            </div>

            <div className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Multimodal Product Experiences
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                <strong>Status:</strong> GPT-4 Vision, Gemini multimodal available but few production use cases
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Products that seamlessly blend text, image, audio, and video inputs/outputs. Still searching for killer use cases beyond demos.
              </p>
            </div>

            <div className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                AI Product Analytics & Observability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                <strong>Status:</strong> Tools emerging (LangSmith, Braintrust, Humanloop) but fragmented
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Specialized analytics for AI products (prompt performance, model drift, user satisfaction by use case). Gap between traditional product analytics and AI-specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What We're Building Next
            </h2>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              February 2025 Roadmap
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">AI Evaluation Scorecard Tool</strong>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Interactive tool to design comprehensive evaluation suites</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Prompt Engineering for PMs Framework</strong>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">New card on writing effective prompts for product specs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Case Studies Section</strong>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Real examples of how these frameworks were used at Dell and other companies</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-800 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Explore 157 AI PM Frameworks
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            From strategy to risk to execution—battle-tested frameworks from Dell Technologies
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/browse')}
              className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Browse All Frameworks →
            </button>
            <button
              onClick={() => navigate('/start')}
              className="bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Find Your Framework →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-2">
            <strong>Next Trend Alert:</strong> February 1, 2025
          </p>
          <p>
            Have a trend we should cover? <a href="/collaborate" className="underline hover:text-gray-900 dark:hover:text-white">Let us know</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrendsPage;
