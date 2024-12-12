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

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}