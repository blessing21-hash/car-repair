import { Wrench } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold text-card-foreground">AutoFix Pro</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for all automotive repair needs. Quality service, honest pricing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Engine Repair</li>
              <li>Cylinder Heads</li>
              <li>Transmission</li>
              <li>Brake Service</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Warranty Info</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AutoFix Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
