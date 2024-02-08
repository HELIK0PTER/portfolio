'use client'

import {realisationsData} from "@/lib/realisationsData";

import Image from 'next/image'

import {Button} from "@nextui-org/react";
import {FaArrowLeft} from "react-icons/fa";
import {Section} from "@/components/Sections/Global/Section";

const TextAdventure = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/text-adventure')
  return(
    <div className={`relative w-full`}>
      <Section>
        <div className={`absolute top-10 left-10`}>
          <Button isIconOnly color="danger" aria-label="Back"
                  onPress={() => window.history.back()}
          >
            <FaArrowLeft/>
          </Button>
        </div>

        <h1 className={`text-3xl font-bold text-primary`}>{lib?.title}</h1>
        <p className={`font-normal text-primary-100`}>{lib?.description}</p>
        <Image alt={`image`} src={lib?.img ?? '/'} width={800} height={800} className={`rounded-2xl`}/>

      </Section>
    </div>
  )
}

export default TextAdventure