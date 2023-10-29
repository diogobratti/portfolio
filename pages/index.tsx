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
      <div className="header flex-row light-bg">
        <div>
          <button>Fullstack and Mobile Developer</button>
          <h1 className="white">A man of focus, </h1>
          <h1 className="white">commitment and</h1>
          <h1 className="white">sheer will.</h1>
          <p className="gray">My objective is add value to your business.</p>
          <a className="green" href="mailto:dbratti@gmail.com">Let&#39;s chat!</a>
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