'use client'

import React from 'react'


import {realisationsData} from "@/lib/realisationsData";

import {Hero} from "@/components/Sections/Global/Hero";
import {Section} from "@/components/Sections/Global/Section";
import {RealisationCard} from "@/components/Sections/Cards/RealisationCard";

const Realisation = () => {
  const [realisations, setRealisations] =
  React.useState<'ALL' | 'PRO' | 'PERSO' | 'SCOLAIRE'>('ALL')
  return (
    <>
      <Hero>
        <h1 className={`text-primary-200 text-4xl`}>
            Réalisations
        </h1>
        <h2 className={`text-primary-400 text-opacity-70 text-2xl`}>
          Professionnelles, Scolaire et Personnelles
        </h2>
      </Hero>
      <Section className={`bg-gray-950 min-h-[400px]`}>
        <div className={`flex justify-start gap-4`}>
          <button onClick={() => setRealisations('ALL')} className={`text-primary-100 text-medium`}>Tout</button>
          <button onClick={() => setRealisations('PRO')} className={`text-primary-100 text-medium`}>Professionnelles
          </button>
          <button onClick={() => setRealisations('SCOLAIRE')} className={`text-primary-100 text-medium`}>Scolaire
          </button>
          <button onClick={() => setRealisations('PERSO')} className={`text-primary-100 text-medium`}>Personnelles
          </button>
        </div>
        <div className={`flex gap-8`}>

          {
            realisations === 'ALL' &&
            realisationsData.map((realisation, index) => {
              return (
                <RealisationCard link={realisation.link} key={index}>
                  <h3 className={`text-primary-100 text-2xl font-bold`}>{realisation.title}</h3>
                  <p className={`text-primary-200 text-medium`}>
                    {realisation.description}
                  </p>
                </RealisationCard>
              )
            })
          }
          {
            realisations === 'PRO' &&
            realisationsData.map((realisation, index) => {
              if (realisation.value === 'PRO') {
                return (
                  <RealisationCard link={realisation.link} key={index}>
                    <h3 className={`text-primary-100 text-2xl font-bold`}>{realisation.title}</h3>
                    <p className={`text-primary-200 text-medium`}>
                      {realisation.description}
                    </p>
                  </RealisationCard>
                )
              }
            })
          }
          {
            realisations === 'SCOLAIRE' &&
            realisationsData.map((realisation, index) => {
              if (realisation.value === 'SCOLAIRE') {
                return (
                  <RealisationCard link={realisation.link} key={index}>
                    <h3 className={`text-primary-100 text-2xl font-bold`}>{realisation.title}</h3>
                    <p className={`text-primary-200 text-medium`}>
                      {realisation.description}
                    </p>
                  </RealisationCard>
                )
              }
            })
          }
          {
            realisations === 'PERSO' &&
            realisationsData.map((realisation, index) => {
              if (realisation.value === 'PERSO') {
                return (
                  <RealisationCard link={realisation.link} key={index}>
                    <h3 className={`text-primary-100 text-2xl font-bold`}>{realisation.title}</h3>
                    <p className={`text-primary-200 text-medium`}>
                      {realisation.description}
                    </p>
                  </RealisationCard>
                )
              }
            })
          }

        </div>
      </Section>
    </>
  )
}

export default Realisation