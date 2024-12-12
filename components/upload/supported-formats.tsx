import { Card } from '@/components/ui/card';
import { FileText, Image, Database, FileSpreadsheet } from 'lucide-react';

const formats = [
  { icon: FileText, label: 'Text Files', formats: '.txt, .md' },
  { icon: FileSpreadsheet, label: 'Spreadsheets', formats: '.csv, .xlsx' },
  { icon: Database, label: 'Data Files', formats: '.json, .xml' },
  { icon: Image, label: 'Images', formats: '.jpg, .png, .webp' },
];

export function SupportedFormats() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground p-4">
      <h3 className="text-sm font-medium mb-3">Supported Formats</h3>
      <div className="grid grid-cols-2 gap-4">
        {formats.map(({ icon: Icon, label, formats }) => (
          <div key={label} className="flex items-center space-x-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{label}</p>
              <p className="text-xs text-muted-foreground">{formats}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Maximum file size: 100 MB
      </p>
    </div>
  );
}