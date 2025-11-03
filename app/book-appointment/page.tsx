"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Appointment booking:", formData)
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Book Your Appointment
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Schedule your vehicle service with our expert technicians. We'll get your car back on the road in no
                time.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Form */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Appointment Details</CardTitle>
                    <CardDescription>Fill out the form below to schedule your service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="(555) 123-4567"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Vehicle Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Vehicle Information</h3>
                        <div className="space-y-2">
                          <Label htmlFor="vehicle">Vehicle Make, Model & Year *</Label>
                          <Input
                            id="vehicle"
                            name="vehicle"
                            placeholder="e.g., 2020 Toyota Camry"
                            value={formData.vehicle}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Type *</Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            required
                          >
                            <option value="">Select a service</option>
                            <option value="engine-repair">Engine Repair</option>
                            <option value="cylinder-head">Cylinder Head Service</option>
                            <option value="transmission">Transmission Repair</option>
                            <option value="brake-service">Brake Service</option>
                            <option value="oil-change">Oil Change</option>
                            <option value="diagnostic">Diagnostic Service</option>
                            <option value="electrical">Electrical Repair</option>
                            <option value="suspension">Suspension Repair</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Appointment Date & Time */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Preferred Date & Time</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="date">Preferred Date *</Label>
                            <Input
                              id="date"
                              name="date"
                              type="date"
                              value={formData.date}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time">Preferred Time *</Label>
                            <select
                              id="time"
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              required
                            >
                              <option value="">Select a time</option>
                              <option value="08:00">8:00 AM</option>
                              <option value="09:00">9:00 AM</option>
                              <option value="10:00">10:00 AM</option>
                              <option value="11:00">11:00 AM</option>
                              <option value="12:00">12:00 PM</option>
                              <option value="13:00">1:00 PM</option>
                              <option value="14:00">2:00 PM</option>
                              <option value="15:00">3:00 PM</option>
                              <option value="16:00">4:00 PM</option>
                              <option value="17:00">5:00 PM</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
                        <div className="space-y-2">
                          <Label htmlFor="message">Describe the Issue (Optional)</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Please describe any issues or concerns with your vehicle..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Book Appointment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Contact Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">info@autofixpro.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">123 Auto Street, City, ST 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Monday - Friday</p>
                        <p className="text-sm text-muted-foreground">8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Saturday</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Sunday</p>
                        <p className="text-sm text-muted-foreground">Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* What to Expect Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Confirmation call within 24 hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Free diagnostic with service</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Detailed estimate before work begins</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Updates throughout the repair process</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Service Banner */}
        <section className="bg-accent py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">Need Emergency Service?</h2>
              <p className="text-accent-foreground/90 mb-6">
                For urgent repairs or roadside assistance, call us directly at (555) 123-4567
              </p>
              <Button variant="outline" className="bg-background text-foreground hover:bg-background/90">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
