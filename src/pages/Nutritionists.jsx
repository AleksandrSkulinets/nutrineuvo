import React from 'react'
import { motion } from 'framer-motion'
const Nutritionists = () => {
  return (
    <motion.div initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="mx-auto max-w-5xl min-h-screen px-4 py-20 text-white">
      <h1 className="mb-12 text-4xl font-black uppercase text-zinc-400"
      >Ravitsemusterapeutti – tule mukaan Nutrineuvoon!</h1>
<p className="mb-6 text-lg text-zinc-500">Nutrineuvo on uusi suomalainen alusta, joka yhdistää asiakkaat ja
ravitsemusterapeutit helposti ja turvallisesti. Haluamme tehdä ravitsemusneuvonnasta
joustavaa, tehokasta ja kannattavaa myös ammattilaiselle. Missiomme on rakentaa
ravitsemuspalveluiden tulevaisuutta: helppoa pääsyä asiantuntevaan tukeen, ilman
jonoja tai välikäsiä – ajasta ja paikasta riippumatta. Uskomme, että jokaisella
ihmisellä on oikeus saada henkilökohtaista ravitsemusohjausta, joka perustuu
tutkittuun tietoon, ei trendeihin. Nutrineuvo tarjoaa ravitsemusterapeuteille
mahdollisuuden työskennellä vapaasti, keskittyä asiakastyöhön ja kasvattaa omaa
asiakaskuntaa luotettavan ja nykyaikaisen alustan avulla. Saat käyttöön valmiit
palvelurakenteet, joustavan ajanvarausjärjestelmän, jatkuvan näkyvyyden ja
asiantuntevan tiimin tuen. Lisäksi tarjoamme ravitsemusterapeuteille ammattimaisen
ja helppokäyttöisen blogialustan, jonka avulla voit jakaa osaamistasi, kasvattaa
näkyvyyttäsi ja tavoittaa uusia asiakkaita. Nutrineuvo on enemmän kuin työalusta –
se on yhteisö, jossa sinulla on vapaus, turva ja mahdollisuus kasvaa alan mukana.
Liity mukaan luomaan uutta tapaa tehdä ravitsemusneuvontaa Suomessa – helposti,
vastuullisesti ja kannattavasti.</p>
    </motion.div>
  )
}

export default Nutritionists
