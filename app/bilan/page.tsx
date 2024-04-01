//page.tsx pour bilan
import React from 'react';

import {Hero} from "@/components/Sections/Global/Hero";

const Bilan: React.FC = () => {
	return (
		<main className={`flex flex-col items-center min-h-[150vh]`}>
			<Hero>
				<h1 className={`text-success text-4xl font-semibold`}>
					Bilan
				</h1>
				<p>
					{`  Voici un bilan de mes compétences et de mes projets réalisés. Vous pouvez consulter mes projets et mes compétences
						dans les sections ci-dessous. N'hésitez pas à me contacter pour des collaborations ! 🚀🌟`}
				</p>
			</Hero>
		</main>
	)
}
export default Bilan;