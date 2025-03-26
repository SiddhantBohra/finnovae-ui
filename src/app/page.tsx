'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const activities = [
    { id: '298', time: '11:23', action: 'Reliance Industries Analysis', status: 'Pending', user: 'Aakash' },
    { id: '297', time: '11:20', action: 'Reliance.NS v/s Adani.NS', status: 'Completed', user: 'Abhinav' },
    { id: '296', time: '11:11', action: 'India Macro Analysis', status: 'Completed', user: 'Haasith' },
    { id: '297', time: '11:20', action: 'Quickheal Analysis', status: 'Completed', user: 'Abhinav' },
    { id: '296', time: '11:11', action: 'USA Macro Analysis', status: 'Completed', user: 'Haasith' },
  ];

  const stats = [
    { title: 'Analysis Generated', value: '23', color: 'bg-blue-500' },
    { title: 'Competitive Analysis', value: '17', color: 'bg-red-500' },
    { title: 'Macro Analysis', value: '45', color: 'bg-purple-500' },
    { title: 'Reports Downloaded', value: '27', color: 'bg-teal-500' },
  ];

  return (
    <Layout>
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-lg p-6 text-white`}>
            <div className="text-5xl font-bold">{stat.value}</div>
            <div className="mt-2">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Activities Table */}
      <div className="mt-6 bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h3 className="text-gray-600 font-medium flex items-center">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <path d="M12 6v6l4 2" strokeWidth="2"/>
            </svg>
            LATEST ACTIVITIES
          </h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Users</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3">{activity.id}</td>
                <td className="px-4 py-3">{activity.time}</td>
                <td className="px-4 py-3">{activity.action}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    activity.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {activity.status}
                  </span>
                </td>
                <td className="px-4 py-3">{activity.user}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 flex justify-end items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100">&lt;</button>
          <button className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>1</button>
          <button className={`px-3 py-1 rounded hover:bg-gray-100`}>2</button>
          <button className={`px-3 py-1 rounded hover:bg-gray-100`}>3</button>
          <button className="p-2 rounded-full hover:bg-gray-100">&gt;</button>
        </div>
      </div>
    </Layout>
  );
}
