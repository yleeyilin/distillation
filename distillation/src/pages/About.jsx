import React from "react";
import { IconCard } from "../components/ui/icons-loader";
import { PixelatedCanvas } from "../components/ui/pixelated-canvas";
import headshot from '../assets/headshot.jpg'; 

const About = () => {
  const who = (
    <p className="text-xl">
      I am currently a <b>final year computer science student </b> at NUS,
      specialising in parallel computing and software engineering. Outside of
      school, I also love building projects and experimenting with{" "}
      <b>scalable systems, cool algorithms, and new technologies</b>!
    </p>
  );

  const tools = (
    <p className="text-xl">
      Here are some technologies I have been working with:
    </p>
  );

  return (
    <section className="min-h-screen grid place-items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-3/5 items-center">
        {/* Left side --> about text */}
        <div className="space-y-2 px-5">
          <span className="section-title bg-clip-text text-transparent bg-linear-to-r from-green-700 to-blue-700 font-bold">
            / about me
          </span>
          <div className="flex"></div>
          {[who, <div className="flex"></div>, tools]}
          <IconCard />
        </div>

        {/* Right side --> Image */}
        <div className="hidden lg:flex justify-end">
          <PixelatedCanvas
            src={headshot}
            width={400}
            height={500}
            cellSize={3}
            dotScale={0.7}
            shape="square"
            backgroundColor="#000000"
            dropoutStrength={0}
            interactive
            distortionStrength={0}
            distortionRadius={0}
            distortionMode="swirl"
            followSpeed={0}
            jitterStrength={0}
            jitterSpeed={0}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0.05}
            className="rounded-xl border border-neutral-800 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
