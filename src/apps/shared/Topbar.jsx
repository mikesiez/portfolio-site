import { useWindowManager } from "../../WindowManagerContext";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";


function Topbar({Icon, name, desc, maximize, maximized}) {
    const {
        closeApp,
        toggleVisibility
    } = useWindowManager();

    return (
        <div className="h-[5%] w-full border-b-[.1vh] border-gray-500/50 grid grid-rows-1 grid-cols-[5%_80%_15%]">
            <Icon className="aspect-square w-auto h-full text-gray-300 p-[10%]"/>
            <p className="text-gray-300 tracking-widest text-[2.1vh]">{name} | <span className="italic">{desc}</span></p>
            <div className="border border-gray-500/50 grid grid-cols-[1fr_auto_1fr] grid-rows-1 items-center">
                <VscChromeMinimize onClick={() => {toggleVisibility(name.toLowerCase())}} id="min" className="topBarIcon justify-self-start"/>
                <FiMaximize2 onClick={maximize} id="max" className={`${maximized ? "hidden":"block"} topBarIcon justify-self-center py-[17%]`}/>
                <FiMinimize2 onClick={maximize} id="max" className={`${maximized ? "block":"hidden"} topBarIcon justify-self-center py-[17%]`}/>
                <IoMdCloseCircleOutline onClick={() => {closeApp(name.toLowerCase())}} id="close" className="topBarIcon justify-self-end"/>
            </div>
        </div>  
    )
}

export default Topbar
