import NavItem from "./NavItem";
export default function Nav() {
  return (
    <nav>
      <ul className=" flex items-center gap-8 text-white text-xl font-montserrat-bold child-hover:text-pink-700 child-hover:transition-colors">
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
    </nav>
  );
}
