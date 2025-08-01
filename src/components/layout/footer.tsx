import Link from "next/link";
import { Logo } from "@/components/logo";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/lead-router", label: "AI Tool" },
];

const socialLinks = [
  { href: "#", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
  { href: "#", icon: <Github className="w-5 h-5" />, label: "GitHub" },
  { href: "#", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="max-w-xs text-muted-foreground mx-auto md:mx-0">
              Driving growth with data-driven marketing and AI solutions.
            </p>
          </div>
          <div className="flex-1 flex justify-center gap-8">
            <ul className="space-y-2">
              <h4 className="font-headline font-semibold mb-2">Navigation</h4>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Button variant="link" asChild className="p-0 h-auto font-normal text-muted-foreground hover:text-primary">
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-end">
            <h4 className="font-headline font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="ghost" size="icon" asChild>
                  <a href={link.href} aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LeadFlow Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
