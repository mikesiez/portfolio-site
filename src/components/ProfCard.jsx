import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const profile = {
  name: "Michael Al Houwayek",
  title: "CyberSec Undergrad @ Carleton U",
  bio: `Cybersecurity student in it for the love of systems beyond the surface; how they're built, how they fail, and how they can be secured. I like to learn by doing; building, testing, breaking, and refining until I understand the underlying mechanics, not just the outcome`,
  avatar: "https://media.licdn.com/dms/image/v2/D5603AQGgvVc6021vMw/profile-displayphoto-scale_200_200/B56Z23HatkKIAY-/0/1776893669871?e=1790208000&v=beta&t=YCaBMrl80WvGZzHS3ynQwcm-x2m9Lw0dAlze_Q52f4Y" , // replace with your photo
  socials: [
    { platform: "Github", url: "https://github.com/mikesiez", icon: FaGithub },
    { platform: "LinkedIn", url: "https://linkedin.com/in/michaelalhk", icon: FaLinkedin },
    { platform: "Instagram", url: "https://instagram.com/michael_alhk", icon: FaInstagram },
    { platform: "Email", url: "mailto:malhouwayek@gmail.com", icon: CiMail },
  ],
};

function ProfCard() {
  return (
    <div id="profileCard" className="@container glass rounded-[2%] h-[85%] mt-[10%] w-[90%] ">
      <div className="absolute top-0 left-0 right-0 h-[0.1vh] bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]"/> {/*top gradient*/}
      
      <div id="profTop" className="w-[75%] grid grid-rows-1 grid-cols-[25%_75%] ml-[5%] mt-[5%] h-[20%]">
        <img src={profile.avatar}
          className="glass rounded-[9%] aspect-square w-full "/>
        <div className="flex flex-col pl-[7%]">
          <h1 className="mt-[8%] text-[5cqw] tracking-wide ">{profile.name}</h1>
          <h1 className="text-[2.8cqw] tracking-wide text-(--accent)">{profile.title}</h1>
        </div>
      </div>

      <hr className="mb-[2vh] w-[85%] ml-[7.5%] border-none h-[0.15vh] 
      bg-[linear-gradient(to_right,transparent_0%,rgb(103_232_249)_10%,rgb(103_232_249)_90%,transparent_100%)]"/>

      <div className="flex w-[60%] h-[5%] ml-[5%] items-center">
        <span className="rounded-full h-[30%] aspect-square bg-[#4ade80] shadow-[0_0_6px_#4ade80]"/>
        <p className="text-[3cqw] text-gray-400/70 ml-[4%] tracking-widest">Available for work</p>
      </div>
      <div id="bottom container" className="*:text-[3.7cqw] ml-[6%] mt-[2%] w-[88%]">
        <p className="w-full text-white/75">
          {profile.bio}
        </p>
      </div>

      <hr className="my-[2vh] w-[95%] ml-[2.5%] border-none h-[0.3vh] 
      bg-[linear-gradient(to_right,transparent_0%,rgb(59_59_59)_10%,rgb(59_59_59)_90%,transparent_100%)] opacity-80"/>

      <div className="flex flex-col gap-[0.8vh] ml-[5%]">
        <p className="text-[3.5cqw] text-(--accent)">// LINKS</p>
        {profile.socials.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[0.5vw] text-(--text-secondary) text-[3.2cqw]"
            >
              <IconComponent className="aspect-square w-[5%]"/>
              <span>{social.platform}</span>
              <span className="opacity-30">↗</span>
            </a>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.2vh] bg-[linear-gradient(90deg,transparent,var(--accent-2),transparent)]"/>
    </div>
  )
}


export default ProfCard