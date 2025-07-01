
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
          Estimando...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Obtener Estimación con IA
        </>
      )}
    </Button>
  );
}

const confidenceLevelMap: { [key: string]: string } = {
    High: 'Alto',
    Medium: 'Medio',
    Low: 'Bajo',
};

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
        <h1 className="text-4xl font-bold tracking-tight font-headline">Solicitar una Cotización</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Describa sus necesidades de TI y nuestra IA le proporcionará una estimación de precio instantánea.
        </p>
      </div>

      <Card>
        <form action={formAction}>
          <CardContent className="p-6 space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="serviceRequest">Solicitud de Servicio</Label>
              <Textarea
                id="serviceRequest"
                name="serviceRequest"
                placeholder="Describa su proyecto en detalle. Por ejemplo: 'Necesito configurar una red segura para una oficina de 10 personas, incluyendo Wi-Fi, un firewall y un servidor de archivos. También necesitamos 4 cámaras de CCTV instaladas en las entradas.'"
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
              Cuanto más detalle proporcione, más precisa será la estimación. Esta es una estimación preliminar y está sujeta a cambios después de una revisión detallada.
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
                Su Estimación Impulsada por IA
              </CardTitle>
              <CardDescription>
                Basado en su solicitud, aquí está nuestra estimación preliminar.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Rango de Precio Estimado</p>
                <p className="text-2xl font-bold">{state.result.priceRange}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Nivel de Confianza</p>
                <Badge variant={state.result.confidenceLevel === 'High' ? 'default' : (state.result.confidenceLevel === 'Medium' ? 'secondary' : 'destructive')}>
                  {confidenceLevelMap[state.result.confidenceLevel] || state.result.confidenceLevel}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
               <p className="text-xs text-muted-foreground">Un miembro del equipo se comunicará con usted en breve para proporcionarle una cotización formal.</p>
            </CardFooter>
          </Card>
        </div>
      )}

      {state.error && !state.validationErrors && (
         <Alert variant="destructive" className="mt-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>La Estimación Falló</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
         </Alert>
      )}
    </div>
  );
}
