import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cog,
  Wrench,
  Settings,
  Gauge,
  Zap,
  Shield,
  Car,
  Droplet,
  Wind,
  Battery,
  Thermometer,
  CircleDot,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

const mainServices = [
  {
    icon: Cog,
    title: "Engine Repair & Rebuilding",
    description: "Complete engine diagnostics, repair, and rebuilding services for all makes and models.",
    features: [
      "Engine diagnostics and troubleshooting",
      "Complete engine rebuilds",
      "Timing belt/chain replacement",
      "Oil leak repairs",
      "Performance upgrades",
    ],
    popular: true,
  },
  {
    icon: Settings,
    title: "Cylinder Head Services",
    description: "Expert cylinder head repair, resurfacing, and valve work to restore engine performance.",
    features: [
      "Cylinder head resurfacing",
      "Valve grinding and replacement",
      "Head gasket replacement",
      "Crack detection and repair",
      "Pressure testing",
    ],
    popular: true,
  },
  {
    icon: Wrench,
    title: "Transmission Service",
    description: "Full transmission repair, maintenance, and replacement services.",
    features: [
      "Transmission diagnostics",
      "Fluid changes and flushes",
      "Clutch replacement",
      "Transmission rebuilds",
      "Automatic and manual transmission repair",
    ],
    popular: false,
  },
  {
    icon: Gauge,
    title: "Brake System",
    description: "Comprehensive brake inspection, repair, and replacement for your safety.",
    features: [
      "Brake pad and rotor replacement",
      "Brake fluid service",
      "ABS system diagnostics",
      "Brake line repair",
      "Emergency brake service",
    ],
    popular: false,
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    description: "Advanced diagnostics and repair of all automotive electrical components.",
    features: [
      "Battery testing and replacement",
      "Alternator and starter repair",
      "Wiring diagnostics",
      "Sensor replacement",
      "Computer diagnostics",
    ],
    popular: false,
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Regular maintenance services to keep your vehicle in optimal condition.",
    features: [
      "Oil changes and filter replacement",
      "Multi-point inspections",
      "Fluid top-offs",
      "Belt and hose inspection",
      "Scheduled maintenance services",
    ],
    popular: false,
  },
]

const additionalServices = [
  {
    icon: Car,
    title: "Suspension & Steering",
    description: "Shock absorbers, struts, alignment, and steering system repairs.",
  },
  {
    icon: Droplet,
    title: "Cooling System",
    description: "Radiator repair, coolant flushes, and thermostat replacement.",
  },
  {
    icon: Wind,
    title: "AC & Heating",
    description: "Climate control diagnostics, refrigerant recharge, and repairs.",
  },
  {
    icon: Battery,
    title: "Starting & Charging",
    description: "Battery, alternator, and starter motor testing and replacement.",
  },
  {
    icon: Thermometer,
    title: "Exhaust System",
    description: "Muffler, catalytic converter, and exhaust pipe repair.",
  },
  {
    icon: CircleDot,
    title: "Tire Services",
    description: "Tire rotation, balancing, alignment, and replacement.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Diagnosis",
    description: "We perform a thorough inspection using advanced diagnostic tools to identify the issue.",
  },
  {
    number: "02",
    title: "Estimate",
    description: "You receive a detailed, transparent estimate with no hidden fees before any work begins.",
  },
  {
    number: "03",
    title: "Repair",
    description: "Our certified technicians perform the repair using quality parts and proven techniques.",
  },
  {
    number: "04",
    title: "Quality Check",
    description: "Every repair is tested and inspected to ensure it meets our high standards.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Professional Auto Repair</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Complete Auto Repair Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                From engine rebuilds to routine maintenance, we provide expert care for every part of your vehicle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Schedule Service
                </Button>
                <Button size="lg" variant="outline">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive automotive repair and maintenance services backed by years of expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={index}
                    className="border-border hover:border-accent transition-all hover:shadow-lg relative"
                  >
                    {service.popular && (
                      <Badge className="absolute -top-3 right-4 bg-accent text-accent-foreground">Most Popular</Badge>
                    )}
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <CardTitle className="text-card-foreground text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Additional Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We also offer a wide range of specialized services to meet all your automotive needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="border-border hover:border-accent transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-card-foreground text-lg">{service.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Service Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A transparent, efficient process designed to get you back on the road quickly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent font-bold text-2xl mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Schedule your service appointment today and experience the difference of professional auto care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Book Appointment
                </Button>
                <Link href="/#contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
