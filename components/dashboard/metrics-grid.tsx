'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Download, Coins, Brain } from 'lucide-react';

export function MetricsGrid() {
  const metrics = [
    {
      title: 'Total Uploads',
      value: '24',
      description: '+2 from last week',
      icon: Upload,
      trend: 'positive',
    },
    {
      title: 'Data Accessed',
      value: '145',
      description: '+12% this month',
      icon: Download,
      trend: 'positive',
    },
    {
      title: 'Tokens Earned',
      value: '1,234',
      description: '32 pending rewards',
      icon: Coins,
      trend: 'neutral',
    },
    {
      title: 'AI Processing',
      value: '99.9%',
      description: 'Optimal performance',
      icon: Brain,
      trend: 'positive',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${
                metric.trend === 'positive' ? 'text-green-500' : 
                metric.trend === 'negative' ? 'text-red-500' : 
                'text-muted-foreground'
              }`}>
                {metric.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}