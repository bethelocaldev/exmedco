"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { navigation } from "@/data/site-data"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
        isScrolled ? "shadow-sm border-b border-border" : ""
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-14 md:h-16" : "h-16 md:h-24"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-9 w-28 md:h-12 md:w-40">
              <Image
                src="/assets/logo.png"
                alt="FHY Gloexpo Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navigation.main.map((item) =>
              item.children ? (
                /* Hover Dropdown for items with children */
                <div key={item.name} className="relative group">
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50 hover:text-primary transition-colors">
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown panel — shown on group hover */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 min-w-[220px]">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden">
                      {item.children.map((child, idx) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            "flex items-center px-4 py-3 text-sm font-medium text-slate-800 hover:bg-primary/5 hover:text-primary transition-colors",
                            idx !== item.children!.length - 1 && "border-b border-slate-100"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full pl-6 pr-2 h-11"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span className="font-medium text-sm">Partner With Us</span>
                <div className="bg-white/20 rounded-full p-1.5 flex items-center justify-center">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full xs:w-[300px] sm:w-[360px]">
              <nav className="flex flex-col gap-2 mt-8">
                {navigation.main.map((item) =>
                  item.children ? (
                    <MobileDropdown
                      key={item.name}
                      item={item}
                      onClose={() => setIsMobileMenuOpen(false)}
                    />
                  ) : (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-medium py-2.5 px-3 rounded-md hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  )
                )}
                <div className="pt-4 m-4 border-t border-border">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                    >
                      <Link href="/contact" className="flex items-center py-6 justify-center gap-2">
                        Partner With Us
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

/* ── Mobile dropdown ───────────────────────────────────────────── */

interface MobileDropdownProps {
  item: {
    name: string
    href: string
    children?: { name: string; href: string }[]
  }
  onClose: () => void
}

function MobileDropdown({ item, onClose }: MobileDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-base font-medium py-2.5 px-3 rounded-md hover:bg-slate-50 hover:text-primary transition-colors"
      >
        {item.name}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      {isOpen && item.children && (
        <div className="ml-3 mt-1 border-l-2 border-primary/20 pl-3 flex flex-col gap-1">
          {item.children.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              onClick={onClose}
              className="text-sm text-slate-600 hover:text-primary py-2 transition-colors"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
