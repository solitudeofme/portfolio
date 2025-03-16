import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectBtn({ link, btnText, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-2 px-4 py-2  text-white rounded-lg border border-white/10 
            hover:bg-white hover:text-black transition-all duration-500"
    >
      <FontAwesomeIcon icon={icon} />
      {btnText}
    </a>
  );
}
