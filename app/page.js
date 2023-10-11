'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures, heroHeadline } from '../constants';
import NewFeatures from '../components/NewFeatures';
import HeroHeadline from '../components/HeroHeadline';

import { TitleText, TypingText } from '../components/CustomTexts';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

import { royale, logirent, poppins } from '../styles/fonts';

import heroImg from '../public/images/hero.webp'


export default function Home() {
  return (
    <main className="bg-primary-black min-h-screen overflow-x-hidden">
      <section className='hero__logo'>
      <Image
              src="/logo-light.svg"
              alt="FSC website logo"
              width={160}
              height={45}
              className="block"
            />
      </section>
      <div className="">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} flex flex-col text-left lg:min-w-full lg:flex-row lg:justify-between`}
        >
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
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
            variants={planetVariants('right')}
            className={`flex-1 ${styles.flexCenter}`}
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
        </motion.div>
      </div>
    </main>

    // <main className="home flex bg-[hsl(var(--clr-dark))] text-[hsl(var(--clr-light))] text-[length:var(--fs-400)] overflow-x-hidden relative transition-all duration-[0.3s] ease-linear z-[1]">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">app/page.js</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>
    //   <div className="z-10 text-center m-[1em] lg:flex lg:w-full lg:flex-row lg:justify-between ">
    //     <motion.div
    //       initial="hidden"
    //       animate="visible"
    //       variants={{
    //         hidden: {
    //           scale: 0.8,
    //           opacity: 0,
    //         },
    //         visible: {
    //           scale: 2.5,
    //           opacity: 1,
    //           transition: {
    //             delay: 0.1,
    //           },
    //         },
    //       }}
    //     >
    //       {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //         <Image
    //           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //           src="/next.svg"
    //           alt="Next.js Logo"
    //           width={180}
    //           height={37}
    //           priority
    //         />
    //       </div> */}
    //       <div className="flex flex-col grow-[0.5] justify-evenly">
    //         <div className="text-[hsl(var(--clr-light))] text-left lg:leading-[1.3]">
    //           <h1>
    //             <span className={`${royale.className} text-[length:var(--fs-1000)]`}>DESiGNER</span>
    //             <span className={`${royale.className} font-normal text-[length:var(--fs-700)]`}> &</span>
    //             <span className={`${logirent.className} font-bold text-[length:var(--fs-1000)] block`}>
    //               DevelOper
    //             </span>
    //           </h1>
    //         </div>
    //         <div className="lg:text-left">
    //           <p className={`${logirent.className} text-[length:var(--fs-700)] lg:leading-[1.5]`}>
    //             <span className="text-[hsl(var(--clr-fast--primary))] font-bold">
    //               FAST
    //             </span>
    //             ,{' '}
    //             <span className="text-[hsl(var(--clr-safe))] font-bold">
    //               SAFE
    //             </span>{' '}
    //             anD{' '}
    //             <span className="text-[hsl(var(--clr-cheap))] font-bold">
    //               CHEAP
    //             </span>
    //             <span className="block">
    //               CUSTOM MADE{' '}
    //               <span className="inline-block">
    //                 webSiteS!
    //               </span>
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //     </motion.div>
    //     <div></div>
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`${royale.className} mb-3 text-2xl font-semibold`}>
    //         {/* <h2 className={`${royale.className}`}> */}
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`logirent mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
