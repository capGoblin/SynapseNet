'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export function RewardsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rewards</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="text-3xl font-bold">1,234</div>
          <p className="text-sm text-muted-foreground">Total tokens earned</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Uploads</span>
            <span>750 tokens</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Validations</span>
            <span>324 tokens</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Query Logs</span>
            <span>160 tokens</span>
          </div>
        </div>
        
        <Button className="w-full">
          Withdraw Tokens
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}