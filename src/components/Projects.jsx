import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
    background: "#393939",
  },
  overlay: {
    zIndex: 50,
  },
};

Modal.setAppElement("#root");

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-screen flex flex-col items-center" id="projects">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex flex-col gap-2 text-white">
          <img className="h-36 w-full" src={selectProject?.image} alt="..." />
          <h4 className="font-semibold text-xl">{selectProject?.title}</h4>
          <p>{selectProject?.explanation}</p>
          <div className="flex justify-between">
            <a
              href={selectProject?.live}
              className="bg-primary/80 py-2 px-9 rounded-md rounded-br-3xl font-semibold"
            >
              Live
            </a>
            <a
              href={selectProject?.github}
              className="bg-primary/80 py-2 px-9 rounded-md rounded-br-3xl font-semibold"
            >
              Github
            </a>
          </div>

          <div className="flex self-end">
            <button
              onClick={closeModal}
              className="bg-primary/80 py-2 px-9 rounded-md rounded-br-3xl font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <h2 data-aos="fade-down" data-aos-once="true">
        {Projects.title}
      </h2>

      <Swiper
        pagination={{ clickable: true }}
        data-aos="zoom-in-down"
        data-aos-once="true"
        spaceBetween={20}
        modules={[Pagination]}
        className="rounded-3xl pb-16 w-60 h-50 sm:w-[500px] sm:h-[400px] md:w-[700px] md:h-[400px] drop-shadow-lg self-start bg-[#393939] shadow-md shadow-primary/80 hover:shadow-lg hover:shadow-primary/80"
      >
        {Projects.project_content.map((project, i) => (
          <SwiperSlide key={i} className="rounded-3xl p-5 h-fit ">
            <div className="flex flex-col justify-between sm:gap-3 gap-5">
              <img
                src={project.image}
                alt=""
                className="w-50 h-40 sm:w-full sm:h-[300px] rounded-lg object-cover"
              />

              <div className=" flex flex-col sm:flex-row items-center gap-5  sm:gap-0 justify-around my-5">
                <h4 className="font-semibold text-xl">{project.title}</h4>
                <button
                  onClick={() => {
                    setSelectProject(project);
                    openModal();
                  }}
                  className="bg-primary/80 py-2 px-9 rounded-md rounded-br-3xl font-medium"
                >
                  READ MORE
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
