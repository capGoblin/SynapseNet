'use client';

import { UserSummary } from './metrics/user-summary';
import { ActivityFeed } from './activity/activity-feed';
import { QuickActions } from './quick-actions';

export function DashboardContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground mt-2">
          Here's what's happening with your data platform
        </p>
      </div>
      
      <UserSummary />
      <QuickActions />
      <ActivityFeed />
    </div>
  );
}