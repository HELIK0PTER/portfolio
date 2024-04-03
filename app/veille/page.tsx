'use client'

import { Articles } from "@/app/veille/Articles";
import { Section } from "@/components/Sections/Global/Section";
import { Hero } from "@/components/Sections/Global/Hero";
import Termes from "@/app/veille/Termes";
import {H2} from "@/components/Sections/Global/Title";
import { GiClick } from 'react-icons/gi';

export default function Veille() {
  
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
        <div className={`flex justify-center items-center gap-5`}>
          <H2 color={'white'}> Termes techniques </H2> <GiClick className={`size-8`}/>
        </div>
        <Termes/>
      </Section>
      <Section>
        <Articles/>
      </Section>
    
    
    </>
  );
}
