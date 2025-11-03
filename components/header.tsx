// "use client"

// import { Button } from "@/components/ui/button"
// import { Menu, X, Wrench } from "lucide-react"
// import { useState } from "react"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Wrench className="h-6 w-6 text-accent" />
//             <span className="text-xl font-bold text-foreground">AutoFix Pro</span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             <a href="#home" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Home
//             </a>
//             <a href="#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Services
//             </a>
//             <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               About
//             </a>
//             <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Contact
//             </a>
//             <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Book Appointment</Button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <nav className="md:hidden py-4 flex flex-col gap-4">
//             <a
//               href="#home"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </a>
//             <a
//               href="#services"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Services
//             </a>
//             <a
//               href="#about"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </a>
//             <a
//               href="#contact"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </a>
//             <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">Book Appointment</Button>
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }






























// "use client"

// import { Button } from "@/components/ui/button"
// import { Menu, X, Wrench } from "lucide-react"
// import { useState } from "react"
// import Link from "next/link"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <Wrench className="h-6 w-6 text-accent" />
//             <span className="text-xl font-bold text-foreground">AutoFix Pro</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Home
//             </Link>
//             <Link href="/#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Services
//             </Link>
//             <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               About
//             </Link>
//             <Link href="/#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Contact
//             </Link>
//             <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Book Appointment</Button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <nav className="md:hidden py-4 flex flex-col gap-4">
//             <Link
//               href="/"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/#services"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               href="/#contact"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </Link>
//             <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">Book Appointment</Button>
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }
























// "use client"

// import { Button } from "@/components/ui/button"
// import { Menu, X, Wrench } from "lucide-react"
// import { useState } from "react"
// import Link from "next/link"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <Wrench className="h-6 w-6 text-accent" />
//             <span className="text-xl font-bold text-foreground">AutoFix Pro</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Home
//             </Link>
//             <Link href="/services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Services
//             </Link>
//             <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               About
//             </Link>
//             <Link href="/#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Contact
//             </Link>
//             <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Book Appointment</Button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <nav className="md:hidden py-4 flex flex-col gap-4">
//             <Link
//               href="/"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               href="/#contact"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </Link>
//             <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">Book Appointment</Button>
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }

















// "use client"

// import { Button } from "@/components/ui/button"
// import { Menu, X, Wrench } from "lucide-react"
// import { useState } from "react"
// import Link from "next/link"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <Wrench className="h-6 w-6 text-accent" />
//             <span className="text-xl font-bold text-foreground">AutoFix Pro</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Home
//             </Link>
//             <Link href="/services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Services
//             </Link>
//             <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               About
//             </Link>
//             <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
//               Contact
//             </Link>
//             <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Book Appointment</Button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <nav className="md:hidden py-4 flex flex-col gap-4">
//             <Link
//               href="/"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/services"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-foreground hover:text-accent transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </Link>
//             <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">Book Appointment</Button>
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }


































"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Wrench } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold text-foreground">AutoFix Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/book-appointment">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Book Appointment</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/book-appointment" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">Book Appointment</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
