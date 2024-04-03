//page.tsx pour bilan
import React from 'react';

import {Progress} from "@nextui-org/react";

import {Hero} from "@/components/Sections/Global/Hero";
import { Section } from '@/components/Sections/Global/Section';
import {H2} from '@/components/Sections/Global/Title'


type section = {
	children: React.ReactNode
	center?: boolean
	align?: string
}
const H1 = ({children, center}: section) => {
	return (
		<h1 className={`text-xl font-semibold`}
				style={{textAlign: center ? 'center' : 'left'}}
		>
			{children}
		</h1>
	)
}

const SEC = ({children, align}: section) => {
	return (
		<div className={`w-[70%] md:w-[55%] flex flex-col items-center md:items-` + align + ` `}>
			{children}
		</div>
	)
}


const Bilan: React.FC = () => {

	const ressentiCard = ' bg-green-300 p-3 m-3 flex justify-center items-center min-h-60 rounded-md'

	return (
		<>
			<Hero>
				<Section>
					<h1 className={`text-success text-4xl font-semibold`}>
						Bilan
					</h1>
					<p>
						{`  Voici un bilan de mon ressenti sur ces 2 dernières année et de mes compétences acquises. 🚀🌟`}
					</p>
				</Section>
			</Hero>
			<Section color='success' full={true}>
				<H2 color='white'>
					Ressenti 2022-2024
				</H2>
				<div className='grid grid-cols-1 md:grid-cols-7 md:grid-rows-3 w-[70%] z-10'>
					<p className={`md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-2` + ressentiCard}>
						{`Lors de mon bts j'ai pu découvrir l'alternance et le milieu professionnel de ma passion :
							L'informatique.`}
					</p>
					<p className={`md:col-start-5 md:col-span-3 md:row-start-2 md:row-span-2` + ressentiCard}>
						{`Je me suis vraiment épanoui dans cette méthodologie, ça correspondait parfaitement à ce que je
						cherchais quand j'ai décidé d'arrêter l'université.`}
					</p>
				</div>
			</Section>
			
			<Section full={true}>
				<H2>
					Compétences acquises:
				</H2>
				{/*langages appris*/}
				<SEC align={`start`}>
					<H1>
						Langages appris:
					</H1>
					<div className={`mt-10 grid gap-2 w-[80%] md:w-3/5`}>
						<Progress label="NextJS" value={75} className="max-w-md"/>
						<Progress label="HTML/CSS" value={80} className="max-w-md"/>
						<Progress label="PHP" value={45} className="max-w-md"/>
						<Progress label="Python" value={35} className="max-w-md"/>
						<Progress label="React" value={40} className="max-w-md"/>
						<Progress label="Java" value={55} className="max-w-md"/>
						<Progress label="Python-Django" value={40} className="max-w-md"/>
					</div>
				</SEC>
				<SEC align={`end`}>
					<H1>
						Soft Skills acquis:
					</H1>
					<div className={`mt-10 grid gap-2 w-[80%] md:w-3/5`}>
						<Progress label="Travail en équipe" value={80} className="max-w-md"/>
						<Progress label="Autonomie" value={85} className="max-w-md"/>
						<Progress label="Gestion de projet" value={70} className="max-w-md"/>
						<Progress label="Communication" value={75} className="max-w-md"/>
						<Progress label="Adaptabilité" value={70} className="max-w-md"/>
						<Progress label="Résolution de problème" value={80} className="max-w-md"/>
					</div>
				</SEC>
			</Section>
		</>
	)
}
export default Bilan;