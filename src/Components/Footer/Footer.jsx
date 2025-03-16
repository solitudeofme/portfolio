export default function Footer() {
  return (
    <footer className="bg-white/5 h-18 flex-center mt-24">
      <div className="container flex-center">
        <p className="text-white/20 font-onest-medium">
          Coded By
          <a
            href="https://github.com/solitudeofme"
            target="_blank"
            className="uppercase text-primarycolor font-montserrat-black hover:text-primarycolordarker"
          >
            {" Nilou"}
          </a>
        </p>
      </div>
    </footer>
  );
}
