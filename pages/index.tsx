import type { NextPage } from "next";
import About from "../components/About";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="justify-between px-20 pt-4 pb-0 flex flex-row bg-zinc-800">
        <div>
          <button className="border-0 rounded-sm py-2 px-4 bg-green-400 text-zinc-800 cursor-pointer font-semibold text-sm">Fullstack and Mobile Developer</button>
          <h1 className="text-white text-5xl font-medium">A man of focus, </h1>
          <h1 className="text-white text-5xl font-medium">commitment and</h1>
          <h1 className="text-white text-5xl font-medium">sheer will.</h1>
          <p className="text-neutral-500 text-sm font-medium mt-4 mb-8">My objective is add value to your business.</p>
          <a className="text-green-400 no-underline decoration-inherit" href="mailto:dbratti@gmail.com">Let&#39;s chat!</a>
        </div>
        <Image src="/images/diogo_1.png" width={361} height={642} alt="bratti" />
      </div>
      <div className="flex flex-col grow items-center">
        <About />
        <Skill />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </>
  )
}

export default Home;