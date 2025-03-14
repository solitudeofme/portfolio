export default function NavToggleButton({ toggle }) {
  return (
    <label className="navToggleBtn">
      <input type="checkbox" onClick={toggle} />
    </label>
  );
}
