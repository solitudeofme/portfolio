export default function NavItem({ message, section }) {
  return (
    <>
      <a href={section} className="sm:relative nav-hover-effect">
        {message}
      </a>
    </>
  );
}
