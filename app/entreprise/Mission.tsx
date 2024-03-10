'use client'

import { CardContent } from "@mui/material";
import {useDisclosure} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

interface MissionProps {
  title: string;
  content: string;
  outils: string[];
  annee: string;
}

export const Mission: React.FC<MissionProps> = ({
  title,
  content,
  outils,
  annee,
}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>
      <Card fullWidth={true} className="py-4 mb-6">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-large uppercase font-bold text-primary">{title}</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <CardContent>
            { content}
          </CardContent>
        </CardBody>
        <CardFooter className="flex flex-col items-start py-0">
          <p className="text-tiny text-success mx-2">Outils utilisés:</p>
          <div className="flex flex-wrap ">
            { outils.map((outil, index) => {
              return (
                <Card key={index} className="text-tiny p-1 m-1 rounded-md shadow-none border-primary border-1">
                  {outil}
                </Card>
              )
            }, [])}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
