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
          name="Categorization AI"
          icon="🗂️"
          status="idle"
          description="Automatically categorizes your data"
        />
        <AgentCard
          name="Data Validation AI"
          icon="✅"
          status="idle"
          description="Ensures data quality and compliance"
        />
      </CardContent>
    </Card>
  );
}