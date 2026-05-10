import React from "react";

const Accreditation = () => {
  const AccreditationIcon = ({
    name,
    image,
  }: {
    name: string;
    image: string;
  }) => (
    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-card flex items-center justify-center overflow-hidden">
      <img
        src={`/accredations/${image}`}
        alt={name}
        className="max-h-[80%] max-w-[80%] object-contain"
      />
    </div>
  );

  const accredations = [
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
      name: "FMHACA-ETHIOPIA",
      fullName:
        "Food, Medicine and Health Care Administration and Control Authority - Ethiopia",
      image: "fmhca.png",
    },
    {
      name: "TFDA-TANZANIA",
      fullName: "Tanzania Food and Drugs Authority",
      image: "tfda.png",
    },
    {
      name: "NAFDAC-NIGERIA",
      fullName:
        "National Agency for Food and Drug Administration and Control - Nigeria",
      image: "nafdac.png",
    },
    {
      name: "NDA-UGANDA",
      fullName: "National Drug Authority - Uganda",
      image: "nda-uganda.png",
    },
    {
      name: "DAV-VIETNAM",
      fullName: "Drug Administration of Vietnam",
      image: "dav-vietnam.png",
    },
    {
      name: "FDA-PHILIPPINES",
      fullName: "Food and Drug Administration - Philippines",
      image: "fda-phillepines.png",
    },
    {
      name: "DIGEMID-PERU",
      fullName: "Dirección General de Medicamentos, Insumos y Drogas - Peru",
      image: "digemid-peru.png",
    },
    {
      name: "FDA-GHANA",
      fullName: "Food and Drugs Authority - Ghana",
      image: "fda-ghana.png",
    },
    {
      name: "PPB-KENYA",
      fullName: "Pharmacy and Poisons Board - Kenya",
      image: "ppbkenya.png",
    },
    {
      name: "FDA-RWANDA",
      fullName: "Rwanda Food and Drugs Authority",
      image: "fdarwanda.png",
    },
    {
      name: "ACOREP-DR CONGO",
      fullName:
        "Autorité Congolaise de Réglementation Pharmaceutique - DR Congo",
      image: "acorep.png",
    },
    {
      name: "MOH-CAMBODIA",
      fullName: "Ministry of Health - Cambodia",
      image: "moh.png",
    },
    {
      name: "SBDMA-YEMEN",
      fullName: "Supreme Board of Drugs and Medical Appliances - Yemen",
      image: "sbdma.png",
    },
    {
      name: "IRAQ",
      fullName: "Iraqi Ministry of Health",
      image: "iraq.png",
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-primary text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
              Accreditations
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mx-auto max-w-5xl">
              Here is our assurance of quality and trust. Each accreditation
              reflects our commitment to exceeding industry standards in safety,
              compliance, and patient care. Recognized by leading regulatory
              bodies, we continuously strive to deliver pharmaceutical
              excellence.
            </p>
          </div>

          {/* Grid with 3 items per row on phones */}
          <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 md:gap-8 items-start max-w-7xl m-auto">
            {accredations.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                  <AccreditationIcon name={cert.name} image={cert.image} />
                </div>
                <p className="font-medium text-xs sm:text-sm text-foreground">
                  {cert.name}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 line-clamp-2 sm:line-clamp-none">
                  {cert.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accreditation;
