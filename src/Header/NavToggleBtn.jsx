import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavToggleButton({ isOpen, toggle }) {
  return (
    <button className="text-pink-800 text-4xl" onClick={toggle}>
      <FontAwesomeIcon icon={isOpen ? faXmark : faBarsStaggered} />
    </button>
  );
}
