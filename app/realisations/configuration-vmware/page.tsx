'use client'

import Link from 'next/link';
import Image from 'next/image'
import { Divider } from '@nextui-org/react';

import {realisationsData} from "@/app/realisations/realisationsData";
import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"

import {Section} from "@/components/Sections/Global/Section";
import {H2} from "@/components/Sections/Global/Title";


const VMware = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/configuration-vmware')
  if (!lib) return <div>404</div>
  return (
    <>
    <DefaultRealisation title={lib?.title} description={lib?.description} />
      <Section color="success" className={`pb-0 md:pb-14`} full={true}>
        <H2 color='white'>Contrainte initiale :</H2>
        <div className='grid grid-cols-3 gap-5 place-items-center w-[80%]'>
          <p className='flex flex-col justify-center bg-white text-primary rounded-3xl p-5' >{`Les logiciels de maintenance des pc des techniciens sont externes et ne sont pas installés automatiquement via 
          l'auto-installer interne.

          `}</p>
          <Image alt='image' src={`/realisations/configurationVmware/LogicielsMaintenance.png`}
            width={1000} height={1000} className='w-[80%] col-span-2 rounded-xl'
          />
        </div>

        <br />
        <Divider />

        <H2 color='white'>Solution: </H2>
        <div className='grid grid-cols-3 gap-5 place-items-center w-[80%]'>
          <Image alt='image' src={`/realisations/configurationVmware/ConfigurationVmware.png`}
            width={1000} height={1000} className='w-[80%] col-span-2 rounded-xl'
          />
          <p className='flex flex-col justify-center bg-white text-primary rounded-3xl p-5' >{`
            Configuration de VMware pour les logiciels de maintenance des pc des techniciens.
            (quelques difficultés rencontrées par rapport à la licence windows, en cours de résolution encore)

          `}</p>
        </div>
      </Section>
    </>
  );
}

export default VMware;