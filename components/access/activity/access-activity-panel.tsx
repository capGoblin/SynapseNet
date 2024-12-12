'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { AgentLog } from '@/components/ai/agent-log';
import { useState } from 'react';

export function AccessActivityPanel() {
  const [logs] = useState([
    {
      id: '1',
      agent: 'Semantic Search',
      message: 'Processing search query...',
      timestamp: new Date(),
    },
    {
      id: '2',
      agent: 'Query Logger',
      message: 'Logging search patterns...',
      timestamp: new Date(),
    },
  ]);

  return (
    <div className="h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Access Activity</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-4 pr-4">
          <AgentLog logs={logs} />
          <Card className="p-4">
            <h3 className="font-medium mb-2">Access Statistics</h3>
            <div className="space-y-2 text-sm">
              <p>Datasets Accessed: 156</p>
              <p>Popular Categories: Health, Finance</p>
              <p>Active Queries: 3</p>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}