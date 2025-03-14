import NavItem from "./NavItem";
import { useState } from "react";
import NavToggleBtn from "./NavToggleBtn";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <ul className="hidden sm:flex  items-center gap-8 text-white text-xl font-montserrat-bold child-hover:text-primarycolor child-hover:transition-colors">
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
      <div className="block sm:hidden  relative">
        <NavToggleBtn toggle={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <ul className="w-44 h-40 text-white text-lg rounded-xl overflow-hidden child:text-center space-y-3 flex flex-col justify-center child:flex-center absolute top-14 right-0 border border-primarycolor bg-black transition-all duration-500">
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
