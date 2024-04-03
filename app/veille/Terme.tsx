import React from 'react'

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	useDisclosure,
} from "@nextui-org/react";

interface typeTerme {
	terme: {
		terme: string,
		definition: string
	}
}

const Terme = ({terme} : typeTerme) => {
	
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	
	return (
		<>
			<div
				className={`py-1 px-2 bg-primary-200 font-semibold text-success rounded-lg md:hover:scale-110 transition hover:cursor-default`}
				onClick={onOpen}
			>
				<h3 className="text-lg font-semibold">{terme.terme}</h3>
			</div>
			
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">{terme.terme}</ModalHeader>
							<ModalBody className={`flex items-center text-center`}>
								<p>
									{terme.definition}
								</p>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default Terme