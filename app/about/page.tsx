import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Award, Users, Clock, Shield, Wrench, Target, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  "Certified and experienced technicians",
  "State-of-the-art diagnostic equipment",
  "Quality parts and warranties",
  "Transparent pricing with no hidden fees",
  "Fast turnaround times",
  "Customer satisfaction guaranteed",
]

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We believe in honest assessments and transparent communication. No upselling, no hidden fees.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Our certified technicians undergo continuous training to stay updated with the latest automotive technology.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We treat every vehicle as if it were our own.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "We use advanced diagnostic tools and proven repair methods to ensure accurate, lasting solutions.",
  },
]

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "15,000+", label: "Cars Repaired" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "10+", label: "Expert Technicians" },
]

const team = [
  {
    name: "John Martinez",
    role: "Master Technician & Owner",
    experience: "25 years of experience",
    specialization: "Engine & Transmission Specialist",
  },
  {
    name: "Sarah Chen",
    role: "Lead Diagnostic Technician",
    experience: "15 years of experience",
    specialization: "Electronic Systems & Diagnostics",
  },
  {
    name: "Michael Johnson",
    role: "Senior Mechanic",
    experience: "18 years of experience",
    specialization: "Cylinder Heads & Engine Rebuilds",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                About AutoFix Pro
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your trusted partner in automotive repair since 2004. We combine decades of experience with cutting-edge
                technology to keep your vehicle running at its best.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <img
                  src="/modern-auto-repair-shop-interior-with-tools-and-eq.jpg"
                  alt="Modern auto repair shop"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    AutoFix Pro was founded in 2004 by John Martinez, a master technician with a passion for automotive
                    excellence. What started as a small two-bay shop has grown into a full-service repair facility
                    trusted by thousands of customers.
                  </p>
                  <p>
                    Our journey has been built on a simple philosophy: treat every customer with respect, provide honest
                    assessments, and deliver quality repairs that last. We've invested in the latest diagnostic
                    equipment and training to ensure we can handle everything from routine maintenance to complex engine
                    rebuilds.
                  </p>
                  <p>
                    Today, we're proud to be the go-to auto repair shop for our community, specializing in engine
                    repair, cylinder head services, and comprehensive automotive care. Our team of certified technicians
                    brings together over 150 years of combined experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do, from the moment you call to the final quality check.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Why Choose AutoFix Pro?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 20 years of experience in automotive repair, we've built our reputation on quality
                  workmanship, honest service, and customer satisfaction. Our team of certified technicians uses the
                  latest technology to diagnose and repair your vehicle efficiently.
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

              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <img
                  src="/professional-mechanic-working-on-car-engine-in-mod.jpg"
                  alt="Professional mechanic working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Meet Our Expert Team</h2>
              <p className="text-lg text-muted-foreground">
                Our certified technicians are the heart of AutoFix Pro. Each brings specialized expertise and a
                commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6 space-y-4 text-center">
                    <div className="h-24 w-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                      <Users className="h-12 w-12 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="text-accent font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.experience}</p>
                      <p className="text-sm text-foreground">{member.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Certifications & Expertise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our technicians hold certifications from ASE (Automotive Service Excellence), manufacturer-specific
                training programs, and specialized credentials in engine diagnostics, cylinder head repair, and advanced
                automotive systems. We invest in ongoing education to stay current with evolving automotive technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">ASE Certified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                  <Wrench className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Engine Specialists</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">20+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
