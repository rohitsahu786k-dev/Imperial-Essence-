export interface CategoryItem {
  id: string;
  name: { en: string; es: string; ar?: string };
  description: { en: string; es: string; ar?: string };
  image: string;
  badge: { en: string; es: string; ar?: string };
}

export interface ServiceItem {
  id: string;
  title: { en: string; es: string; ar?: string };
  shortDesc: { en: string; es: string; ar?: string };
  fullDesc: { en: string; es: string; ar?: string };
  iconName: string;
}

export const siteData = {
  company: {
    name: "IMPERIAL ESSENCE TRADING LLC",
    shortName: "Imperial Essence",
    license: "Dubai Commercial License - Bay Square, Business Bay",
    tagline: {
      en: "YOUR GLOBAL PARTNER IN LUXURY & PREMIUM PRODUCTS",
      es: "TU SOCIO GLOBAL EN PRODUCTOS DE LUJO Y DE PRIMERA CALIDAD",
      ar: "شركائكم العالمي في المنتجات الفاخرة والمتميزة"
    },
    subTagline: {
      en: "A Dubai-based wholesale and distribution gateway specializing in luxury perfumery, niche cosmetics, fashion, textiles, travel sets, accessories, and jewelry. Drawing on over 40 years of family legacy in global duty-free travel retail.",
      es: "Una plataforma de venta al por mayor y distribución con sede en Dubái, especializada en perfumería de lujo, cosmética de nicho, moda, textiles, juegos de viaje, accesorios y joyería. Respaldada por más de 40 años de legado familiar.",
      ar: "شركة مقرها دبي متخصصة في الجملة والتوزيع للتجميل والعطور الفاخرة والمنسوجات والإكسسوارات والمجوهرات ومجموعات السفر."
    },
    location: {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "203, Building No. 11, Bay Square, Business Bay, P.O. Box: 112396, Dubai, UAE",
      badge: {
        en: "DUBAI, UNITED ARAB EMIRATES – Global Headquarters",
        es: "DUBÁI, EMIRATOS ÁRABES UNIDOS – Sede Central",
        ar: "دبي، الإمارات العربية المتحدة"
      }
    },
    contact: {
      phone: "+971 4 552 1257",
      mobile: "+971 50 501 0056",
      whatsapp: "+971 50 501 0056",
      whatsappText: "24/7 Available",
      email: "office@theimperialessence.com",
      website: "www.theimperialessence.com",
      hours: {
        en: "Office hours: Monday – Friday, 9:00 AM – 5:00 PM (GST). WhatsApp support available 24/7.",
        es: "Horario de oficina: Lunes – Viernes, 9:00 – 17:00 (GST). Soporte por WhatsApp 24/7.",
        ar: "ساعات العمل: الاثنين – الجمعة، 9:00 صباحًا – 5:00 مساءً. دعم الواتساب متوفر 24/7."
      }
    },
    highlights: {
      yearsExperience: "40+",
      countriesServed: "Global Markets",
      brandGroups: ["LVMH", "PUIG", "L’Oréal Luxe", "COTY", "Niche Fragrance Houses"]
    }
  },

  about: {
    overview: {
      en: "Imperial Essence Trading LLC is a Dubai-based wholesale and distribution company specializing in luxury perfumery, premium cosmetics, skincare, and niche fragrances, alongside fashion, textiles, travel sets, accessories, and jewelry. We work with leading international retail groups and long-standing commercial partners across wholesale and duty free channels in the Middle East, Europe, Africa, the United States, South America, and Australia.",
      es: "Imperial Essence Trading LLC es una empresa de distribución y venta al por mayor con sede en Dubái, especializada en perfumería de lujo, cosmética de primera calidad, cuidado de la piel y fragancias de nicho, así como moda, textiles, juegos de viaje, accesorios y joyería. Trabajamos con grupos minoristas internacionales líderes y socios comerciales en Oriente Medio, Europa, África y EE. UU."
    },
    story: {
      title: { en: "Company Legacy & Our Founders", es: "Legado de la Empresa y Nuestros Fundadores" },
      p1: {
        en: "Imperial Essence Trading LLC draws on over 40 years of family legacy in the travel retail, luxury perfumes, and cosmetics industry, built on extensive wholesale and retail experience across multiple international markets.",
        es: "Imperial Essence Trading LLC se basa en más de 40 años de legado familiar en travel retail, perfumes de lujo y cosmética, construida sobre una amplia experiencia en múltiples mercados internacionales."
      },
      siddharth: {
        name: "Siddharth Thakker",
        role: { en: "Co-Founder & Managing Director", es: "Cofundador y Director General" },
        bio: {
          en: "Siddharth Thakker, born and raised in Dubai, grew up immersed in the family business, gaining early exposure to supplier relationships, market instinct, business strategy, and the discipline needed to move goods across borders.",
          es: "Siddharth Thakker, nacido y criado en Dubái, creció inmerso en el negocio familiar de distribución al por mayor, adquiriendo experiencia temprana en relaciones con proveedores, estrategia de mercado y disciplina comercial."
        }
      },
      sakina: {
        name: "Sakina Idmouhine",
        role: { en: "Co-Founder & Managing Director", es: "Cofundadora y Directora General" },
        bio: {
          en: "Sakina Idmouhine, originally from Spain, built her career in the perfumery and luxury cosmetics industry over 15+ years, mastering brand relationships, market insight, business strategy, and the discipline needed to move goods across borders.",
          es: "Sakina Idmouhine, originaria de España, desarrolló su carrera en la industria de la perfumería y cosmética de lujo durante más de 15 años, dominando las relaciones con las marcas y las expectativas de minoristas internacionales."
        }
      },
      together: {
        en: "When their paths crossed, they recognized a shared passion for the industry and a commitment to doing business the right way — with reliability, transparency, and long-term relationships. Together, they founded Imperial Essence Trading LLC.",
        es: "Cuando sus caminos se cruzaron, reconocieron una pasión compartida por la industria y la convicción de hacer negocios con fiabilidad, transparencia y compromiso a largo plazo. Juntos fundaron Imperial Essence Trading LLC."
      },
      familySpirit: {
        en: "More than business partners, Sakina and Siddharth work together like family, sharing the same drive, values, and ambition to keep growing.",
        es: "Más que socios comerciales, Sakina y Siddharth trabajan juntos como una familia, compartiendo el mismo impulso, valores y ambición. Ese espíritu define a Imperial Essence Trading hoy en día."
      }
    },

    missionVision: {
      mission: {
        title: { en: "Our Mission", es: "Nuestra Misión" },
        desc: {
          en: "To build a strong, recognized presence in the luxury perfumery and beauty industry. To be the partner of choice for clients and suppliers by delivering quality, opening new markets, becoming official distributors for leading brands, strengthening our Duty Free presence, and growing our global network through direct European sourcing and reliable distribution.",
          es: "Construir una presencia destacada en la industria de perfumería y belleza de lujo, siendo un socio confiable a largo plazo para clientes y proveedores, expandiendo marcas oficiales y canales duty-free mediante abastecimiento europeo directo."
        }
      },
      vision: {
        title: { en: "Our Vision", es: "Nuestra Visión" },
        desc: {
          en: "To stand as a premier global gateway connecting luxury brand houses with international markets, travel retail operators, and specialized retail groups through uncompromised quality, sourcing flexibility, and transparent commercial partnerships.",
          es: "Ser la puerta de entrada global preferida que conecta firmas de lujo con mercados internacionales, operadores duty-free y grupos minoristas a través de una calidad sin concesiones y flexibilidad de suministro."
        }
      }
    },

    coreValues: [
      {
        title: { en: "Reliability & Long-term Partnership", es: "Fiabilidad y Alianza a Largo Plazo" },
        desc: { en: "Consistent, dependable supply and transparent collaboration built to endure.", es: "Suministro constante y fiable con colaboración transparente orientada a perdurar." }
      },
      {
        title: { en: "Product Authenticity & Quality", es: "Autenticidad y Calidad del Producto" },
        desc: { en: "Strict quality assurance and genuine product sourcing across all categories.", es: "Garantía estricta de calidad y abastecimiento genuino en todas las categorías." }
      },
      {
        title: { en: "Flexibility across T1 & T2 Supply Sources", es: "Flexibilidad en Fuentes T1 y T2" },
        desc: { en: "Direct European clean T2 sourcing alongside flexible non-European T1 supply options.", es: "Abastecimiento europeo directo T2 y opciones flexibles de mercancía T1." }
      },
      {
        title: { en: "Family Heritage & Industry Expertise", es: "Herencia Familiar y Experiencia" },
        desc: { en: "Over 40 years of family legacy, market intuition, and travel retail expertise.", es: "Más de 40 años de legado familiar, intuición de mercado y experiencia en travel retail." }
      }
    ]
  },

  sourcingModel: {
    title: { en: "Direct European Sourcing & Supply Flexibility", es: "Abastecimiento Europeo Directo y Flexibilidad" },
    subtitle: { en: "T1 & T2 Supply Network", es: "Red de Suministro T1 y T2" },
    desc: {
      en: "Direct sourcing from Europe allows us to provide both European clean T2 products and non-European T1 merchandise, giving our commercial partners consistent availability and flexible supply options tailored to their market requirements.",
      es: "El abastecimiento directo desde Europa nos permite ofrecer tanto productos T2 limpios europeos como mercancía T1 no europea, brindando disponibilidad constante y opciones adaptadas a cada mercado."
    },
    features: [
      {
        title: { en: "Clean European T2 Merchandise", es: "Mercancía T2 Europea Limpia" },
        desc: { en: "Direct European sourcing ensuring pristine origin, compliance, and full market traceability.", es: "Abastecimiento europeo directo que garantiza origen impecable y trazabilidad." }
      },
      {
        title: { en: "Flexible T1 Supply Options", es: "Opciones de Suministro T1 Flexibles" },
        desc: { en: "Non-European T1 merchandise structured for duty-free zones and specialized global trade routes.", es: "Mercancía T1 estructurada para zonas francas y rutas comerciales globales." }
      },
      {
        title: { en: "Brand Respect & Integrity", es: "Integridad y Respeto a las Marcas" },
        desc: { en: "Full commercial discretion respecting brand guidelines, trademarks, and territory agreements.", es: "Discreción comercial absoluta respetando las directrices y marcas registradas." }
      }
    ]
  },

  categories: [
    {
      id: "perfumes-fragrances",
      name: { en: "Perfumes & Fragrances", es: "Perfumes y Fragancias", ar: "العطور والعبق" },
      description: {
        en: "Prestige luxury perfumery collections from leading international fashion houses and beauty conglomerates.",
        es: "Colecciones de perfumería de lujo de las principales casas de moda y conglomerados de belleza."
      },
      image: "/images/brand-free-images/04-black-gold-perfume-bottles-water-splash.webp",
      badge: { en: "Prestige Fragrances", es: "Fragancias Prestige" }
    },
    {
      id: "niche-fragrances",
      name: { en: "Niche Fragrances", es: "Fragancias de Nicho", ar: "عطور النيش الفاخرة" },
      description: {
        en: "Exclusive artisanal perfume creations and rare olfactory formulations for luxury boutiques and connoisseurs.",
        es: "Creaciones de perfumes artesanales exclusivos y formulaciones olfativas raras para boutiques de lujo."
      },
      image: "/images/brand-free-images/02-gold-crowned-luxury-perfume-bottle.webp",
      badge: { en: "Artisanal & Niche", es: "Artesanal y Nicho" }
    },
    {
      id: "cosmetics-skincare",
      name: { en: "Luxury Cosmetics & Skincare", es: "Cosmética de Lujo y Cuidado de la Piel", ar: "مستحضرات التجميل والعناية بالبشرة" },
      description: {
        en: "High-performance cosmetics, dermatological treatments, luxury beauty palettes, and prestige skincare lines.",
        es: "Cosmética de color de alto rendimiento, paletas de belleza de lujo y tratamientos dermatológicos."
      },
      image: "/images/brand-free-images/10-amber-glow-beauty-skincare-collection.webp",
      badge: { en: "Prestige Beauty", es: "Belleza Prestige" }
    },
    {
      id: "fashion-textiles",
      name: { en: "Fashion & Textiles", es: "Moda y Textiles", ar: "الأزياء والمنسوجات" },
      description: {
        en: "Fine silk creations, luxury apparel accessories, and high-end designer textiles.",
        es: "Creaciones en seda fina, accesorios de vestir de lujo y textiles de diseño de alta gama."
      },
      image: "/images/brand-free-images/30-white-tweed-runway-fashion-look.webp",
      badge: { en: "Designer Apparel", es: "Textiles de Diseño" }
    },
    {
      id: "travel-sets",
      name: { en: "Travel Sets", es: "Juegos de Viaje", ar: "مجموعات السفر" },
      description: {
        en: "Curated travel retail exclusives, fragrance gift sets, and luxury travel miniatures.",
        es: "Exclusivos de travel retail seleccionados, estuches de regalo y miniaturas de lujo."
      },
      image: "/images/brand-free-images/28-luxury-duty-free-shopping-corridor.webp",
      badge: { en: "Duty Free Exclusives", es: "Exclusivos Duty Free" }
    },
    {
      id: "jewelry",
      name: { en: "Jewelry", es: "Joyería", ar: "المجوهرات" },
      description: {
        en: "Fine jewelry pieces, luxury watchmaking statements, and precious crafted accents.",
        es: "Piezas de joyería fina, alta relojería de lujo y detalles artesanales valiosos."
      },
      image: "/images/brand-free-images/44-emerald-sapphire-diamond-necklace-portrait.webp",
      badge: { en: "Fine Craftsmanship", es: "Alta Artesanía" }
    },
    {
      id: "accessories",
      name: { en: "Accessories", es: "Accesorios", ar: "الإكسسوارات" },
      description: {
        en: "Luxury leather goods, designer lifestyle accents, and refined travel accessories.",
        es: "Marroquinería de lujo, accesorios de diseño y artículos de viaje refinados."
      },
      image: "/images/brand-free-images/26-luxury-handbag-boutique-display.webp",
      badge: { en: "Luxury Lifestyle", es: "Estilo de Vida de Lujo" }
    }
  ],

  services: [
    {
      id: "global-wholesale-distribution",
      title: { en: "Global Wholesale & Distribution", es: "Venta al por Mayor y Distribución Global" },
      shortDesc: {
        en: "Supplying luxury perfumery and beauty to commercial partners across Middle East, Europe, Africa, USA, South America, and Australia.",
        es: "Suministro de perfumería de lujo y belleza a socios comerciales en Oriente Medio, Europa, África y EE. UU."
      },
      fullDesc: {
        en: "We supply luxury perfumery, cosmetics, and related lifestyle categories to retail groups and commercial partners across the Middle East, Europe, Africa, the United States, South America, and Australia, through wholesale, official distribution, and duty free channels.",
        es: "Suministramos perfumería y cosmética de lujo a grupos minoristas y socios en Oriente Medio, Europa, África y Estados Unidos a través de canales mayoristas y duty free."
      },
      iconName: "Globe"
    },
    {
      id: "logistics-management",
      title: { en: "Logistics & Global Supply Solutions", es: "Gestión de Logística y Soluciones Globales" },
      shortDesc: {
        en: "Comprehensive road, sea, and air freight coordination across international trade corridors.",
        es: "Coordinación integral de fletes por carretera, mar y aire en corredores comerciales internacionales."
      },
      fullDesc: {
        en: "We have many years of experience in logistics and transportation via road, sea, and air worldwide. We work closely with trusted forwarders and have a wide network of logistics partners, allowing us to offer efficient, cost-effective and secure solutions tailored to each client's needs.",
        es: "Contamos con años de experiencia en logística y transporte internacional terrestre, marítimo y aéreo. Trabajamos estrechamente con transitarios consolidados para facilitar envíos ágiles."
      },
      iconName: "Truck"
    },
    {
      id: "direct-european-sourcing",
      title: { en: "Direct European Sourcing", es: "Abastecimiento Europeo Directo" },
      shortDesc: {
        en: "Providing European clean T2 products and non-European T1 merchandise for flexible supply.",
        es: "Ofreciendo productos T2 limpios europeos y mercancía T1 no europea para un suministro flexible."
      },
      fullDesc: {
        en: "Direct sourcing from Europe allows us to provide both European clean T2 products and non-European T1 merchandise, giving partners consistent availability and flexible supply options tailored to their market requirements.",
        es: "El abastecimiento directo desde Europa nos permite proporcionar productos T2 limpios europeos y mercancía T1 no europea, garantizando disponibilidad y flexibilidad."
      },
      iconName: "Building2"
    },
    {
      id: "duty-free-travel-retail",
      title: { en: "Duty Free & Travel Retail Supply", es: "Suministro Duty Free y Travel Retail" },
      shortDesc: {
        en: "40+ years of family expertise supplying travel retail operators and international airport channels.",
        es: "Más de 40 años de experiencia familiar abasteciendo a operadores de travel retail y aeropuertos."
      },
      fullDesc: {
        en: "Extensive experience supplying the travel retail and duty free channel, built on more than 40 years of family expertise in this specialized global sector.",
        es: "Amplia experiencia en el suministro al canal duty free y travel retail, respaldada por más de 40 años de trayectoria familiar."
      },
      iconName: "TrendingUp"
    }
  ],

  logistics: {
    modes: [
      { name: { en: "Road Freight", es: "Carga Terrestre", ar: "الشحن البري" }, icon: "Truck", desc: { en: "Pan-European & Middle East road corridors", es: "Corredores terrestres Paneuropeos y Oriente Medio" } },
      { name: { en: "Sea Freight", es: "Carga Marítima", ar: "الشحن البحري" }, icon: "Ship", desc: { en: "Full Container & LCL global sea freight", es: "Fletes marítimos en contenedor completo y consolidado" } },
      { name: { en: "Air Freight", es: "Carga Aérea", ar: "الشحن الجوي" }, icon: "Plane", desc: { en: "Priority express air freight shipments", es: "Envíos expresos prioritarios por vía aérea" } },
      { name: { en: "Global Hub Network", es: "Red de Centros Globales", ar: "الشبكة العالمية" }, icon: "Network", desc: { en: "Dubai Bay Square HQ and European supply hubs", es: "Sede en Dubái Bay Square y centros de suministro en Europa" } }
    ],
    targetMarkets: ["Middle East", "Europe", "Africa", "United States"]
  },

  whyChooseUs: [
    { en: "Reliability & Long-term Partnership with consistent, dependable supply", es: "Fiabilidad y Alianza a Largo Plazo con suministro constante y seguro" },
    { en: "Product Authenticity & Quality guaranteed across all luxury product lines", es: "Autenticidad y Calidad del Producto garantizadas en todas las líneas" },
    { en: "Flexibility across T1 & T2 Supply Sources directly from Europe", es: "Flexibilidad en fuentes de suministro T1 y T2 directamente desde Europa" },
    { en: "Over 40 years of family heritage and deep travel retail expertise", es: "Más de 40 años de herencia familiar y profunda experiencia en travel retail" },
    { en: "Dubai Bay Square HQ providing a strategic global gateway for trade", es: "Sede central en Dubái Bay Square que ofrece una puerta de entrada global estratégica" }
  ]
};
