'use client'

import {realisationsData} from "@/lib/realisationsData";

import Image from 'next/image'

import {Button} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {FaArrowLeft} from "react-icons/fa";
import {Section} from "@/components/Sections/Global/Section";

const Aternos = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/aternos')
  return(
    <>
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
      </Section>
      
      <Section className={`pb-0 md:pb-14`} full={true}>
        <div className={`flex flex-col md:flex-row gap-10 md:mx-20 p-10 bg-success md:rounded-xl`}>
          <div>
            <p className={`mb-6`}>Mon clone:</p>
            <Image alt={`image`} src={`/Aternos.png`} width={800} height={800} className={`rounded-2xl`}/>
          </div>
          <Divider className={`md:hidden font-semibold bg-primary-800`} />
          <div>
            <p className={`mb-6`}>Vrai site:</p>
            <Image alt={`image`} src={`/RealAternos.png`} width={800} height={800} className={`rounded-2xl`}/>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Aternos