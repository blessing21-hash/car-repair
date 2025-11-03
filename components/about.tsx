import { CheckCircle } from "lucide-react"

const features = [
  "Certified and experienced technicians",
  "State-of-the-art diagnostic equipment",
  "Quality parts and warranties",
  "Transparent pricing with no hidden fees",
  "Fast turnaround times",
  "Customer satisfaction guaranteed",
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <img
              src="/modern-auto.jpg"
              alt="Modern auto repair shop"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Why Choose AutoFix Pro?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 20 years of experience in automotive repair, we've built our reputation on quality workmanship,
              honest service, and customer satisfaction. Our team of certified technicians uses the latest technology to
              diagnose and repair your vehicle efficiently.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
