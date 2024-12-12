import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Shell } from '@/components/layout/shell';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Data Platform',
  description: 'A decentralized data platform with AI agent integration',
  keywords: ['Data Platform', 'AI Agents', 'Decentralized Storage'],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Shell>{children}</Shell>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}