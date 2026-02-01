import React from "react";
import { ExpandableCard } from "../components/ui/expandable-card";
import { Spotlight } from "../components/ui/spotlight";
import styles from "./About.module.css"

const Experience = () => {
  const blurb = (
    <p className="text-neutral-300 text-xs sm:text-lg leading-snug">
      My work spans various technical constraints, from 
      <span className="text-neutral-200 font-bold"> finance </span> and 
      <span className="text-neutral-200 font-bold"> deep tech </span> to 
      <span className="text-neutral-200 font-bold"> large-scale infrastructure </span> at Google. 
      I'm interested in how software adapts to different environments, whether that is 
      optimising for resource constraints or building infrastructure systems at scale.
      <br />
      <br />
    </p>
  );
  return (
    <section className="min-h-screen grid place-items-center">
      <div className="grid gap-6 w-1/2 items-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="grid gap-6">
          <span className={styles.sectionTitle}>
            / experience
          </span>
          <div className="flex flex-col space-y-4">
            {blurb}
          </div>
          <ExpandableCard/>
        </div>
      </div>
    </section>
  );
};

export default Experience;
