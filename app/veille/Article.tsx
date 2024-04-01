'useclient'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  CardFooter
} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

interface ArticleProps {
  title: string;
  note: number;
  description: string;
  image: string | "public/images/react.png";
  link: string;
  date?: string;
}

export const Article: React.FC<ArticleProps> = ({
  title,
  note,
  description,
  image,
  link,
  date,
}) => {
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  let stars = (note: number) => {
    let stars = [];
    for (let i = 0; i < note; i++) {
      stars.push(<span key={i} className="text-primary">★</span>);
    }
    return stars;
  }
  
  return (
    <>
      <Card onClick={onOpen} isPressable={true} fullWidth={true} className="py-4 hover:scale-[102%] hover:cursor-pointer">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{title}</p>
          {/* pour modifier le style des étoiles voir la fonction au dessus */}
          <small> {stars(note)} </small>
        </CardHeader>
        <CardBody className="overflow-visible py-2 w-full flex flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={`/veille/` + image}
            width={270}
          />
        </CardBody>
        <CardFooter className={`w-full pb-0 flex justify-end`}>
          <small style={{color : "grey"}}> {date} </small>
        </CardFooter>
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
              <ModalFooter className={`justify-between`}>
                <div className={`pt-2`}>
                  note: {stars(note)}
                </div>
                <div>
                  <Button color="primary" onPress={() => window.open(link)}>
                    Lien
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
