'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DatasetCard } from '@/components/access/dataset-card';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';
import { useAccessStore } from '@/stores/access-store';

const mockDatasets = [
  {
    id: '1',
    title: 'Healthcare Analytics Dataset',
    description: 'Comprehensive healthcare data including patient outcomes and treatment efficacy.',
    tags: ['healthcare', 'analytics', 'research'],
    validated: true,
  },
  {
    id: '2',
    title: 'Financial Market Trends',
    description: 'Historical financial market data with detailed trend analysis.',
    tags: ['finance', 'market-analysis', 'trends'],
    validated: true,
  },
];

export function DatasetSection() {
  const { viewMode, setViewMode } = useAccessStore();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Available Datasets</CardTitle>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'table' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('table')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className={`grid gap-4 ${viewMode === 'grid' ? 'sm:grid-cols-2' : ''}`}>
          {mockDatasets.map((dataset) => (
            <DatasetCard
              key={dataset.id}
              title={dataset.title}
              description={dataset.description}
              tags={dataset.tags}
              validated={dataset.validated}
              onAccess={() => {}}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}