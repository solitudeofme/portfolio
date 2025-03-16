import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Socialmedia from "./Socialmedia";
export default function Contact() {
  const socialmedias = [
    {
      socialmediaLink:
        "https://www.linkedin.com/in/niloufar-ostadmohammadi-1b4728300",
      icon: faLinkedin,
    },
    { socialmediaLink: "https://t.me/solitudeofme", icon: faTelegram },
    { socialmediaLink: "https://github.com/solitudeofme", icon: faGithub },
    {
      socialmediaLink:
        "https://www.instagram.com/emptyy178?igsh=YjNwa3JuY2ZuaHJ4",
      icon: faInstagram,
    },
  ];
  return (
    <section className="container section-pt" id="contact">
      <div className=" bg-white/5 min-h-96 w-full grid grid-cols-1 sm:grid-cols-2 gap-10 p-5 sm:p-20">
        <div>
          <h2 className="font-montserrat-black text-4xl text-white">
            Let's work together on your next project
          </h2>
          <p className="text-lg text-zinc-500 mt-5 ">
            <span className="text-primarycolor">
              I’m always open to new opportunities
            </span>
            —whether it's freelance projects, collaborations, or full-time
            roles. If you need a dedicated front-end developer to bring your
            ideas to life, I'd love to help!
            <span className="mt-3">
              Reach out, and let’s discuss how we can make something incredible!
            </span>
          </p>
        </div>
        <div className="flex-center flex-wrap gap-6 sm:gap-13 ">
          {socialmedias.map((socialmedia, index) => (
            <Socialmedia key={index} {...socialmedia} />
          ))}
        </div>
      </div>
    </section>
  );
}
