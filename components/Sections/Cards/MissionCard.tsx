import React from 'react';
import {twMerge} from "tailwind-merge";
import {className} from "postcss-selector-parser";
interface props {
  children?: React.ReactNode;
  className?: string;
}
export const MissionCard = ({children, className}:props) => {
  return (
    <div
    className={twMerge(`
    min-h-[5rem] w-[18rem] h-auto
    bg-primary-500 bg-opacity-40
    border-primary-50 border-2
    rounded-xl
    p-3 mb-2
    `,
      className
    )}>
      {children}
    </div>
  );
};