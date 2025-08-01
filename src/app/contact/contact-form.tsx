
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { handleFormSubmission } from "./actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(handleFormSubmission, { message: "", errors: undefined });

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="John Doe" />
        {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" />
        {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company (Optional)</Label>
        <Input id="company" name="company" placeholder="Your Company Inc." />
        {state.errors?.company && <p className="text-sm font-medium text-destructive">{state.errors.company[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service of Interest</Label>
        <Select name="service">
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lead-generation">Lead Generation</SelectItem>
            <SelectItem value="gmb-optimization">GMB Optimization</SelectItem>
            <SelectItem value="website-creation">Website Creation</SelectItem>
            <SelectItem value="ai-automation">AI & Chat Automation</SelectItem>
            <SelectItem value="ai-agents">Custom AI Agents</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.service && <p className="text-sm font-medium text-destructive">{state.errors.service[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
        {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
      {state.message === 'success' && (
        <Alert>
            <AlertTitle>Message Sent!</AlertTitle>
            <AlertDescription>Thanks for reaching out. We'll get back to you shortly.</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
