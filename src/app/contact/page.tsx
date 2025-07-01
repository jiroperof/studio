
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Contact Us</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          We're here to help. Reach out to us with any questions or for support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Find us here and drop a line.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <Phone className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:support@icarotech.com" className="text-muted-foreground hover:text-primary transition-colors">
                    support@icarotech.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground">123 Tech Avenue, Silicon Valley, CA 94000</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
                <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent>
                 <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                        src="https://placehold.co/600x400.png"
                        alt="Map to ICARO Technology"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint="map location"
                    />
                </div>
            </CardContent>
          </Card>

        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
