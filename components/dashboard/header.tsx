'use client';

import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function DashboardHeader() {
  const notifications = [
    { id: 1, message: 'Your dataset "Healthcare Analytics" has been validated', time: '2 mins ago' },
    { id: 2, message: 'You earned 50 tokens for your recent contribution', time: '1 hour ago' },
  ];

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Here's what's happening with your data platform activity</p>
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              2
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          {notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4">
              <div className="font-medium">{notification.message}</div>
              <div className="text-sm text-muted-foreground">{notification.time}</div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}