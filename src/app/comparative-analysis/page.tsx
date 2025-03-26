'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';

export default function ComparativeAnalysis() {
  const [selectedStocks, setSelectedStocks] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState('30days');
  const [comparisonType, setComparisonType] = useState('financial');

  const stockOptions = ['Reliance Industries', 'TCS', 'HDFC Bank', 'Infosys', 'Wipro', 'ITC', 'SBI', 'Axis Bank'];

  // Handle stock selection
  const handleStockSelect = (stock: string) => {
    if (selectedStocks.includes(stock)) {
      setSelectedStocks(selectedStocks.filter(s => s !== stock));
    } else {
      if (selectedStocks.length < 3) {
        setSelectedStocks([...selectedStocks, stock]);
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', { selectedStocks, dateRange, comparisonType });
    // Redirect to results page or handle the comparison
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-medium mb-6">Comparative Analysis</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Stock Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Stocks to Compare (Max 3)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
              {stockOptions.map(stock => (
                <div 
                  key={stock} 
                  onClick={() => handleStockSelect(stock)}
                  className={`p-3 border rounded-md cursor-pointer ${
                    selectedStocks.includes(stock)
                      ? 'bg-blue-100 border-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {stock}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Selected: {selectedStocks.length > 0 ? selectedStocks.join(', ') : 'None'}
            </div>
          </div>
          
          {/* Comparison Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comparison Type
            </label>
            <div className="flex flex-wrap gap-2">
              {['financial', 'technical', 'fundamental', 'all'].map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setComparisonType(type)}
                  className={`px-4 py-2 rounded-md ${
                    comparisonType === type
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Date Range Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comparison Timeframe
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
              disabled={selectedStocks.length < 2}
              className={`px-4 py-2 rounded-md ${
                selectedStocks.length < 2
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Generate Comparison
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
} 