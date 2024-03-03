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
      
    </>
  )
}

export default Realisation