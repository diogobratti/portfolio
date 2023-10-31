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
      <div className="header flex-row bg-zinc-800">
        <div>
          <button>Fullstack and Mobile Developer</button>
          <h1 className="text-white">A man of focus, </h1>
          <h1 className="text-white">commitment and</h1>
          <h1 className="text-white">sheer will.</h1>
          <p className="text-neutral-500">My objective is add value to your business.</p>
          <a className="text-green-400" href="mailto:dbratti@gmail.com">Let&#39;s chat!</a>
        </div>
        <Image src="/images/diogo_1.png" width={361} height={642} alt="bratti" />
      </div>
      <div className="flex-column">
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