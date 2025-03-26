'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentChartBarIcon,
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-[#1e2a4a] text-white fixed h-full flex flex-col">
        <div className="p-4 flex items-center space-x-2">
          <span className="text-2xl font-bold">BF</span>
          <span className="text-sm">BHARAT FINNOVAE</span>
        </div>
        <div className="mt-8 flex-grow">
          <div className="px-4 text-gray-400 text-sm">Navigation Bar</div>
          <nav className="mt-4">
            <Link
              href="/"
              className={`flex items-center px-4 py-3 ${
                isActive("/")
                  ? "bg-[#2a3a63] text-white"
                  : "text-gray-300 hover:bg-[#2a3a63]"
              }`}
            >
              <ChartBarIcon className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/equity-analysis"
              className={`flex items-center px-4 py-3 ${
                isActive("/equity-analysis")
                  ? "bg-[#2a3a63] text-white"
                  : "text-gray-300 hover:bg-[#2a3a63]"
              }`}
            >
              <ChartPieIcon className="h-5 w-5 mr-3" />
              <span>Equity Analysis</span>
            </Link>
            <Link
              href="/comparative-analysis"
              className={`flex items-center px-4 py-3 ${
                isActive("/comparative-analysis")
                  ? "bg-[#2a3a63] text-white"
                  : "text-gray-300 hover:bg-[#2a3a63]"
              }`}
            >
              <DocumentChartBarIcon className="h-5 w-5 mr-3" />
              <span>Comparative Analysis</span>
            </Link>
            <Link
              href="/macro-analysis"
              className={`flex items-center px-4 py-3 ${
                isActive("/macro-analysis")
                  ? "bg-[#2a3a63] text-white"
                  : "text-gray-300 hover:bg-[#2a3a63]"
              }`}
            >
              <ArrowTrendingUpIcon className="h-5 w-5 mr-3" />
              <span>Macro Analysis</span>
            </Link>
          </nav>
        </div>
        <div className="p-4 border-t border-[#2a3a63]">
          <button className="text-gray-300 hover:text-white">Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-gray-50 shadow-sm">
          <div className="flex justify-between items-center px-4 py-3">
            <div className="flex items-center">
              <button className="p-2">
                <Bars3Icon className="h-6 w-6 text-gray-600" />
              </button>
              <div className="ml-4 relative">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative">
                <BellIcon className="h-6 w-6 text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <span>Finnovae</span>
              <span>Admin User</span>
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="px-4 py-2 border-b flex justify-between items-center">
            <h1 className="text-lg font-medium">
              {pathname === "/"
                ? "HOME"
                : pathname
                    .slice(1)
                    .split("-")
                    .map((word) => word.toUpperCase())
                    .join(" ")}
            </h1>
            <h2 className="text-lg font-medium">DASHBOARD</h2>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
} 