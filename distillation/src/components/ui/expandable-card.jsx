import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";
import googleImg from "../../assets/google.png";
import qdImg from "../../assets/qd.png";
import eastspringImg from "../../assets/eastspring.png";

export function ExpandableCard() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
                <motion.div layoutId={`image-${active.id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-0.5 h-0.5 sm:rounded-tr-lg sm:rounded-tl-lg" />
                </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.id}`}
                      className="font-bold text-white text-base">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}`}
                      className="text-neutral-600 dark:text-neutral-400">
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.p
                    layoutId={`date-${active.id}`}
                    className="px-4 py-3 text-sm rounded-full font-bold text-neutral-400">
                    {active.ctaText}
                  </motion.p>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.id}`}
            key={`card-${card.id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div className="flex items-center justify-center" layoutId={`image-${card.id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-20 md:h-10 w-20 md:w-10 rounded-lg" /> 
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.id}`}
                  className="text-white font-medium text-center md:text-left">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.id}`}
                  className="text-neutral-400 font-medium text-center md:text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.p
              layoutId={`date-${card.id}`}
              className="px-3 py-3 text-sm rounded-full font-bold text-neutral-600">
              {card.ctaText}
            </motion.p>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    description: "Google, Singapore",
    title: "Software Engineer Intern",
    src: googleImg,
    id: "google-2025",
    ctaText: "May 2025 – Aug 2025",
    content: () => {
      return (
        <p>
          Collaborated with software engineers to build a Generative Retrieval
          Infrastructure for Search Recommendation. <br /><br />
          Designed and developed an end-to-end, production-grade Gemini
          pre-training pipeline using TFX, fully automating data ingestion,
          preprocessing, model training, validation, and serving for Search
          Recommendation workflows.
        </p>
      );
    },
  },
  {
    description: "QuantumDiamonds GmbH, Germany",
    title: "Software Engineer Intern",
    src: qdImg,
    id: "qd-2024",
    ctaText: "Aug 2024 – Jan 2025",
    content: () => {
      return (
        <p>
          Architected and developed a modular GUI using PySide6, incorporating a
          custom dependency injection framework to improve code reusability and
          maintainability. <br /><br />
          Implemented comprehensive unit and integration tests, leveraging
          dependency injection for effective component isolation. Designed and
          deployed a CI/CD pipeline automating testing, linting (ruff), and type
          validation (mypy).
        </p>
      );
    },
  },
  {
    description: "Google, Singapore",
    title: "STEP Intern",
    src: googleImg,
    id: "google-2024",
    ctaText: "May 2024 – Aug 2024",
    content: () => {
      return (
        <p>
          Integrated a complete end-to-end sound search feature for WearOS,
          leveraging HTTPS for secure and reliable audio streaming. <br /><br />
          Engineered a standalone sound search application using Jetpack
          Compose, optimised for a seamless WearOS user experience. Conducted
          stress testing with Android Profiler and Perfetto tracing to identify
          and resolve performance bottlenecks.
        </p>
      );
    },
  },
  {
    description: "Eastspring Investments, Singapore",
    title: "Quantitative Investment Solutions Intern",
    src: eastspringImg,
    id: "eastspring-2023",
    ctaText: "June 2023 – Aug 2023",
    content: () => {
      return (
        <p>
          Leveraged NLP to build a YAML-standardizing parser that automated
          backtesting workflows across three quantitative teams. <br /><br />
          Developed a Large Language Model chatbot with a complete GUI to
          automate portfolio manager commentary and report generation. 
          <br /><br /> Designed
          and implemented a workflow integrating SQL databases with PowerBI,
          enabling real-time tracking of backtest progress.
        </p>
      );
    },
  },
];
