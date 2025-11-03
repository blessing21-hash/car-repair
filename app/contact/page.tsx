"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get In Touch With Us</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about our services or need to schedule a repair? Our team is ready to help you get back
                on the road.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call
                    us directly.
                  </p>
                </div>

                <Card className="border-border">
                  <CardContent className="pt-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vehicle">Vehicle Information</Label>
                        <Input id="vehicle" placeholder="e.g., 2020 Honda Accord" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Input id="service" placeholder="e.g., Engine repair, Oil change" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your vehicle issues or service needs..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Reach out to us through any of these channels. We're here to answer your questions and schedule your
                    service.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
                          <p className="text-muted-foreground mb-1">(555) 123-4567</p>
                          <p className="text-sm text-muted-foreground">Call us for immediate assistance</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                          <p className="text-muted-foreground mb-1">info@autofixpro.com</p>
                          <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
                          <p className="text-muted-foreground mb-1">123 Auto Street</p>
                          <p className="text-muted-foreground mb-1">Repair City, ST 12345</p>
                          <p className="text-sm text-muted-foreground">Easy parking available</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-2">Business Hours</h3>
                          <div className="space-y-1 text-muted-foreground">
                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quick Actions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">Book Appointment</h3>
                    <p className="text-sm text-muted-foreground mb-4">Schedule your service online</p>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Book Now</Button>
                  </CardContent>
                </Card>

                <Card className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">Get a Quote</h3>
                    <p className="text-sm text-muted-foreground mb-4">Free estimate for your repair</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Request Quote
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-2">Emergency Service</h3>
                    <p className="text-sm text-muted-foreground mb-4">Call us for urgent repairs</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Find Us</h2>
              <Card className="border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-96 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Map integration placeholder</p>
                      <p className="text-sm text-muted-foreground mt-2">123 Auto Street, Repair City, ST 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
