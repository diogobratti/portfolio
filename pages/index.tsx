import type { NextPage } from "next";
import About from "../components/About";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="justify-around px-8 md:px-20 pt-4 pb-0 flex flex-col md:flex-row bg-zinc-800">
        <div className="md:pt-8">
          <button className="border-0 rounded-sm py-2 px-4 bg-green-500 text-zinc-800 cursor-pointer font-semibold text-sm">Fullstack and Mobile Engineer</button>
          <h1 className="text-white mt-12 text-5xl font-medium">A man of focus, </h1>
          <h1 className="text-white text-5xl font-medium mt-8">commitment and</h1>
          <h1 className="text-white text-5xl font-medium mt-8">sheer will.</h1>
          <p className="text-neutral-500 text-sm font-medium mt-12 mb-12">My objective is add value to your business.</p>
          <a className="text-green-500 underline uppercase decoration-inherit font-bold" href="mailto:dbratti@gmail.com">Let&#39;s chat!</a>
        </div>
        <div className="mt-8">
          <Image src="/images/diogo_4.png" width={360} height={454} alt="Diogo Bratti" />
        </div>
      </div>
      <div className="flex flex-col grow items-center">
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}

export default Home;