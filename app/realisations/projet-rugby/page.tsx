'use client'

import Image from 'next/image'
import { Divider } from '@nextui-org/react';

import {realisationsData} from "@/app/realisations/realisationsData";
import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"

import {Section} from "@/components/Sections/Global/Section";
import {H2} from "@/components/Sections/Global/Title";

const Rugby = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/projet-rugby')
  if (!lib) return <div>404</div>
  return (
    <>
    <DefaultRealisation title={lib?.title} description={lib?.description} />
    <Section full={true} color="success" className={`pb-0 md:pb-14`}>
      {/* 
-Cahier des Charges
-Charte Graphique
-Capture du site de l'api (page que j'ai codé)
-Capture du site de billetterie
-Sauvergarde Github
-trello
      */}
      
      <div className='flex flex-row gap-5 justify-center'>
        <div className="flex flex-col items-center">
          <H2 color='white'>Cahier des Charges</H2>
          <Image src="/realisations/projetRugby/cahier-des-charges.jpg" alt={`image`} width={1000} height={500} className='w-[700px] h-auto'  />
        </div>
        <div className="flex flex-col items-center">
          <H2 color='white'>Charte Graphique</H2>
          <Image src="/realisations/projetRugby/charte-graphique.png" alt={`image`} width={1000} height={500} className='w-[700px] h-auto'  />
        </div>
      </div>

      <br />
      <Divider />

      <div className="flex flex-col items-center">
        <H2 color='white'>Trello</H2>
        <Image src="/realisations/projetRugby/trello.png" alt={`image`} width={1000} height={500} className='w-[900px] h-auto'  />
      </div>

      <br />
      <Divider />

      <div className="flex flex-col items-center">
        <H2 color='white'>Capture du site de l'api (page que j'ai codé) <br />capture d'une requête GET sur l'api <br /> et capture de phpmyadmin</H2>
        <div className='flex gap-5 mb-5'>
          <Image src="/realisations/projetRugby/orm/aboutPage.png" alt={`image`} width={1000} height={1000} className='w-[700px] h-auto '  />
          <Image src="/realisations/projetRugby/orm/Requette.png" alt={`image`} width={1000} height={1000} className='w-[700px] h-auto'  />
        </div>
        <Image src="/realisations/projetRugby/orm/phpMyAdmin.png" alt={`image`} width={1000} height={1000} className='w-[900px] h-auto'  />
      </div>

      <br />
      <Divider />

      <div className="flex flex-col items-center">
        <H2 color='white'>Capture du site de billetterie <br /> (en version mobile avec le navigateur)</H2>
        <Image src="/realisations/projetRugby/orm/billetterie.png" alt={`image`} width={1000} height={500} className='w-[500px] h-auto'  />
      </div>

      <br />
      <Divider />

      <div className="flex flex-col items-center">
        <H2 color='white'>Sauvegarde Github</H2>
        <Image src="/realisations/projetRugby/github.png" alt={`image`} width={1000} height={500} className='w-[900px] h-auto'  />
      </div>
      
    </Section>
    </>
  );
}

export default Rugby;