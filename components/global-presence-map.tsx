"use client"

import Image from "next/image"
import { useCallback, useState } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { ChevronDown, MapPin, X } from "lucide-react"

const REGIONS = [
  {
    id: "asia",
    label: "Asia",
    countries: [
      { name: "Philippines", iso: "608", code: "ph" },
      { name: "Malaysia", iso: "458", code: "my" },
      { name: "Vietnam", iso: "704", code: "vn" },
      { name: "Singapore", iso: "702", code: "sg" },
      { name: "Myanmar", iso: "104", code: "mm" },
      { name: "India", iso: "356", code: "in" },
    ],
  },
  {
    id: "africa",
    label: "Africa",
    countries: [
      { name: "Kenya", iso: "404", code: "ke" },
      { name: "Tanzania", iso: "834", code: "tz" },
      { name: "Nigeria", iso: "566", code: "ng" },
      { name: "Uganda", iso: "800", code: "ug" },
      { name: "Zimbabwe", iso: "716", code: "zw" },
    ],
  },
  {
    id: "middleEast",
    label: "Middle East",
    countries: [
      { name: "Iraq", iso: "368", code: "iq" },
      { name: "Lebanon", iso: "422", code: "lb" },
      { name: "UAE", iso: "784", code: "ae" },
      { name: "Jordan", iso: "400", code: "jo" },
    ],
  },
]

const ISO_TO_REGION: Record<string, string> = {}
REGIONS.forEach((region) => {
  region.countries.forEach((country) => {
    ISO_TO_REGION[country.iso] = region.id
  })
})

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const PROJECTION_CONFIG = { rotate: [-55, -5, 0], scale: 180 }

export default function GlobalPresenceMap() {
  const [hoveredIso, setHoveredIso] = useState<string | null>(null)
  const [panelOpen, setPanelOpen] = useState(true)
  const [activeRegion, setActiveRegion] = useState<string | null>("asia")

  const getCountryFill = useCallback(
    (iso: string) => {
      const regionId = ISO_TO_REGION[iso]
      if (!regionId) return "#1e2a3a"
      if (hoveredIso === iso) return "#38bdf8"
      if (activeRegion && activeRegion !== regionId) return "#0f766e"
      return "#0ea5e9"
    },
    [hoveredIso, activeRegion]
  )

  const openRegionPanel = (regionId: string) => {
    setActiveRegion(regionId)
    setPanelOpen(true)
  }

  const closePanel = () => {
    setPanelOpen(false)
    setActiveRegion(null)
  }

  const currentRegion = REGIONS.find((region) => region.id === activeRegion)

  return (
    <section className="relative bg-[#0d1521] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl py-20">
        <div className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">
            Our Reach
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Global Presence
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Healthcare. Everywhere. Across Africa, Middle East &amp; Asia.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => openRegionPanel(region.id)}
              className={`
                inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                border transition-all duration-200 cursor-pointer
                ${activeRegion === region.id
                  ? "bg-accent border-accent text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                  : "border-white/20 text-white/70 hover:border-primary/60 hover:text-white bg-white/5"
                }
              `}
            >
              <MapPin className="w-3.5 h-3.5" />
              {region.label}
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          ))}
        </div>

        {/* ── Mobile country capsules — after region selector, before map ── */}
        {currentRegion && (
          <div className="block lg:hidden mb-5">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
              Countries in {currentRegion.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentRegion.countries.map((country) => (
                <span
                  key={country.iso}
                  className="inline-flex items-center gap-1.5 bg-white/5 border border-white/15 hover:border-primary/50 hover:bg-primary/10 rounded-full px-3 py-1.5 transition-all duration-200"
                >
                  <Image
                    src={`https://flagcdn.com/${country.code}.svg`}
                    alt={country.name}
                    width={20}
                    height={15}
                    className="h-3.5 w-5 rounded-sm object-cover flex-shrink-0"
                  />
                  <span className="text-white text-xs font-medium">{country.name}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="relative flex flex-col lg:flex-row gap-6 items-start">
          <div
            className={`
              relative w-full rounded-2xl overflow-hidden border border-white/10
              bg-[#111d2c] transition-all duration-500
              ${panelOpen ? "lg:w-[65%]" : "lg:w-full"}
            `}
            style={{ minHeight: 380 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a27] via-[#111d2c] to-[#0d1521]" />

            <ComposableMap
              projection="geoNaturalEarth1"
              projectionConfig={PROJECTION_CONFIG}
              className="relative z-10 w-full"
              style={{ height: "100%", minHeight: 380 }}
            >
              <ZoomableGroup zoom={1} minZoom={0.8} maxZoom={4}>
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const geoId = String(geo.id)
                      const isPresence = !!ISO_TO_REGION[geoId]
                      const fill = getCountryFill(geoId)

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={fill}
                          stroke={isPresence ? "#bae6fd" : "#1e3048"}
                          strokeWidth={isPresence ? 0.8 : 0.3}
                          style={{
                            default: { outline: "none", cursor: isPresence ? "pointer" : "default" },
                            hover: { outline: "none" },
                            pressed: { outline: "none" },
                          }}
                          onMouseEnter={() => isPresence && setHoveredIso(geoId)}
                          onMouseLeave={() => setHoveredIso(null)}
                          onClick={() => {
                            if (isPresence) openRegionPanel(ISO_TO_REGION[geoId])
                          }}
                        />
                      )
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>

            <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-white/70 text-xs">FHY Presence</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
                <span className="w-3 h-3 rounded-full bg-[#1e2a3a]" />
                <span className="text-white/70 text-xs">Other</span>
              </div>
            </div>

            {hoveredIso && ISO_TO_REGION[hoveredIso] && (() => {
              const region = REGIONS.find((item) => item.id === ISO_TO_REGION[String(hoveredIso)])
              const country = region?.countries.find((item) => item.iso === String(hoveredIso))

              if (!country) return null

              return (
                <div className="absolute top-4 right-4 z-20 min-w-[220px] bg-black/75 backdrop-blur-sm border border-primary/40 rounded-xl px-4 py-3 pointer-events-none shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://flagcdn.com/${country.code}.svg`}
                      alt={country.name}
                      width={40}
                      height={30}
                      className="h-7 w-10 rounded-sm object-cover shadow-sm"
                    />
                    <div className="min-w-0">
                      <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-0.5">
                        {region?.label}
                      </p>
                      <p className="text-white text-sm font-bold truncate">{country.name}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-2">
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white">
                      <Image
                        src="/assets/short-logo.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </span>
                    <span className="text-white/70 text-xs font-medium">FHY presence market</span>
                  </div>
                </div>
              )
            })()}
          </div>

          <div
            className={`
              hidden lg:block
              lg:sticky lg:top-24
              w-full overflow-hidden rounded-2xl border border-white/10
              bg-[#111d2c]/90 backdrop-blur-sm
              transition-all duration-500 ease-in-out
              ${panelOpen
                ? "opacity-100 translate-x-0 max-h-[800px] lg:w-[35%]"
                : "opacity-0 lg:translate-x-4 max-h-0 lg:max-h-[800px] lg:w-0 pointer-events-none"
              }
            `}
          >
            {currentRegion && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">
                      Our Presence
                    </p>
                    <h3 className="text-white text-2xl font-serif font-bold">
                      {currentRegion.label}
                    </h3>
                  </div>
                  <button
                    onClick={closePanel}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/70 hover:text-white"
                    aria-label="Close region panel"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <ul className="space-y-2 mb-8">
                  {currentRegion.countries.map((country, index) => (
                    <li
                      key={country.iso}
                      className="flex items-center gap-3 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/40 rounded-xl px-4 py-3 transition-all duration-200 group"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <span className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors overflow-hidden">
                        <Image
                          src={`https://flagcdn.com/${country.code}.svg`}
                          alt={country.name}
                          width={28}
                          height={21}
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span className="text-white font-medium">{country.name}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                    Other Regions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {REGIONS.filter((region) => region.id !== currentRegion.id).map((region) => (
                      <button
                        key={region.id}
                        onClick={() => setActiveRegion(region.id)}
                        className="px-4 py-1.5 rounded-full border border-white/20 text-white/60 hover:border-primary/60 hover:text-white text-sm transition-all duration-200"
                      >
                        {region.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <p className="text-white/40 text-sm">Countries in region</p>
                  <span className="bg-primary/20 border border-primary/40 text-primary font-bold text-lg px-4 py-1 rounded-full">
                    {currentRegion.countries.length}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => openRegionPanel(region.id)}
              className={`
                rounded-xl border p-3 sm:p-5 text-left transition-all duration-200 group cursor-pointer
                ${activeRegion === region.id
                  ? "bg-primary/15 border-primary/60"
                  : "bg-white/5 border-white/10 hover:border-primary/40 hover:bg-primary/10"
                }
              `}
            >
              <p className="text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1 leading-tight">
                {region.label}
              </p>
              <p className="text-white font-serif text-xl sm:text-2xl font-bold mb-1">
                {region.countries.length}
              </p>
              <p className="hidden sm:block text-white/50 text-xs">
                {region.countries.map((country) => country.name).join(" / ")}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
