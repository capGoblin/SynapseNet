'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function FileUpload() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <Card className={`p-8 border-2 border-dashed transition-colors ${
      dragActive ? 'border-primary bg-primary/5' : 'border-border'
    }`}>
      <div
        className="flex flex-col items-center justify-center gap-4"
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrag}
      >
        <Upload className="h-10 w-10 text-muted-foreground" />
        <div className="text-center">
          <p className="text-lg font-medium">Drag and drop your files here</p>
          <p className="text-sm text-muted-foreground">or click to browse</p>
        </div>
        <Label htmlFor="file-upload" className="cursor-pointer">
          <Input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={() => {}}
          />
        </Label>
      </div>
    </Card>
  );
}