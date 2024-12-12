'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MetadataForm } from '@/components/upload/metadata-form';

export function MetadataSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dataset Information</CardTitle>
      </CardHeader>
      <CardContent>
        <MetadataForm />
      </CardContent>
    </Card>
  );
}