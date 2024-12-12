'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Upload, Download, Coins } from 'lucide-react';

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: 'upload',
      description: 'Uploaded "Healthcare Analytics Dataset"',
      time: '2 minutes ago',
      icon: Upload,
    },
    {
      id: 2,
      type: 'access',
      description: 'Accessed "Financial Market Trends"',
      time: '1 hour ago',
      icon: Download,
    },
    {
      id: 3,
      type: 'reward',
      description: 'Earned 50 tokens for data contribution',
      time: '2 hours ago',
      icon: Coins,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="flex items-center space-x-4 rounded-lg border p-4"
                >
                  <div className={`rounded-full p-2 ${
                    activity.type === 'upload' ? 'bg-green-100 text-green-600' :
                    activity.type === 'access' ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}