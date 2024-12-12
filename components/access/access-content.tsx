'use client';

import { SearchSection } from './sections/search-section';
import { DatasetSection } from './sections/dataset-section';

export function AccessContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Access Datasets</h1>
        <p className="text-muted-foreground mt-2">
          Discover and access high-quality datasets
        </p>
      </div>
      <div className="space-y-6">
        <SearchSection />
        <DatasetSection />
      </div>
    </div>
  );
}