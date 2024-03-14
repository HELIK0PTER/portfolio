'use client'

import {realisationsData} from "@/app/realisations/realisationsData";

import {DefaultRealisation} from "@/components/Sections/realisations/DefaultRealisation"
import {H2} from "@/components/Sections/Global/Title";

import {Section} from "@/components/Sections/Global/Section";

const BaieBrassage = () => {
  const lib = realisationsData.find((realisation) => realisation.link === '/baie-brassage')
  if (!lib) return <div>404</div>
  return (
    <DefaultRealisation title={lib?.title} description={lib?.description}>
      <Section className={`pb-0 md:pb-14`} full={true}>
      <H2 >test</H2>
      </Section>
    </DefaultRealisation>
  );
}

export default BaieBrassage