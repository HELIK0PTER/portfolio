'use client'

import { CardContent } from "@mui/material";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

interface MissionProps {
  title: string;
  description: string;
  image?: string | "public/images/react.png";
}

export const Mission: React.FC<MissionProps> = ({
  title,
  description,
  image,
}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>
      <Card onClick={onOpen} isPressable={true} fullWidth={true} className="py-4 hover:scale-[102%] hover:cursor-pointer">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{title}</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <CardContent>
            
          </CardContent>
        </CardBody>
      </Card>
      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody className={`flex items-center text-center`}>
                <p>
                  {description}
                </p>
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={`/veille/` + image}
                    width={270}
                  />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
