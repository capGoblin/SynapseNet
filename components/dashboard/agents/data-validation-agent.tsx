'use client';

import { EnhancedAgentCard } from '@/components/ai/enhanced-agent-card';

export function DataValidationAgent() {
  return (
    <EnhancedAgentCard
      name="Data Validation"
      icon="✓"
      status="completed"
      description="Ensures data quality and compliance"
      pulseColor="green"
    />
  );
}