import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import heroImage from "../assets/images/Hero/person.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, My Name is ALi Siahi",
      "<Software Engineer />",
      "<Web developer />",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <section id="home">
      <div className="min-h-screen relative flex flex-col justify-center items-center space-y-8 overflow-hidden">
        <BackGroundCircles />
        <img
          src={heroImage}
          alt="my photo"
          className="rounded-full h-36 w-36 mx-auto object-cover"
        />

        <h4 className="z-20 text-sm font-bold uppercase pb-2 sm:tracking-[15px] animate-pulse">
          Software Engineer
        </h4>
        <div className="z-20">
          <h2 className="text-4xl lg:text-5xl font-light px-10 tracking-tighter">
            <span className="mr-3">{text}</span>
            <Cursor />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
