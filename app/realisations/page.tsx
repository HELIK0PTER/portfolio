'use client'

import React from 'react'

import {realisationsData} from "@/app/realisations/realisationsData";
import {Hero} from "@/components/Sections/Global/Hero";
import {Section} from "@/components/Sections/Global/Section";
import {Button, Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
import { Masonry } from "@mui/lab"
import {useRouter} from "next/navigation";
import {Select, SelectItem} from "@nextui-org/react";
import Image from 'next/image'
import { IoPerson } from "react-icons/io5";

const Realisation = () => {
  
  const [realisations, setRealisations] =
  React.useState<'ALL' | 'PRO' | 'PERSO' | 'SCOLAIRE'>('ALL')
  // sert a tracker la hauteur en pixels de la section des realisations (id: realisations)

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setRealisations(e.target.value);
  }
  
  const filteredRealisations = realisationsData.filter((realisation) => {
    if (realisations === 'ALL') return realisation
    else return realisation.value === realisations;
  })
  
  const onButtonClick = () => {
    // @ts-ignore
    return document.getElementById('realisations').offsetTop
  }
  
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
      <div>
      <Section id={"realisations"} color='success' full className={`group relative min-h-[400px]`}>
        
        <div className={`lg:absolute right-40
          bg-primary-100 p-3 rounded-md text-primary`}
        >Count: {filteredRealisations.length}</div>

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
          
        {realisations != "PRO" &&
          <div className={`w-3/4`}>
            <Masonry columns={{xs: 1, md:2, lg: 3}} spacing={2}>
              {filteredRealisations.map((realisation, index) => {
                return (
                  <div key={index}>
                    <Card onClick={() => router.push(`/realisations/${realisation.link}`)} isPressable={true}
                          className="p-1 md:hover:scale-[102%] hover:cursor-pointer">
                      <CardHeader className="flex py-4 px-4 justify-between">
                        <p className="text-large uppercase font-bold text-primary">{realisation.title}</p>
                        {realisation.personnes && realisation.personnes > 1 &&
                          <div className={`flex items-center gap-1`}>{realisation.personnes} <IoPerson/></div>
                        }
                      </CardHeader>
                      <Divider/>
                      <CardBody>
                      <Image alt={'image'} src={realisation.img} width={1000} height={1000}
                               className={`flex justify-center w-full rounded-md`}/>
                        <p className={`text-medium text-opacity-70 mt-2`}>{realisation.description}</p>
                      </CardBody>
                      {realisation.outils &&
                        <>
                        <Divider/>
                        <CardFooter>
                          <p className={`text-medium text-opacity-70`}>
                              Outils: {realisation.outils.map((outil, index) => {
                                return (
                                  <span key={index} className={`text-primary-400`}>
                                      {outil}{index < realisation.outils.length - 1 ? ', ' : ''}
                                  </span>
                                )
                          })}
                          </p>
                        </CardFooter>
                        </>
                      }
                    </Card>
                  </div>
                )
              })}
            </Masonry>
          </div>
        }
        {realisations == "PRO" &&
          <div className={`flex flex-col items-center md:items-start md:flex-row md:justify-around w-full`}>
            <div className={`w-[80%] md:w-2/5`}>
            <div className={`mb-3 bg-white p-2 rounded-xl w-full`}>
              <p className={`p-3 rounded-xl bg-primary text-2xl font-semibold text-white`}>Première année</p>
                {filteredRealisations.map((realisation, index) => {
                  {if (realisation.annee == 1) {
                    return (
                      <>
                        <Card onClick={() => router.push(`/realisations/${realisation.link}`)} isPressable={true}
                              className="p-1 m-5 md:m-8 lg:m-12 md:hover:scale-[102%] hover:cursor-pointer">
                          <CardHeader className="flex py-4 px-4 justify-start">
                            <p className="text-large uppercase font-bold text-primary">{realisation.title}</p>
                          </CardHeader>
                          <Divider/>
                          <CardBody>
                            <Image alt={'image'} src={realisation.img} width={1000} height={1000}
                                   className={`flex justify-center w-full rounded-md`}/>
                            <p className={`text-medium text-opacity-70 mt-2`}>{realisation.description}</p>
                          </CardBody>
                          { realisation.outils &&
                            <>
                              <Divider/>
                              <CardFooter>
                                <p className={`text-medium text-opacity-70`}>
                                  Outils: {realisation.outils.map((outil, index) => {
                                  return (
                                    <span key={index} className={`text-primary-400`}>
                                          {outil}{index < realisation.outils.length - 1 ? ', ' : ''}
                                      </span>
                                  )
                                })}
                                </p>
                              </CardFooter>
                            </>
                          }
                        </Card>
                      </>
                    )
                  }}
                })}
            </div>
            </div>
            <div className={`w-[80%] md:w-2/5`}>
              <div className={`mb-3 bg-white p-2 rounded-xl w-full`}>
                <p className={`p-3 rounded-xl bg-primary text-2xl font-semibold text-white`}>Deuxième année</p>
                {filteredRealisations.map((realisation) => {
                  {if (realisation.annee == 2) {
                    return (
                      <>
                        <Card onClick={() => router.push(`/realisations/${realisation.link}`)} isPressable={true}
                              className="p-1 m-5 md:m-8 lg:m-12 md:hover:scale-[102%] hover:cursor-pointer">
                          <CardHeader className="flex py-4 px-4 justify-start">
                            <p className="text-large uppercase font-bold text-primary">{realisation.title}</p>
                          </CardHeader>
                          <Divider/>
                          <CardBody>
                            <Image alt={'image'} src={realisation.img} width={1000} height={1000}
                                   className={`flex justify-center w-full rounded-md`}/>
                            <p className={`text-medium text-opacity-70 mt-2`}>{realisation.description}</p>
                          </CardBody>
                          { realisation.outils &&
                            <>
                              <Divider/>
                              <CardFooter>
                                <p className={`text-medium text-opacity-70`}>
                                  Outils: {realisation.outils.map((outil, index) => {
                                  return (
                                    <span key={index} className={`text-primary-400`}>
                                          {outil}{index < realisation.outils.length - 1 ? ', ' : ''}
                                      </span>
                                  )
                                })}
                                </p>
                              </CardFooter>
                            </>
                          }
                        </Card>
                      </>
                    )
                  }}
                })}
              </div>
            </div>
          </div>
        }
        
        <Button onClick={() => scroll(0, onButtonClick() - 50)} className={`group-hover:block hidden fixed bottom-16 right-5`}
                style={{}}
        >
          Remonter
        </Button>
      </Section>
      </div>
    </>
  )
}

export default Realisation