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
        className="w-full text-left grid grid-cols-[8%_1fr_auto] items-center p-[3%] hover:bg-white/[0.04] transition"
      >

        <span className="text-[2cqw] text-(--accent) font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h2 className="text-[4cqw] leading-none">
            {experience.title}
          </h2>

          <p className="text-[2.5cqw] text-gray-500 mt-[1%]">
            {experience.employer}
            <span className="mx-[1%]">•</span>
            {experience.period}
          </p>
        </div>

        <span className="text-[3cqw] text-gray-500">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`
          grid transition-[grid-template-rows] duration-300
          ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">

          <div className="border-t border-white/10 p-[4%]">

            <p className="text-[2.7cqw] text-gray-300/80 leading-relaxed">
              {experience.description}
            </p>

            <div className="mt-[5%]">
              <p className="text-[2cqw] text-(--accent) font-mono tracking-widest">
                // DETAILS
              </p>

              <ul className="mt-[2%] space-y-[1.5%]">
                {experience.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-[2.4cqw] text-gray-400 flex gap-[2%]"
                  >
                    <span className="text-(--accent)">›</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[5%] flex flex-wrap gap-[1.5%]">
              {experience.skills.map(skill => (
                <span
                  key={skill}
                  className="text-[2cqw] px-[2%] py-[1%] rounded-full
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

function Experience() {
  const [maximized, setMaximized] = useState(false);

  return (
    <div className="appMainDiv" data-maximized={maximized}>

      <Topbar
        maximize={() => setMaximized(!maximized)}
        maximized={maximized}
        Icon={config.icon}
        name={config.name}
        desc={config.desc}
      />

      <div className="@container flex-1 min-h-0 overflow-y-auto">

        <div className="w-full pt-[5%] pb-[8%]">

          <div className="w-[92%] ml-[4%] mb-[6%]">
            <p className="text-[2cqw] text-(--accent) font-mono tracking-[0.2em]">
              // CAREER_LOG
            </p>

            <h1 className="text-[7cqw] mt-[1%]">
              Experience
            </h1>

            <p className="text-[2.5cqw] text-gray-500 mt-[1%]">
              Places I've worked, taught, organized, and learned.
            </p>
          </div>

          <div className="space-y-[2%]">
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