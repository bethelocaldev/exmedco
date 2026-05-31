"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navigation } from "@/data/site-data"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-border bg-white/95 shadow-[0_10px_35px_rgba(10,22,40,0.08)] backdrop-blur-xl"
          : "border-transparent bg-white/88 backdrop-blur-md"
      )}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className={cn("flex items-center justify-between transition-all", isScrolled ? "h-16" : "h-20")}>
          <Link href="/" className="flex items-center gap-3" aria-label="Exmedco home">
            {/* <span className="grid size-10 place-items-center border border-primary/25 bg-primary text-sm font-bold text-white">
              EX
            </span> */}
             <Image
          src="/assets/logo.jpeg"
          alt="Exmedco logo"
          width={65}
          height={65}
          className=""  
          />
          </Link>
         
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navigation.main.map((item) =>
              item.children ? (
                <div key={item.name} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 font-heading text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[280px] pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="border border-border bg-white p-2 shadow-[0_24px_60px_rgba(10,22,40,0.12)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="group/link flex items-center justify-between gap-4 px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          {child.name}
                          <ArrowRight className="size-3.5 text-primary opacity-0 transition group-hover/link:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 font-heading text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="mailto:info@exmedco.com"
              className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent transition hover:text-accent/80"
            >
              info@exmedco.com
            </Link>
            <Button asChild className="h-11 rounded-none bg-foreground px-5 text-white hover:bg-primary">
              <Link href="/contact">
                Partner With Us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" aria-label="Open menu" className="rounded-none border-border bg-white">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l border-border bg-white p-0 sm:w-[390px]">
              <div className="border-b border-border p-6">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="grid size-10 place-items-center bg-primary text-sm font-bold text-white">
                    EX
                  </span>
                  <span className="font-heading text-xl font-extrabold text-foreground">Exmedco</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {navigation.main.map((item) =>
                  item.children ? (
                    <MobileDropdown key={item.name} item={item} onClose={() => setIsMobileMenuOpen(false)} />
                  ) : (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="px-3 py-3 font-heading text-base font-semibold text-foreground hover:bg-secondary"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  )
                )}
                <SheetClose asChild>
                  <Button asChild className="mt-4 h-12 rounded-none bg-foreground text-white hover:bg-primary">
                    <Link href="/contact">
                      Partner With Us
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

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
        className="flex w-full items-center justify-between px-3 py-3 font-heading text-base font-semibold text-foreground hover:bg-secondary"
      >
        {item.name}
        <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && item.children && (
        <div className="ml-3 border-l border-primary/40 pl-3">
          {item.children.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              onClick={onClose}
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
