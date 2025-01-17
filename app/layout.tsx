import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import './styles.css';

const inter = Hanken_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Currency Converter',
  description: 'Crafted with love -- byMd Shamsuzzama Siddique'
};

// Inspirations
// https://dribbble.com/shots/24021079-Dashboard-Neutrade-Crypto-UI-Kit-Dark-mode
// https://dribbble.com/shots/18393355-CCE-Crypto-Currency-Exchanger

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-YTZF83NV3R" />

      <body className={inter.className}>
        {children}

        <SpeedInsights />
      </body>
    </html>
  );
}
