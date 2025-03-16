import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectBtn from "../Buttons/ProjectBtn";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Project({
  src,
  projectTitle,
  projectLink = false,
  projectGithub = "#",
}) {
  return (
    <div
      className="relative bg-white/5 text-zinc-200 font-onest-medium rounded-2xl overflow-hidden p-5 
      shadow-[0_0_15px_3px_rgba(255,255,255,0.1)] transition-all duration-300 "
    >
      {/* Project Title */}
      <h3 className="text-xl font-onest-semibold text-center text-white mb-3">
        {projectTitle}
      </h3>
      {/* Project Image */}
      <a
        href={projectLink}
        target="_blank"
        className="rounded-xl mb-4 overflow-hidden block"
      >
        <img
          src={"../../img/projectImages/" + src}
          alt={projectTitle}
          loading="lazy"
          className="rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </a>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <ProjectBtn
          btnText={"GitHub Repository"}
          link={projectGithub}
          icon={faGithub}
        />
        {projectLink && (
          <ProjectBtn btnText={"See Demo"} link={projectLink} icon={faLink} />
        )}
      </div>
    </div>
  );
}
