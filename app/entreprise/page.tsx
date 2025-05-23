import React from 'react'

import Image from 'next/image'
import {Hero} from "@/components/Sections/Global/Hero";
import { Section } from '@/components/Sections/Global/Section';

import { missionsData } from '@/lib/entrepriseData'
import { Mission } from './Mission';

const Entreprise = () => {
  return (
    <>
      <Hero className={``}>
        <Section className={`relative flex flex-col max-h-[100vh]`}>
            <Image alt={`logo DB`} src={`/entreprise/DB-Cargo-website.png`} width={1200} height={1200} />
        </Section>
      </Hero>
      <Section color={`success`}>
        <div className={`flex flex-col gap-5`}>
          <h2 className={`mb-12 text-primary-200 text-3xl font-bold`}>Présentation</h2>
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
          <h2 className={`mb-12 text-success text-3xl font-bold`}>L'organigrame du DSI</h2>
          <Image alt={`organigrame`} src={`/entreprise/Organigrame.png`} width={600} height={600} />
        </div>
      </Section>
      <Section color={`success`}>
        <h1 className={`mb-12 text-primary-50 text-3xl font-bold`}>Mon quotidien</h1>
        
        <div className=' w-full'>
          <div className={`columns-1 md:columns-2 lg:columns-3 gap-8`}>
            { missionsData.map((mission, index) => {
              return (
                <Mission key={index} title={mission.title} content={mission.content} outils={mission.outils} annee={mission.annee}/>
              )
            })}
          </div>
        </div>
      </Section>
    </>
  )
}

export default Entreprise