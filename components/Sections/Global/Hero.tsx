import React from 'react';
import {twMerge} from "tailwind-merge";

interface props {
  children?: React.ReactNode;
  className?: string;
}

export const Hero = ({children, className}:props) => {
  return (
    <div
    className={twMerge(`
    flex flex-col justify-center items-center gap-8
    h-[90vh]
    text-xl font-bold text-center    
    `, className)}>
      {children}
    </div>
  );
};