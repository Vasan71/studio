
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { getLeadRouting } from "./actions";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Users } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Route Lead"}
    </Button>
  );
}

export function LeadRouterClient() {
  const [state, formAction, isPending] = useActionState(getLeadRouting, { message: "", data: null, errors: undefined });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "success") {
      formRef.current?.reset();
    }
  }, [state.message]);

  const hasErrors = state.message === 'error';
  const hasData = state.message === 'success' && state.data;
  const showPlaceholder = !isPending && !hasData && !hasErrors;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>New Lead Request</CardTitle>
          <CardDescription>Enter the content of the lead's request below.</CardDescription>
        </CardHeader>
        <form ref={formRef} action={formAction}>
          <CardContent>
            <Textarea
              name="requestContent"
              placeholder="e.g., 'Hi, I'm looking for someone to help me set up Facebook ads and maybe build a new website for my local bakery...'"
              className="min-h-[200px]"
              required
            />
             {state.errors?.requestContent && <p className="text-sm font-medium text-destructive mt-2">{state.errors.requestContent[0]}</p>}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Routing Recommendation</CardTitle>
          <CardDescription>AI-powered suggestions will appear here.</CardDescription>
        </CardHeader>
        <CardContent>
          {isPending && (
             <div className="text-center text-muted-foreground py-10 flex items-center justify-center">
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                <p>Analyzing...</p>
             </div>
          )}
          {hasData && (
            <div className="space-y-4">
              <Alert>
                <Users className="h-4 w-4" />
                <AlertTitle>Recommended Team</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5">
                    {state.data.recommendedTeamMembers.map((member: string) => <li key={member}>{member}</li>)}
                  </ul>
                </AlertDescription>
              </Alert>
              <div>
                <h4 className="font-semibold mb-2">Reasoning:</h4>
                <p className="text-sm text-muted-foreground">{state.data.reasoning}</p>
              </div>
            </div>
          )}
          {hasErrors && state.errors?._form && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.errors._form[0]}</AlertDescription>
            </Alert>
          )}
          {showPlaceholder && (
             <div className="text-center text-muted-foreground py-10">
                <p>Results will be displayed here.</p>
             </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
