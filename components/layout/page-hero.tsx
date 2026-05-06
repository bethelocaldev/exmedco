"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  /** Main page heading */
  title?: string
  /** Word(s) in title to render in primary color — matched from the end */
  highlightedWord?: string
  /** Subtitle / description shown below the title */
  subtitle?: string
  /** Extra small line below the subtitle (e.g. "Last updated: May 2026") */
  meta?: string
  className?: string
}

/**
 * Full-width dark hero section that also renders a breadcrumb trail.
 * Replaces the ad-hoc `<section className="pt-32 pb-20 bg-secondary ...">` blocks.
 */
export function PageHero({
  title,
  highlightedWord,
  subtitle,
  meta,
  className,
}: PageHeroProps) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  // Build breadcrumb items
  const crumbs = [
    { label: "Home", href: "/" },
    ...segments.map((seg, i) => ({
      label: seg.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      href: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ]

  // Split title around the highlighted word for inline coloring
  const renderTitle = () => {
    if (!title) return null
    if (!highlightedWord) return <>{title}</>
    const idx = title.toLowerCase().lastIndexOf(highlightedWord.toLowerCase())
    if (idx === -1) return <>{title}</>
    const before = title.slice(0, idx)
    const matched = title.slice(idx, idx + highlightedWord.length)
    const after = title.slice(idx + highlightedWord.length)
    return (
      <>
        {before}
        <span className="text-primary">{matched}</span>
        {after}
      </>
    )
  }

  return (
    <section
      className={cn(
        "bg-secondary text-secondary-foreground pt-10 pb-12",
        !title && "pb-6",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {/* Breadcrumb trail */}
        <nav className={cn("flex items-center gap-1 text-sm text-white/50 flex-wrap", title && "mb-8")}>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1
            return (
              <span key={crumb.href} className="flex items-center gap-1">
                {i === 0 ? (
                  <Home className="h-3.5 w-3.5" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-white/30" />
                )}
                {isLast ? (
                  <span className="text-white/90 font-medium">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            )
          })}
        </nav>

        {/* Title Section */}
        {title && (
          <>
            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              {renderTitle()}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-white/75 text-lg max-w-2xl leading-relaxed mt-2">
                {subtitle}
              </p>
            )}

            {/* Meta line (e.g. last updated date) */}
            {meta && (
              <p className="text-white/50 text-sm mt-3">{meta}</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
