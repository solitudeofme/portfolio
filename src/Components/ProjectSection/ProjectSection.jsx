import Project from "./Project";

export default function ProjectSection() {
  const projectInfo = [
    {
      projectTitle: "My Portfolio",
      src: "project1.png",
      projectGithub: "https://github.com/solitudeofme/portfolio",
      projectLink: null,
    },
    {
      projectTitle: "Coffee-shop",
      src: "project2.png",
      projectGithub: "https://github.com/solitudeofme/Coffee-shop",
      projectLink:
        "https://coffee-shop-cjgo-1ay4wpfx7-solitudeofmes-projects.vercel.app/",
    },
    {
      projectTitle: "Avita",
      src: "project3.png",
      projectGithub: "https://github.com/solitudeofme/Avita",
      projectLink: "https://radiant-dusk-b85fcc.netlify.app/",
    },
    {
      projectTitle: "Guess My Number",
      src: "project4.png",
      projectGithub: "https://github.com/solitudeofme/Guess-My-Number",
      projectLink: null,
    },
    {
      projectTitle: "Pig Game",
      src: "project5.png",
      projectGithub: "https://github.com/solitudeofme/Pig-Game",
      projectLink: null,
    },
    {
      projectTitle: "Login Page 1",
      src: "project6.png",
      projectGithub: "https://github.com/solitudeofme/Login-page4",
      projectLink: null,
    },
    {
      projectTitle: "Login Page 2",
      src: "project7.png",
      projectGithub: "https://github.com/solitudeofme/login-page2",
      projectLink: null,
    },
    {
      projectTitle: "Login Page 3",
      src: "project8.png",
      projectGithub: "https://github.com/solitudeofme/login-page1",
      projectLink: null,
    },
  ];

  return (
    <section id="projectsection" className="section-pt">
      <div className="container">
        <h1 className="section-title">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20">
          {projectInfo.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
