import ShinyText from "../../TextAnimations/ShinyText/ShinyText";
export default function ShinyTextBtn({ text, className }) {
  return (
    <button
      className={
        "w-max border border-white/10 rounded-3xl px-4 py-2 font-onest-medium text-center hover:bg-white/5 transition-colors cursor-pointer" +
        " " +
        className
      }
    >
      <ShinyText speed={1} text={text} className={"uppercase "} />
    </button>
  );
}
