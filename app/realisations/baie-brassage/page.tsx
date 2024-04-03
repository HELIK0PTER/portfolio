'use client'

import Image from 'next/image'

import {realisationsData} from "@/app/realisations/realisationsData";

import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"
import {H2} from "@/components/Sections/Global/Title";
import {Divider} from "@nextui-org/react";

import {Section} from "@/components/Sections/Global/Section";

const BaieBrassage = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/baie-brassage')
  if (!lib) return <div>404</div>
  return (
    <DefaultRealisation title={lib?.title} description={lib?.description}>
      <Section color='success' full={true}>
        <div className="grid grid-cols-2 w-[80%]">
          <div>
            <H2 color="white"> Objectif </H2>
            <div>
              Monter une baie de brassage dans une des agences de l'entreprise.
            </div>
            <br />
            <Divider />
            <br />
            <H2 color="white"> Raison </H2>
            <div>
              {`En cas de panne au siègeen cas de panne au siège, cette baie sert de fallback pour les gestionnaires 
              opérationnels de l'entreprise qui doivent être présents 24h/24 et 7j/7.`}
            </div>
            <br />
            <Divider />
            <br />
            <H2 color="white"> Fonctionnalité </H2>
            <div>
              {`Cette baie fonctionne sous routeur 4G et est équipée de switchs et de DB Box (nos proxys internes). Le but est de simplement
              déservir du réseau à une dizaine de postes de travail.`}
            </div>
          </div>
          <div className='p-5'>
            <Image alt='image' src={`/realisations/baieBrassage/BaieBrassage.jpg`} width={1000} height={1000} className='rounded-md'/>
          </div>
        </div>
      </Section>
    </DefaultRealisation>
  );
}

export default BaieBrassage