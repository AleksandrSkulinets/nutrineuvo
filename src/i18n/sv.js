const svTranslations = {
  home: "Hem",
  about: "Om",
  blog: "Blogg",
  contacts: "Kontakter",
  language: "Språk",
  homePage: {
    title: "Nutrineuvo - din pålitliga partner på din resa mot ett hälsosammare liv.",
    description: "Nutrineuvo är en online-tjänst som hjälper dig att uppnå en hälsosammare livsstil med personliga kostplaner, expertvägledning och användarvänliga måltidsplaneringsverktyg. Oavsett om du följer en speciell diet eller söker hälsosammare matalternativ, erbjuder Nutrineuvo allt du behöver för att lyckas."
  },
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
  blogPage:  {
    "title": "Senaste blogginlägg",
    "readMore": "Läs mer",
    "loadMore": "Ladda mer"
  },
  underConstruction: {
    "title": "Under konstruktion",
    "message": "Den här sidan är delvis färdig och kan fortfarande ändras. Håll dig uppdaterad och kom snart tillbaka för att utforska det fullständiga innehållet!",
    "close": "Stäng"
  },
  terms: {
    title: "Användarvillkor",
    description: "Välkommen till Nutrineuvo! Genom att använda vår tjänst godkänner du följande användarvillkor.",
    section1: {
      title: "Allmänt",
      content: "Nutrineuvo är en onlineplattform som tillhandahålls av Chefboksi Finland Oy och kopplar samman användare med professionella dietister."
    },
    section2: {
      title: "Tjänstebeskrivning",
      content: "Tjänsten tillhandahåller en plattform där användare kan boka konsultationer, få personliga recept och kommunicera med experter."
    },
    section3: {
      title: "Registrering och användarkonto",
      content: "För att använda tjänsten krävs att ett konto skapas. Användaren måste tillhandahålla korrekta och aktuella uppgifter."
    },
    section4: {
      title: "Användning av tjänsten",
      content: "Tjänsten är tillgänglig för personer över 18 år. Användare förbinder sig att använda tjänsten lagligt."
    },
    section5: {
      title: "Betalningar och avbokningar",
      content: "Näringsrådgivning och andra betalda tjänster debiteras enligt överenskomna priser."
    },
    section6: {
      title: "Ansvarsbegränsningar",
      content: "Tjänsteleverantören ansvarar inte för riktigheten av dietisternas råd eller deras inverkan på användarens hälsa."
    },
    section7: {
      title: "Integritet och personuppgifter",
      content: "Användarnas personuppgifter behandlas i enlighet med sekretesspolicyn."
    },
    section8: {
      title: "Immateriella rättigheter",
      content: "Tjänstens innehåll tillhör leverantören om inte annat anges."
    },
    section9: {
      title: "Tillämplig lag och tvistlösning",
      content: "Dessa villkor regleras av finsk handelslag. Tvister löses i första hand genom förhandling."
    },
    section10: {
      title: "Kontaktinformation",
      content: "Om du har några frågor, vänligen kontakta oss på info@nutrineuvo.fi."
    }
  },
  privacyPolicy: {
    title: "Integritetspolicy",
    general: {
      title: "Allmänt",
      content: "Vi samlar in och behandlar personuppgifter om våra kunder och nutritionister. Vi behöver dessa uppgifter för att erbjuda näringsrådgivning och personliga recept enligt tjänstens användarvillkor och avtal. Integritet är viktigt för oss, och vi beaktar det i vår dagliga verksamhet. Vid frågor om behandling av personuppgifter kan du kontakta: Chefboksi Finland Oy, info@nutrineuvo.fi"
    },
    customerRegistry: {
      title: "Kundregister",
      content: "Vårt kundregister innehåller följande personuppgifter om kunder och deras anställda som använder tjänsten: För- och efternamn, Telefonnummer, E-postadresser, Betalningsinformation, Användarkonton."
    },
    nutritionistRegistry: {
      title: "Näringsspecialistregister",
      content: "Vårt register för näringsspecialister innehåller följande personuppgifter om näringsspecialister som använder tjänsten: För- och efternamn, Telefonnummer, E-postadresser, Postadresser, Personnummer, Bankkontonummer."
    },
    dataProcessing: {
      title: "Behandling av personuppgifter i Nutrineuvo-tjänsten",
      content: "Dessa integritetsprinciper gäller för behandling av data i Nutrineuvo-webbtjänsten. För närvarande är tjänsten tillgänglig på en onlineplattform där användare kan dra nytta av näringsrådgivning och personliga recept. Inloggning och användning av tjänsten kräver användarens samtycke för behandling av e-post, telefonnummer och/eller användarnamn under nutrineuvo.fi-domänen. Användaren måste ge samtycke till behandling av de uppgifter som krävs i kundregistret innan tjänsten används."
    }
  }
};



export default svTranslations;
