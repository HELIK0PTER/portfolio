'use client'

import Image from 'next/image'
import { Divider } from '@nextui-org/react';

import {realisationsData} from "@/app/realisations/realisationsData";
import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"

import {Section} from "@/components/Sections/Global/Section";
import {H2} from "@/components/Sections/Global/Title";


const MWA = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/motorized-wide-area')
  if (!lib) return <div>404</div>
  return (
    <>
    <DefaultRealisation title={lib?.title} description={lib?.description} />
    <Section color="success" className={`pb-0 md:pb-14`} full={true}>
      {/* 
        -Cahier des Charges (UML, Use Case, Gantt)
        -Cahier Technique (UML, Modele Relationnel, Gantt)
        -Ticketing et Gantt sur Jira
        -Maquettes
        -Capture de la Base de Données
        */}
      <H2 color='white'>Cahier des Charges</H2>
      <div className='h-[800px] overflow-y-auto'>
        <Image src="/realisations/motorizedWideArea/cahier-des-charges.png" alt="Cahier des Charges" width={1920} height={1080} className='w-[800px]'/>
      </div>

      <br />
      <Divider />

      <H2 color='white'>Cahier Technique</H2>
      <div className='h-[800px] overflow-y-auto'>
        <Image src="/realisations/motorizedWideArea/cahier-technique.png" alt="Cahier Technique" width={1920} height={1080} className='w-[800px]'/>
      </div>

      <br />
      <Divider />

      <H2 color='white'>Ticketing et Gantt sur Jira</H2>
      <div className='h-[800px] overflow-y-auto'>
        <Image src="/realisations/motorizedWideArea/ticketing-jira.png" alt="Ticketing et Gantt sur Jira" width={1920} height={1080} className='w-[800px]'/>
      </div>

      <br />
      <Divider />

      <H2 color='white'>Maquettes</H2>
      <div className='p-3 bg-gray-400 bg-opacity-50 rounded-md'>
        <div className='h-[800px] overflow-y-auto'>
          <Image src="/realisations/motorizedWideArea/Maquettes/m3.png" alt="Maquettes" width={1920} height={1080} className='w-[800px] mb-5'/>
          <Image src="/realisations/motorizedWideArea/Maquettes/m1.png" alt="Maquettes" width={1920} height={1080} className='w-[800px] mb-5'/>
          <Image src="/realisations/motorizedWideArea/Maquettes/m2.png" alt="Maquettes" width={1920} height={1080} className='w-[800px]'/>
        </div>
      </div>

      <br />
      <Divider />

      <H2 color='white'>Capture de la Base de Données</H2>
      <Image src="/realisations/motorizedWideArea/bdd.png" alt="Capture de la Base de Données" width={1920} height={1080} className='w-[1000px]'/>
    </Section>
    </>
  );
}

export default MWA;