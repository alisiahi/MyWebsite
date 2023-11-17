import { content } from "../Content";

const Skills = () => {
  const { skills } = content;
  return (
    <section className="min-h-screen flex flex-col items-center" id="skills">
      <h2 data-aos="fade-down" data-aos-once="true">
        {skills.title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mx-auto justify-center items-center p-5 ">
        {skills.skills_content.map((skill, i) => (
          <div
            data-aos={`${i % 2 === 0 ? "fade-right" : "fade-left"}`}
            key={i}
            className="relative group w-24 h-24 sm:cursor-pointer gap-5 p-5 rounded-full bg-[#393939] shadow-md shadow-primary/80 hover:shadow-lg hover:shadow-primary/80 flex items-center justify-center"
          >
            <img src={skill.logo} alt="..." />
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0 ">
              <div className="flex items-center justify-center h-full">
                <h4 className="text-3xl font-bold text-black opacity-100">
                  {skill.proficiency}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
