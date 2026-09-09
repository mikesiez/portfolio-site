import {appConfig} from "./appConfig";
import { WindowManagerContext } from "./WindowManagerContext";
import { useEffect, useState } from 'react'
import './Globals.css'

import ProfCard from './components/ProfCard'

function DesktopApp({name, Icon, openApp}) {
  return (
    <button 
      className="@container appIcon glass p-0.5 w-full aspect-square grid grid-rows-[75%_20%]"
      onClick={openApp}
      >
      <Icon className="justify-self-center h-full w-auto aspect-square rounded"/>
      <h3 className="text-[15cqw] text-shadow-[var(--accent)] text-shadow-2xs text-center align-text-top h-full font-mono mt-[5%]">
        {name}
      </h3>
    </button>
  )
}

function TbApp({name, Icon, active, onClick}) {
  return (
    <button 
      onClick={onClick}
      className={`group relative aspect-square h-full p-[0.2%] rounded-[0.4vh] 
      ${active ? "border-[0.12vw] border-white/60 backdrop-blur-[1vw] bg-(--bg-glass)" : "bg-gray-400/10 border border-white/30"} 
      ${active ? "" : "hover:"}shadow-white/50
      hover:scale-105 hover:cursor-pointer shadow transition`}>
      
      <p className="tbAppTitle opacity-0 group-hover:opacity-100">{name}</p>
      <Icon className="h-full w-auto aspect-square"/>
    </button>
  );
}

const appFiles = import.meta.glob("./apps/*.jsx", {
  eager: true,
  import: "default"
});
const apps = Object.entries(appFiles).map(([path, component]) => {
  const id = path.split("/").pop().replace(".jsx", "").toLowerCase();

  return {
    id,
    component,
    ...appConfig[id],
  }
});

function App() {
  const [accent, setAccent] = useState("#63d4ff");
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

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

  const [openApps, setOpenApps] = useState([]);
  const [activeApp, setActiveApp] = useState(null);

  const openApp = (id) => {
    if (!openApps.includes(id)) {
      setOpenApps(prev => [...prev, id]);
    }
    setActiveApp(id);
  };

  const closeApp = (id) => {
    setOpenApps(prev => prev.filter(app => app !== id));
    setActiveApp(prev =>
      prev === id ? null : prev
    );
  };

  const toggleVisibility = (id) => {
    if (activeApp === id) {
      setActiveApp(null);
    } else {
      setActiveApp(id);
    }
  };

  return (
    <WindowManagerContext.Provider
      value={{
        openApp,
        closeApp,
        toggleVisibility,
        activeApp,
      }}
    >
    <section id="main" className="relative flex flex-col h-screen w-screen border-0.5 border-gray-400 bg-(--bg-primary)">
        
        {openApps.map(appId => {
          if (appId !== activeApp) return null;
          const app = apps.find(a => a.id === appId);

          const AppComponent = app.component;

          return (
            <AppComponent
              key={app.id}
            />
          );
        })}

        <input
          type="color"
          value={accent}
          onChange={(e) => setAccent(e.target.value)}
          className="absolute aspect-square top-[2vh] right-[4vw] rounded-[100]"
        />
        <div className="absolute inset-0 pointer-events-none overflow-hidden"> {/* bg glows */}
          <div className="absolute rounded-full opacity-20 w-[50vw] h-[50vw] bg-(--accent) top-[-20vh] left-[-10vw] blur-[10vw]"/>
          <div className="absolute rounded-full opacity-10 w-[35vw] h-[35vw] blur-[8vw] bg-(--accent-2) bottom-[-10vh] right-[15vw]"/>
        </div>

        <div id="desktop" className="flex-1 py-[1%] px-[1%] w-full grid grid-cols-[20vw_44vw_35vw]">
          <div id="apps" className="grid grid-cols-3 auto-rows-min gap-y-[2%] gap-x-[4%]">
            {apps.map(app => (
              <DesktopApp
                name={app.name}
                Icon={app.icon}
                key={app.id}
                openApp={() => openApp(app.id)}
              />
            ))}
            
          </div>
          <div id="news">

          </div>
          <div id="profile">
            <ProfCard/>
          </div>
        </div>

        <div id="taskbar" className="h-[5%] taskbar glass">
          <div className="flex">
            <div onClick={() => {window.location.href="/"}} className="OSIcon text-[min(0.7vw,2.3vh)] flex items-center justify-center">OS</div>
            <p className="ml-[3%] text-gray-400/50 text-[min(0.9vw,3vh)] pt-[1%] text-center">portfolio</p>
          </div>
          <div id="taskbarApps" className="h-full w-full flex justify-center space-x-5">

            {openApps.length === 0 ? <p className="text-gray-500 text-[min(1.1vw,1.7vh)]">//</p> : 
            openApps.map(appId => {
              const app = apps.find(a => a.id === appId);

              return (
                <TbApp
                  key={app.id}
                  name={app.name}
                  Icon={app.icon}
                  active={activeApp === app.id}
                  onClick={() => toggleVisibility(app.id)}
                />
              );
            })}

          </div>
          <div id="clock" className="text-right leading-none">
            <p className="text-[min(1vw,1.8vh)] text-white">{time}</p>
            <p className="text-[min(0.7vw,1.8vh)] text-gray-400">{date}</p>
          </div>
        </div>
      </section>

    </WindowManagerContext.Provider>
  )
}

export default App
