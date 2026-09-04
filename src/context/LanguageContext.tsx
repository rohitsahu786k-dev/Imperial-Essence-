"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ARABIC_EXTRA } from "@/data/arabicExtra";

export type Language = "en" | "ar";

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
  name: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { code: "ar", label: "AR", flag: "🇦🇪", name: "العربية" },
];

const ARABIC_BASE: Record<string, string> = {
  // Navigation & Headers
  "Home": "الرئيسية",
  "Inicio": "الرئيسية",
  "About Us": "من نحن",
  "Nosotros": "من نحن",
  "Categories": "الفئات",
  "Categorías": "الفئات",
  "European Sourcing": "التوريد الأوروبي",
  "Sourcing Europeo": "التوريد الأوروبي",
  "Logistics": "الخدمات اللوجستية",
  "Logística": "الخدمات اللوجستية",
  "Why Us": "لماذا نحن",
  "Por Qué Elegirnos": "لماذا نحن",
  "Contact": "اتصل بنا",
  "Contacto": "اتصل بنا",
  "Select Language": "اختر اللغة",
  "Seleccionar Idioma": "اختر اللغة",
  "Product Categories": "فئات المنتجات",
  "Categorías de Productos": "فئات المنتجات",
  "Inquire Now": "استفسر الآن",
  "Consulta Ahora": "استفسر الآن",

  // Hero Section
  "CONNECTING MARKETS, DELIVERING EXCELLENCE": "ربط الأسواق، وتقديم التميز",
  "CONECTANDO MERCADOS, ENTREGANDO EXCELENCIA": "ربط الأسواق، وتقديم التميز",
  "Your trusted partner in luxury perfumery, cosmetics, lifestyle products and more, with reliable supply solutions worldwide.": "شريكك الموثوق في العطور الفاخرة والمستحضرات التجميلية مع حلول توريد موثوقة عالمياً.",
  "EXPLORE CATEGORIES": "استكشف الفئات",
  "EXPLORAR CATEGORÍAS": "استكشف الفئات",
  "REQUEST SOURCING": "طلب التوريد",
  "SOLICITAR SOURCING": "طلب التوريد",
  "DUBAI, UAE – Bay Square, Business Bay": "دبي، الإمارات – باي سكوير، الخليج التجاري",
  "DUBÁI, EAU – Bay Square, Business Bay": "دبي، الإمارات – باي سكوير، الخليج التجاري",
  "Family Legacy": "إرث عائلي",
  "Legado Familiar": "إرث عائلي",
  "Direct Sourcing": "توريد مباشر",
  "Sourcing Directo": "توريد مباشر",
  "Bay Square, Business Bay": "باي سكوير، الخليج التجاري",

  // Categories & Portfolios
  "PRODUCT SECTORS": "قطاعات المنتجات",
  "SECTORES DE PRODUCTOS": "قطاعات المنتجات",
  "Curated Product Portfolios": "محفظة منتجات منتقاة",
  "Portafolios de Productos Seleccionados": "محفظة منتجات منتقاة",
  "Direct European Sourcing & Global Logistics": "التوريد الأوروبي المباشر والخدمات اللوجستية",
  "Abastecimiento Europeo Directo y Logística Global": "التوريد الأوروبي المباشر والخدمات اللوجستية",
  "Perfumes & Fragrances": "العطور والبخور",
  "Perfumes y Fragancias": "العطور والبخور",
  "Niche Fragrances": "عطور النيش",
  "Perfumes de Nicho": "عطور النيش",
  "Cosmetics & Makeup": "المستحضرات والمكياج",
  "Cosmética y Maquillaje": "المستحضرات والمكياج",
  "Skincare": "العناية بالبشرة",
  "Cuidado de la Piel": "العناية بالبشرة",
  "Fashion & Textiles": "الأزياء والمنسوجات",
  "Moda y Textiles": "الأزياء والمنسوجات",
  "Travel Sets & Duty Free": "مجموعات السفر والسوق الحرة",
  "Juegos de Viaje y Duty Free": "مجموعات السفر والسوق الحرة",
  "Luxury Accessories": "إكسسوارات فاخرة",
  "Accesorios de Lujo": "إكسسوارات فاخرة",
  "Jewelry & Watchmaking": "المجوهرات والساعات",
  "Joyería y Relojería": "المجوهرات والساعات",
  "REQUEST SUPPLY": "طلب التوريد",
  "SOLICITAR SUMINISTRO": "طلب التوريد",
  "B2B WHOLESALE SOURCING": "توريد الجملة للشركات B2B",
  "SOURCING MAYORISTA B2B": "توريد الجملة للشركات B2B",
  "Require Specific Sourcing or Volume Quotes?": "هل تحتاج إلى استفسارات خاصة أو أسعار بالجملة؟",
  "Submit Commercial Inquiry": "تقديم استفسار تجاري",
  "Enviar Consulta Comercial": "تقديم استفسار تجاري",

  // Services Overview
  "COMMERCIAL CAPABILITIES & SERVICES": "القدرات التجارية والخدمات",
  "CAPACIDADES COMERCIALES Y SERVICIOS": "القدرات التجارية والخدمات",
  "Global Wholesale & Sourcing Services": "خدمات التوريد بالجملة عالمياً",
  "Servicios de Distribución y Sourcing Global": "خدمات التوريد بالجملة عالمياً",
  "INQUIRE": "استفسار",
  "CONSULTAR": "استفسار",
  "COMMERCIAL SERVICE": "خدمة تجارية",
  "SERVICIO COMERCIAL": "خدمة تجارية",

  // Inquiry CTA & Forms
  "GET IN TOUCH WITH OUR TEAM": "تواصل مع فريقنا",
  "PONTE EN CONTACTO CON NUESTRO EQUIPO": "تواصل مع فريقنا",
  "Commercial Inquiries & Wholesale Requests": "الاستفسارات التجارية وطلبات الجملة",
  "Consultas Comerciales y Solicitudes Mayoristas": "الاستفسارات التجارية وطلبات الجملة",
  "Send Business Inquiry": "إرسال استفسار تجاري",
  "Enviar Consulta Comercial": "إرسال استفسار تجاري",
  "Full Name *": "الاسم الكامل *",
  "Nombre Completo *": "الاسم الكامل *",
  "Company Name *": "اسم الشركة *",
  "Nombre de Empresa *": "اسم الشركة *",
  "Country *": "الدولة *",
  "País *": "الدولة *",
  "Email Address *": "البريد الإلكتروني *",
  "Correo Electrónico *": "البريد الإلكتروني *",
  "Phone Number (with country code) *": "رقم الهاتف *",
  "Número de Teléfono *": "رقم الهاتف *",
  "Commercial Message / Inquiry Details *": "تفاصيل الاستفسار *",
  "Mensaje / Detalles de Consulta *": "تفاصيل الاستفسار *",
  "Submit Wholesale Inquiry": "إرسال طلب الجملة",
  "Enviar Consulta Mayorista": "إرسال طلب الجملة",
  "Inquiry Received": "تم استلام الاستفسار",
  "Consulta Recibida": "تم استلام الاستفسار",
  "Inquiry Received!": "تم استلام الاستفسار بنجاح!",
  "¡Consulta Recibida!": "تم استلام الاستفسار بنجاح!",
  "Send Another Message": "إرسال رسالة أخرى",
  "Enviar Otro Mensaje": "إرسال رسالة أخرى",
  "Sending Inquiry...": "جاري إرسال الاستفسار...",
  "Enviando Consulta...": "جاري إرسال الاستفسار...",
  "WhatsApp Support (24/7)": "دعم الواتساب (24/7)",
  "Work Email": "بريد العمل",
  "Correo Trabajo": "بريد العمل",
  "Phone / WhatsApp": "الهاتف / الواتساب",
  "Teléfono / WhatsApp": "الهاتف / الواتساب",
  "Estimated Quantity & Specifications": "الكمية والمواصفات التقديرية",
  "Cantidad Estimada y Especificaciones": "الكمية والمواصفات التقديرية",
  "Processing...": "جاري المعالجة...",
  "Procesando...": "جاري المعالجة...",
  "Close Window": "إغلاق النافذة",
  "Cerrar Ventana": "إغلاق النافذة",
  "Chat Now on WhatsApp": "دردش الآن على الواتساب",
  "Chatear Ahora por WhatsApp": "دردش الآن على الواتساب",
  "Request Wholesale Portfolio Quote": "طلب عرض سعر محفظة الجملة",
  "Solicitar Cotización de Portafolio": "طلب عرض سعر محفظة الجملة",

  // Contact Page
  "Contact Us": "اتصل بنا",
  "Contacto": "اتصل بنا",
  "Connect with Imperial Essence Trading LLC": "تواصل مع امبريال اسنس للتجارة ش.ذ.م.م",
  "Conéctese con Imperial Essence Trading LLC": "تواصل مع امبريال اسنس للتجارة ش.ذ.م.م",
  "Dubai Head Office": "المكتب الرئيسي في دبي",
  "Dubai Headquarters": "المقر الرئيسي في دبي",
  "Sede Central en Dubái": "المقر الرئيسي في دبي",
  "Business Inquiries": "استفسارات الأعمال",
  "Consultas Comerciales": "استفسارات الأعمال",
  "Address": "العنوان",
  "Dirección": "العنوان",
  "Mobile / WhatsApp (24/7)": "المحمول / الواتساب (24/7)",
  "Móvil / WhatsApp (24/7)": "المحمول / الواتساب (24/7)",
  "Office Telephone": "هاتف المكتب",
  "Teléfono de Oficina": "هاتف المكتب",
  "Email": "البريد الإلكتروني",
  "Business Hours": "ساعات العمل",
  "Horario Comercial": "ساعات العمل",
  "Inquiry Received Successfully!": "تم استلام الاستفسار بنجاح!",
  "¡Consulta Recibida con Éxito!": "تم استلام الاستفسار بنجاح!",
  "Submit Another Inquiry": "إرسال استفسار آخر",
  "Enviar Otra Consulta": "إرسال استفسار آخر",
  "Full Name": "الاسم الكامل",
  "Nombre Completo": "الاسم الكامل",
  "Company Name": "اسم الشركة",
  "Nombre de la Empresa": "اسم الشركة",
  "Phone Number": "رقم الهاتف",
  "Teléfono": "رقم الهاتف",
  "Inquiry Message / Product Categories Required": "رسالة الاستفسار / الفئات المطلوبة",
  "Mensaje de Consulta / Categorías Requeridas": "رسالة الاستفسار / الفئات المطلوبة",
  "Send Wholesale Inquiry": "إرسال استفسار الجملة",
  "Enviar Consulta Mayorista": "إرسال استفسار الجملة",
};

// Base entries plus the generated set covering siteData and section copy.
const ARABIC_DICTIONARY: Record<string, string> = { ...ARABIC_BASE, ...ARABIC_EXTRA };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (enText: string, esText?: string, arText?: string, frText?: string, deText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("imperial_lang") as Language;
      if (savedLang && (savedLang === "en" || savedLang === "ar")) {
        setLanguageState(savedLang);
        document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("imperial_lang", lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    } catch {
      // Ignore localStorage errors
    }
  };

  const t = (enText: string, esText?: string, arText?: string) => {
    if (language === "ar") {
      if (arText) return arText;
      if (ARABIC_DICTIONARY[enText]) return ARABIC_DICTIONARY[enText];
      if (esText && ARABIC_DICTIONARY[esText]) return ARABIC_DICTIONARY[esText];
      return enText;
    }
    return enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
