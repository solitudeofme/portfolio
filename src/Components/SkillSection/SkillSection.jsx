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
import { faCircleNodes, faWater } from "@fortawesome/free-solid-svg-icons";
export default function SkillSection() {
  return (
    <section className="section-pt">
      <div className="container">
        <h1 className="section-title">Tech Stack</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 sm:gap-15">
          <Skill icon={faHtml5} bgColor={"white/5"} skillTitle={"HTML"} />
          <Skill icon={faCss3Alt} bgColor={"white/5"} skillTitle={"CSS"} />
          <Skill
            icon={faSquareJs}
            bgColor={"white/5"}
            skillTitle={"JavaScript"}
          />
          <Skill icon={faWater} bgColor={"white/5"} skillTitle={"Tailwind"} />
          <Skill icon={faReact} bgColor={"white/5"} skillTitle={"React"} />
          <Skill icon={faGitAlt} bgColor={"white/5"} skillTitle={"Git"} />
          <Skill icon={faGithub} bgColor={"white/5"} skillTitle={"GitHub"} />
          <Skill
            icon={faCircleNodes}
            bgColor={"white/5"}
            skillTitle={"Js Libraries"}
          />
          <Skill icon={faFigma} bgColor={"white/5"} skillTitle={"Figma"} />
          <Skill
            icon={faBootstrap}
            bgColor={"white/5"}
            skillTitle={"Bootstrap"}
          />
        </div>
      </div>
    </section>
  );
}
