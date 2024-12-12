import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Welcome to Next.js 14
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A production-ready template with modern features including Tailwind CSS,
            shadcn/ui components, and dark mode support.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}