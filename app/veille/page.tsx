'use client'

import { Articles } from "@/app/veille/Articles";
import { Section } from "@/components/Sections/Global/Section";
import { Hero } from "@/components/Sections/Global/Hero";
import { GiClick } from "react-icons/gi";

import {H2} from '@/components/Sections/Global/Title';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

import {termesTechniques} from '@/lib/veilleData';

export default function Veille() {
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>
      <Hero>
        <Section>
          <h1 className={`text-success text-4xl font-semibold`}> {`Bitcoin: à l'approche du bullrun`}</h1>
          <p className="text-center">
            {`Le Bitcoin se rapproche d'un bullrun potentiel, marqué par une hausse significative de son
            prix et un intérêt croissant des investisseurs institutionnels..
            Ici, vous trouverez une sélection d'articles et d'informations pertinents sur les signes
            annonciateurs d'un bullrun pour le Bitcoin, les tendances du marché et les conseils pour se préparer à
            cette période de hausse des prix.`}
          </p>
        </Section>
      </Hero>
      <Section color={"success"}>
        <Articles />
      </Section>
      
      
      <Section>
        <div className={`flex justify-center items-center gap-5`}><H2> Termes techniques </H2> <GiClick className={`size-8`} /></div>
        
        <div className={`flex flex-row flex-wrap justify-center gap-5 w-[70%]`}>
          {termesTechniques.map((terme, index) => (
            <>
            <div key={index}
                 className={`py-1 px-2 bg-primary-200 font-semibold text-success rounded-lg md:hover:scale-110 transition hover:cursor-default`}
                 onClick={onOpen}
            >
              <h3 className="text-lg font-semibold">{terme.terme}</h3>
            </div>
            
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">{terme.terme}</ModalHeader>
                    <ModalBody className={`flex items-center text-center`}>
                      <p>
                        {terme.definition}
                      </p>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
            </>
          ))}
        </div>
      </Section>
      
      
      
      
    </>
);
}
