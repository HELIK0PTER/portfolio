'use client'

import {realisationsData} from "@/lib/realisationsData";

import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"

import Image from 'next/image'

import {Divider} from "@nextui-org/react";
import {Section} from "@/components/Sections/Global/Section";

const Aternos = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/aternos')
  if (!lib) return <div>404</div>
  return(
    <DefaultRealisation title={lib?.title} description={lib?.description}>
      
      <Section className={`pb-0 md:pb-14`} full={true}>
        <div className={`flex flex-col md:flex-row gap-10 md:mx-20 p-10 bg-success md:rounded-xl`}>
          <div>
            <p className={`mb-6`}>Mon clone:</p>
            <Image alt={`image`} src={`/realisations/aternos/Aternos.png`} width={800} height={800} className={`rounded-2xl`}/>
          </div>
          <Divider className={`md:hidden font-semibold bg-primary-800`} />
          <div>
            <p className={`mb-6`}>Vrai site:</p>
            <Image alt={`image`} src={`/realisations/aternos/RealAternos.png`} width={800} height={800} className={`rounded-2xl`}/>
          </div>
        </div>
      </Section>
      
    </DefaultRealisation>
  )
}

export default Aternos