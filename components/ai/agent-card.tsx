'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AgentCardProps {
  name: string;
  icon: string;
  status: 'idle' | 'processing' | 'completed';
  description: string;
}

export function AgentCard({ name, icon, status, description }: AgentCardProps) {
  return (
    <Card className={cn(
      'p-4 transition-all duration-300',
      status === 'processing' && 'animate-pulse border-primary',
      status === 'completed' && 'border-green-500'
    )}>
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className={cn(
          'ml-auto px-2 py-1 rounded-full text-xs',
          status === 'idle' && 'bg-secondary text-secondary-foreground',
          status === 'processing' && 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
          status === 'completed' && 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        )}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
    </Card>
  );
}