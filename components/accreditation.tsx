const accreditations = [
  {
    name: "WHO-GMP",
    fullName: "World Health Organization - Good Manufacturing Practice",
    image: "who-gmp.png",
  },
  {
    name: "ECPhA",
    fullName: "European Council for Pharmacy Education Accreditation",
    image: "ecpha.png",
  },
  {
    name: "FMHACA Ethiopia",
    fullName: "Food, Medicine and Health Care Administration and Control Authority",
    image: "fmhca.png",
  },
  {
    name: "TFDA Tanzania",
    fullName: "Tanzania Food and Drugs Authority",
    image: "tfda.png",
  },
  {
    name: "NAFDAC Nigeria",
    fullName: "National Agency for Food and Drug Administration and Control",
    image: "nafdac.png",
  },
  {
    name: "NDA Uganda",
    fullName: "National Drug Authority",
    image: "nda-uganda.png",
  },
  {
    name: "DAV Vietnam",
    fullName: "Drug Administration of Vietnam",
    image: "dav-vietnam.png",
  },
  {
    name: "FDA Philippines",
    fullName: "Food and Drug Administration",
    image: "fda-phillepines.png",
  },
  {
    name: "DIGEMID Peru",
    fullName: "General Directorate of Medicines, Supplies and Drugs",
    image: "digemid-peru.png",
  },
  {
    name: "FDA Ghana",
    fullName: "Food and Drugs Authority",
    image: "fda-ghana.png",
  },
  {
    name: "PPB Kenya",
    fullName: "Pharmacy and Poisons Board",
    image: "ppbkenya.png",
  },
  {
    name: "FDA Rwanda",
    fullName: "Rwanda Food and Drugs Authority",
    image: "fdarwanda.png",
  },
  {
    name: "ACOREP DR Congo",
    fullName: "Congolese Pharmaceutical Regulatory Authority",
    image: "acorep.png",
  },
  {
    name: "MOH Cambodia",
    fullName: "Ministry of Health",
    image: "moh.png",
  },
  {
    name: "SBDMA Yemen",
    fullName: "Supreme Board of Drugs and Medical Appliances",
    image: "sbdma.png",
  },
  {
    name: "Iraq MOH",
    fullName: "Iraqi Ministry of Health",
    image: "iraq.png",
  },
]

export default function Accreditation() {
  return (
    <section className="border-y border-border bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Accreditations</p>
            <h2 className="section-title mt-4">Quality assurance across regulated markets</h2>
          </div>
          <p className="body-copy max-w-2xl lg:justify-self-end">
            Our accreditation footprint reflects a practical commitment to safety,
            documentation, and compliant pharmaceutical distribution across diverse
            regulatory environments.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {accreditations.map((cert) => (
            <div
              key={cert.name}
              className="group min-h-48 border-b border-r border-border bg-white p-4 transition hover:bg-secondary/70"
            >
              <div className="flex h-20 items-center justify-center">
                <img
                  src={`/accredations/${cert.image}`}
                  alt={cert.name}
                  className="max-h-16 max-w-full object-contain transition duration-200"
                />
              </div>
              <p className="mt-5 font-heading text-sm font-bold leading-5 text-foreground">
                {cert.name}
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {cert.fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
