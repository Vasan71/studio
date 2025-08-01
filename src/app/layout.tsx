import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'
import { WhatsAppCTA } from '@/components/whatsapp-cta'

export const metadata: Metadata = {
  title: {
    default: 'LeadFlow Agency',
    template: '%s | LeadFlow Agency',
  },
  description: 'Driving growth with data-driven marketing and AI solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppCTA />
        <Toaster />
      </body>
    </html>
  );
}
