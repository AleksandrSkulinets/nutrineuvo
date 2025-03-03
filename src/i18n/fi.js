const fiTranslations = {
  home: "Etusivu",
  about: "Tietoa",
  blog: "Blogi",
  contacts: "Yhteystiedot",
  language: "Kieli",
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
  
};



export default fiTranslations;
