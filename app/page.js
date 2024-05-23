"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// import styles from "../styles";
import { newFeatures, heroHeadline } from "../constants";
// import NewFeatures from "../components/NewFeatures";
import HeroHeadline from "../components/HeroHeadline";
import { Dots, Lines } from "../components/Images";

// import { TitleText, TypingText } from "../components/CustomTexts";
import {
  planetVariants,
  staggerContainer,
  fadeIn,
  zoomIn,
} from "../utils/motion";

// import { royale, logirent, poppins } from "../styles/fonts";

import heroImg from "../public/images/hero.webp";

export default function Home() {
  return (
    // <main className="2xl:max-w-[1600px] container-wrapper m-inline-auto overflow-x-hidden">
    <main className="overflow-x-hidden relative">

      {/* <div className=""> */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        // className="flex flex-col overflow-hidden justify-between h-[100vh]"
        className="order-solid border-2 border-sky-500 pt-[2em] pb-0 px-[2em] flex flex-col relative origin-[center_top] transition-all duration-[0.3s] ease-linear delay-[0.4s] max-w-[1600px] justify-between m-inline-auto text-center gap-4 overflow-hidden min-h-screen"
      >
        <motion.div variants={zoomIn(0, 0.7)} className="hero__logo">
          <Image
            src="/logo-light.svg"
            alt="FSC website logo"
            width={160}
            height={45}
            className="hero__logo-img block"
          />
        </motion.div>
        <div
          className="flex flex-col text-center lg:text-left lg:min-w-full lg:flex-row lg:justify-between"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.7, 1)}
            className=""
          // className="flex-[0.95] flex justify-center flex-col"
          >
            {/* <TypingText title="| Whats new?" /> */}
            {/* <TitleText title={<>What's new about Metaversus?</>} /> */}
            {/* <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div> */}
            <div className="">
              {heroHeadline.map((headline) => (
                <HeroHeadline key={headline} {...headline} />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={planetVariants("right")}
            className="flex justify-center items-center"
          >
            <Image
              src={heroImg}
              alt="hero image"
              // widht="600px"
              // height="600px"
              // className="min-h-full"
              priority
            />
          </motion.div>
        </div>
        {/* Bottom Component */}
        {/* <div className="w-full py-8 flex flex-row justify-between">
          <div className="bg-white shadow-md rounded-lg p-4 m-2 flex-1">
            <h2 className="text-2xl font-semibold">Card 1</h2>
            <p className="mt-2">Content for the first card.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 m-2 flex-1">
            <h2 className="text-2xl font-semibold">Card 2</h2>
            <p className="mt-2">Content for the second card.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 m-2 flex-1">
            <h2 className="text-2xl font-semibold">Card 3</h2>
            <p className="mt-2">Content for the third card.</p>
          </div>
        </div> */}
        <nav className="flex-grow flex justify-around items-center gap-[1em] [perspective:2500px] max-w-[1054px] min-w-[500px]">
          <button className="flex-grow flex justify-center items-center bg-transparent border-[solid] border-[1px] border-[rgba(245,247,250,0.06)] bg-[linear-gradient(_101deg,_rgba(245,_247,_250,_0),_rgba(245,_247,_250,_0.12)_52%,_rgba(245,_247,_250,_0)_)] backdrop-filter backdrop-blur-2xl rounded-tl-[24px] rounded-br-[24px] rounded-tr-[0] rounded-bl-[0] h-[9em] [transition:all_0.5s] cursor-pointer [transform:perspective(500px)] [transition:0.6s] hover:[transform:perspective(900px)_translateY(-5%)_rotateX(25deg)_translateZ(0)] hover:[box-shadow:2px_35px_32px_-8px_rgba(0,_0,_0,_0.75)]">
            <p className="section__explore explore__text--fast text-white font-semibold">EXPLORE</p>
            <img src="https://raw.githubusercontent.com/marex980/fsc-heroimg/main/hero-img-rocket.webp" alt="Rocket" className="character rocket" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-transparent border-[solid] border-[1px] border-[rgba(245,247,250,0.06)] bg-[linear-gradient(_101deg,_rgba(245,_247,_250,_0),_rgba(245,_247,_250,_0.12)_52%,_rgba(245,_247,_250,_0)_)] backdrop-filter backdrop-blur-2xl rounded-tl-[24px] rounded-br-[24px] rounded-tr-[0] rounded-bl-[0] h-[9em] [transition:all_0.5s] cursor-pointer [transform:perspective(500px)] [transition:0.6s] hover:[transform:perspective(900px)_translateY(-5%)_rotateX(25deg)_translateZ(0)] hover:[box-shadow:2px_35px_32px_-8px_rgba(0,_0,_0,_0.75)]">
            <p className="section__explore explore__text--safe text-white font-semibold">EXPLORE</p>
            <img src="https://raw.githubusercontent.com/marex980/fsc-heroimg/main/hero-img-padlock.webp" alt="Padlock" className="character padlock" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-transparent border-[solid] border-[1px] border-[rgba(245,247,250,0.06)] bg-[linear-gradient(_101deg,_rgba(245,_247,_250,_0),_rgba(245,_247,_250,_0.12)_52%,_rgba(245,_247,_250,_0)_)] backdrop-filter backdrop-blur-2xl rounded-tl-[24px] rounded-br-[24px] rounded-tr-[0] rounded-bl-[0] h-[9em] [transition:all_0.5s] cursor-pointer [transform:perspective(500px)] [transition:0.6s] hover:[transform:perspective(900px)_translateY(-5%)_rotateX(25deg)_translateZ(0)] hover:[box-shadow:2px_35px_32px_-8px_rgba(0,_0,_0,_0.75)]">
            <p className="section__explore explore__text--cheap text-white font-semibold">EXPLORE</p>
            <img src="https://raw.githubusercontent.com/marex980/fsc-heroimg/main/hero-img-scisssors.webp" alt="Scissors" className="character scissors" />
          </button>
        </nav>
        <Lines />
      </motion.div>
      {/* </div> */}

      <Dots />

    </main>
  );
}
