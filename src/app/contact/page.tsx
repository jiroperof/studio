
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Contáctenos</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Estamos aquí para ayudar. Contáctenos si tiene alguna pregunta o necesita soporte.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>Encuéntrenos aquí y escríbanos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <Phone className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <a href="tel:+584123384661" className="text-muted-foreground hover:text-primary transition-colors">
                    +58 412-3384661
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Correo Electrónico</p>
                  <a href="mailto:grupoicaro24@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    grupoicaro24@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-muted-foreground">Los Ruices, Caracas, Venezuela</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
                <CardTitle>Nuestra Ubicación</CardTitle>
            </CardHeader>
            <CardContent>
                 <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1012793155583!2d-66.8316360251847!3d10.492681864363824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59644dba5d27%3A0xd0ca47d1acd082f8!2sCentro%20Comercial%20Los%20Ruices!5e0!3m2!1sen!2sve!4v1751383996930!5m2!1sen!2sve"
                        style={{ border: 0 }} 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full">
                    </iframe>
                </div>
            </CardContent>
          </Card>

        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Envíenos un Mensaje</CardTitle>
              <CardDescription>Complete el formulario a continuación y nos pondremos en contacto con usted.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Su Nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="su.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="¿Cómo podemos ayudarle?" rows={5} />
                </div>
                <Button type="submit" className="w-full">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
