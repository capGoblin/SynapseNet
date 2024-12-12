import { LucideIcon } from 'lucide-react';

interface ActivityItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  timestamp: string;
  type: 'upload' | 'access' | 'reward';
}

export function ActivityItem({
  icon: Icon,
  title,
  description,
  timestamp,
  type,
}: ActivityItemProps) {
  return (
    <div className="flex items-center space-x-4 rounded-lg border p-4">
      <div className={`rounded-full p-2 ${
        type === 'upload' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' :
        type === 'access' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' :
        'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300'
      }`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{timestamp}</p>
      </div>
    </div>
  );
}