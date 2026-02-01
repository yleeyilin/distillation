import React from "react";
import { IconCard } from "../components/ui/icons-loader";
import { PixelatedCanvas } from "../components/ui/pixelated-canvas";
import headshot from "../assets/headshot.jpg";
import { Code2, Layers} from "lucide-react";
import styles from "./About.module.css";

const About = () => {
  const who = (
    <p className="text-neutral-200 text-xs sm:text-lg">
      I am currently a final year computer science student at NUS, specialising
      in parallel computing and software engineering. Outside of school, I am
      passionate about building projects and experimenting with scalable systems, cool
      algorithms, and new technologies!
    </p>
  );

  const languages = (
    <p className="text-neutral-200 text-xs sm:text-lg">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-6 h-6 bg-clip-text text-green-600" />
        <span className="font-bold"> Languages:</span>
      </div>
      <IconCard />
    </p>
  );

  const backendTools = ["OpenMP", "OpenMPI", "Langchain"];
  const appTools = ["React", "Flutter", "Jetpack Compose"];

  const tools = (
    <p className="text-neutral-200 text-xs sm:text-lg">
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="w-7 h-7 bg-clip-text text-green-600" />
        <span className="font-bold"> Tools & Frameworks:</span>
      </div>
      <div className="grid grid-cols-2 gap-6 space-y-4">
        <ul className="space-y-2">
          {backendTools.map((tech) => (
            <li key={tech} className="flex items-center space-x-2">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-green-700">
                {"\u25B7"}
              </span>
              <span className="text-neutral-200 text-xs sm:text-base">{tech}</span>
            </li>
          ))}
        </ul>

        <ul className="space-y-2">
          {appTools.map((tech) => (
            <li key={tech} className="flex items-center space-x-2">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-green-700">
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
        <div>
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
