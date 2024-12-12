'use client';

import { SearchSection } from './sections/search-section';
import { DatasetSection } from './sections/dataset-section';
import { AIAgentsSection } from './sections/ai-agents-section';
import { AccessLogs } from './sections/access-logs';
import { useAccessStore } from '@/stores/access-store';

export function AccessContainer() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="space-y-6 md:col-span-2">
        <SearchSection />
        <DatasetSection />
      </div>
      <div className="space-y-6">
        <AIAgentsSection />
        <AccessLogs />
      </div>
    </div>
  );
}