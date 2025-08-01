import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import type { Metadata } from 'next'
import Image from "next/image";

export const metadata: Metadata = {
  title: 'About Us',
}

const teamMembers = [
  { name: "John Doe", role: "Paid Ads Specialist", avatar: "https://placehold.co/150x150.png", data_ai_hint: "man portrait", bio: "John lives and breathes data, crafting high-conversion ad campaigns on Google and Facebook." },
  { name: "Jane Smith", role: "SEO & GMB Expert", avatar: "https://placehold.co/150x150.png", data_ai_hint: "woman portrait", bio: "Jane is a master of local search, helping businesses dominate their geographic area." },
  { name: "Alice Johnson", role: "Lead Web Developer", avatar: "https://placehold.co/150x150.png", data_ai_hint: "woman portrait", bio: "Alice combines stunning design with flawless code to create unforgettable web experiences." },
  { name: "Bob Williams", role: "AI & Automation Guru", avatar: "https://placehold.co/150x150.png", data_ai_hint: "man portrait", bio: "Bob builds intelligent systems that streamline operations and unlock new possibilities." },
];

const values = [
  "Results-Driven",
  "Radical Transparency",
  "Continuous Innovation",
  "Client Partnership",
];

export default function AboutPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">We're the Growth Partner You've Been Looking For</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            At LeadFlow Agency, we're not just a service provider; we're an extension of your team. Our mission is to fuel your growth by leveraging the perfect blend of human creativity and artificial intelligence.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Our team collaborating"
              data-ai-hint="team collaboration"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-semibold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground mb-6">These principles guide every decision we make and every strategy we implement.</p>
            <ul className="space-y-4">
              {values.map(value => (
                <li key={value} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold">Meet the Experts</h2>
            <p className="mt-4 text-lg text-muted-foreground">The masterminds behind your success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} data-ai-hint={member.data_ai_hint} />
                    <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground mt-2 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
