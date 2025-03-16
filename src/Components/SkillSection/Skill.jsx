import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skill({ icon, bgColor, skillTitle }) {
  return (
    <div
      className={
        "bg-" +
        bgColor +
        " flex-center aspect-3/2 rounded-4xl shadow-white font-onest-semibold flex gap-1.5"
      }
    >
      <FontAwesomeIcon
        className="text-primarycolor text-2xl"
        icon={icon}
      ></FontAwesomeIcon>
      <h2 className="text-white text-xl text-center">{skillTitle}</h2>
    </div>
  );
}
