import Topbar from './shared/Topbar'
import {appConfig} from "../appConfig";
import { useState } from 'react';
const config = appConfig.skills

const skills = {
  Programming: [
    ["Python", 90],
    ["JavaScript", 80],
    ["C", 75],
  ],
  Systems: [
    ["Linux", 85],
    ["Networking", 75],
    ["Git", 85],
  ],
  Web: [
    ["React", 80],
    ["Flask", 80],
    ["Tailwind", 80],
  ],
};

function Skills({className}) {
    const [maximized, setMaximized] = useState(false)
    function maximize() {
        setMaximized(!maximized);
    }
    
    return (
        <div className={className} data-maximized={maximized}>
            <Topbar maximize={maximize} maximized={maximized} Icon={config.icon} name={config.name} desc={config.desc}/>

            <div id="appContent" className="appContainer">

                {Object.entries(skills).map(([category, items]) => (
                <section
                    key={category}
                    className="w-[90%] ml-[5%] mb-[3%]"
                >

                    <h2 className="text-[2cqw] text-(--accent) font-mono tracking-widest">
                    // {category.toUpperCase()}
                    </h2>

                    <div className="ml-[1%] mt-[-0.5%]">

                    {items.map(([skill, level]) => (
                        <div key={skill} className="mt-[1%] w-[98%]">

                            <div className="flex justify-between">
                                <span className="text-[1.6cqw]">
                                {skill}
                                </span>

                                <span className="text-[1.6cqw] text-gray-500">
                                {level > 90 ? "Expert" : level > 80 ? "Strong" : level > 60 ? "Good" : level > 25 ? "Familiar" : "Unfamiliar"}
                                </span>
                            </div>

                            <div className="w-full h-[0.4cqh] bg-white/5 mt-[-0.4%]">
                                <div
                                className="h-full bg-(--accent) shadow-[0_0_8px_var(--accent)]"
                                style={{ width: `${level}%` }}
                                />
                            </div>

                        </div>
                    ))}

                    </div>
                </section>
                ))}

            </div>
            

        </div>
    )
}

export default Skills