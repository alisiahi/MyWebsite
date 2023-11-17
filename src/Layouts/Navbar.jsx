import { createElement, useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-full bg-slate-200/30 shadow-md shadow-primary/80 p-2"
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/30 px-6 py-3 backdrop-blur-sm rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            onClick={() => setActive(i)}
            key={i}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
              i === active && "bg-primary/80 text-white"
            } `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
