import type { Metadata } from 'next';
import { LeadRouterClient } from './lead-router-client';

export const metadata: Metadata = {
  title: 'AI Lead Router',
};

export default function LeadRouterPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">AI Lead Router</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Paste a new lead request into the text box below. Our AI assistant will analyze the content and recommend the best team members to handle it.
          </p>
        </div>
        <LeadRouterClient />
      </div>
    </div>
  );
}
