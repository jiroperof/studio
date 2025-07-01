
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Network, Laptop, Camera, Siren, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Network className="w-10 h-10 text-primary" />,
    title: "Redes",
    description: "Diseño experto, implementación y gestión de infraestructuras de red robustas y seguras.",
  },
  {
    icon: <Laptop className="w-10 h-10 text-primary" />,
    title: "Computación",
    description: "Soporte integral de hardware y software, desde la solución de problemas hasta actualizaciones completas del sistema.",
  },
  {
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "Sistemas de CCTV",
    description: "Instalación y mantenimiento de sistemas de vigilancia de alta definición para su seguridad.",
  },
  {
    icon: <Siren className="w-10 h-10 text-primary" />,
    title: "Sistemas de Alarma",
    description: "Soluciones de alarma de última generación para proteger su hogar o negocio 24/7.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Soporte de TI General",
    description: "Soporte de TI confiable y receptivo para mantener sus operaciones funcionando sin problemas.",
  },
];

const testimonials = [
  {
    name: "Juan Pérez",
    company: "Innovate Corp",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    text: "ICARO TECHNOLOGY revolucionó nuestra infraestructura de red. Su equipo es profesional, eficiente e increíblemente experto. ¡Muy recomendable!",
  },
  {
    name: "Ana García",
    company: "Soluciones Empresariales Ltd.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    text: "La instalación del sistema de CCTV y alarma fue perfecta. Nos sentimos mucho más seguros gracias a su servicio experto. La tranquilidad no tiene precio.",
  },
  {
    name: "Samuel Verde",
    company: "Comercial Verde",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "person smiling",
    text: "Su soporte de TI es de primera categoría. Responden rápidamente y siempre son capaces de resolver nuestros problemas, sin importar cuán complejos sean. Son un verdadero socio.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-accent/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary-foreground font-headline">
              ICARO TECHNOLOGY
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Su Socio en Soluciones de TI Modernas. Confiable, Seguro y Eficiente.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/quote">Obtener Cotización</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contáctenos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Nuestros Servicios</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Ofrecemos una amplia gama de servicios de TI expertos para satisfacer sus necesidades.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  {service.icon}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
             <Card className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300 lg:col-span-3">
              <CardHeader className="p-0">
                <ShieldCheck className="w-10 h-10 text-primary" />
                <CardTitle className="mt-4">Y Mucho Más</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">Ofrecemos una amplia gama de soluciones de sistemas adaptadas a sus requisitos específicos. Contáctenos para saber más.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Lo que Dicen Nuestros Clientes</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Historias reales de clientes satisfechos.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground">"{testimonial.text}"</blockquote>
                </CardContent>
                <CardHeader className="flex flex-row items-center gap-4 p-6 pt-0 mt-auto">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg border text-center">
            <h2 className="text-3xl font-bold tracking-tighter font-headline">¿Listo para Actualizar su TI?</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Hablemos de cómo ICARO TECHNOLOGY puede ayudar a su negocio a prosperar. Obtenga una cotización gratuita y sin compromiso hoy.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/quote">Solicite su Estimación Gratuita</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
