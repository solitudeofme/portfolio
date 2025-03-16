import Project from "./Project";
export default function ProjectSection() {
  return (
    <section className="py-24 ">
      <div className="container">
        <h1 className="section-title">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20">
          <Project
            projectTitle={"My Portfolio"}
            projectImg={"project1.png"}
            projectGithub={"https://github.com/solitudeofme/portfolio"}
          />
          <Project
            projectTitle={"Coffee"}
            projectImg={"project2.png"}
            projectGithub={"https://github.com/solitudeofme/Coffee-Shop"}
            projectLink={true}
          />
          <Project
            projectTitle={"Avita"}
            projectImg={"project3.png"}
            projectGithub={
              "https://github.com/solitudeofme/avita-project-onepage"
            }
          />
          <Project
            projectTitle={"Guess My Number"}
            projectImg={"project4.png"}
            projectGithub={"https://github.com/solitudeofme/Guess-My-Number"}
          />
          <Project
            projectTitle={"Pig Game"}
            projectImg={"project5.png"}
            projectGithub={"https://github.com/solitudeofme/Pig-Game"}
          />
          <Project
            projectTitle={"Login Page 1"}
            projectImg={"project6.png"}
            projectGithub={"https://github.com/solitudeofme/login-page4"}
            projectLink={true}
          />
          <Project
            projectTitle={"Login Page 2"}
            projectImg={"project7.png"}
            projectGithub={"https://github.com/solitudeofme/login-page2"}
            projectLink={true}
          />
          <Project
            projectTitle={"Login Page 3"}
            projectImg={"project8.png"}
            projectGithub={"https://github.com/solitudeofme/login-page1"}
            projectLink={true}
          />
        </div>
      </div>
    </section>
  );
}
