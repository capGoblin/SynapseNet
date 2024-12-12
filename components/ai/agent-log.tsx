'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

interface Log {
  id: string;
  agent: string;
  message: string;
  timestamp: Date;
}

interface AgentLogProps {
  logs: Log[];
}

export function AgentLog({ logs }: AgentLogProps) {
  return (
    <Card className="p-4">
      <h3 className="font-medium mb-2">Activity Log</h3>
      <ScrollArea className="h-[200px]">
        <div className="space-y-2">
          {logs.map((log) => (
            <div key={log.id} className="text-sm">
              <span className="text-muted-foreground">
                {log.timestamp.toLocaleTimeString()} -
              </span>{' '}
              <span className="font-medium">{log.agent}:</span>{' '}
              {log.message}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}