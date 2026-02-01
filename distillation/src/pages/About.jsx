import React from "react";
import { IconCard } from "../components/ui/icons-loader";
import { PixelatedCanvas } from "../components/ui/pixelated-canvas";
import headshot from "../assets/headshot.jpg";
import { Code2, Layers} from "lucide-react";
import styles from "./About.module.css";

const About = () => {
  const who = (
    <div className="grid gap-4">
      <p className="text-neutral-300 text-xs sm:text-lg">
        I am currently a 
        <span className="text-neutral-200 font-bold"> final year computer science student </span>
        at NUS, specialising in 
        <span className="text-cyan-300 font-semibold"> parallel computing </span>
        and 
        <span className="text-cyan-300 font-semibold"> software engineering </span>.
      </p>
      <p className="text-neutral-300 text-xs sm:text-lg">
        Outside of school, I am passionate about building projects and experimenting 
        with 
        <span className="text-neutral-200 font-semibold"> scalable systems</span>, 
        <span className="text-neutral-200 font-semibold"> cool algorithms</span>, 
        and 
        <span className="text-neutral-200 font-semibold"> new technologies</span>!
      </p>
    </div>
  );

  const languages = (
    <p className="text-neutral-200 text-xs sm:text-lg">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-4 h-4 text-cyan-600" />
        <span className="font-bold">Languages:</span>
      </div>
      <IconCard />
    </p>
  );

  const backendTools = ["OpenMP", "OpenMPI", "Langchain"];
  const appTools = ["React", "Flutter", "Jetpack Compose"];

  const tools = (
    <p className="text-neutral-200 text-xs sm:text-lg">
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="w-5 h-5 text-cyan-600" />
        <span className="font-bold">Tools & Frameworks:</span>
      </div>
      <div className="grid grid-cols-2 gap-6 space-y-4">
        <ul className="space-y-2">
          {backendTools.map((tech) => (
            <li key={tech} className="flex items-center space-x-2">
              <span className="text-cyan-400 text-xs font-black">
                {"\u25B7"}
              </span>
              <span className="text-neutral-200 text-xs sm:text-base">{tech}</span>
            </li>
          ))}
        </ul>

        <ul className="space-y-2">
          {appTools.map((tech) => (
            <li key={tech} className="flex items-center space-x-2">
              <span className="text-cyan-400 text-xs font-black">
                {"\u25B7"}
              </span>
              <span className="text-neutral-200 text-xs sm:text-base">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </p>
  );

  return (
    <section className="min-h-screen grid place-items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-4/5 sm:w-3/5 items-center">
        {/* Left side --> about text */}
        <div className="grid gap-6">
          <span className={styles.sectionTitle}>
            / about me
          </span>

          <div className="flex flex-col space-y-4">
            {who}
            {tools}
            {languages}
          </div>
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
