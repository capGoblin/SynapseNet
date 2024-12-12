'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Database, Bot } from 'lucide-react';
import Link from 'next/link';

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link href="/upload">
          <Button className="w-full justify-start" variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload Data
          </Button>
        </Link>
        
        <Link href="/access">
          <Button className="w-full justify-start" variant="outline">
            <Database className="mr-2 h-4 w-4" />
            Access Data
          </Button>
        </Link>
        
        <Button className="w-full justify-start" variant="outline">
          <Bot className="mr-2 h-4 w-4" />
          Explore AI Agents
        </Button>
      </CardContent>
    </Card>
  );
}