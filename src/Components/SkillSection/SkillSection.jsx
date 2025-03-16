import {
  faBootstrap,
  faCss3Alt,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import Skill from "./Skill";
import {
  faCircleNodes,
  faCode,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
export default function SkillSection() {
  const skills = [
    { icon: faHtml5, bgColor: "white/5", skillTitle: "HTML" },
    { icon: faCss3Alt, bgColor: "white/5", skillTitle: "CSS" },
    { icon: faSquareJs, bgColor: "white/5", skillTitle: "JavaScript" },
    { icon: faWater, bgColor: "white/5", skillTitle: "Tailwind" },
    { icon: faReact, bgColor: "white/5", skillTitle: "React" },
    { icon: faGitAlt, bgColor: "white/5", skillTitle: "Git" },
    { icon: faGithub, bgColor: "white/5", skillTitle: "GitHub" },
    { icon: faCircleNodes, bgColor: "white/5", skillTitle: "Js Libraries" },
    { icon: faFigma, bgColor: "white/5", skillTitle: "Figma" },
    { icon: faBootstrap, bgColor: "white/5", skillTitle: "Bootstrap" },
    { icon: faCode, bgColor: "white/5", skillTitle: "Responsive" },
  ];
  return (
    <section id="skillsection" className="section-pt">
      <div className="container">
        <h1 className="section-title">Tech Stack</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 sm:gap-15">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              icon={skill.icon}
              bgColor={skill.bgColor}
              skillTitle={skill.skillTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
