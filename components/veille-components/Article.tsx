import Image from "next/image";
import {Section} from "@/components/Sections/Global/Section";
import React from "react";

interface ArticleProps {
  id: number;
  title: string;
  note: number;
  image: string | "public/images/react.png";
}

export const Article: React.FC<ArticleProps> = ({
  title,
  note,
  image,
                                                }) => {
  return (
    <Section>
      <div className="border border-gray-800/70 shadow-md cursor-pointer flex flex-col justify-between items-center rounded-lg p-4 mt-5 w-[200px] h-[200px] transition duration-200 ease-out hover:ease-in md:saturate-50 hover:saturate-100 hover:scale-[105%]">
        <p className="text-[20px]">{title}</p>
        <Image src={image} alt="image" width={35} height={35}/>
        <p>Note: {note}</p>
      </div>
    </Section>
  );
};
