"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export function BreadcrumbNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (pathname === "/") return null

  const paths = pathname.split("/").filter(Boolean)

  return (
    <div className="bg-white/90 border-b border-border/50 py-1.5 sm:py-2">
      <div className="container max-w-7xl mx-auto px-3 sm:px-4 flex items-center gap-2 sm:gap-4">
        <button
          onClick={() => router.back()}
          className="p-1.5 hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
        </button>
        <nav className="flex items-center text-xs sm:text-sm text-muted-foreground space-x-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join("/")}`
            const isLast = index === paths.length - 1
            const title = path.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

            return (
              <div key={path} className="flex items-center space-x-1">
                <ChevronRight className="w-4 h-4" />
                {isLast ? (
                  <span className="text-foreground font-medium">{title}</span>
                ) : (
                  <Link href={href} className="hover:text-primary transition-colors">
                    {title}
                  </Link>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
