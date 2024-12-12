'use client';

import { EnhancedAgentCard } from '@/components/ai/enhanced-agent-card';

export function UploadAgentPanel() {
  return (
    <div className="h-full p-4 space-y-4">
      <h2 className="text-lg font-semibold">AI Agents</h2>
      <div className="space-y-4">
        <EnhancedAgentCard
          name="Data Validation"
          icon="✓"
          status="idle"
          description="Ensures data quality and compliance"
          pulseColor="green"
        />
        <EnhancedAgentCard
          name="Auto Categorization"
          icon="🏷️"
          status="idle"
          description="Automatically categorizes your data"
          pulseColor="blue"
        />
      </div>
    </div>
  );
}