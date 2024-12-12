'use client';

import { EnhancedAgentCard } from '@/components/ai/enhanced-agent-card';
import { Coins } from 'lucide-react';

export function RewardDistributionAgent() {
  return (
    <EnhancedAgentCard
      name="Reward Distribution"
      icon="💰"
      status="processing"
      description="Tracks and distributes rewards based on contributions"
      currentTask="Processing latest query logs"
      pulseColor="yellow"
    />
  );
}