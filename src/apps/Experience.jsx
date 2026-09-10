import Topbar from './shared/Topbar'
import { appConfig } from "../appConfig";
import { useState } from "react";

const config = appConfig.experience;

const experiences = [
  {
    title: "Coding Camp Counselor",
    employer: "Summer Coding Camp",
    period: "Summer",
    type: "Education",
    description:
      "Worked with students in a coding and game development camp, helping introduce programming concepts through hands-on projects.",
    details: [
      "Guided students through programming activities",
      "Helped troubleshoot projects and explain programming concepts",
      "Worked with students of different experience levels",
    ],
    skills: ["Programming", "Teaching", "Problem Solving"],
  },
  {
    title: "Hackathon Organizer",
    employer: "Hack the Hill III",
    period: "2026",
    type: "Event Organization",
    description:
      "Contributing to the organization and logistics of a large-scale student hackathon.",
    details: [
      "Coordinating event logistics and equipment",
      "Working with sponsors and campus organizations",
      "Helping plan the event schedule and competition infrastructure",
    ],
    skills: ["Logistics", "Coordination", "Event Planning"],
  },
];

function ExperienceCard({ experience, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[92%] ml-[4%] border border-white/10 rounded-[1%] bg-white/[0.02] overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left grid grid-cols-[8%_1fr_auto] items-center px-[2%] py-[1.3%] hover:bg-white/[0.04] hover:cursor-pointer transition"
      >

        <span className="text-[2cqw] text-(--accent) font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h2 className="text-[2.5cqw] leading-none">
            {experience.title}
          </h2>

          <p className="text-[2cqw] text-gray-400 mt-[0.5%]">
            {experience.employer}
            <span className="mx-[1%]">•</span>
            {experience.period}
          </p>
        </div>

        <span className="text-[4cqw] text-gray-500">
          {open ? "-" : "+"}
        </span>
      </button>

      <div
        className={`
          grid transition-[grid-template-rows] duration-300
          ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">

          <div className="border-t border-white/10 px-[3%] py-[2%]">

            <p className="text-[1.7cqw] text-gray-200/80 leading-relaxed">
              {experience.description}
            </p>

            <div className="mt-[2%] ml-[1%]">
              <p className="text-[2cqw] text-(--accent) font-mono tracking-widest">
                // DETAILS
              </p>

              <ul className="mt-[0.3%] space-y-[0.4%] ml-[1%]">
                {experience.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-[1.8cqw] text-gray-300 flex gap-[2%]"
                  >
                    <span className="text-(--accent)">›</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[3%] flex flex-wrap gap-[1.5%]">
              {experience.skills.map(skill => (
                <span
                  key={skill}
                  className="text-[1.7cqw] px-[2%] py-[0.5%] rounded-full
                  border border-(--accent)/30
                  text-(--accent)
                  bg-(--accent)/5"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function Experience({className}) {
  const [maximized, setMaximized] = useState(false);
  function maximize() {
    setMaximized(!maximized);
  }

  return (
    <div className={className} data-maximized={maximized}>

      <Topbar maximize={maximize} maximized={maximized} Icon={config.icon} name={config.name} desc={config.desc}/>

      <div className="appContainer">

        <div className="w-full">

          <div className="w-[92%] ml-[4%] mb-[1%]">
            <p className="text-[2cqw] text-(--accent) font-mono tracking-widest">
              // CAREER_LOG
            </p>

            {/* <h1 className="text-[3cqw] ml-[1%]">
              Experience
            </h1> */}

            <p className="text-[2cqw] text-gray-500 italic ml-[2%]">
              Places I've worked, taught, organized, and learned.
            </p>
          </div>

          <hr className="mb-[1%] w-[90%] ml-[5%] border-none h-[0.1cqh]
      bg-[linear-gradient(to_right,transparent_0%,var(--accent)_10%,var(--accent)_90%,transparent_100%)]"/>

          <div className="space-y-[1%]">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title}
                experience={experience}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Experience;