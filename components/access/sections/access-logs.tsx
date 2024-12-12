'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AgentLog } from '@/components/ai/agent-log';
import { useState } from 'react';

export function AccessLogs() {
  const [logs] = useState([
    {
      id: '1',
      agent: 'Semantic Query AI',
      message: 'Processing search query...',
      timestamp: new Date(),
    },
    {
      id: '2',
      agent: 'Query Log Agent',
      message: 'Logging search activity...',
      timestamp: new Date(),
    },
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Access Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <AgentLog logs={logs} />
      </CardContent>
    </Card>
  );
}