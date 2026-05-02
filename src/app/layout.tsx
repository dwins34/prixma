import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prixma — Component Library',
  description: 'An open-source React component library with a built-in design system. Copy, install, and ship.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
