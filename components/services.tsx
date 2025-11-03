import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, Wrench, Settings, Gauge, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "Engine Repair",
    description: "Complete engine diagnostics, repair, and rebuilding services for all makes and models.",
  },
  {
    icon: Settings,
    title: "Cylinder Head Services",
    description: "Expert cylinder head repair, resurfacing, and valve work to restore engine performance.",
  },
  {
    icon: Wrench,
    title: "Transmission Service",
    description: "Full transmission repair, maintenance, and replacement services.",
  },
  {
    icon: Gauge,
    title: "Brake System",
    description: "Comprehensive brake inspection, repair, and replacement for your safety.",
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    description: "Advanced diagnostics and repair of all automotive electrical components.",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Regular maintenance services to keep your vehicle in optimal condition.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer a complete range of automotive repair services to keep your vehicle running at its best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-card-foreground">{service.title}</CardTitle>
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
  )
}
