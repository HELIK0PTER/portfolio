import React from 'react'

import { GiClick } from "react-icons/gi";

import {H2} from '@/components/Sections/Global/Title';
import Terme from "@/app/veille/Terme";

import {termesTechniques} from '@/lib/veilleData';


const Termes = () => {
	
	return (
		<>
			<div className={`flex justify-center items-center gap-5`}><H2> Termes techniques </H2> <GiClick
				className={`size-8`}/></div>
			
			<div className={`flex flex-row flex-wrap justify-center gap-5 w-[70%]`}>
				{termesTechniques.map((terme, index) => (
					<Terme key={index} terme={terme}/>
				))}
			</div>
		</>
	)
}

export default Termes