'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface ThreePanelLayoutProps {
  leftPanel: React.ReactNode;
  centerPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}

export function ThreePanelLayout({
  leftPanel,
  centerPanel,
  rightPanel,
}: ThreePanelLayoutProps) {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full">
        {/* Left Panel */}
        <div
          className={cn(
            "bg-card border-r transition-all duration-300",
            leftCollapsed ? "w-0" : "w-80"
          )}
        >
          <div className="relative h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 top-2 z-50"
              onClick={() => setLeftCollapsed(!leftCollapsed)}
            >
              {leftCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
            <div className={cn(
              "h-full overflow-hidden transition-all duration-300",
              leftCollapsed ? "w-0" : "w-80"
            )}>
              {leftPanel}
            </div>
          </div>
        </div>

        {/* Center Panel */}
        <div className="flex-1 overflow-auto px-6 py-8">
          {centerPanel}
        </div>

        {/* Right Panel */}
        <div
          className={cn(
            "bg-card border-l transition-all duration-300",
            rightCollapsed ? "w-0" : "w-80"
          )}
        >
          <div className="relative h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -left-4 top-2 z-50"
              onClick={() => setRightCollapsed(!rightCollapsed)}
            >
              {rightCollapsed ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
            <div className={cn(
              "h-full overflow-hidden transition-all duration-300",
              rightCollapsed ? "w-0" : "w-80"
            )}>
              {rightPanel}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full">
        <div className="flex flex-col h-[calc(100vh-4rem)]">
          {/* Center Panel */}
          <div className="flex-1 overflow-auto px-4 py-6">
            {centerPanel}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-around border-t bg-background p-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  Agents
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                {leftPanel}
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  Activity
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                {rightPanel}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}