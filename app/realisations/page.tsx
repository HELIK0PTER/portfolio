'use client'

import React from 'react'


import {realisationsData} from "@/lib/realisationsData";

import {Hero} from "@/components/Sections/Global/Hero";
import {Section} from "@/components/Sections/Global/Section";
import {Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
import { Masonry } from "@mui/lab"
import {useRouter} from "next/navigation";
import {Select, SelectItem} from "@nextui-org/react";
import Image from 'next/image'

const Realisation = () => {
  
  const [realisations, setRealisations] =
  React.useState<'ALL' | 'PRO' | 'PERSO' | 'SCOLAIRE'>('ALL')
  
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setRealisations(e.target.value);
  }
  
  const filteredRealisations = realisationsData.filter((realisation) => {
    if (realisations === 'ALL') return realisation
    else return realisation.value === realisations;
  })
  
  const router = useRouter();

  return (
    <>
      <Hero>
        <h1 className={`text-success text-4xl font-semibold`}>
            Mes Réalisations
        </h1>
        <h2 className={`text-primary-400 text-opacity-70 text-2xl`}>
          Professionnelles, Scolaire et Personnelles
        </h2>
      </Hero>
      <Section className={`bg-success min-h-[400px]`}>

        <div className={`hidden md:flex justify-start font-bold bg-primary-100 mb-5 rounded-md text-primary`}>
          <button onClick={() => setRealisations('ALL')} 
          className={`p-3 rounded-s-md text-medium md:hover:bg-success-100 transition duration-250`}
          {...realisations === 'ALL' && {className: 'p-3 rounded-s-md text-medium bg-success-100'}}
          >Tout</button>
          <Divider orientation="vertical" />
          <button onClick={() => setRealisations('PRO')} 
          className={`p-3 text-medium md:hover:bg-success-100 transition duration-250`}
          {...realisations === 'PRO' && {className: 'p-3 text-medium bg-success-100'}}
          >Professionnelles</button>
          <Divider orientation="vertical" />
          <button onClick={() => setRealisations('SCOLAIRE')} 
          className={`p-3 text-medium md:hover:bg-success-100 transition duration-250`}
          {...realisations === 'SCOLAIRE' && {className: 'p-3 text-medium bg-success-100'}}
          >Scolaire</button>
          <Divider orientation="vertical" />
          <button onClick={() => setRealisations('PERSO')} 
          className={`p-3 rounded-e-md text-medium md:hover:bg-success-100 transition duration-100`}
          {...realisations === 'PERSO' && {className: 'p-3 rounded-e-md text-medium bg-success-100'}}
          >Personnelles</button>
        </div>
        
        <Select
          items={realisations}
          label="Type de realisation"
          placeholder="choisir :"
          className="max-w-xs md:hidden mb-5 "
          selectedKeys={[realisations]}
          onChange={handleSelectionChange}
        >
          <SelectItem key="ALL" value="ALL">Tout</SelectItem>
          <SelectItem key="PRO" value="PRO">Professionnelles</SelectItem>
          <SelectItem key="SCOLAIRE" value="SCOLAIRE">Scolaire</SelectItem>
          <SelectItem key="PERSO" value="PERSO">Personnelles</SelectItem>
        </Select>
        
        <Masonry columns={{xs: 1, md: 3}} spacing={2}>
          
          {filteredRealisations.map((realisation, index) => {
            return (
              <div key={index}>
                <Card onClick={() => router.push(`/realisations/${realisation.link}`)} isPressable={true} className="p-1 hover:scale-[102%] hover:cursor-pointer">
                  <CardHeader className="py-4 px-4 flex-col items-start">
                    <p className="text-large uppercase font-bold text-primary">{realisation.title}</p>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <Image alt={'image'} src={realisation.img} width={1000} height={1000} className={`flex justify-center w-full rounded-md`} />
                    <p className={`text-medium text-opacity-70 mt-2`}>{realisation.description}</p>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <p className={`text-medium text-opacity-70`}>
                      Outils : {realisation.outils.map((outil, index) => {
                        return (
                          <span key={index} className={`text-primary-400`}>
                            {outil}{index < realisation.outils.length - 1 ? ', ' : ''}
                          </span>
                        )})
                      }
                    </p>
                  </CardFooter>
                </Card>
              </div>
            )
          })}
        
        </Masonry>
      </Section>
    </>
  )
}

export default Realisation