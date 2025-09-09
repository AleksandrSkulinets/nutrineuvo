import React from 'react'
import { motion } from 'framer-motion'

const Nutrition = () => {
  return (
    <motion.div initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mx-auto max-w-5xl min-h-screen px-4 py-20 text-white">
      <h1
       
        className="mb-12 text-4xl font-black uppercase text-zinc-400"
      >
        Ravitsemusterapia Nutrineuvossa
      </h1>

      <h2
        
        className="mb-8 text-2xl font-semibold text-zinc-300"
      >
        Hyvinvointia ravitsemuksen keinoin
      </h2>

      <p className="mb-6 text-lg text-zinc-500"
      >
        Ravitsemusterapia on yksilöllistä, asiantuntevaa tukea silloin, kun oma ruokavalio mietityttää
        tai kun haluat tukea terveyttä ja hyvinvointia ravinnon avulla. Nutrineuvossa ravitsemusterapia
        nähdään kokonaisvaltaisena keinona vahvistaa jaksamista, ennaltaehkäistä sairauksia ja tehdä
        ruokailusta toimiva osa arkea.
      </p>

      <h3 className="mt-10 mb-4 text-xl font-semibold text-zinc-300">
        Mikä on ravitsemusterapia?
      </h3>
      <p className="mb-6 text-lg text-zinc-500">
        Ravitsemusterapia on laillistetun ravitsemusterapeutin tarjoamaa hoitoa ja ohjausta, joka perustuu
        ravitsemustieteeseen ja lääketieteelliseen tutkimukseen. Ohjauksessa huomioidaan asiakkaan
        terveydentila, elämäntilanne, ruokailutottumukset ja tavoitteet – niin sairauksien hoidossa kuin
        ennaltaehkäisyssä tai elämäntapamuutoksissa.
      </p>

      <h3 className="mt-10 mb-4 text-xl font-semibold text-zinc-300">
        Kenelle ravitsemusterapia sopii?
      </h3>
      <ul className="list-disc list-inside mb-6 text-lg text-zinc-500 space-y-2">
        <li>Pitkäaikaissairaudet: diabetes, keliakia, sydän- ja verisuonisairaudet</li>
        <li>Ruoansulatusongelmat ja suolistosairaudet: IBS, närästys, ummetus</li>
        <li>Syömishäiriöt tai erityisruokavaliot</li>
        <li>Ylipaino, alipaino tai painonhallinta</li>
        <li>Elämäntapamuutokset tai suorituskyvyn parantaminen (esim. urheilijoille)</li>
      </ul>

      <h3 className="mt-10 mb-4 text-xl font-semibold text-zinc-300">
        Miten ravitsemusterapia etenee?
      </h3>
      <p className="mb-6 text-lg text-zinc-500">
        Ensimmäisellä käynnillä ravitsemusterapeutti kartoittaa ruokavaliosi kokonaiskuvan – sen
        vahvuudet, kehityskohdat sekä mahdolliset sairaudet tai oireet. Yhdessä asetetaan realistiset
        tavoitteet ja sovitaan seurannasta. Ravitsemusterapia voi olla kertaluonteista ohjausta tai
        pidempää, vaiheittaista muutostyötä – juuri tarpeidesi mukaan.
      </p>

      <h3 className="mt-10 mb-4 text-xl font-semibold text-zinc-300">
        Ravitsemusterapeutin vinkit vatsan hyvinvointiin
      </h3>
      <ul className="list-disc list-inside mb-6 text-lg text-zinc-500 space-y-2">
        <li>Syö säännöllisesti 3–4 tunnin välein</li>
        <li>Rauhoitu ruokahetkiin – syö pöydän ääressä</li>
        <li>Pureskele hyvin, vältä hotkimista</li>
        <li>Varmista riittävä ja monipuolinen ravinto</li>
        <li>Käänny ammattilaisen puoleen, jos vatsavaivat jatkuvat</li>
      </ul>

      <p className="mt-10 mb-6 text-lg text-zinc-500">
        Ravitsemusterapia on sijoitus omaan hyvinvointiisi. Olipa kyse sairauden hoidosta,
        ravitsemuksen hienosäädöstä tai koko ruokavalion remontista, Nutrineuvon asiantuntevat
        ravitsemusterapeutit ovat tukenasi.
      </p>

      <h3 className="mt-10 mb-4 text-xl font-semibold text-zinc-300">
        Ota askel kohti parempaa vointia
      </h3>
      <p className="mb-6 text-lg text-zinc-500">
        Haluatko keskustella omasta ruokavaliostasi? Varaa aika Nutrineuvon ravitsemusterapeutille ja
        aloita hyvinvointiasi tukeva muutos jo tänään.
      </p>

      <div className="flex gap-4 mt-6">
        <button className="px-6 py-3 rounded-2xl bg-zinc-700 hover:bg-zinc-600 transition">Ota yhteyttä</button>
        <button className="px-6 py-3 rounded-2xl bg-green-600 hover:bg-green-500 transition">☎️ Varaa aika</button>
      </div>
    </motion.div>
  )
}

export default Nutrition
