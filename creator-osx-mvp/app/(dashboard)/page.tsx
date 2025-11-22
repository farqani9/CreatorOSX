'use client';

import React from 'react';
import { useAuthContext } from '@/components/auth/auth-provider';
import { Users, Briefcase, CheckSquare, Calendar, FileText, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

/**
 * Dashboard Page
 * 
 * Main dashboard showing overview and quick actions.
 * This is the landing page after successful authentication.
 */
export default function DashboardPage() {
  const { user } = useAuthContext();

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'there';

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Welcome back, {userName}! 👋
        </h1>
        <p className="text-slate-600">
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
          comingSoon
        />
        <FeatureCard
          icon={<CheckSquare className="w-8 h-8" />}
          title="Tasks"
          description="Manage your to-dos and follow-ups"
          href="/dashboard/tasks"
          color="orange"
          comingSoon
        />
        <FeatureCard
          icon={<Calendar className="w-8 h-8" />}
          title="Content Calendar"
          description="Plan and schedule your content"
          href="/dashboard/calendar"
          color="green"
          comingSoon
        />
        <FeatureCard
          icon={<FileText className="w-8 h-8" />}
          title="Notes"
          description="Take notes and create templates"
          href="/dashboard/notes"
          color="pink"
          comingSoon
        />
        <FeatureCard
          icon={<LayoutDashboard className="w-8 h-8" />}
          title="Settings"
          description="Customize your workspace"
          href="/dashboard/settings"
          color="slate"
          comingSoon
        />
      </div>

      {/* Getting Started */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">
          🚀 Getting Started
        </h2>
        <p className="text-blue-800 mb-4">
          Welcome to Creator OSX! Your CRM and operations system is ready. Start by:
        </p>
        <ul className="space-y-2 text-blue-700">
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
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-green-50 text-green-600',
  };

  return (
    <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
      <div className={`inline-flex p-3 rounded-lg ${colorClasses[color]} mb-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-1">
        {value}
      </h3>
      <p className="text-sm font-medium text-slate-700">
        {title}
      </p>
      <p className="text-xs text-slate-500 mt-1">
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
  comingSoon?: boolean;
}

function FeatureCard({ icon, title, description, href, color, comingSoon }: FeatureCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-green-50 text-green-600',
    pink: 'bg-pink-50 text-pink-600',
    slate: 'bg-slate-50 text-slate-600',
  };

  const CardWrapper = comingSoon ? 'div' : Link;
  const cardProps = comingSoon 
    ? { className: "relative group bg-white rounded-xl border border-slate-100 p-6 shadow-sm opacity-60 cursor-not-allowed" }
    : { href, className: "relative group bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:border-brand-200 hover:shadow-md transition-all" };

  return (
    <CardWrapper {...cardProps as any}>
      {comingSoon && (
        <div className="absolute top-4 right-4 bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">
          Coming Soon
        </div>
      )}
      <div className={`inline-flex p-3 rounded-lg ${colorClasses[color]} mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-600">
        {description}
      </p>
    </CardWrapper>
  );
}

