import { Cursor, useTypewriter } from "react-simple-typewriter";
import { content } from "../Content";

const About = () => {
  const { about } = content;
  const [text] = useTypewriter({
    words: [
      "Hello, I am Ali Siahi, a software engineer with a strong background in Computer Engineering. My journey into the world of technology began with a Bachelor's degree in Computer Engineering and further enriched by an MBA in Information Technology. These experiences have equipped me with the perfect blend of technical and managerial skills. My passion lies in web development, particularly with React, and I'm continuously honing my skills through practical projects. My commitment to learning is reflected in my pursuit of knowledge in finance, investment management, and decentralized finance, as well as my dedication to improving my programming skills. As you explore my website, you'll discover my journey as a software engineer and my dedication to web development. Welcome to my world of technology and innovation!",
    ],
  });

  return (
    <section className="min-h-screen flex flex-col items-center">
      <h2 data-aos="fade-down" data-aos-once="true">
        {about.title}
      </h2>
      <div className="flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden mb-10">
        <img
          data-aos="fade-up"
          src={about.image}
          alt=""
          className="md:mb-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold mt-10">
            Here is a{" "}
            <span className="underline decoration-primary/50 ">little</span>{" "}
            background
          </h4>
          <p>
            <span className="mr-3">{text}</span>
            <Cursor />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
