'use client';

import { useState } from 'react';
import { FileUploadSection } from './sections/file-upload-section';
import { MetadataSection } from './sections/metadata-section';
import { AIAgentsSection } from './sections/ai-agents-section';
import { UploadStatus } from './sections/upload-status';
import { useUploadStore } from '@/stores/upload-store';

export function UploadContainer() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="space-y-6 md:col-span-2">
        <FileUploadSection />
        <MetadataSection />
      </div>
      <div className="space-y-6">
        <AIAgentsSection />
        <UploadStatus />
      </div>
    </div>
  );
}