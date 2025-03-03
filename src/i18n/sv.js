const svTranslations = {
  home: "Hem",
  about: "Om",
  blog: "Blogg",
  contacts: "Kontakter",
  language: "Språk",
  hero: {
    title: "Nutrineuvo",
    description: "Nutrineuvo är inte bara en tjänst – det är en pålitlig partner på din resa mot ett hälsosammare liv.",
    contact: "Kontakta oss",
    faq: "Läs FAQ",
  },
  aboutsection: {
    title: "Om oss",
    description:
      "Nutrineuvo är en online-tjänst som erbjuder personliga recept, automatiserade inköpslistor och expertstöd från en näringsexpert. Tjänsten är designad för att förenkla speciella dieter och hjälper användare att hitta säkra, näringsrika och läckra måltider som passar deras behov. Plattformen använder avancerad teknologi för att skapa måltidsplaner baserade på individuella kostbegränsningar och säkerställer en problemfri upplevelse. Med automatiserade inköpslistor kan användarna enkelt hitta rätt ingredienser, medan tillgången till professionella näringsexperter erbjuder vägledning. Nutrineuvo fortsätter att utvecklas, med planer på att introducera smarta verktyg som en mobilapp, vilket ytterligare förbättrar personlig näring och gör speciella dieter enklare och mer bekväma.",
  },
  productsection: {
    title: "Våra Prisplaner",
    description: "Välj en plan som passar dina behov och uppgradera när du är redo.",
    plans: {
      consultation: {
        title: "Personlig Näringsrådgivning",
        price: "€89",
        description: "En omfattande analys av din kost med expertrekommendationer.",
        features: [
          "Förbedömning: En enkät om din kost och livsstil",
          "Kostanalys och personliga rekommendationer",
          "En skräddarsydd lista med rekommenderade och undvikbara livsmedel",
          "Vägledning för att förbättra din kost och livsstil",
          "Svar på dina frågor",
        ],
        buttonText: "Boka rådgivning",
      },
      express: {
        title: "Expressrådgivning",
        price: "€49",
        description: "Snabb expertvägledning för dina kost- och näringsfrågor.",
        features: [
          "Kort bedömning av din kost och förbättringsförslag",
          "Expertanalyser av vanliga frågor (trötthet, matsmältning, sug, etc.)",
          "Snabb feedback om dina matval",
        ],
        buttonText: "Boka expressrådgivning",
      },
      mealplan: {
        title: "Skräddarsydd Måltidsplan",
        price: "€99",
        description: "En strukturerad måltidsplan baserad på din läkares rekommendationer.",
        features: [
          "Kostplan skapad utifrån medicinska rekommendationer",
          "En mångsidig och praktisk 1-vecka måltidsplan",
          "En personlig inköpslista",
          "Ytterligare kosttillskott och matlagningsråd",
          "2-dagars support för uppföljningsfrågor",
          "En liten justering vid behov",
        ],
        buttonText: "Få Måltidsplan",
      },
      coaching: {
        title: "Näringscoachning Abonnemang",
        price: "€79/mån",
        description: "Löpande stöd och skräddarsydd måltidsplanering med en näringsexpert.",
        features: [
          "1, 3 eller 6-månaders coachningsalternativ",
          "Initial konsultation för att definiera mål",
          "Löpande stöd via chatt/meddelanden",
          "Regelbundet uppdaterade måltidsplaner",
          "Personlig inköpslista",
          "Justeringar baserade på framsteg",
        ],
        pricingDetails: [
          { duration: "1 månad", price: "€79/mån" },
          { duration: "3 månader", price: "€69/mån" },
          { duration: "6 månader", price: "€59/mån" },
        ],
        buttonText: "Starta Coaching",
      }
    },
  },
  faq: {
    title: "Vanliga frågor",
    booking: {
      question: "Hur bokar jag ett möte med en näringsrådgivare?",
      answer:
        "Du kan boka ett möte direkt via vår webbplats genom att välja den tjänst du vill ha och en lämplig tid. Du kommer att få en bekräftelse via e-post och eventuella ytterligare instruktioner innan konsultationen.",
    },
    services: {
      question: "Hur tillhandahålls tjänsterna?",
      answer:
        "Alla våra tjänster utförs online, antingen via videosamtal eller chatt beroende på vilken tjänst du väljer. Du får även skriftliga rekommendationer och eventuellt ytterligare material via e-post efter konsultationen.",
    },
    consultationDifference: {
      question: "Vad är skillnaden mellan en personlig konsultation och ett expressmöte?",
      answer:
        "En personlig konsultation (60 min) inkluderar en omfattande kostnadsanalys, individuella rekommendationer och en inköpslista. Ett expressmöte (30 min) är ett snabbt sätt att få expertsvar på specifika frågor utan en detaljerad analys.",
    },
    doctorNote: {
      question: "Behöver jag lämna ett läkarintyg för en personlig kostplan?",
      answer:
        "Ja, om du vill ha en personlig kostplan baserad på läkarens rekommendationer behöver vi ett läkarintyg eller instruktioner. Du kan skicka det till oss via e-post innan konsultationen.",
    },
    dietPlanTiming: {
      question: "Hur snabbt får jag en anpassad kostplan?",
      answer:
        "Näringsrådgivaren kommer att skapa din kostplan inom 3 arbetsdagar efter konsultationen. Du kommer att få den via e-post tillsammans med en inköpslista och eventuella ytterligare rekommendationer.",
    },
    dietChanges: {
      question: "Vad händer om jag behöver ändra min kostplan?",
      answer:
        "Vår tjänst inkluderar en mindre förändring av din kostplan utan extra kostnad. Om du behöver större förändringar eller uppföljning rekommenderar vi vårt medlemskap för näringscoaching.",
    },
    coaching: {
      question: "Hur fungerar medlemskapet för näringscoaching?",
      answer:
        "Under coachingprogrammet får du en personlig kostplan och löpande stöd från näringsrådgivaren. Du kan skicka frågor via chatt och få månadsvisa uppdateringar till din kostplan.",
    },
    cancellation: {
      question: "Kan jag avboka mitt möte?",
      answer:
        "Ja, du kan avboka eller flytta ditt möte senast 24 timmar innan bokad tid utan extra avgift. Senare avbokningar kommer att debiteras 50 % av servicepriset.",
    },
    customerSupport: {
      question: "Hur kontaktar jag kundsupport?",
      answer:
        "Du kan kontakta vår kundsupport via e-post på info@nutrineuvo.fi. Vi svarar inom 24 timmar på vardagar.",
    },
  },
  blogSection: {
    lastBlogPosts: "Senaste blogginlägg"
  },
};



export default svTranslations;
