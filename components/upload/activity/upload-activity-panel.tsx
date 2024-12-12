'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { UploadStatus } from '../sections/upload-status';
import { Card } from '@/components/ui/card';

export function UploadActivityPanel() {
  return (
    <div className="h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Upload Activity</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-4 pr-4">
          <UploadStatus />
          <Card className="p-4">
            <h3 className="font-medium mb-2">Upload Statistics</h3>
            <div className="space-y-2 text-sm">
              <p>Total Uploads: 24</p>
              <p>Storage Used: 1.2 GB</p>
              <p>Average Size: 50 MB</p>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}