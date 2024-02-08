import {Section} from "@/components/Sections/Global/Section";

import {skillsData} from "@/lib/homeData";
import {any} from "prop-types";

export const SoftSkills = () => {
  return (
    <Section className={`bg-gray-950`}>
      <div className={`flex flex-row flex-wrap justify-center gap-5 w-[70%]`}>
        {skillsData.map((skill, index) => {
          return (
            <div key={index} className={`py-1 px-2 bg-primary-300 bg-opacity-30 rounded-lg hover:scale-110 transition hover:cursor-pointer`}>{skill}</div>
          );
        })}
      </div>
    </Section>
);
};