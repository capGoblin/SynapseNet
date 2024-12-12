'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Download, Coins } from 'lucide-react';

const summaryItems = [
  {
    title: 'Total Contributions',
    value: '24',
    icon: Upload,
    trend: '+2 this week',
    trendUp: true,
  },
  {
    title: 'Datasets Accessed',
    value: '156',
    icon: Download,
    trend: '+12% this month',
    trendUp: true,
  },
  {
    title: 'Rewards Earned',
    value: '1,234',
    icon: Coins,
    trend: '32 pending',
    trendUp: null,
  },
];

export function UserSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {summaryItems.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className={`text-xs ${
                item.trendUp === true ? 'text-green-500' :
                item.trendUp === false ? 'text-red-500' :
                'text-muted-foreground'
              }`}>
                {item.trend}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}