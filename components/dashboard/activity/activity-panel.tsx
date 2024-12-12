'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ActivityItem } from './activity-item';
import { Upload, Download, Coins } from 'lucide-react';

const activities = [
  {
    icon: Upload,
    title: 'Dataset Upload',
    description: 'Healthcare Analytics Dataset',
    timestamp: '2 minutes ago',
    type: 'upload' as const,
  },
  {
    icon: Download,
    title: 'Dataset Access',
    description: 'Financial Market Trends',
    timestamp: '1 hour ago',
    type: 'access' as const,
  },
  {
    icon: Coins,
    title: 'Rewards Earned',
    description: '50 tokens for data contribution',
    timestamp: '2 hours ago',
    type: 'reward' as const,
  },
];

export function ActivityPanel() {
  return (
    <div className="h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Activity Feed</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-4 pr-4">
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}