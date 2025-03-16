import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Socialmedia({ socialmediaLink, icon }) {
  return (
    <a
      href={socialmediaLink}
      target="_blank"
      className="inline-block flex-center rounded-full text-white  hover:text-primarycolordarker
       transition-colors delay-75"
    >
      <FontAwesomeIcon icon={icon} className="text-5xl" />
    </a>
  );
}
