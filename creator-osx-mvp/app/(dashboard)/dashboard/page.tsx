'use client';

import React from 'react';
import { useAuth } from '@/lib/hooks/use-auth';
import { Users, Briefcase, CheckSquare, Calendar, FileText, LayoutDashboard } from 'lucide-react';

/**
 * Dashboard Page
 * 
 * Main dashboard showing overview and quick actions.
 * This is the landing page after successful authentication.
 */
export default function DashboardPage() {
  const { user } = useAuth();

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'there';

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Welcome back, {userName}! 👋
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Here's what's happening with your creator business today.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Users className="w-6 h-6" />}
          title="Contacts"
          value="0"
          description="Total contacts"
          color="blue"
        />
        <StatCard
          icon={<Briefcase className="w-6 h-6" />}
          title="Active Deals"
          value="0"
          description="In pipeline"
          color="purple"
        />
        <StatCard
          icon={<CheckSquare className="w-6 h-6" />}
          title="Tasks"
          value="0"
          description="Pending tasks"
          color="orange"
        />
        <StatCard
          icon={<Calendar className="w-6 h-6" />}
          title="Content"
          value="0"
          description="Scheduled items"
          color="green"
        />
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={<Users className="w-8 h-8" />}
          title="Contacts & Leads"
          description="Manage your contacts and track lead status"
          href="/dashboard/contacts"
          color="blue"
        />
        <FeatureCard
          icon={<Briefcase className="w-8 h-8" />}
          title="Deals Pipeline"
          description="Track brand collaborations in a Kanban board"
          href="/dashboard/deals"
          color="purple"
        />
        <FeatureCard
          icon={<CheckSquare className="w-8 h-8" />}
          title="Tasks"
          description="Manage your to-dos and follow-ups"
          href="/dashboard/tasks"
          color="orange"
        />
        <FeatureCard
          icon={<Calendar className="w-8 h-8" />}
          title="Content Calendar"
          description="Plan and schedule your content"
          href="/dashboard/calendar"
          color="green"
        />
        <FeatureCard
          icon={<FileText className="w-8 h-8" />}
          title="Notes"
          description="Take notes and create templates"
          href="/dashboard/notes"
          color="pink"
        />
        <FeatureCard
          icon={<LayoutDashboard className="w-8 h-8" />}
          title="Settings"
          description="Customize your workspace"
          href="/dashboard/settings"
          color="slate"
        />
      </div>

      {/* Getting Started */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
          🚀 Getting Started
        </h2>
        <p className="text-blue-800 dark:text-blue-200 mb-4">
          Welcome to Creator OSX! Your CRM and operations system is ready. Start by:
        </p>
        <ul className="space-y-2 text-blue-700 dark:text-blue-300">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Adding your first contact or lead
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Creating a deal for a brand collaboration
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Setting up tasks to stay organized
          </li>
        </ul>
      </div>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  color: 'blue' | 'purple' | 'orange' | 'green';
}

function StatCard({ icon, title, value, description, color }: StatCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
      <div className={`inline-flex p-3 rounded-lg ${colorClasses[color]} mb-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
        {value}
      </h3>
      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {title}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
        {description}
      </p>
    </div>
  );
}

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: 'blue' | 'purple' | 'orange' | 'green' | 'pink' | 'slate';
}

function FeatureCard({ icon, title, description, href, color }: FeatureCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    pink: 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400',
    slate: 'bg-slate-50 dark:bg-slate-700/20 text-slate-600 dark:text-slate-400',
  };

  return (
    <a
      href={href}
      className="group bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
    >
      <div className={`inline-flex p-3 rounded-lg ${colorClasses[color]} mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </a>
  );
}

