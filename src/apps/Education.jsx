import Topbar from './shared/Topbar'
import {appConfig} from "../appConfig";
import { useState } from 'react';
const config = appConfig.education

const education = [
  {
    institution: "Carleton University",
    degree: "Bachelor of Cybersecurity",
    period: "2025 - 2029",
    grade: "11.85 CGPA",
    focus: ["Cybersecurity", "Computer Science"],
    courses: [
      {
        code: "COMP 2401",
        name: "Introduction to Systems Programming",
        grade: "A+",
        details: "C, pointers, memory management, compilation, processes, threads, and sockets."
      },
      {
        code: "COMP 2406",
        name: "Fundamentals of Web Applications",
        grade: "A+",
        details: "HTML, CSS, JavaScript, HTTP/S, JSON/AJAX, Node.js, Express, MongoDB, sessions, and cookies."
      },
      {
        code: "COMP 1805",
        name: "Discrete Structures I",
        grade: "A+",
        details: "Proofs, logic, graphs, sets, relations, algorithms, and asymptotic analysis."
      },
      {
        code: "COMP 1406",
        name: "Introduction to Computer Science II",
        grade: "A+",
        details: "Object-oriented programming and software development using Java."
      },
      {
        code: "COMP 1405",
        name: "Introduction to Computer Science I",
        grade: "A+",
        details: "Programming fundamentals using Python."
      },
      {
        code: "MATH 1007"
      }
    ],
    electives: [
      {name:"Mysteries of the Mind",code:"CGSC 1001",grade:"In Progress"}
    ]
  },
  {
    institution: "Lycée Claudel",
    degree: "French Baccalauréat — General Track",
    period: "2025",
    grade: "91%",
    focus: ["Mathematics", "Computer Science"],
    courses: [],
    electives: []
  }
];

function Education({className}) {
  const [maximized, setMaximized] = useState(false);
  const [openInstitutions, setOpenInstitutions] = useState(["Carleton University"]);
  const [openCourses, setOpenCourses] = useState([]);

  function maximize() {
    setMaximized(!maximized);
  }

  function toggleInstitution(institution) {
    setOpenInstitutions(prev =>
      prev.includes(institution)
        ? prev.filter(item => item !== institution)
        : [...prev, institution]
    );
  }

  function toggleCourse(code) {
    setOpenCourses(prev =>
      prev.includes(code)
        ? prev.filter(item => item !== code)
        : [...prev, code]
    );
  }

  return (
    <div className={className} data-maximized={maximized}>
      <Topbar maximize={maximize} maximized={maximized} Icon={config.icon} name={config.name} desc={config.desc}/>

      <div className="appContainer px-[3%]">
        
        <div className="mb-[3%]">
          <p className="text-[2cqw] text-(--accent) tracking-widest">
            // EDUCATION
          </p>
          <h1 className="text-[2.5cqw] font-semibold tracking-wide">
            Academic Record
          </h1>
          <p className="text-[1.5cqw] text-(--text-secondary)">
            Institutions, coursework, and academic focus.
          </p>
        </div>

        <div className="flex flex-col space-y-[1%]">

          {education.map((school) => {
            const institutionOpen = openInstitutions.includes(school.institution);

            return (
              <div
                key={school.institution}
                className="glass rounded-[1%] overflow-hidden transition-all"
              >

                {/* Institution header */}
                <button
                  onClick={() => toggleInstitution(school.institution)}
                  className="w-full text-left px-[2%] py-[1%] hover:bg-white/5 hover:cursor-pointer transition"
                >
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[2.5cqw] font-semibold tracking-wide">
                        {school.institution}
                      </p>

                      <p className="text-[1.7cqw] text-(--accent) leading-[3cqh]">
                        {school.degree}
                      </p>

                      <p className="text-[1.5cqw] text-(--text-secondary) mt-[0.5%]">
                        {school.period}
                      </p>
                    </div>

                    <div className="flex items-center gap-[2cqw]">
                      <div className="text-right">
                        <p className="text-[2cqw] text-(--text-secondary)">
                          OVERALL
                        </p>
                        <p className="text-[2.5cqw] text-(--accent) font-semibold">
                          {school.grade}
                        </p>
                      </div>

                      <span className="text-[4cqw] text-gray-400">
                        {institutionOpen ? "-" : "+"}
                      </span>
                    </div>

                  </div>
                </button>

                <div
                    className={`overflow-hidden grid transition-[grid-template-rows] duration-300 ease-in-out 
                      ${institutionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                    `}
                >
                  <div className='min-h-0'>
                    <div className="border-t border-white/10 p-[2.5%]">

                      {/* Focus */}
                      <div className="mb-[4%]">
                        <p className="text-[2cqw] text-(--accent) tracking-widest mb-[1.5%]">
                          FOCUS
                        </p>

                        <div className="flex flex-wrap gap-[1%]">
                          {school.focus.map(item => (
                            <span
                              key={item}
                              className="text-[1.5cqw] px-[1.2%] py-[0.5%] rounded bg-(--accent)/10 border border-(--accent)/20 text-(--accent)"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Courses */}
                      {school.courses.length > 0 && (
                        <div>
                          <p className="text-[2cqw] text-(--accent) tracking-widest mb-[0.5%]">
                            COURSES
                          </p>
                          
                          <div className="flex flex-col">

                            {school.courses.map(course => {
                              const courseOpen = openCourses.includes(course.code);

                              return (
                                <div
                                  key={course.code}
                                  className="border-b border-white/5 last:border-none"
                                >

                                  <button
                                    onClick={() => toggleCourse(course.code)}
                                    className="w-full flex items-center justify-between py-[0.5%] text-left hover:bg-white/5 hover:cursor-pointer px-[1%] transition"
                                  >
                                    <div className="flex items-center gap-[2%] whitespace-nowrap">
                                      <span className="text-[1.5cqw] text-(--accent) font-mono">
                                        {course.code}
                                      </span>

                                      <span className="text-[1.5cqw] text-white/80">
                                        {course.name}
                                      </span>
                                    </div>

                                    <div className="flex items-center gap-[2cqw]">
                                      <span className="text-[2cqw] font-semibold text-white">
                                        {course.grade}
                                      </span>

                                      <span className="text-[2cqw] text-gray-500">
                                        {courseOpen ? "-" : "+"}
                                      </span>
                                    </div>
                                  </button>

                                  <div
                                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                          courseOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                                      }`}
                                  >
                                    <div className="px-[4%] pb-[2%]">
                                      <p className="text-[1.5cqw] text-(--text-secondary) leading-relaxed">
                                        {`>> ${course.details}`}
                                      </p>
                                    </div>
                                  </div>

                                </div>
                              );
                            })}

                          </div>
                        </div>
                      )}

                      {/* Electives */}
                      {school.electives.length > 0 && (
                        <div className="mt-[4%]">
                          <p className="text-[1.7cqw] text-(--accent) tracking-widest">
                            ELECTIVES
                          </p>

                          <div className="flex flex-col whitespace-nowrap">
                            {school.electives.map(course => (
                              <div
                                key={course.code}
                                className="flex items-center justify-between border-b border-white/5"
                              >
                                <div className='ml-[1%]'>
                                  <span className="text-[1.5cqw] text-(--accent) font-mono">
                                    {course.code}
                                  </span>

                                  <span className="text-[1.5cqw] text-white/80 ml-[3%]">
                                    {course.name}
                                  </span>
                                </div>

                                <span className="text-[2cqw] py-[0.3%] font-semibold">
                                  {course.grade}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}

export default Education;
