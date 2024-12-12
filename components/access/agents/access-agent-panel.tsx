'use client';

import { EnhancedAgentCard } from '@/components/ai/enhanced-agent-card';

export function AccessAgentPanel() {
  return (
    <div className="h-full p-4 space-y-4">
      <h2 className="text-lg font-semibold">AI Agents</h2>
      <div className="space-y-4">
        <EnhancedAgentCard
          name="Semantic Search"
          icon="🔍"
          status="idle"
          description="Enhances search results with AI"
          pulseColor="blue"
        />
        <EnhancedAgentCard
          name="Query Logger"
          icon="📝"
          status="processing"
          description="Tracks queries for analytics"
          currentTask="Processing search patterns"
          pulseColor="yellow"
        />
      </div>
    </div>
  );
}