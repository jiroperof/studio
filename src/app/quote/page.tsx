
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { getQuote, type QuoteState } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Loader2, AlertCircle, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Estimating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Get AI Estimate
        </>
      )}
    </Button>
  );
}

export default function QuotePage() {
  const initialState: QuoteState = {};
  const [state, formAction] = useFormState(getQuote, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error && !state.validationErrors) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Request a Quote</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Describe your IT needs, and our AI will provide an instant price estimate.
        </p>
      </div>

      <Card>
        <form action={formAction}>
          <CardContent className="p-6 space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="serviceRequest">Service Request</Label>
              <Textarea
                id="serviceRequest"
                name="serviceRequest"
                placeholder="Describe your project in detail. For example: 'I need to set up a secure network for a 10-person office, including Wi-Fi, a firewall, and a file server. We also need 4 CCTV cameras installed at the entrances.'"
                rows={8}
                defaultValue={state.submittedRequest}
                aria-describedby="serviceRequest-error"
                required
              />
              {state.validationErrors?.serviceRequest && (
                <p id="serviceRequest-error" className="text-sm text-destructive">
                  {state.validationErrors.serviceRequest[0]}
                </p>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              The more detail you provide, the more accurate the estimate will be. This is a preliminary estimate and is subject to change after a detailed review.
            </p>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      {state.result && (
        <div className="mt-8">
          <Card className="bg-accent/20 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 />
                Your AI-Powered Estimate
              </CardTitle>
              <CardDescription>
                Based on your request, here is our preliminary estimate.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Estimated Price Range</p>
                <p className="text-2xl font-bold">{state.result.priceRange}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Confidence Level</p>
                <Badge variant={state.result.confidenceLevel === 'High' ? 'default' : (state.result.confidenceLevel === 'Medium' ? 'secondary' : 'destructive')}>
                  {state.result.confidenceLevel}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
               <p className="text-xs text-muted-foreground">A team member will contact you shortly to provide a formal quote.</p>
            </CardFooter>
          </Card>
        </div>
      )}

      {state.error && !state.validationErrors && (
         <Alert variant="destructive" className="mt-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Estimation Failed</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
         </Alert>
      )}
    </div>
  );
}
