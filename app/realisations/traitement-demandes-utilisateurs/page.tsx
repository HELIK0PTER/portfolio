'use client'

import Link from 'next/link';
import Image from 'next/image'
import { Divider } from '@nextui-org/react';

import {realisationsData} from "@/app/realisations/realisationsData";
import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"

import {Section} from "@/components/Sections/Global/Section";
import {H2} from "@/components/Sections/Global/Title";


const UserRequests = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/traitement-demandes-utilisateurs')
  if (!lib) return <div>404</div>
  return (
    <>
    <DefaultRealisation title={lib?.title} description={lib?.description} />
      <Section color="success" className={`pb-0 md:pb-14`} full={true}>
        
        <H2 color='white'> Traitement des demandes par mails </H2>
        <p>{`On s'organisait en attribuant des catégories aux mails: `}</p>
        <div className='flex justify-around w-[80%]'>
          <div>
          <p className='bg-white text-primary font-bold rounded-t-md py-5'> {`Attibution des catégories:`} </p>
          <Image alt='image' src={`/realisations/traitement-demandes-utilisateurs/classes-repartition.png`} width={1000} height={1000}
            className='w-80'
          />
          </div>
          <div>
          <p className='bg-white text-primary font-bold rounded-t-md py-5'> {`Historique de la boite mail:`} </p>
          <Image alt='image' src={`/realisations/traitement-demandes-utilisateurs/mails.png`} width={1000} height={1000}
          className='w-80'
          />
          </div>
        </div>

        <br />
        <Divider />

        <H2 color='white'> Utilisation temporaire de l'application "Notion" : </H2>
        <p>{`Pour palier au manque d'ITSM, nous avons utilisé Notion pour gérer les demandes des utilisateurs.`}</p>
        <Image alt='image' src={`/realisations/traitement-demandes-utilisateurs/notion.png`} width={1000} height={1000}
          className='w-[60%]'
        />
        

      </Section>
    </>
  );
}

export default UserRequests;