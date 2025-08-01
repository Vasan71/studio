import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: 'Contact Us',
}

const contactDetails = [
  { icon: <Mail className="w-6 h-6 text-primary" />, title: "Email Us", value: "hello@leadflow.agency" },
  { icon: <Phone className="w-6 h-6 text-primary" />, title: "Call Us", value: "+1 (555) 123-4567" },
  { icon: <MapPin className="w-6 h-6 text-primary" />, title: "Find Us", value: "123 Growth Ave, Suite 100, Innovation City, 12345" },
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">Get in Touch</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear about it. Fill out the form below or use one of our contact methods to start the conversation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-card p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-3xl mb-6">Send us a message</h2>
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-lg shadow-lg h-full">
              <h3 className="font-headline text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactDetails.map(detail => (
                  <div key={detail.title} className="flex gap-4">
                    <div className="flex-shrink-0">{detail.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{detail.title}</h4>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
