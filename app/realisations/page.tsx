'use client'

import React from 'react'


import {realisationsData} from "@/lib/realisationsData";

import {Hero} from "@/components/Sections/Global/Hero";
import {Section} from "@/components/Sections/Global/Section";
import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import { Masonry } from "@mui/lab";

const Realisation = () => {
  const [realisations, setRealisations] =
  React.useState<'ALL' | 'PRO' | 'PERSO' | 'SCOLAIRE'>('ALL')
  
  const filteredRealisations = realisationsData.filter((realisation) => {
    if (realisations === 'ALL') return realisation
    else return realisation.value === realisations;
  })
  
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
        
        <Masonry columns={{xs: 1, md: 3}} spacing={2}>
          
          {filteredRealisations.map((realisation, index) => {
            return (
              <div>
                <Card key={index} className="py-4 hover:scale-[102%] hover:cursor-pointer">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-large uppercase font-bold">{realisation.title}</p>
                  </CardHeader>
                  <CardBody>
                    <p className={`text-medium text-primary-100 text-opacity-70`}>{realisation.description}</p>
                  </CardBody>
                </Card>
              </div>
            )
          })}

        </Masonry>
      </Section>
    </>
  )
}

export default Realisation