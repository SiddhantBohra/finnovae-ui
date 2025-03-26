'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';

export default function MacroAnalysis() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState('1year');

  const regions = ['India', 'USA', 'China', 'Europe', 'Japan', 'Global'];
  
  const indicators = [
    'GDP Growth', 
    'Inflation Rate', 
    'Interest Rates',
    'Currency Strength',
    'Manufacturing Output',
    'Unemployment Rate',
    'Consumer Confidence',
    'Housing Market',
    'Stock Market Indices'
  ];

  // Handle indicator selection
  const handleIndicatorSelect = (indicator: string) => {
    if (selectedIndicators.includes(indicator)) {
      setSelectedIndicators(selectedIndicators.filter(i => i !== indicator));
    } else {
      setSelectedIndicators([...selectedIndicators, indicator]);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', { selectedRegion, selectedIndicators, dateRange });
    // Redirect to results page or handle the analysis
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-medium mb-6">Macro-Economic Analysis</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Region Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Region
            </label>
            <div className="flex flex-wrap gap-2">
              {regions.map(region => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-md ${
                    selectedRegion === region
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
          
          {/* Indicators Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Economic Indicators
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {indicators.map(indicator => (
                <div 
                  key={indicator} 
                  onClick={() => handleIndicatorSelect(indicator)}
                  className={`p-3 border rounded-md cursor-pointer ${
                    selectedIndicators.includes(indicator)
                      ? 'bg-blue-100 border-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {indicator}
                </div>
              ))}
            </div>
          </div>
          
          {/* Date Range Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Analysis Timeframe
            </label>
            <div className="flex flex-wrap gap-2">
              {['90days', '1year', '3years', '5years', '10years'].map(range => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setDateRange(range)}
                  className={`px-4 py-2 rounded-md ${
                    dateRange === range
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {range === '90days' ? '3 Months' :
                   range === '1year' ? '1 Year' :
                   range === '3years' ? '3 Years' :
                   range === '5years' ? '5 Years' : '10 Years'}
                </button>
              ))}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!selectedRegion || selectedIndicators.length === 0}
              className={`px-4 py-2 rounded-md ${
                !selectedRegion || selectedIndicators.length === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Generate Macro Analysis
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
} 