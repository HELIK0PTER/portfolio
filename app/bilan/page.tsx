//page.tsx pour bilan
import React from 'react';

import {Hero} from "@/components/Sections/Global/Hero";
import { Section } from '@/components/Sections/Global/Section';
import {H2} from '@/components/Sections/Global/Title'

const Bilan: React.FC = () => {

	const ressentiCard = ' bg-green-300 p-3 m-3 flex justify-center items-center min-h-60 rounded-md'

	return (
		<>
			<Hero>
				<h1 className={`text-success text-4xl font-semibold`}>
					Bilan
				</h1>
				<p>
					{`  Voici un bilan de mon ressenti sur ces 2 dernières année et de mes compétences acquises. 🚀🌟`}
				</p>
			</Hero>
			<Section color='success' full={true}>
				<H2 color='white'>
					Ressenti 2022-2024
				</H2>
				<div className='relative flex justify-center w-full'>
					<div className='grid grid-cols-7 grid-rows-3 w-[70%] z-10'>
						<p className={`col-start-1 col-span-3 row-start-1 row-span-2` + ressentiCard}>
							{`Lors de mon bts j'ai pu découvrir l'alternance et le milieu professionnel de ma passion :
								L'informatique.`}
						</p>
						<p className={`col-start-5 col-span-3 row-start-2 row-span-2` + ressentiCard}>
							{`Je me suis vraiment épanoui dans cette méthodologie, ça correspondait parfaitement à ce que je
							cherchais quand j'ai arrêté l'université.`}
						</p>
					</div>
					<p className={`absolute w-full h-full text-9xl text-wrap z-5`}>
						Accomplissements
					</p>
				</div>
			</Section>
		</>
	)
}
export default Bilan;