import React from "react";
import { IconCard } from "../components/ui/icons-loader";

const About = () => {
  const who = (
    <p className="text-xl">
      I am currently a <b>final year computer science student </b> at NUS, 
      specialising in parallel computing and software engineering. 
    </p>
  )

  const tools = (
    <p className="text-xl">
      Here are some technologies I have been working with:
    </p>
  )

  const what = (
    <p className="text-xl">
      Outside of school, I also love building projects and experimenting 
      with <b>scalable systems, cool algorithms, and new technologies</b>!
    </p>
  )

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        <div className="space-y-2">
          <span className="section-title bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-green-700 font-bold">/ about me</span>
          {[who, what]}
          {[tools]}
          <IconCard />
        </div>
      </div>
    </section>
  );
};

export default About;
