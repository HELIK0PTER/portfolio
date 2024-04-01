
import React from "react";

import Image from 'next/image'

import {Hero} from "@/components/Sections/Global/Hero";
import {SchoolSection} from "@/components/Sections/app/SchoolSection";
import {ProfessionalSection} from "@/components/Sections/app/ProfessionalSection";
import {Langages} from "@/components/Sections/app/Langages";
import {Section} from "@/components/Sections/Global/Section";

export default function Home() {
  return (
    <main className={`flex flex-col items-center min-h-[150vh]`}>
      <Hero>
        <Section>
          <Image alt={`Logo`} src={`/M.svg`} width={100} height={100}
                 className={`
          h-[120px] w-[120px]
          p-1
          bg-primary-400 bg-opacity-20
          rounded-full
          hover:rotate-[360deg]
          hover:duration-[1s]
          duration-[.5s]
          
          `} />
          <Image alt={`display image`} src={`/moi.png`} width={100} height={100} className={``}/>
          <h1 className={`text-success text-4xl font-semibold`}>
            Matheus Kops Guedes
          </h1>
          <p>
            {`  Passionné d'informatique, je suis en 2ème année de BTS SIO. En tant que développeur full-stack, 
              je maîtrise une multidute de langages informatiques, mais je vous laisse découvrir cela au travers de mon
              portfolio. En dehors du code, je m'épanouis dans la musique, les voitures sportives, le sport, et la 
              culture japonaise. Explorez mes projets et n'hésitez pas à me contacter pour des collaborations ! 🚀🌟`}
          </p>
        </Section>
      </Hero>
      <SchoolSection/>
      <ProfessionalSection/>
      <Langages/>

    </main>
  )
}
