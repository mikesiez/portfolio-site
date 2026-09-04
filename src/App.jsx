import { useEffect, useState } from 'react'
import * as Icons from "lucide-react";
import heroImg from './assets/hero.png'
import Profile from './apps/Profile'
import './App.css'


function DesktopApp({name, icon}) {
  return (
    <button className="@container appIcon glass p-0.5 w-full aspect-square grid grid-rows-[75%_20%]">
      <img src={heroImg} className="justify-self-center h-full aspect-square object-contain rounded "/>
      <h3 className="text-[15cqw] text-shadow-cyan-300 text-center align-text-top h-full font-mono mt-[5%]">
        {name}
      </h3>
    </button>
  )
}

function TbApp({name, icon=heroImg}) {
  return (
    <button className="group relative aspect-square h-full bg-gray-400/10 border border-white/30 p-[0.7%] rounded-[0.4vh] hover:scale-105 hover:cursor-pointer transition shadow hover:shadow-white/50 ">
      <p className="tbAppTitle opacity-0 group-hover:opacity-100 ">{name}</p>
      <img src={icon} className="h-full aspect-square" 
      />
    </button>
  );
}

function ProfCard() {
  return (
    <div id="profileCard" className="glass rounded-[2%] h-[85%] mt-[10%] w-[90%] ">
      <div className="absolute top-0 left-0 right-0 h-[0.1vh] bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]"/> {/*top gradient*/}
      
      <div id="profTop" className="w-[75%] grid grid-rows-1 grid-cols-[25%_75%] ml-[5%] mt-[5%] h-[20%]">
        <img src="https://media.licdn.com/dms/image/v2/D5603AQGgvVc6021vMw/profile-displayphoto-scale_200_200/B56Z23HatkKIAY-/0/1776893669871?e=1790208000&v=beta&t=YCaBMrl80WvGZzHS3ynQwcm-x2m9Lw0dAlze_Q52f4Y" className="glass rounded-[9%] aspect-square w-full "/>
        <div className="flex flex-col pl-[7%]">
          <h1 className="mt-[8%] text-[1.5vw] tracking-wide ">Michael Al Houwayek</h1>
          <h1 className="text-[0.8vw] tracking-wide text-(--accent)">CyberSec Undergrad @ Carleton U</h1>
        </div>
      </div>

      <hr className="my-[2vh] w-[85%] ml-[7.5%] border-none h-[0.1vh] bgGrad"/>

      <div className="flex w-[60%] h-[5%] ml-[5%] items-center">
        <span className="rounded-full h-[30%] aspect-square bg-[#4ade80] shadow-[0_0_6px_#4ade80]"/>
        <p className="text-[0.85vw] text-gray-400/70 ml-[4%] tracking-widest">Available for work</p>
      </div>
      <div id="bottom container" className="*:text-[2vh] ml-[6%] mt-[2%] w-[88%]">
        <p className="w-full text-white/75">
          Cybersecurity student in it for the love of systems beyond the surface; how they're built, how they fail, and how they can be secured. I like to learn by doing; building, testing, breaking, and refining until I understand the underlying mechanics, not just the outcome
        </p>
      </div>

      <hr className="my-[2vh] w-[95%] ml-[2.5%] border-none h-[0.05vh] bg-[linear-gradient(to_right,transparent_0%,rgb(59_59_59)_10%,rgb(59_59_59)_90%,transparent_100%)] opacity-80"/>

      <div className="absolute bottom-0 left-0 right-0 h-[0.2vh] bg-[linear-gradient(90deg,transparent,var(--accent-2),transparent)]"/>
    </div>
  )
}

function App() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setDate(now.toLocaleDateString([], { month: "short", day: "numeric" }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
  <section id="main" className="overflow-hidden relative flex flex-col h-screen w-screen border-0.5 border-gray-400" style={{ background: "var(--bg-primary)"}}>

    <div className="absolute inset-0 pointer-events-none"> {/* bg glows */}
      <div className="absolute rounded-full opacity-20 w-[50vw] h-[50vw] bg-(--accent) top-[-20vh] left-[-10vw] blur-[10vw]"/>
      <div className="absolute rounded-full opacity-10 w-[35vw] h-[35vw] blur-[8vw] bg-(--accent-2) bottom-[-10vh] right-[15vw]"/>
    </div>

    <div id="desktop" className="flex-1 py-[1%] px-[1%] w-full grid grid-cols-[20vw_44vw_35vw]">
      <div id="apps" className="grid grid-cols-3 auto-rows-min gap-y-[2%] gap-x-[4%]">
        <DesktopApp name="Projects" icon="" />
        <DesktopApp name="Hobbies" icon="" />
        <DesktopApp name="Experience" icon="" />
        <DesktopApp name="Misc" icon="" />
      </div>
      <div id="news">

      </div>
      <div id="profile">
        <ProfCard/>
      </div>
    </div>

    <div id="taskbar" className="h-[5.5%] taskbar glass">
      <div className="flex" >
        <div className="rounded-[25%] flex items-center justify-center font-bold w-[1.8vw] h-[1.8vw] text-[0.7vw] bg-(--accent) text-black">OS</div>
        <p className="ml-[3%] text-gray-400/50 text-[0.9vw] pt-[1%] text-center">portfolio</p>
      </div>
      <div id="taskbarApps" className="h-full w-full flex justify-center space-x-5">
        {/* <TbApp name="app1" />
        <TbApp name="app2" /> */}
        <p className="text-gray-500 text-[1vw]">//</p>
      </div>
      <div id="clock" className="text-right leading-none">
        <p className="text-[1vw] text-white">{time}</p>
        <p className="text-[0.7vw] text-gray-400">{date}</p>
      </div>
    </div>
  </section>
  )
}

export default App
