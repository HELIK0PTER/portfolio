'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Divider } from '@nextui-org/react';

import {realisationsData} from "@/app/realisations/realisationsData";
import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"

import {Section} from "@/components/Sections/Global/Section";
import {H2} from "@/components/Sections/Global/Title";


const Oracle = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/sql-vba')
  if (!lib) return <div>404</div>
  return (
    <>
    <DefaultRealisation title={lib?.title} description={lib?.description} />
      <Section color="success" className={`pb-0 md:pb-14`} full={true}>

        <H2 color='white'>Auto-Formation sur Oracle ApEx</H2>
        <p>Je me suis formé sur Oracle ApEx pour pouvoir créer des applications web, internes, pour l'entreprise.</p>
        <Link href={`https://apex.oracle.com/en/learn/tutorials/`} target='_blank' className={`p-3 rounded-md bg-primary text-white`}>Lien vers les tutoriels</Link>
       
        <br />
        <Divider />

        <H2 color='white'>Interface Oracle ApEx</H2>
        <p>Par laquelle on accède aux onglets de ApEx, qu'on écrit les scripts SQL, qu'on modifie les bases etc...</p>
        <Image src={`/realisations/sql-vba/accueil-apex-scripts.png`} alt="interface oracle apex" width={1000} height={1000} />

        <br />
        <Divider />

        <H2 color='white'> Vue de l'application pour gérer le matériel créée avec ApEx</H2>
        <Image src={`/realisations/sql-vba/albatross-materiels.png`} alt="interface oracle apex" width={1000} height={1000} />
        
      </Section>
    </>
  );
}

export default Oracle;