import NavItem from "./NavItem";
import { useState } from "react";
import NavToggleBtn from "./NavToggleBtn";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <ul className="hidden  sm:flex items-center gap-8 text-white text-xl font-montserrat-bold child-hover:text-pink-700 child-hover:transition-colors">
        {/* Desktop Nav */}
        <li>
          <NavItem messege={"Home"} />
        </li>
        <li>
          <NavItem messege={"About"} />
        </li>
        <li>
          <NavItem messege={"Projects"} />
        </li>
        <li>
          <NavItem messege={"Contact"} />
        </li>
      </ul>
      {/* Mobile Nav */}
      <div className="block sm:hidden relative">
        <NavToggleBtn isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <ul className="w-44  text-white text-lg rounded-xl child:text-center child:h-10 flex flex-col child:flex-center absolute top-10 right-0 border border-pink-800 before:absolute before:inset-0  before:backdrop-blur-[5px] before:z-[-1]">
            <li>
              <NavItem messege={"Home"} />
            </li>
            <li>
              <NavItem messege={"About"} />
            </li>
            <li>
              <NavItem messege={"Projects"} />
            </li>
            <li>
              <NavItem messege={"Contact"} />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
