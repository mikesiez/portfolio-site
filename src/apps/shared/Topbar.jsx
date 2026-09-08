import { useWindowManager } from "../../WindowManagerContext";
import { IoCloseSharp } from "react-icons/io5";
import { VscChromeMinimize } from "react-icons/vsc";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";


function Topbar({Icon, name, desc, maximize, maximized}) {
    const {
        closeApp,
        toggleVisibility
    } = useWindowManager();

    return (
        <div className="@container h-[5%] w-full border-b-[.1vh] border-gray-500/50 grid grid-rows-1 grid-cols-[5%_83%_12%]">
            <Icon className="aspect-square w-auto h-full text-gray-300 p-[10%]"/>
            <p className="pl-[1%] text-gray-300 tracking-widest text-[min(2.3cqh,1.2cqw)] self-center">{name}<span className="italic text-[min(2cqh,1cqw)] text-gray-500"> | {desc}</span></p>
            <div className="border rounded m-[0.5%] border-gray-500/50 grid grid-cols-[1fr_auto_1fr] grid-rows-1 items-center">
                <VscChromeMinimize onClick={() => {toggleVisibility(name.toLowerCase())}} id="min" className="topBarIcon justify-self-start"/>
                <FiMaximize2 onClick={maximize} id="max" className={`${maximized ? "hidden":"block"} topBarIcon justify-self-center py-[17%]`}/>
                <FiMinimize2 onClick={maximize} id="max" className={`${maximized ? "block":"hidden"} topBarIcon justify-self-center py-[17%]`}/>
                <IoCloseSharp onClick={() => {closeApp(name.toLowerCase())}} id="close" className="topBarIcon justify-self-end"/>
            </div>
        </div>  
    )
}

export default Topbar
