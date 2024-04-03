import React from 'react'

import Terme from "@/app/veille/Terme";

import {termesTechniques} from '@/lib/veilleData';


const Termes = () => {
	
	return (
		<>
			<div className={`flex flex-row flex-wrap justify-center gap-5 w-[70%]`}>
				{termesTechniques.map((terme, index) => (
					<Terme key={index} terme={terme}/>
				))}
			</div>
		</>
	)
}

export default Termes