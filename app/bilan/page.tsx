//page.tsx pour bilan
import React from 'react';

import {Hero} from "@/components/Sections/Global/Hero";
import { Section } from '@/components/Sections/Global/Section';
import {H2} from '@/components/Sections/Global/Title'

const Bilan: React.FC = () => {
	return (
		<>
			<Hero>
				<h1 className={`text-success text-4xl font-semibold`}>
					Bilan
				</h1>
				<p>
					{`  Voici un bilan de mon ressenti sur cette dernière année et de mes compétences acquises. 🚀🌟`}
				</p>
			</Hero>
			<Section color='success' full={true}>
				<H2 color='white'>
					Ressenti année 2023-2024
				</H2>
				<p>
					{`
						
					`}
				</p>
			</Section>
		</>
	)
}
export default Bilan;