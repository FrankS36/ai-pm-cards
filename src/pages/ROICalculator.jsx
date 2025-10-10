import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Download, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';

function ROICalculator() {
  const navigate = useNavigate();

  // Cost Savings Inputs
  const [hoursSaved, setHoursSaved] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [numUsers, setNumUsers] = useState(100);

  // Revenue Impact Inputs
  const [currentConversion, setCurrentConversion] = useState(2.5);
  const [projectedConversion, setProjectedConversion] = useState(3.5);
  const [avgDealSize, setAvgDealSize] = useState(5000);
  const [monthlyLeads, setMonthlyLeads] = useState(500);

  // Implementation Costs
  const [devCost, setDevCost] = useState(100000);
  const [operationalCost, setOperationalCost] = useState(2000);

  // Scenario multipliers
  const scenarios = {
    conservative: { label: 'Conservative (10th percentile)', multiplier: 0.5 },
    expected: { label: 'Expected (Median)', multiplier: 1.0 },
    optimistic: { label: 'Optimistic (90th percentile)', multiplier: 1.5 }
  };

  const calculateROI = (multiplier = 1.0) => {
    // Annual cost savings
    const weeklySavings = hoursSaved * hourlyRate * numUsers;
    const annualCostSavings = weeklySavings * 52 * multiplier;

    // Annual revenue impact
    const conversionLift = (projectedConversion - currentConversion) / 100;
    const additionalDeals = monthlyLeads * conversionLift * 12;
    const annualRevenueImpact = additionalDeals * avgDealSize * multiplier;

    // Total annual benefit
    const totalAnnualBenefit = annualCostSavings + annualRevenueImpact;

    // Total implementation cost (first year)
    const totalImplementationCost = devCost + (operationalCost * 12);

    // ROI metrics
    const netBenefit = totalAnnualBenefit - totalImplementationCost;
    const roiPercentage = (netBenefit / totalImplementationCost) * 100;
    const paybackMonths = totalImplementationCost / (totalAnnualBenefit / 12);

    return {
      annualCostSavings,
      annualRevenueImpact,
      totalAnnualBenefit,
      totalImplementationCost,
      netBenefit,
      roiPercentage,
      paybackMonths
    };
  };

  const conservativeROI = calculateROI(scenarios.conservative.multiplier);
  const expectedROI = calculateROI(scenarios.expected.multiplier);
  const optimisticROI = calculateROI(scenarios.optimistic.multiplier);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(value);
  };

  const exportToCSV = () => {
    const data = [
      ['AI Product ROI Calculator', ''],
      [''],
      ['INPUTS', ''],
      ['Cost Savings', ''],
      ['Hours saved per user per week', hoursSaved],
      ['Hourly rate ($)', hourlyRate],
      ['Number of users', numUsers],
      [''],
      ['Revenue Impact', ''],
      ['Current conversion rate (%)', currentConversion],
      ['Projected conversion rate (%)', projectedConversion],
      ['Average deal size ($)', avgDealSize],
      ['Monthly leads', monthlyLeads],
      [''],
      ['Implementation Costs', ''],
      ['Development cost ($)', devCost],
      ['Monthly operational cost ($)', operationalCost],
      [''],
      ['RESULTS', ''],
      ['Scenario', 'Conservative', 'Expected', 'Optimistic'],
      ['Annual Cost Savings', conservativeROI.annualCostSavings, expectedROI.annualCostSavings, optimisticROI.annualCostSavings],
      ['Annual Revenue Impact', conservativeROI.annualRevenueImpact, expectedROI.annualRevenueImpact, optimisticROI.annualRevenueImpact],
      ['Total Annual Benefit', conservativeROI.totalAnnualBenefit, expectedROI.totalAnnualBenefit, optimisticROI.totalAnnualBenefit],
      ['Total Implementation Cost', conservativeROI.totalImplementationCost, expectedROI.totalImplementationCost, optimisticROI.totalImplementationCost],
      ['Net Benefit (Year 1)', conservativeROI.netBenefit, expectedROI.netBenefit, optimisticROI.netBenefit],
      ['ROI %', conservativeROI.roiPercentage, expectedROI.roiPercentage, optimisticROI.roiPercentage],
      ['Payback Period (months)', conservativeROI.paybackMonths, expectedROI.paybackMonths, optimisticROI.paybackMonths],
    ];

    const csv = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-roi-calculator.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-12 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                AI ROI Calculator
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Build data-driven ROI models to justify AI investments to executives
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-gray-500 dark:text-gray-400">STRAT-014 • Interactive Tool</span>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              onClick={exportToCSV}
            >
              <Download className="w-4 h-4" />
              Export to CSV
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs Section */}
          <div className="space-y-8">
            {/* Cost Savings */}
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cost Savings</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Hours saved per user per week
                  </label>
                  <input
                    type="number"
                    value={hoursSaved}
                    onChange={(e) => setHoursSaved(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white font-mono text-lg"
                    min="0"
                    step="0.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Hourly rate ($)
                  </label>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white font-mono text-lg"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Number of users
                  </label>
                  <input
                    type="number"
                    value={numUsers}
                    onChange={(e) => setNumUsers(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white font-mono text-lg"
                    min="0"
                  />
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Annual Savings</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {formatCurrency(expectedROI.annualCostSavings)}
                  </p>
                </div>
              </div>
            </div>

            {/* Revenue Impact */}
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Revenue Impact</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Current conversion (%)
                    </label>
                    <input
                      type="number"
                      value={currentConversion}
                      onChange={(e) => setCurrentConversion(Number(e.target.value))}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white font-mono text-lg"
                      min="0"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Projected conversion (%)
                    </label>
                    <input
                      type="number"
                      value={projectedConversion}
                      onChange={(e) => setProjectedConversion(Number(e.target.value))}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white font-mono text-lg"
                      min="0"
                      step="0.1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Average deal size ($)
                  </label>
                  <input
                    type="number"
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white font-mono text-lg"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Monthly leads
                  </label>
                  <input
                    type="number"
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white font-mono text-lg"
                    min="0"
                  />
                </div>

                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-900">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Annual Revenue Lift</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {formatCurrency(expectedROI.annualRevenueImpact)}
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation Costs */}
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Implementation Costs</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Development cost ($)
                  </label>
                  <input
                    type="number"
                    value={devCost}
                    onChange={(e) => setDevCost(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white font-mono text-lg"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Monthly operational cost ($)
                  </label>
                  <input
                    type="number"
                    value={operationalCost}
                    onChange={(e) => setOperationalCost(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white font-mono text-lg"
                    min="0"
                  />
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-900">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Total First Year Cost</p>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {formatCurrency(expectedROI.totalImplementationCost)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 rounded-xl p-8 text-white dark:text-black sticky top-6">
              <h2 className="text-2xl font-bold mb-6">ROI Projections</h2>

              {/* Scenario Tabs */}
              <div className="space-y-6">
                {Object.entries(scenarios).map(([key, scenario]) => {
                  const roi = key === 'conservative' ? conservativeROI : key === 'expected' ? expectedROI : optimisticROI;
                  const isPositive = roi.netBenefit > 0;
                  const isGoodPayback = roi.paybackMonths < (key === 'conservative' ? 12 : 6);

                  return (
                    <div key={key} className="bg-white/10 dark:bg-black/10 rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-4">{scenario.label}</h3>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm opacity-90">Total Annual Benefit</span>
                          <span className="text-xl font-bold">{formatCurrency(roi.totalAnnualBenefit)}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm opacity-90">Implementation Cost</span>
                          <span className="text-xl font-bold">-{formatCurrency(roi.totalImplementationCost)}</span>
                        </div>

                        <div className="h-px bg-white/20 dark:bg-black/20 my-2"></div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold">Net Benefit (Year 1)</span>
                          <span className={`text-2xl font-bold ${isPositive ? 'text-emerald-400 dark:text-emerald-600' : 'text-red-400 dark:text-red-600'}`}>
                            {formatCurrency(roi.netBenefit)}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold">ROI</span>
                          <span className={`text-2xl font-bold ${isPositive ? 'text-emerald-400 dark:text-emerald-600' : 'text-red-400 dark:text-red-600'}`}>
                            {formatNumber(roi.roiPercentage)}%
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold">Payback Period</span>
                          <span className={`text-2xl font-bold ${isGoodPayback ? 'text-emerald-400 dark:text-emerald-600' : 'text-yellow-400 dark:text-yellow-600'}`}>
                            {formatNumber(roi.paybackMonths)} months
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pro Tips */}
              <div className="mt-8 p-4 bg-yellow-500/20 dark:bg-yellow-600/20 rounded-lg border border-yellow-500/30 dark:border-yellow-600/30">
                <p className="text-sm font-semibold mb-2">💡 Pro Tips</p>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Aim for &lt;6 month payback for SMB</li>
                  <li>• Aim for &lt;12 months for enterprise</li>
                  <li>• Include implementation costs for trust</li>
                  <li>• Present all 3 scenarios to executives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ROICalculator;
