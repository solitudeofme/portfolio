import Nav from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <header className="fixed top-4 w-[96%] left-0 right-0 mx-auto  h-15 rounded-2xl backdrop-blur-[2px]">
      <div className="container  h-full flex justify-between items-center">
        <div>
          <FontAwesomeIcon
            icon={faSkull}
            className="text-pink-800 text-4xl"
          ></FontAwesomeIcon>
        </div>
        <Nav />
      </div>
    </header>
  );
}
