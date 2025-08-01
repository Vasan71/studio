import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Portfolio',
}

const projects = [
  {
    title: "TechCorp Website Redesign",
    description: "A complete overhaul of a B2B SaaS company's website, focusing on UX, lead generation, and modern aesthetics. Resulted in a 150% increase in demo requests.",
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "website interface",
    tags: ["Website Creation", "UI/UX", "SEO"],
    liveUrl: "#",
  },
  {
    title: "E-commerce Ad Campaign",
    description: "Managed a multi-platform ad campaign for a fashion retailer, achieving a 5.2x return on ad spend (ROAS) during the holiday season.",
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "fashion product",
    tags: ["Facebook Ads", "Google Ads"],
    liveUrl: "#",
  },
  {
    title: "AI Customer Service Bot",
    description: "Developed an AI chatbot for a real estate agency that handled 80% of initial inquiries, qualifying leads and scheduling viewings 24/7.",
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "chatbot interface",
    tags: ["AI Automation", "Chatbot"],
    liveUrl: "#",
  },
  {
    title: "Local Cafe GMB Boost",
    description: "Optimized a local cafe's Google My Business profile, leading to a 75% increase in calls from the listing and a #1 ranking for 'best coffee near me'.",
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "cafe interior",
    tags: ["GMB Optimization", "Local SEO"],
    liveUrl: "#",
  },
  {
    title: "Fintech App UI/UX",
    description: "Designed the user interface and experience for a new mobile fintech application, focusing on simplicity, security, and user trust.",
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "mobile app",
    tags: ["UI/UX", "Website Creation"],
    liveUrl: "#",
  },
  {
    title: "Automated Reporting System",
    description: "Built an internal AI agent to automate weekly reporting for a marketing agency, saving the team over 10 hours per week.",
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "dashboard graph",
    tags: ["AI Agent", "Automation"],
    liveUrl: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">Our Work</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We're proud of the results we've driven for our clients. Here's a selection of our recent projects that showcase the breadth of our capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  data-ai-hint={project.data_ai_hint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={project.liveUrl}>
                    View Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
