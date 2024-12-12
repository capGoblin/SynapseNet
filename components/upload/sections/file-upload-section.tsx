'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUpload } from '@/components/upload/file-upload';
import { SupportedFormats } from '@/components/upload/supported-formats';

export function FileUploadSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Files</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <FileUpload />
        <SupportedFormats />
      </CardContent>
    </Card>
  );
}