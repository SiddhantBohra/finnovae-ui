'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function AnalysisResults() {
  // Normally this data would come from the API or state management
  const stockData = {
    name: 'Reliance Industries',
    price: '2,456.75',
    change: '+12.45 (0.51%)',
    analysisDate: 'March 26, 2024',
    timeFrame: '30 Days',
    
    summary: 'Reliance Industries shows strong bullish momentum with potential for further growth based on technical indicators and fundamental analysis.',
    
    technicalIndicators: [
      { name: 'RSI', value: '62.4', interpretation: 'Neutral-Bullish' },
      { name: 'MACD', value: 'Positive', interpretation: 'Bullish' },
      { name: 'Moving Averages', value: 'Above 50 & 200 day MA', interpretation: 'Bullish' },
      { name: 'Bollinger Bands', value: 'Near upper band', interpretation: 'Bullish momentum' },
    ],
    
    fundamentalMetrics: [
      { name: 'P/E Ratio', value: '28.36', comparison: 'Sector avg: 22.45' },
      { name: 'Revenue Growth (YoY)', value: '12.3%', comparison: 'Sector avg: 8.1%' },
      { name: 'Profit Margin', value: '15.7%', comparison: 'Sector avg: 12.3%' },
      { name: 'Debt to Equity', value: '0.42', comparison: 'Sector avg: 0.65' },
    ],
    
    priceTargets: [
      { source: 'Analyst Consensus', target: '₹2,850', timeframe: '12 months' },
      { source: 'Technical Analysis', target: '₹2,650', timeframe: '3 months' },
      { source: 'AI Prediction', target: '₹2,750', timeframe: '6 months' },
    ]
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Stock Header */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h1 className="text-2xl font-bold">{stockData.name}</h1>
              <div className="flex items-center mt-2">
                <span className="text-xl font-semibold">₹{stockData.price}</span>
                <span className="ml-2 text-green-600">{stockData.change}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-600">Analysis Date: {stockData.analysisDate}</div>
              <div className="text-gray-600">Timeframe: {stockData.timeFrame}</div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Analysis Summary</h2>
          <p className="text-gray-700">{stockData.summary}</p>
        </div>

        {/* Technical Indicators */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Technical Indicators</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Indicator</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Value</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {stockData.technicalIndicators.map((indicator, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{indicator.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{indicator.value}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{indicator.interpretation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fundamental Metrics */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Fundamental Metrics</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Metric</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Value</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Comparison</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {stockData.fundamentalMetrics.map((metric, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{metric.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{metric.value}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{metric.comparison}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Targets */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Price Targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stockData.priceTargets.map((target, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="text-gray-600 text-sm">{target.source}</div>
                <div className="text-2xl font-bold text-blue-600 my-2">{target.target}</div>
                <div className="text-gray-600 text-sm">Timeframe: {target.timeframe}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Download Report
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Share Analysis
          </button>
        </div>
      </div>
    </Layout>
  );
} 