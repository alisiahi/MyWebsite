import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s1a1qol",
        "template_iqbuxqf",
        form.current,
        "VsoRwXcqXBuZN3YtE"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email sent Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="min-h-screen flex flex-col items-center" id="contact">
      <Toaster />

      <h2 data-aos="fade-down" data-aos-once="true">
        {Contact.title}
      </h2>

      <div className="flex gap-10 md:gap-40 md:flex-row flex-col mb-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          data-aos-once="true"
          className="flex flex-1 flex-col gap-5"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="border border-slate-600 p-3 rounded"
          />
          <input
            type="email"
            name="user_email"
            // pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            placeholder="Email"
            required
            className="border border-slate-600 p-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border border-slate-600 p-3 rounded h-44"
            required
          ></textarea>
          <button className="self-start bg-primary/80 py-2 px-9 rounded-md rounded-br-3xl font-medium">
            Submit
          </button>
        </form>
        <div className="flex-1 flex flex-col gap-5">
          {Contact.social_media.map((content, i) => (
            <div
              key={i}
              data-aos="fade-down"
              data-aos-once="true"
              data-aos_delay={i * 400}
              className="flex items-center gap-2"
            >
              <h4 className="text-primary/80 animate-pulse">
                {createElement(content.icon)}
              </h4>
              <a
                href={content.link}
                target="_blank"
                className="font-Poppins"
                rel="noreferrer"
              >
                {content.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
