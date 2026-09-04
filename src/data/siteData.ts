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
    license: "Dubai Commercial License - Bay Square",
    tagline: {
      en: "LUXURY PERFUMERY, BEAUTY & DUTY FREE DISTRIBUTION",
      es: "PERFUMERÍA DE LUJO, BELLEZA Y DISTRIBUCIÓN DUTY FREE",
    },
    subTagline: {
      en: "A Dubai-based wholesale and distribution gateway drawing on over 40 years of family legacy in luxury perfumery, niche cosmetics, and global duty-free travel retail.",
      es: "Una plataforma de venta al por mayor y distribución con sede en Dubái, respaldada por más de 40 años de legado familiar en perfumería de lujo y travel retail.",
    },
    location: {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "203, Building No. 11, Bay Square, Business Bay, P.O. Box: 112396, Dubai, UAE",
      badge: {
        en: "DUBAI, UAE — Global Headquarters & Luxury Trade Hub",
        es: "DUBÁI, EAU — Sede Global y Centro Comercial de Lujo",
      }
    },
    contact: {
      phone: "+971 4 552 1257",
      mobile: "+971 56 393 0666",
      whatsapp: "+971 56 393 0666",
      whatsappMain: "+971 56 393 0666",
      whatsappText: "24/7 Available",
      email: "office@theimperialessence.com",
      website: "www.theimperialessence.com",
      hours: {
        en: "Office hours: Monday – Friday, 9:00 AM – 5:00 PM (GST). WhatsApp support available 24/7.",
        es: "Horario de oficina: Lunes – Viernes, 9:00 AM – 5:00 PM (GST). Atención por WhatsApp 24/7."
      }
    },
    founders: [
      {
        name: "Siddharth Thakker",
        role: "Co-Founder & Business Strategy Partner",
        origin: "Born & Raised in Dubai",
        bio: "Grew up immersed in his family's wholesale and distribution business in Dubai, gaining early exposure to supplier relationships, market instinct, business strategy, and the discipline needed to move goods reliably across international borders.",
        image: "/images/brand-free-images/48-watch-collection-marble-desk-workspace.webp"
      },
      {
        name: "Sakina Idmouhine",
        role: "Co-Founder & Brand Relations Partner",
        origin: "Spain",
        bio: "Built her career within the perfumery and luxury cosmetics industry over more than 15 years, mastering brand relationships and expectations of international retailers and distributors while traveling worldwide to open new markets and foster trust.",
        image: "/images/brand-free-images/17-pink-gold-quilted-makeup-compact.webp"
      }
    ],
    mission: {
      en: "To build a strong, recognized presence within the luxury perfumery and beauty industry, so that potential clients and suppliers clearly understand who we are, what we offer, and why we are a reliable long-term partner. We aim to open new markets, expand our portfolio as an official distributor, and strengthen our presence in duty-free channels through direct European sourcing.",
      es: "Construir una presencia sólida y reconocida en la industria de la perfumería y belleza de lujo, para que clientes y proveedores comprendan nuestra fiabilidad a largo plazo, abastecimiento europeo directo y distribución global."
    },
    vision: {
      en: "To become the premier luxury wholesale and official distribution bridge connecting Europe, the Middle East, Africa, and the Americas across duty-free, retail, and travel channels.",
      es: "Convertirnos en el puente principal de distribución oficial y venta al por mayor de lujo que conecta Europa, Oriente Medio, África y las Américas."
    },
    coreValues: [
      { title: { en: "Reliability & Partnership", es: "Fiabilidad y Alianza" }, desc: { en: "Long-term, transparent relationships with clients and suppliers.", es: "Relaciones transparentes a largo plazo con clientes y proveedores." } },
      { title: { en: "Product Authenticity", es: "Autenticidad de Producto" }, desc: { en: "100% genuine luxury merchandise directly sourced from authorized supply lines.", es: "Mercancía de lujo 100% auténtica abastecida de líneas autorizadas." } },
      { title: { en: "T1 & T2 Supply Flexibility", es: "Flexibilidad T1 y T2" }, desc: { en: "European clean T2 and non-European T1 merchandise tailored to partner market needs.", es: "Mercancía T2 limpia europea y T1 adaptada a las necesidades del mercado." } },
      { title: { en: "Family Heritage", es: "Herencia Familiar" }, desc: { en: "Built on 40+ years of family legacy and deep travel retail domain expertise.", es: "Respaldada por más de 40 años de legado familiar y experiencia en travel retail." } }
    ]
  },

  heroBanners: {
    desktop: [
      {
        image: "/images/imperial-essence-trading-llc/desktop/imperial-essence-dubai-luxury-products-banner-desktop-01.png",
        title: { en: "Global Luxury Distribution Hub", es: "Centro Global de Distribución de Lujo" },
        subtitle: { en: "Connecting Europe, Middle East & Worldwide Duty Free", es: "Conectando Europa, Oriente Medio y Duty Free Global" },
        tag: "Dubai Headquarters | Bay Square"
      },
      {
        image: "/images/imperial-essence-trading-llc/desktop/imperial-essence-luxury-distribution-banner-desktop-03.png",
        title: { en: "Direct European Sourcing", es: "Abastecimiento Europeo Directo" },
        subtitle: { en: "Flexible T1 & T2 Supply Model for Luxury Brands", es: "Modelo Flexible T1 y T2 para Marcas de Lujo" },
        tag: "European Clean T2 & T1 Merchandise"
      },
      {
        image: "/images/imperial-essence-trading-llc/desktop/imperial-essence-premium-wholesale-banner-desktop-02.png",
        title: { en: "40+ Years Family Legacy", es: "Más de 40 Años de Legado Familiar" },
        subtitle: { en: "Travel Retail, Wholesale & Official Brand Partnerships", es: "Travel Retail, Venta al por Mayor y Alianzas Oficiales" },
        tag: "Travel Retail & Wholesale Experts"
      }
    ],
    mobile: [
      {
        image: "/images/imperial-essence-trading-llc/mobile/imperial-essence-dubai-luxury-products-banner-mobile-01.png",
        title: { en: "Global Luxury Distribution", es: "Distribución Global de Lujo" },
        subtitle: { en: "Dubai Hub & European Sourcing", es: "Hub de Dubái y Abastecimiento Europeo" },
        tag: "Bay Square, Dubai"
      },
      {
        image: "/images/imperial-essence-trading-llc/mobile/imperial-essence-luxury-wholesale-banner-mobile-03.png",
        title: { en: "Direct European Sourcing", es: "Abastecimiento Europeo Directo" },
        subtitle: { en: "Flexible T1 & T2 Supply Model", es: "Modelo de Suministro T1 y T2 Flexible" },
        tag: "T1 & T2 Wholesale"
      },
      {
        image: "/images/imperial-essence-trading-llc/mobile/imperial-essence-premium-retail-banner-mobile-02.png",
        title: { en: "40+ Years Legacy", es: "Más de 40 Años de Legado" },
        subtitle: { en: "Travel Retail & Luxury Beauty", es: "Travel Retail y Belleza de Lujo" },
        tag: "Luxury Travel Retail"
      }
    ]
  },

  stats: [
    { value: "40+", label: { en: "Years Family Legacy", es: "Años de Legado Familiar" } },
    { value: "8", label: { en: "Luxury Categories", es: "Categorías de Lujo" } },
    { value: "3", label: { en: "Global Freight Modes (Air/Sea/Road)", es: "Modos de Carga (Aire/Mar/Tierra)" } },
    { value: "24/7", label: { en: "WhatsApp Client Support", es: "Atención al Cliente por WhatsApp" } }
  ],

  brandFreeImages: [
    { id: 1, src: "/images/brand-free-images/01-cinematic-luxury-perfume-bottle-night.webp", category: "perfumes-fragrances", title: "Cinematic Luxury Perfume" },
    { id: 2, src: "/images/brand-free-images/02-gold-crowned-luxury-perfume-bottle.webp", category: "perfumes-fragrances", title: "Gold Crowned Fragrance" },
    { id: 3, src: "/images/brand-free-images/03-ruby-red-perfume-bottle-with-blossoms.webp", category: "niche-fragrances", title: "Ruby Blossom Elixir" },
    { id: 4, src: "/images/brand-free-images/04-black-gold-perfume-bottles-water-splash.webp", category: "perfumes-fragrances", title: "Black Gold Water Splash" },
    { id: 5, src: "/images/brand-free-images/05-citrus-pineapple-luxury-perfume-display.webp", category: "niche-fragrances", title: "Citrus Pineapple Display" },
    { id: 6, src: "/images/brand-free-images/06-pastel-skincare-bottles-clean-beauty-display.webp", category: "skincare", title: "Pastel Clean Beauty" },
    { id: 7, src: "/images/brand-free-images/07-amber-skincare-dropper-serum-still-life.webp", category: "skincare", title: "Amber Serum Dropper" },
    { id: 8, src: "/images/brand-free-images/08-gold-black-perfume-bottles-dynamic-splash.webp", category: "perfumes-fragrances", title: "Dynamic Splash Fragrance" },
    { id: 9, src: "/images/brand-free-images/09-lavender-vanilla-floral-perfume-still-life.webp", category: "niche-fragrances", title: "Lavender Vanilla Floral" },
    { id: 10, src: "/images/brand-free-images/10-amber-glow-beauty-skincare-collection.webp", category: "skincare", title: "Amber Glow Skincare Collection" },
    { id: 11, src: "/images/brand-free-images/11-four-gradient-luxury-perfume-bottles.webp", category: "perfumes-fragrances", title: "Gradient Perfume Quad" },
    { id: 12, src: "/images/brand-free-images/12-mens-fashion-shearling-coat-leather-bag.webp", category: "fashion-textiles", title: "Mens Shearling & Leather" },
    { id: 13, src: "/images/brand-free-images/13-pink-perfume-white-iris-flowers.webp", category: "niche-fragrances", title: "Pink Perfume & Iris" },
    { id: 14, src: "/images/brand-free-images/14-brown-leather-chain-hobo-handbag.webp", category: "accessories", title: "Brown Leather Hobo Bag" },
    { id: 15, src: "/images/brand-free-images/15-black-street-style-luxury-handbag.webp", category: "accessories", title: "Black Street Style Handbag" },
    { id: 16, src: "/images/brand-free-images/16-mens-brown-leather-jacket-fashion-portrait.webp", category: "fashion-textiles", title: "Mens Leather Fashion" },
    { id: 17, src: "/images/brand-free-images/17-pink-gold-quilted-makeup-compact.webp", category: "cosmetics-makeup", title: "Pink Gold Makeup Compact" },
    { id: 18, src: "/images/brand-free-images/18-rose-crystal-perfume-bottle-closeup.webp", category: "niche-fragrances", title: "Rose Crystal Perfume" },
    { id: 19, src: "/images/brand-free-images/19-lavender-bloom-floral-perfume-display.webp", category: "perfumes-fragrances", title: "Lavender Bloom Display" },
    { id: 20, src: "/images/brand-free-images/20-ruffled-skirt-fashion-model-handbag.webp", category: "fashion-textiles", title: "Ruffled Skirt & Handbag" },
    { id: 21, src: "/images/brand-free-images/21-premium-black-leather-belt-silver-buckle.webp", category: "accessories", title: "Black Leather Belt" },
    { id: 22, src: "/images/brand-free-images/22-gold-rhinestone-pointed-mule-heels.webp", category: "accessories", title: "Gold Rhinestone Heels" },
    { id: 23, src: "/images/brand-free-images/23-black-crocodile-texture-top-handle-handbag.webp", category: "accessories", title: "Black Crocodile Handbag" },
    { id: 24, src: "/images/brand-free-images/24-monochrome-black-white-runway-fashion.webp", category: "fashion-textiles", title: "Monochrome Runway Look" },
    { id: 25, src: "/images/brand-free-images/25-black-quilted-handbags-floral-celebration.webp", category: "accessories", title: "Quilted Luxury Handbag" },
    { id: 26, src: "/images/brand-free-images/26-luxury-handbag-boutique-display.webp", category: "accessories", title: "Boutique Handbag Display" },
    { id: 28, src: "/images/brand-free-images/28-luxury-duty-free-shopping-corridor.webp", category: "travel-sets", title: "Duty Free Shopping Corridor" },
    { id: 29, src: "/images/brand-free-images/29-futuristic-duty-free-retail-interior.webp", category: "travel-sets", title: "Futuristic Duty Free Interior" },
    { id: 30, src: "/images/brand-free-images/30-white-tweed-runway-fashion-look.webp", category: "fashion-textiles", title: "White Tweed Runway Style" },
    { id: 32, src: "/images/brand-free-images/32-emerald-gemstone-watch-dial-macro.webp", category: "jewelry", title: "Emerald Gemstone Timepiece" },
    { id: 35, src: "/images/brand-free-images/35-mechanical-watch-movement-closeup.webp", category: "jewelry", title: "Mechanical Watchmaking" },
    { id: 37, src: "/images/brand-free-images/37-opulent-modern-jewelry-retail-hall.webp", category: "jewelry", title: "Opulent Jewelry Showroom" },
    { id: 40, src: "/images/brand-free-images/40-icy-blue-luxury-watch-on-rock.webp", category: "jewelry", title: "Icy Blue Luxury Timepiece" },
    { id: 41, src: "/images/brand-free-images/41-mediterranean-turquoise-statement-necklace.webp", category: "jewelry", title: "Turquoise Statement Necklace" },
    { id: 42, src: "/images/brand-free-images/42-sculptural-diamond-brooch-black-lapel.webp", category: "jewelry", title: "Sculptural Diamond Brooch" },
    { id: 43, src: "/images/brand-free-images/43-blue-sapphire-necklace-ring-jewelry-portrait.webp", category: "jewelry", title: "Blue Sapphire Suite" },
    { id: 44, src: "/images/brand-free-images/44-emerald-sapphire-diamond-necklace-portrait.webp", category: "jewelry", title: "Emerald & Sapphire Necklace" },
    { id: 45, src: "/images/brand-free-images/45-aquamarine-sapphire-diamond-drop-earrings.webp", category: "jewelry", title: "Aquamarine Drop Earrings" },
    { id: 46, src: "/images/brand-free-images/46-art-deco-diamond-necklace-architectural-backdrop.webp", category: "jewelry", title: "Art Deco Diamond Necklace" },
    { id: 47, src: "/images/brand-free-images/47-vintage-watchmaking-tools-flat-lay.webp", category: "jewelry", title: "Watchmaking Precision Tools" },
    { id: 48, src: "/images/brand-free-images/48-watch-collection-marble-desk-workspace.webp", category: "jewelry", title: "Marble Desk Watch Workspace" },
    { id: 49, src: "/images/brand-free-images/49-luxury-wristwatch-collection-leather-wood.webp", category: "jewelry", title: "Leather & Wood Timepiece Case" }
  ],

  categories: [
    {
      id: "perfumes-fragrances",
      name: { en: "Perfumes & Fragrances", es: "Perfumes y Fragancias" },
      description: {
        en: "Comprehensive wholesale fragrance sourcing for commercial retailers, duty-free operators, and regional distributors.",
        es: "Suministro integral de perfumería al por mayor para minoristas comerciales, operadores duty-free y distribuidores regionales."
      },
      image: "/images/brand-free-images/01-cinematic-luxury-perfume-bottle-night.webp",
      badge: { en: "Commercial Wholesale", es: "Venta Comercial" }
    },
    {
      id: "niche-fragrances",
      name: { en: "Niche Fragrances", es: "Perfumes de Nicho" },
      description: {
        en: "Selective niche fragrance portfolios for luxury concept stores, specialized boutiques, and duty-free channels.",
        es: "Portafolios de perfumería de nicho selectiva para tiendas concepto de lujo, boutiques especializadas y canales duty-free."
      },
      image: "/images/brand-free-images/03-ruby-red-perfume-bottle-with-blossoms.webp",
      badge: { en: "Selective Niche", es: "Nicho Selectivo" }
    },
    {
      id: "cosmetics-makeup",
      name: { en: "Cosmetics & Makeup", es: "Cosmética y Maquillaje" },
      description: {
        en: "High-grade beauty and makeup assortments structured for volume distribution and commercial retail portfolios.",
        es: "Surtidos de belleza y maquillaje de alta calidad estructurados para distribución por volumen y minoristas."
      },
      image: "/images/brand-free-images/17-pink-gold-quilted-makeup-compact.webp",
      badge: { en: "Luxury Makeup", es: "Maquillaje de Lujo" }
    },
    {
      id: "skincare",
      name: { en: "Skincare", es: "Cuidado de la Piel" },
      description: {
        en: "Advanced skincare, restorative serums, and ultra-premium dermatological lines direct from European hubs.",
        es: "Cuidado de la piel avanzado, sueros restauradores y líneas dermatológicas ultra-premium desde centros europeos."
      },
      image: "/images/brand-free-images/10-amber-glow-beauty-skincare-collection.webp",
      badge: { en: "Skincare Science", es: "Ciencia de la Piel" }
    },
    {
      id: "fashion-textiles",
      name: { en: "Fashion & Textiles", es: "Moda y Textiles" },
      description: {
        en: "Fine silk creations, luxury apparel accessories, and high-end designer textiles for retail extensions.",
        es: "Creaciones en seda fina, accesorios de vestir de lujo y textiles de diseño de alta gama para extensiones minoristas."
      },
      image: "/images/brand-free-images/30-white-tweed-runway-fashion-look.webp",
      badge: { en: "Designer Apparel", es: "Textiles de Diseño" }
    },
    {
      id: "travel-sets",
      name: { en: "Travel Sets", es: "Juegos de Viaje" },
      description: {
        en: "Curated travel retail exclusives, fragrance gift sets, and luxury travel miniatures for airport and duty-free channels.",
        es: "Exclusivos de travel retail seleccionados, estuches de regalo y miniaturas de lujo para aeropuertos y duty-free."
      },
      image: "/images/brand-free-images/28-luxury-duty-free-shopping-corridor.webp",
      badge: { en: "Duty Free Exclusives", es: "Exclusivos Duty Free" }
    },
    {
      id: "accessories",
      name: { en: "Accessories", es: "Accesorios" },
      description: {
        en: "Luxury leather goods, designer lifestyle accents, and refined travel accessories for commercial distributors.",
        es: "Marroquinería de lujo, accesorios de diseño y artículos de viaje refinados para distribuidores comerciales."
      },
      image: "/images/brand-free-images/26-luxury-handbag-boutique-display.webp",
      badge: { en: "Luxury Lifestyle", es: "Estilo de Vida de Lujo" }
    },
    {
      id: "jewelry",
      name: { en: "Jewelry", es: "Joyería" },
      description: {
        en: "Fine jewelry pieces, luxury watchmaking statements, and precious crafted accents for high-net-worth commercial portfolios.",
        es: "Piezas de joyería fina, alta relojería de lujo y detalles artesanales valiosos para portafolios comerciales."
      },
      image: "/images/brand-free-images/44-emerald-sapphire-diamond-necklace-portrait.webp",
      badge: { en: "Fine Craftsmanship", es: "Alta Artesanía" }
    }
  ],

  services: [
    {
      id: "global-wholesale-distribution",
      title: { en: "Global Wholesale & Distribution", es: "Venta al por Mayor y Distribución Global" },
      shortDesc: {
        en: "Supplying luxury perfumery and beauty to commercial partners across Middle East, Europe, Africa, and the USA.",
        es: "Suministro de perfumería de lujo y belleza a socios comerciales en Oriente Medio, Europa, África y EE. UU."
      },
      fullDesc: {
        en: "Supplying luxury perfumery, cosmetics, and related categories to retail groups and commercial partners across the Middle East, Europe, Africa, the United States, South America, and Australia, through wholesale, official distribution, and duty free channels.",
        es: "Suministramos perfumería y cosmética de lujo a grupos minoristas y socios en Oriente Medio, Europa, África y Estados Unidos a través de canales mayoristas y duty free."
      },
      iconName: "Globe"
    },
    {
      id: "logistics-management",
      title: { en: "Logistics & Transport Management", es: "Gestión de Logística y Transporte" },
      shortDesc: {
        en: "Experience in international transport by road, sea, and air worldwide working closely with established freight forwarders.",
        es: "Experiencia en transporte internacional por carretera, mar y aire en todo el mundo con transitarios consolidados."
      },
      fullDesc: {
        en: "We have many years of experience in logistics and international transport by road, sea, and air worldwide. We work closely with established freight forwarders and an extensive logistics network that helps both suppliers and clients manage shipments efficiently, reducing obstacles across trade destinations.",
        es: "Contamos con años de experiencia en logística y transporte internacional terrestre, marítimo y aéreo. Trabajamos estrechamente con transitarios consolidados para facilitar envíos ágiles."
      },
      iconName: "Truck"
    },
    {
      id: "direct-european-sourcing",
      title: { en: "Direct European Sourcing", es: "Abastecimiento Europeo Directo" },
      shortDesc: {
        en: "Providing European clean T2 products and non-European T1 merchandise for flexible, consistent supply.",
        es: "Ofreciendo productos T2 limpios europeos y mercancía T1 no europea para un suministro flexible y constante."
      },
      fullDesc: {
        en: "Direct sourcing from Europe allows us to provide both European clean T2 products and non-European T1 merchandise, giving partners consistent availability and flexible supply options tailored to their market requirements.",
        es: "El abastecimiento directo desde Europa nos permite proporcionar productos T2 limpios europeos y mercancía T1 no europea, garantizando disponibilidad y flexibilidad."
      },
      iconName: "Building2"
    },
    {
      id: "official-brand-representation",
      title: { en: "Official Brand Representation", es: "Representación Oficial de Marcas" },
      shortDesc: {
        en: "Working with products and brands from major international groups (LVMH, PUIG, L'Oréal Luxe, COTY) and niche houses.",
        es: "Trabajando con marcas de grandes grupos internacionales (LVMH, PUIG, L'Oréal Luxe, COTY) y casas de nicho."
      },
      fullDesc: {
        en: "We work with products and brands from major international groups such as LVMH, PUIG, L'Oréal Luxe, and COTY, as well as selected niche perfume houses, while respecting brand and trademark requirements.",
        es: "Trabajamos con productos y marcas de grandes grupos internacionales como LVMH, PUIG, L'Oréal Luxe y COTY, así como casas de perfume de nicho seleccionadas."
      },
      iconName: "Award"
    },
    {
      id: "duty-free-travel-retail",
      title: { en: "Duty Free & Travel Retail Supply", es: "Suministro Duty Free y Travel Retail" },
      shortDesc: {
        en: "Over 40 years of family expertise supplying travel retail operators and international airport duty-free channels.",
        es: "Más de 40 años de experiencia familiar abasteciendo a operadores de travel retail y aeropuertos."
      },
      fullDesc: {
        en: "Extensive experience supplying the travel retail and duty free channel, built on more than 40 years of family expertise in this specialized global sector.",
        es: "Amplia experiencia en el suministro al canal duty free y travel retail, respaldada por más de 40 años de trayectoria familiar."
      },
      iconName: "TrendingUp"
    },
    {
      id: "brand-partnerships",
      title: { en: "Partnership Opportunities for Brands", es: "Oportunidades de Alianza para Marcas" },
      shortDesc: {
        en: "Offering reliable route into Middle East, Europe, and US markets across wholesale, distribution, and duty-free channels.",
        es: "Ofreciendo una vía fiable hacia los mercados de Oriente Medio, Europa y EE. UU. en canales de distribución y duty free."
      },
      fullDesc: {
        en: "For brands and suppliers seeking new market access, we offer an established, reliable route into the Middle East, Europe, and the United States across wholesale, official distribution, and duty free channels backed by our sourcing infrastructure and retail relationships.",
        es: "Para marcas y proveedores que buscan acceso a nuevos mercados, ofrecemos una vía fiable en Oriente Medio, Europa y EE. UU."
      },
      iconName: "Users"
    }
  ],

  logistics: {
    modes: [
      { name: { en: "Road Freight", es: "Carga Terrestre" }, icon: "Truck", desc: { en: "Pan-European & Middle East road corridors", es: "Corredores terrestres Paneuropeos y Oriente Medio" } },
      { name: { en: "Sea Freight", es: "Carga Marítima" }, icon: "Ship", desc: { en: "Full Container & LCL global sea freight", es: "Fletes marítimos en contenedor completo y consolidado" } },
      { name: { en: "Air Freight", es: "Carga Aérea" }, icon: "Plane", desc: { en: "Priority express air freight shipments", es: "Envíos expresos prioritarios por vía aérea" } },
      { name: { en: "Global Hub Network", es: "Red de Centros Globales" }, icon: "Network", desc: { en: "Dubai Bay Square HQ and European supply hubs", es: "Sede en Dubái Bay Square y centros de suministro en Europa" } }
    ],
    targetMarkets: ["Middle East", "Europe", "United States", "Africa", "Asia", "South America", "Australia"]
  },

  whyChooseUs: [
    { en: "40+ years of family legacy and proven track record in travel retail, wholesale, and luxury perfumery & cosmetics", es: "40+ años de legado familiar y trayectoria demostrada en travel retail y perfumería de lujo" },
    { en: "Direct sourcing from Europe, offering clean T2 and non-European T1 merchandise with flexible, consistent supply", es: "Abastecimiento directo desde Europa, ofreciendo mercancía T2 limpia y T1 con total flexibilidad" },
    { en: "Established commercial relationships working with major international groups (LVMH, PUIG, L'Oréal Luxe, COTY) and niche houses", es: "Relaciones comerciales consolidadas con grandes grupos (LVMH, PUIG, L'Oréal Luxe, COTY) y firmas de nicho" },
    { en: "Active presence and growth ambitions across wholesale, official distribution, and duty free channels", es: "Presencia activa y ambición de crecimiento en canales mayoristas, distribución oficial y duty free" },
    { en: "Committed to opening new markets and forming long-term, mutually beneficial partnerships with clients and suppliers", es: "Comprometidos con la apertura de nuevos mercados y alianzas transparentes a largo plazo" }
  ]
};
