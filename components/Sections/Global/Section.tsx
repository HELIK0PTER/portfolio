import React from 'react';
import {twMerge} from "tailwind-merge";

interface props {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  color?: 'success' | 'white';
  full?: boolean;
}

export const
  Section = ({children, id, className, color = 'white',full=false}:props) => {

    const couleur = (color:string) => {
      // couleurs en css et non tailwind car tailwind ne permet pas de faire des classes dynamiques
      switch (color) {
        case 'success':
          return 'var(--color-success)'
        case 'primary':
          return 'var(--color-primary)'
        case 'white':
          return 'white'
        default:
          return 'white'
      }
    }

  return (
    <div
    id={id}
    className={twMerge(`
    flex flex-col justify-start items-center gap-4 w-full 
    text-lg font-normal text-center   
    pt-16 pb-14
    `, className)}
    style={{backgroundColor: couleur(color)}}
    >
      <div className={`
      flex flex-col justify-start items-center gap-4
      text-lg font-normal text-center 
      ${ full ? `w-full` : `w-[70%]`}`}>
        {children}
      </div>
    </div>
  );
}