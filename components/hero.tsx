import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Expert Auto Repair for Every Part of Your Vehicle
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From engine repairs to cylinder heads, we provide comprehensive automotive services with precision and
              care. Trust our experienced technicians to keep your vehicle running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Schedule Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Call Us Now
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <img
              src="/professional-mechanic.jpg"
              alt="Professional mechanic working on car engine"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
