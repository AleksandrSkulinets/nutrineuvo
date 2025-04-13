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
    title: "Käyttöehdot",
    description: "Tervetuloa käyttämään Nutrineuvo-palvelua! Käyttämällä palveluamme hyväksyt seuraavat käyttöehdot.",
    section1: {
      title: "Yleistä",
      content: "Nutrineuvo on Chefboksi Finland Oy:n tarjoama verkkopalvelu, joka yhdistää erityisruokavalioita noudattavat käyttäjät päteviin ravitsemusterapeutteihin."
    },
    section2: {
      title: "Palvelun kuvaus",
      content: "Palvelu tarjoaa alustan, jossa käyttäjä voi varata neuvonta-aikoja, saada yksilöllisiä reseptejä ja kommunikoida asiantuntijoiden kanssa."
    },
    section3: {
      title: "Rekisteröityminen ja käyttäjätili",
      content: "Palvelun käyttö edellyttää tilin luomista. Käyttäjän tulee antaa oikeat ja ajantasaiset tiedot."
    },
    section4: {
      title: "Palvelun käyttö",
      content: "Palvelua voivat käyttää kaikki 18 vuotta täyttäneet henkilöt. Käyttäjä sitoutuu käyttämään palvelua lainmukaisesti."
    },
    section5: {
      title: "Maksut ja peruutukset",
      content: "Ravitsemusneuvonta ja muut maksulliset palvelut veloitetaan sovittujen hintojen mukaisesti."
    },
    section6: {
      title: "Vastuunrajoitukset",
      content: "Palveluntarjoaja ei vastaa ravitsemusterapeuttien antamien neuvojen oikeellisuudesta tai niiden vaikutuksista käyttäjän terveyteen."
    },
    section7: {
      title: "Tietosuoja ja henkilötiedot",
      content: "Käyttäjän henkilötietoja käsitellään tietosuojaselosteen mukaisesti."
    },
    section8: {
      title: "Immateriaalioikeudet",
      content: "Palvelun sisältö on palveluntarjoajan omaisuutta, ellei toisin mainita."
    },
    section9: {
      title: "Sovellettava laki ja riitojen ratkaisu",
      content: "Näihin ehtoihin sovelletaan Suomen kauppalakia. Mahdolliset erimielisyydet pyritään ratkaisemaan ensisijaisesti neuvottelemalla."
    },
    section10: {
      title: "Yhteystiedot",
      content: "Jos sinulla on kysyttävää, voit ottaa meihin yhteyttä osoitteessa info@nutrineuvo.fi."
    }
  },
  privacyPolicy: {
    title: "Tietosuojaseloste",
    general: {
      title: "Yleistä",
      content: "Keräämme ja käsittelemme asiakkaidemme ja ravitsemusterapeuttien henkilötietoja. Tarvitsemme näitä tietoja tarjotaksemme ravitsemusneuvontapalvelua ja yksilöllisiä reseptejä palvelun Käyttöehtojen ja Sopimuksen mukaisesti. Yksityisyys on meille tärkeää, ja otamme sen huomioon päivittäisessä toiminnassamme. Henkilötietojen käsittelyä koskevissa kysymyksissä voit ottaa yhteyttä: Chefboksi Finland Oy, info@nutrineuvo.fi"
    },
    customerRegistry: {
      title: "Asiakasrekisteri",
      content: "Asiakasrekisterimme sisältää seuraavat henkilötiedot palvelua käyttävistä asiakkaista ja heidän työntekijöistään: Etu- ja sukunimi, Puhelinnumerot, Sähköpostiosoitteet, Maksutiedot, Käyttäjätilit."
    },
    nutritionistRegistry: {
      title: "Ravitsemusterapeuttirekisteri",
      content: "Ravitsemusterapeuttien rekisterimme sisältää seuraavat henkilötiedot palvelua käyttävistä ravitsemusterapeuteista: Etu- ja sukunimi, Puhelinnumerot, Sähköpostiosoitteet, Postiosoitteet, Henkilötunnus, Pankkitilin numero."
    },
    dataProcessing: {
      title: "Henkilötietojen käsittely Nutrineuvo-palvelussa",
      content: "Näitä tietosuojaperiaatteita sovelletaan Nutrineuvo-verkkopalvelun tietojen käsittelyyn. Tällä hetkellä palvelu on saatavilla verkkopohjaisella alustalla, jossa käyttäjät voivat hyödyntää ravitsemusneuvontaa ja yksilöllisiä reseptejä. Palveluun kirjautuminen ja sen käyttö edellyttävät käyttäjän suostumusta sähköpostin, puhelinnumeron ja/tai käyttäjänimen käsittelyyn nutrineuvo.fi-verkkotunnuksen alla. Käyttäjän tulee antaa suostumus asiakasrekisterissä vaadittujen tietojen käsittelyyn ennen palvelun käyttöä."
    }
  }
};



export default fiTranslations;
