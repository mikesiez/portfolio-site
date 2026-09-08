import Topbar from './shared/Topbar'
import {appConfig} from "../appConfig";
import { useState } from 'react';
const config = appConfig.projects

const projects = [
  {
    name: "Home Server",
    type: "Infrastructure",
    description:
      "A self-hosted Linux server running web applications behind Nginx and Gunicorn.",
    technologies: ["Python", "Flask", "Nginx", "Linux"],
  },
  {
    name: "Minecraft Server API",
    type: "Backend",
    description:
      "A Flask API used to interact with and control a Minecraft server.",
    technologies: ["Python", "Flask", "REST API"],
  },
  {
    name: "Cybersecurity Projects",
    type: "Security",
    description:
      "Hands-on experimentation with systems, networking, web security, and defensive techniques.",
    technologies: ["Python", "Linux", "Networking"],
  },
];

function Projects() {
    const [maximized, setMaximized] = useState(false)
    function maximize() {
        setMaximized(!maximized);
    }

    return (
        <div className="appMainDiv" data-maximized={maximized}>
            <Topbar maximize={maximize} maximized={maximized} Icon={config.icon} name={config.name} desc={config.desc}/>

            <div id="appContent" className="@container flex-1 min-h-0 overflow-y-auto">

                <div className="grid grid-cols-2 gap-[2%] w-[92%] ml-[4%]">

                    {projects.map((project, index) => (
                        <div
                        key={project.name}
                        className="border border-white/10 rounded-[2%] p-[5%]
                        bg-white/[0.02] hover:bg-white/[0.05]
                        hover:border-(--accent)/30 transition group"
                        >

                        <div className="flex justify-between items-start">

                            <span className="text-[2cqw] text-(--accent) font-mono">
                            P_{String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-[1.8cqw] text-gray-600">
                            {project.type}
                            </span>

                        </div>

                        <h2 className="text-[4cqw] mt-[8%]">
                            {project.name}
                        </h2>

                        <p className="text-[2.3cqw] text-gray-400 mt-[4%] leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-[2%] mt-[8%]">
                            {project.technologies.map(tech => (
                            <span
                                key={tech}
                                className="text-[1.8cqw] text-gray-500
                                border border-white/10 rounded px-[3%] py-[1%]"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="mt-[8%] text-[2cqw] text-(--accent) opacity-50 group-hover:opacity-100 transition">
                            VIEW PROJECT ↗
                        </div>

                        </div>
                    ))}

                    </div>

            </div>

        </div>
    )
}

export default Projects