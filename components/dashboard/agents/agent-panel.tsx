'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RewardDistributionAgent } from './reward-distribution-agent';
import { DataValidationAgent } from './data-validation-agent';
import { CategorizationAgent } from './categorization-agent';

export function AgentPanel() {
  return (
    <div className="h-full p-4 space-y-4">
      <h2 className="text-lg font-semibold">AI Agents</h2>
      <div className="space-y-4">
        <RewardDistributionAgent />
        <DataValidationAgent />
        <CategorizationAgent />
      </div>
    </div>
  );
}