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
        <h1 className={`text-success text-4xl`}>
            Mes Réalisations
        </h1>
        <h2 className={`text-primary-400 text-opacity-70 text-2xl`}>
          Professionnelles, Scolaire et Personnelles
        </h2>
      </Hero>
      <Section className={`bg-success min-h-[400px]`}>
        <div className={`flex justify-start font-bold bg-primary-100 mb-5 rounded-md text-primary`}>
          <button onClick={() => setRealisations('ALL')} 
          className={`p-3 rounded-s-md text-medium md:hover:bg-success-100 transition duration-250`}
          {...realisations === 'ALL' && {className: 'p-3 rounded-s-md text-medium bg-success-100'}}
          >Tout</button>
          <Divider orientation="vertical" />
          <button onClick={() => setRealisations('PRO')} 
          className={`p-3 text-medium md:hover:bg-success-100 transition duration-250`}
          {...realisations === 'PRO' && {className: 'p-3 text-medium bg-success-100'}}
          >Professionnelles</button>
          <Divider orientation="vertical" />
          <button onClick={() => setRealisations('SCOLAIRE')} 
          className={`p-3 text-medium md:hover:bg-success-100 transition duration-250`}
          {...realisations === 'SCOLAIRE' && {className: 'p-3 text-medium bg-success-100'}}
          >Scolaire</button>
          <Divider orientation="vertical" />
          <button onClick={() => setRealisations('PERSO')} 
          className={`p-3 rounded-e-md text-medium md:hover:bg-success-100 transition duration-100`}
          {...realisations === 'PERSO' && {className: 'p-3 rounded-e-md text-medium bg-success-100'}}
          >Personnelles</button>
        </div>
        
        <Masonry columns={{xs: 1, md: 3}} spacing={2}>
          
          {filteredRealisations.map((realisation, index) => {
            return (
              <div key={index}>
                <Card className="py-4 hover:scale-[102%] hover:cursor-pointer">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-large uppercase font-bold text-primary">{realisation.title}</p>
                  </CardHeader>
                  <CardBody>
                    <p className={`text-medium text-opacity-70`}>{realisation.description}</p>
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