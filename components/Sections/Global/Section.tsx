import React from 'react';
import {twMerge} from "tailwind-merge";

interface props {
  children?: React.ReactNode;
  className?: string;
  full?: boolean;
}

export const Section = ({children, className, full=false}:props) => {
  return (
    <div
    className={twMerge(`
    flex flex-col justify-start items-center gap-4 w-full 
    text-lg font-normal text-center   
    pt-16 pb-14
    `, className)}>
      <div className={`
      flex flex-col justify-start items-center gap-4
      text-lg font-normal text-center 
      ${ full ? `w-full` : `w-[70%]`}`}>
        {children}
      </div>
    </div>
  );
}