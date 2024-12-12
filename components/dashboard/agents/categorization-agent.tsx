'use client';

import { EnhancedAgentCard } from '@/components/ai/enhanced-agent-card';

export function CategorizationAgent() {
  return (
    <EnhancedAgentCard
      name="Categorization"
      icon="🏷️"
      status="idle"
      description="Classifies and tags datasets automatically"
      pulseColor="blue"
    />
  );
}