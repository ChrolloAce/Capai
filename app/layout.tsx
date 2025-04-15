import React from 'react';
import './styles/globals.css';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'CAP AI - Budget Tracker',
  description: 'Track and manage your finances with CAP AI Budget Tracker',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 