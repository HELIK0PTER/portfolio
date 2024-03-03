import React from 'react'

import Image from 'next/image'
import {Hero} from "@/components/Sections/Global/Hero";
import { Section } from '@/components/Sections/Global/Section';

import { missionsData } from '@/lib/entrepriseData'
import {Card, CardBody, CardHeader} from "@nextui-org/react";

const Entreprise = () => {
  return (
    <>
      <Hero className={``}>
        <Section className={`relative flex flex-col max-h-[100vh]`}>
            <Image alt={`logo DB`} src={`/DB-Cargo-website.png`} width={900} height={900} />
        </Section>
      </Hero>
      <Section className={`bg-success`}>
        <div className={`flex flex-col gap-5`}>
          <h2 className={`text-primary-200 text-3xl font-bold`}>Présentation</h2>
          <p className={`text-lg`}>
            {`DB Cargo France, filiale du leader européen DB Cargo du groupe Deutsche Bahn, offre des services de fret
            ferroviaire axés sur la fiabilité, l'efficacité et la durabilité. Elle propose des solutions logistiques
            variées, dont le transport intermodal et de marchandises dangereuses, bénéficiant d'une vaste couverture
            européenne. Engagée dans l'éco-responsabilité, elle vise à réduire son empreinte carbone et favoriser le
            transport vert, jouant un rôle majeur dans la logistique française et la transition vers une mobilité
            durable en Europe.`}
          </p>
        </div>
      </Section>
      <Section>
        <div className={`flex flex-col items-center gap-5`}>
          <h2 className={`text-success text-3xl font-bold`}>L'organigrame du DSI</h2>
          <Image alt={`organigrame`} src={`/Organigrame.png`} width={600} height={600} />
        </div>
      </Section>
      <Section className={`bg-success`}>
        <div className={`flex flex-col items-center gap-5`}>
          <h1 className={`text-primary-50 text-3xl font-bold`}>Mes missions</h1>
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
                <Card key={index} className={`px-1 py-4 hover:scale-[102%]`}>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h3 className={`text-primary-500 text-2xl font-bold`}>{mission.title}</h3>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <p className={`text-primary text-medium`}>
                      {mission.content}
                    </p>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </Section>
      </Section>
    </>
  )
}

export default Entreprise