import { Typewriter } from "react-simple-typewriter";
export default function Introdunction() {
  return (
    <div className="absolute space-y-3z top-30 left-1/5 sm:top-1/4 sm:left-[8%] w-[75%] sm:w-1/2 lg:w-1/3">
      <h2 className="text-primarycolor text-3xl sm:text-5xl font-montserrat-black">
        Hi I’m Niloufar.
      </h2>
      <h1 className="text-xl sm:text-3xl text-white font-montserrat-bold uppercase">
        <Typewriter
          words={[
            "Front-end developer",
            "React Enthusaist",
            "Javascript Wizard",
            "css artist",
          ]}
          cursor={true}
          loop={true}
        />
      </h1>
      <p className="text-white font-onest-semibold text-lg sm:text-2xl">
        Obsessed with details, always looking for the best approach—because
        “good enough” isn’t in my vocabulary. Deep into React, but I keep an eye
        on other front-end technologies too. Oh, and UI/UX? Let’s just say I
        won’t let my work dress badly.
      </p>
    </div>
  );
}
