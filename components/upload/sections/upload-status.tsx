'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AgentLog } from '@/components/ai/agent-log';
import { useState } from 'react';

export function UploadStatus() {
  const [logs] = useState([
    {
      id: '1',
      agent: 'System',
      message: 'Ready to process your upload',
      timestamp: new Date(),
    },
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Status</CardTitle>
      </CardHeader>
      <CardContent>
        <AgentLog logs={logs} />
      </CardContent>
    </Card>
  );
}