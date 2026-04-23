import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prixma — Component Library',
  description: 'A beautifully crafted, accessible component library built directly from your Figma design system. Purple-forward, token-driven, and drop-in ready.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
