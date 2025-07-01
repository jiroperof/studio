
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Network, Laptop, Camera, Siren, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Network className="w-10 h-10 text-primary" />,
    title: "Networking",
    description: "Expert design, implementation, and management of robust and secure network infrastructures.",
  },
  {
    icon: <Laptop className="w-10 h-10 text-primary" />,
    title: "Computing",
    description: "Comprehensive hardware and software support, from troubleshooting to complete system upgrades.",
  },
  {
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "CCTV Systems",
    description: "Installation and maintenance of high-definition surveillance systems for your security.",
  },
  {
    icon: <Siren className="w-10 h-10 text-primary" />,
    title: "Alarm Systems",
    description: "State-of-the-art alarm solutions to protect your home or business 24/7.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "General IT Support",
    description: "Reliable and responsive IT support to keep your operations running smoothly.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    company: "Innovate Corp",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    text: "ICARO TECHNOLOGY revolutionized our network infrastructure. Their team is professional, efficient, and incredibly knowledgeable. Highly recommended!",
  },
  {
    name: "Jane Smith",
    company: "Business Solutions Ltd.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    text: "The CCTV and alarm system installation was seamless. We feel much more secure thanks to their expert service. The peace of mind is priceless.",
  },
  {
    name: "Samuel Green",
    company: "Green's Retail",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "person smiling",
    text: "Their IT support is top-notch. Quick to respond and always able to solve our issues, no matter how complex. They are a true partner.",
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
              Your Partner in Modern IT Solutions. Reliable, Secure, and Efficient.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Our Services</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              We provide a wide range of expert IT services to meet your needs.
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
                <CardTitle className="mt-4">And Much More</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">We offer a wide array of system solutions tailored to your specific requirements. Contact us to find out more.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">What Our Clients Say</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Real stories from satisfied customers.
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
            <h2 className="text-3xl font-bold tracking-tighter font-headline">Ready to Upgrade Your IT?</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Let's discuss how ICARO TECHNOLOGY can help your business thrive. Get a free, no-obligation quote today.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/quote">Request Your Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
