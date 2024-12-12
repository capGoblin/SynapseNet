'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SearchBar } from '@/components/access/search-bar';
import { SearchFilters } from '@/components/access/search-filters';

export function SearchSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Datasets</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <SearchBar />
        <SearchFilters />
      </CardContent>
    </Card>
  );
}