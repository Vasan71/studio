import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BrainCircuit, Megaphone, MonitorSmartphone, Bot, MessageCircle, Store, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Megaphone className="w-10 h-10 text-primary" />,
    title: "Lead Generation",
    description: "Targeted Facebook & Google Ads campaigns that convert. We find the customers you want.",
  },
  {
    icon: <Store className="w-10 h-10 text-primary" />,
    title: "GMB Optimization",
    description: "Climb local search rankings and dominate your area with an optimized Google My Business profile.",
  },
  {
    icon: <MonitorSmartphone className="w-10 h-10 text-primary" />,
    title: "Website Creation",
    description: "Stunning, high-performance websites that capture your brand and captivate your audience.",
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "AI & Chat Automation",
    description: "Automate conversations, qualify leads, and provide 24/7 support with intelligent chatbots.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "Custom AI Agents",
    description: "Deploy custom AI agents to handle complex tasks, from customer service to data analysis.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Process Automation",
    description: "Streamline your business operations with our AI-powered process automation solutions.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, Tech Innovators",
    avatar: "https://placehold.co/100x100.png",
    data_ai_hint: "woman portrait",
    quote: "LeadFlow Agency's AI automation saved us 20 hours a week. Their team is brilliant and the results speak for themselves. An absolute game-changer for our business!",
  },
  {
    name: "Michael Chen",
    title: "Marketing Director, StyleCo",
    avatar: "https://placehold.co/100x100.png",
    data_ai_hint: "man portrait",
    quote: "The new website they built for us is not only beautiful but also incredibly fast. Our conversion rates have doubled since the launch. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    title: "Founder, Fresh Eats",
    avatar: "https://placehold.co/100x100.png",
    data_ai_hint: "woman portrait",
    quote: "Their Facebook ad campaigns are pure magic. We've seen a 300% ROI and our lead quality has never been better. We couldn't be happier with the results.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Supercharge Your Growth with <span className="text-primary">AI-Powered Marketing</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine data-driven strategies with cutting-edge AI to deliver real results. Stop guessing, start growing.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What We Do Best</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our suite of services is designed for one thing: your success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Loved by Businesses Worldwide</h2>
            <p className="mt-4 text-lg text-muted-foreground">Don't just take our word for it. Here's what our clients say.</p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="pt-6">
                        <p className="italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardHeader className="flex-row items-center gap-4 pt-2">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.data_ai_hint}/>
                          <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="cta" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-lg p-10 md:p-16 text-center shadow-2xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Elevate Your Business?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Let's build something amazing together. Schedule a free, no-obligation consultation to discuss your project.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
