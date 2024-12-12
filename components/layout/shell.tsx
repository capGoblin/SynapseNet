import { Navigation } from '@/components/layout/navigation';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}