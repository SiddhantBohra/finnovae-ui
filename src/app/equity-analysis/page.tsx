'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';

export default function EquityAnalysis() {
  const [selectedOption, setSelectedOption] = useState('Stock Analysis');
  const [selectedStock, setSelectedStock] = useState('');
  const [dateRange, setDateRange] = useState('30days');

  const stockOptions = ['Reliance Industries', 'TCS', 'HDFC Bank', 'Infosys', 'Wipro'];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', { selectedStock, dateRange });
    // Redirect to results page or handle the analysis
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-medium mb-6">Equity Analysis</h2>
        
        {/* Options Tabs */}
        <div className="flex border-b mb-6">
          {['Stock Analysis', 'Portfolio Analysis', 'Sector Analysis'].map(option => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`px-4 py-2 font-medium ${
                selectedOption === option
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Stock Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Stock
            </label>
            <select
              value={selectedStock}
              onChange={(e) => setSelectedStock(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select a stock</option>
              {stockOptions.map(stock => (
                <option key={stock} value={stock}>{stock}</option>
              ))}
            </select>
          </div>
          
          {/* Date Range Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Analysis Timeframe
            </label>
            <div className="flex flex-wrap gap-2">
              {['7days', '30days', '90days', '1year', '5years'].map(range => (
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
                  {range === '7days' ? '1 Week' :
                   range === '30days' ? '1 Month' :
                   range === '90days' ? '3 Months' :
                   range === '1year' ? '1 Year' : '5 Years'}
                </button>
              ))}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Generate Analysis
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
} 