'use client'

import Link from 'next/link';
import Image from 'next/image'
import { Divider } from '@nextui-org/react';

import {realisationsData} from "@/app/realisations/realisationsData";
import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"

import {Section} from "@/components/Sections/Global/Section";
import {H2} from "@/components/Sections/Global/Title";


const Wiki = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/migration-wiki')
  if (!lib) return <div>404</div>
  return (
    <>
    <DefaultRealisation title={lib?.title} description={lib?.description} />
      <Section color="success" className={`pb-0 md:pb-14`} full={true}>
        <H2 color='white'> Fonctionnement en Projet: </H2>
        <div className='w-[80%]'>
          {`Ce projet, tout récent me permet de découvrir le fonctionnement en projet. En effet, 
          je suis en charge de la migration du wiki de l'entreprise, et de la restructuration des 
          données pour qu'elles soient plus claires et plus faciles à trouver.`}
        </div>
        <br />
        <div className='flex justify-around w-[80%]'>
          <div className='flex flex-col w-[40%]'>
            <H2 color='white'>Outils utilisés:</H2>
            <ul className='text-left list-disc' >
              <li>Outils Microsoft (teams, planner, etc...)</li>
              <li>Site du nouveau wiki (partie prod)</li>
            </ul>
            <br />
            <Divider />
            <H2 color='white'>Organisation</H2>
            <p>{`
              Projet avec la responsable de la communication interne. Nous organisons des réunions avec les différents services,
              pour connaître leurs besoins, et leur expliquer les changements. Nous travaillons aussi sur la création de processus,
              cahiers des charges, etc...
              Je me charge de la restructuration des données et elle de l'ajout des données.
            `}</p>
          </div>
          <Image src={`/realisations/migration-wiki/mydbcfr.png`} alt="image" width={500} height={800} />
        </div>
      </Section>
    </>
  );
}

export default Wiki;