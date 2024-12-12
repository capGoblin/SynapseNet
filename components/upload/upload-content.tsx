'use client';

import { FileUploadSection } from './sections/file-upload-section';
import { MetadataSection } from './sections/metadata-section';

export function UploadContent() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Upload Dataset</h1>
        <p className="text-muted-foreground mt-2">
          Share your data with the community
        </p>
      </div>
      <div className="space-y-6">
        <FileUploadSection />
        <MetadataSection />
      </div>
    </div>
  );
}