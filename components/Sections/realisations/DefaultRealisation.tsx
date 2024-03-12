import React from 'react';

import {Button} from "@nextui-org/react";
import {FaArrowLeft} from "react-icons/fa";
import {Section} from "@/components/Sections/Global/Section";

type propsType = {
	children?: React.ReactNode,
	title: string,
	description: string,
}

export const DefaultRealisation = (
	{
		children,
		title,
		description,
	}:propsType
) => {
	return (
		<div>
			<Section full={true} className={`relative`}>
				<div className={`absolute top-10 left-10`}>
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
			</Section>
			{children}
		</div>
	)
}