import Link from "next/link";
import React from "react";

interface props {
  children?: React.ReactNode;
  link?: string;
}

export const RealisationCard = ({children, link}:props) => {

  return (
    <Link href={`/realisations/${link}`}
    className={`
      flex flex-col gap-5
      w-[20rem] 
      bg-primary-500 bg-opacity-40
      border-primary-50 border-2
      rounded-xl
      p-3 mb-2
      hover:bg-opacity-60 hover:scale-105 transition duration-300
    `}>
      {children}
    </Link>
  );
};