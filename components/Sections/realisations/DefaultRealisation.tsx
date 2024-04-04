import React from 'react';

import {FaArrowLeft} from "react-icons/fa";
import {Section} from "@/components/Sections/Global/Section";
import { Button } from "@nextui-org/react"
import Link from 'next/link';

type propsType = {  
	children?: React.ReactNode,
	title: string,
	description: string,
	website?: string,
}

export const DefaultRealisation = (
	{
		children,
		title,
		description,
		website
	}:propsType
) => {
	return (
		<>
			<Section full={true} className={`relative`}>
				<div className={`fixed top-20 left-20`}>
					<Button isIconOnly color="danger" aria-label="Back"
									onPress={() => window.history.back()}
					>
						<FaArrowLeft/>
					</Button>
				</div>
				
				<Section>
					<h1 className={`text-4xl font-semibold text-success`}>{title}</h1>
					<p>{description}</p>
				</Section>

				{website &&
					<Link href={website} target='_blank'>
						<Button color="primary" className='font-medium' >
							Lien vers le site
						</Button>
					</Link>
				}
			</Section>
			{children}
		</>
	)
}