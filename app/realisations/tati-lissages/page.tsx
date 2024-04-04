'use client'

import Image from 'next/image'
import { Divider } from '@nextui-org/react';

import {realisationsData} from "@/app/realisations/realisationsData";
import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"

import {Section} from "@/components/Sections/Global/Section";
import {H2} from "@/components/Sections/Global/Title";


const Tati = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/tati-lissages')
  if (!lib) return <div>404</div>
  return (
    <>
    <DefaultRealisation title={lib?.title} description={lib?.description} website={lib.website} />

      <Section color="success" className={`pb-0 md:pb-14`} full={true}>
        {/*
        -Maquette
        -Stockage du code sur Github
        -Déploiement sur Vercel
        -Capture d'écran du site
          */}
        <H2 color='white'>Maquette</H2>
        <Image src="/realisations/tatiLissages/maquette.png" alt="Tati Lissages" width={1920} height={1080} className='w-[50%] h-auto' />

        <br />
        <Divider />

        <H2 color='white'>Stockage du code sur Github</H2>
        <Image src="/realisations/tatiLissages/github.png" alt="Tati Lissages" width={1920} height={1080} className='w-[50%] h-auto' />

        <br />
        <Divider />

        <H2 color='white'>Déploiement sur Vercel</H2>
        <Image src="/realisations/tatiLissages/vercel.png" alt="Tati Lissages" width={1920} height={1080} className='w-[50%] h-auto' />

        <br />
        <Divider />

        <H2 color='white'>Capture d'écran du site final</H2>
        <div className='h-[80vh] overflow-auto'>
          <Image src="/realisations/tatiLissages/site.png" alt="Tati Lissages" width={1920} height={1080} className='h-auto w-auto' />
        </div>
        
      </Section>
    </>
  );
}

export default Tati;