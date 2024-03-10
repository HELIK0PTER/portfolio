'use client'

import {realisationsData} from "@/lib/realisationsData";

import Image from 'next/image'

import {Button} from "@nextui-org/react";
import {FaArrowLeft} from "react-icons/fa";
import {Section} from "@/components/Sections/Global/Section";

const Aternos = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/aternos')
  return(
      <Section full={true} className={`relative`}>
        <div className={`absolute top-10 left-10`}>
          <Button isIconOnly color="danger" aria-label="Back"
            onPress={() => window.history.back()}
          >
            <FaArrowLeft/>
          </Button>
        </div>
        
        <Section>
          <h1 className={`text-4xl font-semibold text-success`}>{lib?.title}</h1>
          <p>{lib?.description}</p>
        </Section>
        
        <Section full={true}>
          <div className={`flex flex-row gap-10 mx-20 p-10 bg-success rounded-xl`}>
            <div>
              <p className={`mb-6`}>Mon clone:</p>
              <Image alt={`image`} src={lib?.img ?? '/'} width={800} height={800} className={`rounded-2xl`}/>
            </div>
            <div>
              <p className={`mb-6`}>Vrai site:</p>
              <Image alt={`image`} src={lib?.img ?? '/'} width={800} height={800} className={`rounded-2xl`}/>
            </div>
          </div>
        </Section>
      
      </Section>
  )
}

export default Aternos