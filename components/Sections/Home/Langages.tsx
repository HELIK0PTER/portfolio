import {Section} from "@/components/Sections/Global/Section";

import {skillsData} from "@/lib/homeData";
import {any} from "prop-types";

export const Langages = () => {
  return (
    <Section className={`bg-success`}>
      <div className={`flex flex-row flex-wrap justify-center gap-5 w-[70%]`}>
        {skillsData.map((skill, index) => {
          return (
            <div key={index} className={`py-1 px-2 bg-primary-200 font-semibold text-success rounded-lg md:hover:scale-110 transition hover:cursor-default`}>{skill}</div>
          );
        })}
      </div>
    </Section>
);
};