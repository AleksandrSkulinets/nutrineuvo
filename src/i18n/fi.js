const fiTranslations = {
  home: "Etusivu",
  about: "Tietoa",
  blog: "Blogi",
  contacts: "Yhteystiedot",
  language: "Kieli",
  homePage: {
    title: "Nutrineuvo - luotettava kumppanisi matkalla kohti terveellisempää elämää.",
    description: "Nutrineuvo on verkkoalusta, joka auttaa sinua saavuttamaan terveellisemmän elämäntavan räätälöityjen ravitsemussuunnitelmien, asiantuntijaneuvonnan ja helppokäyttöisten ateriasuunnittelutyökalujen avulla. Olitpa sitten noudattamassa erityisruokavaliota tai etsit vain terveellisempiä ruokailuvaihtoehtoja, Nutrineuvo tarjoaa kaiken, mitä tarvitset onnistumiseen."
  },
  hero: {
    title: "Nutrineuvo",
    description: "Nutrineuvo ei ole vain palvelu – se on luotettava kumppani matkallasi kohti terveellisempää elämää.",
    contact: "Ota yhteyttä",
    faq: "Lue UKK",
  },
  aboutsection: {
    title: "Tietoa meistä",
    description:
      "Nutrineuvo on verkkopalvelu, joka tarjoaa räätälöityjä reseptejä, automatisoituja ostoslistoja ja asiantuntevaa ravitsemusneuvontaa. Suunniteltu erityisruokavalioiden yksinkertaistamiseksi, se auttaa käyttäjiä löytämään turvallisia, ravitsevia ja herkullisia aterioita heidän tarpeidensa mukaan. Alusta käyttää edistynyttä teknologiaa luodakseen ruokasuunnitelmia yksilöllisten ruokarajoitusten perusteella, mikä takaa vaivattoman kokemuksen. Automaattiset ostoslistat auttavat käyttäjiä löytämään oikeat ainekset helposti, ja asiantuntijaravitsemusterapeutit tarjoavat asiantuntevaa neuvontaa. Nutrineuvo kehittyy jatkuvasti, ja suunnitelmissa on älykkäiden työkalujen, kuten mobiilisovelluksen, käyttöönotto, mikä parantaa henkilökohtaista ravitsemusta ja tekee erityisruokavalioista helpompia ja kätevämpiä.",
  },
  productsection: {
    title: "Hinnasto",
    description: "Valitse sinulle sopiva suunnitelma ja päivitä se tarvittaessa.",
    plans: {
      consultation: {
        title: "Henkilökohtainen ravitsemusneuvonta",
        price: "€89",
        description: "Kattava analyysi ruokavaliostasi asiantuntevien suositusten kanssa.",
        features: [
          "Esikartoitus: Kysely ruokavaliostasi ja elämäntavoistasi",
          "Ravintoaineanalyysi ja henkilökohtaiset suositukset",
          "Räätälöity lista suositeltavista ja vältettävistä ruoista",
          "Ohjaus ruokavalion ja elämäntavan parantamiseksi",
          "Vastaukset kysymyksiisi",
        ],
        buttonText: "Varaa neuvonta",
      },
      express: {
        title: "Pikaneuvonta",
        price: "€49",
        description: "Nopea asiantuntijaneuvonta ruokavalioosi ja ravitsemuskysymyksiisi.",
        features: [
          "Lyhyt arvio ruokavaliostasi ja parannusehdotukset",
          "Asiantuntijavastaukset yleisiin kysymyksiin (väsymys, ruoansulatus, himot jne.)",
          "Nopea palaute ruokakauppavalinnoistasi",
        ],
        buttonText: "Varaa pikaneuvonta",
      },
      mealplan: {
        title: "Räätälöity ateriasuunnitelma",
        price: "€99",
        description: "Rakenna ateriasuunnitelma lääkärin suositusten mukaan.",
        features: [
          "Ravitsemussuunnitelman luominen lääketieteellisen ohjauksen mukaan",
          "Monipuolinen ja käytännöllinen 1 viikon ateriasuunnitelma",
          "Henkilökohtainen ostoslista",
          "Lisätietoa lisäravinteista ja ruoanlaittovinkeistä",
          "2 päivän tuki kysymyksiin",
          "Pieni muokkaus tarvittaessa",
        ],
        buttonText: "Hanki ateriasuunnitelma",
      },
      coaching: {
        title: "Ravitsemusvalmennus kuukausitilauksena",
        price: "€79/kk",
        description: "Jatkuva tuki ja räätälöity ateriasuunnittelu ravitsemusterapeutilta.",
        features: [
          "1, 3 tai 6 kuukauden valmennusvaihtoehdot",
          "Alkuarviointi tavoitteiden määrittämiseksi",
          "Jatkuva tuki chatin/viestien kautta",
          "Säännöllisesti päivitetyt ateriasuunnitelmat",
          "Henkilökohtainen ostoslista",
          "Muokkaukset edistymisen mukaan",
        ],
        pricingDetails: [
          { duration: "1 kuukausi", price: "€79/kk" },
          { duration: "3 kuukautta", price: "€69/kk" },
          { duration: "6 kuukautta", price: "€59/kk" },
        ],
        buttonText: "Aloita valmennus",
      }
    },
  },
  faq: {
    title: "Usein kysytyt kysymykset",
    booking: {
      question: "Miten varaan ajan ravitsemusterapeutin palveluihin?",
      answer:
        "Voit varata ajan suoraan verkkosivustomme kautta valitsemalla haluamasi palvelun ja sopivan ajankohdan. Saat vahvistuksen sähköpostiisi ja tarvittaessa lisäohjeita ennen konsultaatiota.",
    },
    services: {
      question: "Miten palvelut toteutetaan?",
      answer:
        "Kaikki palvelumme toteutetaan verkossa – joko videopuheluna tai chatin kautta riippuen valitsemastasi palvelusta. Saat myös kirjalliset suositukset ja mahdolliset lisämateriaalit sähköpostiisi konsultaation jälkeen.",
    },
    consultationDifference: {
      question: "Mikä on ero henkilökohtaisen konsultaation ja express-käynnin välillä?",
      answer:
        "Henkilökohtainen konsultaation (60 min) sisältää kattavan ruokavalioanalyysin, yksilölliset suositukset ja ostoslistan. Express-käynti (30 min) on nopea tapa saada asiantuntijan vastauksia tiettyihin kysymyksiin ilman laajaa analyysiä.",
    },
    doctorNote: {
      question: "Tarvitseeko minun toimittaa lääkärin lausunto ruokavaliosuunnitelmaa varten?",
      answer:
        "Kyllä, jos haluat lääkärin suosituksiin perustuvan räätälöidyn ruokavaliosuunnitelman, tarvitsemme lääkärin lausunnon tai ohjeistuksen. Voit toimittaa sen meille sähköpostitse ennen konsultaatiota.",
    },
    dietPlanTiming: {
      question: "Kuinka nopeasti saan räätälöidyn ruokavaliosuunnitelman?",
      answer:
        "Ravitsemusterapeutti laatii ruokavaliosuunnitelman 3 arkipäivän kuluessa konsultaation jälkeen. Saat sen sähköpostiisi yhdessä ostoslistan ja mahdollisten lisäsuositusten kanssa.",
    },
    dietChanges: {
      question: "Mitä tapahtuu, jos tarvitsen muutoksia ruokavaliosuunnitelmaani?",
      answer:
        "Palveluumme sisältyy yksi pieni muutos ruokavaliosuunnitelmaan maksutta. Jos tarvitset suurempia muutoksia tai jatkoseurantaa, suosittelemme ravitsemusvalmennuksen jäsenyyttä.",
    },
    coaching: {
      question: "Kuinka toimii ravitsemusvalmennuksen jäsenyys?",
      answer:
        "Valmennuksen aikana saat henkilökohtaisen ravitsemussuunnitelman ja jatkuvaa tukea ravitsemusterapeutilta. Voit lähettää kysymyksiä chatin kautta ja saada päivityksiä ruokavalioosi kuukausittain.",
    },
    cancellation: {
      question: "Voinko peruuttaa varatun ajan?",
      answer:
        "Kyllä, ajan voi peruuttaa tai siirtää viimeistään 24 tuntia ennen varattua aikaa ilman lisämaksua. Myöhemmin perutuista ajoista veloitetaan 50 % palvelun hinnasta.",
    },
    customerSupport: {
      question: "Kuinka voin ottaa yhteyttä asiakaspalveluun?",
      answer:
        "Voit ottaa yhteyttä asiakaspalveluumme sähköpostitse: info@nutrineuvo.fi. Vastaamme arkisin 24 tunnin kuluessa.",
    },
  },
  blogSection: {
    lastBlogPosts: "Uusimmat blogikirjoitukset"
  },
  blogPage:  {
    "title": "Viimeisimmät blogikirjoitukset",
    "readMore": "Lue lisää",
    "loadMore": "Lataa lisää"
  },
  underConstruction: {
    "title": "Rakenteilla",
    "message": "Tämä sivu on osittain valmis ja saattaa vielä muuttua. Pysy kuulolla ja palaa pian tutustumaan täydellisiin sisältöihin!",
    "close": "Sulje"
  },
  terms: {
    title: "Käyttöehdot – Nutrineuvo",
    description: "Käyttöehdot Nutrineuvolle",
    content: {
      introduction: `Tervetuloa käyttämään Nutrineuvo-palvelua! Palvelumme tarjoaa monipuolisia ravitsemukseen liittyviä neuvoja ja suosituksia, jotka tukevat hyvinvointiasi ja terveellisiä elämäntapojasi. Käyttämällä palveluamme hyväksyt seuraavat käyttöehdot.`,
  
      general: `1. Yleistä
  1.1. Nutrineuvo on Chefboksi Finland Oy:n ("Palveluntarjoaja") tarjoama verkkopalvelu, joka yhdistää erityisruokavalioita noudattavat käyttäjät päteviin ravitsemusterapeutteihin tarjoten yksilöllisiä reseptejä ja ravitsemusneuvontaa heidän tarpeidensa mukaan.
  1.2. Palvelua voi käyttää vain rekisteröitynyt käyttäjä ("Käyttäjä"). Rekisteröitymällä ja käyttämällä palvelua käyttäjä hyväksyy nämä käyttöehdot ("Ehdot").
  1.3. Palveluntarjoajalla on oikeus muuttaa palvelun sisältöä ja ehtoja tarpeen mukaan. Käyttäjälle ilmoitetaan merkittävistä muutoksista.
  1.4. Sopimuskumppanisi kaikissa Verkkokaupassa toteutetuissa ostotapahtumissa on:
  Chefboksi Finland Oy
  Y-tunnus: 3387358-8
  Kotipaikka: Kuopio
  Osoite: Inkiläntie 6, 70340 Kuopio`,
  
      serviceDescription: `2. Palvelun kuvaus
  2.1. Palvelu tarjoaa alustan, jossa käyttäjä voi:
  - löytää ravitsemusterapeutteja ja varata neuvonta-aikoja
  - saada yksilöllisiä reseptejä ja ravitsemusohjeita
  - kommunikoida ravitsemusterapeutin kanssa sovelluksen kautta
  2.2. Palveluntarjoaja ei itse tarjoa ravitsemusneuvontaa vaan toimii alustana, joka yhdistää käyttäjät ja ammattilaiset.
  2.3. Palveluntarjoaja tarjoaa etävälityspalvelun verkkosivustojen ja digitaalisten palvelujen kautta, mahdollistaen asiakkaille pääsyn ravitsemusneuvontaan ja siihen liittyviin palveluihin.`,
  
      registration: `3. Rekisteröityminen ja käyttäjätili
  3.1. Palvelun käyttö edellyttää tilin luomista. Käyttäjän tulee antaa oikeat ja ajantasaiset tiedot.
  3.2. Tilin käyttö on henkilökohtaista, eikä sitä saa siirtää toiselle.
  3.3. Käyttäjä on vastuussa tilinsä turvallisuudesta ja salasanan luottamuksellisuudesta.`,
  
      usage: `4. Palvelun käyttö
  4.1. Palvelua voivat käyttää kaikki 18 vuotta täyttäneet henkilöt. Käyttö voi edellyttää rekisteröitymistä ja käyttäjätilin luomista.
  4.2. Käyttäjä sitoutuu käyttämään palvelua lainmukaisesti ja hyvien tapojen mukaisesti.
  4.3. Käyttäjä ei saa tuottaa palveluun loukkaavaa, harhaanjohtavaa tai epäasiallista sisältöä.`,
  
      paymentsAndCancellations: `5. Maksut ja peruutukset
  5.1. Ravitsemusneuvonta ja muut maksulliset palvelut veloitetaan sovittujen hintojen mukaisesti. Maksut suoritetaan verkkopalvelun kautta.
  5.2. Käyttäjä voi peruuttaa varatun ajan palvelussa määriteltyjen ehtojen mukaisesti.`,
  
      liability: `6. Vastuunrajoitukset
  6.1. Palveluntarjoaja ei vastaa ravitsemusterapeuttien antamien neuvojen oikeellisuudesta tai niiden vaikutuksista käyttäjän terveyteen. Käyttäjän tulee itse varmistaa neuvojen sopivuus ja käyttäjän tulee aina varmistaa ruokavalioon tai terveydentilaan liittyvät muutokset ammattilaisen kanssa.
  6.2. Palveluntarjoaja ei vastaa palvelun keskeytyksistä tai teknisistä ongelmista aiheutuneista vahingoista.`,
  
      privacy: `7. Tietosuoja ja henkilötiedot
  7.1. Käyttäjän henkilötietoja käsitellään tietosuojaselosteen mukaisesti.
  7.2. Palveluntarjoaja voi kerätä anonyymejä käyttötilastoja palvelun kehittämiseksi.`,
  
      ip: `8. Immateriaalioikeudet
  8.1. Palvelun sisältö (ml. reseptit ja sovelluksen ulkoasu) on palveluntarjoajan omaisuutta, ellei toisin mainita. Käyttäjä ei saa kopioida tai jakaa palvelun sisältöä ilman lupaa.`,
  
      legal: `9. Sovellettava laki ja riitojen ratkaisu
  9.1. Näihin ehtoihin sovelletaan Suomen kauppalakia.
  9.2. Mahdolliset erimielisyydet pyritään ratkaisemaan ensisijaisesti neuvottelemalla. Jos sopuun ei päästä, riita käsitellään Helsingin käräjäoikeudessa.`,
  
      contact: `10. Yhteystiedot
  Jos sinulla on kysyttävää näistä käyttöehdoista, voit ottaa meihin yhteyttä osoitteessa info@nutrineuvo.fi.`
    }
  },
  privacyPolicy: {
  title: "Tietosuojaseloste – Nutrineuvo",
  description: "Tietosuojaseloste Nutrineuvolle",
  content: {
    general: `1. Yleistä
Keräämme ja käsittelemme asiakkaidemme ja ravitsemusterapeuttien henkilötietoja. Tarvitsemme näitä tietoja tarjotaksemme ravitsemusneuvontapalvelua ja yksilöllisiä reseptejä palvelun Käyttöehtojen ja Sopimuksen mukaisesti. Yksityisyys on meille tärkeää, ja otamme sen huomioon päivittäisessä toiminnassamme.
Henkilötietojen käsittelyä koskevissa kysymyksissä voit ottaa yhteyttä: Chefboksi Finland Oy, info@nutrineuvo.fi`,

    customerRegistry: `2. Asiakasrekisteri
Asiakasrekisterimme sisältää seuraavat henkilötiedot palvelua käyttävistä asiakkaista ja heidän työntekijöistään:
- Etu- ja sukunimi
- Puhelinnumerot
- Sähköpostiosoitteet
- Maksutiedot
- Käyttäjätilit`,

    therapistRegistry: `3. Ravitsemusterapeuttirekisteri
Ravitsemusterapeuttien rekisterimme sisältää seuraavat henkilötiedot:
- Etu- ja sukunimi
- Puhelinnumerot
- Sähköpostiosoitteet
- Postiosoitteet
- Henkilötunnus
- Pankkitilin numero`,

    dataProcessing: `4. Henkilötietojen käsittely Nutrineuvo-palvelussa
Tietosuojaperiaatteita sovelletaan Nutrineuvo-verkkopalveluun. Käyttäjien tulee antaa suostumus tietojen käsittelyyn ennen palvelun käyttöä. Kirjautuminen ja käyttö edellyttää sähköpostin, puhelinnumeron ja/tai käyttäjänimen käsittelyä.`,

    retention: `5. Tietojen säilytys ja luovutus
Säilytämme henkilötietoja niin kauan kuin henkilö on palvelun käyttäjä. Tietoja voidaan luovuttaa viranomaisille, Nutrineuvon työntekijöille, edustajille ja palveluntarjoajille laillisten tarpeiden mukaan.`,

    security: `6. Tietoturva
Henkilötiedot säilytetään turvallisesti ja niihin pääsee vain työntekijät henkilökohtaisilla käyttäjätunnuksilla. Suojaamme oikeudet tietosuojalainsäädännön mukaisesti.`,

    updates: `7. Päivitykset
Päivitämme selostetta tarvittaessa. Tarkista verkkosivuiltamme ajantasaiset versiot säännöllisesti.`,

    controller: `8. Rekisterinpitäjä
Chefboksi Finland Oy
Y-tunnus: 3387358-8
Kotipaikka: Kuopio
Osoite: Inkiläntie 6, 70340 Kuopio`
  }

}
};



export default fiTranslations;
