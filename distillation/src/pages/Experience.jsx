import React from "react";
import { ExpandableCard } from "../components/ui/expandable-card";
import { Spotlight } from "../components/ui/spotlight";

const Experience = () => {
  const blurb = (
    <p className="text-neutral-300 text-base sm:text-xl leading-snug">
      My work spans various technical constraints, from 
      <span className="text-white"> finance </span> and 
      <span className="text-white"> deep tech </span> to 
      <span className="text-white"> large-scale infrastructure </span> at Google. 
      I'm interested in how software adapts to different environments, whether that is 
      optimising for resource constrains or building infrastructure systems at scale.
      <br />
      <br />
    </p>
  );
  return (
    <section className="min-h-screen grid place-items-center">
      <div className="grid grid-cols-1 gap-12 w-1/2 items-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
        <div>
          <span className="text-xl sm:text-4xl section-title bg-clip-text text-transparent bg-linear-to-r from-green-700 to-blue-700 font-bold">
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
