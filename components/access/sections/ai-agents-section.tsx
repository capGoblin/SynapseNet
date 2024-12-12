'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AgentCard } from '@/components/ai/agent-card';

export function AIAgentsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Agents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <AgentCard
          name="Semantic Query AI"
          icon="🔍"
          status="idle"
          description="Enhances search results"
        />
        <AgentCard
          name="Query Log Agent"
          icon="📜"
          status="idle"
          description="Logs queries for analytics"
        />
      </CardContent>
    </Card>
  );
}