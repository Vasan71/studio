import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Megaphone, MonitorSmartphone, Bot, Store, Zap, Check } from "lucide-react";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Our Services',
};

const services = [
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "marketing chart",
    title: "Lead Generation: Facebook & Google Ads",
    description: "We don't just run ads; we build revenue-generating machines. Our data-first approach to paid advertising ensures your message reaches hyper-targeted audiences ready to convert.",
    features: ["Audience Research & Targeting", "A/B Testing & Optimization", "Conversion Tracking", "Detailed Performance Reporting"]
  },
  {
    icon: <Store className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "local store",
    title: "Google My Business (GMB) Optimization",
    description: "Dominate local search and become the go-to choice in your area. We meticulously optimize your GMB profile to boost visibility, attract more customers, and drive foot traffic.",
    features: ["Profile & Listing Enhancement", "Review Management Strategy", "Local SEO Integration", "Regular Postings & Updates"]
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "website design",
    title: "High-Performance Website Creation",
    description: "Your website is your digital storefront. We build lightning-fast, visually stunning, and mobile-first websites engineered to convert visitors into customers.",
    features: ["Custom, Responsive Design", "SEO-Friendly Architecture", "Fast Loading Speeds", "User Experience (UX) Focused"]
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "robot chatbot",
    title: "AI & Chat Automation",
    description: "Provide instant, 24/7 support and qualify leads while you sleep. We design intelligent chatbots that engage visitors, answer questions, and guide users through your sales funnel.",
    features: ["24/7 Lead Qualification", "Automated Customer Support", "Seamless CRM Integration", "Custom Conversation Flows"]
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "abstract AI",
    title: "Custom AI Agent Setup",
    description: "Go beyond chatbots with custom AI agents designed to handle complex, industry-specific tasks, from automating internal workflows to providing sophisticated data analysis.",
    features: ["Workflow Automation", "Data Analysis & Insights", "Internal Knowledge Base Management", "Personalized Customer Interactions"]
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/600x400.png",
    data_ai_hint: "automation gears",
    title: "Business Process Automation",
    description: "Eliminate repetitive tasks and free up your team to focus on what matters. We implement AI-driven automation to streamline operations, reduce errors, and improve productivity.",
    features: ["Process Analysis & Mapping", "Automated Data Entry & Reporting", "Cross-Platform Integrations", "Scalable Automation Solutions"]
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">Our Suite of Services</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Precision-engineered solutions designed to fuel your growth. We blend creative strategy with powerful technology to deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col overflow-hidden group">
               <CardHeader className="p-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  data-ai-hint={service.data_ai_hint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-3">
                  {service.icon}
                  <CardTitle className="font-headline text-2xl leading-tight">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full md:w-auto mt-auto self-start">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
