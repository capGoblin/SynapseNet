'use client';

import { cn } from '@/lib/utils';

interface AgentStatusProps {
  status: 'idle' | 'processing' | 'completed' | 'error';
  pulseColor?: string;
}

export function AgentStatus({ status, pulseColor = 'primary' }: AgentStatusProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          'h-3 w-3 rounded-full',
          status === 'idle' && 'bg-muted',
          status === 'processing' && `bg-${pulseColor}`,
          status === 'completed' && 'bg-green-500',
          status === 'error' && 'bg-red-500'
        )}
      >
        {status === 'processing' && (
          <div
            className={cn(
              'absolute inset-0 rounded-full',
              `animate-pulse bg-${pulseColor}/50`
            )}
          />
        )}
      </div>
    </div>
  );
}