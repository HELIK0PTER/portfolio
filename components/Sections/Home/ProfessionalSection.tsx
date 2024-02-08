'use client';

import React from "react";

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import {proData} from "@/lib/homeData";

import {PiBagSimpleFill} from "react-icons/pi";
import {FaExternalLinkAlt} from "react-icons/fa";

import Link from "next/link";
import {Section} from "@/components/Sections/Global/Section";

export const ProfessionalSection = () => {
  return (
    <Section>
      <h1 className={`
        text-primary-200 text-3xl font-bold
        pb-5
      `}>
        Parcours professionnel
      </h1>
      <VerticalTimeline lineColor={'#fff'}>
        {proData.map((item, index) => (
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
              icon={ <PiBagSimpleFill /> }
              iconStyle={{
                background: "rgba(0, 0, 0, 0.90)",
                fontSize: "1.5rem",
              }}
              visible={true}
            >
              <h3 className="font-semibold capitalize text-primary-600">{item.title}</h3>
              <p className="font-normal !mt-0 text-primary-900">{item.poste}</p>
              <p className="!mt-1 !font-normal text-primary-500 dark:text-white/75">
                {item.description}
              </p>
              {item.enSavoirPlus && item.enSavoirPlus.value && <Link href={item.enSavoirPlus.lien} className={`w-full flex justify-end`} > <FaExternalLinkAlt className={`text-success scale-125`} /> </Link> }
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </Section>
  );
};