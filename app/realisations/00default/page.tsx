'use client'

import Link from 'next/link';
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
      <Section color="success" className={`pb-0 md:pb-14`} full={true}>
        
      </Section>
    </>
  );
}

export default Rugby;