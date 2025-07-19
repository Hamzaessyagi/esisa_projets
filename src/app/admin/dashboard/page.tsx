import React from 'react';
import { Users, BookOpen, Activity, Shield, TrendingUp, Clock } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-8 w-8" />
            <span className="text-display font-bold">Admin Dashboard</span>
          </div>
          <h1 className="text-2xl font-semibold mb-1">Welcome, Admin!</h1>
          <p className="text-amber-100">Monitor and manage your educational platform</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Total Users */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-2xl font-bold text-slate-800">1,247</span>
              </div>
              <h3 className="font-medium text-slate-700 mb-1">Total Users</h3>
              <p className="text-sm text-slate-500 flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                +12% this month
              </p>
            </div>

            {/* Active Courses */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                </div>
                <span className="text-2xl font-bold text-slate-800">89</span>
              </div>
              <h3 className="font-medium text-slate-700 mb-1">Active Courses</h3>
              <p className="text-sm text-slate-500 flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                +5 new courses
              </p>
            </div>

            {/* System Health */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-2xl font-bold text-green-600">98.5%</span>
              </div>
              <h3 className="font-medium text-slate-700 mb-1">System Health</h3>
              <p className="text-sm text-green-600">All systems operational</p>
            </div>

            {/* Server Uptime */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-2xl font-bold text-slate-800">99.9%</span>
              </div>
              <h3 className="font-medium text-slate-700 mb-1">Server Uptime</h3>
              <p className="text-sm text-slate-500">Last 30 days</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">New teacher registration approved</p>
                  <p className="text-xs text-slate-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">Course "Advanced Mathematics" published</p>
                  <p className="text-xs text-slate-500">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">System backup completed successfully</p>
                  <p className="text-xs text-slate-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Platform Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Total Students</span>
                <span className="font-semibold text-slate-800">1,089</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Total Teachers</span>
                <span className="font-semibold text-slate-800">147</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Total Administrators</span>
                <span className="font-semibold text-slate-800">11</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Pending Approvals</span>
                <span className="font-semibold text-amber-600">23</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Active Sessions</span>
                <span className="font-semibold text-green-600">342</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}