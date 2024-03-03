'use client';
import React from "react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {schoolData} from "@/lib/homeData";

import { Section } from "@/components/Sections/Global/Section"

import {LuGraduationCap} from "react-icons/lu";

export const SchoolSection = () => {
  return (
    <Section className={`bg-success`}>
      <h1 className={`
        text-primary-50 text-3xl font-bold
        pb-5
      `}>
        Parcours Scolaire
      </h1>
      <VerticalTimeline lineColor={'#ffffff'}>
        {schoolData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "white",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 1)",
              }}
              date={item.date}
              dateClassName={`text-primary-50 font-semibold`}
              icon={<LuGraduationCap />}
              iconStyle={{
                background: "rgba(199,101,255)",
                fontSize: "1.5rem",
                color:"white"
              }}
              visible={true}
            >
              <h3 className="font-semibold capitalize text-primary-500">{item.title}</h3>
              <p className="font-normal !mt-0 text-primary-900">{item.location}</p>
              <p className="!mt-1 !font-normal text-primary-500 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </Section>
  );
};
