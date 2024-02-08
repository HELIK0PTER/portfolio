import React from 'react'

import Image from 'next/image'
import {Hero} from "@/components/Sections/Global/Hero";
import { Section } from '@/components/Sections/Global/Section';

import { missionsData } from '@/lib/entrepriseData'
import {MissionCard} from "@/components/Sections/Cards/MissionCard";

const Entreprise = () => {
  return (
    <>
      <Hero className={``}>
        <Section className={`relative flex flex-col max-h-[100vh]`}>
            <Image alt={`logo DB`} src={`/DB-Cargo-website.png`} width={900} height={900} />
        </Section>
      </Hero>
      <Section className={`bg-gray-950`}>
        <div className={`flex flex-col gap-5`}>
          <h2 className={`text-primary-100 text-3xl font-bold`}>Présentation</h2>
          <p className={`text-primary-200 text-xl`}>
            DB Cargo France est une filiale de DB Cargo, le plus grand
            transporteur de fret ferroviaire en Europe, qui fait partie du groupe Deutsche Bahn. DB Cargo France offre
            des services de transport de marchandises par voie ferroviaire, en mettant l'accent sur la fiabilité,
            l'efficacité et la durabilité. L'entreprise propose une gamme variée de services de logistique et de
            transport, y compris le transport intermodal, le transport de marchandises dangereuses et les solutions
            de transport sur mesure pour différents secteurs industriels.
            En tant que partie du réseau européen de DB Cargo, DB Cargo France bénéficie d'une large couverture
            géographique et est capable de fournir des services de transport à travers l'Europe. L'entreprise
            s'engage également dans des initiatives éco-responsables, en cherchant à réduire son empreinte carbone
            et à promouvoir des solutions de transport plus vertes.
            DB Cargo France joue un rôle clé dans le secteur logistique français, contribuant à la chaîne
            d'approvisionnement et au commerce, tout en soutenant l'objectif plus large de transition vers des
            modes de transport plus durables en Europe.
          </p>
        </div>
      </Section>
      <Section>
        <div className={`flex flex-col items-center gap-5`}>
          <h2 className={`text-primary-100 text-3xl font-bold`}>L'organigrame du DSI</h2>
          <Image alt={`organigrame`} src={`/Organigrame.png`} width={600} height={600} />
        </div>
      </Section>
      <Section className={`bg-gray-950`}>
        <div className={`flex flex-col items-center gap-5`}>
          <h1 className={`text-primary-100 text-3xl font-bold`}>Mes missions</h1>
          <p>
            J'ai travaillé essentiellement avec le Gestionnaire Infrastructure.
            La plupart de mes missions portaient sur du support de niveau 1 et 2. Mais j'ai eut l'occasion
            d'intervenir sur des projets d'infra, base de données et même de développement.
          </p>
        </div>
        <Section full>
          <div className={`columns-1 md:columns-2 gap-8`}>
            { missionsData.map((mission, index) => {
              return (
                <MissionCard key={index} className={`flex flex-col gap-5`}>
                  <h3 className={`text-primary-100 text-2xl font-bold`}>{mission.title}</h3>
                  <p className={`text-primary-200 text-medium`}>
                    {mission.content}
                  </p>
                </MissionCard>
              )
            })}
          </div>

        </Section>
      </Section>
    </>
  )
}

export default Entreprise