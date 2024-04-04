'use client'

import Image from 'next/image'
import { Divider} from "@nextui-org/react"

import {realisationsData} from "@/app/realisations/realisationsData";
import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"
import {Section} from "@/components/Sections/Global/Section"
import { H2 } from "@/components/Sections/Global/Title";


const GamingExplorer = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/gaming-explorer')
  if (!lib) return <div>404</div>
  return (
    <DefaultRealisation title={lib?.title} description={lib?.description} website={lib?.website}>
      {/* 
-Cahier des charges
-Charte graphique
-Stockage du code sur Github
-Ticketing Github
-Communication Discord
-Fonctionnement back-end Firebase
-Déploiement en ligne Vercel
-Nom de domaine OVH
-Capture d'écran pour les interfaces du site
      */}

      <Section color="success" full >
        <H2 color='white'>Cahier des charges</H2>
        <Image alt="image" src={`/realisations/gamingExplorer/cahier-charge.png`} width={1000} height={1000} className='rounded-md w-[600px] h-auto'  />
        <br />
        <Divider />
        <H2 color='white'>Charte graphique</H2>
        <Image alt="image" src={`/realisations/gamingExplorer/charte-graphique.png`} width={1000} height={1000} className='rounded-md w-[600px] h-auto'  />
        <br />
        <Divider />
        <H2 color='white'>Stockage du code sur Github</H2>
        <Image alt="image" src={`/realisations/gamingExplorer/github.png`} width={1000} height={1000} className='rounded-md w-[600px] h-auto'  />
        <br />
        <Divider />
        <H2 color='white'>Ticketing Github</H2>
        <Image alt="image" src={`/realisations/gamingExplorer/ticketing.png`} width={1000} height={1000} className='rounded-md w-[600px] h-auto'  />
        <br />
        <Divider />
        <H2 color='white'>Communication Discord</H2>
        <Image alt="image" src={`/realisations/gamingExplorer/discord.png`} width={1000} height={1000} className='rounded-md w-[600px] h-auto'  />
        <br />
        <Divider />
        <H2 color='white'>Fonctionnement back-end Firebase</H2>
        <Image alt="image" src={`/realisations/gamingExplorer/firebase.png`} width={1000} height={1000} className='rounded-md w-[600px] h-auto'  />
        <br />
        <Divider />
        <H2 color='white'>Déploiement en ligne Vercel</H2>
        <Image alt="image" src={`/realisations/gamingExplorer/vercel.png`} width={1000} height={1000} className='rounded-md w-[600px] h-auto'  />
        <br />
        <Divider />
        <H2 color='white'>Nom de domaine OVH</H2>
        <Image alt="image" src={`/realisations/gamingExplorer/ovh.png`} width={1000} height={1000} className='rounded-md w-[600px] h-auto'  />
        <br />
        <Divider />
        
        <H2 color='white'>Capture d'écran pour les interfaces du site</H2>
        <div className='p-3 bg-primary text-white font-bold rounded-md'>
          Version Desktop
        </div>
          <div className='flex flex-col items-center'>
            <div className='rounded-md flex justify-center gap-5 w-[80%]'>
              <div>
                <H2 color='white'>Page Principale</H2>
                <Image alt="image" src={`/realisations/gamingExplorer/gamingExplorer.png`} width={1000} height={1000} className='rounded-md w-[600px] h-auto' />
              </div>
              <Divider orientation='vertical' />
              <div>
                <H2 color='white'>Page des Jeux</H2>
                <div className='rounded-md h-[330px] overflow-y-auto'>
                  <Image alt="image" src={`/realisations/gamingExplorer/gamedetail.png`} width={1000} height={1000} className='rounded-s-md rounded-e-sm w-[600px] h-auto' />
                </div>
              </div>
            </div>
            <br />
            <div>
              <H2 color='white'>Page des utilisateurs</H2>
              <div className='rounded-md h-[330px] overflow-y-auto'>
                <Image alt="image" src={`/realisations/gamingExplorer/account.png`} width={1000} height={1000} className='rounded-s-md rounded-e-sm w-[600px] h-auto' />
              </div>
            </div>
          </div>

          <br />
          <Divider />
          <div className='p-3 bg-primary text-white font-bold rounded-md'>
            Version Mobile
          </div>
          <div className='flex flex-col items-center'>
            <div className='rounded-md flex justify-center gap-5 w-[80%]'>
              <div>
                <H2 color='white'>Page Principale</H2>
                <div className='rounded-md w-[300px] h-[500px] overflow-y-auto'>
                  <Image alt="image" src={`/realisations/gamingExplorer/landing-mobile.png`} width={1000} height={1000} className='rounded-s-md rounded-e-sm w-[600px] h-auto' />
                </div>
              </div>
              <Divider orientation='vertical' />
              <div>
                <H2 color='white'>Page des Jeux</H2>
                <div className='rounded-md w-[300px] h-[500px] overflow-y-auto'>
                  <Image alt="image" src={`/realisations/gamingExplorer/gamedetail-mobile.png`} width={1000} height={1000} className='rounded-s-md rounded-e-sm w-[600px] h-auto' />
                </div>
              </div>
            </div>
            <br />
            <div>
              <H2 color='white'>Page des utilisateurs</H2>
              <div className='rounded-md w-[300px] h-[500px] overflow-y-auto'>
                <Image alt="image" src={`/realisations/gamingExplorer/account-mobile.png`} width={1000} height={1000} className='rounded-s-md rounded-e-sm w-[600px] h-auto' />
              </div>
            </div>
          </div>
      </Section>
    </DefaultRealisation>
  );
}

export default GamingExplorer