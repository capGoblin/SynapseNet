'use client';

import { Card } from '@/components/ui/card';
import { AgentStatus } from '@/components/ai/agent-status';
import { cn } from '@/lib/utils';

interface EnhancedAgentCardProps {
  name: string;
  icon: string;
  status: 'idle' | 'processing' | 'completed' | 'error';
  description: string;
  currentTask?: string;
  pulseColor?: string;
}

export function EnhancedAgentCard({
  name,
  icon,
  status,
  description,
  currentTask,
  pulseColor,
}: EnhancedAgentCardProps) {
  return (
    <Card className={cn(
      'p-4 transition-all duration-300 hover:shadow-md',
      status === 'processing' && 'border-primary',
      status === 'completed' && 'border-green-500',
      status === 'error' && 'border-red-500'
    )}>
      <div className="flex items-start space-x-3">
        <div className="text-2xl">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{name}</h3>
            <AgentStatus status={status} pulseColor={pulseColor} />
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          {currentTask && status === 'processing' && (
            <p className="text-xs text-primary mt-2 animate-pulse">
              {currentTask}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}