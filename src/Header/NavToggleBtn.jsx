export default function NavToggleButton({ toggle }) {
  return (
    <label className="navToggleBtn">
      <input type="checkbox" className="peer" onClick={toggle} />
    </label>
  );
}
