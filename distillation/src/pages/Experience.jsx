import React from "react";
import { ExpandableCard } from "../components/ui/expandable-card";

const Experience = () => {
  return (
    <section className="min-h-screen grid place-items-center">
      <div className="grid grid-cols-1 gap-12 w-4/5 sm:w-3/5 items-center">
        <div>
          <span className="text-xl sm:text-4xl section-title bg-clip-text text-transparent bg-linear-to-r from-green-700 to-blue-700 font-bold">
            / experience
          </span>
          <ExpandableCard />
        </div>
      </div>
    </section>
  );
};

export default Experience;
