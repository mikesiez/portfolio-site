import { useState } from 'react'
import heroImg from './assets/hero.png'
import Profile from './apps/Profile'
import './App.css'


function DesktopApp({name, icon}) {
  return (
    <button className="@container appIcon p-0.5 w-full aspect-square grid grid-rows-[75%_20%]">
      <img src={heroImg} className="justify-self-center h-full aspect-square object-contain rounded "/>
      <h3 className="text-[15cqw] text-shadow-cyan-300 text-center align-text-top h-full font-mono mt-[5%]">
        {name}
      </h3>
    </button>
  )
}

function TbApp({name, icon=heroImg}) {
  return (
    <button className="group relative aspect-square h-full bg-white/10 border border-white/80 p-[0.7%] rounded hover:scale-105 hover:cursor-pointer transition shadow hover:shadow-white/50 ">
      <p className="tbAppTitle opacity-0 group-hover:opacity-100 ">{name}</p>
      <img src={icon} className="h-full aspect-square rounded" 
      />
    </button>
  );
}

function App() {

  return (
    <>
    <section id="main" className="flex flex-col h-full w-full border-0.5 border-gray-400">
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

        </div>
      </div>
      <div id="taskbar" className="h-[7%] taskbar">
        <div className="taskbarText" >// Portfolio</div>
        <div id="taskbarApps" className="h-full w-full flex justify-center space-x-5">
          <TbApp name="app1" />
          <TbApp name="app2" />
        </div>
        <div id="clock" className="taskbarText text-right ">00:00:00</div>
      </div>
    </section>
    </>
  )
}

export default App

function updateClock() {
    const now = new Date(); // Get current system time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`; //
    document.getElementById('clock').textContent = timeString; //
  }
  updateClock();
  setInterval(updateClock, 1000); //

