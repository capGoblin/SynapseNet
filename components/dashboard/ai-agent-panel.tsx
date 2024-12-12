'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AgentCard } from '@/components/ai/agent-card';
import { AgentLog } from '@/components/ai/agent-log';
import { useState } from 'react';

export function AIAgentPanel() {
  const [logs] = useState([
    {
      id: '1',
      agent: 'Categorization AI',
      message: 'Processing new dataset...',
      timestamp: new Date(),
    },
    {
      id: '2',
      agent: 'Validation AI',
      message: 'Verifying data quality...',
      timestamp: new Date(),
    },
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Agents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <AgentCard
            name="Categorization AI"
            icon="🗂️"
            status="processing"
            description="15 datasets processed today"
          />
          <AgentCard
            name="Validation AI"
            icon="✅"
            status="idle"
            description="All tasks completed"
          />
        </div>
        <AgentLog logs={logs} />
      </CardContent>
    </Card>
  );
}