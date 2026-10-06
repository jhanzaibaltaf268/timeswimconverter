import type { Locale } from './utils';

export interface LocalizedBlogMeta {
  title: string;
  description: string;
  keywords: string;
  category: string;
  lead?: string;
}

export const blogTranslations: Record<string, Partial<Record<Locale, LocalizedBlogMeta>>> = {
  "500-yard-to-400-meter-free-swim-conversion": {
    "en": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide",
      "description": "Learn how the 500 yard to 400 meter free swim conversion works for distance swimming, nominal event pairings, lap calculations, and wall factors.",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Точные формулы темпа и дистанции]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Formules Exactes d Allure et de Distance]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Formule Esatte di Passo e Distanza]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [正確なペースと距離の換算計算式]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Точни формули за темпо и дистанции]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "500 Yard to 400 Meter Free Swim Conversion Guide - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Learn how the 500 yard to 400 meter free swim conversion works for distance swim... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "500 Yard to 400 Meter Free Swim Conversion Guide, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "asa-swim-time-conversion-calculator-pdf": {
    "en": {
      "title": "ASA Swim Time Conversion Calculator PDF: Printable Equivalent Charts & Guide",
      "description": "Compare static ASA swim time conversion calculator PDF lookup tables with modern interactive conversion tools. Download conversion tables and formula specs.",
      "keywords": "asa swim time conversion calculator pdf, asa conversion tables pdf, swim england equivalent times pdf, asa swim time conversion chart printable, british swimming conversion pdf, pullbuoy tables pdf",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "ASA Swim Time Conversion Calculator PDF - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "ASA Swim Time Conversion Calculator PDF - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "ASA Swim Time Conversion Calculator PDF - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Точные формулы темпа и дистанции]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "ASA Swim Time Conversion Calculator PDF - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Formules Exactes d Allure et de Distance]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "ASA Swim Time Conversion Calculator PDF - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "ASA Swim Time Conversion Calculator PDF - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Formule Esatte di Passo e Distanza]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "ASA Swim Time Conversion Calculator PDF - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "ASA Swim Time Conversion Calculator PDF - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "ASA Swim Time Conversion Calculator PDF - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [正確なペースと距離の換算計算式]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "ASA Swim Time Conversion Calculator PDF - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "ASA Swim Time Conversion Calculator PDF - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "ASA Swim Time Conversion Calculator PDF - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "ASA Swim Time Conversion Calculator PDF - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "ASA Swim Time Conversion Calculator PDF - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "ASA Swim Time Conversion Calculator PDF - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Точни формули за темпо и дистанции]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "ASA Swim Time Conversion Calculator PDF - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "ASA Swim Time Conversion Calculator PDF - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Compare static ASA swim time conversion calculator PDF lookup tables with modern... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "ASA Swim Time Conversion Calculator PDF, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "asa-swim-time-conversion-calculator": {
    "en": {
      "title": "ASA Swim Time Conversion Calculator: Official Swim England SCM to LCM Tables",
      "description": "Complete guide to the ASA swim time conversion calculator and Swim England equivalent time algorithms. Convert 25m SCM to 50m LCM across all strokes.",
      "keywords": "asa swim time conversion calculator, asa swim converter, swim england time converter, asa equivalent times, scm to lcm asa conversion, british swimming time conversion, pullbuoy tables",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "ASA Swim Time Conversion Calculator - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "ASA Swim Time Conversion Calculator, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "ASA Swim Time Conversion Calculator - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "ASA Swim Time Conversion Calculator, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "ASA Swim Time Conversion Calculator - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Точные формулы темпа и дистанции]",
      "keywords": "ASA Swim Time Conversion Calculator, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "ASA Swim Time Conversion Calculator - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Formules Exactes d Allure et de Distance]",
      "keywords": "ASA Swim Time Conversion Calculator, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "ASA Swim Time Conversion Calculator - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "ASA Swim Time Conversion Calculator, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "ASA Swim Time Conversion Calculator - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Formule Esatte di Passo e Distanza]",
      "keywords": "ASA Swim Time Conversion Calculator, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "ASA Swim Time Conversion Calculator - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "ASA Swim Time Conversion Calculator, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "ASA Swim Time Conversion Calculator - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "ASA Swim Time Conversion Calculator, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "ASA Swim Time Conversion Calculator - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [正確なペースと距離の換算計算式]",
      "keywords": "ASA Swim Time Conversion Calculator, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "ASA Swim Time Conversion Calculator - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "ASA Swim Time Conversion Calculator, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "ASA Swim Time Conversion Calculator - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "ASA Swim Time Conversion Calculator, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "ASA Swim Time Conversion Calculator - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "ASA Swim Time Conversion Calculator, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "ASA Swim Time Conversion Calculator - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "ASA Swim Time Conversion Calculator, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "ASA Swim Time Conversion Calculator - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "ASA Swim Time Conversion Calculator, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "ASA Swim Time Conversion Calculator - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Точни формули за темпо и дистанции]",
      "keywords": "ASA Swim Time Conversion Calculator, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "ASA Swim Time Conversion Calculator - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "ASA Swim Time Conversion Calculator, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "ASA Swim Time Conversion Calculator - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Complete guide to the ASA swim time conversion calculator and Swim England equiv... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "ASA Swim Time Conversion Calculator, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "high-school-vs-ncaa-swimming-time-standards": {
    "en": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times",
      "description": "Compare high school vs ncaa swimming time standards for state championships, NISCA All-America, and NCAA Division I, II, III recruiting cut times.",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Compare high school vs ncaa swimming time standards for state championships, NIS... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Compare high school vs ncaa swimming time standards for state championships, NIS... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Compare high school vs ncaa swimming time standards for state championships, NIS... [Точные формулы темпа и дистанции]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Compare high school vs ncaa swimming time standards for state championships, NIS... [Formules Exactes d Allure et de Distance]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Compare high school vs ncaa swimming time standards for state championships, NIS... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Compare high school vs ncaa swimming time standards for state championships, NIS... [Formule Esatte di Passo e Distanza]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Compare high school vs ncaa swimming time standards for state championships, NIS... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Compare high school vs ncaa swimming time standards for state championships, NIS... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Compare high school vs ncaa swimming time standards for state championships, NIS... [正確なペースと距離の換算計算式]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Compare high school vs ncaa swimming time standards for state championships, NIS... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Compare high school vs ncaa swimming time standards for state championships, NIS... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Compare high school vs ncaa swimming time standards for state championships, NIS... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Compare high school vs ncaa swimming time standards for state championships, NIS... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Compare high school vs ncaa swimming time standards for state championships, NIS... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Compare high school vs ncaa swimming time standards for state championships, NIS... [Точни формули за темпо и дистанции]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Compare high school vs ncaa swimming time standards for state championships, NIS... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "High School vs NCAA Swimming Time Standards & Cut Times - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Compare high school vs ncaa swimming time standards for state championships, NIS... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "High School vs NCAA Swimming Time Standards & Cut Times, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "lcm-to-scy-conversion-international-recruits": {
    "en": {
      "title": "LCM to SCY Conversion for International Recruits Guide",
      "description": "Complete guide to LCM to SCY conversion for international recruits transitioning from 50m long course meters to 25yd short course yards in NCAA swimming.",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "LCM to SCY Conversion for International Recruits Guide - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Complete guide to LCM to SCY conversion for international recruits transitioning... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Complete guide to LCM to SCY conversion for international recruits transitioning... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Complete guide to LCM to SCY conversion for international recruits transitioning... [Точные формулы темпа и дистанции]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Complete guide to LCM to SCY conversion for international recruits transitioning... [Formules Exactes d Allure et de Distance]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Complete guide to LCM to SCY conversion for international recruits transitioning... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Complete guide to LCM to SCY conversion for international recruits transitioning... [Formule Esatte di Passo e Distanza]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Complete guide to LCM to SCY conversion for international recruits transitioning... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "LCM to SCY Conversion for International Recruits Guide - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Complete guide to LCM to SCY conversion for international recruits transitioning... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "LCM to SCY Conversion for International Recruits Guide - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Complete guide to LCM to SCY conversion for international recruits transitioning... [正確なペースと距離の換算計算式]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "LCM to SCY Conversion for International Recruits Guide - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Complete guide to LCM to SCY conversion for international recruits transitioning... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Complete guide to LCM to SCY conversion for international recruits transitioning... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Complete guide to LCM to SCY conversion for international recruits transitioning... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Complete guide to LCM to SCY conversion for international recruits transitioning... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "LCM to SCY Conversion for International Recruits Guide - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Complete guide to LCM to SCY conversion for international recruits transitioning... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Complete guide to LCM to SCY conversion for international recruits transitioning... [Точни формули за темпо и дистанции]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Complete guide to LCM to SCY conversion for international recruits transitioning... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "LCM to SCY Conversion for International Recruits Guide - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Complete guide to LCM to SCY conversion for international recruits transitioning... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "LCM to SCY Conversion for International Recruits Guide, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "long-course-to-short-course-conversion-calculator": {
    "en": {
      "title": "Long Course to Short Course Conversion Calculator: LCM to SCM & SCY Guide",
      "description": "Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short course conversion calculator. Turn factors, pacing drop, and qualification standards.",
      "keywords": "long course to short course conversion calculator, lcm to scy conversion calculator, lcm to scm calculator, 50m to 25m swim converter, long course to short course swimming converter, olympic to short course time converter",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "Long Course to Short Course Conversion Calculator - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "Long Course to Short Course Conversion Calculator, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "Long Course to Short Course Conversion Calculator - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "Long Course to Short Course Conversion Calculator, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "Long Course to Short Course Conversion Calculator - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Точные формулы темпа и дистанции]",
      "keywords": "Long Course to Short Course Conversion Calculator, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "Long Course to Short Course Conversion Calculator - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Formules Exactes d Allure et de Distance]",
      "keywords": "Long Course to Short Course Conversion Calculator, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "Long Course to Short Course Conversion Calculator - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "Long Course to Short Course Conversion Calculator, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "Long Course to Short Course Conversion Calculator - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Formule Esatte di Passo e Distanza]",
      "keywords": "Long Course to Short Course Conversion Calculator, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "Long Course to Short Course Conversion Calculator - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "Long Course to Short Course Conversion Calculator, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "Long Course to Short Course Conversion Calculator - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "Long Course to Short Course Conversion Calculator, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "Long Course to Short Course Conversion Calculator - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [正確なペースと距離の換算計算式]",
      "keywords": "Long Course to Short Course Conversion Calculator, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "Long Course to Short Course Conversion Calculator - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "Long Course to Short Course Conversion Calculator, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "Long Course to Short Course Conversion Calculator - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "Long Course to Short Course Conversion Calculator, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "Long Course to Short Course Conversion Calculator - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "Long Course to Short Course Conversion Calculator, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "Long Course to Short Course Conversion Calculator - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "Long Course to Short Course Conversion Calculator, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "Long Course to Short Course Conversion Calculator - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "Long Course to Short Course Conversion Calculator, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "Long Course to Short Course Conversion Calculator - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Точни формули за темпо и дистанции]",
      "keywords": "Long Course to Short Course Conversion Calculator, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "Long Course to Short Course Conversion Calculator - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "Long Course to Short Course Conversion Calculator, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "Long Course to Short Course Conversion Calculator - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Convert 50m pool times to 25m SCM and 25yd SCY with our long course to short cou... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "Long Course to Short Course Conversion Calculator, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "meters-to-yards-time-conversion": {
    "en": {
      "title": "Meters to Yards Time Conversion: SCM & LCM to SCY Swimming Guide",
      "description": "Master meters to yards time conversion for competitive swimming. Convert 25m SCM and 50m LCM times to 25yd SCY for NCAA recruiting, USA Swimming, and high school.",
      "keywords": "meters to yards time conversion, meters to yards swimming conversion, scm to scy conversion, lcm to scy conversion, swimming meters to yards time converter, ncaa recruiting conversion, us swimming yard conversions",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "Meters to Yards Time Conversion - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "Meters to Yards Time Conversion, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "Meters to Yards Time Conversion - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "Meters to Yards Time Conversion, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "Meters to Yards Time Conversion - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Точные формулы темпа и дистанции]",
      "keywords": "Meters to Yards Time Conversion, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "Meters to Yards Time Conversion - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Formules Exactes d Allure et de Distance]",
      "keywords": "Meters to Yards Time Conversion, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "Meters to Yards Time Conversion - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "Meters to Yards Time Conversion, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "Meters to Yards Time Conversion - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Formule Esatte di Passo e Distanza]",
      "keywords": "Meters to Yards Time Conversion, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "Meters to Yards Time Conversion - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "Meters to Yards Time Conversion, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "Meters to Yards Time Conversion - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "Meters to Yards Time Conversion, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "Meters to Yards Time Conversion - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [正確なペースと距離の換算計算式]",
      "keywords": "Meters to Yards Time Conversion, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "Meters to Yards Time Conversion - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "Meters to Yards Time Conversion, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "Meters to Yards Time Conversion - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "Meters to Yards Time Conversion, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "Meters to Yards Time Conversion - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "Meters to Yards Time Conversion, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "Meters to Yards Time Conversion - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "Meters to Yards Time Conversion, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "Meters to Yards Time Conversion - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "Meters to Yards Time Conversion, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "Meters to Yards Time Conversion - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Точни формули за темпо и дистанции]",
      "keywords": "Meters to Yards Time Conversion, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "Meters to Yards Time Conversion - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "Meters to Yards Time Conversion, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "Meters to Yards Time Conversion - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Master meters to yards time conversion for competitive swimming. Convert 25m SCM... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "Meters to Yards Time Conversion, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "physics-of-swimming-turns-underwaters-scy-lcm": {
    "en": {
      "title": "Physics of Swimming Turns & Underwaters: SCY vs LCM Guide",
      "description": "Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid dynamics, wall push-off forces, and velocity spikes.",
      "keywords": "Physics of Swimming Turns & Underwaters: SCY vs LCM Guide, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "Physics of Swimming Turns & Underwaters - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "Physics of Swimming Turns & Underwaters, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "Physics of Swimming Turns & Underwaters - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "Physics of Swimming Turns & Underwaters, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "Physics of Swimming Turns & Underwaters - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Точные формулы темпа и дистанции]",
      "keywords": "Physics of Swimming Turns & Underwaters, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "Physics of Swimming Turns & Underwaters - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Formules Exactes d Allure et de Distance]",
      "keywords": "Physics of Swimming Turns & Underwaters, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "Physics of Swimming Turns & Underwaters - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "Physics of Swimming Turns & Underwaters, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "Physics of Swimming Turns & Underwaters - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Formule Esatte di Passo e Distanza]",
      "keywords": "Physics of Swimming Turns & Underwaters, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "Physics of Swimming Turns & Underwaters - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "Physics of Swimming Turns & Underwaters, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "Physics of Swimming Turns & Underwaters - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "Physics of Swimming Turns & Underwaters, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "Physics of Swimming Turns & Underwaters - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [正確なペースと距離の換算計算式]",
      "keywords": "Physics of Swimming Turns & Underwaters, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "Physics of Swimming Turns & Underwaters - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "Physics of Swimming Turns & Underwaters, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "Physics of Swimming Turns & Underwaters - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "Physics of Swimming Turns & Underwaters, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "Physics of Swimming Turns & Underwaters - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "Physics of Swimming Turns & Underwaters, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "Physics of Swimming Turns & Underwaters - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "Physics of Swimming Turns & Underwaters, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "Physics of Swimming Turns & Underwaters - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "Physics of Swimming Turns & Underwaters, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "Physics of Swimming Turns & Underwaters - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Точни формули за темпо и дистанции]",
      "keywords": "Physics of Swimming Turns & Underwaters, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "Physics of Swimming Turns & Underwaters - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "Physics of Swimming Turns & Underwaters, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "Physics of Swimming Turns & Underwaters - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Explore the physics of swimming turns and underwaters in SCY vs LCM pools, fluid... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "Physics of Swimming Turns & Underwaters, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "scm-to-scy-swim-converter-25m-25yd": {
    "en": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion",
      "description": "Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our scm to scy swim converter 25m 25yd. Understand distance differentials and turn mechanics.",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Точные формулы темпа и дистанции]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Formules Exactes d Allure et de Distance]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Formule Esatte di Passo e Distanza]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [正確なペースと距離の換算計算式]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Точни формули за темпо и дистанции]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "SCM to SCY Swim Converter 25m 25yd Pool Conversion - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Convert 25m Short Course Meters (SCM) to 25yd Short Course Yards (SCY) with our ... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "SCM to SCY Swim Converter 25m 25yd Pool Conversion, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "scy-to-lcm-swim-time-conversion-guide": {
    "en": {
      "title": "SCY to LCM Swim Time Conversion Guide: Formula & Benchmarks",
      "description": "Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to convert short course yards (25yd) to long course meters (50m).",
      "keywords": "SCY to LCM Swim Time Conversion Guide: Formula & Benchmarks, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "SCY to LCM Swim Time Conversion Guide - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "SCY to LCM Swim Time Conversion Guide - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "SCY to LCM Swim Time Conversion Guide - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Точные формулы темпа и дистанции]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "SCY to LCM Swim Time Conversion Guide - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Formules Exactes d Allure et de Distance]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "SCY to LCM Swim Time Conversion Guide - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "SCY to LCM Swim Time Conversion Guide - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Formule Esatte di Passo e Distanza]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "SCY to LCM Swim Time Conversion Guide - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "SCY to LCM Swim Time Conversion Guide - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "SCY to LCM Swim Time Conversion Guide - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [正確なペースと距離の換算計算式]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "SCY to LCM Swim Time Conversion Guide - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "SCY to LCM Swim Time Conversion Guide - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "SCY to LCM Swim Time Conversion Guide - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "SCY to LCM Swim Time Conversion Guide - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "SCY to LCM Swim Time Conversion Guide - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "SCY to LCM Swim Time Conversion Guide - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Точни формули за темпо и дистанции]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "SCY to LCM Swim Time Conversion Guide - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "SCY to LCM Swim Time Conversion Guide - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Comprehensive SCY to LCM swim time conversion guide for swimmers and coaches to ... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "SCY to LCM Swim Time Conversion Guide, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "swim-pace-calculator-split-strategy-guide": {
    "en": {
      "title": "Swim Pace Calculator & Split Strategy Guide: Pacing 200m & 400m Races",
      "description": "Learn how to use our swim pace calculator and split strategy guide to build even and negative split strategies for 200m, 400m, and 1500m swimming events.",
      "keywords": "Swim Pace Calculator & Split Strategy Guide: Pacing 200m & 400m Races, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "Swim Pace Calculator & Split Strategy Guide - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Learn how to use our swim pace calculator and split strategy guide to build even... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Learn how to use our swim pace calculator and split strategy guide to build even... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Learn how to use our swim pace calculator and split strategy guide to build even... [Точные формулы темпа и дистанции]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Learn how to use our swim pace calculator and split strategy guide to build even... [Formules Exactes d Allure et de Distance]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Learn how to use our swim pace calculator and split strategy guide to build even... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Learn how to use our swim pace calculator and split strategy guide to build even... [Formule Esatte di Passo e Distanza]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Learn how to use our swim pace calculator and split strategy guide to build even... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "Swim Pace Calculator & Split Strategy Guide - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Learn how to use our swim pace calculator and split strategy guide to build even... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "Swim Pace Calculator & Split Strategy Guide - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Learn how to use our swim pace calculator and split strategy guide to build even... [正確なペースと距離の換算計算式]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "Swim Pace Calculator & Split Strategy Guide - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Learn how to use our swim pace calculator and split strategy guide to build even... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Learn how to use our swim pace calculator and split strategy guide to build even... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Learn how to use our swim pace calculator and split strategy guide to build even... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Learn how to use our swim pace calculator and split strategy guide to build even... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "Swim Pace Calculator & Split Strategy Guide - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Learn how to use our swim pace calculator and split strategy guide to build even... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Learn how to use our swim pace calculator and split strategy guide to build even... [Точни формули за темпо и дистанции]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Learn how to use our swim pace calculator and split strategy guide to build even... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "Swim Pace Calculator & Split Strategy Guide - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Learn how to use our swim pace calculator and split strategy guide to build even... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "Swim Pace Calculator & Split Strategy Guide, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "swim-time-converter-100-im": {
    "en": {
      "title": "Swim Time Converter 100 IM: SCY to SCM & 200 IM Split Conversion Guide",
      "description": "Convert 100 Individual Medley times with our swim time converter 100 im. Master SCY to SCM conversion formulas, stroke transition splits, and 200 IM projections.",
      "keywords": "swim time converter 100 im, 100 im conversion, 100 im scy to scm, 100 individual medley time converter, 100 im split converter, 100 im to 200 im",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "Swim Time Converter 100 IM - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "Swim Time Converter 100 IM, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "Swim Time Converter 100 IM - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "Swim Time Converter 100 IM, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "Swim Time Converter 100 IM - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Точные формулы темпа и дистанции]",
      "keywords": "Swim Time Converter 100 IM, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "Swim Time Converter 100 IM - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Formules Exactes d Allure et de Distance]",
      "keywords": "Swim Time Converter 100 IM, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "Swim Time Converter 100 IM - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "Swim Time Converter 100 IM, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "Swim Time Converter 100 IM - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Formule Esatte di Passo e Distanza]",
      "keywords": "Swim Time Converter 100 IM, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "Swim Time Converter 100 IM - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "Swim Time Converter 100 IM, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "Swim Time Converter 100 IM - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "Swim Time Converter 100 IM, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "Swim Time Converter 100 IM - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [正確なペースと距離の換算計算式]",
      "keywords": "Swim Time Converter 100 IM, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "Swim Time Converter 100 IM - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "Swim Time Converter 100 IM, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "Swim Time Converter 100 IM - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "Swim Time Converter 100 IM, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "Swim Time Converter 100 IM - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "Swim Time Converter 100 IM, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "Swim Time Converter 100 IM - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "Swim Time Converter 100 IM, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "Swim Time Converter 100 IM - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "Swim Time Converter 100 IM, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "Swim Time Converter 100 IM - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Точни формули за темпо и дистанции]",
      "keywords": "Swim Time Converter 100 IM, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "Swim Time Converter 100 IM - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "Swim Time Converter 100 IM, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "Swim Time Converter 100 IM - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Convert 100 Individual Medley times with our swim time converter 100 im. Master ... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "Swim Time Converter 100 IM, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "swim-time-converter-25-yards-to-meters": {
    "en": {
      "title": "Swim Time Converter 25 Yards to Meters: 25yd to 25m Pool Conversion",
      "description": "Accurate swim time converter 25 yards to meters for competitive swimmers. Understand 22.86m to 25m distance gap, push-off wall gain, and lap formulas.",
      "keywords": "swim time converter 25 yards to meters, 25 yards to meters swim conversion, 25yd to 25m swim time converter, 25 yard pool conversion, swimming pool 25 yards to meters, 25m vs 25yd",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "Swim Time Converter 25 Yards to Meters - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "Swim Time Converter 25 Yards to Meters, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "Swim Time Converter 25 Yards to Meters - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "Swim Time Converter 25 Yards to Meters - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Точные формулы темпа и дистанции]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "Swim Time Converter 25 Yards to Meters - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Formules Exactes d Allure et de Distance]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "Swim Time Converter 25 Yards to Meters - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "Swim Time Converter 25 Yards to Meters - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Formule Esatte di Passo e Distanza]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "Swim Time Converter 25 Yards to Meters - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "Swim Time Converter 25 Yards to Meters - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "Swim Time Converter 25 Yards to Meters, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "Swim Time Converter 25 Yards to Meters - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [正確なペースと距離の換算計算式]",
      "keywords": "Swim Time Converter 25 Yards to Meters, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "Swim Time Converter 25 Yards to Meters - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "Swim Time Converter 25 Yards to Meters, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "Swim Time Converter 25 Yards to Meters - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "Swim Time Converter 25 Yards to Meters - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "Swim Time Converter 25 Yards to Meters - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "Swim Time Converter 25 Yards to Meters - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "Swim Time Converter 25 Yards to Meters, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "Swim Time Converter 25 Yards to Meters - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Точни формули за темпо и дистанции]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "Swim Time Converter 25 Yards to Meters - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "Swim Time Converter 25 Yards to Meters - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Accurate swim time converter 25 yards to meters for competitive swimmers. Unders... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "Swim Time Converter 25 Yards to Meters, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "swim-time-converter-50-yards-to-meters": {
    "en": {
      "title": "Swim Time Converter 50 Yards to Meters: 50 SCY to 50 SCM & 50 LCM Sprint Guide",
      "description": "Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Compare 50yd 1-turn vs 50m long course 0-turn pacing and velocity splits.",
      "keywords": "swim time converter 50 yards to meters, 50 yard to 50 meter swim conversion, 50 scy to 50 lcm, 50 freestyle conversion yards to meters, 50yd to 50m conversion, 50 sprint conversion",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "Swim Time Converter 50 Yards to Meters - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "Swim Time Converter 50 Yards to Meters, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "Swim Time Converter 50 Yards to Meters - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "Swim Time Converter 50 Yards to Meters - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Точные формулы темпа и дистанции]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "Swim Time Converter 50 Yards to Meters - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Formules Exactes d Allure et de Distance]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "Swim Time Converter 50 Yards to Meters - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "Swim Time Converter 50 Yards to Meters - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Formule Esatte di Passo e Distanza]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "Swim Time Converter 50 Yards to Meters - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "Swim Time Converter 50 Yards to Meters - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "Swim Time Converter 50 Yards to Meters, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "Swim Time Converter 50 Yards to Meters - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [正確なペースと距離の換算計算式]",
      "keywords": "Swim Time Converter 50 Yards to Meters, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "Swim Time Converter 50 Yards to Meters - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "Swim Time Converter 50 Yards to Meters, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "Swim Time Converter 50 Yards to Meters - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "Swim Time Converter 50 Yards to Meters - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "Swim Time Converter 50 Yards to Meters - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "Swim Time Converter 50 Yards to Meters - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "Swim Time Converter 50 Yards to Meters, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "Swim Time Converter 50 Yards to Meters - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Точни формули за темпо и дистанции]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "Swim Time Converter 50 Yards to Meters - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "Swim Time Converter 50 Yards to Meters - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Convert 50 SCY sprint times with our swim time converter 50 yards to meters. Com... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "Swim Time Converter 50 Yards to Meters, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "swim-time-converter-yards-to-meters": {
    "en": {
      "title": "Swim Time Converter Yards to Meters: Complete SCY to SCM & LCM Guide",
      "description": "Use the ultimate swim time converter yards to meters for precise conversion from 25yd SCY to 25m SCM and 50m LCM pools. Formulas, conversion tables, and cut times.",
      "keywords": "swim time converter yards to meters, yards to meters swim time converter, scy to lcm converter, scy to scm converter, swimming yard to meter converter, swim conversion table, ncaa swimming time conversion",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "Swim Time Converter Yards to Meters - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Use the ultimate swim time converter yards to meters for precise conversion from... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "Swim Time Converter Yards to Meters, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "Swim Time Converter Yards to Meters - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Use the ultimate swim time converter yards to meters for precise conversion from... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "Swim Time Converter Yards to Meters, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "Swim Time Converter Yards to Meters - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Use the ultimate swim time converter yards to meters for precise conversion from... [Точные формулы темпа и дистанции]",
      "keywords": "Swim Time Converter Yards to Meters, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "Swim Time Converter Yards to Meters - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Use the ultimate swim time converter yards to meters for precise conversion from... [Formules Exactes d Allure et de Distance]",
      "keywords": "Swim Time Converter Yards to Meters, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "Swim Time Converter Yards to Meters - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Use the ultimate swim time converter yards to meters for precise conversion from... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "Swim Time Converter Yards to Meters, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "Swim Time Converter Yards to Meters - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Use the ultimate swim time converter yards to meters for precise conversion from... [Formule Esatte di Passo e Distanza]",
      "keywords": "Swim Time Converter Yards to Meters, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "Swim Time Converter Yards to Meters - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Use the ultimate swim time converter yards to meters for precise conversion from... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "Swim Time Converter Yards to Meters, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "Swim Time Converter Yards to Meters - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Use the ultimate swim time converter yards to meters for precise conversion from... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "Swim Time Converter Yards to Meters, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "Swim Time Converter Yards to Meters - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Use the ultimate swim time converter yards to meters for precise conversion from... [正確なペースと距離の換算計算式]",
      "keywords": "Swim Time Converter Yards to Meters, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "Swim Time Converter Yards to Meters - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Use the ultimate swim time converter yards to meters for precise conversion from... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "Swim Time Converter Yards to Meters, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "Swim Time Converter Yards to Meters - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Use the ultimate swim time converter yards to meters for precise conversion from... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "Swim Time Converter Yards to Meters, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "Swim Time Converter Yards to Meters - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Use the ultimate swim time converter yards to meters for precise conversion from... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "Swim Time Converter Yards to Meters, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "Swim Time Converter Yards to Meters - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Use the ultimate swim time converter yards to meters for precise conversion from... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "Swim Time Converter Yards to Meters, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "Swim Time Converter Yards to Meters - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Use the ultimate swim time converter yards to meters for precise conversion from... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "Swim Time Converter Yards to Meters, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "Swim Time Converter Yards to Meters - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Use the ultimate swim time converter yards to meters for precise conversion from... [Точни формули за темпо и дистанции]",
      "keywords": "Swim Time Converter Yards to Meters, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "Swim Time Converter Yards to Meters - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Use the ultimate swim time converter yards to meters for precise conversion from... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "Swim Time Converter Yards to Meters, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "Swim Time Converter Yards to Meters - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Use the ultimate swim time converter yards to meters for precise conversion from... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "Swim Time Converter Yards to Meters, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "uk-swim-time-converter-asa-swim-england": {
    "en": {
      "title": "UK Swim Time Converter ASA Swim England Guide: SCM to LCM & SCY",
      "description": "Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Welsh galas to convert 25m SCM to 50m LCM and US SCY recruiting standards.",
      "keywords": "UK Swim Time Converter ASA Swim England Guide: SCM to LCM & SCY, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "UK Swim Time Converter ASA Swim England Guide - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Точные формулы темпа и дистанции]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Formules Exactes d Allure et de Distance]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Formule Esatte di Passo e Distanza]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "UK Swim Time Converter ASA Swim England Guide - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "UK Swim Time Converter ASA Swim England Guide - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [正確なペースと距離の換算計算式]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "UK Swim Time Converter ASA Swim England Guide - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "UK Swim Time Converter ASA Swim England Guide - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Точни формули за темпо и дистанции]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "UK Swim Time Converter ASA Swim England Guide - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Complete UK swim time converter for ASA Swim England, Scottish Swimming, and Wel... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "UK Swim Time Converter ASA Swim England Guide, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "usa-swimming-time-conversion-cut-times": {
    "en": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide",
      "description": "Complete USA Swimming time conversion cut times guide for motivational standards (B, A, AA, AAA, AAAA) across SCY, SCM, and LCM formats.",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Complete USA Swimming time conversion cut times guide for motivational standards... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Complete USA Swimming time conversion cut times guide for motivational standards... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Complete USA Swimming time conversion cut times guide for motivational standards... [Точные формулы темпа и дистанции]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Complete USA Swimming time conversion cut times guide for motivational standards... [Formules Exactes d Allure et de Distance]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Complete USA Swimming time conversion cut times guide for motivational standards... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Complete USA Swimming time conversion cut times guide for motivational standards... [Formule Esatte di Passo e Distanza]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Complete USA Swimming time conversion cut times guide for motivational standards... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Complete USA Swimming time conversion cut times guide for motivational standards... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Complete USA Swimming time conversion cut times guide for motivational standards... [正確なペースと距離の換算計算式]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Complete USA Swimming time conversion cut times guide for motivational standards... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Complete USA Swimming time conversion cut times guide for motivational standards... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Complete USA Swimming time conversion cut times guide for motivational standards... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Complete USA Swimming time conversion cut times guide for motivational standards... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Complete USA Swimming time conversion cut times guide for motivational standards... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Complete USA Swimming time conversion cut times guide for motivational standards... [Точни формули за темпо и дистанции]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Complete USA Swimming time conversion cut times guide for motivational standards... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "USA Swimming Time Conversion Cut Times & Standards Guide - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Complete USA Swimming time conversion cut times guide for motivational standards... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "USA Swimming Time Conversion Cut Times & Standards Guide, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  },
  "yards-to-meters-swimming-conversion-explained": {
    "en": {
      "title": "Yards to Meters Swimming Conversion Explained: Pool Distance Math",
      "description": "Detailed breakdown of yards to meters swimming conversion explained. Learn distance calculations, turn mechanics, and formula walkthroughs.",
      "keywords": "Yards to Meters Swimming Conversion Explained: Pool Distance Math, swim time converter, swimming, pace, SCY, LCM, SCM",
      "category": "Swimming Guides"
    },
    "hi": {
      "title": "Yards to Meters Swimming Conversion Explained - तैराकी समय रूपांतरण (गाइड)",
      "description": "तैराकी समय रूपांतरण: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [सटीक तैराकी गति और दूरी सूत्र]",
      "keywords": "Yards to Meters Swimming Conversion Explained, तैराकी समय रूपांतरण, कैलकुलेटर, गाइड, हिंदी",
      "category": "गाइड"
    },
    "es": {
      "title": "Yards to Meters Swimming Conversion Explained - Conversión de Tiempos de Natación (Guía)",
      "description": "Conversión de Tiempos de Natación: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Fórmulas Exactas de Ritmo y Distancia]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Conversión de Tiempos de Natación, Calculadora, Guía, Español",
      "category": "Guía"
    },
    "ru": {
      "title": "Yards to Meters Swimming Conversion Explained - Перевод времени плавания (Руководство)",
      "description": "Перевод времени плавания: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Точные формулы темпа и дистанции]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Перевод времени плавания, Калькулятор, Руководство, Русский",
      "category": "Руководство"
    },
    "fr": {
      "title": "Yards to Meters Swimming Conversion Explained - Conversion des Temps de Natation (Guide)",
      "description": "Conversion des Temps de Natation: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Formules Exactes d Allure et de Distance]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Conversion des Temps de Natation, Calculateur, Guide, Français",
      "category": "Guide"
    },
    "de": {
      "title": "Yards to Meters Swimming Conversion Explained - Schwimmzeit-Umrechnung (Leitfaden)",
      "description": "Schwimmzeit-Umrechnung: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Genaue Schwimm- und Pace-Formeln]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Schwimmzeit-Umrechnung, Rechner, Leitfaden, Deutsch",
      "category": "Leitfaden"
    },
    "it": {
      "title": "Yards to Meters Swimming Conversion Explained - Conversione dei Tempi di Nuoto (Guida)",
      "description": "Conversione dei Tempi di Nuoto: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Formule Esatte di Passo e Distanza]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Conversione dei Tempi di Nuoto, Calcolatore, Guida, Italiano",
      "category": "Guida"
    },
    "pt": {
      "title": "Yards to Meters Swimming Conversion Explained - Conversão de Tempos de Natação (Guia)",
      "description": "Conversão de Tempos de Natação: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Fórmulas Exatas de Ritmo e Distância]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Conversão de Tempos de Natação, Calculadora, Guia, Português",
      "category": "Guia"
    },
    "bn": {
      "title": "Yards to Meters Swimming Conversion Explained - সাঁতারের সময় রূপান্তর (গাইড)",
      "description": "সাঁতারের সময় রূপান্তর: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র]",
      "keywords": "Yards to Meters Swimming Conversion Explained, সাঁতারের সময় রূপান্তর, ক্যালকুলেটর, গাইড, বাংলা",
      "category": "গাইড"
    },
    "ja": {
      "title": "Yards to Meters Swimming Conversion Explained - 水泳タイム換算 (ガイド)",
      "description": "水泳タイム換算: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [正確なペースと距離の換算計算式]",
      "keywords": "Yards to Meters Swimming Conversion Explained, 水泳タイム換算, 計算機, ガイド, 日本語",
      "category": "ガイド"
    },
    "ko": {
      "title": "Yards to Meters Swimming Conversion Explained - 수영 기록 변환 (가이드)",
      "description": "수영 기록 변환: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [정확한 페이스 및 거리 환산 공식]",
      "keywords": "Yards to Meters Swimming Conversion Explained, 수영 기록 변환, 계산기, 가이드, 한국어",
      "category": "가이드"
    },
    "ms": {
      "title": "Yards to Meters Swimming Conversion Explained - Penukaran Masa Renang (Panduan)",
      "description": "Penukaran Masa Renang: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Formula Tepat Rentak & Jarak Renang]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Penukaran Masa Renang, Kalkulator, Panduan, Bahasa Melayu",
      "category": "Panduan"
    },
    "pl": {
      "title": "Yards to Meters Swimming Conversion Explained - Przelicznik czasów pływackich (Przewodnik)",
      "description": "Przelicznik czasów pływackich: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Dokładne wzory na tempo i dystans pływacki]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Przelicznik czasów pływackich, Kalkulator, Przewodnik, Polski",
      "category": "Przewodnik"
    },
    "id": {
      "title": "Yards to Meters Swimming Conversion Explained - Konversi Waktu Renang (Panduan)",
      "description": "Konversi Waktu Renang: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Rumus Tepat Kecepatan & Jarak Renang]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Konversi Waktu Renang, Kalkulator, Panduan, Bahasa Indonesia",
      "category": "Panduan"
    },
    "ar": {
      "title": "Yards to Meters Swimming Conversion Explained - تحويل أوقات السباحة (دليل)",
      "description": "تحويل أوقات السباحة: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [قوانين حساب السرعة ومسافات أحواض السباحة]",
      "keywords": "Yards to Meters Swimming Conversion Explained, تحويل أوقات السباحة, حاسبة, دليل, العربية",
      "category": "دليل"
    },
    "bg": {
      "title": "Yards to Meters Swimming Conversion Explained - Преобразуване на плувни времена (Ръководство)",
      "description": "Преобразуване на плувни времена: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Точни формули за темпо и дистанции]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Преобразуване на плувни времена, Калкулатор, Ръководство, Български",
      "category": "Ръководство"
    },
    "tr": {
      "title": "Yards to Meters Swimming Conversion Explained - Yüzme Derecesi Dönüşümü (Rehberi)",
      "description": "Yüzme Derecesi Dönüşümü: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Kesin Yüzme Temposu ve Havuz Formülleri]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Yüzme Derecesi Dönüşümü, Hesaplayıcı, Rehberi, Türkçe",
      "category": "Rehberi"
    },
    "sv": {
      "title": "Yards to Meters Swimming Conversion Explained - Simtidsomvandling (Guide)",
      "description": "Simtidsomvandling: Detailed breakdown of yards to meters swimming conversion explained. Learn dista... [Exakta formler för simtakt och bassänglängd]",
      "keywords": "Yards to Meters Swimming Conversion Explained, Simtidsomvandling, Räknare, Guide, Svenska",
      "category": "Guide"
    }
  }
};

export const genericTerms: Record<string, { convert: string; guide: string; formulas: string; calc: string; langName: string }> = {
  "hi": {
    "convert": "तैराकी समय रूपांतरण",
    "guide": "गाइड",
    "formulas": "सटीक तैराकी गति और दूरी सूत्र",
    "calc": "कैलकुलेटर",
    "langName": "हिंदी"
  },
  "es": {
    "convert": "Conversión de Tiempos de Natación",
    "guide": "Guía",
    "formulas": "Fórmulas Exactas de Ritmo y Distancia",
    "calc": "Calculadora",
    "langName": "Español"
  },
  "ru": {
    "convert": "Перевод времени плавания",
    "guide": "Руководство",
    "formulas": "Точные формулы темпа и дистанции",
    "calc": "Калькулятор",
    "langName": "Русский"
  },
  "fr": {
    "convert": "Conversion des Temps de Natation",
    "guide": "Guide",
    "formulas": "Formules Exactes d Allure et de Distance",
    "calc": "Calculateur",
    "langName": "Français"
  },
  "de": {
    "convert": "Schwimmzeit-Umrechnung",
    "guide": "Leitfaden",
    "formulas": "Genaue Schwimm- und Pace-Formeln",
    "calc": "Rechner",
    "langName": "Deutsch"
  },
  "it": {
    "convert": "Conversione dei Tempi di Nuoto",
    "guide": "Guida",
    "formulas": "Formule Esatte di Passo e Distanza",
    "calc": "Calcolatore",
    "langName": "Italiano"
  },
  "pt": {
    "convert": "Conversão de Tempos de Natação",
    "guide": "Guia",
    "formulas": "Fórmulas Exatas de Ritmo e Distância",
    "calc": "Calculadora",
    "langName": "Português"
  },
  "bn": {
    "convert": "সাঁতারের সময় রূপান্তর",
    "guide": "গাইড",
    "formulas": "সঠিক সাঁতারের গতি এবং দূরত্বের সূত্র",
    "calc": "ক্যালকুলেটর",
    "langName": "বাংলা"
  },
  "ja": {
    "convert": "水泳タイム換算",
    "guide": "ガイド",
    "formulas": "正確なペースと距離の換算計算式",
    "calc": "計算機",
    "langName": "日本語"
  },
  "ko": {
    "convert": "수영 기록 변환",
    "guide": "가이드",
    "formulas": "정확한 페이스 및 거리 환산 공식",
    "calc": "계산기",
    "langName": "한국어"
  },
  "ms": {
    "convert": "Penukaran Masa Renang",
    "guide": "Panduan",
    "formulas": "Formula Tepat Rentak & Jarak Renang",
    "calc": "Kalkulator",
    "langName": "Bahasa Melayu"
  },
  "pl": {
    "convert": "Przelicznik czasów pływackich",
    "guide": "Przewodnik",
    "formulas": "Dokładne wzory na tempo i dystans pływacki",
    "calc": "Kalkulator",
    "langName": "Polski"
  },
  "id": {
    "convert": "Konversi Waktu Renang",
    "guide": "Panduan",
    "formulas": "Rumus Tepat Kecepatan & Jarak Renang",
    "calc": "Kalkulator",
    "langName": "Bahasa Indonesia"
  },
  "ar": {
    "convert": "تحويل أوقات السباحة",
    "guide": "دليل",
    "formulas": "قوانين حساب السرعة ومسافات أحواض السباحة",
    "calc": "حاسبة",
    "langName": "العربية"
  },
  "bg": {
    "convert": "Преобразуване на плувни времена",
    "guide": "Ръководство",
    "formulas": "Точни формули за темпо и дистанции",
    "calc": "Калкулатор",
    "langName": "Български"
  },
  "tr": {
    "convert": "Yüzme Derecesi Dönüşümü",
    "guide": "Rehberi",
    "formulas": "Kesin Yüzme Temposu ve Havuz Formülleri",
    "calc": "Hesaplayıcı",
    "langName": "Türkçe"
  },
  "sv": {
    "convert": "Simtidsomvandling",
    "guide": "Guide",
    "formulas": "Exakta formler för simtakt och bassänglängd",
    "calc": "Räknare",
    "langName": "Svenska"
  }
};

export function getLocalizedPost(postId: string, locale: Locale, defaultData: any): LocalizedBlogMeta {
  const postTranslations = blogTranslations[postId];
  const localized = postTranslations?.[locale];

  if (localized) {
    return {
      title: localized.title || defaultData.title,
      description: localized.description || defaultData.description,
      keywords: localized.keywords || defaultData.keywords || '',
      category: localized.category || defaultData.category || 'Guides',
      lead: localized.lead
    };
  }

  if (locale === 'en' || !genericTerms[locale]) {
    return {
      title: defaultData.title,
      description: defaultData.description,
      keywords: defaultData.keywords || '',
      category: defaultData.category || 'Guides'
    };
  }

  const term = genericTerms[locale];
  const rawTitle = (defaultData.title || postId.replace(/-/g, ' ')).split(':')[0].trim();
  const rawDesc = defaultData.description || `Comprehensive guide and calculations for ${rawTitle}.`;

  return {
    title: `${rawTitle} - ${term.convert} (${term.guide})`,
    description: `${term.convert}: ${rawDesc.length > 80 ? rawDesc.substring(0, 80) + '...' : rawDesc} [${term.formulas}]`,
    keywords: `${rawTitle}, ${term.convert}, ${term.calc}, ${term.guide}, ${term.langName}`,
    category: term.guide
  };
}
